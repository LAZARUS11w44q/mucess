/* data.js — MUSCESS demo data
   - MUSCESS_SONGS: all songs (artist pages, search, song pages)
   - MUSCESS_CHARTS: chart order + movement (charts + home preview)
*/

// 1) All songs (NO ranks here)
window.MUSCESS_SONGS = [
  // Daniel Caesar
  {
    id: "baby-blue",
    cover: "https://images.genius.com/84e990d63db19162ba67df16bb74f30c.1000x1000x1.jpg",
    title: "Baby Blue",
    artist: "Daniel Caesar",
    artistId: "daniel-caesar",
    album: "Son of Spergy",
    releaseDate: "2025-10-29",
    lyrics: [
      "Baby Blue (feat. Norwill Simmonds)",
      "Baby Blue",
      "I'm privileged to know you",
      "And from this point on",
      "Your delight is my delight",
      "Baby Blue",
"I like your eyes, they sparkle",
"You found me in a dark hole",
"But now I know, you're my light",
"You oversee o'er all of me, you do",
"It's true",
"The heavens above, they suit you",
"I'm glad you pree'd my energy",
"It's much like yours, be assured",
"So many colours to choose from",
"You chose blue",
"So many people to choose from",
"I choose you, you",
"(La La La La La La La La La La",
"La La La La La La La",
"La La La Ouu",
"La La La Ouu)",

    ]
  },
  // Profile-only (won't show on charts unless added to MUSCESS_CHARTS)
  {
    id: "get-you",
    cover: "https://images.genius.com/ce4692d30184221a80a16e89e4955d87.831x831x1.jpg",
    title: "Get You",
    artist: "Daniel Caesar",
    artistId: "daniel-caesar",
    album: "Freudian",
    releaseDate: "2017-08-25",
    lyrics: ["[Demo lyrics placeholder]"]
  },
  {
    id: "best-part",
    cover: "https://images.genius.com/ce4692d30184221a80a16e89e4955d87.831x831x1.jpg",
    title: "Best Part",
    artist: "Daniel Caesar ft. H.E.R.",
    artistId: "daniel-caesar",
    album: "Freudian",
    releaseDate: "2017-08-25",
    lyrics: ["[Demo lyrics placeholder]"]
  },
  {
    id: "hold-me",
    cover: "https://images.genius.com/ce4692d30184221a80a16e89e4955d87.831x831x1.jpg",
    title: "Hold Me Down",
    artist: "Daniel Caesar",
    artistId: "daniel-caesar",
    album: "Freudian",
    releaseDate: "2017-08-25",
    lyrics: [
      "[Demo lyrics placeholder]"]
  },
  {
    id: "loose",
    cover: "https://images.genius.com/ce4692d30184221a80a16e89e4955d87.831x831x1.jpg",
    title: "Loose",
    artist: "Daniel Caesar ",
    artistId: "daniel-caesar",
    album: "Freudian",
    releaseDate: "2017-08-25",
    lyrics: ["[Demo lyrics placeholder]"]
  },
 

  // Giveon (profile-only unless charted)
  {
    id: "keep-per",
    cover: "https://tse4.mm.bing.net/th/id/OIP.58qitjf640_NqfwKvapXJQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Keeper",
    artist: "Giveon",
    artistId: "give-on",
    album: "Beloved",
    releaseDate: "2025-07-07",
    lyrics: ["[Demo lyrics placeholder]"]
  },

  // Giveon
  {
    id: "dont-leave",
    cover: "https://tse4.mm.bing.net/th/id/OIP.58qitjf640_NqfwKvapXJQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Don't Leave",
    artist: "Giveon",
    artistId: "give-on",
    album: "BeLoved",
    releaseDate: "2025-07-07",
    lyrics: [
      "You've been working my nerves",
"Second-guessing who was right first",
"All this energy on something minor, mm",
"Can you hear me out?",
"Smiling while you're testing me",
"That's our love",
"Can hardly get the best of me",
"I'm calling you",
"Cause, girl, I need it",
"I need your tension with urgency",
"Late at night",
"Never on time, but you make it right",
"Whenever I try let you have your way",
"And still won't say, at the end of the day",
"I'm still up for the chase",
"Don't leave me behind",
"Acting tough on me won't get you what you need",
"Not too much for me (yeah), we were meant to be (oh-oh-oh)",
"Don't leave me behind",
"Acting tough on me won't get you what you need",
"Not too much for me (yeah), we were meant to be",
"Don't leave me behind"]

  },

  // Nine Vicious
  {
    id: "ri-ri",
    cover: "https://images.genius.com/b4e8d730b36b178b547ea82fde95b048.1000x1000x1.jpg",
    title: "RiRi",
    artist: "Nine Vicious",
    artistId: "nine",
    album: "B4EM",
    releaseDate: "2026-01-31",
    lyrics: [
    "(We in this—, ro-ro—)",
"(Rockin' with, rockin' with Patrick)",

"Told shawty, Just go ahead and put in that work (Put in that work, put it)",
"She throw it back for a young nigga, she like to twerk (Oh, oh)",
"She talk too much, lil' bitch (Say what?), I don't like to flirt (What? What? What?)",
"I'm a bad bitch too, lil' bitch, we both go skirts (Bitch, me too)",

"I feel all these hits up in my soul (Say what?)",
"Make all my brothers rich, that's my goal (That's my goal)",
"No, I can never switch on my bros",
"Had to fuck on your bitch, on the low (Say what? Ha, ha)",
"Sing to me, baby (Let' go), just sing to me, baby (Just sing to me, baby), yeah",
"Too many flows (Too many flows), too many flows, like the '80s (Say what?), hold up",
"Too many flows (I bet ya), my flow crack like the '80s, ayy",
"I got the dough (I got the dough), I'm finna push it on your face (On God)",
"Too many hoes (And what?), tryna come suck me all day (Say what?)",
"They movin' slow (Ayy), told these niggas, better up they pace",
"You a lil' ho (You a lil' ho), run in your crib, give a fuck 'bout your place (Okay, okay)",

"Told shawty, Just go ahead and put in that work (Put in that work. put it)",
"She throw it back for a young nigga, she like to twerk (Oh, oh)",
"She talk too much, lil' bitch (Say what?), I don't like to flirt (What? What? What?)",
"I'm a bad bitch too, lil' bitch, we both go skirts (Bitch, me too)"
    ]
  },

  // Slayr
  {
    id: "never-down",
    cover: "https://images.genius.com/2fc669dc4de7f22fb8f1b76cd9674a55.1000x1000x1.png",
    title: "Never Go Down",
    artist: "slayr",
    artistId: "slayr",
    album: "Half Blood",
    releaseDate: "2025-11-05",
    lyrics: [
  
"Woah, woah (Woah, woah, woah)",
"​wa (Ha-ha-ha-ha-ha; let's go)",

"With your bitch on a boat like Cody",
"Call me broke, I don't think that you know me (Yeah, uh-huh)",
"Feelin' like the man today, Lil Mosey (Yeah, yeah; what?)",
"I don't give a fuck what she send, don't expose (Uh, uh)",
"Twin like me, he want all smoke (Woah, woah)",
"Twin like me, he get that dough (Woah, woah)",
"Out of my reach, no such thing, ho (Woah, let's go)",
"Slay never back down from a foe (Yeah)",
"She wanna top me, yeah, give throat (Yeah)",
"Know a couple hoes that'll float my boat (Huh, yeah)",
"On my LeBron shit, feel like the GOAT (Yeah)",
"I will nеver stop rhymin', you better takе notes (Bitch, no way)",
"Yeah, all of my songs got a quote (Got a quote)",
"2028, I'm gonna be president then (Yeah)",
"I don't even need your vote (Don't even need your vote)",
    ]
  },

  // M.I.A.
  {
    id: "paper-planes",
    cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    title: "Paper Planes",
    artist: "M.I.A.",
    artistId: "mia",
    album: "Demo",
    releaseDate: "2025-10-01",
    lyrics: ["[Demo lyrics placeholder]"]
  },

  // MGMT
  {
    id: "electric-feel",
    cover: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5d16?auto=format&fit=crop&w=600&q=80",
    title: "Electric Feel",
    artist: "MGMT",
    artistId: "mgmt",
    album: "Demo",
    releaseDate: "2025-09-10",
    lyrics: ["[Demo lyrics placeholder]"]
  },

  // Duke Dumont
  {
    id: "ocean-drive",
    cover: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=600&q=80",
    title: "Ocean Drive",
    artist: "Duke Dumont",
    artistId: "duke-dumont",
    album: "Demo",
    releaseDate: "2025-08-07",
    lyrics: ["[Demo lyrics placeholder]"]
  },

  // Post Malone
  {
    id: "sunflower",
    cover: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80",
    title: "Sunflower",
    artist: "Post Malone",
    artistId: "post-malone",
    album: "Demo",
    releaseDate: "2025-07-21",
    lyrics: ["[Demo lyrics placeholder]"]
  },

  // Muse
  {
    id: "starlight",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80",
    title: "Starlight",
    artist: "Muse",
    artistId: "muse",
    album: "Demo",
    releaseDate: "2025-06-30",
    lyrics: ["[Demo lyrics placeholder]"]
  },

  // Kanye West
  {
    id: "city-lights",
    cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    title: "City Lights",
    artist: "Kanye West",
    artistId: "kanye-west",
    album: "Demo",
    releaseDate: "2025-05-18",
    lyrics: ["[Demo lyrics placeholder]"]
  }
];

// 2) Chart entries only (controls what appears on charts + home preview)
window.MUSCESS_CHARTS = [
  { id: "baby-blue", rank: 1, lastWeek: 3 },
  { id: "dont-leave", rank: 2, lastWeek: 2 },
  { id: "loose", rank: 3, lastWeek: 6 },
  { id: "ri-ri", rank: 4, lastWeek: 4 },
  { id: "never-down", rank: 5, lastWeek: 1 },
  { id: "electric-feel", rank: 6, lastWeek: 9 },
  { id: "ocean-drive", rank: 7, lastWeek: 7 },
  { id: "sunflower", rank: 8, lastWeek: 12 },
  { id: "starlight", rank: 9, lastWeek: 10 },
  { id: "city-lights", rank: 10, lastWeek: 8 }
];
