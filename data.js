/* ============================================================
   BEAUTY & COFFEE — data model
   Product & treatment names are salon/brand terms and stay
   identical in NL/EN, per the studio's own menu & protocols.
   ============================================================ */

const MOOD_ICONS = { relax:"🌿", energetic:"✨", focus:"🧖‍♀️", luxury:"💛", group:"👥" };
const CATEGORY_ICONS = { coffee:"☕", tea:"🫖", matcha:"🍵" };

/* Real photos of specific drinks, shown on the result screen when the
   matched drink has one available. Deliberately matched to the EXACT
   drink name (e.g. only "Matcha Latte", not "Iced Matcha Latte" or
   plain "Matcha") — showing the wrong variant's photo would be more
   misleading than showing no photo at all. */
const DRINK_PHOTOS = {
  "Matcha Latte": ["assets/drinks/matcha-latte-1.jpg", "assets/drinks/matcha-latte-2.jpg"]
};
const CAFFEINE_ICONS = { caff:"⚡", decaf:"🌙" };
const TEMPERATURE_ICONS = { hot:"🔥", iced:"🧊" };
const PROFILE_ICONS = { kind:"🧒", man:"🧔", vrouw:"👩" };

const MOODS = ["relax","energetic","focus","luxury","group"];
const CATEGORIES = ["coffee","tea","matcha"];
const CAFFEINE_OPTIONS = ["caff","decaf"];
const TEMPERATURE_OPTIONS = ["hot","iced"];
const PROFILES = ["kind","man","vrouw"];
const AGE_BRACKETS = ["16-29","30-44","45plus"];
const AGE_ICONS = { "16-29":"🌱", "30-44":"🌳", "45plus":"✨" };

const MILK_OPTIONS = ["none","whole","oat","extra"];
const EXTRA_OPTIONS = ["honey","sugar","cream","icecream","biscoff","pumpkin"];
const TEA_EXTRA_OPTIONS = ["honey","sugar"]; // whipped cream/ice cream/biscoff/pumpkin spice are coffee-only toppings

/* ---------- coffee origins & blends (with tasting notes) ---------- */
const COFFEE_ORIGINS = [
  { id:"peru", name:"Peru Single Origin", notes:"Dark chocolate, plum, honey", decaf:false },
  { id:"colombia_decaf", name:"Colombia Decaf Single Origin", notes:"Nutty, cream, orange", decaf:true },
  { id:"duette", name:"Duette Blend", region:"Brazil & Malawi", notes:"Milk chocolate, caramel, honey", decaf:false },
  { id:"house", name:"House Blend", region:"Brazil, Guatemala & Colombia", notes:"Hazelnut, maple", decaf:false }
];

/* ---------- tea selection ---------- */
const TEAS_DECAF = [
  "Linden Blossom","Piña Colada Fruit Mix","Tropical Dream Fruit Mix","Cocktail Fruit Mix",
  "Lipton Rooibos","Lipton Morocco Mint","Pickwick Chamomile"
];
const TEAS_CAFF = [
  "Sun of Heaven (Organic Sencha & Mango)","China Bancha","China Jasmine","Jasmine Dragon Pearl",
  "Cascara Costa Rica Sonora","Lipton Peach Mango","Lipton Refreshing Lemon",
  "Pickwick Original English","Pickwick Green Tea Pure","Lipton Japanese Sencha","Lord Nelson Chai",
  "Organo Gold Organic Green Tea (with Ganoderma)"
];
// Non-tea, non-coffee hot drinks — only ever surfaced for tea + decaf + hot,
// alongside the real decaf teas (never when Iced is picked).
const HOT_EXTRAS_DECAF = ["Hot Chocolate (Milk)", "Hot Chocolate (White)"];

/* ---------- beverage menu ----------
   Iced is a hot/iced sub-choice within Coffee or Tea, not its own category. */
const BEVERAGES = {
  coffee: {
    caff: [
      { name:"Espresso", style:"black" }, { name:"Doppio", style:"black" },
      { name:"Americano", style:"black" }, { name:"Long Black", style:"black" },
      { name:"Cappuccino", style:"milk" }, { name:"Double Cappuccino", style:"milk" },
      { name:"Cappuccino & Choco", style:"milk" }, { name:"Latte", style:"milk" },
      { name:"Latte Macchiato", style:"milk" }, { name:"Flat White", style:"milk" },
      { name:"Vietnamese Phin Coffee", style:"slow" }, { name:"V60", style:"slow" },
      { name:"Moka Pot", style:"slow" }, { name:"French Press", style:"slow" }
    ],
    decaf: [
      { name:"Espresso", style:"black" }, { name:"Americano", style:"black" },
      { name:"Cappuccino", style:"milk" }, { name:"Latte", style:"milk" },
      { name:"Flat White", style:"milk" }, { name:"V60", style:"slow" },
      { name:"French Press", style:"slow" }
    ]
  },
  coffeeIced: {
    caff: [
      { name:"Iced Coffee + Whipped Cream" },
      { name:"Affogato", notes:"2 scoops vanilla ice cream" },
      { name:"Iced Latte + Choco + Whipped Cream + Biscoff Crumbs" }
    ],
    decaf: [
      { name:"Iced Coffee + Whipped Cream" },
      { name:"Iced Latte + Choco + Whipped Cream + Biscoff Crumbs" }
    ]
  }
};

/* ---------- kids drinks (fixed, no caffeine ever) ---------- */
const KIDS_DRINKS = [
  { id:"water", name:{ nl:"Plat water", en:"Still water" }, icon:"💧" },
  { id:"chocolate", name:{ nl:"Warme Chocomelk", en:"Hot Chocolate" }, icon:"☕" }
];
const KIDS_TREATMENT = "Kindermanicure";

/* ============================================================
   PRODUCT CATALOG — home-care recommendations
   inStock is a per-category (and per-soap) toggle so the app
   never advises something that's currently sold out in Wix.
   ============================================================ */
const PRODUCT_CATEGORIES = {
  facial: {
    label: { nl:"Gelaatsverzorging", en:"Facial Care" },
    inStock: true,
    products: [
      { id:"cleanser", name:"Mild Creamy Cleanser (200 ml)",
        usage:{ nl:"'s Morgens en 's avonds verdelen over gelaat, hals en decolleté. Inmasseren en afspoelen met lauw water.",
                en:"Morning and evening, spread over face, neck and décolleté. Massage in and rinse off with lukewarm water." } },
      { id:"tonic", name:"Radiant Firming Tonic (200 ml)",
        usage:{ nl:"Na reiniging aanbrengen op een wattenschijfje en over gelaat, hals en decolleté strijken. Niet afspoelen.",
                en:"After cleansing, apply to a cotton pad and sweep over face, neck and décolleté. Do not rinse off." } },
      { id:"facerub", name:"Mild Face Rub (50 ml)",
        usage:{ nl:"1 à 2 keer per week op een gereinigde, vochtige huid inmasseren (oogomtrek vermijden) en afspoelen.",
                en:"1–2 times a week, massage into cleansed, damp skin (avoid the eye area) and rinse off." } },
      { id:"serum", name:"Deep Xpress Moist Serum (30 ml)",
        usage:{ nl:"'s Morgens en/of 's avonds enkele druppels aanbrengen onder de dag- of nachtcrème.",
                en:"Morning and/or evening, apply a few drops underneath your day or night cream." } },
      { id:"hydracream", name:"Super Hydrating Cream / Hyaluron³ Replenish Cream (50 ml)",
        usage:{ nl:"'s Morgens en/of 's avonds aanbrengen op gelaat, hals en decolleté na het serum.",
                en:"Morning and/or evening, apply to face, neck and décolleté after the serum." } },
      { id:"mask", name:"Deep Xpress Hydro Mask (75 ml)",
        usage:{ nl:"1 à 2 keer per week ruim aanbrengen, 10–15 minuten laten inwerken en afspoelen.",
                en:"1–2 times a week, apply generously, leave on for 10–15 minutes and rinse off." } },
      { id:"fillme", name:"Fill Me Up — Skin Infusion System",
        usage:{ nl:"Eenmaal per 2 weken. Micro-naaldjes applicator vullen met de hyaluronzuur-ampul en zachtjes stempelen op het gelaat.",
                en:"Once every 2 weeks. Fill the micro-needle applicator with the hyaluronic acid ampoule and gently stamp onto the face." } },
      { id:"hyalift", name:"Hya-Lift+ Hyaluronic Acid Serum",
        usage:{ nl:"Dagelijks 's morgens en/of 's avonds enkele druppels aanbrengen vóór de dag- of nachtcrème.",
                en:"Daily, morning and/or evening, apply a few drops before your day or night cream." } }
    ]
  },
  eye: {
    label: { nl:"Oogverzorging", en:"Eye Care" },
    inStock: true,
    products: [
      { id:"eyegel", name:"Aqualift Eye Gel (15 ml)",
        usage:{ nl:"'s Morgens en 's avonds een kleine hoeveelheid met de ringvinger tokkelend aanbrengen rond de ooguitkasten.",
                en:"Morning and evening, gently pat a small amount around the eye contours with your ring finger." } }
    ]
  },
  body: {
    label: { nl:"Lichaamsverzorging", en:"Body Care" },
    inStock: true,
    products: [
      { id:"bodymoist", name:"24h Body Moisturizer (250 ml)",
        usage:{ nl:"Dagelijks na het douchen over het lichaam aanbrengen en inmasseren.",
                en:"Daily after showering, apply over the body and massage in." } },
      { id:"bust", name:"Perfect Bust Formula (150 ml)",
        usage:{ nl:"Dagelijks op buste en decolleté aanbrengen met opwaartse, cirkelvormige bewegingen.",
                en:"Daily, apply to the bust and décolleté using upward, circular movements." } }
    ]
  },
  hand: {
    label: { nl:"Hand & Nagel", en:"Hand & Nail" },
    inStock: true,
    products: [
      { id:"handcream", name:"Hand Care Cream (50 ml)",
        usage:{ nl:"Meerdere malen per dag, vooral na het wassen, inmasseren — ook op de nagelriemen.",
                en:"Several times a day, especially after washing, massage in — also over the cuticles." } },
      { id:"gerlasan", name:"Gerlasan Handcrème (met Ureum)",
        usage:{ nl:"Dagelijks en na elk contact met water aanbrengen en goed inwrijven.",
                en:"Apply daily and after every contact with water, rubbing in well." } }
    ]
  },
  foot: {
    label: { nl:"Voetverzorging", en:"Foot Care" },
    inStock: true,
    products: [
      { id:"gehwol", name:"Gehwol Fusskraft Intensive Cream / Blauw (75 ml)",
        usage:{ nl:"Dagelijks 1 à 2 maal inmasseren op de voeten en tussen de tenen, bij voorkeur na een voetbad.",
                en:"1–2 times daily, massage into feet and between toes, ideally after a foot bath." } }
    ]
  },
  sun: {
    label: { nl:"Zonbescherming", en:"Sun Protection" },
    inStock: true,
    products: [
      { id:"spf50", name:"High Protection Sun Care SPF 50 (75 ml)",
        usage:{ nl:"Rijkelijk aanbrengen op gelaat en blootgestelde huid, 20 minuten vóór blootstelling. Regelmatig herhalen.",
                en:"Apply generously to face and exposed skin 20 minutes before sun exposure. Reapply regularly." } }
    ]
  },
  soap: {
    label: { nl:"Ambachtelijke Zepen", en:"Artisan Soaps" },
    inStock: true,
    products: [
      { id:"geitenmelk", name:"Geitenmelkzeep", tag:"dry",
        usage:{ nl:"Voedende zeep voor de droge huid — dagelijks gebruiken bij het douchen of wassen.",
                en:"Nourishing soap for dry skin — use daily when showering or washing." } },
      { id:"aloevera", name:"Aloë Vera zeep", tag:"sensitive",
        usage:{ nl:"Kalmerende zeep, ideaal na ontharing of voor de gevoelige huid.",
                en:"Soothing soap, ideal after hair removal or for sensitive skin." } },
      { id:"syndet", name:"Syndet zeepvrij", tag:"sensitive",
        usage:{ nl:"Zeepvrije, ongeparfumeerde variant speciaal voor de gevoelige huid.",
                en:"Soap-free, unscented variant specially formulated for sensitive skin." } },
      { id:"komkommer", name:"Komkommerzeep", tag:"sensitive",
        usage:{ nl:"Verfrissend en kalmerend, fijn voor de huid na zonblootstelling of ontharing.",
                en:"Refreshing and soothing, great for the skin after sun exposure or hair removal." } },
      { id:"amandelmelk", name:"Amandelmelkzeep", tag:"dry",
        usage:{ nl:"Voedende zeep die de droge huid verzacht — dagelijks te gebruiken.",
                en:"Nourishing soap that softens dry skin — suitable for daily use." } },
      { id:"paleale", name:"Pale Ale zeep", tag:"general",
        usage:{ nl:"Ambachtelijke reinigende zeep met antioxidanten uit bierbrouw-ingrediënten.",
                en:"Artisan cleansing soap with antioxidants from beer-brewing ingredients." } },
      { id:"koffie", name:"Koffiezeep", tag:"general",
        usage:{ nl:"Licht exfoliërende zeep — perfect gecombineerd met je Beauty & Coffee moment.",
                en:"Gently exfoliating soap — a perfect match for your Beauty & Coffee moment." } },
      { id:"matcha", name:"Matcha-mandarijnscrub", tag:"general",
        usage:{ nl:"Exfoliërende scrub die de huid verheldert — 1 à 2 keer per week gebruiken.",
                en:"Exfoliating scrub that brightens the skin — use 1–2 times a week." } }
    ]
  }
};

