/*
 * ============================================================
 *  ગુજરાતી લગ્ન નિમંત્રણ — બધું અહીંથી બદલો
 *  GUJARATI WEDDING INVITATION — EDIT EVERYTHING HERE
 * ============================================================
 *  - Change any text, name, date, venue, link or colour below.
 *  - Images: put files in the "images" folder and write the path,
 *    e.g. "images/hero.jpg". Leave "" for the built-in illustration.
 *  - Set any section's "show" to false to hide it.
 *  - Save and refresh index-gu.html in the browser.
 * ============================================================
 */
window.INVITATION = {
  pageTitle: "અદિતિ & રાહુલ — લગ્ન નિમંત્રણ",
  lang: "gu",

  languages: [
    { label: "English", href: "index.html" },
    { label: "ગુજરાતી", href: "index-gu.html" }
  ],

  footer: {
    show: true,
    copyrightName: "અદિતિ & રાહુલ",
    poweredText: "Powered and secured by {brand}.",
    brand: "PRISHA"
  },

  colors: {
    maroon: "#6E1C27",
    maroonDark: "#4E1119",
    gold: "#C9A24A",
    goldLight: "#EED9A0",
    cream: "#F7F2E8",
    rose: "#E7A3B1",
    leaf: "#7C9A6B",
    ink: "#3B2A26"
  },

  music: "",

  /* ---------- 1. પ્રવેશ (Cover) ---------- */
  cover: {
    show: true,
    logoImage: "",
    logoSymbol: "ૐ",
    blessing: "શ્રી ગણેશાય નમઃ",
    message: "અમારા શુભ લગ્ન પ્રસંગે પધારી આશીર્વાદ આપવા આપને ભાવભર્યું આમંત્રણ...",
    buttonText: "ખોલવા માટે ટેપ કરો",
    elephantImage: "",
    flowerImage: ""
  },

  /* ---------- 2. વર-કન્યા (Hero) ---------- */
  hero: {
    show: true,
    brideName: "અદિતિ",
    groomName: "રાહુલ",
    joiner: "&",
    backgroundImage: ""
  },

  /* ---------- 3. પરિવાર (Family scrolls) ---------- */
  families: {
    show: true,
    people: [
      {
        title: "ચિ. રાહુલ શર્મા",
        relation: "સુપુત્ર",
        parents: ["શ્રી જીતેન્દ્ર શર્મા", "શ્રીમતી અંજના ભાવનાની"],
        grandRelation: "સુપૌત્ર",
        grandparents: ["સ્વ. શ્રી કૃષ્ણલાલ શર્મા", "સ્વ. શ્રીમતી રુક્મિણી શર્મા"]
      },
      {
        title: "ચિ. અદિતિ વર્મા",
        relation: "સુપુત્રી",
        parents: ["શ્રી રાજેશકુમાર વર્મા", "શ્રીમતી મીરા વર્મા"],
        grandRelation: "સુપૌત્રી",
        grandparents: ["સ્વ. શ્રી હરિપ્રસાદ વર્મા", "સ્વ. શ્રીમતી શાંતિદેવી વર્મા"]
      }
    ]
  },

  /* ---------- 4. શુભ તારીખ (Save the date) ---------- */
  saveTheDate: {
    show: true,
    labels: { day: "તારીખ", month: "મહિનો", year: "વર્ષ" },
    day: "૧૧",
    month: "ઓક્ટો",
    year: "૨૦૨૬",
    buttonText: "તારીખ જાણો",
    afterRevealText: "આ તારીખ યાદ રાખજો",
    // Gujarati digits 0–9, used while the reel spins
    digits: "૦૧૨૩૪૫૬૭૮૯",
    monthNames: ["જાન્યુ", "ફેબ્રુ", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઓગસ્ટ", "સપ્ટે", "ઓક્ટો", "નવે", "ડિસે"]
  },

  /* ---------- 5. સ્થળ (Venue picture) ---------- */
  venue: {
    show: true,
    image: ""
  },

  /* ---------- 6. અમારી વાર્તા (Story frames) ---------- */
  story: {
    show: true,
    frames: [
      { type: "photo", image: "", caption: "#શરૂઆત" },
      { type: "text", text: "કેટલીક વાર્તાઓ મોટા વચનોથી શરૂ થાય છે. અમારી વાર્તા એક સાદી વાતચીતથી શરૂ થઈ." },
      { type: "photo", image: "", caption: "#સફર" },
      { type: "text", text: "મિત્રતા ધીમે ધીમે પ્રેમમાં બદલાઈ, અને સમજાયું કે જીવનની શ્રેષ્ઠ પળો એ જ છે જે અમે સાથે વિતાવી." },
      { type: "photo", image: "", caption: "#નાનીખુશીઓ" }
    ]
  },

  /* ---------- 7. શુભ પ્રસંગો (Ceremonies) ---------- */
  ceremonies: {
    show: true,
    heading: "શુભ પ્રસંગો",
    events: [
      { name: "મહેંદી",  venue: "શર્મા નિવાસ, જયપુર", mapLink: "https://maps.google.com/?q=Jaipur", date: "શનિ, ૧૦ ઓક્ટો ૨૦૨૬", time: "સવારે ૧૧:૦૦", image: "" },
      { name: "પીઠી",    venue: "શર્મા નિવાસ, જયપુર", mapLink: "https://maps.google.com/?q=Jaipur", date: "શનિ, ૧૦ ઓક્ટો ૨૦૨૬", time: "સાંજે ૪:૦૦",  image: "" },
      { name: "સંગીત સંધ્યા", venue: "શર્મા નિવાસ, જયપુર", mapLink: "https://maps.google.com/?q=Jaipur", date: "શનિ, ૧૦ ઓક્ટો ૨૦૨૬", time: "સાંજે ૭:૩૦",  image: "" },
      { name: "હસ્તમેળાપ", venue: "શર્મા નિવાસ, જયપુર", mapLink: "https://maps.google.com/?q=Jaipur", date: "રવિ, ૧૧ ઓક્ટો ૨૦૨૬", time: "રાત્રે ૮:૦૦",  image: "" },
      { name: "સ્વાગત સમારંભ", venue: "શર્મા નિવાસ, જયપુર", mapLink: "https://maps.google.com/?q=Jaipur", date: "સોમ, ૧૨ ઓક્ટો ૨૦૨૬", time: "રાત્રે ૮:૦૦",  image: "" }
    ]
  },

  /* ---------- 8. સ્નેહાધીન (Best compliments) ---------- */
  compliments: {
    show: true,
    heading: "સ્નેહાધીન:",
    names: [
      "શ્રી સુરેશ શર્મા અને પરિવાર (કાકા-કાકી)",
      "શ્રી મનોજ શર્મા અને પરિવાર (મોટા બાપુ-મોટા બા)",
      "શ્રીમતી આશા ગુપ્તા અને પરિવાર (ફોઈ)",
      "શ્રી રાજેન્દ્ર મહેતા અને પરિવાર (મામા-મામી)"
    ]
  },

  /* ---------- 9. ખાસ નોંધ (Things to note) ---------- */
  notes: {
    show: true,
    heading: "ખાસ નોંધ",
    items: [
      "લગ્નના દિવસે ધ ગ્રાન્ડ ઓક એસ્ટેટના મુખ્ય પ્રવેશદ્વાર પર નિઃશુલ્ક વેલે પાર્કિંગની સુવિધા ઉપલબ્ધ છે."
    ]
  },

  /* ---------- 10. લિંક્સ (Quick links) ---------- */
  links: {
    show: true,
    instagramUrl: "https://instagram.com/",
    instagramPopup: {
      title: "દંપતીને ફોલો કરો",
      message: "શું આપ દંપતીનું ઇન્સ્ટાગ્રામ પેજ ખોલવા માંગો છો?",
      confirmText: "ઇન્સ્ટાગ્રામ ખોલો",
      cancelText: "હમણાં નહીં"
    },
    mapUrl: "https://maps.google.com/?q=Jaipur",
    calendar: {
      title: "અદિતિ & રાહુલ — લગ્ન",
      start: "2026-10-11T20:00:00",   // keep English digits here: YYYY-MM-DDTHH:MM:SS
      end: "2026-10-11T23:59:00",
      location: "શર્મા નિવાસ, જયપુર"
    }
  },

  /* ---------- 11. સમાપન (Closing) ---------- */
  closing: {
    show: true,
    message: "આપની હાજરી અમારા માટે અમૂલ્ય છે",
    backgroundImage: ""
  }
};
