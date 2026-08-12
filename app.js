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
    healthFlags: { phlebitis:false, contactLenses:false, dietExercise:false },
    kidsDrink: null,      // 'water' | 'chocolate'
    mood: null,
    category: null,
    temperature: null,   // 'hot' | 'iced'
    caffeine: null,
    milk: "none",
    extras: [],
    context: null,        // 'salon' | 'thuis'
    photoDataUrl: null,
    filter: "none",       // 'none' | 'glow' | 'warm' | 'bw' | 'vintage'
    cameraStream: null,
    match: null
  };

  const STEP_WEIGHTS = {
    welcome:0, profile:10, sunCheck:20, healthCheck:28, kidsDrink:20, mood:36, category:46,
    temperature:56, caffeine:66, toppings:76, context:84, photo:92, loading:96, result:100
  };
  let history = ["welcome"];

  const FILTERS = {
    none:  "",
    glow:    "brightness(1.08) saturate(1.15) contrast(0.96)",
    warm:    "sepia(0.28) saturate(1.35) brightness(1.05)",
    bw:      "grayscale(1) contrast(1.08)",
    vintage: "sepia(0.35) contrast(0.9) brightness(1.05) saturate(0.8)"
  };
  const FILTER_IDS = ["none","glow","warm","bw","vintage"];

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
    renderHealthOptions();
    renderKidsDrinkOptions();
    renderMoodOptions();
    renderCategoryOptions();
    renderTemperatureOptions();
    renderCaffeineOptions();
    renderMilkOptions();
    renderExtrasOptions();
    renderContextOptions();
    renderFilterOptions();
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

    if (name === "temperature") {
      renderTemperatureOptions();
    }
    if (name === "toppings") {
      renderMilkOptions();
      renderExtrasOptions();
    }
    if (name === "photo") {
      enterPhotoStep();
    } else if (state.cameraStream) {
      stopCamera();
    }

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
      tile.addEventListener("click", () => { state.sunExposed = val; renderSunOptions(); setTimeout(()=>goTo("healthCheck"), 200); });
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

  function renderHealthOptions(){
    const checkWrap = $("#healthChecklist");
    if (checkWrap){
      checkWrap.innerHTML = "";
      [
        ["phlebitis", "🩸"],
        ["contactLenses", "👓"]
      ].forEach(([key, icon]) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "chip chip--check" + (state.healthFlags[key] ? " is-selected" : "");
        chip.innerHTML = `<span class="chip__icon">${icon}</span> ${t(`health_${key}`, state.lang)}`;
        chip.addEventListener("click", () => {
          state.healthFlags[key] = !state.healthFlags[key];
          renderHealthOptions();
        });
        checkWrap.appendChild(chip);
      });
    }

    const dietWrap = $("#dietOptions");
    if (dietWrap){
      dietWrap.innerHTML = "";
      [["yes",true],["no",false]].forEach(([key,val]) => {
        const tile = document.createElement("button");
        tile.type = "button";
        tile.className = "option-tile" + (state.healthFlags.dietExercise===val ? " is-selected" : "");
        tile.innerHTML = `<span class="option-tile__icon">${val ? "🥗" : "🍽️"}</span>
          <span class="option-tile__title">${t(`diet_${key}`, state.lang)}</span>`;
        tile.addEventListener("click", () => { state.healthFlags.dietExercise = val; renderHealthOptions(); });
        dietWrap.appendChild(tile);
      });
    }
  }

  function renderKidsDrinkOptions(){
    const wrap = $("#kidsDrinkOptions");
    wrap.innerHTML = "";
    KIDS_DRINKS.forEach(d => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "option-tile option-tile--kid" + (state.kidsDrink===d.id ? " is-selected" : "");
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
      tile.addEventListener("click", () => { state.category = id; renderCategoryOptions(); setTimeout(()=>goTo("temperature"), 220); });
      wrap.appendChild(tile);
    });
  }

  function renderTemperatureOptions(){
    const wrap = $("#temperatureOptions");
    if (!wrap) return;
    wrap.innerHTML = "";
    TEMPERATURE_OPTIONS.forEach(id => {
      const data = t(`temperature.${id}`, state.lang);
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "option-tile" + (state.temperature===id ? " is-selected" : "");
      tile.innerHTML = `<span class="option-tile__icon">${TEMPERATURE_ICONS[id]}</span>
        <span class="option-tile__title">${data.title}</span>
        <span class="option-tile__sub">${data.sub}</span>`;
      tile.addEventListener("click", () => { state.temperature = id; renderTemperatureOptions(); setTimeout(()=>goTo("caffeine"), 220); });
      wrap.appendChild(tile);
    });

    const hint = $("#temperatureHint");
    if (hint){
      if (state.category === "tea"){
        hint.hidden = false;
        hint.textContent = t("temperature_tea_hint", state.lang);
      } else {
        hint.hidden = true;
      }
    }
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
    const group = $("#milkGroup");
    const wrap = $("#milkOptions");
    // Plain teas don't take milk — except Matcha, our only caffeinated tea
    // that comes with a milk option (choosing milk turns it into a Matcha
    // Latte). So: hidden for decaf tea, shown otherwise.
    const milkApplies = !(state.category === "tea" && state.caffeine === "decaf");
    if (group) group.hidden = !milkApplies;
    if (!milkApplies && state.milk !== "none") state.milk = "none";

    wrap.innerHTML = "";
    MILK_OPTIONS.forEach(id => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip" + (state.milk===id ? " is-selected" : "");
      chip.textContent = t(`milk.${id}`, state.lang);
      chip.addEventListener("click", () => { state.milk = id; renderMilkOptions(); });
      wrap.appendChild(chip);
    });

    let hint = group ? group.querySelector(".milk-hint") : null;
    if (milkApplies && state.category === "tea"){
      if (!hint){
        hint = document.createElement("p");
        hint.className = "milk-hint";
        group.appendChild(hint);
      }
      hint.textContent = t("milk_tea_hint", state.lang);
    } else if (hint){
      hint.remove();
    }
  }

  function renderExtrasOptions(){
    const wrap = $("#extrasOptions");
    wrap.innerHTML = "";
    const options = state.category === "tea" ? TEA_EXTRA_OPTIONS : EXTRA_OPTIONS;
    // drop any previously-picked extras that no longer apply (e.g. switched from coffee to tea)
    state.extras = state.extras.filter(id => options.includes(id));
    options.forEach(id => {
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
        setTimeout(() => { goTo("photo"); }, 200);
      });
      wrap.appendChild(card);
    });
  }

  /* ---------------- camera / photo ---------------- */
  const video = () => $("#cameraVideo");
  const canvas = () => $("#captureCanvas");
  const preview = () => $("#photoPreview");
  const placeholder = () => $("#photoPlaceholder");
  let cameraFacing = "user";

  /* Called every time the photo step becomes active. The camera/upload flow
     is available regardless of salon vs. thuis — thuis just adds a visible
     "skip this" hint since Generate never requires a photo either way. */
  function enterPhotoStep(){
    $("#photoEditor").hidden = true;
    $("#photoStage").hidden = false;
    $("#filterRow").hidden = false;
    $("#photoHomeBlock").hidden = state.context !== "thuis";
    $("#generateBtn").disabled = false;

    if (state.photoDataUrl){
      showPhotoPreview();
    } else {
      openCamera();
    }
  }

  async function openCamera(facing){
    if (facing) cameraFacing = facing;
    stopCamera();
    $("#photoEditor").hidden = true;
    $("#photoStage").hidden = false;
    placeholder().hidden = false;
    placeholder().querySelector("p").textContent = t("camera_starting", state.lang);
    video().hidden = true;
    preview().hidden = true;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: cameraFacing } }, audio:false });
      state.cameraStream = stream;
      const v = video();
      v.srcObject = stream;
      v.hidden = false;
      placeholder().hidden = true;
      applyGlowPreview();
      try { await v.play(); } catch(e){ /* some browsers auto-play once metadata loads */ }
      $("#photoActionsIdle").hidden = true;
      $("#photoActionsCamera").hidden = false;
      $("#photoActionsRetake").hidden = true;
      $("#uploadInsteadBtn").hidden = false;
      updateSwitchCameraVisibility();
    } catch(err){
      placeholder().hidden = false;
      placeholder().querySelector("p").textContent = t("camera_denied_text", state.lang);
      $("#photoActionsCamera").hidden = true;
      $("#uploadInsteadBtn").hidden = true;
      $("#photoActionsIdle").hidden = false;
      $("#switchCameraBtn").hidden = true;
      showToast(t("toast_camera_denied", state.lang));
    }
  }

  async function updateSwitchCameraVisibility(){
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cams = devices.filter(d => d.kind === "videoinput");
      $("#switchCameraBtn").hidden = cams.length < 2;
    } catch(e){
      $("#switchCameraBtn").hidden = false; // let the user try regardless if we can't enumerate
    }
  }

  function switchCamera(){
    openCamera(cameraFacing === "user" ? "environment" : "user");
  }

  function stopCamera(){
    if (state.cameraStream){
      state.cameraStream.getTracks().forEach(tr => tr.stop());
      state.cameraStream = null;
    }
    video().hidden = true;
    $("#switchCameraBtn").hidden = true;
  }

  function snapPhoto(){
    const v = video();
    const c = canvas();
    c.width = v.videoWidth; c.height = v.videoHeight;
    const ctx = c.getContext("2d");
    ctx.drawImage(v, 0, 0, c.width, c.height);
    const dataUrl = c.toDataURL("image/jpeg", 0.92);
    stopCamera();
    openEditor(dataUrl, { previousUrl: state.photoDataUrl });
  }

  function cancelCamera(){
    stopCamera();
    $("#photoActionsCamera").hidden = true;
    $("#uploadInsteadBtn").hidden = true;
    $("#photoActionsIdle").hidden = false;
    placeholder().hidden = !!state.photoDataUrl;
    preview().hidden = !state.photoDataUrl;
  }

  function showPhotoPreview(){
    $("#photoEditor").hidden = true;
    $("#photoStage").hidden = false;
    preview().src = state.photoDataUrl;
    preview().hidden = false;
    placeholder().hidden = true;
    $("#photoActionsCamera").hidden = true;
    $("#uploadInsteadBtn").hidden = true;
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
  }

  function handleFileUpload(file){
    if (!file) return;
    stopCamera();
    const reader = new FileReader();
    reader.onload = e => openEditor(e.target.result, { previousUrl: state.photoDataUrl });
    reader.readAsDataURL(file);
  }

  /* ---------------- photo editor: crop, zoom & rotate ---------------- */
  const editor = {
    img: null, rotation: 0, scale: 1, offsetX: 0, offsetY: 0,
    dragging: false, lastX: 0, lastY: 0, previousUrl: null
  };
  const editorCanvasEl = () => $("#editorCanvas");

  function openEditor(dataUrl, opts){
    opts = opts || {};
    editor.previousUrl = opts.previousUrl || null;
    editor.rotation = 0; editor.scale = 1; editor.offsetX = 0; editor.offsetY = 0;
    $("#editorZoom").value = 1;

    const img = new Image();
    img.onload = () => {
      editor.img = img;
      $("#photoStage").hidden = true;
      $("#filterRow").hidden = true;
      $("#photoActionsCamera").hidden = true;
      $("#uploadInsteadBtn").hidden = true;
      $("#photoActionsIdle").hidden = true;
      $("#photoActionsRetake").hidden = true;
      $("#photoEditor").hidden = false;
      drawEditor();
    };
    img.src = dataUrl;
  }

  function editorBaseScale(){
    const c = editorCanvasEl();
    const swapped = editor.rotation % 180 !== 0;
    const iw = swapped ? editor.img.height : editor.img.width;
    const ih = swapped ? editor.img.width : editor.img.height;
    return Math.max(c.width / iw, c.height / ih);
  }

  function clampEditorOffset(){
    const c = editorCanvasEl();
    const scale = editorBaseScale() * editor.scale;
    const swapped = editor.rotation % 180 !== 0;
    const dw = (swapped ? editor.img.height : editor.img.width) * scale;
    const dh = (swapped ? editor.img.width : editor.img.height) * scale;
    const maxX = Math.max(0, (dw - c.width) / 2);
    const maxY = Math.max(0, (dh - c.height) / 2);
    editor.offsetX = Math.min(maxX, Math.max(-maxX, editor.offsetX));
    editor.offsetY = Math.min(maxY, Math.max(-maxY, editor.offsetY));
  }

  function drawEditor(){
    if (!editor.img) return;
    clampEditorOffset();
    const c = editorCanvasEl();
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#241A14";
    ctx.fillRect(0, 0, c.width, c.height);
    const scale = editorBaseScale() * editor.scale;
    ctx.save();
    ctx.translate(c.width/2 + editor.offsetX, c.height/2 + editor.offsetY);
    ctx.rotate(editor.rotation * Math.PI / 180);
    ctx.scale(scale, scale);
    ctx.drawImage(editor.img, -editor.img.width/2, -editor.img.height/2);
    ctx.restore();
  }

  function editorRotate(){
    editor.rotation = (editor.rotation + 90) % 360;
    editor.offsetX = 0; editor.offsetY = 0;
    drawEditor();
  }

  function editorConfirm(){
    state.photoDataUrl = editorCanvasEl().toDataURL("image/jpeg", 0.92);
    showPhotoPreview();
  }

  function editorCancel(){
    $("#photoEditor").hidden = true;
    if (editor.previousUrl){
      state.photoDataUrl = editor.previousUrl;
      showPhotoPreview();
    } else {
      state.photoDataUrl = null;
      openCamera();
    }
  }

  function editExistingPhoto(){
    if (!state.photoDataUrl) return;
    openEditor(state.photoDataUrl, { previousUrl: state.photoDataUrl });
  }

  function setupEditorDrag(){
    const c = editorCanvasEl();
    const ratio = () => c.width / c.getBoundingClientRect().width;

    c.addEventListener("pointerdown", e => {
      editor.dragging = true;
      editor.lastX = e.clientX; editor.lastY = e.clientY;
      c.setPointerCapture(e.pointerId);
    });
    c.addEventListener("pointermove", e => {
      if (!editor.dragging) return;
      const r = ratio();
      editor.offsetX += (e.clientX - editor.lastX) * r;
      editor.offsetY += (e.clientY - editor.lastY) * r;
      editor.lastX = e.clientX; editor.lastY = e.clientY;
      drawEditor();
    });
    const endDrag = () => { editor.dragging = false; };
    c.addEventListener("pointerup", endDrag);
    c.addEventListener("pointercancel", endDrag);
    c.addEventListener("pointerleave", endDrag);

    $("#editorZoom").addEventListener("input", e => {
      editor.scale = parseFloat(e.target.value);
      drawEditor();
    });
  }

  function applyGlowPreview(){
    const filterCss = FILTERS[state.filter] || "";
    preview().style.filter = filterCss;
    video().style.filter = filterCss;
  }

  function renderFilterOptions(){
    const wrap = $("#filterOptions");
    if (!wrap) return;
    wrap.innerHTML = "";
    FILTER_IDS.forEach(id => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip" + (state.filter===id ? " is-selected" : "");
      chip.textContent = t(`filters.${id}`, state.lang);
      chip.addEventListener("click", () => { state.filter = id; renderFilterOptions(); applyGlowPreview(); });
      wrap.appendChild(chip);
    });
  }

  /* ---------------- matching engine ---------------- */
  const KID_CONTENT = {
    benefits: { nl:"Een veilige, kindvriendelijke verzorging van kleine handjes met een drankje erbij.",
                en:"Safe, kid-friendly care for little hands, paired with a drink." },
    funfact: { nl:"We gebruiken peel-off nagellak speciaal voor kinderen — na een paar dagen kunnen ze het laagje er zelf, in één stuk, afpellen.",
               en:"We use peel-off nail polish made for kids — after a few days they can peel the whole layer off themselves." },
    aftercare: { nl:"Geen aceton of remover nodig — laat het laklaagje eerst goed drogen, daarna is het gewoon zelf af te pellen.",
                 en:"No acetone or remover needed — just let the polish dry first, then it simply peels off by hand." }
  };

  function generateMatch(){
    if (state.profile === "kind"){
      const drinkDef = KIDS_DRINKS.find(d => d.id === state.kidsDrink) || KIDS_DRINKS[0];
      const homecarePick = pickHomecareProduct("hand", null);
      state.match = {
        isKid: true,
        treatment: { name: KIDS_TREATMENT, benefits:KID_CONTENT.benefits, funfact:KID_CONTENT.funfact, aftercare:KID_CONTENT.aftercare },
        drinkId: drinkDef.id, drink: null,
        milkId: "none", extrasIds: [],
        homecarePick
      };
      return;
    }

    const treatmentObj = matchTreatment(state.mood, state.profile, !!state.sunExposed, state.healthFlags);
    let drink;
    const wantsMilk = state.milk !== "none";
    const isIced = state.temperature === "iced";

    if (state.category === "coffee"){
      if (isIced){
        const list = BEVERAGES.coffeeIced[state.caffeine];
        const bev = pickRandom(list);
        drink = { name: bev.name, origin:null, notes: bev.notes||null };
      } else {
        // "Geen melk" must only ever surface black/slow-brew coffees; a milk
        // choice must only ever surface milk-based coffees — no more mismatches.
        const fullList = BEVERAGES.coffee[state.caffeine];
        let list = fullList.filter(b => wantsMilk ? b.style === "milk" : b.style !== "milk");
        if (!list.length) list = fullList; // safety net if a filter ever empties the pool
        const bev = pickRandom(list);
        const pool = COFFEE_ORIGINS.filter(o => o.decaf === (state.caffeine==="decaf"));
        const origin = pool.length ? pickRandom(pool) : pickRandom(COFFEE_ORIGINS);
        drink = { name: bev.name, origin: origin.name, notes: origin.notes };
      }
    } else { // tea — always served hot, except for the one iced exception below
      if (state.caffeine === "caff" && wantsMilk){
        // Matcha is the only tea on the menu that takes milk — choosing a
        // milk preference here always means Matcha Latte (hot, or iced if
        // Iced was picked). Every other tea stays hot regardless of that choice.
        drink = { name: isIced ? "Iced Matcha Latte" : "Matcha Latte", origin:null, notes:null };
      } else {
        const pool = state.caffeine === "decaf" ? [...TEAS_DECAF, ...HOT_EXTRAS_DECAF] : TEAS_CAFF;
        drink = { name: pickRandom(pool), origin:null, notes:null };
      }
    }

    const homecarePick = pickHomecareProduct(treatmentObj.homecare.category, treatmentObj.homecare.soapHint);

    // build a copy of the treatment so we can safely append a lens warning
    // without mutating the shared catalog entry
    let treatment = treatmentObj;
    if (treatmentObj.lensWarning && state.healthFlags.contactLenses){
      treatment = {
        ...treatmentObj,
        aftercare: {
          nl: treatmentObj.aftercare.nl + " " + t("lens_warning_note", "nl"),
          en: treatmentObj.aftercare.en + " " + t("lens_warning_note", "en")
        }
      };
    }

    state.match = {
      isKid:false, treatment, drink,
      milkId: state.milk, extrasIds: [...state.extras],
      homecarePick
    };
  }

  function renderResultDetails(){
    const wrap = $("#resultDetails");
    const m = state.match;
    if (!wrap) return;
    if (!m) { wrap.innerHTML = ""; return; }

    let drinkFull, drinkNotes;
    if (m.isKid){
      const drinkDef = KIDS_DRINKS.find(d => d.id === m.drinkId) || KIDS_DRINKS[0];
      drinkFull = drinkDef.name[state.lang];
      drinkNotes = null;
    } else {
      drinkFull = m.drink.origin ? [m.drink.origin, m.drink.name].join(" — ") : m.drink.name;
      drinkNotes = m.drink.notes;
    }

    const milkLabel = m.milkId && m.milkId !== "none" ? t(`milk.${m.milkId}`, state.lang) : null;
    const extrasLabel = (m.extrasIds || []).map(id => t(`extras.${id}`, state.lang));
    const customLine = [milkLabel, ...extrasLabel].filter(Boolean).join(" · ");

    wrap.innerHTML = `
      <div class="result-row">
        <span class="result-row__icon">☕</span>
        <div>
          <div class="result-row__label">${t("drink_label", state.lang)}</div>
          <div class="result-row__value">${drinkFull}</div>
          ${drinkNotes ? `<div class="result-row__notes">${drinkNotes}</div>` : ""}
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

    const titleEl = $("#resultTitle");
    if (titleEl) titleEl.textContent = t(state.context === "thuis" ? "result_saved_title" : "result_title", state.lang);
  }

  function renderResultBlocks(){
    const wrap = $("#resultBlocks");
    const m = state.match;
    if (!m) { wrap.innerHTML = ""; return; }
    const lang = state.lang;
    const homecare = resolveHomecareText(m.homecarePick, lang);
    const homecareBody = homecare
      ? `<p class="result-block__product">${homecare.productName}</p><p>${homecare.usage}</p>`
      : `<p>${t("homecare_generic_tip", lang)}</p>`;

    // extra sun-care reinforcement specifically for hair-removal treatments
    let aftercareText = m.treatment.aftercare[lang];
    const HAIR_REMOVAL_IDS = ["oksel","been","rug","buik","borst"];
    if (HAIR_REMOVAL_IDS.includes(m.treatment.id)) {
      const sunTip = lang === "nl"
        ? "<br><br>⚠️ <strong>Zonadvies:</strong> vermijd directe zon of het solarium 24 uur na het ontharen, en gebruik nadien een hoge SPF om roodheid en pigmentvlekken te voorkomen."
        : "<br><br>⚠️ <strong>Sun advice:</strong> avoid direct sun or a sunbed for 24 hours after hair removal, and use a high SPF afterwards to prevent redness and pigmentation.";
      aftercareText += sunTip;
    }

    const priceRow = m.treatment.price
      ? `<div class="result-block">
          <div class="result-block__head"><span class="result-block__icon">💶</span><span class="result-block__title">${t("block_price", lang)}</span></div>
          <div class="result-block__body"><p class="result-block__product">${m.treatment.price}</p></div>
        </div>`
      : "";

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
        <div class="result-block__body"><p>${aftercareText}</p></div>
      </div>
      <div class="result-block${m.homecare ? "" : " result-block--muted"}">
        <div class="result-block__head"><span class="result-block__icon">🛍️</span><span class="result-block__title">${t("block_homecare", lang)}</span></div>
        <div class="result-block__body">${homecareBody}</div>
      </div>
      ${priceRow}`;
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

  function roundRect(ctx, x, y, w, h, r){
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.arcTo(x+w, y, x+w, y+h, r);
    ctx.arcTo(x+w, y+h, x, y+h, r);
    ctx.arcTo(x, y+h, x, y, r);
    ctx.arcTo(x, y, x+w, y, r);
    ctx.closePath();
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
          if (FILTERS[state.filter]){ ctx.filter = FILTERS[state.filter]; }
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
      const drinkFull = m.isKid
        ? (KIDS_DRINKS.find(d => d.id === m.drinkId) || KIDS_DRINKS[0]).name[state.lang]
        : (m.drink.origin ? [m.drink.origin, m.drink.name].join(" — ") : m.drink.name);
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
       const treatName = typeof m.treatment.name === "object" 
  ? (m.treatment.name[state.lang] || m.treatment.name.nl) 
  : m.treatment.name;
       const treatLine = t("overlay_treatment_prefix", state.lang) + treatName;
       wrapText(ctx, treatLine, pad, y, W-pad*2, 38);
    }

    ctx.fillStyle = "rgba(246,240,230,0.7)";
    ctx.font = "italic 21px 'Playfair Display', Georgia, serif";
    ctx.fillText("Where Beauty Meets Coffee", 44, H-72);

    // Site link — drawn in its own high-contrast pill so it always survives
    // sharing (WhatsApp and friends often strip any caption text you send).
    ctx.font = "600 24px Jost, Arial, sans-serif";
    const linkText = "🔗 " + SITE_URL_DISPLAY;
    const linkWidth = ctx.measureText(linkText).width;
    const pillPadX = 20, pillH = 44, pillY = H - 56;
    roundRect(ctx, 44, pillY, linkWidth + pillPadX*2, pillH, pillH/2);
    ctx.fillStyle = "#D9AE6C";
    ctx.fill();
    ctx.fillStyle = "#241A14";
    ctx.textBaseline = "middle";
    ctx.fillText(linkText, 44 + pillPadX, pillY + pillH/2 + 1);
  }

  /* ---------------- share / download ---------------- */
  const SITE_URL = window.location.origin + window.location.pathname;
  const SITE_URL_DISPLAY = (window.location.hostname + window.location.pathname).replace(/\/index\.html$/, "").replace(/\/$/, "");

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
    trackEvent("download");
  }

  async function shareImage(){
    const blob = await canvasToBlob();
    const file = new File([blob], "beauty-and-coffee-match.jpg", { type:"image/jpeg" });
    // The site link is drawn onto the image itself (see drawResultCanvas) because
    // several share targets, WhatsApp included, drop accompanying text when an
    // image file is shared — the caption text/url below is a bonus for apps that
    // do keep it (Telegram, Signal, Mail, ...), not the only way the link travels.
    const shareText = t("share_text", state.lang) + " " + SITE_URL;
    if (navigator.canShare && navigator.canShare({ files:[file] })){
      try { await navigator.share({ files:[file], title:"Beauty & Coffee", text: shareText, url: SITE_URL }); }
      catch(err){ /* user cancelled */ }
      trackEvent("share");
    } else if (navigator.share){
      try { await navigator.share({ title:"Beauty & Coffee", text: shareText, url: SITE_URL }); }
      catch(err){ /* user cancelled */ }
      trackEvent("share");
    } else {
      showToast(t("toast_share_unsupported", state.lang));
      downloadImage();
    }
  }

  /* ---------------- analytics (optional, privacy-friendly) ----------------
     No-ops until a GoatCounter (or similar) script is added in index.html —
     see the comment there for setup instructions. Nothing is tracked without it. */
  function trackEvent(name){
    try {
      if (window.goatcounter && typeof window.goatcounter.count === "function"){
        window.goatcounter.count({ path: name, event: true });
      }
    } catch(e){ /* analytics should never break the app */ }
  }

  /* ---------------- reset ---------------- */
  function resetApp(){
    stopCamera();
    cameraFacing = "user";
    state.profile = null; state.sunExposed = null; state.kidsDrink = null;
    state.healthFlags = { phlebitis:false, contactLenses:false, dietExercise:false };
    state.mood = null; state.category = null; state.temperature = null; state.caffeine = null;
    state.milk = "none"; state.extras = []; state.context = null;
    state.photoDataUrl = null; state.filter = "none"; state.match = null;
    retakePhoto();
    history = ["welcome"];
    applyI18n();
    showStep("welcome");
  }

  /* ---------------- wire up ---------------- */
  function init(){
    applyI18n();
    showStep("welcome");
    setupEditorDrag();

    $$(".lang-btn").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

    document.body.addEventListener("click", e => {
      const el = e.target.closest("[data-action]");
      if (!el) return;
      const action = el.dataset.action;
      if (action === "start") goTo("profile");
      if (action === "back") back();
      if (action === "to-mood") goTo("mood");
      if (action === "to-context") goTo("context");
      if (action === "open-camera") openCamera();
      if (action === "switch-camera") switchCamera();
      if (action === "snap-photo") snapPhoto();
      if (action === "cancel-camera") cancelCamera();
      if (action === "retake") retakePhoto();
      if (action === "edit-photo") editExistingPhoto();
      if (action === "editor-rotate") editorRotate();
      if (action === "editor-confirm") editorConfirm();
      if (action === "editor-cancel") editorCancel();
      if (action === "upload-photo") $("#fileInput").click();
      if (action === "generate") runGeneration();
      if (action === "share") shareImage();
      if (action === "download") downloadImage();
      if (action === "restart") resetApp();
    });

    $("#fileInput").addEventListener("change", e => handleFileUpload(e.target.files[0]));
  }

  async function runGeneration(){
    goTo("loading");
    generateMatch();
    await new Promise(r => setTimeout(r, 1600));
    await drawResultCanvas();
    renderResultDetails();
    renderResultBlocks();
    goTo("result");
    trackEvent("match-generated");
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