/* Choose a homecare recommendation, respecting live stock status.
   Falls back to another in-stock category (in priority order) or a
   general care tip when everything requested is sold out. */
const HOMECARE_FALLBACK_ORDER = ["facial","body","hand","foot","soap","eye","sun"];

/* Picks WHICH product to recommend (language-independent — the random pick
   happens exactly once, at match-generation time) and returns just its ids.
   Call resolveHomecareText() with the current language whenever rendering,
   so a language switch always shows correctly translated text. */
function pickHomecareProduct(categoryId, soapHints){
  const tryCategory = (catId) => {
    const cat = PRODUCT_CATEGORIES[catId];
    if (!cat || !cat.inStock) return null;
    let pool = cat.products;
    if (catId === "soap" && soapHints && soapHints.length){
      const hinted = pool.filter(p => soapHints.includes(p.id));
      if (hinted.length) pool = hinted;
    }
    if (!pool.length) return null;
    const product = pickRandom(pool);
    return { categoryId: catId, productId: product.id };
  };

  let result = tryCategory(categoryId);
  if (result) return result;

  for (const fallbackId of HOMECARE_FALLBACK_ORDER){
    if (fallbackId === categoryId) continue;
    result = tryCategory(fallbackId);
    if (result) return result;
  }
  return null; // triggers the generic care-tip message in the UI
}

function resolveHomecareText(pick, lang){
  if (!pick) return null;
  const cat = PRODUCT_CATEGORIES[pick.categoryId];
  if (!cat) return null;
  const product = cat.products.find(p => p.id === pick.productId);
  if (!product) return null;
  return { categoryLabel: cat.label[lang], productName: product.name, usage: product.usage[lang] };
}

/* Secondary soap suggestion — surfaces the dry/sensitive-skin artisan soaps
   alongside whatever the primary home-care recommendation is, since those
   soaps suit almost anyone and deserve more visibility. Skipped when soap
   is already the primary recommendation (no point suggesting it twice). */
function pickSecondarySoap(primaryCategoryId){
  if (primaryCategoryId === "soap") return null;
  const cat = PRODUCT_CATEGORIES.soap;
  if (!cat || !cat.inStock) return null;
  const pool = cat.products.filter(p => p.tag === "dry" || p.tag === "sensitive");
  if (!pool.length) return null;
  const product = pickRandom(pool);
  return { categoryId: "soap", productId: product.id };
}

/* ============================================================
   TREATMENT CATALOG
   Every treatment is tagged with the moods it satisfies, the
   profiles allowed to receive it, and whether it must be
   filtered out after recent/upcoming sun exposure.

   Optional field: price — e.g. price:"€65" — add this to any
   item below to show it on the result screen. Left out (or null)
   by default; the app then just links to your full price list.
   ============================================================ */
