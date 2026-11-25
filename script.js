/*
 * Renders the invitation from config.js and adds the interactions.
 * Content lives in config.js — you should not need to edit this file.
 */
(function () {
  "use strict";

  var C = window.INVITATION || {};
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function on(section) { return section && section.show !== false; }
  function imgOr(src, fallback, alt, cls) {
    return src
      ? '<img src="' + esc(src) + '" alt="' + esc(alt || "") + '"' + (cls ? ' class="' + cls + '"' : "") + " />"
      : fallback;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ---------- built-in artwork (used when no image is set) ---------- */
  var ART = {
    flower: function (x, y, s, rot) {
      return '<g transform="translate(' + x + " " + y + ") rotate(" + (rot || 0) + ") scale(" + s + ')">' +
        '<path class="r" opacity=".75" d="M0 0 C-16 -2 -22 -16 -17 -24 C-7 -20 -2 -9 0 0Z"/>' +
        '<path class="r" opacity=".75" d="M0 0 C16 -2 22 -16 17 -24 C7 -20 2 -9 0 0Z"/>' +
        '<path class="r" d="M0 0 C-11 -9 -9 -24 0 -31 C9 -24 11 -9 0 0Z"/>' +
        '<circle class="g" cx="0" cy="-2" r="2.6"/></g>';
    },
    leaf: function (x, y, rot, s) {
      return '<ellipse class="l" cx="' + x + '" cy="' + y + '" rx="' + 4 * (s || 1) + '" ry="' + 10 * (s || 1) +
        '" transform="rotate(' + rot + " " + x + " " + y + ')"/>';
    },
    sprig: function () {
      return '<svg class="sprig-svg" viewBox="0 0 100 170" aria-hidden="true">' +
        '<path class="sl" stroke-width="2.5" d="M50 165 C38 128 62 98 46 66 C38 48 48 28 62 16"/>' +
        '<path class="sl" stroke-width="2" d="M47 74 C34 70 26 78 22 86"/>' +
        '<path class="sl" stroke-width="2" d="M52 112 C66 108 74 114 78 122"/>' +
        ART.leaf(40, 140, -30) + ART.leaf(60, 132, 35) + ART.leaf(36, 98, -50) + ART.leaf(58, 84, 40) +
        ART.leaf(44, 44, -35) + ART.leaf(56, 56, 50, .8) +
        ART.flower(62, 18, 1, 15) + ART.flower(22, 88, .8, -40) + ART.flower(78, 124, .8, 40) +
        "</svg>";
    },
    elephant: function () {
      var bells = "";
      for (var i = 0; i < 6; i++) bells += '<circle class="g" cx="' + (82 + i * 11) + '" cy="' + (129 - Math.abs(2.5 - i) * 0.8) + '" r="2.6"/>';
      return '<svg class="elephant-svg" viewBox="0 0 220 180" aria-hidden="true"><g stroke="#B88A2E" stroke-width="1.4">' +
        '<path d="M48 100 q-16 18 -10 40" fill="none" stroke-width="3"/>' +
        '<rect class="iv" x="60" y="118" width="21" height="50" rx="8"/>' +
        '<rect class="iv" x="128" y="118" width="21" height="50" rx="8"/>' +
        '<ellipse class="iv" cx="110" cy="104" rx="64" ry="42"/>' +
        '<rect class="iv" x="86" y="122" width="21" height="48" rx="8"/>' +
        '<rect class="iv" x="152" y="116" width="21" height="52" rx="8"/>' +
        '<rect class="g" x="60" y="154" width="21" height="5"/><rect class="g" x="86" y="156" width="21" height="5"/>' +
        '<rect class="g" x="128" y="154" width="21" height="5"/><rect class="g" x="152" y="154" width="21" height="5"/>' +
        '<path class="m" d="M72 66 H150 L146 126 Q111 136 76 126 Z"/>' +
        '<path class="sg" stroke-width="4" d="M77 71 H145 L141 121 Q111 130 81 121 Z"/>' +
        '<path class="g" stroke="none" d="M111 82 l13 17 -13 17 -13 -17 Z"/>' +
        '<circle class="m" stroke="none" cx="111" cy="99" r="4"/>' + bells +
        '<rect class="g" x="76" y="52" width="70" height="14" rx="2"/>' +
        '<rect class="m" x="88" y="30" width="46" height="22"/>' +
        '<rect class="g" x="82" y="27" width="6" height="26"/><rect class="g" x="108" y="27" width="6" height="26"/><rect class="g" x="134" y="27" width="6" height="26"/>' +
        '<path class="g" d="M74 30 Q111 -8 148 30 Z"/><circle class="g" cx="111" cy="7" r="4.5"/>' +
        '<circle class="iv" cx="170" cy="86" r="31"/>' +
        '<path class="iv" d="M188 94 C206 118 202 150 192 164 C186 170 177 166 182 158 C191 140 187 120 172 108 Z"/>' +
        '<path d="M178 112 q12 10 24 4" stroke="#FFFDF5" stroke-width="4.5" fill="none" stroke-linecap="round"/>' +
        '<path class="iv" d="M158 64 C132 64 128 114 154 118 C165 104 167 80 158 64 Z"/>' +
        '<path class="m" d="M160 62 Q178 50 196 70 L190 84 Q174 70 162 76 Z"/>' +
        '<circle class="g" stroke="none" cx="178" cy="66" r="3"/>' +
        '<circle class="ink" stroke="none" cx="181" cy="82" r="2.6"/>' +
        "</g></svg>";
    },
    lotus: function (size) {
      var p = "";
      [-64, -34, 34, 64, 0].forEach(function (a, i) {
        p += '<path class="' + (i === 4 ? "r" : "r") + '" opacity="' + (i === 4 ? 1 : .8) +
          '" transform="rotate(' + a + ')" d="M0 0 C-9 -12 -8 -30 0 -40 C8 -30 9 -12 0 0Z" stroke="#fff" stroke-width=".8"/>';
      });
      return '<svg viewBox="-50 -46 100 52" width="' + (size || 60) + '" aria-hidden="true"><g>' + p + "</g></svg>";
    },
    divider: function () {
      var petals = "";
      [-60, -30, 0, 30, 60].forEach(function (a) {
        petals += '<path class="r" transform="translate(150 26) rotate(' + a + ')" d="M0 0 C-6 -8 -5 -18 0 -24 C5 -18 6 -8 0 0Z" stroke="#fff" stroke-width=".6"/>';
      });
      return '<svg class="divider" viewBox="0 0 300 40" aria-hidden="true">' +
        '<path class="sg" stroke-width="1.6" d="M8 26 H104 M196 26 H292"/>' +
        '<path class="sg" stroke-width="2" d="M104 26 c6 -14 22 -14 24 -2 c1 8 -8 10 -10 4 M196 26 c-6 -14 -22 -14 -24 -2 c-1 8 8 10 10 4"/>' +
        '<path class="sg" stroke-width="1.6" d="M80 26 c4 -8 14 -8 14 0 M220 26 c-4 -8 -14 -8 -14 0"/>' +
        '<path class="g" d="M8 26 l6 -5 6 5 -6 5Z M292 26 l-6 -5 -6 5 6 5Z"/>' +
        '<circle class="r" cx="58" cy="26" r="4"/><circle class="r" cx="242" cy="26" r="4"/>' +
        petals + '<path class="g" d="M132 28 Q150 34 168 28 Q150 38 132 28Z"/></svg>';
    },
    lotusMotif: function () {
      var big = "";
      [-70, -42, 42, 70, -16, 16, 0].forEach(function (a, i) {
        big += '<path class="' + (i > 3 ? "m" : "md") + '" transform="rotate(' + a + ')" d="M0 0 C-16 -18 -14 -50 0 -66 C14 -50 16 -18 0 0Z" stroke="#C9A24A" stroke-width="1.4"/>';
      });
      return '<svg viewBox="0 0 300 160" aria-hidden="true">' +
        '<path class="sl" stroke-width="2.4" d="M150 140 C120 140 92 130 70 104 C58 90 44 86 30 92"/>' +
        '<path class="sl" stroke-width="2.4" d="M150 140 C180 140 208 130 230 104 C242 90 256 86 270 92"/>' +
        '<path class="sl" stroke-width="2" d="M100 128 C90 108 92 86 104 68 M200 128 C210 108 208 86 196 68"/>' +
        ART.leaf(84, 118, -60, 1.2) + ART.leaf(216, 118, 60, 1.2) + ART.leaf(56, 96, -80) + ART.leaf(244, 96, 80) +
        ART.leaf(96, 96, -20) + ART.leaf(204, 96, 20) +
        ART.flower(30, 94, .8, -70) + ART.flower(270, 94, .8, 70) + ART.flower(104, 70, .9, -10) + ART.flower(196, 70, .9, 10) +
        ART.flower(70, 104, .7, -40) + ART.flower(230, 104, .7, 40) + ART.flower(150, 30, .8, 0) +
        '<g transform="translate(150 138)">' + big +
        '<path class="r" transform="scale(.55)" d="M0 0 C-12 -16 -10 -46 0 -60 C10 -46 12 -16 0 0Z"/>' +
        '<path class="g" d="M-22 2 Q0 10 22 2 Q0 16 -22 2Z"/></g>' +
        '<path class="g" d="M150 148 l6 6 -6 6 -6 -6Z"/></svg>';
    },
    mandap: function () {
      return '<svg viewBox="0 0 200 150" aria-hidden="true">' +
        '<rect class="g" x="20" y="132" width="160" height="10" rx="2"/>' +
        '<rect class="gl" x="30" y="122" width="140" height="10"/>' +
        '<rect class="g" x="34" y="40" width="7" height="84"/><rect class="g" x="159" y="40" width="7" height="84"/>' +
        '<path class="m" d="M24 42 Q100 -4 176 42 Z"/><path class="sg" stroke-width="2" d="M28 40 Q100 0 172 40"/>' +
        '<path class="r" opacity=".85" d="M41 44 Q56 80 44 122 L41 122Z M159 44 Q144 80 156 122 L159 122Z"/>' +
        '<path class="iv" opacity=".9" d="M41 44 Q70 64 100 50 Q130 64 159 44 L159 50 Q130 72 100 58 Q70 72 41 50Z"/>' +
        '<g>' + [52, 66, 80, 94, 108, 122, 136, 150].map(function (x) { return '<circle class="r" cx="' + x + '" cy="' + (58 + Math.sin(x / 14) * 3) + '" r="3.2"/>'; }).join("") + "</g>" +
        '<path class="g" d="M84 122 L88 104 H112 L116 122Z"/>' +
        '<path fill="#E9813B" d="M100 104 C92 96 96 86 100 80 C104 86 108 96 100 104Z"/>' +
        '<path fill="#F6C453" d="M100 103 C96 98 98 92 100 88 C102 92 104 98 100 103Z"/>' +
        '<circle class="r" cx="62" cy="118" r="7"/><circle class="r" cx="138" cy="118" r="7"/>' +
        ART.leaf(54, 118, -50) + ART.leaf(146, 118, 50) + "</svg>";
    },
    heroScene: function () {
      var arches = function (x0, n, w, y, h) {
        var s = "";
        for (var i = 0; i < n; i++) {
          var x = x0 + i * w;
          s += '<path fill="#E4D2B6" d="M' + (x + 8) + " " + (y + h) + " V" + (y + 30) + " Q" + (x + w / 2) + " " + (y + 4) + " " + (x + w - 8) + " " + (y + 30) + " V" + (y + h) + 'Z"/>';
        }
        return s;
      };
      var trees = [70, 300, 380, 820, 900, 1130].map(function (x, i) {
        var h = i % 2 ? 150 : 190;
        return '<ellipse cx="' + x + '" cy="' + (470 - h / 2) + '" rx="20" ry="' + h / 2 + '" fill="#3F5E3A"/>';
      }).join("");
      var flowers = "";
      for (var f = 0; f < 26; f++) {
        var fx = 30 + f * 46, side = fx < 470 || fx > 730;
        if (side) flowers += '<circle cx="' + fx + '" cy="' + (462 + (f % 3) * 4) + '" r="' + (10 + (f % 4) * 2) + '" fill="' + (f % 2 ? "#E7A3B1" : "#F3C6CF") + '"/>';
      }
      return '<svg class="hero-scene" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
        '<defs><linearGradient id="hsWater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BBD5E3"/><stop offset="1" stop-color="#F4EDE3"/></linearGradient></defs>' +
        '<rect x="0" y="330" width="440" height="140" fill="#F3E7D3"/><rect x="760" y="330" width="440" height="140" fill="#F3E7D3"/>' +
        '<rect x="0" y="320" width="440" height="14" fill="#EAD9BC"/><rect x="760" y="320" width="440" height="14" fill="#EAD9BC"/>' +
        arches(0, 8, 55, 334, 136) + arches(760, 8, 55, 334, 136) + trees + flowers +
        '<rect x="0" y="470" width="1200" height="130" fill="url(#hsWater)"/>' +
        '<g transform="translate(600 300)">' +
          '<rect x="-150" y="140" width="300" height="30" fill="#EAD9BC"/>' +
          '<rect x="-140" y="-10" width="16" height="152" class="g"/><rect x="124" y="-10" width="16" height="152" class="g"/>' +
          '<rect x="-80" y="-10" width="10" height="152" class="g" opacity=".8"/><rect x="70" y="-10" width="10" height="152" class="g" opacity=".8"/>' +
          '<rect x="-160" y="-40" width="320" height="34" class="g"/>' +
          '<rect x="-160" y="-46" width="320" height="8" fill="#FFF7E6"/>' +
          '<path d="M-124 -6 Q-90 40 -124 140 L-124 -6Z M124 -6 Q90 40 124 140 L124 -6Z" fill="#F7E4CF"/>' +
          '<path d="M-124 -6 Q-60 70 -100 140 L-124 140Z M124 -6 Q60 70 100 140 L124 140Z" fill="#D9824E" opacity=".55"/>' +
          [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].map(function (x, i) {
            return '<circle cx="' + x + '" cy="-46" r="' + (12 + (i % 2) * 4) + '" fill="' + (i % 3 ? "#E7A3B1" : "#F6D3DA") + '"/>';
          }).join("") +
          [-100, -60, -20, 20, 60, 100].map(function (x) { return '<line x1="' + x + '" y1="-6" x2="' + x + '" y2="' + (30 + Math.abs(x) / 4) + '" stroke="#C9A24A" stroke-width="2"/><circle cx="' + x + '" cy="' + (34 + Math.abs(x) / 4) + '" r="4" class="g"/>'; }).join("") +
          '<path class="g" d="M-30 140 L-24 110 H24 L30 140Z"/>' +
        "</g>" +
        '<g opacity=".18" transform="translate(600 770) scale(1 -1)"><rect x="-140" y="-10" width="16" height="152" class="g"/><rect x="124" y="-10" width="16" height="152" class="g"/><rect x="-160" y="-40" width="320" height="34" class="g"/></g>' +
        [460, 520, 680, 740].map(function (x) { return '<path d="M' + x + ' 470 h14 v-26 l-7 -8 -7 8Z" fill="#E9C86E"/><circle cx="' + (x + 7) + '" cy="458" r="4" fill="#FFE9A6"/>'; }).join("") +
        "</svg>";
    },
    courtyard: function () {
      var cols = "";
      for (var i = 0; i < 12; i++) {
        var x = i * 70;
        cols += '<path fill="#F0DFC2" d="M' + (x + 6) + " 210 V70 Q" + (x + 35) + " 34 " + (x + 64) + ' 70 V210Z"/><rect x="' + x + '" y="40" width="6" height="170" fill="#D9B86A"/>';
      }
      return '<svg viewBox="0 0 840 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
        '<rect width="840" height="340" fill="#F6EBD8"/>' + cols +
        '<ellipse cx="300" cy="140" rx="14" ry="80" fill="#3F5E3A"/><ellipse cx="540" cy="140" rx="14" ry="80" fill="#3F5E3A"/>' +
        '<rect y="210" width="840" height="130" fill="#EFE2CC"/>' +
        '<ellipse cx="420" cy="270" rx="260" ry="50" fill="#9BC7CF"/><ellipse cx="420" cy="270" rx="250" ry="44" fill="none" stroke="#D9B86A" stroke-width="6"/>' +
        '<rect x="408" y="160" width="24" height="100" fill="#EAD9BC"/><ellipse cx="420" cy="200" rx="60" ry="12" fill="#EAD9BC"/><ellipse cx="420" cy="168" rx="34" ry="8" fill="#EAD9BC"/>' +
        '<path d="M420 150 C400 170 380 190 372 200 M420 150 C440 170 460 190 468 200" stroke="#D6EEF2" stroke-width="3" fill="none"/>' +
        [140, 230, 610, 700].map(function (x) { return '<circle cx="' + x + '" cy="226" r="26" fill="#E7A3B1"/><circle cx="' + (x + 20) + '" cy="232" r="18" fill="#F3C6CF"/>'; }).join("") +
        [180, 660].map(function (x) { return '<path d="M' + x + ' 300 h22 v-40 l-11 -12 -11 12Z" fill="#E9C86E"/>'; }).join("") +
        "</svg>";
    },
    closingScene: function () {
      var balus = "";
      for (var i = 0; i < 40; i++) balus += '<rect x="' + i * 30 + '" y="300" width="10" height="40" fill="#F6E8CF"/>';
      return '<svg class="closing-scene" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
        '<path d="M0 230 Q60 200 120 222 Q190 180 250 214 Q330 170 400 210 Q480 178 560 206 Q640 168 720 206 Q800 176 880 210 Q960 172 1040 212 Q1120 186 1200 216 V500 H0Z" fill="#E4B7A0" opacity=".5"/>' +
        '<g fill="#F7EAD3">' +
          '<rect x="80" y="200" width="200" height="140"/><path d="M110 200 Q180 120 250 200Z"/><rect x="176" y="120" width="8" height="30"/>' +
          '<rect x="920" y="200" width="200" height="140"/><path d="M950 200 Q1020 120 1090 200Z"/><rect x="1016" y="120" width="8" height="30"/>' +
          '<rect x="0" y="260" width="1200" height="40"/>' +
        "</g>" + balus +
        '<ellipse cx="330" cy="300" rx="18" ry="90" fill="#3F5E3A"/><ellipse cx="870" cy="300" rx="18" ry="90" fill="#3F5E3A"/>' +
        '<ellipse cx="40" cy="340" rx="20" ry="80" fill="#3F5E3A"/><ellipse cx="1160" cy="340" rx="20" ry="80" fill="#3F5E3A"/>' +
        '<rect x="0" y="340" width="1200" height="160" fill="#F2E2C6"/>' +
        [60, 150, 240, 960, 1050, 1140].map(function (x, i) { return '<circle cx="' + x + '" cy="' + (380 + (i % 2) * 10) + '" r="' + (36 + (i % 3) * 8) + '" fill="' + (i % 2 ? "#E7A3B1" : "#D98C9C") + '"/>'; }).join("") +
        "</svg>";
    },
    photoPlaceholder: function (label) {
      return '<svg viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice" aria-label="' + esc(label) + '">' +
        '<defs><linearGradient id="ph" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3D9C8"/><stop offset="1" stop-color="#E6C7A8"/></linearGradient></defs>' +
        '<rect width="200" height="250" fill="url(#ph)"/>' +
        '<circle cx="80" cy="100" r="20" fill="#C9A99A"/><path d="M48 220 Q52 140 80 132 Q108 140 112 220Z" fill="#FBF6EC"/>' +
        '<circle cx="124" cy="92" r="20" fill="#B48E80"/><path d="M94 220 Q98 130 124 124 Q152 130 156 220Z" fill="#E7D9C7"/>' +
        "</svg>";
    },
    torn: function (seed) {
      var d = "M0 46 V24", x = 0, s = seed || 7;
      function rnd() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
      while (x < 1200) { x += 8 + rnd() * 22; d += " L" + Math.min(x, 1200).toFixed(1) + " " + (8 + rnd() * 30).toFixed(1); }
      d += " V46Z";
      return d;
    }
  };

  var ICONS = {
    speakerOn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>',
    speakerOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="m22 9-6 6M16 9l6 6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    wreath: function (inner) {
      var leaves = "";
      [[12, 44, -40], [8, 30, -10], [14, 14, 30], [52, 44, 40], [56, 30, 10], [50, 14, -30]].forEach(function (l) {
        leaves += '<ellipse cx="' + l[0] + '" cy="' + l[1] + '" rx="3.5" ry="7" transform="rotate(' + l[2] + " " + l[0] + " " + l[1] + ')" fill="currentColor" opacity=".7"/>';
      });
      return '<svg viewBox="0 0 64 64" aria-hidden="true">' + leaves +
        '<circle cx="10" cy="52" r="3" fill="var(--maroon)"/><circle cx="54" cy="52" r="3" fill="var(--maroon)"/>' + inner + "</svg>";
    }
  };
  ICONS.instagram = ICONS.wreath('<rect x="19" y="17" width="26" height="26" rx="8" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="32" cy="30" r="6" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="39.5" cy="22.5" r="1.8" fill="currentColor"/>');
  ICONS.map = ICONS.wreath('<path d="M32 46s11-9.5 11-18.5a11 11 0 0 0-22 0C21 36.5 32 46 32 46z" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="32" cy="27.5" r="4" fill="currentColor"/>');
  ICONS.calendar = ICONS.wreath('<rect x="18" y="20" width="28" height="24" rx="3" fill="none" stroke="currentColor" stroke-width="3"/><path d="M18 27h28M25 16v7M39 16v7" stroke="currentColor" stroke-width="3"/><g fill="currentColor"><rect x="23" y="31" width="4" height="4"/><rect x="30" y="31" width="4" height="4"/><rect x="37" y="31" width="4" height="4"/><rect x="23" y="37" width="4" height="4"/><rect x="30" y="37" width="4" height="4"/></g>');

  function elephant(cls) { return '<div class="elephant ' + cls + '">' + imgOr(C.cover && C.cover.elephantImage, ART.elephant(), "") + "</div>"; }
  function sprig(cls) { return '<div class="sprig ' + cls + '">' + imgOr(C.cover && C.cover.flowerImage, ART.sprig(), "") + "</div>"; }
  function flourish() { return '<div class="flourish">' + ART.divider() + "</div>"; }

  function scroll(innerHtml) {
    return '<div class="scroll"><div class="roller"></div><div class="scroll-body"><div class="scroll-paper"><div class="scroll-inner">' +
      innerHtml + flourish() + '</div></div></div><div class="roller roller--bottom"></div></div>';
  }
  function joinAnd(arr) {
    return (arr || []).map(function (n) { return "<p>" + esc(n) + "</p>"; }).join('<p class="and">&amp;</p>');
  }

  /* ---------- sections ---------- */
  function renderCover() {
    var c = C.cover;
    var host = $("#cover");
    if (!on(c)) { host.classList.add("is-gone"); document.body.classList.remove("is-locked"); document.body.classList.add("is-opened"); return; }
    host.innerHTML =
      '<div class="door door--top">' + sprig("sprig--left") + sprig("sprig--right") + "</div>" +
      '<div class="door door--bottom">' + elephant("elephant--left") + elephant("elephant--right") + "</div>" +
      '<div class="cover-card">' +
        '<div class="cover-logo">' + imgOr(c.logoImage, "<span>" + esc(c.logoSymbol) + "</span>", "Logo") + "</div>" +
        '<p class="cover-blessing">' + esc(c.blessing) + "</p>" +
        '<p class="cover-message">' + esc(c.message) + "</p>" +
        '<button class="btn" type="button" id="openBtn">' + esc(c.buttonText) + "</button>" +
      "</div>";
    $("#openBtn").addEventListener("click", function () {
      host.classList.add("is-open");
      document.body.classList.remove("is-locked");
      document.body.classList.add("is-opened");
      window.scrollTo(0, 0);
      playMusic();
      setTimeout(function () { host.classList.add("is-gone"); }, reduceMotion ? 0 : 2100);
    });
    $("#openBtn").focus({ preventScroll: true });
  }

  function renderHero() {
    var h = C.hero;
    if (!on(h)) return "";
    return '<section class="hero">' +
      imgOr(h.backgroundImage, ART.heroScene(), "", "hero-bg") +
      '<h1 class="hero-names"><span>' + esc(h.brideName) + '</span><span class="amp">' + esc(h.joiner) + "</span><span>" + esc(h.groomName) + "</span></h1>" +
      '<span class="scroll-cue" aria-hidden="true"></span>' +
      "</section>";
  }

  function renderFamilies() {
    var f = C.families;
    if (!on(f)) return "";
    return '<section class="scroll-section paper">' + (f.people || []).map(function (p) {
      return scroll(
        "<h2>" + esc(p.title) + "</h2>" +
        '<p class="rel">' + esc(p.relation) + "</p>" + joinAnd(p.parents)
        // + '<p class="rel">' + esc(p.grandRelation) + "</p>" + joinAnd(p.grandparents)
      );
    }).join("") + "</section>";
  }

  function renderSaveTheDate() {
    var s = C.saveTheDate;
    if (!on(s)) return "";
    function plaque(key, label) {
      return '<div class="plaque" data-key="' + key + '"><span class="plaque-label">' + esc(label) + '</span>' +
        '<div class="plaque-face"><div class="reel"><span aria-hidden="true">&nbsp;</span></div></div></div>';
    }
    return '<section class="std paper" id="std">' +
      '<div class="std-motif">' + ART.lotusMotif() + "</div>" +
      '<div class="std-row">' + elephant("elephant--left") +
        '<div class="plaques" aria-live="polite">' +
          plaque("day", s.labels.day) + plaque("month", s.labels.month) + plaque("year", s.labels.year) +
          '<div class="std-action"><button class="btn" type="button" id="revealBtn">' + esc(s.buttonText) + "</button>" +
          '<p class="std-after">' + esc(s.afterRevealText) + "</p></div>" +
        "</div>" + elephant("elephant--right") +
      "</div></section>";
  }

  function renderVenue() {
    var v = C.venue;
    if (!on(v)) return "";
    return '<section class="venue paper"><div class="venue-frame reveal">' + imgOr(v.image, ART.courtyard(), "Venue") + "</div>" +
      ART.divider() + "</section>";
  }

  function renderStory() {
    var s = C.story;
    if (!on(s)) return "";
    var frames = (s.frames || []).map(function (fr, i) {
      var wide = fr.type === "photo" && i % 2 === 0 && i > 0;
      var body = fr.type === "text"
        ? '<p class="frame-text">' + esc(fr.text) + "</p>"
        : '<div class="frame-photo">' + imgOr(fr.image, ART.photoPlaceholder(fr.caption), fr.caption) + "</div>" +
          '<p class="frame-caption">' + esc(fr.caption) + "</p>";
      return '<div class="frame"><span class="frame-nail"></span><div class="frame-box' + (wide ? " frame-box--wide" : "") + '">' + body + "</div></div>";
    }).join("");
    return '<section class="story paper" id="story"><div class="story-sticky"><div class="story-rail"></div>' +
      '<div class="story-track">' + frames + "</div></div></section>";
  }

  function renderCeremonies() {
    var c = C.ceremonies;
    if (!on(c)) return "";
    var outline = '<svg class="cer-outline" viewBox="0 0 250 340" preserveAspectRatio="none" aria-hidden="true">' +
      '<path class="o" d="M1 339 L1 72 Q1 42 30 42 Q56 42 72 22 Q96 1 125 1 Q154 1 178 22 Q194 42 220 42 Q249 42 249 72 L249 339 Z"/>' +
      '<path class="i" d="M7 333 L7 76 Q7 48 32 48 Q60 48 76 28 Q98 8 125 8 Q152 8 174 28 Q190 48 218 48 Q243 48 243 76 L243 333 Z"/></svg>';
    var events = c.events || [];
    var cards = events.map(function (e, i) {
      var card = '<article class="cer-card reveal" style="--i:' + (i % 3) + '">' + outline + '<div class="cer-card-inner">' +
        '<div class="cer-art">' + imgOr(e.image, ART.mandap(), e.name) + "</div>" +
        "<h3>" + esc(e.name) + "</h3>" +
        '<div class="cer-venue"><span>' + esc(e.venue) + "</span>" +
        (e.mapLink ? '<a class="cer-pin" href="' + esc(e.mapLink) + '" target="_blank" rel="noopener" aria-label="Open map for ' + esc(e.name) + '">' + ICONS.pin + "</a>" : "") +
        "</div>" +
        '<div class="cer-when"><span>' + esc(e.date) + "</span><small>" + esc(e.time) + "</small></div>" +
        "</div></article>";
      // Divider after the first row of three, like the reference
      return card + (i === 2 && events.length > 3 ? '<div class="cer-divider">' + ART.divider() + "</div>" : "");
    }).join("");
    return '<svg class="torn torn--up" viewBox="0 0 1200 46" preserveAspectRatio="none" aria-hidden="true"><path class="md" d="' + ART.torn(11) + '"/></svg>' +
      '<section class="ceremonies"><h2>' + esc(c.heading) + '</h2><div class="cer-grid">' + cards + "</div></section>" +
      '<svg class="torn torn--down" viewBox="0 0 1200 46" preserveAspectRatio="none" aria-hidden="true"><path class="md" d="' + ART.torn(29) + '"/></svg>';
  }

  function renderClosingScrolls() {
    var out = "";
    var cm = C.compliments, n = C.notes;
    if (on(cm)) out += scroll("<h3>" + esc(cm.heading) + '</h3><div class="list">' + (cm.names || []).map(function (x) { return "<p>" + esc(x) + "</p>"; }).join("") + "</div>");
    if (on(n)) out += scroll("<h3>" + esc(n.heading) + '</h3><div class="list">' + (n.items || []).map(function (x) { return "<p>&ndash;" + esc(x) + "</p>"; }).join("") + "</div>");
    return out ? '<section class="scroll-section paper">' + out + "</section>" : "";
  }

  function renderLinks() {
    var l = C.links;
    if (!on(l)) return "";
    var b = "";
    if (l.instagramUrl) b += '<button class="icon-btn" type="button" data-action="instagram" aria-label="Instagram">' + ICONS.instagram + "</button>";
    if (l.mapUrl) b += '<a class="icon-btn" href="' + esc(l.mapUrl) + '" target="_blank" rel="noopener" aria-label="Open map">' + ICONS.map + "</a>";
    if (l.calendar && l.calendar.start) b += '<button class="icon-btn" type="button" data-action="calendar" aria-label="Add to calendar">' + ICONS.calendar + "</button>";
    return '<nav class="links paper" aria-label="Quick links">' + b + "</nav>";
  }

  function renderClosing() {
    var c = C.closing;
    if (!on(c)) return "";
    return '<section class="closing">' + imgOr(c.backgroundImage, ART.closingScene(), "", "closing-bg") +
      '<div class="easel reveal">' +
        '<svg class="easel-crown" viewBox="0 0 70 60" aria-hidden="true"><path class="g" d="M10 60 Q35 30 60 60Z"/><circle class="g" cx="35" cy="26" r="10"/><path class="g" d="M35 0 l5 12 h-10Z"/><circle class="m" cx="35" cy="26" r="4"/></svg>' +
        '<div class="easel-board" style="background-image: url(\'images/end-bg.jpg\');background-position: center;"><p>' + esc(c.message) + "</p></div>" +
        '<svg class="easel-legs" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true"><path class="g" d="M60 0 h12 l-30 60 h-12Z M228 0 h12 l30 60 h-12Z M146 0 h8 v60 h-8Z"/></svg>' +
      "</div></section>";
  }

  /* ---------- interactions ---------- */
  function setupScrolls() {
    var scrolls = $all(".scroll");
    function measure() {
      // Bottom roller starts tucked under the top one; it travels down by the paper height.
      scrolls.forEach(function (sc) {
        var paper = $(".scroll-paper", sc);
        sc.style.setProperty("--h", Math.max(0, paper.offsetHeight - 12) + "px");
      });
    }
    measure();
    window.addEventListener("resize", measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

    var items = $all(".scroll, .reveal");
    if (!("IntersectionObserver" in window)) { items.forEach(function (el) { el.classList.add("is-open", "is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add(en.target.classList.contains("scroll") ? "is-open" : "is-in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* Convert digits so Gujarati (or any) numerals work in the date reel */
  function toNative(str, digits) {
    return digits ? String(str).replace(/[0-9]/g, function (d) { return digits.charAt(+d); }) : String(str);
  }
  function toAscii(str, digits) {
    if (!digits) return String(str);
    return String(str).replace(/./g, function (ch) { var i = digits.indexOf(ch); return i > -1 ? String(i) : ch; });
  }

  function setupDateReveal() {
    var btn = $("#revealBtn");
    if (!btn) return;
    var s = C.saveTheDate;
    var digits = s.digits || "";
    var months = s.monthNames || ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var baseYear = parseInt(toAscii(s.year, digits), 10) || new Date().getFullYear();
    function pool(key) {
      var out = [], i;
      for (i = 0; i < 16; i++) {
        if (key === "day") out.push(toNative(String(1 + Math.floor(Math.random() * 28)).padStart(2, "0"), digits));
        else if (key === "month") out.push(months[Math.floor(Math.random() * months.length)]);
        else out.push(toNative(baseYear + Math.floor(Math.random() * 5) - 2, digits));
      }
      out.push(s[key]);
      return out;
    }
    btn.addEventListener("click", function () {
      btn.disabled = true;
      var section = $("#std");
      var longest = 0;
      $all(".plaque", section).forEach(function (pl, idx) {
        var reel = $(".reel", pl);
        var values = pool(pl.getAttribute("data-key"));
        reel.innerHTML = values.map(function (v, i) { return "<span" + (i < values.length - 1 ? ' aria-hidden="true"' : "") + ">" + esc(v) + "</span>"; }).join("");
        var h = reel.firstChild.offsetHeight;
        var dur = reduceMotion ? 0 : 2000 + idx * 450;
        longest = Math.max(longest, dur);
        reel.style.transition = "none";
        reel.style.transform = "translateY(0)";
        void reel.offsetHeight;
        reel.style.transition = "transform " + dur + "ms cubic-bezier(.12,.75,.12,1)";
        reel.style.transform = "translateY(" + -(values.length - 1) * h + "px)";
      });
      setTimeout(function () {
        section.classList.add("is-revealed");
        confetti(section);
      }, longest + 80);
    });
  }

  function confetti(section) {
    if (reduceMotion || !section.animate) return;
    var motif = $(".std-motif", section);
    var sr = section.getBoundingClientRect(), mr = motif.getBoundingClientRect();
    for (var i = 0; i < 70; i++) {
      var d = document.createElement("span");
      d.className = "confetti";
      var size = 5 + Math.random() * 9;
      d.style.width = d.style.height = size + "px";
      var x = mr.left - sr.left + Math.random() * mr.width * 1.4 - mr.width * 0.2;
      var y = mr.top - sr.top + Math.random() * mr.height * 0.6;
      d.style.left = x + "px"; d.style.top = y + "px";
      section.appendChild(d);
      var anim = d.animate([
        { transform: "translate(0,0) scale(0)", opacity: 0 },
        { transform: "translate(" + (Math.random() * 40 - 20) + "px," + (-20 - Math.random() * 30) + "px) scale(1)", opacity: 1, offset: 0.15 },
        { transform: "translate(" + (Math.random() * 120 - 60) + "px," + (120 + Math.random() * 200) + "px) scale(.8)", opacity: 0 }
      ], { duration: 2200 + Math.random() * 1800, delay: Math.random() * 500, easing: "cubic-bezier(.2,.6,.4,1)", fill: "forwards" });
      anim.onfinish = (function (el) { return function () { el.remove(); }; })(d);
    }
  }

  function setupStory() {
    var section = $("#story");
    if (!section) return;
    var track = $(".story-track", section);
    var sticky = $(".story-sticky", section);
    if (reduceMotion) { section.classList.add("is-static"); return; }
    var distance = 0, stickyTop = 0, current = 0, target = 0, running = false;
    function measure() {
      distance = Math.max(0, track.scrollWidth - window.innerWidth);
      stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      section.style.height = (sticky.offsetHeight + distance) + "px";
      compute(); current = target; paint();
    }
    function compute() {
      var top = section.getBoundingClientRect().top;
      var p = distance ? Math.min(1, Math.max(0, (stickyTop - top) / distance)) : 0;
      target = p * distance;
    }
    function paint() { track.style.transform = "translate3d(" + (-current).toFixed(2) + "px,0,0)"; }
    // Eased follow so the horizontal glide feels smooth even with notched mouse wheels
    function loop() {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.3) { current = target; running = false; }
      paint();
      if (running) requestAnimationFrame(loop);
    }
    window.addEventListener("scroll", function () {
      compute();
      if (!running) { running = true; requestAnimationFrame(loop); }
    }, { passive: true });
    window.addEventListener("resize", measure);
    $all("img", track).forEach(function (img) { img.addEventListener("load", measure); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    measure();
  }

  function setupHeroParallax() {
    var names = $(".hero-names");
    if (!names || reduceMotion) return;
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var y = window.scrollY;
        if (y > window.innerHeight) return;
        names.style.transform = "translate3d(0," + (y * 0.35).toFixed(1) + "px,0)";
        names.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.7)).toFixed(3);
      });
    }, { passive: true });
  }

  function renderFooter() {
    var f = C.footer || {};
    if (f.show === false) return "";
    var year = new Date().getFullYear();
    var brand = f.brand || "PRISHA";
    var text = esc(f.poweredText || "Powered and secured by {brand}.").replace("{brand}", "<strong>" + esc(brand) + "</strong>");
    return '<footer class="site-footer"><p>&copy; ' + year + (f.copyrightName ? " " + esc(f.copyrightName) : "") + "</p><p>" + text + "</p></footer>";
  }

  function renderLangSwitch() {
    var langs = C.languages || [];
    if (langs.length < 2) return;
    var nav = document.createElement("nav");
    nav.className = "lang-switch";
    nav.setAttribute("aria-label", "Language");
    var here = location.pathname.split("/").pop() || "index.html";
    nav.innerHTML = langs.map(function (l) {
      return '<a href="' + esc(l.href) + '"' + (l.href === here ? ' aria-current="page"' : "") + ">" + esc(l.label) + "</a>";
    }).join("");
    document.body.appendChild(nav);
    window.addEventListener("scroll", function () {
      nav.classList.toggle("is-hidden", window.scrollY > window.innerHeight * 0.6);
    }, { passive: true });
  }

  function setupLinks() {
    var l = C.links;
    if (!on(l)) return;
    var modal = $("#modal");
    var lastFocus = null;
    function close() { modal.hidden = true; modal.innerHTML = ""; if (lastFocus) lastFocus.focus(); }
    function openInstagram() {
      var p = l.instagramPopup || {};
      lastFocus = document.activeElement;
      modal.innerHTML = '<div class="modal-card"><button class="modal-close" type="button" aria-label="Close">&times;</button>' +
        '<h3 id="modalTitle">' + esc(p.title) + "</h3><p>" + esc(p.message) + "</p>" +
        '<div class="modal-actions"><a class="modal-ok" href="' + esc(l.instagramUrl) + '" target="_blank" rel="noopener">' + esc(p.confirmText) + "</a>" +
        '<button class="modal-cancel" type="button">' + esc(p.cancelText) + "</button></div></div>";
      modal.hidden = false;
      $(".modal-ok", modal).addEventListener("click", close);
      $(".modal-cancel", modal).addEventListener("click", close);
      $(".modal-close", modal).addEventListener("click", close);
      $(".modal-ok", modal).focus();
    }
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) close(); });

    function downloadIcs() {
      var c = l.calendar;
      function fmt(s) { return String(s).replace(/[-:]/g, "").slice(0, 15); }
      function icsText(s) { return String(s || "").replace(/[\\,;]/g, function (m) { return "\\" + m; }).replace(/\n/g, "\\n"); }
      var ics = [
        "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding Invitation//EN", "BEGIN:VEVENT",
        "UID:" + Date.now() + "@invitation",
        "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z",
        "DTSTART:" + fmt(c.start), "DTEND:" + fmt(c.end || c.start),
        "SUMMARY:" + icsText(c.title), "LOCATION:" + icsText(c.location),
        "END:VEVENT", "END:VCALENDAR"
      ].join("\r\n");
      var a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
      a.download = "wedding.ics";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    }

    $all("[data-action]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (b.getAttribute("data-action") === "instagram") openInstagram();
        else downloadIcs();
      });
    });
  }

  /* ---------- music ---------- */
  var audio, musicBtn;
  function setupMusic() {
    audio = $("#bgMusic");
    musicBtn = $("#musicToggle");
    if (!C.music) return;
    audio.src = C.music;
    musicBtn.hidden = false;
    musicBtn.innerHTML = ICONS.speakerOff;
    musicBtn.addEventListener("click", function () { if (audio.paused) playMusic(); else pauseMusic(); });
  }
  function playMusic() {
    if (!C.music) return;
    var p = audio.play();
    if (p && p.catch) p.catch(function () {});
    musicBtn.innerHTML = ICONS.speakerOn;
    musicBtn.setAttribute("aria-label", "Pause music");
  }
  function pauseMusic() {
    audio.pause();
    musicBtn.innerHTML = ICONS.speakerOff;
    musicBtn.setAttribute("aria-label", "Play music");
  }

  /* ---------- boot ---------- */
  function applyTheme() {
    var map = { maroon: "--maroon", maroonDark: "--maroon-dark", gold: "--gold", goldLight: "--gold-light", cream: "--cream", rose: "--rose", leaf: "--leaf", ink: "--ink" };
    var col = C.colors || {};
    Object.keys(map).forEach(function (k) { if (col[k]) document.documentElement.style.setProperty(map[k], col[k]); });
    if (C.pageTitle) document.title = C.pageTitle;
    if (C.lang) document.documentElement.lang = C.lang;
    if (C.fontFamily) document.documentElement.style.setProperty("--font", C.fontFamily);
  }

  applyTheme();
  $("#app").innerHTML =
    renderHero() + renderFamilies() + renderSaveTheDate() + renderVenue() + renderStory() +
    renderCeremonies() + renderClosingScrolls() 
    + renderLinks() + renderClosing() + renderFooter();
  renderCover();
  renderLangSwitch();
  setupMusic();
  setupScrolls();
  setupDateReveal();
  setupStory();
  setupHeroParallax();
  setupLinks();
})();
