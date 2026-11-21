/*
 * ============================================================
 *  WEDDING INVITATION — EDIT EVERYTHING HERE
 * ============================================================
 *  - Change any text, name, date, venue, link or colour below.
 *  - Images: put your files in the "images" folder and write the
 *    path, e.g.  "images/hero.jpg".  Leave "" to use the built-in
 *    illustration instead.
 *  - Set any section's "show" to false to hide it.
 *  - Save the file and refresh index.html in the browser.
 * ============================================================
 */
window.INVITATION = {
  /* Browser tab title and page language */
  pageTitle: "Pratik & Isha — Wedding Invitation",
  lang: "en",

  /* Language switch shown in the top-left corner (remove an entry to hide it) */
  languages: [
    { label: "English", href: "index.html" },
    { label: "ગુજરાતી", href: "index-gu.html" }
  ],

  /* Footer — the year is added automatically */
  footer: {
    show: true,
    copyrightName: "Pratik & Isha",
    poweredText: "Powered and secured by {brand}.",
    brand: "PRISHA"
  },

  /* Theme colours */
  colors: {
    maroon: "#6E1C27",      // main deep red
    maroonDark: "#4E1119",  // darker red for shadows / sections
    gold: "#C9A24A",        // gold accents and text on maroon
    goldLight: "#EED9A0",
    cream: "#F7F2E8",       // page background
    rose: "#E7A3B1",        // flowers and lotus
    leaf: "#7C9A6B",        // leaves
    ink: "#3B2A26"          // body text on cream
  },

  /* Background music (optional). Example: "images/shehnai.mp3" */
  music: "images/bg-song.mp3",

  /* ---------- 1. Opening cover (doors) ---------- */
  cover: {
    show: true,
    logoImage: "",                 // e.g. "images/ganesha.png" (leave "" for built-in symbol)
    logoSymbol: "ॐ",               // used when logoImage is empty
    blessing: "श्री गणेशाय नमः",
    message: "We cordially invite you to grace the auspicious occasion of the marriage of...",
    buttonText: "Tap to open",
    elephantImage: "",             // optional custom elephant art (used everywhere elephants appear)
    flowerImage: ""                // optional custom flower sprig art
  },

  /* ---------- 2. Hero ---------- */
  hero: {
    show: true,
    brideName: "Pratik",
    groomName: "Isha",
    joiner: "&",
    backgroundImage: ""            // e.g. "images/mandap.jpg"
  },

  /* ---------- 3. Family scrolls ---------- */
  families: {
    show: true,
    people: [
      {
        title: "Chi. Pratik",
        relation: "Son of",
        parents: ["Shri. Sureshbhai Bavchandbhai Usadadiya", "Smt. Dakshaben Sureshbhai Usadadiya"],
        grandRelation: "Grandson of",
        grandparents: ["Late Shri. Krishnalal Sharma", "Late Smt. Rukhmini Sharma"]
      },
      {
        title: "Chi. Isha",
        relation: "Daughter of",
        parents: ["Shri. Shaileshbhai Babubhai Padsala", "Smt. Parulben Shaileshbhai Padsala"],
        grandRelation: "Granddaughter of",
        grandparents: ["Late Shri Hari Prasad Verma", "Late Smt. Shanti Devi Verma"]
      }
    ]
  },

  /* ---------- 4. Save the date ---------- */
  saveTheDate: {
    show: true,
    labels: { day: "Date", month: "Month", year: "Year" },
    day: "12",
    month: "DEC",
    year: "2026",
    buttonText: "Reveal the Date",
    afterRevealText: "Save the Date",
    // Optional: names shown while the month reel spins (defaults to JAN–DEC)
    monthNames: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  },

  /* ---------- 5. Venue picture ---------- */
  venue: {
    show: true,
    image: ""                      // e.g. "images/venue.jpg"
  },

  /* ---------- 6. Our story (hanging frames) ---------- */
  story: {
    show: true,
    // type "photo": image + caption   |   type "text": a short note
    frames: [
      { type: "photo", image: "images/1.png", caption: "#howitstarted" },
      { type: "text", text: "Some stories begin with grand gestures. Ours started with a simple conversation." },
      { type: "photo", image: "images/2.jpg", caption: "#adventures" },
      { type: "text", text: "Friendship grew into something more, and we realized life's best moments were the ones we shared together." },
      { type: "photo", image: "images/3.jpg", caption: "#thelittlethings" }
    ]
  },

  /* ---------- 7. Ceremonies ---------- */
  ceremonies: {
    show: true,
    heading: "Ceremonies",
    events: [
      { name: "Mandap",   venue: "Rudraksh Party Plot, Surat.", mapLink: "https://maps.app.goo.gl/Qk6Yjz8geCUaD9Hb6", date: "Fri, 11 Dec 2026", time: "01:00 PM", image: "" },
      { name: "Haldi",     venue: "Rudraksh Party Plot, Surat.", mapLink: "https://maps.app.goo.gl/Qk6Yjz8geCUaD9Hb6", date: "Fri, 11 Dec 2026", time: "3:00 PM",  image: "images/haldi.png" },
      { name: "Sangeet",   venue: "Rudraksh Party Plot, Surat.", mapLink: "https://maps.app.goo.gl/Qk6Yjz8geCUaD9Hb6", date: "Fri, 11 Dec 2026", time: "8:00 PM",  image: "images/sangeet.png" },
      { name: "Baarat Begin",    venue: "Mayur Motors, Canal road, Surat.", mapLink: "https://maps.app.goo.gl/5bQri465XPbAqst5A", date: "Sat, 12 Dec 2026", time: "3:00 PM",  image: "images/baarat.png" },
      { name: "Wedding",    venue: "Rudraksh Party Plot, Surat.", mapLink: "https://maps.app.goo.gl/Qk6Yjz8geCUaD9Hb6", date: "Sat, 12 Dec 2026", time: "6:30 PM",  image: "images/wedding.png" }
    ]
  },

  /* ---------- 8. Best compliments ---------- */
  compliments: {
    show: true,
    heading: "With Best Compliments From:",
    names: [
      "Shri Sureshbhai Bavchandbhai Usadadiya & Family",
      "Smt. Mahesh & Nimesh Vekariya & Family (Bhanej)",
      "Shri Sureshbhai Chodavadiya & Family (Mama-Mami)"
    ]
  },

  /* ---------- 9. Things to note ---------- */
  notes: {
    show: false,
    heading: "Things to Note",
    items: [
      "Complimentary valet parking is available at the main entrance of The Grand Oak Estate for our wedding day."
    ]
  },

  /* ---------- 10. Quick links ---------- */
  links: {
    show: true,
    instagramUrl: "https://www.instagram.com/itsallaboutprisha/",
    instagramPopup: {
      title: "Follow the Couple",
      message: "Would you like to open the couple's Instagram page?",
      confirmText: "Open Instagram",
      cancelText: "Not now"
    },
    mapUrl: "https://maps.app.goo.gl/Qk6Yjz8geCUaD9Hb6"
    // The calendar button downloads this event (.ics file)
    // calendar: {
    //   title: "Pratik & Isha — Wedding",
    //   start: "2026-12-12T19:00:00",   // local time, YYYY-MM-DDTHH:MM:SS
    //   end: "2026-12-12T23:59:00",
    //   location: "Rudraksh Party Plot, Surat."
    // }
  },

  /* ---------- 11. Closing ---------- */
  closing: {
    show: true,
    message: "Your Presence Means the World to Us",
    backgroundImage: ""            // e.g. "images/palace-sunset.jpg"
  }
};
