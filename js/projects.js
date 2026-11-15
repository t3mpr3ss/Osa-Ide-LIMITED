/* ============================================================
   PROJECT DATA. project.html fills itself from this list.
   - "images": the five photo paths, copied from your IMAGES folders.
   - Locations came from your folder names: CONFIRM with your dad.
   - Leave "" for anything not confirmed; empty fields are hidden.
   ============================================================ */
const PROJECTS = [
  { id:"condominium", title:"Three-Storey Condominium", category:"Residential",
    programme:"National Housing Programme", location:"Owerri, Imo State", scope:"", completed:"",
    summary:"A three-storey residential condominium delivered under the National Housing Programme.",
    images:[
      "./IMAGES/3 storey, Condominium, National Housing Programme  Owerri, Imo State/WhatsApp Image 2025-10-14 at 11.25.42_226968fe.jpg",
      "./IMAGES/3 storey, Condominium, National Housing Programme  Owerri, Imo State/WhatsApp Image 2025-10-14 at 11.25.42_53c9c1ec.jpg",
      "./IMAGES/3 storey, Condominium, National Housing Programme  Owerri, Imo State/WhatsApp Image 2025-10-14 at 11.25.41_8ce76344.jpg",
      "./IMAGES/3 storey, Condominium, National Housing Programme  Owerri, Imo State/WhatsApp Image 2025-10-14 at 11.25.41_1a6a74c1.jpg",
      "./IMAGES/3 storey, Condominium, National Housing Programme  Owerri, Imo State/WhatsApp Image 2025-10-14 at 11.25.40_8ea8be6a.jpg"] },
  { id:"mosque", title:"NAF Senior Quarters Central Mosque", category:"Institutional",
    programme:"", location:"Kyami, Abuja", scope:"", completed:"",
    summary:"Central mosque for the NAF Senior Quarters.",
    images:[
      "./IMAGES/NAF Senior Quarters Central Mosque, Kyami, Abuja/WhatsApp Image 2025-10-14 at 11.17.20_ac782f0f.jpg",
      "./IMAGES/NAF Senior Quarters Central Mosque, Kyami, Abuja/WhatsApp Image 2025-10-14 at 11.17.20_bb92a521.jpg",
      "./IMAGES/NAF Senior Quarters Central Mosque, Kyami, Abuja/WhatsApp Image 2025-10-14 at 11.17.21_2d140257.jpg",
      "./IMAGES/NAF Senior Quarters Central Mosque, Kyami, Abuja/WhatsApp Image 2025-10-14 at 11.17.22_3621f8ab.jpg",
      "./IMAGES/NAF Senior Quarters Central Mosque, Kyami, Abuja/WhatsApp Image 2025-10-14 at 11.17.22_c847a633.jpg"] },
  { id:"epe-roads", title:"Internal Roads, Epe Grammar School", category:"Road construction",
    programme:"", location:"Epe, Lagos State", scope:"", completed:"",
    summary:"Construction of internal roads at Epe Grammar School.",
    images:[
      "./IMAGES/Internal roads at Epe grammer school, Epe Lagos State/2.jpg",
      "./IMAGES/Internal roads at Epe grammer school, Epe Lagos State/5.jpg",
      "./IMAGES/Internal roads at Epe grammer school, Epe Lagos State/4.jpg",
      "./IMAGES/Internal roads at Epe grammer school, Epe Lagos State/WhatsApp Image 2025-10-14 at 10.31.43_08352368.jpg",
      "./IMAGES/Internal roads at Epe grammer school, Epe Lagos State/WhatsApp Image 2025-10-14 at 10.34.28_ee94f1ac.jpg"] },
  { id:"hayin-gada", title:"Construction of Hayin Gada", category:"Road construction",
    programme:"", location:"Abadawa, Kaduna State", scope:"", completed:"",
    summary:"Road construction works at Hayin Gada.",
    images:[
      "./IMAGES/Construction of Hayin Gada, Abadawa, Kaduna State/WhatsApp Image 2025-10-14 at 11.08.35_11b469a8.jpg",
      "./IMAGES/Construction of Hayin Gada, Abadawa, Kaduna State/WhatsApp Image 2025-10-14 at 11.08.36_ebd5990e.jpg",
      "./IMAGES/Construction of Hayin Gada, Abadawa, Kaduna State/WhatsApp Image 2025-10-14 at 11.08.37_2944d10f.jpg",
      "./IMAGES/Construction of Hayin Gada, Abadawa, Kaduna State/WhatsApp Image 2025-10-14 at 11.08.37_c6ace978.jpg",
      "./IMAGES/Construction of Hayin Gada, Abadawa, Kaduna State/WhatsApp Image 2025-10-14 at 11.08.37_e227835f.jpg"] },
  { id:"borehole", title:"Borehole and FRP Water Tanks", category:"Water infrastructure",
    programme:"", location:"Various sites", scope:"Borehole, FRP water tanks and water treatment", completed:"",
    summary:"Borehole, FRP water storage tanks and water treatment at various sites.",
    images:[
      "./IMAGES/Borehole, FRP water tanks and water treatment at various Sites/WhatsApp Image 2025-10-14 at 12.02.41_263c1953.jpg",
      "./IMAGES/Borehole, FRP water tanks and water treatment at various Sites/WhatsApp Image 2025-10-14 at 12.02.43_6a040524.jpg",
      "./IMAGES/Borehole, FRP water tanks and water treatment at various Sites/WhatsApp Image 2025-10-14 at 12.02.43_50bfcf1d.jpg",
      "./IMAGES/Borehole, FRP water tanks and water treatment at various Sites/WhatsApp Image 2025-10-14 at 12.02.42_f7eac87a.jpg",
      "./IMAGES/Borehole, FRP water tanks and water treatment at various Sites/WhatsApp Image 2025-10-14 at 12.02.42_50b4176b.jpg"] },
  { id:"jahi-residence", title:"Residential Building, Jahi", category:"Residential",
    programme:"", location:"Jahi, Abuja", scope:"", completed:"",
    summary:"Residential building at Jahi, Abuja.",
    images:[
      "./IMAGES/Residential building at Jahi, Abuja/WhatsApp Image 2025-10-14 at 11.12.37_fa21b66a.jpg",
      "./IMAGES/Residential building at Jahi, Abuja/WhatsApp Image 2025-10-14 at 11.11.55_d68dd30c.jpg",
      "./IMAGES/Residential building at Jahi, Abuja/WhatsApp Image 2025-10-14 at 11.11.55_2291aaf0.jpg",
      "./IMAGES/Residential building at Jahi, Abuja/WhatsApp Image 2025-10-14 at 11.12.37_d055ef50.jpg",
      "./IMAGES/Residential building at Jahi, Abuja/WhatsApp Image 2025-10-14 at 11.12.38_3fa52443.jpg"] }
];

/* ============================================================
   PHOTO PATHS: copied live from index.html.
   The sliders on index.html already work, so the project pages read
   the same photo paths from them. (Keep each slider's id, e.g. car-mosque.)
   If index.html can't be read, the paths listed above are used instead.
   ============================================================ */
const PROJECTS_READY = fetch("index.html")
  .then(function (r) { return r.ok ? r.text() : Promise.reject(); })
  .then(function (t) {
    var d = new DOMParser().parseFromString(t, "text/html");
    PROJECTS.forEach(function (p) {
      var imgs = Array.prototype.map.call(d.querySelectorAll("#car-" + p.id + " .carousel-item img"),
        function (i) { return i.getAttribute("src"); }).filter(Boolean);
      if (imgs.length) p.images = imgs;
    });
  })
  .catch(function () {});