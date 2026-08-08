/* ============================================================
   BEAUTY & COFFEE — data model
   Product & treatment names are salon/brand terms and stay
   identical in NL/EN, per the studio's own menu & protocols.
   ============================================================ */

const MOOD_ICONS = { relax:"🌿", energetic:"✨", focus:"🧖‍♀️", luxury:"💛", group:"👥" };
const CATEGORY_ICONS = { coffee:"☕", tea:"🍵", iced:"🧊" };
const CAFFEINE_ICONS = { caff:"⚡", decaf:"🌙" };
const PROFILE_ICONS = { kind:"🧒", man:"🧔", vrouw:"👩" };

const MOODS = ["relax","energetic","focus","luxury","group"];
const CATEGORIES = ["coffee","tea","iced"];
const CAFFEINE_OPTIONS = ["caff","decaf"];
const PROFILES = ["kind","man","vrouw"];

const MILK_OPTIONS = ["none","whole","oat","extra"];
const EXTRA_OPTIONS = ["honey","sugar","cream","icecream","biscoff","pumpkin"];

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
  "Cascara Costa Rica Sonora","Organic Matcha Green Tea","Lipton Peach Mango","Lipton Refreshing Lemon",
  "Pickwick Original English","Pickwick Green Tea Pure","Lipton Japanese Sencha","Lord Nelson Chai",
  "Organo Gold Organic Green Tea (with Ganoderma)"
];

/* ---------- beverage menu, grouped by category + caffeine ---------- */
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
  iced: {
    caff: [
      { name:"Iced Coffee + Whipped Cream", style:"iced" },
      { name:"Affogato", style:"iced", notes:"2 scoops vanilla ice cream" },
      { name:"Iced Latte + Choco + Whipped Cream + Biscoff Crumbs", style:"iced" },
      { name:"Matcha Latte", style:"iced" }
    ],
    decaf: [
      { name:"Iced Coffee + Whipped Cream", style:"iced" },
      { name:"Iced Latte + Choco + Whipped Cream + Biscoff Crumbs", style:"iced" },
      { name:"Hot Chocolate (Milk)", style:"iced" },
      { name:"Hot Chocolate (White)", style:"iced" }
    ]
  }
};

