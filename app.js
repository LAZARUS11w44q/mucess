/* app.js — Muscess page logic (static, client-side) */
(function () {
  // Data sources
  const songs = window.MUSCESS_SONGS || [];
  const charts = window.MUSCESS_CHARTS || [];

  // Map chart info by song id
  const chartById = new Map(charts.map(c => [c.id, c]));

  function getSongById(id) {
    return songs.find(s => s.id === id);
  }

  // Build full chart rows with rank + lastWeek merged into the song object
  function getChartSongs() {
    return charts
      .slice()
      .sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999))
      .map((c) => {
        const s = getSongById(c.id);
        return s ? { ...s, rank: c.rank, lastWeek: c.lastWeek } : null;
      })
      .filter(Boolean);
  }

  function $(sel) { return document.querySelector(sel); }
  function $all(sel) { return Array.from(document.querySelectorAll(sel)); }

  function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, (m) => (
      {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]
    ));
  }

  function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  function setQueryParam(name, value) {
    const url = new URL(window.location.href);
    if (value == null || value === "") url.searchParams.delete(name);
    else url.searchParams.set(name, value);
    window.history.replaceState({}, "", url.toString());
  }

  function computeMovement(rank, lastWeek) {
    if (rank == null) return { moved: 0, arrow: '—' };
    if (lastWeek == null) return { moved: 0, arrow: '—' };
    const moved = lastWeek - rank;
    const arrow = moved > 0 ? '▲' : (moved < 0 ? '▼' : '•');
    return { moved, arrow };
  }

  /**
   * Render a list of songs.
   * Options:
   *  - showRank: boolean (default true)
   *  - showMove: boolean (default true)
   *  - rankFromCharts: boolean (default false) -> pull rank/lastWeek from MUSCESS_CHARTS
   */
  function renderChart(targetEl, list, options) {
    if (!targetEl) return;
    const opts = Object.assign({ showRank: true, showMove: true, rankFromCharts: false }, options || {});
    targetEl.innerHTML = "";

    list.forEach((song) => {
      const chartInfo = opts.rankFromCharts ? chartById.get(song.id) : null;
      const rank = chartInfo?.rank ?? song.rank;
      const lastWeek = chartInfo?.lastWeek ?? song.lastWeek;
      const { arrow } = computeMovement(rank, lastWeek);

      const row = document.createElement('a');
      row.className = 'chart-row';
      row.href = `song.html?id=${encodeURIComponent(song.id)}`;
      row.innerHTML = `
        <div class="rank">${opts.showRank ? escapeHtml(rank ?? '—') : ''}</div>
        <div class="move" aria-label="movement">${opts.showMove ? escapeHtml(arrow) : ''}</div>
        <div class="cover"><img src="${escapeHtml(song.cover)}" alt="Cover art"></div>
        <div class="song-info">
          <p class="title">${escapeHtml(song.title)}</p>
          <p class="artist">${escapeHtml(song.artist)}</p>
        </div>
      `;
      targetEl.appendChild(row);
    });

    if (list.length === 0) {
      const empty = document.createElement('div');
      empty.className = "empty-state";
      empty.textContent = "No results.";
      targetEl.appendChild(empty);
    }
  }

  function uniqueArtists() {
    
    const map = new Map();
    songs.forEach((s) => {
      const id = s.artistId || String(s.artist || "").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
      if (!map.has(id)) {
        map.set(id, {
          id,
          name: s.artist || "Unknown",
          avatar: s.cover, 
          bio: `Artist page for ${s.artist || "Unknown"}. .`
        });
      }
    });
    return Array.from(map.values()).sort((a,b)=>a.name.localeCompare(b.name));
  }

  function renderArtistsGrid(targetEl, artists) {
    if (!targetEl) return;
    targetEl.innerHTML = "";
    artists.forEach((a) => {
      const card = document.createElement("a");
      card.className = "artist-card";
      card.href = `artist.html?id=${encodeURIComponent(a.id)}`;
      card.innerHTML = `
        <div class="artist-card-top">
          <div class="artist-bubble" style="background-image:url('${escapeHtml(a.avatar)}')"></div>
          <div class="artist-card-text">
            <p class="artist-name">${escapeHtml(a.name)}</p>
            <p class="muted small">View songs →</p>
          </div>
        </div>
      `;
      targetEl.appendChild(card);
    });

    if (artists.length === 0) {
      const empty = document.createElement('div');
      empty.className = "empty-state";
      empty.textContent = "No artists found.";
      targetEl.appendChild(empty);
    }
  }

  // Global search in navbar: Enter redirects to search page
  $all("input.global-search").forEach((inp) => {
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const q = inp.value.trim();
        if (q) window.location.href = `search.html?q=${encodeURIComponent(q)}`;
        else window.location.href = "search.html";
      }
    });
    // If already on search page, don't fight the big input
    if (window.location.pathname.endsWith("search.html")) {
      inp.placeholder = "Search on this page…";
    }
  });

  // Charts: render any .chart on any page
  $all(".chart").forEach((chartDiv) => {
    // Don't auto-render special charts that have explicit ids (we render them elsewhere)
    if (chartDiv.id === "artistSongs" || chartDiv.id === "searchSongs") return;

    // IMPORTANT: charts & home previews should only show items listed in MUSCESS_CHARTS
    const chartSongs = getChartSongs();
    const max = Number(chartDiv.dataset.max || 25);
    renderChart(chartDiv, chartSongs.slice(0, Math.min(max, chartSongs.length)), { showRank: true, showMove: true });
  });

  // Home featured card (index.html)
  const featuredCover = $("#featuredCover");
  if (featuredCover) {
    const top = getChartSongs()[0] || songs[0];
    if (top) {
      featuredCover.src = top.cover;
      $("#featuredTitle").textContent = top.title;
      $("#featuredArtist").textContent = top.artist;
      $("#featuredLink").href = `song.html?id=${encodeURIComponent(top.id)}`;
    }
  }

  // Song page
  const titleEl = $("#title");
  const coverEl = $("#cover");
  if (titleEl && coverEl) {
    const id = getQueryParam("id") || songs[0]?.id;
    const idx = Math.max(0, songs.findIndex(s => s.id === id));
    const song = songs[idx] || songs[0];

    if (!song) {
      titleEl.textContent = "Song not found";
    } else {
      document.title = `${song.title} – ${song.artist} | Muscess`;
      coverEl.src = song.cover;
      titleEl.textContent = song.title;

      const artistLink = $("#artistLink");
      if (artistLink) {
        const artistId = song.artistId || String(song.artist || "").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
        artistLink.textContent = song.artist;
        artistLink.href = `artist.html?id=${encodeURIComponent(artistId)}`;
      }

      const metaEl = $("#meta");
      if (metaEl) {
        const album = song.album ? `Album: ${song.album}` : "";
        const date = song.releaseDate ? `Released: ${song.releaseDate}` : "";
        metaEl.textContent = [album, date].filter(Boolean).join(" • ");
      }

      const lyricsEl = $("#lyrics");
      if (lyricsEl) {
        lyricsEl.textContent = (song.lyrics || ["[No lyrics available]"]).join("\n");
      }

      const next = songs[(idx + 1) % songs.length];
      const nextBtn = $("#nextSong");
      if (nextBtn && next) {
        nextBtn.href = `song.html?id=${encodeURIComponent(next.id)}`;
      }
    }
  }

  // Artists page
  const artistsGrid = $("#artistsGrid");
  if (artistsGrid) {
    renderArtistsGrid(artistsGrid, uniqueArtists());
  }

  // Artist page
  const artistName = $("#artistName");
  if (artistName) {
    const id = getQueryParam("id");
    const artists = uniqueArtists();
    const artist = artists.find(a => a.id === id) || artists.find(a => a.name === id) || artists[0];

    if (artist) {
      document.title = `${artist.name} | Muscess`;
      artistName.textContent = artist.name;
      $("#artistBio").textContent = artist.bio;

      const avatar = $("#artistAvatar");
      if (avatar) {
        avatar.style.backgroundImage = `url('${artist.avatar}')`;
      }

      const list = songs.filter((s) => (s.artistId || "") === artist.id || (s.artist || "") === artist.name);
      // Artist profile: show songs without chart ranks/arrows
      renderChart($("#artistSongs"), list, { showRank: false, showMove: false });
    }
  }

  // Search page
  const searchInput = $("#searchInput");
  if (searchInput) {
    const artistsAll = uniqueArtists();
    const songsEl = $("#searchSongs");
    const artistsEl = $("#searchArtists");

    const initial = getQueryParam("q") || "";
    searchInput.value = initial;

    function runSearch(q) {
      const query = q.trim().toLowerCase();

      // songs
      const songResults = !query ? songs.slice(0, 25) : songs.filter((s) =>
        (s.title || "").toLowerCase().includes(query) ||
        (s.artist || "").toLowerCase().includes(query) ||
        (s.album || "").toLowerCase().includes(query)
      ).slice(0, 50);
      // Search: show chart ranks only for songs that are actually in MUSCESS_CHARTS
      renderChart(songsEl, songResults, { showRank: true, showMove: true, rankFromCharts: true });

      // artists
      const artistResults = !query ? artistsAll : artistsAll.filter((a) =>
        (a.name || "").toLowerCase().includes(query)
      );
      renderArtistsGrid(artistsEl, artistResults);

      setQueryParam("q", q ? q : "");
    }

    runSearch(initial);

    searchInput.addEventListener("input", () => {
      runSearch(searchInput.value);
    });
  }
})();