const TREATMENTS_CATALOG = [
  { id:"hotstone", name:"Hot Stone Massage", moods:["relax"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, excludeSummer:true, promoted:true, price:"€90 (90')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een diep ontspannende lichaamsmassage met warme stenen die over de huid glijden, gecombineerd met manuele massagetechnieken — een moment om helemaal tot rust te komen.",
               en:"A deeply relaxing body massage with warm stones gliding over the skin, combined with manual massage techniques — a moment to fully unwind." },
    funfact:{ nl:"De stenen zijn meestal van basalt, een vulkanisch gesteente dat warmte lang vasthoudt — daarom blijft de massage aangenaam warm aanvoelen.",
              en:"The stones are usually basalt, a volcanic rock that holds heat for a long time — which is why the massage stays pleasantly warm." },
    aftercare:{ nl:"Drink de eerste 24 uur extra water, vermijd een hete douche of sauna direct erna en neem de tijd om na te rusten.",
                en:"Drink extra water for the first 24 hours, avoid a hot shower or sauna right after, and take time to rest afterwards." } },

  { id:"cupping", name:"Cuppingmassage", moods:["focus","relax"], genders:["vrouw","man"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, cuppingRelated:true, promoted:true, price:"€60 (60')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een intensieve massage waarbij cups lokaal worden ingezet in combinatie met manuele massagetechnieken, bijvoorbeeld op rug, schouders, armen of benen.",
               en:"An intensive massage where cups are used locally in combination with manual massage techniques, for example on the back, shoulders, arms or legs." },
    funfact:{ nl:"De bekende 'cupping-plekken' ontstaan door de zuigkracht van de cups op de huid — hoe donkerder de plek, hoe intenser de lokale reactie was. We behandelen daarom altijd gericht specifieke zones en nooit het hele lichaam in één keer.",
              en:"The well-known 'cupping marks' come from the suction the cups create on the skin — the darker the mark, the more intense the local reaction was. That's why we always target specific zones and never treat the entire body at once." },
    caution:{ nl:"Cupping is niet geschikt bij koorts, besmettelijke huidziekten, maag- of darmzweren, hartaandoeningen of een te laag lichaamsgewicht — laat het ons vooraf weten als dit op jou van toepassing is. De zon in mag gewoon na een lokale cupping massage.",
              en:"Cupping isn't suitable if you have a fever, a contagious skin condition, stomach or intestinal ulcers, a heart condition, or are underweight — please let us know beforehand if any of these apply to you. Sun exposure is fine after a local cupping massage." },
    aftercare:{ nl:"Sommige mensen voelen zich na cupping behoorlijk moe en wat gevoelig — vergelijkbaar met na een pittige training. Plan er daarom het liefst niets meer na: ga rechtstreeks naar huis, vermijd werk of winkelen, en gun jezelf rust. Stel de behandelde huid ook niet meteen bloot aan een hete of koude douche/bad. Drink voldoende water, gebruik eventueel Arnica-olie tegen blauwe plekken, en houd er rekening mee dat de plekken tot ongeveer 7 dagen zichtbaar kunnen blijven — handig om te weten vóór een zwembad- of strandmoment, trouwfeest of fotoshoot. Voor duurzaam onderhoud wordt een sessie om de 3 tot 6 weken aanbevolen.",
                en:"Some people feel quite tired and a little sore after cupping — similar to how you'd feel after an intense workout. It's best not to plan anything else afterwards: head straight home, skip work or errands, and give yourself time to rest. Also don't expose the treated skin to a hot or cold shower/bath right away. Drink plenty of water, optionally use Arnica oil to reduce bruising, and keep in mind the marks can stay visible for about 7 days — worth knowing ahead of a swimwear moment, a wedding, or a photoshoot. For long-term maintenance, a session every 3 to 6 weeks is recommended." } },

  { id:"cuppingpeeling", name:"Cupping Body Renewal", moods:["focus","relax"], genders:["vrouw","man"], sunSensitive:true, isMassage:true, pregnancyUnsafe:true, cuppingRelated:true, promoted:true, price:"€120 (120')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een uitgebreide behandeling voor één gekozen lichaamszone: een lichaamspeeling en Thermo Body Pack, gevolgd door een intensieve cuppingmassage. Peel → Wrap → Cup → Coffee.",
               en:"An extensive treatment for one chosen body zone: a body peel and Thermo Body Pack, followed by an intensive cupping massage. Peel → Wrap → Cup → Coffee." },
    funfact:{ nl:"Omdat cupping een intensieve behandeling is, wordt niet het hele lichaam in één sessie gecupt. Een volgende lichaamszone kan, wanneer passend, tijdens een latere afspraak aan bod komen — de keuze van zone en traject bespreken we tijdens de intake.",
              en:"Because cupping is an intensive treatment, the whole body isn't cupped in a single session. A next body zone can, when suitable, be treated during a later appointment — the choice of zone and treatment plan is discussed during the intake." },
    caution:{ nl:"Cupping is niet geschikt bij koorts, besmettelijke huidziekten, maag- of darmzweren, hartaandoeningen of een te laag lichaamsgewicht — laat het ons vooraf weten als dit op jou van toepassing is. Ga je na deze behandeling in de zon? Dan raden we de peeling af vanwege verhoogde gevoeligheid.",
              en:"Cupping isn't suitable if you have a fever, a contagious skin condition, stomach or intestinal ulcers, a heart condition, or are underweight — please let us know beforehand if any of these apply to you. Planning sun exposure after this treatment? Then we'd advise against the peeling due to increased sensitivity." },
    aftercare:{ nl:"Sommige mensen voelen zich na cupping behoorlijk moe en wat gevoelig — vergelijkbaar met na een pittige training. Plan er daarom het liefst niets meer na: ga rechtstreeks naar huis, vermijd werk of winkelen, en gun jezelf rust. Stel de behandelde huid ook niet meteen bloot aan een hete of koude douche/bad. Vermijd daarnaast de eerste 24 tot 48 uur directe zon, de zonnebank en sauna's op de behandelde zone — gebruik nadien een hoge SPF. Drink voldoende water, gebruik eventueel Arnica-olie tegen blauwe plekken, en houd er rekening mee dat de plekken tot ongeveer 7 dagen zichtbaar kunnen blijven — handig om te weten vóór een zwembad- of strandmoment, trouwfeest of fotoshoot.",
                en:"Some people feel quite tired and a little sore after cupping — similar to how you'd feel after an intense workout. It's best not to plan anything else afterwards: head straight home, skip work or errands, and give yourself time to rest. Also don't expose the treated skin to a hot or cold shower/bath right away. On top of that, avoid direct sun, tanning beds, and saunas on the treated zone for the first 24 to 48 hours — use a high SPF afterwards. Drink enough water, optionally use Arnica oil to reduce bruising, and keep in mind the marks can stay visible for about 7 days — worth knowing ahead of a swimwear moment, a wedding, or a photoshoot." } },

  { id:"swedish", name:"Swedish Full Body Massage", moods:["relax"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, promoted:true, price:"€70 (60')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een volledige, ontspannende lichaamsmassage met aandacht voor het hele lichaam — de intensiteit wordt afgestemd op jouw voorkeur.",
               en:"A complete, relaxing full-body massage with attention for the whole body — the intensity is tailored to your preference." },
    funfact:{ nl:"De Zweedse massage combineert vijf klassieke bewegingen en ligt aan de basis van de meeste westerse massagetechnieken.",
              en:"Swedish massage combines five classic strokes and forms the basis of most Western massage techniques." },
    aftercare:{ nl:"Drink de eerste 24 uur ruim water, vermijd zware maaltijden vlak na de massage en bouw rustmomenten in.",
                en:"Drink plenty of water for the first 24 hours, avoid heavy meals right after the massage, and build in moments of rest." } },

  { id:"swedishbackneck", name:"Zweedse Rug-Nek-Schouder Massage", moods:["relax"], genders:["vrouw","man"], sunSensitive:false, isMassage:true, promoted:true, price:"€40 (30')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een ontspannende massage met extra aandacht voor rug, nek en schouders — ideaal wanneer je behoefte hebt aan een moment van rust.",
               en:"A relaxing massage with extra attention for the back, neck and shoulders — ideal whenever you need a moment of calm." },
    funfact:{ nl:"Deze kortere massage focust bewust op de zones waar we de meeste spanning opbouwen — ideaal als een volledige lichaamsmassage (nog) niet aan de orde is, zoals tijdens de zwangerschap.",
              en:"This shorter massage deliberately focuses on the areas where we build up the most tension — ideal when a full-body massage isn't (yet) an option, such as during pregnancy." },
    aftercare:{ nl:"Drink voldoende water na de massage en neem de tijd om rustig na te bewegen.",
                en:"Drink enough water after the massage and take time to move gently afterwards." } },

  { id:"swedishlegs", name:"Zweedse Benen- & Voetenmassage", moods:["relax"], genders:["vrouw","man"], sunSensitive:false, isMassage:true, promoted:true, price:"€40 (30')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een ontspannende massage voor benen en voeten die vermoeid of zwaar aanvoelen.",
               en:"A relaxing massage for legs and feet that feel tired or heavy." },
    funfact:{ nl:"Lang staan of zitten zorgt ervoor dat vocht zich makkelijker ophoopt in de onderbenen — een gerichte massage helpt de doorstroming weer op gang.",
              en:"Standing or sitting for long periods makes fluid build up more easily in the lower legs — a targeted massage helps get circulation moving again." },
    aftercare:{ nl:"Leg je benen na de massage waar mogelijk nog even iets hoger, en drink voldoende water.",
                en:"Where possible, keep your legs slightly elevated for a while after the massage, and drink enough water." } },

  { id:"backwrap", name:"Energetic Back Wrap", moods:["relax","focus"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, promoted:true, price:"€65 (60')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een verzorgende rugpakking met verfrissende peeling, revitaliserende algenpakking en massage.",
               en:"A caring back wrap with a refreshing peel, revitalizing algae wrap and massage." },
    funfact:{ nl:"Een lichaamswikkel combineert warmte met actieve ingrediënten, waardoor de huid ze beter opneemt.",
              en:"A body wrap combines heat with active ingredients, helping the skin absorb them more effectively." },
    aftercare:{ nl:"Eenmaal thuis kun je gewoon douchen zoals normaal — drink wel voldoende water en hydrateer de huid dagelijks.",
                en:"You can shower normally once you're home — just drink enough water and moisturize the skin daily." } },

  { id:"manipedispa", name:"Extended Manicure/Pedicure with SPA supplement", moods:["relax","luxury"], genders:["vrouw","man"], sunSensitive:false, price:"€35 manicure + €35 pedicure + €30 SPA-supplement",
    homecare:{ category:"hand" },
    benefits:{ nl:"Verzorgde handen én voeten in één sessie, met een extra ontspannen SPA-behandeling.",
               en:"Cared-for hands and feet in a single session, with an extra-relaxing SPA touch." },
    funfact:{ nl:"Regelmatige manicure/pedicure verbetert niet alleen de look, maar ook de nagelgezondheid op lange termijn.",
              en:"Regular manicures/pedicures improve not just the look but also long-term nail health." },
    aftercare:{ nl:"Kies je voor gellak of verstevigende BIAB? Dan zijn je nagels direct droog en stootvast. Bij klassieke nagellak raden we aan om je handen de eerste 2 uur en voeten de eerste 4 uur (gesloten schoenen) rust te gunnen. Hydrateer nagelriemen dagelijks met nagelriemolie.",
                en:"Opting for gel polish or builder gel (BIAB)? Your nails are dry and smudge-proof immediately! For classic nail polish, please allow 2 hours (hands) or 4 hours (feet in closed shoes) to fully dry. Apply cuticle oil daily for best results." } },

  { id:"browlift", name:"Brow Lift", moods:["energetic"], genders:["vrouw"], sunSensitive:false, price:"€75 (75')",
    homecare:{ category:"eye" },
    benefits:{ nl:"Een open, wakkere blik zonder dagelijks stylen — de wenkbrauwhaartjes blijven weken op hun plek.",
               en:"An open, awake look with no daily styling — the brow hairs stay in place for weeks." },
    funfact:{ nl:"Een brow lift werkt met dezelfde techniek als een lash lift, maar dan gericht op de wenkbrauw.",
              en:"A brow lift uses the same technique as a lash lift, but is applied to the eyebrow instead." },
    aftercare:{ nl:"Houd de wenkbrauwen 24 uur droog en vermijd de eerste 48 uur oliehoudende reinigers op de wenkbrauw.",
                en:"Keep the brows dry for 24 hours and avoid oil-based cleansers on the brow area for the first 48 hours." } },

  { id:"hennabrows", name:"Henna Brows", moods:["energetic"], genders:["vrouw"], sunSensitive:false, price:"€50 (60')",
    homecare:{ category:"eye" },
    benefits:{ nl:"Voller ogende wenkbrauwen met een natuurlijke kleurintensiteit die weken meegaat.",
               en:"Fuller-looking brows with a natural color intensity that lasts for weeks." },
    funfact:{ nl:"Henna kleurt niet alleen de haartjes maar ook de huid eronder, voor een extra vol effect.",
              en:"Henna colors not just the hairs but also the skin underneath, for an extra full effect." },
    aftercare:{ nl:"Houd de wenkbrauwen 24 uur droog en vermijd scrubs of peelings rond de wenkbrauw gedurende 3 dagen.",
                en:"Keep the brows dry for 24 hours and avoid scrubs or peels around the brow area for 3 days." } },

  { id:"lashlift", name:"Lash Lift with Tint", moods:["energetic"], genders:["vrouw"], sunSensitive:false, lensWarning:true, price:"€75 (75')",
    homecare:{ category:"eye" },
    benefits:{ nl:"Krullende, donkere wimpers zonder mascara — bespaart tijd in je ochtendroutine.",
               en:"Curled, darker lashes without mascara — saves time in your morning routine." },
    funfact:{ nl:"Het effect van een lash lift houdt gemiddeld één volledige wimpergroeicyclus aan, ongeveer 6 tot 8 weken.",
              en:"The effect of a lash lift lasts on average one full lash growth cycle, about 6 to 8 weeks." },
    aftercare:{ nl:"Houd de wimpers de eerste 24 uur volledig droog en vermijd olie-based make-up remover.",
                en:"Keep the lashes completely dry for the first 24 hours and avoid oil-based makeup remover." } },

  { id:"glammakeup", timeOfDay: "pm", name:"Evening / Party Glam Makeup", moods:["energetic","luxury"], genders:["vrouw"], sunSensitive:false, price:"€60 (60')",
    homecare:{ category:"facial" },
    benefits:{ nl:"Een foto- en feestklare look, afgestemd op jouw gelegenheid en huidtype.",
               en:"A photo- and party-ready look, tailored to your occasion and skin type." },
    funfact:{ nl:"Professionele glam-make-up gebruikt laagjestechnieken zodat de look de hele avond intact blijft.",
              en:"Professional glam makeup uses layering techniques so the look stays intact all evening." },
    aftercare:{ nl:"Reinig 's avonds grondig met een milde cleanser en hydrateer de huid voor het slapengaan.",
                en:"Cleanse thoroughly in the evening with a mild cleanser and moisturize the skin before bed." } },

  { id:"hydrapeel", name:"Skin-Renewing Hydra Peeling pH", moods:["energetic","focus"], genders:["vrouw","man"], sunSensitive:true, seasonalBoost:true, price:"€100 (90')",
    homecare:{ category:"facial" },
    benefits:{ nl:"Een verzorgende peeling voor een vale of vermoeide uitstraling en een ongelijkmatige huiduitstraling.",
               en:"A caring peel for a dull or tired-looking complexion and an uneven skin tone." },
    funfact:{ nl:"Je huid heeft een echte barrièrefunctie: ze beperkt vochtverlies naar buiten tot een minimum en houdt schadelijke stoffen van buitenaf tegen.",
              en:"Your skin has a real barrier function: it keeps moisture loss to a minimum and blocks harmful substances from getting in." },
    aftercare:{ nl:"Gebruik 7 dagen dagelijks SPF 50, vermijd de zon 14 dagen en sla scrubs 48 uur over.",
                en:"Use SPF 50 daily for 7 days, avoid sun exposure for 14 days and skip scrubs for 48 hours." } },

  { id:"signaturefacial", name:"Signature Facial Treatment", moods:["focus"], genders:["vrouw","man"], sunSensitive:false, price:"€85 (75')",
    homecare:{ category:"facial" },
    benefits:{ nl:"Een uitgebreide gelaatsverzorging met aandacht voor reiniging, huidconditie, verzorging en ontspanning.",
               en:"An extensive facial with attention for cleansing, skin condition, care and relaxation." },
    funfact:{ nl:"Wist je dat je huid zichzelf voortdurend vernieuwt? Om de ongeveer 4 weken heb je een volledig nieuwe opperhuid.",
              en:"Did you know your skin constantly renews itself? Roughly every 4 weeks, you have a completely new epidermis." },
    aftercare:{ nl:"Gebruik 7 dagen dagelijks SPF 50 en drink voldoende water om het reinigingseffect te ondersteunen.",
                en:"Use SPF 50 daily for 7 days and drink enough water to support the cleansing effect." } },

  { id:"fillme", name:"Fill Me Micro Infusion Treatment", moods:["focus"], genders:["vrouw","man"], sunSensitive:true, price:"€99 (45-60')",
    homecare:{ category:"facial" },
    benefits:{ nl:"Brengt hyaluronzuur diep in de huid voor een plumpend, verjongend effect.",
               en:"Delivers hyaluronic acid deep into the skin for a plumping, rejuvenating effect." },
    funfact:{ nl:"De behandeling gebruikt micro-naaldjes die kleiner zijn dan een haar om het serum efficiënt in te brengen.",
              en:"The treatment uses micro-needles thinner than a hair to deliver the serum efficiently." },
    aftercare:{ nl:"Draag de eerste 24 uur geen make-up en vermijd 48 uur de zon en sauna. Het dagelijks aanbrengen van een zonnebrandcrème met SPF 50 is essentieel om de pas vernieuwde huid optimaal te beschermen.",
                en:"Avoid wearing makeup for the first 24 hours and stay out of the sun and sauna for 48 hours. Daily application of SPF 50 sunscreen is essential to properly protect your newly refreshed skin." } },

  { id:"fruitacid", name:"Fruit Acid Peeling Dr. Renaud", moods:["focus"], genders:["vrouw","man"], sunSensitive:true, monthRange:[9,10,11,12,1,2,3], seasonalBoost:true, price:"€100 (75')",
    homecare:{ category:"facial" },
    benefits:{ nl:"Een professionele peeling met fruitzuren, gericht op een frissere en egalere huiduitstraling.",
               en:"A professional fruit-acid peel, aimed at a fresher and more even-looking complexion." },
    funfact:{ nl:"De opperhuid bestaat uit maar liefst 4 tot 5 dunne sublagen — op plekken die zwaar belast worden, zoals je handpalmen, komt er zelfs een extra laag bij.",
              en:"The epidermis is made up of no fewer than 4 to 5 thin sublayers — areas under heavy strain, like your palms, even get an extra layer." },
    aftercare:{ nl:"Gebruik 7 dagen dagelijks SPF 50, vermijd de zon 14 dagen en sla actieve producten 48 uur over.",
                en:"Use SPF 50 daily for 7 days, avoid sun exposure for 14 days and skip active products for 48 hours." } },

  { id:"liftsummere", name:"Lift Summum", moods:["focus","luxury"], genders:["vrouw","man"], sunSensitive:false, minAge30:true, price:"€120 (70')",
    homecare:{ category:"facial" },
    benefits:{ nl:"Een uitgebreide verzorging voor een huid met zichtbare tekenen van huidveroudering en verlies van stevigheid.",
               en:"An extensive treatment for skin showing visible signs of aging and loss of firmness." },
    funfact:{ nl:"Onder je huid zit de hypodermis, die dienstdoet als een echt 'stootkussen' — die vetlaag vangt schokken van buitenaf op en geeft structuur.",
              en:"Beneath your skin lies the hypodermis, which acts as a real 'shock cushion' — that fat layer absorbs impact from the outside and provides structure." },
    aftercare:{ nl:"Gebruik dagelijks SPF, drink voldoende water en vermijd de eerste 24 uur zware make-up.",
                en:"Use SPF daily, drink enough water and avoid heavy makeup for the first 24 hours." } },

  { id:"detoxback", name:"Zuiverende Rugverzorging", moods:["focus"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, promoted:true, price:"€70 (60')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een uitgebreide verzorging voor de rug met dieptereiniging, verzorging van onzuiverheden, een verzorgende pakking en ontspannende massage.",
               en:"An extensive back treatment with deep cleansing, care for blemishes, a nourishing wrap and a relaxing massage." },
    funfact:{ nl:"De rug is een van de moeilijkst zelf te verzorgen zones — een reden temeer voor een salonbehandeling.",
              en:"The back is one of the hardest areas to care for yourself — all the more reason for a salon treatment." },
    aftercare:{ nl:"Draag de eerste 24 uur bij voorkeur losse kleding. Eenmaal thuis kun je gewoon douchen zoals normaal.",
                en:"Preferably wear loose clothing for the first 24 hours. You can shower normally once you're home." } },

  { id:"antiagefacial", name:"Botanische Anti-Age", moods:["luxury"], genders:["vrouw"], sunSensitive:false, minAge45:true, price:"€125 (90')",
    homecare:{ category:"facial" },
    benefits:{ nl:"Een uitgebreide botanische gelaatsverzorging voor een huid met zichtbare tekenen van huidveroudering.",
               en:"An extensive botanical facial for skin showing visible signs of aging." },
    funfact:{ nl:"In de basale laag zitten naast huidcellen ook melanocyten, de pigmentcellen die je huidskleur bepalen — en mee bepalen hoe je huid met de tijd verandert.",
              en:"The basal layer also contains melanocytes — the pigment cells that determine your skin color, and play a role in how your skin changes over time." },
    aftercare:{ nl:"Gebruik dagelijks SPF 50 gedurende 7 dagen en reinig 's avonds grondig.",
                en:"Use SPF 50 daily for 7 days and cleanse thoroughly in the evening." } },

  { id:"harmonizingbody", name:"Harmoniserende Full Body Verzorging", moods:["luxury"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, promoted:true, price:"€70 (70')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een verzorgende lichaamsbehandeling met peeling en massage voor een ruwe, droge of onregelmatige huid — ook interessant als extra verzorging na ontharing.",
               en:"A caring body treatment with peeling and massage for rough, dry or uneven skin — also nice as extra care after hair removal." },
    funfact:{ nl:"Deze behandeling combineert peeling, massage én masker in één doorlopende sessie.",
              en:"This treatment combines exfoliation, massage and a mask in one continuous session." },
    aftercare:{ nl:"Drink de eerste 24 uur veel water en hydrateer de huid dagelijks met een bodylotion.",
                en:"Drink plenty of water for the first 24 hours and moisturize the skin daily with a body lotion." } },

  { id:"fullbodywrap", name:"Energetische Full Body Pakking", moods:["luxury","relax"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, promoted:true, price:"€110 (120')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een uitgebreid lichaamsritueel met verfrissende peeling, revitaliserende algenpakking en massage — een moment om even helemaal te vertragen.",
               en:"An extensive body ritual with a refreshing peel, revitalizing algae wrap and massage — a moment to fully slow down." },
    funfact:{ nl:"Een full body wrap wordt vaak gecombineerd met warmte om actieve stoffen dieper te laten doordringen.",
              en:"A full body wrap is often combined with heat to help active ingredients penetrate more deeply." },
    aftercare:{ nl:"Eenmaal thuis kun je gewoon douchen zoals normaal — drink de eerste dag wel extra veel water.",
                en:"You can shower normally once you're home — just drink extra water on the first day." } },

  { id:"makeupworkshop", name:"Private Beauty Makeup Workshop", moods:["group"], genders:["vrouw"], sunSensitive:false, price:"€50 (75') · €35 p.p. bij 3-4 personen",
    homecare:{ category:"facial" },
    benefits:{ nl:"Een gezellige privéworkshop waarin je leert hoe je jouw make-up mooi en praktisch kunt aanbrengen — met een uitgebreide Beauty & Coffee-tafel vol verse hapjes en een affogato met vanille-ijs als afsluiter.",
               en:"A fun private workshop where you'll learn how to apply your makeup beautifully and practically — with an extensive Beauty & Coffee spread of fresh treats and an affogato with vanilla ice cream to finish." },
    funfact:{ nl:"Deelnemers gaan naar huis met een persoonlijke productenlijst afgestemd op hun huidtype.",
              en:"Participants go home with a personal product list tailored to their skin type." },
    aftercare:{ nl:"Geen specifieke nazorg nodig — reinig de huid zoals gewoonlijk aan het einde van de dag.",
                en:"No specific aftercare needed — cleanse the skin as usual at the end of the day." } },

  { id:"facialworkshop", name:"Private Facial & Touch-Up Workshop", moods:["group"], genders:["vrouw","man"], sunSensitive:false, price:"€50 (75') · €35 p.p. bij 3-4 personen",
    homecare:{ category:"facial" },
    benefits:{ nl:"Ontdek een eenvoudige verzorgingsroutine en leer hoe je jouw look daarna met een mooie touch-up afwerkt.",
               en:"Discover a simple skincare routine and learn how to finish your look afterwards with a lovely touch-up." },
    funfact:{ nl:"Je gaat naar huis met de exacte volgorde van producten die het beste bij jouw huid past — en met een eigen goodiebag vol proefverpakkingen om je nieuwe routine thuis meteen te ontdekken.",
              en:"You'll go home with the exact product order that suits your skin best — plus your own goodie bag full of sample sizes to try your new routine at home right away." },
    aftercare:{ nl:"Gebruik dagelijks SPF na een gelaatsbehandeling en hydrateer 's avonds goed.",
                en:"Use daily SPF after a facial treatment and moisturize well in the evening." } },

  { id:"tastingbasic", name:"Coffee Tasting Basic", moods:["group"], genders:["vrouw","man"], sunSensitive:false, price:"€60 p.p. (120')",
    homecare:{ category:"soap", soapHint:["koffie"] },
    benefits:{ nl:"Leer de basis van koffie proeven: aroma's, zuurgraad en afdronk herkennen.",
               en:"Learn the basics of coffee tasting: recognizing aroma, acidity and aftertaste." },
    funfact:{ nl:"Onze Peru Single Origin en House Blend komen allebei langs tijdens deze proeverij.",
              en:"Both our Peru Single Origin and House Blend feature in this tasting." },
    aftercare:{ nl:"Geen nazorg nodig — geniet gerust van nog een kopje na afloop.",
                en:"No aftercare needed — feel free to enjoy another cup afterwards." } },

  { id:"tastingadvanced", name:"Coffee Tasting Advanced", moods:["group"], genders:["vrouw","man"], sunSensitive:false, price:"€65 p.p. (180')",
    homecare:{ category:"soap", soapHint:["koffie"] },
    benefits:{ nl:"Verdiep je in origin-vergelijkingen en brouwmethodes als een echte barista.",
               en:"Dive deeper into origin comparisons and brewing methods like a true barista." },
    funfact:{ nl:"Je proeft dezelfde bonen bereid via V60, French Press én Moka Pot om het verschil te ervaren.",
              en:"You'll taste the same beans prepared via V60, French Press and Moka Pot to experience the difference." },
    aftercare:{ nl:"Geen nazorg nodig — noteer je favoriete bereidingswijze voor thuis.",
                en:"No aftercare needed — jot down your favorite brew method for at home." } },

  { id:"baristaworkshop", name:"Private Barista Workshop", moods:["group"], genders:["vrouw","man"], sunSensitive:false, price:"€175 (120')",
    homecare:{ category:"soap", soapHint:["koffie"] },
    benefits:{ nl:"Leer hoe je thuis lekkere espresso's, espresso-afgeleiden en slow coffees kunt bereiden met onder andere V60, French Press, Phin en Moka Pot.",
               en:"Learn how to brew delicious espressos, espresso-based drinks and slow coffees at home using a V60, French Press, Phin and Moka Pot, among others." },
    funfact:{ nl:"Perfecte latte art begint bij melk die tot exact de juiste microschuim-textuur is opgeklopt.",
              en:"Perfect latte art starts with milk steamed to exactly the right microfoam texture." },
    aftercare:{ nl:"Geen nazorg nodig — oefen thuis gerust met je eigen espressomachine.",
                en:"No aftercare needed — feel free to practice at home on your own espresso machine." } },

  { id:"manicure", name:"Extended Manicure", moods:["relax","luxury"], genders:["vrouw","man"], sunSensitive:false, price:"€35 (60')",
    homecare:{ category:"hand" },
    benefits:{ nl:"Knippen, vijlen, nagelriemverzorging, polijsten, verzorging van de nagelomgeving en massage.",
               en:"Trimming, filing, cuticle care, buffing, care of the nail area and a hand massage." },
    funfact:{ nl:"Regelmatige nagelriemverzorging voorkomt op termijn braamranden en droge nagelriemen.",
              en:"Regular cuticle care prevents hangnails and dry cuticles over time." },
    aftercare:{ nl:"Kies je voor gellak of verstevigende BIAB? Dan zijn je nagels direct droog en stootvast. Bij klassieke nagellak raden we aan om je handen de eerste 2 uur droog te houden. Hydrateer nagelriemen dagelijks met nagelriemolie.",
                en:"Opting for gel polish or builder gel (BIAB)? Your nails are dry and smudge-proof immediately! For classic nail polish, please allow 2 hours (hands) to fully dry. Apply cuticle oil daily for best results.." } },

  { id:"pedicureexpress", name:"Express Pedicure", moods:["relax","luxury"], genders:["vrouw","man"], sunSensitive:false, price:"€30 (30')",
    homecare:{ category:"foot" },
    benefits:{ nl:"Een basisvoetverzorging voor verzorgde nagels en nagelwallen — knippen, vijlen, nagelwalreiniging en voetencrème.",
               en:"A basic pedicure for well-groomed nails and nail walls — trimming, filing, nail-wall cleaning and foot cream." },
    funfact:{ nl:"Deze versie bevat bewust geen eeltverwijdering of massage — ideaal als je snel toonbare voeten wil zonder een volledige behandeling.",
              en:"This version deliberately skips hard-skin removal and massage — ideal when you want presentable feet quickly, without a full treatment." },
    aftercare:{ nl:"Hydrateer je voeten en nagelriemen regelmatig, zeker als je geen eeltbehandeling kreeg.",
                en:"Moisturize your feet and cuticles regularly, especially since this version skips the hard-skin treatment." } },

  { id:"pedicure", name:"Extended Pedicure", moods:["relax","luxury"], genders:["vrouw","man"], sunSensitive:false, promoted:true, price:"€35 (60')",
    homecare:{ category:"foot" },
    benefits:{ nl:"Een complete voetverzorging met aandacht voor nagels, nagelwallen, nagelriemen, eelt en ontspanning.",
               en:"A complete pedicure with attention for nails, nail walls, cuticles, hard skin and relaxation." },
    funfact:{ nl:"Eeltverwijdering helpt niet alleen esthetisch, maar voorkomt ook drukplekken bij het lopen.",
              en:"Removing hard skin isn't just cosmetic — it also prevents pressure spots while walking." },
    aftercare:{ nl:"Kies je voor gellak? Dan zijn je nagels direct droog en stootvast. Bij klassieke nagellak raden we aan om je voeten de eerste 4 uur (gesloten schoenen) rust te gunnen. Hydrateer nagelriemen dagelijks met nagelriemolie.",
                en:"Opting for gel polish or builder gel (BIAB)? Your nails are dry and smudge-proof immediately! For classic nail polish, please allow 4 hours (feet in closed shoes) to fully dry. Apply cuticle oil daily for best results." } },

  { id:"slimmassage", name:"Afslankingsmassage", moods:["relax","focus","luxury"], genders:["vrouw","man"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, requiresDietExercise:true, promoted:true, price:"€55 (60')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een stevige lichaamsmassage waarbij gewerkt wordt rond de zones van de lymfeklieren en vervolgens met diepere massagetechnieken op de gewenste lichaamszones — gericht op huidverzorging en lichaamscontouren binnen het aangeleerde massageprotocol.",
               en:"A firm body massage that works around the lymph node areas and then applies deeper massage techniques to the desired body zones — focused on skin care and body contours within the trained massage protocol." },
    funfact:{ nl:"Deze massagetechniek combineert stevige grepen met specifieke bewegingsrichtingen voor een verstevigend effect.",
              en:"This massage technique combines firm grips with specific movement directions for a tightening effect." },
    aftercare:{ nl:"Drink de eerste 24 uur extra water om de afvoer van afvalstoffen te ondersteunen.",
                en:"Drink extra water for the first 24 hours to support the removal of waste products." } },

  { id:"oksel", name:"Okselontharing", moods:["energetic"], genders:["vrouw","man"], sunSensitive:true, price:"€15 (20')",
    homecare:{ category:"soap", soapHint:["aloevera","komkommer","syndet"] },
    benefits:{ nl:"Wekenlang zachte, gladde oksels zonder dagelijks scheren.",
               en:"Weeks of soft, smooth armpits without daily shaving." },
    funfact:{ nl:"Ontharen met was verwijdert het haar met de wortel, waardoor het langzamer en zachter teruggroeit dan bij scheren.",
              en:"Waxing removes hair from the root, so regrowth is slower and softer than with shaving." },
    aftercare:{ nl:"Vermijd de eerste 24 tot 48 uur directe zon, de zonnebank, deodorant, strakke kleding en hete douches of sauna's. Breng op ontblote zones altijd een zonnebrandcrème met hoge beschermingsfactor (SPF 50) aan om roodheid en pigmentvlekken te voorkomen.",
                en:"Avoid direct sun exposure, tanning beds, deodorant, tight clothing, hot showers, and saunas for the first 24 to 48 hours. Always apply a high protection sunscreen (SPF 50) to exposed areas to prevent redness and hyperpigmentation." } },

  { id:"been", name:"Beenontharing", moods:["energetic"], genders:["vrouw","man"], sunSensitive:true, price:"vanaf €30 (Onderbenen, 20')",
    homecare:{ category:"soap", soapHint:["aloevera","komkommer"] },
    benefits:{ nl:"Wekenlang gladde benen met een fijnere, langzamere hergroei dan bij scheren.",
               en:"Weeks of smooth legs, with finer, slower regrowth than shaving." },
    funfact:{ nl:"Na een aantal ontharingsbeurten groeit het haar vaak dunner en spaarzamer terug.",
              en:"After several waxing sessions, hair often grows back thinner and more sparse." },
    aftercare:{ nl:"Vermijd de eerste 24 tot 48 uur directe zon, de zonnebank, strakke kleding en hete douches of sauna's. Breng op ontblote zones altijd een zonnebrandcrème met hoge beschermingsfactor (SPF 50) aan om roodheid en pigmentvlekken te voorkomen.",
                en:"Avoid direct sun exposure, tanning beds, tight clothing, hot showers, and saunas for the first 24 to 48 hours. Always apply a high protection sunscreen (SPF 50) to exposed areas to prevent redness and hyperpigmentation." } },

  { id:"rug", name:"Rugontharing", moods:["energetic","focus"], genders:["man"], sunSensitive:true, price:"€40 (60')",
    homecare:{ category:"soap", soapHint:["aloevera","komkommer"] },
    benefits:{ nl:"Een gladde, verzorgde rug zonder de moeite van zelf scheren op een moeilijk bereikbare plek.",
               en:"A smooth, groomed back without the hassle of shaving a hard-to-reach area yourself." },
    funfact:{ nl:"De rug is een van de meest gevraagde ontharingszones bij mannen vóór het zomerseizoen.",
              en:"The back is one of the most requested waxing areas for men ahead of summer." },
    aftercare:{ nl:"Vermijd de eerste 24 tot 48 uur directe zon, de zonnebank, strakke kleding en hete douches of sauna's. Breng op ontblote zones altijd een zonnebrandcrème met hoge beschermingsfactor (SPF 50) aan om roodheid en pigmentvlekken te voorkomen.",
                en:"Avoid direct sun exposure, tanning beds, tight clothing, hot showers, and saunas for the first 24 to 48 hours. Always apply a high protection sunscreen (SPF 50) to exposed areas to prevent redness and hyperpigmentation." } },

  { id:"buik", name:"Buikontharing", moods:["energetic"], genders:["man"], sunSensitive:true, price:"€20 (45')",
    homecare:{ category:"soap", soapHint:["aloevera","komkommer"] },
    benefits:{ nl:"Een gladde buik met langdurig resultaat en fijnere hergroei.",
               en:"A smooth stomach with long-lasting results and finer regrowth." },
    funfact:{ nl:"De huid op de buik is gevoeliger, daarom werken we hier met extra zachte was.",
              en:"The skin on the stomach is more sensitive, which is why we use extra-gentle wax here." },
    aftercare:{ nl:"Vermijd de eerste 24 tot 48 uur directe zon, de zonnebank, strakke kleding en hete douches of sauna's. Breng op ontblote zones altijd een zonnebrandcrème met hoge beschermingsfactor (SPF 50) aan om roodheid en pigmentvlekken te voorkomen.",
                en:"Avoid direct sun exposure, tanning beds, tight clothing, hot showers, and saunas for the first 24 to 48 hours. Always apply a high protection sunscreen (SPF 50) to exposed areas to prevent redness and hyperpigmentation." } },

  { id:"borst", name:"Borstontharing", moods:["energetic"], genders:["man"], sunSensitive:true, price:"€25 (45')",
    homecare:{ category:"soap", soapHint:["aloevera","komkommer"] },
    benefits:{ nl:"Een verzorgde, gladde borstkas met resultaat dat weken meegaat.",
               en:"A groomed, smooth chest with results that last for weeks." },
    funfact:{ nl:"Net als bij de rug groeit het haar na herhaalde behandelingen vaak dunner terug.",
              en:"As with the back, hair often grows back thinner after repeated treatments." },
    aftercare:{ nl:"Vermijd de eerste 24 tot 48 uur directe zon, de zonnebank, strakke kleding en hete douches of sauna's. Breng op ontblote zones altijd een zonnebrandcrème met hoge beschermingsfactor (SPF 50) aan om roodheid en pigmentvlekken te voorkomen.",
                en:"Avoid direct sun exposure, tanning beds, tight clothing, hot showers, and saunas for the first 24 to 48 hours. Always apply a high protection sunscreen (SPF 50) to exposed areas to prevent redness and hyperpigmentation." } }
];

