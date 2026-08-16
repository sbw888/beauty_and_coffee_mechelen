/* ============================================================
   BEAUTY & COFFEE — data model
   Product & treatment names are salon/brand terms and stay
   identical in NL/EN, per the studio's own menu & protocols.
   ============================================================ */

const MOOD_ICONS = { relax:"🌿", energetic:"✨", focus:"🧖‍♀️", luxury:"💛", group:"👥" };
const CATEGORY_ICONS = { coffee:"☕", tea:"🍵" };
const CAFFEINE_ICONS = { caff:"⚡", decaf:"🌙" };
const TEMPERATURE_ICONS = { hot:"🔥", iced:"🧊" };
const PROFILE_ICONS = { kind:"🧒", man:"🧔", vrouw:"👩" };

const MOODS = ["relax","energetic","focus","luxury","group"];
const CATEGORIES = ["coffee","tea"];
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
  "Cascara Costa Rica Sonora","Matcha","Lipton Peach Mango","Lipton Refreshing Lemon",
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
    benefits:{ nl:"Diepe spierontspanning en verbeterde doorbloeding dankzij de warmte van de stenen.",
               en:"Deep muscle relaxation and improved circulation thanks to the warmth of the stones." },
    funfact:{ nl:"Warme basaltstenen absorberen en geven warmte langzaam af — vandaar hun gebruik in massagetherapie sinds oude beschavingen.",
              en:"Warm basalt stones absorb and slowly release heat — which is why they've been used in massage therapy since ancient civilizations." },
    aftercare:{ nl:"Drink de eerste 24 uur extra water, vermijd een hete douche of sauna direct erna en neem de tijd om na te rusten.",
                en:"Drink extra water for the first 24 hours, avoid a hot shower or sauna right after, and take time to rest afterwards." } },

  { id:"cupping", name:"Cupping Massage lokaal", moods:["focus","relax"], genders:["vrouw","man"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, cuppingRelated:true, promoted:true, price:"€30 (30')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een doelgerichte, diepe behandelmethode voor lokale spierknopen, verkleefd bindweefsel, cellulite en spanningsklachten zoals migraine.",
               en:"A targeted, deep treatment method for localized muscle knots, fascia adhesions, cellulite, and tension complaints such as migraines." },
    funfact:{ nl:"Hoe donkerder de bekende 'cupping-plekken', hoe meer verkleving en opgehoopte afvalstoffen er in dat specifieke weefsel zaten. Omdat cupping een sterke reactie uitlokt, behandelen we altijd gericht specifieke zones en nooit het hele lichaam in één keer.",
              en:"The darker the famous 'cupping marks', the more adhesions and accumulated waste products were present in that specific tissue. Because cupping triggers a strong reaction, we always target specific zones and never treat the entire body at once." },
    caution:{ nl:"Cupping is niet geschikt bij koorts, besmettelijke huidziekten, maag- of darmzweren, hartaandoeningen of een te laag lichaamsgewicht — laat het ons vooraf weten als dit op jou van toepassing is. De zon in mag gewoon na een lokale cupping massage.",
              en:"Cupping isn't suitable if you have a fever, a contagious skin condition, stomach or intestinal ulcers, a heart condition, or are underweight — please let us know beforehand if any of these apply to you. Sun exposure is fine after a local cupping massage." },
    aftercare:{ nl:"Sommige mensen voelen zich na cupping behoorlijk moe en wat gevoelig — vergelijkbaar met na een pittige training. Plan er daarom het liefst niets meer na: ga rechtstreeks naar huis, vermijd werk of winkelen, en gun jezelf rust. Stel de behandelde huid ook niet meteen bloot aan een hete of koude douche/bad. Drink extra veel water om losgekomen afvalstoffen af te voeren, gebruik eventueel Arnica-olie tegen blauwe plekken, en houd er rekening mee dat de plekken tot ongeveer 7 dagen zichtbaar kunnen blijven — handig om te weten vóór een zwembad- of strandmoment, trouwfeest of fotoshoot. Voor duurzaam onderhoud wordt een sessie om de 3 tot 6 weken aanbevolen.",
                en:"Some people feel quite tired and a little sore after cupping — similar to how you'd feel after an intense workout. It's best not to plan anything else afterwards: head straight home, skip work or errands, and give yourself time to rest. Also don't expose the treated skin to a hot or cold shower/bath right away. Drink plenty of water to help flush out released toxins, optionally use Arnica oil to reduce bruising, and keep in mind the marks can stay visible for about 7 days — worth knowing ahead of a swimwear moment, a wedding, or a photoshoot. For long-term maintenance, a session every 3 to 6 weeks is recommended." } },

  { id:"cuppingpeeling", name:"Zonepeeling met Cupping Massage", moods:["focus","relax"], genders:["vrouw","man"], sunSensitive:true, isMassage:true, pregnancyUnsafe:true, cuppingRelated:true, promoted:true, price:"€60 (60')",
    homecare:{ category:"body" },
    benefits:{ nl:"Combineert een vernieuwende zonepeeling met een diepgaande cupping massage — huidvernieuwing en spierontspanning in één sessie.",
               en:"Combines a renewing zone peeling with a deep cupping massage — skin renewal and muscle relaxation in one session." },
    funfact:{ nl:"Bijvoorbeeld een halfuur rugpeeling gevolgd door een halfuur massage met cupping — de exacte zone en verdeling passen we aan op wat jouw huid en spieren nodig hebben.",
              en:"For example, half an hour of back peeling followed by half an hour of massage with cupping — the exact zone and split are tailored to what your skin and muscles need." },
    caution:{ nl:"Cupping is niet geschikt bij koorts, besmettelijke huidziekten, maag- of darmzweren, hartaandoeningen of een te laag lichaamsgewicht — laat het ons vooraf weten als dit op jou van toepassing is. Ga je na deze behandeling in de zon? Dan raden we de peeling af vanwege verhoogde gevoeligheid.",
              en:"Cupping isn't suitable if you have a fever, a contagious skin condition, stomach or intestinal ulcers, a heart condition, or are underweight — please let us know beforehand if any of these apply to you. Planning sun exposure after this treatment? Then we'd advise against the peeling due to increased sensitivity." },
    aftercare:{ nl:"Sommige mensen voelen zich na cupping behoorlijk moe en wat gevoelig — vergelijkbaar met na een pittige training. Plan er daarom het liefst niets meer na: ga rechtstreeks naar huis, vermijd werk of winkelen, en gun jezelf rust. Stel de behandelde huid ook niet meteen bloot aan een hete of koude douche/bad. Vermijd daarnaast de eerste 24 tot 48 uur directe zon, de zonnebank en sauna's op de behandelde zone — gebruik nadien een hoge SPF. Drink extra water om losgekomen afvalstoffen af te voeren, gebruik eventueel Arnica-olie tegen blauwe plekken, en houd er rekening mee dat de plekken tot ongeveer 7 dagen zichtbaar kunnen blijven — handig om te weten vóór een zwembad- of strandmoment, trouwfeest of fotoshoot.",
                en:"Some people feel quite tired and a little sore after cupping — similar to how you'd feel after an intense workout. It's best not to plan anything else afterwards: head straight home, skip work or errands, and give yourself time to rest. Also don't expose the treated skin to a hot or cold shower/bath right away. On top of that, avoid direct sun, tanning beds, and saunas on the treated zone for the first 24 to 48 hours — use a high SPF afterwards. Drink extra water to help flush out released toxins, optionally use Arnica oil to reduce bruising, and keep in mind the marks can stay visible for about 7 days — worth knowing ahead of a swimwear moment, a wedding, or a photoshoot." } },

  { id:"swedish", name:"Swedish Full Body Massage", moods:["relax"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, promoted:true, price:"€70 (60')",
    homecare:{ category:"body" },
    benefits:{ nl:"Vermindert spierspanning en stress door lange, vloeiende strijkbewegingen.",
               en:"Reduces muscle tension and stress through long, flowing strokes." },
    funfact:{ nl:"De Zweedse massage combineert vijf klassieke bewegingen en ligt aan de basis van de meeste westerse massagetechnieken.",
              en:"Swedish massage combines five classic strokes and forms the basis of most Western massage techniques." },
    aftercare:{ nl:"Drink de eerste 24 uur ruim water, vermijd zware maaltijden vlak na de massage en bouw rustmomenten in.",
                en:"Drink plenty of water for the first 24 hours, avoid heavy meals right after the massage, and build in moments of rest." } },

  { id:"swedishbackneck", name:"Zweedse Rug-Nek-Schouder Massage", moods:["relax"], genders:["vrouw","man"], sunSensitive:false, isMassage:true, promoted:true, price:"€40 (30')",
    homecare:{ category:"body" },
    benefits:{ nl:"Gerichte massage van rug, nek en schouders om stressklachten en spanning te verminderen — ook geschikt tijdens de zwangerschap.",
               en:"A targeted massage of the back, neck, and shoulders to ease stress and tension — also suitable during pregnancy." },
    funfact:{ nl:"Deze kortere massage focust bewust op de zones waar we de meeste spanning opbouwen — ideaal als een volledige lichaamsmassage (nog) niet aan de orde is, zoals tijdens de zwangerschap.",
              en:"This shorter massage deliberately focuses on the areas where we build up the most tension — ideal when a full-body massage isn't (yet) an option, such as during pregnancy." },
    aftercare:{ nl:"Drink voldoende water na de massage en neem de tijd om rustig na te bewegen.",
                en:"Drink enough water after the massage and take time to move gently afterwards." } },

  { id:"backwrap", name:"Energetic Back Wrap", moods:["relax","focus"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, promoted:true, price:"€65 (60')",
    homecare:{ category:"body" },
    benefits:{ nl:"Verlicht een gespannen rug en geeft de huid een zachte, verzorgde afwerking.",
               en:"Relieves a tense back and leaves the skin soft and cared-for." },
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
    benefits:{ nl:"Verwijdert dode huidcellen en brengt tegelijk vocht terug voor een frisse, egale teint.",
               en:"Removes dead skin cells while replenishing moisture for a fresh, even complexion." },
    funfact:{ nl:"Een pH-peeling werkt zachter dan een klassieke peeling, waardoor herstel sneller verloopt.",
              en:"A pH peel works more gently than a classic peel, allowing for faster skin recovery." },
    aftercare:{ nl:"Gebruik 7 dagen dagelijks SPF 50, vermijd de zon 14 dagen en sla scrubs 48 uur over.",
                en:"Use SPF 50 daily for 7 days, avoid sun exposure for 14 days and skip scrubs for 48 hours." } },

  { id:"signaturefacial", name:"Signature Facial Treatment", moods:["focus"], genders:["vrouw","man"], sunSensitive:false, price:"€85 (75')",
    homecare:{ category:"facial" },
    benefits:{ nl:"Diepgaande reiniging en verzorging op maat van jouw huidtype voor directe uitstraling.",
               en:"Deep cleansing and care tailored to your skin type for immediate radiance." },
    funfact:{ nl:"Onze behandelingen combineren hoogwaardige productlijnen van topmerken zoals Guinot, Dr. Renaud en Janssen Cosmetics, aangevuld met specifieke Bio Balance accenten op maat van jouw huid.",
              en:"Our treatments combine high-quality product lines from top brands like Guinot, Dr. Renaud, and Janssen Cosmetics, complemented by tailored Bio Balance accents for your specific skin needs." },
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
    benefits:{ nl:"Vernieuwt de huidtextuur en vermindert oneffenheden met natuurlijke vruchtzuren.",
               en:"Renews skin texture and reduces unevenness using natural fruit acids." },
    funfact:{ nl:"Vruchtzuren (AHA) versnellen de natuurlijke celvernieuwing van de huid met weken.",
              en:"Fruit acids (AHA) speed up the skin's natural cell renewal by weeks." },
    aftercare:{ nl:"Gebruik 7 dagen dagelijks SPF 50, vermijd de zon 14 dagen en sla actieve producten 48 uur over.",
                en:"Use SPF 50 daily for 7 days, avoid sun exposure for 14 days and skip active products for 48 hours." } },

  { id:"liftsummere", name:"Lift Summum", moods:["focus","luxury"], genders:["vrouw","man"], sunSensitive:false, minAge30:true, price:"€120 (70')",
    homecare:{ category:"facial" },
    benefits:{ nl:"Een liftend effect voor een steviger, stralender huidbeeld.",
               en:"A lifting effect for firmer, more radiant-looking skin." },
    funfact:{ nl:"Liftende gelaatsbehandelingen stimuleren de doorbloeding, wat het stralingseffect direct zichtbaar maakt.",
              en:"Lifting facials stimulate circulation, which makes the radiance effect visible right away." },
    aftercare:{ nl:"Gebruik dagelijks SPF, drink voldoende water en vermijd de eerste 24 uur zware make-up.",
                en:"Use SPF daily, drink enough water and avoid heavy makeup for the first 24 hours." } },

  { id:"detoxback", name:"Detoxifying Back Treatment", moods:["focus"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, promoted:true, price:"€70 (60')",
    homecare:{ category:"body" },
    benefits:{ nl:"Reinigt en verzacht de rughuid, ideaal bij onzuiverheden of een gespannen gevoel.",
               en:"Cleanses and soothes the skin on the back, ideal for blemishes or a tense feeling." },
    funfact:{ nl:"De rug is een van de moeilijkst zelf te verzorgen zones — een reden temeer voor een salonbehandeling.",
              en:"The back is one of the hardest areas to care for yourself — all the more reason for a salon treatment." },
    aftercare:{ nl:"Draag de eerste 24 uur bij voorkeur losse kleding. Eenmaal thuis kun je gewoon douchen zoals normaal.",
                en:"Preferably wear loose clothing for the first 24 hours. You can shower normally once you're home." } },

  { id:"antiagefacial", name:"Anti-Age Facial", moods:["luxury"], genders:["vrouw"], sunSensitive:false, minAge45:true, price:"€125 (90')",
    homecare:{ category:"facial" },
    benefits:{ nl:"Een anti-aging gelaatsbehandeling afgestemd op de specifieke noden van de rijpe huid (45+).",
               en:"An anti-aging facial tailored to the specific needs of mature skin (45+)." },
    funfact:{ nl:"Extracten worden gekozen op hun antioxidantwerking tegen huidveroudering.",
              en:"Extracts are selected for their antioxidant action against skin aging." },
    aftercare:{ nl:"Gebruik dagelijks SPF 50 gedurende 7 dagen en reinig 's avonds grondig.",
                en:"Use SPF 50 daily for 7 days and cleanse thoroughly in the evening." } },

  { id:"harmonizingbody", name:"Harmonizing Full Body Treatment", moods:["luxury"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, promoted:true, price:"€70 (70')",
    homecare:{ category:"body" },
    benefits:{ nl:"Een totaalervaring die lichaam en geest in balans brengt met verzorgende texturen.",
               en:"A total experience that brings body and mind into balance with nourishing textures." },
    funfact:{ nl:"Deze behandeling combineert peeling, massage én masker in één doorlopende sessie.",
              en:"This treatment combines exfoliation, massage and a mask in one continuous session." },
    aftercare:{ nl:"Drink de eerste 24 uur veel water en hydrateer de huid dagelijks met een bodylotion.",
                en:"Drink plenty of water for the first 24 hours and moisturize the skin daily with a body lotion." } },

  { id:"fullbodywrap", name:"Energetic Full Body Wrap", moods:["luxury","relax"], genders:["vrouw"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, promoted:true, price:"€110 (120')",
    homecare:{ category:"body" },
    benefits:{ nl:"Verstevigt en hydrateert de huid, en geeft een direct energiek, fris gevoel.",
               en:"Firms and hydrates the skin, giving an immediate energetic, fresh feeling." },
    funfact:{ nl:"Een full body wrap wordt vaak gecombineerd met warmte om actieve stoffen dieper te laten doordringen.",
              en:"A full body wrap is often combined with heat to help active ingredients penetrate more deeply." },
    aftercare:{ nl:"Eenmaal thuis kun je gewoon douchen zoals normaal — drink de eerste dag wel extra veel water.",
                en:"You can shower normally once you're home — just drink extra water on the first day." } },

  { id:"makeupworkshop", name:"Private Beauty Makeup Workshop", moods:["group"], genders:["vrouw"], sunSensitive:false, price:"€50 (75') · €35 p.p. bij 3-4 personen",
    homecare:{ category:"facial" },
    benefits:{ nl:"Leer zelf professionele make-uptechnieken toepassen, samen met vriendinnen of collega's.",
               en:"Learn to apply professional makeup techniques yourself, together with friends or colleagues." },
    funfact:{ nl:"Deelnemers gaan naar huis met een persoonlijke productenlijst afgestemd op hun huidtype.",
              en:"Participants go home with a personal product list tailored to their skin type." },
    aftercare:{ nl:"Geen specifieke nazorg nodig — reinig de huid zoals gewoonlijk aan het einde van de dag.",
                en:"No specific aftercare needed — cleanse the skin as usual at the end of the day." } },

  { id:"facialworkshop", name:"Private Facial & Touch-Up Workshop", moods:["group"], genders:["vrouw","man"], sunSensitive:false, price:"€50 (75') · €35 p.p. bij 3-4 personen",
    homecare:{ category:"facial" },
    benefits:{ nl:"Ontdek stap voor stap hoe je een professionele gelaatsroutine thuis nabootst.",
               en:"Discover step by step how to recreate a professional facial routine at home." },
    funfact:{ nl:"Je gaat naar huis met de exacte volgorde van producten die het beste bij jouw huid past.",
              en:"You'll go home with the exact product order that suits your skin best." },
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
    benefits:{ nl:"Leer zelf espresso's en melkschuim als een professional bereiden.",
               en:"Learn to prepare espresso and milk foam like a professional yourself." },
    funfact:{ nl:"Perfecte latte art begint bij melk die tot exact de juiste microschuim-textuur is opgeklopt.",
              en:"Perfect latte art starts with milk steamed to exactly the right microfoam texture." },
    aftercare:{ nl:"Geen nazorg nodig — oefen thuis gerust met je eigen espressomachine.",
                en:"No aftercare needed — feel free to practice at home on your own espresso machine." } },

  { id:"manicure", name:"Extended Manicure", moods:["relax","luxury"], genders:["vrouw","man"], sunSensitive:false, price:"€35 (60')",
    homecare:{ category:"hand" },
    benefits:{ nl:"Verzorgde, nette handen en nagels met een moment van pure ontspanning.",
               en:"Neat, well-groomed hands and nails with a moment of pure relaxation." },
    funfact:{ nl:"Regelmatige nagelriemverzorging voorkomt op termijn braamranden en droge nagelriemen.",
              en:"Regular cuticle care prevents hangnails and dry cuticles over time." },
    aftercare:{ nl:"Kies je voor gellak of verstevigende BIAB? Dan zijn je nagels direct droog en stootvast. Bij klassieke nagellak raden we aan om je handen de eerste 2 uur droog te houden. Hydrateer nagelriemen dagelijks met nagelriemolie.",
                en:"Opting for gel polish or builder gel (BIAB)? Your nails are dry and smudge-proof immediately! For classic nail polish, please allow 2 hours (hands) to fully dry. Apply cuticle oil daily for best results.." } },

  { id:"pedicure", name:"Extended Pedicure", moods:["relax","luxury"], genders:["vrouw","man"], sunSensitive:false, promoted:true, price:"€35 (60')",
    homecare:{ category:"foot" },
    benefits:{ nl:"Zachte, verzorgde voeten en nette nagels — ideaal vóór sandalenseizoen.",
               en:"Soft, cared-for feet and neat nails — ideal ahead of sandal season." },
    funfact:{ nl:"Eeltverwijdering helpt niet alleen esthetisch, maar voorkomt ook drukplekken bij het lopen.",
              en:"Removing hard skin isn't just cosmetic — it also prevents pressure spots while walking." },
    aftercare:{ nl:"Kies je voor gellak? Dan zijn je nagels direct droog en stootvast. Bij klassieke nagellak raden we aan om je voeten de eerste 4 uur (gesloten schoenen) rust te gunnen. Hydrateer nagelriemen dagelijks met nagelriemolie.",
                en:"Opting for gel polish or builder gel (BIAB)? Your nails are dry and smudge-proof immediately! For classic nail polish, please allow 4 hours (feet in closed shoes) to fully dry. Apply cuticle oil daily for best results." } },

  { id:"slimmassage", name:"Afslankingsmassage", moods:["relax","focus","luxury"], genders:["vrouw","man"], sunSensitive:false, isMassage:true, pregnancyUnsafe:true, requiresDietExercise:true, promoted:true, price:"€55 (60')",
    homecare:{ category:"body" },
    benefits:{ nl:"Stimuleert de doorbloeding en lymfeafvoer voor een verstevigd, verfrist gevoel.",
               en:"Stimulates circulation and lymphatic drainage for a firmer, refreshed feeling." },
    funfact:{ nl:"Deze massagetechniek combineert stevige grepen met specifieke bewegingsrichtingen richting de lymfeklieren.",
              en:"This massage technique combines firm grips with specific movement directions toward the lymph nodes." },
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

function matchTreatment(mood, gender, sunExposed, healthFlags){
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
