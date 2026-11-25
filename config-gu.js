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
  pageTitle: "પ્રતિક & ઈશા — શુભ લગ્ન આમંત્રણ",
  lang: "gu",

  languages: [
    { label: "English", href: "index.html" },
    { label: "ગુજરાતી", href: "index-gu.html" }
  ],

  footer: {
    show: true,
    copyrightName: "પ્રતિક & ઈશા",
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
    blessing: "॥ શ્રી ગણેશાય નમઃ ॥",
    message: "અમારા શુભ લગ્ન પ્રસંગે પધારી આશીર્વાદ આપવા આપને ભાવભર્યું આમંત્રણ...",
    buttonText: "કંકોત્રી ખોલો",
    elephantImage: "",
    flowerImage: ""
  },

  /* ---------- 2. વર-કન્યા (Hero) ---------- */
  hero: {
    show: true,
    brideName: "પ્રતિક",
    groomName: "ઈશા",
    joiner: "સંગ",
    backgroundImage: ""
  },

  /* ---------- 3. પરિવાર (Family scrolls) ---------- */
  families: {
    show: true,
    people: [
      {
        title: "ચિ. પ્રતિક",
        relation: "સુપુત્ર",
        parents: ["શ્રી સુરેશભાઈ બાવચંદભાઈ ઉસદડીયા", "શ્રીમતી દક્ષાબેન સુરેશભાઈ ઉસદડીયા"],
        grandRelation: "સુપૌત્ર",
        grandparents: ["સ્વ. શ્રી કૃષ્ણલાલ શર્મા", "સ્વ. શ્રીમતી રુક્મિણી શર્મા"]
      },
      {
        title: "ચિ. ઈશા",
        relation: "સુપુત્રી",
        parents: ["શ્રી શૈલેષભાઈ બાબુભાઈ પડસાળા", "શ્રીમતી પારુલબેન શૈલેષભાઈ પડસાળા"],
        grandRelation: "સુપૌત્રી",
        grandparents: ["સ્વ. શ્રી હરિપ્રસાદ વર્મા", "સ્વ. શ્રીમતી શાંતિદેવી વર્મા"]
      }
    ]
  },

  /* ---------- 4. શુભ તારીખ (Save the date) ---------- */
  saveTheDate: {
    show: true,
    labels: { day: "તારીખ", month: "મહિનો", year: "વર્ષ" },
    day: "૧૨",
    month: "ડિસેમ્બર",
    year: "૨૦૨૬",
    buttonText: "તારીખ જાણો",
    afterRevealText: "આ શુભ દિવસ યાદ રાખજો",
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
      { type: "photo", image: "images/1.png", caption: "#શરૂઆત" },
      { type: "text", text: "કેટલીક પ્રેમકથાઓ ભવ્ય પ્રસંગોથી શરૂ થાય છે, પરંતુ અમારી પ્રેમગાથાની શરૂઆત એક નાનકડી વાતચીતથી થઈ હતી." },
      { type: "photo", image: "images/2.jpg", caption: "#સફર" },
      { type: "text", text: "મિત્રતા ધીમે ધીમે પ્રેમમાં પરિણમી અને સમજાયું કે જીવનની સૌથી સુંદર ક્ષણો એ જ છે, જે અમે એકબીજા સાથે વિતાવી છે." },
      { type: "photo", image: "images/3.jpg", caption: "#નાનકડીમીઠીયાદો" }
    ]
  },

  /* ---------- 7. મંગલ પ્રસંગો (Ceremonies) ---------- */
  ceremonies: {
    show: true,
    heading: "મંગલ પ્રસંગો",
    events: [
      {
        name: "મંડપ મુહૂર્ત",
        venue: "રુદ્રાક્ષ પાર્ટી પ્લોટ, સુરત.",
        mapLink: "https://maps.app.goo.gl/Qk6Yjz8geCUaD9Hb6",
        date: "શુક્રવાર, ૧૧ ડિસેમ્બર ૨૦૨૬",
        time: "બપોરે ૧:૦૦ કલાકે",
        image: ""
      },
      {
        name: "પીઠી પ્રસંગ",
        venue: "રુદ્રાક્ષ પાર્ટી પ્લોટ, સુરત.",
        mapLink: "https://maps.app.goo.gl/Qk6Yjz8geCUaD9Hb6",
        date: "શુક્રવાર, ૧૧ ડિસેમ્બર ૨૦૨૬",
        time: "બપોરે ૩:૦૦ કલાકે",
        image: "images/haldi.png"
      },
      {
        name: "સંગીત સંધ્યા",
        venue: "રુદ્રાક્ષ પાર્ટી પ્લોટ, સુરત.",
        mapLink: "https://maps.app.goo.gl/Qk6Yjz8geCUaD9Hb6",
        date: "શુક્રવાર, ૧૧ ડિસેમ્બર ૨૦૨૬",
        time: "રાત્રે ૮:૦૦ કલાકે",
        image: "images/sangeet.png"
      },
      {
        name: "જાન પ્રસ્થાન",
        venue: "મયુર મોટર્સ, કેનાલ રોડ, સુરત.",
        mapLink: "https://maps.app.goo.gl/5bQri465XPbAqst5A",
        date: "શનિવાર, ૧૨ ડિસેમ્બર ૨૦૨૬",
        time: "બપોરે ૩:૦૦ કલાકે",
        image: "images/baarat.png"
      },
      {
        name: "હસ્તમેળાપ",
        venue: "રુદ્રાક્ષ પાર્ટી પ્લોટ, સુરત.",
        mapLink: "https://maps.app.goo.gl/Qk6Yjz8geCUaD9Hb6",
        date: "શનિવાર, ૧૨ ડિસેમ્બર ૨૦૨૬",
        time: "સાંજે ૬:૩૦ કલાકે",
        image: "images/wedding.png"
      }
    ]
  },

  /* ---------- 8. સ્નેહાધીન (Best compliments) ---------- */
  compliments: {
    show: true,
    heading: "સ્નેહાધીન અને દર્શનાભિલાષી:",
    names: [
      "શ્રી સુરેશભાઈ બાવચંદભાઈ ઉસદડીયા તથા પરિવાર",
      "મહેશ અને નિમેષ વેકરિયા તથા પરિવાર (ભાણેજ)",
      "શ્રી સુરેશભાઈ ચોડવડીયા તથા પરિવાર (મામા-મામી)"
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
    instagramUrl: "https://www.instagram.com/itsallaboutprisha/",
    instagramPopup: {
      title: "દંપતીને ફોલો કરો",
      message: "શું આપ દંપતીનું ઇન્સ્ટાગ્રામ પેજ ખોલવા માંગો છો?",
      confirmText: "ઇન્સ્ટાગ્રામ ખોલો",
      cancelText: "હમણાં નહીં"
    },
    mapUrl: "https://maps.app.goo.gl/Qk6Yjz8geCUaD9Hb6",
    // Calendar event
    // calendar: {
    //   title: "પ્રતીક સંગ ઈશા — શુભ લગ્ન",
    //   start: "2026-12-12T19:00:00",
    //   end: "2026-12-12T23:59:00",
    //   location: "રુદ્રાક્ષ પાર્ટી પ્લોટ, સુરત."
    // }
  },

  /* ---------- 11. સમાપન (Closing) ---------- */
  closing: {
    show: true,
    message: "આપની પાવન ઉપસ્થિતિ અને આશીર્વાદ જ અમારા માટે અમૂલ્ય ભેટ છે.",
    backgroundImage: ""
  }
};