/* Gentle, never-sun-sensitive, never-massage items usable as a safe
   fallback when a mood + profile + sun/health combination leaves no match. */
const SAFE_FALLBACK_IDS = ["signaturefacial","manicure","pedicure","liftsummere"];

/* Optional free-text "waar heb je last van?" field — a lightweight,
   fully local keyword scan (no AI, nothing sent anywhere). Each entry
   maps a set of keywords to the treatment ids they should boost. This
   is a hint layered on top of the mood-based matching, not a
   replacement for it — the guided questions (safety filters included)
   remain the reliable backbone. */
const COMPLAINT_KEYWORDS = [
  { words:["rug","rugpijn","rugklachten","nek","schouder","schouders"], ids:["backwrap","detoxback","harmonizingbody","swedishbackneck","cupping","cuppingpeeling"] },
  { words:["stress","gestrest","ontspanning","ontspannen","moe","vermoeid","uitgeput"], ids:["swedish","swedishbackneck","hotstone","cupping"] },
  { words:["spierpijn","spieren","stijf","gespannen"], ids:["cupping","cuppingpeeling","slimmassage","swedish"] },
  { words:["rimpels","veroudering","verouderen","huidveroudering","stevigheid"], ids:["antiagefacial","liftsummere"] },
  { words:["pigmentatie","pigmentvlekken","oneffen","dof","vale huid","vaal"], ids:["hydrapeel","fruitacid"] },
  { words:["onzuiverheden","puistjes","acne","vette huid"], ids:["signaturefacial"] },
  { words:["voeten","voet","eelt","nagelriem","ingegroeide nagel"], ids:["pedicure"] },
  { words:["nagels","handen","manicure"], ids:["manicure","manipedispa"] },
  { words:["wimpers","wenkbrauwen","brows","lashes"], ids:["lashlift","browlift","hennabrows"] },
  { words:["ontharen","ontharing","haargroei","beharing"], ids:["oksel","been","rug","buik","borst"] },
  { words:["contour","silhouet","gewicht","afslanken","cellulite"], ids:["slimmassage"] },
  { words:["make-up","makeup","visagie"], ids:["glammakeup"] }
];