/* ---------- kids drinks (fixed, no caffeine ever) ---------- */
const KIDS_DRINKS = [
  { id:"water", name:{ nl:"Plat water", en:"Still water" }, icon:"💧" },
  { id:"chocolate", name:{ nl:"Warme Chocomelk", en:"Hot Chocolate" }, icon:"🍫" }
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

function getHomecareRecommendation(categoryId, lang, soapHints){
  const tryCategory = (catId) => {
    const cat = PRODUCT_CATEGORIES[catId];
    if (!cat || !cat.inStock) return null;
    let pool = cat.products;
    if (catId === "soap" && soapHints && soapHints.length){
      const hinted = pool.filter(p => soapHints.includes(p.id));
      if (hinted.length) pool = hinted;
    }
    const inStockProducts = pool; // product-level stock only modeled for soaps below
    if (!inStockProducts.length) return null;
    const product = pickRandom(inStockProducts);
    return { categoryLabel: cat.label[lang], productName: product.name, usage: product.usage[lang] };
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

/* ============================================================
   TREATMENT CATALOG
   Every treatment is tagged with the moods it satisfies, the
   profiles allowed to receive it, and whether it must be
   filtered out after recent/upcoming sun exposure.
   ============================================================ */
const TREATMENTS_CATALOG = [
  { id:"hotstone", name:"Hot Stone Massage", moods:["relax"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"body" },
    benefits:{ nl:"Diepe spierontspanning en verbeterde doorbloeding dankzij de warmte van de stenen.",
               en:"Deep muscle relaxation and improved circulation thanks to the warmth of the stones." },
    funfact:{ nl:"Warme basaltstenen absorberen en geven warmte langzaam af — vandaar hun gebruik in massagetherapie sinds oude beschavingen.",
              en:"Warm basalt stones absorb and slowly release heat — which is why they've been used in massage therapy since ancient civilizations." },
    aftercare:{ nl:"Drink de eerste 24 uur extra water, vermijd een hete douche of sauna direct erna en neem de tijd om na te rusten.",
                en:"Drink extra water for the first 24 hours, avoid a hot shower or sauna right after, and take time to rest afterwards." } },

  { id:"swedish", name:"Swedish Full Body Massage", moods:["relax"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"body" },
    benefits:{ nl:"Vermindert spierspanning en stress door lange, vloeiende strijkbewegingen.",
               en:"Reduces muscle tension and stress through long, flowing strokes." },
    funfact:{ nl:"De Zweedse massage combineert vijf klassieke bewegingen en ligt aan de basis van de meeste westerse massagetechnieken.",
              en:"Swedish massage combines five classic strokes and forms the basis of most Western massage techniques." },
    aftercare:{ nl:"Drink de eerste 24 uur ruim water, vermijd zware maaltijden vlak na de massage en bouw rustmomenten in.",
                en:"Drink plenty of water for the first 24 hours, avoid heavy meals right after the massage, and build in moments of rest." } },

  { id:"backwrap", name:"Energetic Back Wrap", moods:["relax","focus"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"body" },
    benefits:{ nl:"Verlicht een gespannen rug en geeft de huid een zachte, verzorgde afwerking.",
               en:"Relieves a tense back and leaves the skin soft and cared-for." },
    funfact:{ nl:"Een lichaamswikkel combineert warmte met actieve ingrediënten, waardoor de huid ze beter opneemt.",
              en:"A body wrap combines heat with active ingredients, helping the skin absorb them more effectively." },
    aftercare:{ nl:"Douche pas na 24 uur weer uitgebreid, drink veel water en hydrateer de huid dagelijks.",
                en:"Wait 24 hours before showering thoroughly again, drink plenty of water and moisturize the skin daily." } },

  { id:"manipedispa", name:"Extended Manicure/Pedicure with SPA supplement", moods:["relax","luxury"], genders:["vrouw","man"], sunSensitive:false,
    homecare:{ category:"hand" },
    benefits:{ nl:"Verzorgde handen én voeten in één sessie, met een extra ontspannen SPA-behandeling.",
               en:"Cared-for hands and feet in a single session, with an extra-relaxing SPA touch." },
    funfact:{ nl:"Regelmatige manicure/pedicure verbetert niet alleen de look, maar ook de nagelgezondheid op lange termijn.",
              en:"Regular manicures/pedicures improve not just the look but also long-term nail health." },
    aftercare:{ nl:"Wacht minstens 2 uur (handen) en 4 uur (voeten) voor je iets nats of strak schoeisel aandoet, en hydrateer dagelijks.",
                en:"Wait at least 2 hours (hands) and 4 hours (feet) before wet activities or tight footwear, and moisturize daily." } },

  { id:"browlift", name:"Brow Lift", moods:["energetic"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"eye" },
    benefits:{ nl:"Een open, wakkere blik zonder dagelijks stylen — de wenkbrauwhaartjes blijven weken op hun plek.",
               en:"An open, awake look with no daily styling — the brow hairs stay in place for weeks." },
    funfact:{ nl:"Een brow lift werkt met dezelfde techniek als een lash lift, maar dan gericht op de wenkbrauw.",
              en:"A brow lift uses the same technique as a lash lift, but is applied to the eyebrow instead." },
    aftercare:{ nl:"Houd de wenkbrauwen 24 uur droog en vermijd de eerste 48 uur oliehoudende reinigers op de wenkbrauw.",
                en:"Keep the brows dry for 24 hours and avoid oil-based cleansers on the brow area for the first 48 hours." } },

  { id:"hennabrows", name:"Henna Brows", moods:["energetic"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"eye" },
    benefits:{ nl:"Voller ogende wenkbrauwen met een natuurlijke kleurintensiteit die weken meegaat.",
               en:"Fuller-looking brows with a natural color intensity that lasts for weeks." },
    funfact:{ nl:"Henna kleurt niet alleen de haartjes maar ook de huid eronder, voor een extra vol effect.",
              en:"Henna colors not just the hairs but also the skin underneath, for an extra full effect." },
    aftercare:{ nl:"Houd de wenkbrauwen 24 uur droog en vermijd scrubs of peelings rond de wenkbrauw gedurende 3 dagen.",
                en:"Keep the brows dry for 24 hours and avoid scrubs or peels around the brow area for 3 days." } },

  { id:"lashlift", name:"Lash Lift with Tint", moods:["energetic"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"eye" },
    benefits:{ nl:"Krullende, donkere wimpers zonder mascara — bespaart tijd in je ochtendroutine.",
               en:"Curled, darker lashes without mascara — saves time in your morning routine." },
    funfact:{ nl:"Het effect van een lash lift houdt gemiddeld één volledige wimpergroeicyclus aan, ongeveer 6 tot 8 weken.",
              en:"The effect of a lash lift lasts on average one full lash growth cycle, about 6 to 8 weeks." },
    aftercare:{ nl:"Houd de wimpers de eerste 24 uur volledig droog en vermijd olie-based make-up remover gedurende 48 uur.",
                en:"Keep the lashes completely dry for the first 24 hours and avoid oil-based makeup remover for 48 hours." } },

  { id:"glammakeup", name:"Evening / Party Glam Makeup", moods:["energetic","luxury"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"facial" },
    benefits:{ nl:"Een foto- en feestklare look, afgestemd op jouw gelegenheid en huidtype.",
               en:"A photo- and party-ready look, tailored to your occasion and skin type." },
    funfact:{ nl:"Professionele glam-make-up gebruikt laagjestechnieken zodat de look de hele avond intact blijft.",
              en:"Professional glam makeup uses layering techniques so the look stays intact all evening." },
    aftercare:{ nl:"Reinig 's avonds grondig met een milde cleanser en hydrateer de huid voor het slapengaan.",
                en:"Cleanse thoroughly in the evening with a mild cleanser and moisturize the skin before bed." } },

  { id:"hydrapeel", name:"Skin-Renewing Hydra Peeling pH", moods:["energetic","focus"], genders:["vrouw","man"], sunSensitive:true,
    homecare:{ category:"facial" },
    benefits:{ nl:"Verwijdert dode huidcellen en brengt tegelijk vocht terug voor een frisse, egale teint.",
               en:"Removes dead skin cells while replenishing moisture for a fresh, even complexion." },
    funfact:{ nl:"Een pH-peeling werkt zachter dan een klassieke peeling, waardoor herstel sneller verloopt.",
              en:"A pH peel works more gently than a classic peel, allowing for faster skin recovery." },
    aftercare:{ nl:"Gebruik 7 dagen dagelijks SPF 50, vermijd de zon 14 dagen en sla scrubs 48 uur over.",
                en:"Use SPF 50 daily for 7 days, avoid sun exposure for 14 days and skip scrubs for 48 hours." } },

  { id:"signaturefacial", name:"Signature Facial Treatment", moods:["focus"], genders:["vrouw","man"], sunSensitive:false,
    homecare:{ category:"facial" },
    benefits:{ nl:"Diepgaande reiniging en verzorging op maat van jouw huidtype voor directe uitstraling.",
               en:"Deep cleansing and care tailored to your skin type for immediate radiance." },
    funfact:{ nl:"Onze signature facial combineert Janssen Cosmetics-lijnen voor vette, gevoelige én droge huid.",
              en:"Our signature facial combines Janssen Cosmetics lines for oily, sensitive and dry skin types." },
    aftercare:{ nl:"Gebruik 7 dagen dagelijks SPF 50 en drink voldoende water om het reinigingseffect te ondersteunen.",
                en:"Use SPF 50 daily for 7 days and drink enough water to support the cleansing effect." } },

  { id:"fillme", name:"Fill Me Micro Infusion Treatment", moods:["focus"], genders:["vrouw","man"], sunSensitive:true,
    homecare:{ category:"facial" },
    benefits:{ nl:"Brengt hyaluronzuur diep in de huid voor een plumpend, verjongend effect.",
               en:"Delivers hyaluronic acid deep into the skin for a plumping, rejuvenating effect." },
    funfact:{ nl:"De behandeling gebruikt micro-naaldjes die kleiner zijn dan een haar om het serum efficiënt in te brengen.",
              en:"The treatment uses micro-needles thinner than a hair to deliver the serum efficiently." },
    aftercare:{ nl:"Draag 24 uur geen make-up, vermijd zon en sauna 48 uur en gebruik dagelijks SPF.",
                en:"Avoid makeup for 24 hours, skip sun and sauna for 48 hours, and use daily SPF." } },

  { id:"fruitacid", name:"Fruit Acid Peeling Dr. Renaud", moods:["focus"], genders:["vrouw","man"], sunSensitive:true,
    homecare:{ category:"facial" },
    benefits:{ nl:"Vernieuwt de huidtextuur en vermindert oneffenheden met natuurlijke vruchtzuren.",
               en:"Renews skin texture and reduces unevenness using natural fruit acids." },
    funfact:{ nl:"Vruchtzuren (AHA) versnellen de natuurlijke celvernieuwing van de huid met weken.",
              en:"Fruit acids (AHA) speed up the skin's natural cell renewal by weeks." },
    aftercare:{ nl:"Gebruik 7 dagen dagelijks SPF 50, vermijd de zon 14 dagen en sla actieve producten 48 uur over.",
                en:"Use SPF 50 daily for 7 days, avoid sun exposure for 14 days and skip active products for 48 hours." } },

  { id:"liftsummere", name:"Lift Summere", moods:["focus","luxury"], genders:["vrouw","man"], sunSensitive:false,
    homecare:{ category:"facial" },
    benefits:{ nl:"Een liftend effect voor een steviger, stralender huidbeeld.",
               en:"A lifting effect for firmer, more radiant-looking skin." },
    funfact:{ nl:"Liftende gelaatsbehandelingen stimuleren de doorbloeding, wat het stralingseffect direct zichtbaar maakt.",
              en:"Lifting facials stimulate circulation, which makes the radiance effect visible right away." },
    aftercare:{ nl:"Gebruik dagelijks SPF, drink voldoende water en vermijd de eerste 24 uur zware make-up.",
                en:"Use SPF daily, drink enough water and avoid heavy makeup for the first 24 hours." } },

  { id:"detoxback", name:"Detoxifying Back Treatment", moods:["focus"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"body" },
    benefits:{ nl:"Reinigt en verzacht de rughuid, ideaal bij onzuiverheden of een gespannen gevoel.",
               en:"Cleanses and soothes the skin on the back, ideal for blemishes or a tense feeling." },
    funfact:{ nl:"De rug is een van de moeilijkst zelf te verzorgen zones — een reden temeer voor een salonbehandeling.",
              en:"The back is one of the hardest areas to care for yourself — all the more reason for a salon treatment." },
    aftercare:{ nl:"Draag de eerste 24 uur losse kleding en vermijd een hete douche direct na de behandeling.",
                en:"Wear loose clothing for the first 24 hours and avoid a hot shower right after the treatment." } },

  { id:"antiagefacial", name:"Botanical Anti-Age Facial + Touch-Up Day Makeup", moods:["luxury"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"facial" },
    benefits:{ nl:"Combineert een verjongende gelaatsbehandeling met een frisse make-up touch-up.",
               en:"Combines a rejuvenating facial with a fresh makeup touch-up." },
    funfact:{ nl:"Botanische extracten worden gekozen op hun antioxidantwerking tegen huidveroudering.",
              en:"Botanical extracts are selected for their antioxidant action against skin aging." },
    aftercare:{ nl:"Gebruik dagelijks SPF 50 gedurende 7 dagen en reinig 's avonds grondig.",
                en:"Use SPF 50 daily for 7 days and cleanse thoroughly in the evening." } },

  { id:"harmonizingbody", name:"Harmonizing Full Body Treatment", moods:["luxury"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"body" },
    benefits:{ nl:"Een totaalervaring die lichaam en geest in balans brengt met verzorgende texturen.",
               en:"A total experience that brings body and mind into balance with nourishing textures." },
    funfact:{ nl:"Deze behandeling combineert peeling, massage én masker in één doorlopende sessie.",
              en:"This treatment combines exfoliation, massage and a mask in one continuous session." },
    aftercare:{ nl:"Drink de eerste 24 uur veel water en hydrateer de huid dagelijks met een bodylotion.",
                en:"Drink plenty of water for the first 24 hours and moisturize the skin daily with a body lotion." } },

  { id:"fullbodywrap", name:"Energetic Full Body Wrap", moods:["luxury","relax"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"body" },
    benefits:{ nl:"Verstevigt en hydrateert de huid, en geeft een direct energiek, fris gevoel.",
               en:"Firms and hydrates the skin, giving an immediate energetic, fresh feeling." },
    funfact:{ nl:"Een full body wrap wordt vaak gecombineerd met warmte om actieve stoffen dieper te laten doordringen.",
              en:"A full body wrap is often combined with heat to help active ingredients penetrate more deeply." },
    aftercare:{ nl:"Douche pas na 24 uur weer uitgebreid en drink de eerste dag extra veel water.",
                en:"Wait 24 hours before showering thoroughly again and drink extra water on the first day." } },

  { id:"makeupworkshop", name:"Private Beauty Makeup Workshop", moods:["group"], genders:["vrouw"], sunSensitive:false,
    homecare:{ category:"facial" },
    benefits:{ nl:"Leer zelf professionele make-uptechnieken toepassen, samen met vriendinnen of collega's.",
               en:"Learn to apply professional makeup techniques yourself, together with friends or colleagues." },
    funfact:{ nl:"Deelnemers gaan naar huis met een persoonlijke productenlijst afgestemd op hun huidtype.",
              en:"Participants go home with a personal product list tailored to their skin type." },
    aftercare:{ nl:"Geen specifieke nazorg nodig — reinig de huid zoals gewoonlijk aan het einde van de dag.",
                en:"No specific aftercare needed — cleanse the skin as usual at the end of the day." } },

  { id:"facialworkshop", name:"Private Facial & Touch-Up Workshop", moods:["group"], genders:["vrouw","man"], sunSensitive:false,
    homecare:{ category:"facial" },
    benefits:{ nl:"Ontdek stap voor stap hoe je een professionele gelaatsroutine thuis nabootst.",
               en:"Discover step by step how to recreate a professional facial routine at home." },
    funfact:{ nl:"Je gaat naar huis met de exacte volgorde van producten die het beste bij jouw huid past.",
              en:"You'll go home with the exact product order that suits your skin best." },
    aftercare:{ nl:"Gebruik dagelijks SPF na een gelaatsbehandeling en hydrateer 's avonds goed.",
                en:"Use daily SPF after a facial treatment and moisturize well in the evening." } },

  { id:"tastingbasic", name:"Coffee Tasting Basic", moods:["group"], genders:["vrouw","man"], sunSensitive:false,
    homecare:{ category:"soap", soapHint:["koffie"] },
    benefits:{ nl:"Leer de basis van koffie proeven: aroma's, zuurgraad en afdronk herkennen.",
               en:"Learn the basics of coffee tasting: recognizing aroma, acidity and aftertaste." },
    funfact:{ nl:"Onze Peru Single Origin en House Blend komen allebei langs tijdens deze proeverij.",
              en:"Both our Peru Single Origin and House Blend feature in this tasting." },
    aftercare:{ nl:"Geen nazorg nodig — geniet gerust van nog een kopje na afloop.",
                en:"No aftercare needed — feel free to enjoy another cup afterwards." } },

  { id:"tastingadvanced", name:"Coffee Tasting Advanced", moods:["group"], genders:["vrouw","man"], sunSensitive:false,
    homecare:{ category:"soap", soapHint:["koffie"] },
    benefits:{ nl:"Verdiep je in origin-vergelijkingen en brouwmethodes als een echte barista.",
               en:"Dive deeper into origin comparisons and brewing methods like a true barista." },
    funfact:{ nl:"Je proeft dezelfde bonen bereid via V60, French Press én Moka Pot om het verschil te ervaren.",
              en:"You'll taste the same beans prepared via V60, French Press and Moka Pot to experience the difference." },
    aftercare:{ nl:"Geen nazorg nodig — noteer je favoriete bereidingswijze voor thuis.",
                en:"No aftercare needed — jot down your favorite brew method for at home." } },

  { id:"baristaworkshop", name:"Private Barista Workshop", moods:["group"], genders:["vrouw","man"], sunSensitive:false,
    homecare:{ category:"soap", soapHint:["koffie"] },
    benefits:{ nl:"Leer zelf espresso's en melkschuim als een professional bereiden.",
               en:"Learn to prepare espresso and milk foam like a professional yourself." },
    funfact:{ nl:"Perfecte latte art begint bij melk die tot exact de juiste microschuim-textuur is opgeklopt.",
              en:"Perfect latte art starts with milk steamed to exactly the right microfoam texture." },
    aftercare:{ nl:"Geen nazorg nodig — oefen thuis gerust met je eigen espressomachine.",
                en:"No aftercare needed — feel free to practice at home on your own espresso machine." } },

  { id:"manicure", name:"Manicure", moods:["relax","luxury"], genders:["vrouw","man"], sunSensitive:false,
    homecare:{ category:"hand" },
    benefits:{ nl:"Verzorgde, nette handen en nagels met een moment van pure ontspanning.",
               en:"Neat, well-groomed hands and nails with a moment of pure relaxation." },
    funfact:{ nl:"Regelmatige nagelriemverzorging voorkomt op termijn braamranden en droge nagelriemen.",
              en:"Regular cuticle care prevents hangnails and dry cuticles over time." },
    aftercare:{ nl:"Wacht minstens 2 uur voor je je handen intensief nat maakt en hydrateer dagelijks.",
                en:"Wait at least 2 hours before getting your hands intensively wet, and moisturize daily." } },

  { id:"pedicure", name:"Pedicure", moods:["relax","luxury"], genders:["vrouw","man"], sunSensitive:false,
    homecare:{ category:"foot" },
    benefits:{ nl:"Zachte, verzorgde voeten en nette nagels — ideaal vóór sandalenseizoen.",
               en:"Soft, cared-for feet and neat nails — ideal ahead of sandal season." },
    funfact:{ nl:"Eeltverwijdering helpt niet alleen esthetisch, maar voorkomt ook drukplekken bij het lopen.",
              en:"Removing hard skin isn't just cosmetic — it also prevents pressure spots while walking." },
    aftercare:{ nl:"Wacht minstens 4 uur voor je gesloten of strakke schoenen aandoet en hydrateer dagelijks.",
                en:"Wait at least 4 hours before wearing closed or tight shoes, and moisturize daily." } },

  { id:"slimmassage", name:"Afslankingsmassage", moods:["relax","focus","luxury"], genders:["vrouw","man"], sunSensitive:false,
    homecare:{ category:"body" },
    benefits:{ nl:"Stimuleert de doorbloeding en lymfeafvoer voor een verstevigd, verfrist gevoel.",
               en:"Stimulates circulation and lymphatic drainage for a firmer, refreshed feeling." },
    funfact:{ nl:"Deze massagetechniek combineert stevige grepen met specifieke bewegingsrichtingen richting de lymfeklieren.",
              en:"This massage technique combines firm grips with specific movement directions toward the lymph nodes." },
    aftercare:{ nl:"Drink de eerste 24 uur extra water om de afvoer van afvalstoffen te ondersteunen.",
                en:"Drink extra water for the first 24 hours to support the removal of waste products." } },

  { id:"oksel", name:"Okselontharing", moods:["energetic"], genders:["vrouw","man"], sunSensitive:true,
    homecare:{ category:"soap", soapHint:["aloevera","komkommer","syndet"] },
    benefits:{ nl:"Wekenlang zachte, gladde oksels zonder dagelijks scheren.",
               en:"Weeks of soft, smooth underarms without daily shaving." },
    funfact:{ nl:"Ontharen met was verwijdert het haar met de wortel, waardoor het langzamer en zachter teruggroeit dan bij scheren.",
              en:"Waxing removes hair from the root, so regrowth is slower and softer than with shaving." },
    aftercare:{ nl:"Gebruik 24 uur geen deodorant, vermijd een hete douche of sauna en draag losse kleding.",
                en:"Avoid deodorant for 24 hours, skip a hot shower or sauna, and wear loose clothing." } },

  { id:"been", name:"Beenontharing", moods:["energetic"], genders:["vrouw","man"], sunSensitive:true,
    homecare:{ category:"soap", soapHint:["aloevera","komkommer"] },
    benefits:{ nl:"Wekenlang gladde benen met een fijnere, langzamere hergroei dan bij scheren.",
               en:"Weeks of smooth legs, with finer, slower regrowth than shaving." },
    funfact:{ nl:"Na een aantal ontharingsbeurten groeit het haar vaak dunner en spaarzamer terug.",
              en:"After several waxing sessions, hair often grows back thinner and more sparse." },
    aftercare:{ nl:"Vermijd 24 uur een hete douche, zon of solarium, en breng een milde hydraterende crème aan.",
                en:"Avoid a hot shower, sun or sunbed for 24 hours, and apply a mild moisturizing cream." } },

  { id:"rug", name:"Rugontharing", moods:["energetic","focus"], genders:["man"], sunSensitive:true,
    homecare:{ category:"soap", soapHint:["aloevera","komkommer"] },
    benefits:{ nl:"Een gladde, verzorgde rug zonder de moeite van zelf scheren op een moeilijk bereikbare plek.",
               en:"A smooth, groomed back without the hassle of shaving a hard-to-reach area yourself." },
    funfact:{ nl:"De rug is een van de meest gevraagde ontharingszones bij mannen vóór het zomerseizoen.",
              en:"The back is one of the most requested waxing areas for men ahead of summer." },
    aftercare:{ nl:"Vermijd 24 uur een hete douche, zon of strak zittende kleding op de rug.",
                en:"Avoid a hot shower, sun exposure or tight-fitting clothing on the back for 24 hours." } },

  { id:"buik", name:"Buikontharing", moods:["energetic"], genders:["man"], sunSensitive:true,
    homecare:{ category:"soap", soapHint:["aloevera","komkommer"] },
    benefits:{ nl:"Een gladde buik met langdurig resultaat en fijnere hergroei.",
               en:"A smooth stomach with long-lasting results and finer regrowth." },
    funfact:{ nl:"De huid op de buik is gevoeliger, daarom werken we hier met extra zachte was.",
              en:"The skin on the stomach is more sensitive, which is why we use extra-gentle wax here." },
    aftercare:{ nl:"Vermijd 24 uur een hete douche, zon en strakke kleding op de behandelde zone.",
                en:"Avoid a hot shower, sun exposure and tight clothing on the treated area for 24 hours." } },

  { id:"borst", name:"Borstontharing", moods:["energetic"], genders:["man"], sunSensitive:true,
    homecare:{ category:"soap", soapHint:["aloevera","komkommer"] },
    benefits:{ nl:"Een verzorgde, gladde borstkas met resultaat dat weken meegaat.",
               en:"A groomed, smooth chest with results that last for weeks." },
    funfact:{ nl:"Net als bij de rug groeit het haar na herhaalde behandelingen vaak dunner terug.",
              en:"As with the back, hair often grows back thinner after repeated treatments." },
    aftercare:{ nl:"Vermijd 24 uur een hete douche, zon of solarium en draag losse kleding.",
                en:"Avoid a hot shower, sun or sunbed for 24 hours, and wear loose clothing." } }
];

/* Gentle, never-sun-sensitive items usable as a safe fallback when a
   mood + profile + sun-exposure combination leaves no direct match. */
const SAFE_FALLBACK_IDS = ["signaturefacial","manicure","pedicure","liftsummere"];

function matchTreatment(mood, gender, sunExposed){
  const genderOk = (item) => item.genders.includes(gender);
  const sunOk = (item) => !sunExposed || !item.sunSensitive;

  const currentHour = new Date().getHours();
  const timeOk = (item) => !(currentHour < 12 && item.timeOfDay === "pm");

  let pool = TREATMENTS_CATALOG.filter(item => item.moods.includes(mood) && genderOk(item) && sunOk(item) && timeOk(item));
  
  if (!pool.length){
    pool = TREATMENTS_CATALOG.filter(item => genderOk(item) && sunOk(item) && SAFE_FALLBACK_IDS.includes(item.id));
  }
  if (!pool.length){
    pool = TREATMENTS_CATALOG.filter(item => genderOk(item) && !item.sunSensitive);
  }
  return pickRandom(pool);
}

function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
