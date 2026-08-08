/* ============================================================
   BEAUTY & COFFEE — app logic
   100% client-side. No photo or personal data ever leaves the device.
   ============================================================ */
(function(){
  "use strict";

  const state = {
    lang: "nl",
    profile: null,        // 'kind' | 'man' | 'vrouw'
    sunExposed: null,     // bool
    kidsDrink: null,      // 'water' | 'chocolate'
    mood: null,
    category: null,
    caffeine: null,
    milk: "none",
    extras: [],
    context: null,        // 'salon' | 'thuis'
    photoDataUrl: null,
    glow: false,
    cameraStream: null,
    match: null
  };

  const STEP_WEIGHTS = {
    welcome:0, profile:12, sunCheck:22, kidsDrink:22, mood:34, category:48,
    caffeine:60, toppings:72, context:84, photo:92, loading:96, result:100
  };
  let history = ["welcome"];

  /* ---------------- helpers ---------------- */
  const $ = (sel, ctx) => (ctx||document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx||document).querySelectorAll(sel));

  function showToast(msg){
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("is-visible");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=> el.classList.remove("is-visible"), 3200);
  }

  /* ---------------- i18n ---------------- */
  function applyI18n(){
    $$("[data-i18n]").forEach(el => {
      const val = t(el.getAttribute("data-i18n"), state.lang);
      if (val != null) el.innerHTML = val;
    });
    document.documentElement.lang = state.lang;
    $$(".lang-btn").forEach(b => {
      const active = b.dataset.lang === state.lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
    renderProfileOptions();
    renderSunOptions();
    renderKidsDrinkOptions();
    renderMoodOptions();
    renderCategoryOptions();
    renderCaffeineOptions();
    renderMilkOptions();
    renderExtrasOptions();
    renderContextOptions();
    if (state.match) { renderResultDetails(); renderResultBlocks(); }
  }

  function setLang(lang){
    state.lang = lang;
    applyI18n();
  }

  /* ---------------- step navigation ---------------- */
  function updateProgress(name){
    const w = STEP_WEIGHTS[name] ?? 0;
    $("#progressFill").style.width = w + "%";
    $(".progress").style.visibility = (name==="welcome") ? "hidden" : "visible";
  }

  function showStep(name){
    $$(".step").forEach(sec => sec.classList.toggle("is-active", sec.dataset.step === name));
    updateProgress(name);
    window.scrollTo({top:0, behavior:"smooth"});
  }

  function goTo(name){
    history.push(name);
    showStep(name);
  }

  function back(){
    if (history.length > 1) history.pop();
    const prev = history[history.length-1];
    showStep(prev);
  }

  /* ---------------- option rendering ---------------- */
  function renderProfileOptions(){
    const wrap = $("#profileOptions");
    wrap.innerHTML = "";
    PROFILES.forEach(id => {
      const data = t(`profiles.${id}`, state.lang);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "option-card" + (state.profile===id ? " is-selected" : "");
      card.innerHTML = `<span class="option-card__icon">${PROFILE_ICONS[id]}</span>
        <span class="option-card__text">
          <span class="option-card__title">${data.title}</span>
          <span class="option-card__sub">${data.sub}</span>
        </span>`;
      card.addEventListener("click", () => {
        state.profile = id; renderProfileOptions();
        setTimeout(() => { goTo(id === "kind" ? "kidsDrink" : "sunCheck"); }, 200);
      });
      wrap.appendChild(card);
    });
  }

  function renderSunOptions(){
    const wrap = $("#sunOptions");
    wrap.innerHTML = "";
    [["yes",true],["no",false]].forEach(([key,val]) => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "option-tile" + (state.sunExposed===val ? " is-selected" : "");
      tile.innerHTML = `<span class="option-tile__icon">${key==="yes" ? "🌞" : "🌥️"}</span>
        <span class="option-tile__title">${t(`sun_${key}`, state.lang)}</span>`;
      tile.addEventListener("click", () => { state.sunExposed = val; renderSunOptions(); setTimeout(()=>goTo("mood"), 200); });
      wrap.appendChild(tile);
    });
    let notice = wrap.parentElement.querySelector(".sun-notice");
    if (!notice){
      notice = document.createElement("div");
      notice.className = "sun-notice";
      wrap.insertAdjacentElement("afterend", notice);
    }
    notice.innerHTML = `<span class="sun-notice__icon">🧴</span><span>${t("sun_filtered_notice", state.lang)}</span>`;
  }

  function renderKidsDrinkOptions(){
    const wrap = $("#kidsDrinkOptions");
    wrap.innerHTML = "";
    KIDS_DRINKS.forEach(d => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "option-tile" + (state.kidsDrink===d.id ? " is-selected" : "");
      tile.innerHTML = `<span class="option-tile__icon">${d.icon}</span>
        <span class="option-tile__title">${d.name[state.lang]}</span>`;
      tile.addEventListener("click", () => { state.kidsDrink = d.id; renderKidsDrinkOptions(); setTimeout(()=>goTo("context"), 200); });
      wrap.appendChild(tile);
    });
  }

  function renderMoodOptions(){
    const wrap = $("#moodOptions");
    wrap.innerHTML = "";
    MOODS.forEach(id => {
      const data = t(`moods.${id}`, state.lang);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "option-card" + (state.mood===id ? " is-selected" : "");
      card.innerHTML = `<span class="option-card__icon">${MOOD_ICONS[id]}</span>
        <span class="option-card__text">
          <span class="option-card__title">${data.title}</span>
          <span class="option-card__sub">${data.sub}</span>
        </span>`;
      card.addEventListener("click", () => { state.mood = id; renderMoodOptions(); setTimeout(()=>goTo("category"), 220); });
      wrap.appendChild(card);
    });
  }

  function renderCategoryOptions(){
    const wrap = $("#categoryOptions");
    wrap.innerHTML = "";
    CATEGORIES.forEach(id => {
      const data = t(`categories.${id}`, state.lang);
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "option-tile" + (state.category===id ? " is-selected" : "");
      tile.innerHTML = `<span class="option-tile__icon">${CATEGORY_ICONS[id]}</span>
        <span class="option-tile__title">${data.title}</span>
        <span class="option-tile__sub">${data.sub}</span>`;
      tile.addEventListener("click", () => { state.category = id; renderCategoryOptions(); setTimeout(()=>goTo("caffeine"), 220); });
      wrap.appendChild(tile);
    });
  }

  function renderCaffeineOptions(){
    const wrap = $("#caffeineOptions");
    wrap.innerHTML = "";
    CAFFEINE_OPTIONS.forEach(id => {
      const data = t(`caffeine.${id}`, state.lang);
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "option-tile" + (state.caffeine===id ? " is-selected" : "");
      tile.innerHTML = `<span class="option-tile__icon">${CAFFEINE_ICONS[id]}</span>
        <span class="option-tile__title">${data.title}</span>
        <span class="option-tile__sub">${data.sub}</span>`;
      tile.addEventListener("click", () => { state.caffeine = id; renderCaffeineOptions(); setTimeout(()=>goTo("toppings"), 220); });
      wrap.appendChild(tile);
    });
  }

  function renderMilkOptions(){
    const wrap = $("#milkOptions");
    wrap.innerHTML = "";
    MILK_OPTIONS.forEach(id => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip" + (state.milk===id ? " is-selected" : "");
      chip.textContent = t(`milk.${id}`, state.lang);
      chip.addEventListener("click", () => { state.milk = id; renderMilkOptions(); });
      wrap.appendChild(chip);
    });
  }

  function renderExtrasOptions(){
    const wrap = $("#extrasOptions");
    wrap.innerHTML = "";
    EXTRA_OPTIONS.forEach(id => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip" + (state.extras.includes(id) ? " is-selected" : "");
      chip.textContent = t(`extras.${id}`, state.lang);
      chip.addEventListener("click", () => {
        const i = state.extras.indexOf(id);
        if (i>-1) state.extras.splice(i,1); else state.extras.push(id);
        renderExtrasOptions();
      });
      wrap.appendChild(chip);
    });
  }

  function renderContextOptions(){
    const wrap = $("#contextOptions");
    wrap.innerHTML = "";
    [
      { id:"salon", icon:"🏢", key:"context_salon", sub:"context_salon_sub" },
      { id:"thuis", icon:"🏡", key:"context_home", sub:"context_home_sub" }
    ].forEach(opt => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "option-card" + (state.context===opt.id ? " is-selected" : "");
      card.innerHTML = `<span class="option-card__icon">${opt.icon}</span>
        <span class="option-card__text">
          <span class="option-card__title">${t(opt.key, state.lang)}</span>
          <span class="option-card__sub">${t(opt.sub, state.lang)}</span>
        </span>`;
      card.addEventListener("click", () => {
        state.context = opt.id; renderContextOptions();
        setTimeout(() => { opt.id === "salon" ? goTo("photo") : runGeneration(); }, 200);
      });
      wrap.appendChild(card);
    });
  }

  /* ---------------- camera / photo ---------------- */
  const video = () => $("#cameraVideo");
  const canvas = () => $("#captureCanvas");
  const preview = () => $("#photoPreview");
  const placeholder = () => $("#photoPlaceholder");

  async function openCamera(){
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode:"user" }, audio:false });
      state.cameraStream = stream;
      video().srcObject = stream;
      video().hidden = false;
      preview().hidden = true;
      placeholder().hidden = true;
      $("#photoActionsIdle").hidden = true;
      $("#photoActionsCamera").hidden = false;
      $("#photoActionsRetake").hidden = true;
    } catch(err){
      showToast(t("toast_camera_denied", state.lang));
    }
  }

  function stopCamera(){
    if (state.cameraStream){
      state.cameraStream.getTracks().forEach(tr => tr.stop());
      state.cameraStream = null;
    }
    video().hidden = true;
  }

  function snapPhoto(){
    const v = video();
    const c = canvas();
    c.width = v.videoWidth; c.height = v.videoHeight;
    const ctx = c.getContext("2d");
    ctx.translate(c.width, 0); ctx.scale(-1,1);
    ctx.drawImage(v, 0, 0, c.width, c.height);
    state.photoDataUrl = c.toDataURL("image/jpeg", 0.92);
    stopCamera();
    showPhotoPreview();
  }

  function cancelCamera(){
    stopCamera();
    $("#photoActionsCamera").hidden = true;
    $("#photoActionsIdle").hidden = false;
    placeholder().hidden = !!state.photoDataUrl;
    preview().hidden = !state.photoDataUrl;
  }

  function showPhotoPreview(){
    preview().src = state.photoDataUrl;
    preview().hidden = false;
    placeholder().hidden = true;
    $("#photoActionsCamera").hidden = true;
    $("#photoActionsIdle").hidden = true;
    $("#photoActionsRetake").hidden = false;
    $("#generateBtn").disabled = false;
    applyGlowPreview();
  }

  function retakePhoto(){
    state.photoDataUrl = null;
    preview().hidden = true;
    placeholder().hidden = false;
    $("#photoActionsRetake").hidden = true;
    $("#photoActionsIdle").hidden = false;
    $("#generateBtn").disabled = true;
  }

  function handleFileUpload(file){
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => { state.photoDataUrl = e.target.result; showPhotoPreview(); };
    reader.readAsDataURL(file);
  }

  function applyGlowPreview(){
    preview().classList.toggle("glow-active", state.glow);
  }

  /* ---------------- matching engine ---------------- */
  const KID_CONTENT = {
    benefits: { nl:"Een veilige, kindvriendelijke verzorging van kleine handjes met een vrolijk drankje erbij.",
                en:"Safe, kid-friendly care for little hands, paired with a fun drink." },
    funfact: { nl:"Bij Beauty & Coffee gebruiken we voor kinderen altijd milde, niet-prikkende lakjes en producten.",
               en:"At Beauty & Coffee we always use mild, non-stinging polishes and products for children." },
    aftercare: { nl:"Geen specifieke nazorg nodig — laat het lakje gewoon lekker drogen voor het spelen.",
                 en:"No specific aftercare needed — just let the polish dry nicely before playing." }
  };

  function generateMatch(){
    if (state.profile === "kind"){
      const drink = KIDS_DRINKS.find(d => d.id === state.kidsDrink) || KIDS_DRINKS[0];
      const homecare = getHomecareRecommendation("hand", state.lang, null);
      state.match = {
        isKid: true,
        treatment: { name: KIDS_TREATMENT, benefits:KID_CONTENT.benefits, funfact:KID_CONTENT.funfact, aftercare:KID_CONTENT.aftercare },
        drink: { name: drink.name[state.lang], origin:null, notes:null },
        milkLabel: null, extrasLabel: [],
        homecare
      };
      return;
    }

    const treatmentObj = matchTreatment(state.mood, state.profile, !!state.sunExposed);
    let drink;

    if (state.category === "coffee"){
      const list = BEVERAGES.coffee[state.caffeine];
      const bev = pickRandom(list);
      let origin = null;
      if (bev.style !== "iced"){
        const pool = COFFEE_ORIGINS.filter(o => o.decaf === (state.caffeine==="decaf"));
        origin = pool.length ? pickRandom(pool) : pickRandom(COFFEE_ORIGINS);
      }
      drink = { name: bev.name, origin: origin ? origin.name : null, notes: origin ? origin.notes : (bev.notes||null) };
    } else if (state.category === "tea"){
      const pool = state.caffeine === "decaf" ? TEAS_DECAF : TEAS_CAFF;
      drink = { name: pickRandom(pool), origin:null, notes:null };
    } else {
      const list = BEVERAGES.iced[state.caffeine];
      const bev = pickRandom(list);
      drink = { name: bev.name, origin:null, notes: bev.notes||null };
    }

    const milkLabel = state.milk !== "none" ? t(`milk.${state.milk}`, state.lang) : null;
    const extrasLabel = state.extras.map(id => t(`extras.${id}`, state.lang));
    const homecare = getHomecareRecommendation(treatmentObj.homecare.category, state.lang, treatmentObj.homecare.soapHint);

    state.match = { isKid:false, treatment: treatmentObj, drink, milkLabel, extrasLabel, homecare };
  }

  function renderResultDetails(){
    const wrap = $("#resultDetails");
    const m = state.match;
    if (!m) { wrap.innerHTML = ""; return; }
    const drinkFull = m.drink.origin ? [m.drink.origin, m.drink.name].join(" — ") : m.drink.name;
    const customLine = [m.milkLabel, ...m.extrasLabel].filter(Boolean).join(" · ");

    wrap.innerHTML = `
      <div class="result-row">
        <span class="result-row__icon">☕</span>
        <div>
          <div class="result-row__label">${t("drink_label", state.lang)}</div>
          <div class="result-row__value">${drinkFull}</div>
          ${m.drink.notes ? `<div class="result-row__notes">${m.drink.notes}</div>` : ""}
          ${customLine ? `<div class="result-row__notes">${t("with_label", state.lang)}: ${customLine}</div>` : ""}
        </div>
      </div>
      <div class="result-row">
        <span class="result-row__icon">✨</span>
        <div>
          <div class="result-row__label">${t("treatment_label", state.lang)}</div>
          <div class="result-row__value">${m.treatment.name}</div>
        </div>
      </div>`;

    $("#resultTitle").textContent = t(state.context === "thuis" ? "result_saved_title" : "result_title", state.lang);
  }

  function renderResultBlocks(){
    const wrap = $("#resultBlocks");
    const m = state.match;
    if (!m) { wrap.innerHTML = ""; return; }
    const lang = state.lang;
    const homecareBody = m.homecare
      ? `<p class="result-block__product">${m.homecare.productName}</p><p>${m.homecare.usage}</p>`
      : `<p>${t("homecare_generic_tip", lang)}</p>`;

    // --- VOEG DE ZONADVIES-CHECK HIER TOE ---
    let aftercareText = m.treatment.aftercare[lang];
    const tId = m.treatment.id || "";
    if (tId.includes("wax") || tId.includes("epil") || m.treatment.category === "hair-removal") {
      const sunTip = lang === "nl" 
        ? "<br><br>⚠️ <strong>Zonadvies:</strong> Vermijd directe zon gedurende 24 uur na het ontharen. Gebruik een zonnebrandcrème met hoge SPF om roodheid en pigmentvlekken te voorkomen."
        : "<br><br>⚠️ <strong>Sun advice:</strong> Avoid direct sun for 24 hours after hair removal. Always apply high SPF sunscreen to protect your skin.";
      aftercareText += sunTip;
    }
     
    wrap.innerHTML = `
      <div class="result-block">
        <div class="result-block__head"><span class="result-block__icon">🌟</span><span class="result-block__title">${t("block_benefits", lang)}</span></div>
        <div class="result-block__body"><p>${m.treatment.benefits[lang]}</p></div>
      </div>
      <div class="result-block">
        <div class="result-block__head"><span class="result-block__icon">💡</span><span class="result-block__title">${t("block_funfact", lang)}</span></div>
        <div class="result-block__body"><p>${m.treatment.funfact[lang]}</p></div>
      </div>
      <div class="result-block">
        <div class="result-block__head"><span class="result-block__icon">📋</span><span class="result-block__title">${t("block_aftercare", lang)}</span></div>
        <div class="result-block__body"><p>${m.treatment.aftercare[lang]}</p></div>
      </div>
      <div class="result-block${m.homecare ? "" : " result-block--muted"}">
        <div class="result-block__head"><span class="result-block__icon">🛍️</span><span class="result-block__title">${t("block_homecare", lang)}</span></div>
        <div class="result-block__body">${homecareBody}</div>
      </div>`;
  }

  /* ---------------- canvas composite ---------------- */
  let logoImg = null;
  function loadLogo(){
    return new Promise(resolve => {
      if (logoImg) return resolve(logoImg);
      const img = new Image();
      img.onload = () => { logoImg = img; resolve(img); };
      img.src = "assets/logo-transparent.png";
    });
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight){
    const words = text.split(" ");
    let line = "";
    let lines = [];
    words.forEach(w => {
      const test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > maxWidth && line){
        lines.push(line); line = w;
      } else line = test;
    });
    if (line) lines.push(line);
    lines.forEach((l,i) => ctx.fillText(l, x, y + i*lineHeight));
    return lines.length;
  }

  async function drawResultCanvas(){
    const out = $("#resultCanvas");
    const W = 1080, H = 1350;
    out.width = W; out.height = H;
    const ctx = out.getContext("2d");

    if (state.photoDataUrl){
      await new Promise(res => {
        const img = new Image();
        img.onload = () => {
          const scale = Math.max(W/img.width, H/img.height);
          const dw = img.width*scale, dh = img.height*scale;
          ctx.save();
          if (state.glow){ ctx.filter = "brightness(1.08) saturate(1.15) contrast(0.96)"; }
          ctx.drawImage(img, (W-dw)/2, (H-dh)/2, dw, dh);
          ctx.restore();
          res();
        };
        img.src = state.photoDataUrl;
      });
    } else {
      const grad = ctx.createLinearGradient(0,0,0,H);
      grad.addColorStop(0,"#D8CEC0"); grad.addColorStop(1,"#C7BAA6");
      ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);
      // decorative bean pattern for the "saved for later" tile
      ctx.save();
      ctx.globalAlpha = 0.12;
      for (let i=0;i<10;i++){
        ctx.save();
        ctx.translate(90 + (i%4)*280, 220 + Math.floor(i/4)*380);
        ctx.rotate(0.35);
        ctx.fillStyle = "#241A14";
        ctx.beginPath();
        ctx.ellipse(0,0,55,80,0,0,Math.PI*2);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    }

    const scrim = ctx.createLinearGradient(0,H*0.42,0,H);
    scrim.addColorStop(0,"rgba(20,14,10,0)");
    scrim.addColorStop(1,"rgba(20,14,10,0.86)");
    ctx.fillStyle = scrim; ctx.fillRect(0,H*0.42,W,H*0.58);

    const logo = await loadLogo();
    const logoSize = 96;
    ctx.save();
    ctx.globalAlpha = 0.92;
    ctx.drawImage(logo, 40, 40, logoSize, logoSize);
    ctx.restore();
    ctx.fillStyle = "#F6F0E6";
    ctx.font = "600 34px 'Playfair Display', Georgia, serif";
    ctx.textBaseline = "middle";
    ctx.fillText("Beauty & Coffee", 40+logoSize+18, 40+logoSize/2-10);
    ctx.font = "italic 20px 'Playfair Display', Georgia, serif";
    ctx.fillStyle = "rgba(246,240,230,0.85)";
    ctx.fillText(t("overlay_tagline", state.lang), 40+logoSize+18, 40+logoSize/2+22);

    const m = state.match;
    if (m){
      const drinkFull = m.drink.origin ? [m.drink.origin, m.drink.name].join(" — ") : m.drink.name;
      const pad = 44;
      let y = H - 300;

      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#D9AE6C";
      ctx.font = "600 30px 'Playfair Display', Georgia, serif";
      ctx.fillText(t("overlay_title", state.lang), pad, y);
      y += 52;

      ctx.fillStyle = "#F6F0E6";
      ctx.font = "500 30px Jost, Arial, sans-serif";
      const drinkLine = t("overlay_drink_prefix", state.lang) + drinkFull;
      y += (wrapText(ctx, drinkLine, pad, y, W-pad*2, 38) -1) * 38;
      y += 50;

      ctx.font = "500 30px Jost, Arial, sans-serif";
      const treatLine = t("overlay_treatment_prefix", state.lang) + m.treatment.name;
      wrapText(ctx, treatLine, pad, y, W-pad*2, 38);
    }

    ctx.fillStyle = "rgba(246,240,230,0.7)";
    ctx.font = "italic 22px 'Playfair Display', Georgia, serif";
    ctx.fillText("Where Beauty Meets Coffee", 44, H-40);
  }

  /* ---------------- share / download ---------------- */
  function canvasToBlob(){
    return new Promise(res => $("#resultCanvas").toBlob(res, "image/jpeg", 0.95));
  }

  async function downloadImage(){
    const blob = await canvasToBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "beauty-and-coffee-match.jpg";
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    showToast(t("toast_downloaded", state.lang));
  }

  async function shareImage(){
    const blob = await canvasToBlob();
    const file = new File([blob], "beauty-and-coffee-match.jpg", { type:"image/jpeg" });
    if (navigator.canShare && navigator.canShare({ files:[file] })){
      try { await navigator.share({ files:[file], title:"Beauty & Coffee", text: t("share_text", state.lang) }); }
      catch(err){ /* user cancelled */ }
    } else {
      showToast(t("toast_share_unsupported", state.lang));
      downloadImage();
    }
  }

  /* ---------------- reset ---------------- */
  function resetApp(){
    stopCamera();
    state.profile = null; state.sunExposed = null; state.kidsDrink = null;
    state.mood = null; state.category = null; state.caffeine = null;
    state.milk = "none"; state.extras = []; state.context = null;
    state.photoDataUrl = null; state.glow = false; state.match = null;
    $("#glowToggle").checked = false;
    retakePhoto();
    history = ["welcome"];
    applyI18n();
    showStep("welcome");
  }

  /* ---------------- wire up ---------------- */
  function init(){
    applyI18n();
    showStep("welcome");

    $$(".lang-btn").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

    document.body.addEventListener("click", e => {
      const el = e.target.closest("[data-action]");
      if (!el) return;
      const action = el.dataset.action;
      if (action === "start") goTo("profile");
      if (action === "back") back();
      if (action === "to-context") goTo("context");
      if (action === "open-camera") openCamera();
      if (action === "snap-photo") snapPhoto();
      if (action === "cancel-camera") cancelCamera();
      if (action === "retake") retakePhoto();
      if (action === "upload-photo") $("#fileInput").click();
      if (action === "generate") runGeneration();
      if (action === "share") shareImage();
      if (action === "download") downloadImage();
      if (action === "restart") resetApp();
    });

    $("#fileInput").addEventListener("change", e => handleFileUpload(e.target.files[0]));
    $("#glowToggle").addEventListener("change", e => { state.glow = e.target.checked; applyGlowPreview(); });
  }

  async function runGeneration(){
    goTo("loading");
    generateMatch();
    await new Promise(r => setTimeout(r, 1600));
    await drawResultCanvas();
    renderResultDetails();
    renderResultBlocks();
    goTo("result");
    if (state.context === "thuis") showToast(t("toast_saved_home", state.lang));
  }

  document.addEventListener("DOMContentLoaded", init);

  /* ---------------- PWA service worker ---------------- */
  if ("serviceWorker" in navigator){
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(()=>{});
    });
  }
})();