function boostByComplaint(pool, complaintText){
  if (!complaintText) return pool;
  const text = complaintText.toLowerCase();
  const matchedIds = new Set();
  COMPLAINT_KEYWORDS.forEach(entry => {
    if (entry.words.some(w => text.includes(w))){
      entry.ids.forEach(id => matchedIds.add(id));
    }
  });
  if (!matchedIds.size) return pool;
  const boosted = pool.filter(item => matchedIds.has(item.id));
  return boosted.length ? boosted : pool;
}

function matchTreatment(mood, gender, sunExposed, healthFlags, complaintText){
  healthFlags = healthFlags || {};
  const genderOk = (item) => item.genders.includes(gender);
  const sunOk = (item) => !sunExposed || !item.sunSensitive;
  const phlebitisOk = (item) => !healthFlags.phlebitis || !item.isMassage;
  const dietOk = (item) => !item.requiresDietExercise || healthFlags.dietExercise;
  const menstruationOk = (item) => !healthFlags.menstruation || !item.cuppingRelated;
  const pregnancyOk = (item) => !healthFlags.pregnant || !item.pregnancyUnsafe;
  const ageOk = (item) => (!item.minAge45 || healthFlags.age45Plus) && (!item.minAge30 || healthFlags.age30Plus);

  const currentHour = new Date().getHours();
  const timeOk = (item) => !(currentHour < 12 && item.timeOfDay === "pm");

  const currentMonth = new Date().getMonth() + 1; // 1-12
  const isSummer = currentMonth >= 6 && currentMonth <= 8; // Jun-Aug
  const seasonOk = (item) => !item.excludeSummer || !isSummer;
  const monthRangeOk = (item) => !item.monthRange || item.monthRange.includes(currentMonth);

  const allOk = (item) => genderOk(item) && sunOk(item) && timeOk(item) && phlebitisOk(item) && dietOk(item) && menstruationOk(item) && pregnancyOk(item) && ageOk(item) && seasonOk(item) && monthRangeOk(item);

  let pool = TREATMENTS_CATALOG.filter(item => item.moods.includes(mood) && allOk(item));

  // Muscle pain / a lot of stress → steer toward cupping when it's available
  // for the chosen mood (cupping only fits "focus" and "relax" moods).
  if (healthFlags.musclePain){
    const cuppingPool = pool.filter(item => item.cuppingRelated);
    if (cuppingPool.length) pool = cuppingPool;
  }

  // Free-text complaint (optional) → narrow toward treatments matching
  // the keywords found, if any of those still fit the chosen mood.
  pool = boostByComplaint(pool, complaintText);

  // Business push: give massages, body peelings/wraps, and pedicure a much
  // higher chance of being recommended — and give the pigmentation-fading
  // peelings extra weight specifically outside the sunny summer months.
  if (pool.length){
    const weighted = [];
    pool.forEach(item => {
      weighted.push(item);
      if (item.promoted){ weighted.push(item); weighted.push(item); }
      if (item.seasonalBoost && !isSummer){ weighted.push(item); weighted.push(item); }
    });
    pool = weighted;
  }

  if (!pool.length){
    pool = TREATMENTS_CATALOG.filter(item => allOk(item) && SAFE_FALLBACK_IDS.includes(item.id));
  }
  if (!pool.length){
    pool = TREATMENTS_CATALOG.filter(item => genderOk(item) && !item.sunSensitive && !item.isMassage);
  }
  return pickRandom(pool);
}

