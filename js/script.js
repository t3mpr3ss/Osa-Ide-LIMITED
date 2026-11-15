/* OSA-IDE NIGERIA LIMITED - site script */

/* ============================================================
   EDIT YOUR CONTACT DETAILS HERE (used on every page).
   Leave "" to hide. WhatsApp: digits only with country code,
   e.g. "2348012345678".
   ============================================================ */
const CONTACT = {
  email: "osaidenigltd@gmail.com",      // e.g. "info@osa-ide.com"
  phone: "+2348028711506",      // e.g. "+234 801 234 5678"
  whatsapp: "+2347037091569"    // e.g. "2348012345678"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-year").forEach(el => el.textContent = new Date().getFullYear());

  const set = (sel, text, href) => document.querySelectorAll(sel).forEach(el => {
    if (!text) { el.hidden = true; return; }
    const a = el.querySelector("a");
    if (a) { a.textContent = text; a.href = href; }
  });
  set(".js-email", CONTACT.email, "mailto:" + CONTACT.email);
  set(".js-phone", CONTACT.phone, "tel:" + CONTACT.phone.replace(/\s/g, ""));

  document.querySelectorAll(".floating-contact").forEach(a => {
    if (CONTACT.whatsapp) {
      a.href = "https://wa.me/" + CONTACT.whatsapp;
      a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", "Chat with OSA-IDE on WhatsApp");
      a.innerHTML = '<i class="bi bi-whatsapp"></i>';
    }
  });

  // Missing photo: show the dashed placeholder instead of a broken icon
  document.querySelectorAll("img[data-fallback]").forEach(img => {
    const miss = () => img.classList.add("img-missing");
    img.addEventListener("error", miss);
    if (img.complete && img.naturalWidth === 0) miss();
  });
});