function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

/* ============================================================
   CURRENT ACTIONS (shown on the result screen, above "Praktisch")
   Add, edit or remove an entry here — nothing else needs to change.
   Optional: from / until as "YYYY-MM-DD". Outside that window the
   action hides itself automatically. Leave null for "no end date".
   ============================================================ */
const CURRENT_ACTIONS = [
  { id:"grabbelton", icon:"🎁", from:null, until:null,
    title:{ nl:"Grabbelton", en:"Lucky dip" },
    text:{ nl:"Besteed je €75 of meer tijdens dezelfde afspraak? Dan mag je één keer grabbelen in de grabbelton.",
           en:"Spend €75 or more during the same appointment and you get one grab from the lucky dip." } }
];

/* ============================================================
   BOOKING SLOTS — chips shown above the booking buttons.
   Currently weekend only (also in the evening). Add or remove
   entries when your availability changes; (French text: lang-fr.js) the choice is added to the mail/WhatsApp text.
   ============================================================ */
const BOOKING_SLOTS = [
  { id:"za-vm", nl:"Zaterdag voormiddag", en:"Saturday morning" },
  { id:"za-nm", nl:"Zaterdag namiddag",   en:"Saturday afternoon" },
  { id:"za-av", nl:"Zaterdagavond",       en:"Saturday evening" },
  { id:"zo-vm", nl:"Zondag voormiddag",   en:"Sunday morning" },
  { id:"zo-nm", nl:"Zondag namiddag",     en:"Sunday afternoon" },
  { id:"zo-av", nl:"Zondagavond",         en:"Sunday evening" }
];

/* ============================================================
   SALON STAMP PIN — a short code that only you know.
   Leave "" to keep the old behaviour (client confirms herself).
   Fill in e.g. "4821" to require the code before a stamp is added.
   NB: this is a deterrent, not real security (the code sits in
   this file). Good enough to stop casual self-stamping.
   ============================================================ */
const SALON_STAMP_PIN = "";

/* ============================================================
   PRICE LIST (tab "Prijslijst") — prices as on the website
   "Vanaf 1/06/2026", plus the cupping treatments.
   Fields per item: n = name, d = short description (optional),
   time, price, note (optional). Everything is bilingual (nl/en).
   ============================================================ */
function PI(nl, en, time, price, dnl, den, nnl, nen){
  return { n:{nl, en}, d: dnl ? {nl:dnl, en:den} : null, time, price, note: nnl ? {nl:nnl, en:nen} : null };
}
const PRICE_LIST = [
  { id:"facial", icon:"🌿", title:{ nl:"Gelaatsverzorging", en:"Facials" }, items:[
    PI("Express gelaatsverzorging","Express facial","30′","€60","Reiniging, dieptereiniging, crèmemasker & dagcrème.","Cleansing, deep cleansing, cream mask & day cream."),
    PI("Acnécontrole – Équilibre Pureté Citron Vert","Acne control – Équilibre Pureté Citron Vert","60′","€65","Zuiverende behandeling, met huidanalyse bij de eerste behandeling.","Purifying treatment, with skin analysis at the first treatment."),
    PI("Signature gelaatsverzorging","Signature facial","75′","€85","Uitgebreide verzorging met massage; ook voor gevoelige huid.","Full facial with massage; also suitable for sensitive skin."),
    PI("Fill Me Micro Infusie Treatment","Fill Me Micro Infusion Treatment","45–60′","€99","Cleanser, tonic, Fill Me Serum, masker, LED-masker & UV-bescherming.","Cleanser, tonic, Fill Me Serum, mask, LED mask & UV protection."),
    PI("Fruitzurenpeeling 4/26 Dr. Renaud","Fruit acid peel 4/26 Dr. Renaud","75′","€100","Voor een egalere teint. Enkel van september tot maart.","For a more even skin tone. Only from September to March."),
    PI("Huidvernieuwende Hydra Peeling pH","Skin-renewing Hydra Peeling pH","90′","€100","Voor een frisse uitstraling en een egalere teint.","For a fresh glow and a more even skin tone."),
    PI("Lift Summum","Lift Summum","70′","€120","Voor een strakker ogende huid, met massage en gelaatsmasker.","For firmer-looking skin, with massage and face mask."),
    PI("Botanische Anti-Age","Botanical Anti-Age","90′","€125","Verzorgende anti-age behandeling met ampul, massage en masker.","Anti-age care with ampoule, massage and mask.")
  ]},
  { id:"facial-extra", icon:"✨", title:{ nl:"Extra’s bij je gelaatsverzorging", en:"Facial add-ons" }, items:[
    PI("Handpeeling & -massage","Hand peeling & massage","10′","€10"),
    PI("LED-therapie","LED therapy","10′","€10"),
    PI("Ontharing wenkbrauwen","Eyebrow hair removal","15′","€15"),
    PI("Ampul / serum","Ampoule / serum","5′","€5"),
    PI("Peel-off masker","Peel-off mask","20′","€15"),
    PI("Collageenvliesmasker","Collagen sheet mask","20′","€20"),
    PI("Anti-aging paraffinemasker","Anti-aging paraffin mask","30′","€20"),
    PI("Hot Stone gelaatsmassage","Hot Stone facial massage","20′","€20"),
    PI("Touch-up dagmake-up na gelaatsverzorging","Day make-up touch-up after facial","25′","€25")
  ]},
  { id:"makeup", icon:"💄", title:{ nl:"Visagie (minerale / HD make-up)", en:"Make-up (mineral / HD)" }, items:[
    PI("Touch-up dagmake-up na gelaatsverzorging","Day make-up touch-up after facial","25′","€25"),
    PI("Avondmake-up / Party / Glam","Evening / Party / Glam make-up","60′","€60",null,null,"Valse wimpers? Breng zelf wimpers en wimperlijm mee; ik breng ze aan.","False lashes? Bring your own lashes and lash glue; I'll apply them."),
    PI("Bridal proefmake-up","Bridal trial make-up","60′","€65"),
    PI("Bridal proefmake-up & bruidsmake-up","Bridal trial & wedding-day make-up","2×60′","€135"),
    PI("Huwelijksdag make-up, per persoon","Wedding-day make-up, per person","30′","€40")
  ]},
  { id:"brows", icon:"🪮", title:{ nl:"Brows (wenkbrauwen)", en:"Brows" }, items:[
    PI("Brow Tinting (kleuren haar)","Brow tinting (hair colour)","15′","€20"),
    PI("Shaping (mappen en ontharen)","Shaping (mapping & hair removal)","20′","€25"),
    PI("Henna Brows","Henna Brows","60′","€50","Mappen, shapen, kleuren van haar en huid; tot 6 weken.","Mapping, shaping, colouring hair and skin; up to 6 weeks."),
    PI("Brow Lift","Brow Lift","75′","€75","Mappen, shapen, lamineren, kleuren van haar en huid; tot 6 weken.","Mapping, shaping, lamination, colouring hair and skin; up to 6 weeks.")
  ]},
  { id:"lashes", icon:"👁️", title:{ nl:"Lashes (wimpers)", en:"Lashes" }, items:[
    PI("Lash Tinting (kleuren wimpers)","Lash tinting","15′","€20"),
    PI("Lash Lift met kleuring","Lash Lift with tint","75′","€75",null,null,"Tot 6 weken.","Up to 6 weeks.")
  ]},
  { id:"manicure", icon:"💅", title:{ nl:"Manicure (handverzorging)", en:"Manicure" }, items:[
    PI("Express manicure","Express manicure","30′","€30","Knippen, vijlen, nagelriemen & verzorgende handcrème.","Trimming, filing, cuticles & nourishing hand cream."),
    PI("Uitgebreide manicure","Full manicure","60′","€35","Knippen, vijlen, nagelriemen, polijsten, eelt & massage.","Trimming, filing, cuticles, buffing, hard skin & massage."),
    PI("Kindermanicure","Children’s manicure","20′","€20","Vijlen en kindernagellak of peel-off.","Filing and children’s nail polish or peel-off."),
    PI("Supplement SPA manicure","Add-on: SPA manicure","30′","€30","Peeling, masker, pakking, massage & verzorging.","Peeling, mask, wrap, massage & care."),
    PI("Supplement verwijderen nagellak / gellak / BIAB","Add-on: removal of polish / gel / BIAB","40′","€20"),
    PI("Supplement nagellak","Add-on: nail polish","30′","€5"),
    PI("Supplement gellak (soak-off)","Add-on: gel polish (soak-off)","30′","€20"),
    PI("Supplement BIAB (soak-off)","Add-on: BIAB (soak-off)","45′","€25")
  ]},
  { id:"pedicure", icon:"🦶", title:{ nl:"Pedicure (voetverzorging)", en:"Pedicure" }, items:[
    PI("Express pedicure","Express pedicure","30′","€30","Knippen, vijlen, nagelwalreiniging & voetencrème (zonder eeltverwijdering, zonder massage).","Trimming, filing, nail-fold cleaning & foot cream (no hard-skin removal, no massage)."),
    PI("Uitgebreide pedicure","Full pedicure","60′","€35","Knippen, vijlen, nagelwalreiniging, nagelriemen, normale eeltverwijdering & korte voetenmassage.","Trimming, filing, nail-fold cleaning, cuticles, standard hard-skin removal & short foot massage.","+ €10 per extra 15′ bij overmatige eeltbehandeling.","+ €10 per extra 15′ for heavy hard-skin treatment."),
    PI("Supplement ingegroeide nagel / copoline, per nagel","Add-on: ingrown nail / copoline, per nail","+10′","€5","Plaatsen van een copoline-verband in de nagelwal.","Placing a copoline bandage in the nail fold."),
    PI("Supplement drukvrij leggen / foambescherming, per teen","Add-on: pressure relief / foam protection, per toe","5′","€2,50","Een zacht foambeschermbuisje om wrijving en druk van de schoen te verlichten.","A soft foam tube to relieve friction and pressure from the shoe."),
    PI("Supplement SPA pedicure","Add-on: SPA pedicure","+30′","€30","Peeling, masker, pakking, uitgebreide massage.","Peeling, mask, wrap, extended massage."),
    PI("Supplement nagellak","Add-on: nail polish","30′","€5"),
    PI("Supplement gellak (soak-off)","Add-on: gel polish (soak-off)","45′","€20"),
    PI("Supplement verwijderen nagellak / gellak","Add-on: removal of polish / gel","40′","€20")
  ]},
  { id:"waxing", icon:"🌸", title:{ nl:"Ontharing (waxen / threading / epileren)", en:"Hair removal (waxing / threading / tweezing)" }, items:[
    PI("Kin","Chin","10′","€10"),
    PI("Bovenlip","Upper lip","10′","€10"),
    PI("Wenkbrauwen (zonder mapping / opschonen)","Eyebrows (no mapping / tidy-up)","20′","€15"),
    PI("Oksels","Underarms","20′","€15"),
    PI("Schouders","Shoulders","25′","€15"),
    PI("Buik","Stomach","45′","€20"),
    PI("Borst","Chest","45′","€25"),
    PI("Onderbenen","Lower legs","20′","€30"),
    PI("Onderbenen & knieën","Lower legs & knees","35′","€40"),
    PI("Rug","Back","60′","€40"),
    PI("Borst & buik","Chest & stomach","90′","€40"),
    PI("Volledige benen","Full legs","60′","€50")
  ]},
  { id:"body", icon:"🤍", title:{ nl:"Lichaamsverzorging & massage", en:"Body care & massage" }, items:[
    PI("Cuppingmassage","Cupping massage","60′","€60","Gerichte cuppingmassage op specifieke zones.","Targeted cupping massage on specific zones."),
    PI("Cupping Body Renewal","Cupping Body Renewal","120′","€120","Peeling, Thermo Body Pack en cupping voor één lichaamszone per sessie.","Peeling, Thermo Body Pack and cupping for one body zone per session."),
    PI("Zweedse full body massage","Swedish full body massage","60′","€70","Relaxerend en spierversoepelend.","Relaxing and muscle-softening."),
    PI("Zweedse rug-nek-schouder massage","Swedish back-neck-shoulder massage","30′","€40","Bij stress en verkrampte spieren.","For stress and tense muscles."),
    PI("Zweedse benen-voeten massage","Swedish legs-feet massage","30′","€40","Bij vermoeide benen.","For tired legs."),
    PI("Hot Stone Massage","Hot Stone Massage","90′","€90","Diepe relaxatie met warme stenen.","Deep relaxation with warm stones."),
    PI("Afslankingsmassage","Slimming massage","60′","€55","Stimulerende massage, aanvullend bij gezonde voeding en beweging (ook voor mannen).","Stimulating massage, complementary to healthy eating and exercise (men welcome too)."),
    PI("Zuiverende rugbehandeling","Purifying back treatment","60′","€70","Dieptereiniging, pakking en anti-stressmassage.","Deep cleansing, wrap and anti-stress massage."),
    PI("Harmoniserende verzorging rug","Harmonising back care","30′","€35","Peeling en massage voor een zachte, gladde huid.","Peeling and massage for soft, smooth skin."),
    PI("Harmoniserende verzorging full body","Harmonising full body care","70′","€70","Peeling en massage voor een zachte, gladde huid.","Peeling and massage for soft, smooth skin."),
    PI("Energetische rugpakking","Energising back wrap","60′","€65","Verfrissende peeling, algenpakking en massage.","Refreshing peeling, seaweed wrap and massage."),
    PI("Energetische lichaamspakking full body","Energising full body wrap","120′","€110","Verfrissende peeling, algenpakking en massage.","Refreshing peeling, seaweed wrap and massage.")
  ]},
  { id:"workshops", icon:"☕", title:{ nl:"Beauty & Koffie workshops", en:"Beauty & Coffee workshops" },
    note:{ nl:"Privéworkshops in kleine groepen van 3–4 personen. Minstens 1 week op voorhand inschrijven.", en:"Private workshops in small groups of 3–4 people. Please register at least 1 week in advance." },
    items:[
    PI("Beauty Make-up Privéworkshop","Beauty Make-up Private Workshop","75′","€50",null,null,"3–4 personen: €35 p.p.","3–4 people: €35 p.p."),
    PI("Beauty Gelaatsverzorging & Touch-up Make-up Privéworkshop","Beauty Facial & Touch-up Make-up Private Workshop","75′","€50",null,null,"3–4 personen: €35 p.p.","3–4 people: €35 p.p."),
    PI("Koffieproeverij Basis","Coffee tasting – Basic","120′","€60 p.p.","Ontdek koffiearoma’s, het verhaal van boon tot specialty coffee en vergelijk meerdere koffies.","Discover coffee aromas, the story from bean to specialty coffee, and compare several coffees.",  "3–4 personen","3–4 people"),
    PI("Koffieproeverij Verdiepend","Coffee tasting – Advanced","180′","€65 p.p.","Meer over verwerkingsprocessen, variëteiten, omgevingsfactoren, brandprofielen en smaken.","More on processing methods, varieties, growing conditions, roast profiles and flavours.","3–4 personen","3–4 people"),
    PI("Barista Privéworkshop","Barista Private Workshop","120′","€175","Zet thuis zelf espresso, espresso-afgeleiden en slow coffees (V60, French Press, Phin, Mokapot).","Learn to make espresso, espresso-based drinks and slow coffees at home (V60, French Press, Phin, Moka pot).")
  ]}
];

/* ============================================================
   HOUSE RULES (screen "Huisregels") — taken from the website.
   Structure: sections → groups → items. Every text is bilingual
   (nl/en); French lives in lang-fr.js. Home-visit clauses are left
   out on purpose while home visits are paused.
   ============================================================ */
function R(nl, en){ return { nl, en }; }
const HOUSE_RULES = [
  { id:"appointments", icon:"📅", title:R("Afspraken en annuleringen","Appointments and cancellations"), intro:null, outro:null,
    groups:[{ title:null, items:[
      R("Afspraken worden enkel telefonisch, persoonlijk of via e-mail vastgelegd.","Appointments are only made by phone, in person or by email."),
      R("Annuleren of verplaatsen kan tot 1 uur vooraf via 0499 22 19 01.","You can cancel or reschedule up to 1 hour in advance via 0499 22 19 01."),
      R("Bij annulatie minder dan 1 uur op voorhand wordt 50% van de behandeling aangerekend, tenzij bij ziekte (zie hieronder).","If you cancel less than 1 hour in advance, 50% of the treatment is charged, except in case of illness (see below)."),
      R("Na 3 keer niet opdagen is het niet meer mogelijk om een afspraak te maken bij Beauty & Coffee.","After 3 no-shows it is no longer possible to make an appointment at Beauty & Coffee."),
      R("Bij ziekte: verwittig zo snel mogelijk. Annuleer je minstens 1 uur vóór de afspraak, dan worden er geen kosten aangerekend. Bij laattijdige annulatie geldt de 50%-regel.","In case of illness: let me know as soon as possible. If you cancel at least 1 hour before the appointment, no costs are charged. For late cancellations the 50% rule applies."),
      R("Kom op tijd. Te laat? Verwittig meteen per telefoon of sms. Bij meer dan 15 minuten vertraging kan de behandeling ingekort of geannuleerd worden tegen de annulatiekost.","Please be on time. Running late? Let me know immediately by phone or text. With more than 15 minutes delay the treatment may be shortened or cancelled, subject to the cancellation fee."),
      R("Bij wanbetaling is het niet meer mogelijk om een afspraak te maken bij Beauty & Coffee.","In case of non-payment it is no longer possible to make an appointment at Beauty & Coffee.")
    ]}] },
  { id:"hygiene", icon:"🧼", title:R("Hygiëne en verzorging","Hygiene and care"),
    intro:R("Voor een aangename en professionele behandeling verwacht ik van elke klant het volgende:","For a pleasant and professional treatment I expect the following from every client:"), outro:null,
    groups:[
      { title:R("Handhygiëne","Hand hygiene"), items:[
        R("Propere handen en nagels: geen zichtbaar vuil onder de nagels of donkere verkleuring op de huid.","Clean hands and nails: no visible dirt under the nails or dark discolouration on the skin."),
        R("Geen plakkerige of vettige handen (bv. van eten, olie of zalf).","No sticky or greasy hands (e.g. from food, oil or ointment)."),
        R("Heb je infecties of open wonden? Geef dit vooraf aan voor de manicure. Mogelijk verplaatsen we de afspraak naar een andere datum om de wonde niet te verergeren.","Do you have infections or open wounds? Please tell me in advance for the manicure. We may move the appointment to another date so the wound doesn't get worse.")
      ]},
      { title:R("Voethygiëne (bij voetverzorging)","Foot hygiene (for foot care)"), items:[
        R("Voeten zijn gewassen voor de afspraak.","Feet are washed before the appointment."),
        R("Geen zichtbaar vuil of sterke geur door gebrek aan hygiëne.","No visible dirt or strong odour due to lack of hygiene."),
        R("Bij overmatig zweten: het gebruik van voetpoeder of deodorant wordt sterk aangeraden.","In case of excessive sweating: using foot powder or deodorant is strongly recommended."),
        R("Neem teenslippers mee als je nagellak of gellak wilt bij de pedicure.","Bring flip-flops if you would like nail polish or gel polish with your pedicure."),
        R("Heb je infecties of open wonden? Geef dit vooraf aan voor de pedicure. Mogelijk verplaatsen we de afspraak naar een andere datum om de wonde niet te verergeren.","Do you have infections or open wounds? Please tell me in advance for the pedicure. We may move the appointment to another date so the wound doesn't get worse."),
        R("Medische aandoeningen zoals hyperhidrosis (overmatige zweetproductie) of schimmelinfecties moeten vooraf gemeld worden.","Medical conditions such as hyperhidrosis (excessive sweating) or fungal infections must be reported in advance.")
      ]},
      { title:R("Intieme hygiëne (bij lichaamsbehandelingen zoals lichaamsontharing en -massage)","Intimate hygiene (for body treatments such as body hair removal and massage)"), items:[
        R("De huid is proper en fris gewassen op de dag van de behandeling.","Skin is clean and freshly washed on the day of the treatment."),
        R("Geen onaangename geuren door gebrek aan hygiëne.","No unpleasant odours due to lack of hygiene."),
        R("Bij onvoldoende hygiëne kan de behandeling geweigerd worden zonder terugbetaling.","In case of insufficient hygiene the treatment may be refused without refund."),
        R("Draag losse kledij voor de lichaamsontharing.","Wear loose clothing for body hair removal."),
        R("Heb je infecties of open wonden? Geef dit vooraf aan voor de lichaamsmassage.","Do you have infections or open wounds? Please tell me in advance for the body massage.")
      ]},
      { title:R("Geurbeleid (roken, cannabis, sterke lichaamsgeuren)","Odour policy (smoking, cannabis, strong body odours)"), items:[
        R("Roken en cannabisgebruik vlak voor de behandeling zijn afgeraden.","Smoking and cannabis use right before the treatment are discouraged."),
        R("Heb je een sterke tabaks-, wiet- of andere geur die als storend wordt ervaren, dan kan de behandeling geweigerd worden zonder terugbetaling.","If you have a strong tobacco, cannabis or other smell that is experienced as disturbing, the treatment may be refused without refund."),
        R("Normaal transpireren is geen probleem. Is de geur hinderlijk door gebrek aan hygiëne, dan kan de behandeling ingekort of geweigerd worden.","Normal perspiration is not a problem. If the odour is bothersome due to lack of hygiene, the treatment may be shortened or refused."),
        R("Parfum en sterk geparfumeerde crèmes zijn niet gewenst, omdat die hinderlijk kunnen zijn voor de behandelaar en andere klanten.","Perfume and strongly scented creams are not wanted, as they can be bothersome for the practitioner and other clients.")
      ]},
      { title:R("Gelaatsverzorging, lash lifts en brow styling","Facials, lash lifts and brow styling"), items:[
        R("Kom bij voorkeur zonder make-up.","Preferably come without make-up."),
        R("Gebruik geen zware gezichtscrème of olie vlak voor de behandeling.","Don't use heavy face cream or oil right before the treatment."),
        R("Contactlenzen: draag voor de lashlift en gelaatsverzorging liefst geen lenzen, of neem een lenzenpotje en -vloeistof mee. Vergeet zeker je bril niet.","Contact lenses: for the lash lift and facial, preferably don't wear lenses, or bring a lens case and solution. Definitely don't forget your glasses."),
        R("Draag bij voorkeur een topje met spaghettibandjes.","Preferably wear a top with spaghetti straps.")
      ]}
    ] },
  { id:"contra", icon:"⚠️", title:R("Contra-indicaties","Contraindications"),
    intro:R("Om medische en hygiënische redenen kan een behandeling niet doorgaan bij:","For medical and hygiene reasons a treatment cannot go ahead in case of:"),
    outro:R("Twijfel je? Raadpleeg dan eerst een arts.","In doubt? Please consult a doctor first."),
    groups:[{ title:null, items:[
      R("Open wonden, ernstige ontstekingen of verse littekens in het behandelgebied.","Open wounds, severe inflammation or fresh scars in the treatment area."),
      R("Huid die recent sterk verbrand is door de zon in het behandelgebied.","Skin that was recently badly sunburnt in the treatment area."),
      R("Koorts, griep of andere virale infecties (zie “bij ziekte” bij annuleren).","Fever, flu or other viral infections (see “in case of illness” under cancelling).")
    ]}] },
  { id:"practical", icon:"🌿", title:R("Praktische afspraken","Practical arrangements"), intro:null, outro:null,
    groups:[{ title:null, items:[
      R("Kom alleen voor behandelingen, tenzij je minderjarig bent. Een workshop vindt plaats in de open keuken en eetruimte. Ben je minderjarig, dan word je vergezeld door een ouder.","Please come alone for treatments, unless you are a minor. A workshop takes place in the open kitchen and dining area. If you are a minor, you must be accompanied by a parent."),
      R("Roken is verboden in het gebouw om hygiënische en brandveiligheidsredenen.","Smoking is not allowed in the building for hygiene and fire-safety reasons."),
      R("Laat sieraden en accessoires best thuis om verlies of beschadiging te vermijden.","Best leave jewellery and accessories at home to avoid loss or damage."),
      R("Zet je gsm op stil tijdens de behandeling.","Please put your phone on silent during the treatment."),
      R("Alle behandelingen hebben een esthetisch karakter.","All treatments are aesthetic in nature.")
    ]}] }
];

/* ============================================================
   SKIN FACTS ("Weetjes over huid, haar en voeten")
   36 short facts from the anatomy e-learnings (B1 skin, B2 hair).
   theme: A skin in short · B sun, colour, vitamin D · C epidermis ·
   D below the surface · E sweat, sebum, odour · F feet and hands ·
   G goosebumps and hair · H skin flora.
   French text lives in lang-fr.js (by code). Informational only:
   no treatment promises. Figures should be checked against the
   original e-learning before publishing.
   Softened until verified: C1 (was "25 to 30 layers") and F1 (was
   "up to 620 per cm2"). A2 got "on average". Restore the figures here
   (and in lang-fr.js for French) once checked.
   ============================================================ */
const SKIN_FACTS = [
  { code:"A1", theme:"A", nl:"Je huid is het grootste orgaan van je lichaam.", en:"Your skin is the largest organ of your body." },
  { code:"A2", theme:"A", nl:"Gemiddeld heb je elke 4 weken een volledig nieuwe opperhuid: je huid vernieuwt zichzelf voortdurend.", en:"On average you get a completely new epidermis every 4 weeks: your skin constantly renews itself." },
  { code:"A3", theme:"A", nl:"Je huid heeft 9 functies, van barrière en warmteregulatie tot vitamine D-productie, vetreserve en tast.", en:"Your skin has 9 functions, from barrier and temperature regulation to vitamin D production, fat storage and touch." },
  { code:"A4", theme:"A", nl:"Je huid is ook een communicatiemiddel: je wordt rood van schaamte, wit door ziekte en krijgt kippenvel bij koude of angst.", en:"Your skin is also a means of communication: you blush with embarrassment, turn pale from illness and get goosebumps from cold or fear." },
  { code:"A5", theme:"A", nl:"Via je huid neem je prikkels op zoals temperatuur, tast, de positie van je ledematen en pijn. Zo kun je met gesloten ogen voorwerpen herkennen.", en:"Through your skin you pick up stimuli such as temperature, touch, the position of your limbs and pain. That's how you can recognise objects with your eyes closed." },
  { code:"B1", theme:"B", nl:"Het grootste deel van je vitamine D maakt je lichaam zelf aan onder invloed van zonlicht. Voeding zoals vette vis, eieren, melk of boter levert de rest.", en:"Most of your vitamin D is made by your body itself under the influence of sunlight. Food such as oily fish, eggs, milk or butter provides the rest." },
  { code:"B2", theme:"B", nl:"Melanine in je opperhuid absorbeert UV-stralen.", en:"Melanin in your epidermis absorbs UV rays." },
  { code:"B3", theme:"B", nl:"Je huidskleur wordt vooral bepaald door de grootte en het aantal pigmentkorrels in de basale laag van je opperhuid.", en:"Your skin colour is mainly determined by the size and number of pigment granules in the basal layer of your epidermis." },
  { code:"B4", theme:"B", nl:"Een moedervlek is een goedaardige ophoping van melanocyten (pigmentcellen).", en:"A mole is a benign cluster of melanocytes (pigment cells)." },
  { code:"C1", theme:"C", nl:"Je hoornlaag bestaat uit vele lagen dode cellen, en juist die dode cellen zijn een van de beste beschermingen tegen indringers.", en:"Your horny layer consists of many layers of dead cells, and it is precisely those dead cells that are one of the best protections against intruders." },
  { code:"C2", theme:"C", nl:"Eelt ontstaat wanneer je hoornlaag extreem veel wrijving ondervindt.", en:"Calluses form when your horny layer is exposed to extreme friction." },
  { code:"C3", theme:"C", nl:"De cellen in je stekellaag houden elkaar vast met kleine “stekeltjes” (desmosomen). Dat maakt je huid flexibel en stevig.", en:"The cells in your spinous layer hold on to each other with tiny “spines” (desmosomes). That makes your skin flexible and strong." },
  { code:"C4", theme:"C", nl:"Langerhanscellen in je huid zijn vertakte cellen die meehelpen aan je afweer.", en:"Langerhans cells in your skin are branched cells that help your immune defence." },
  { code:"D1", theme:"D", nl:"Collageen zorgt voor de stevigheid van je huid, elastine voor de rekbaarheid en veerkracht.", en:"Collagen gives your skin its firmness, elastin its stretch and resilience." },
  { code:"D2", theme:"D", nl:"Je onderhuid is tegelijk energieopslag, isolatielaag en stootkussen.", en:"Your subcutaneous layer is energy storage, insulation and shock absorber all in one." },
  { code:"D3", theme:"D", nl:"Zoogdieren hebben een dikke vacht. Bij de mens ging die verloren en nam het vet onder je huid de isolatie over.", en:"Mammals have thick fur. In humans it was lost, and the fat under your skin took over the insulation." },
  { code:"E1", theme:"E", nl:"Apocrien zweet is geurloos tot het op je huid komt. De typische zweetgeur ontstaat pas wanneer bacteriën het omzetten.", en:"Apocrine sweat is odourless until it reaches your skin. The typical sweat smell only arises when bacteria break it down." },
  { code:"E2", theme:"E", nl:"Je hebt 2 tot 5 miljoen zweetklieren.", en:"You have 2 to 5 million sweat glands." },
  { code:"E3", theme:"E", nl:"Talg vormt samen met zweet je zuurmantel, die je huid beschermt tegen bacteriën en ziekteverwekkers.", en:"Sebum and sweat together form your acid mantle, which protects your skin against bacteria and pathogens." },
  { code:"E4", theme:"E", nl:"Hoeveel talg je aanmaakt hangt af van je hormonen en je leeftijd, niet van je zenuwstelsel.", en:"How much sebum you produce depends on your hormones and your age, not on your nervous system." },
  { code:"F1", theme:"F", nl:"Je voetzolen hebben een van de hoogste dichtheden aan zweetklieren van je lichaam.", en:"Your soles have one of the highest densities of sweat glands in your body." },
  { code:"F2", theme:"F", nl:"Op je handpalmen en voetzolen groeien geen haren en zitten geen talgklieren.", en:"No hair grows on your palms and soles, and there are no sebaceous glands." },
  { code:"F3", theme:"F", nl:"Onder je voetzolen (en handpalmen en zitvlak) dient het vet bijna uitsluitend als stootkussen.", en:"Under the soles of your feet (and palms and buttocks) the fat serves almost exclusively as a shock absorber." },
  { code:"F4", theme:"F", nl:"Handpalmen en voetzolen hebben een extra huidlaag: de doorschijnende laag, die enkel in dikke huid voorkomt.", en:"Palms and soles have an extra skin layer: the translucent layer, which only occurs in thick skin." },
  { code:"G1", theme:"G", nl:"Kippenvel: een klein spiertje bij het haarzakje trekt samen en zet het haar rechtop. Zo blijft er warme lucht tussen de haartjes hangen als isolatie.", en:"Goosebumps: a tiny muscle at the hair follicle contracts and makes the hair stand upright. That traps warm air between the hairs as insulation." },
  { code:"G2", theme:"G", nl:"Elk haartje heeft zijn eigen haaroprichter, de kippenvelspier.", en:"Every hair has its own arrector pili, the goosebump muscle." },
  { code:"G3", theme:"G", nl:"Haren zijn meer dan sier: alle haarfollikels hebben zenuwen die reageren op druk of buiging van de haarschacht.", en:"Hairs are more than decoration: all hair follicles have nerves that respond to pressure or bending of the hair shaft." },
  { code:"G4", theme:"G", nl:"Vanaf halverwege de schacht bestaat je haar uit dood materiaal: de haarcellen vullen zich met keratine en sterven af.", en:"From halfway up the shaft, your hair consists of dead material: the hair cells fill with keratin and die off." },
  { code:"G5", theme:"G", nl:"De kleur van je haar komt van melanocyten in de haarwortel die pigmentkorrels afgeven.", en:"The colour of your hair comes from melanocytes in the hair root that release pigment granules." },
  { code:"G6", theme:"G", nl:"De buitenste laag van je haar (cuticula) ligt als dakpannen over elkaar. Die schubben houden het haar glad en beschermen tegen chemicaliën, UV-straling en hitte.", en:"The outer layer of your hair (cuticle) overlaps like roof tiles. Those scales keep the hair smooth and protect against chemicals, UV radiation and heat." },
  { code:"G7", theme:"G", nl:"De vezellaag (cortex) bepaalt of je haar steil of krullend is.", en:"The fibre layer (cortex) determines whether your hair is straight or curly." },
  { code:"G8", theme:"G", nl:"Wat het merg (medulla) van je haar precies doet, is nog niet bekend. Niet elk haartype heeft er een.", en:"What exactly the medulla (core) of your hair does is not yet known. Not every hair type has one." },
  { code:"G9", theme:"G", nl:"In elke haarfollikel monden 2 tot 3 talgklieren uit.", en:"2 to 3 sebaceous glands open into each hair follicle." },
  { code:"G10", theme:"G", nl:"Je haarwortel is gevoelig voor hormonen en kan beïnvloed worden door voeding, stress en genetica.", en:"Your hair root is sensitive to hormones and can be influenced by nutrition, stress and genetics." },
  { code:"H1", theme:"H", nl:"Je huid kan nooit volledig steriel gemaakt worden: nuttige micro-organismen leven er permanent en vormen een eerste barrière tegen besmetting.", en:"Your skin can never be made completely sterile: useful micro-organisms live there permanently and form a first barrier against infection." },
  { code:"H2", theme:"H", nl:"Tijdelijke (transiënte) huidflora verwijder je gemakkelijk door je handen te wassen of te ontsmetten.", en:"Temporary (transient) skin flora is easily removed by washing or disinfecting your hands." }
];
/* Which themes are shown for which treatment (null = any fact). */
const SKIN_FACT_POOLS = {
  kids: ["A","G","H"],
  byTreatment: {
    pedicure:["F","E","C"], pedicureexpress:["F","E","C"],
    manipedispa:["F","C","H"], manicure:["F","H","C"],
    oksel:["G","E"], been:["G"], rug:["G"], buik:["G"], borst:["G"],
    browlift:["G"], hennabrows:["G"], lashlift:["G"],
    hydrapeel:["A","B","C","D"], signaturefacial:["A","B","C","D"], fillme:["A","B","C","D"],
    fruitacid:["A","B","C","D"], liftsummere:["A","B","C","D"], antiagefacial:["A","B","C","D"],
    glammakeup:["A","B"], makeupworkshop:["A","B","C"], facialworkshop:["A","B","C"],
    hotstone:["A","D","E"], cupping:["A","D","E"], cuppingpeeling:["A","D","E"],
    swedish:["A","D","E"], swedishbackneck:["A","D","E"], swedishlegs:["A","D","E"],
    backwrap:["A","D","E"], harmonizingbody:["A","D","E"], fullbodywrap:["A","D","E"],
    slimmassage:["A","D","E"], detoxback:["A","D","E"]
  },
  sun: ["B"]
};
