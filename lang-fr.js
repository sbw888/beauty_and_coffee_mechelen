/* ============================================================
   BEAUTY & COFFEE — French translations (FR)
   Loaded after i18n.js and data.js, before app.js.
   All French text lives in this one file. It is attached to the
   existing NL/EN data as an extra ".fr" value, so data.js and
   i18n.js keep working exactly as before.
   Register: formal "vous". To switch to informal "tu", edit the
   strings below.
   ============================================================ */
(function(){
  "use strict";
  const FR = {
 "i18n": {
  "welcome_eyebrow": "Bienvenue",
  "welcome_title": "Where Beauty Meets Coffee",
  "welcome_lede": "Répondez à quelques questions rapides. Nous vous associerons à une boisson, ainsi qu'au soin ou à l'atelier qui lui correspond parfaitement.",
  "start_button": "Découvrir mon match",
  "change_profile_link": "Ce n'est pas vous ? Modifier votre profil",
  "step_profile_eyebrow": "Étape 1 · Profil",
  "step_profile_title": "Pour qui est ce match ?",
  "step_age_eyebrow": "Étape 2 · Âge",
  "step_age_title": "Quel est votre âge ?",
  "step_sun_eyebrow": "Étape 3 · Contrôle solaire",
  "step_sun_title": "Partez-vous en vacances au soleil dans les 14 jours, ou avez-vous été exposé(e) à un soleil intense ces 14 derniers jours ?",
  "step_sun_hint": "Cela permet de garder l'épilation et les peelings profonds sans danger pour votre peau.",
  "sun_yes": "Oui, exposition au soleil",
  "sun_no": "Aucun soleil prévu",
  "sun_filtered_notice": "Nous écartons l'épilation et les peelings profonds et choisissons à la place des soins doux et hydratants.",
  "step_health_eyebrow": "Étape 4 · À savoir",
  "step_health_title": "Autre chose à nous signaler ?",
  "step_health_hint": "Entièrement facultatif — cela nous aide à choisir un match sûr pour vous.",
  "health_phlebitis": "Phlébite (inflammation des veines)",
  "health_contactLenses": "Je porte des lentilles de contact",
  "health_menstruation": "J'ai mes règles",
  "health_pregnant": "Je suis enceinte",
  "health_musclePain": "Douleurs musculaires / beaucoup de stress",
  "diet_title": "Suivez-vous actuellement un régime et/ou faites-vous régulièrement du sport ?",
  "diet_yes": "Oui",
  "diet_no": "Non",
  "lens_warning_note": "Vous portez des lentilles ? Apportez des lunettes : les lentilles doivent être retirées pendant et après le soin.",
  "step1_eyebrow": "Étape 5 · Humeur",
  "step1_title": "Quelle est votre humeur du jour ?",
  "complaint_label": "Quelque chose que vous souhaitez partager sur ce qui vous gêne ou sur ce que vous aimeriez travailler ? (facultatif)",
  "complaint_placeholder": "Ex. : mon dos est complètement bloqué, ou j'ai vraiment besoin de me détendre…",
  "step2_eyebrow": "Étape 6 · Catégorie de boisson",
  "step2_title": "Choisissez votre direction",
  "step_temp_eyebrow": "Étape 7 · Chaud ou glacé",
  "step_temp_title": "Chaud ou glacé ?",
  "temperature_tea_hint": "Le thé reste chaud : la seule option de thé froid est un Iced Matcha Latte (avec caféine et lait).",
  "step3_eyebrow": "Étape 8 · Caféine",
  "step3_title": "Avec ou sans coup de fouet ?",
  "step4_eyebrow": "Étape 9 · Personnalisation",
  "step4_title": "Faites-en votre boisson",
  "step4_hint": "Facultatif — choisissez-en autant que vous voulez.",
  "step_kidsdrink_eyebrow": "Étape 2 · Boisson",
  "step_kidsdrink_title": "Quelle boisson pour l'accompagner ?",
  "step_context_eyebrow": "Presque terminé",
  "step_context_title": "Où êtes-vous en ce moment ?",
  "context_salon": "Je suis au salon en ce moment",
  "context_salon_sub": "Prenez tout de suite une photo avec le cadre Beauty & Coffee.",
  "context_home": "Je le fais depuis chez moi",
  "context_home_sub": "Enregistrez votre match pour votre prochain rendez-vous ou partagez-le dès maintenant.",
  "step5_eyebrow": "Partagez votre moment",
  "step5_title": "Ajoutez une photo à votre moment partagé",
  "step5_hint": "Facultatif — ajoutez une photo de vous et de votre moment Beauty & Coffee. Tout reste sur votre appareil.",
  "milk_title": "Lait",
  "milk_tea_hint": "Ne concerne que le matcha : choisissez un lait et nous vous servirons un Matcha Latte.",
  "extras_title": "Édulcorants et extras",
  "back_button": "Retour",
  "continue_button": "Suivant",
  "camera_button": "📷 Ouvrir l'appareil photo",
  "upload_button": "📁 Importer une photo",
  "snap_button": "📸 Prendre la photo",
  "cancel_button": "Annuler",
  "retake_button": "🔄 Choisir une autre photo",
  "generate_button": "Générer mon match",
  "finish_photo_button": "Terminé",
  "add_photo_button": "📸 Ajouter une photo à votre moment",
  "filter_title": "Filtre",
  "skip_photo_button": "Passer cette étape",
  "photo_placeholder": "Aucune photo sélectionnée",
  "camera_starting": "Démarrage de l'appareil photo…",
  "camera_denied_text": "Appareil photo indisponible. Choisissez une photo ci-dessous.",
  "upload_instead_button": "Ou importez plutôt une photo",
  "rotate_button": "Pivoter",
  "edit_photo_button": "Recadrer",
  "editor_hint": "Faites glisser pour repositionner, utilisez le curseur pour zoomer.",
  "editor_confirm_button": "Utiliser cette photo",
  "editor_cancel_button": "Annuler",
  "home_no_photo_text": "Pas de photo nécessaire — nous enregistrons votre match pour votre prochaine visite au salon.",
  "brewing_text": "Votre match personnel est en préparation…",
  "result_title": "Votre match Beauty & Coffee",
  "result_saved_title": "Votre match, gardé pour plus tard",
  "share_button": "Partager votre match",
  "download_button": "Télécharger l'image",
  "menu_cta": "Voir la carte et les tarifs",
  "pricelist_button": "💶 Voir les tarifs",
  "pricelist_title": "Tarifs",
  "pricelist_intro": "Tarifs en vigueur depuis le 1/06/2026. Soins uniquement sur rendez-vous.",
  "pricelist_search": "Rechercher un soin…",
  "pricelist_empty": "Aucun résultat. Essayez un autre mot.",
  "pricelist_contact_title": "Prendre rendez-vous ?",
  "pricelist_wa_button": "💬 Envoyer un WhatsApp",
  "pricelist_mail_button": "📩 Envoyer un e-mail",
  "pricelist_wa_text": "Bonjour Sandra ! Je voudrais prendre rendez-vous. Mes jour et heure préférés sont :",
  "pricelist_mail_subject": "Rendez-vous Beauty & Coffee",
  "pricelist_mail_body": "Bonjour Sandra,\n\nJe voudrais prendre rendez-vous pour :\n\nMes jour et heure préférés :\n\nCordialement,",
  "pricelist_website_link": "Toutes les infos sur le site web",
  "another_match_button": "🔄 Autre match",
  "fav_add": "♡ Ajouter aux favoris",
  "fav_saved": "♥ Favori",
  "fav_added_toast": "Ajouté à vos favoris.",
  "fav_removed_toast": "Retiré de vos favoris.",
  "fav_title": "♥ Mes favoris",
  "fav_book": "Réserver via WhatsApp",
  "fav_remove": "Retirer",
  "fav_book_text": "Bonjour Sandra ! Je voudrais réserver un rendez-vous pour ✨ {treatment} avec ☕ {drink}. Mes jour et heure préférés sont :",
  "slots_title": "📅 Quand cela vous convient-il ? (facultatif)",
  "slots_hint": "Je suis actuellement disponible uniquement le week-end, y compris en soirée. Vous pouvez choisir plusieurs moments.",
  "stamp_pin_prompt": "Réservé à Beauty & Coffee : entrez le code du salon.",
  "stamp_pin_wrong": "Code incorrect. Demandez à Sandra d'ajouter un tampon.",
  "stamp_backup_tip": "Astuce : faites une capture d'écran de votre carte de fidélité comme sauvegarde.",
  "privacy_title": "🔒 Confidentialité en bref",
  "privacy_p1": "Vos photos et vos réponses au contrôle de santé restent sur votre appareil. Elles ne sont envoyées ni à Beauty & Coffee ni à un serveur.",
  "privacy_p2": "Si vous envoyez un message de réservation par e-mail ou WhatsApp, il contient uniquement le soin, la boisson et les disponibilités choisis, ainsi que ce que vous y ajoutez vous-même.",
  "privacy_p3": "Les tampons, favoris et découvertes sont conservés uniquement sur cet appareil. Si vous effacez les données de votre navigateur, ils disparaissent. Vous pouvez aussi les effacer vous-même avec le bouton ci-dessous.",
  "privacy_p4": "Le contrôle de santé sert uniquement à vous proposer un match sûr et ne constitue pas un avis médical.",
  "practical_info_title": "📍 Bon à savoir",
  "practical_info_hours": "Actuellement disponible uniquement le week-end, y compris en soirée — pas de rendez-vous en semaine et (temporairement) pas de visites à domicile, en raison de cours du soir.",
  "practical_info_parking": "Stationnement : il y a des places au début de la rue (juste avant de tourner à gauche vers les maisons) — de là, il n'y a que 2 minutes à pied jusqu'à chez moi. Vous venez en vélo cargo ? Vous pouvez l'attacher avec les vélos.",
  "restart_button": "Recommencer",
  "footer_privacy": "Vos photos restent toujours sur votre appareil — 100 % privé.",
  "footer_reset_button": "Effacer mes données locales",
  "reminder_button": "📅 Ajouter un rappel à mon agenda",
  "book_email_button": "📩 Réserver ce rendez-vous par e-mail",
  "book_email_subject": "Réservation - Beauty & Coffee",
  "book_email_body": "Bonjour Sandra,\n\nJe voudrais réserver un rendez-vous pour :\n✨ Soin : {treatment}\n☕ Boisson : {drink}\n\nMes jour et heure préférés : {slots}\n\nCordialement,",
  "book_whatsapp_button": "💬 Réserver ce rendez-vous via WhatsApp",
  "book_whatsapp_text": "Bonjour Sandra ! Je voudrais réserver un rendez-vous pour ✨ {treatment} avec ☕ {drink}. Mes jour et heure préférés sont : {slots}",
  "reminder_ics_title": "Beauty & Coffee — prochain moment",
  "reminder_weeks_label": "Dans combien de semaines souhaitez-vous un rappel ?",
  "reminder_saved_toast": "Rappel téléchargé — ouvrez le fichier pour l'ajouter à votre agenda.",
  "welcome_back_title": "Bon retour ☕ — voici ce que vous avez découvert jusqu'ici :",
  "review_prompt_text": "❤️ Nous espérons que votre moment Beauty & Coffee vous a fait du bien ! Voulez-vous le partager avec d'autres via un avis Google ?",
  "review_prompt_button": "⭐ Écrire un avis",
  "review_prompt_dismiss": "Pas maintenant",
  "stamps_label": "tampons",
  "treatments_discovered_label": "soins découverts",
  "drinks_discovered_label": "boissons découvertes",
  "stamp_card_title": "Ma carte de fidélité",
  "stamp_card_hint": "Montrez cet écran au salon pour recevoir un tampon.",
  "stamp_card_button": "Ajouter un tampon",
  "stamp_confirm_text": "Ajouter un tampon pour cette visite ? Idéalement à faire avec Beauty & Coffee au salon.",
  "stamp_card_full_toast": "🎉 Carte complète ! Parlez de votre récompense avec Beauty & Coffee.",
  "collection_title": "Mes découvertes",
  "loyalty_privacy_note": "Ces données sont conservées uniquement sur cet appareil.",
  "reset_confirm_text": "Voulez-vous vraiment effacer tous vos tampons, favoris et découvertes locaux ? Cette action est irréversible.",
  "reset_done_toast": "Vos données locales ont été effacées.",
  "drink_label": "Boisson",
  "treatment_label": "Soin / atelier",
  "with_label": "Avec",
  "block_benefits": "Les bienfaits",
  "block_funfact": "Le saviez-vous ?",
  "block_aftercare": "Consignes précises après le soin",
  "block_homecare": "Soins à domicile recommandés",
  "block_caution": "À noter",
  "block_price": "Tarif au salon",
  "homecare_generic_tip": "Cette catégorie est actuellement épuisée dans notre boutique — n'hésitez pas à demander une alternative adaptée au salon.",
  "homecare_soap_tip_label": "🧼 Savon assorti :",
  "overlay_title": "Mon match Beauty & Coffee ☕✨",
  "overlay_drink_prefix": "Boisson : ",
  "overlay_treatment_prefix": "Soin : ",
  "overlay_tagline": "Where Beauty Meets Coffee",
  "share_text": "Découvrez mon match Beauty & Coffee !",
  "toast_downloaded": "Image téléchargée",
  "toast_share_unsupported": "Le partage n'est pas pris en charge sur cet appareil — l'image a été téléchargée à la place.",
  "toast_camera_denied": "Appareil photo indisponible. Essayez plutôt d'importer une photo.",
  "toast_saved_home": "Match enregistré — à bientôt au salon !",
  "moods": {
   "relax": {
    "title": "Détente et moment pour soi",
    "sub": "Calme, chaleur, vous-même."
   },
   "energetic": {
    "title": "Énergie et mine fraîche",
    "sub": "Net, frais, prêt pour la journée."
   },
   "focus": {
    "title": "Concentration et soin profond",
    "sub": "Du calme pour la peau, du temps pour vous."
   },
   "luxury": {
    "title": "Chouchoutage de luxe et éclat",
    "sub": "Le moment de bien-être complet."
   },
   "group": {
    "title": "En groupe et pédagogique (ateliers)",
    "sub": "Apprendre, déguster, partager."
   }
  },
  "categories": {
   "coffee": {
    "title": "Café",
    "sub": "Origines et mélanges"
   },
   "tea": {
    "title": "Thé et infusions",
    "sub": "En vrac ou en sachet"
   },
   "matcha": {
    "title": "Matcha",
    "sub": "Nature, latte ou glacé"
   }
  },
  "temperature": {
   "hot": {
    "title": "Chaud",
    "sub": "Préparé de façon classique"
   },
   "iced": {
    "title": "Glacé",
    "sub": "Frais et rafraîchissant"
   }
  },
  "caffeine": {
   "caff": {
    "title": "Avec caféine",
    "sub": "À pleine puissance"
   },
   "decaf": {
    "title": "Décaféiné / sans caféine",
    "sub": "En douceur"
   }
  },
  "profiles": {
   "kind": {
    "title": "Enfant (jusqu'à 15 ans)",
    "sub": "Manucure enfant + boisson enfant"
   },
   "man": {
    "title": "Homme (16+)",
    "sub": "Soins du visage, des mains, des pieds et épilation"
   },
   "vrouw": {
    "title": "Femme (16+)",
    "sub": "Toute la carte Beauty & Coffee"
   }
  },
  "age": {
   "16-29": "16 – 29 ans",
   "30-44": "30 – 44 ans",
   "45plus": "45 ans et plus"
  },
  "milk": {
   "none": "Sans lait",
   "whole": "Lait entier",
   "oat": "Lait d'avoine",
   "extra": "Lait supplémentaire"
  },
  "extras": {
   "honey": "Miel d'acacia",
   "sugar": "Sucre",
   "cream": "Chantilly",
   "icecream": "Boule de glace à la vanille",
   "biscoff": "Miettes de Biscoff",
   "pumpkin": "Sirop d'épices à la citrouille"
  },
  "kidsdrinks": {
   "water": "Eau plate",
   "chocolate": "Chocolat chaud"
  },
  "filters": {
   "none": "Aucun",
   "glow": "Éclat",
   "warm": "Chaud",
   "bw": "Noir et blanc",
   "vintage": "Vintage",
   "cartoon": "Dessin animé"
  }
 },
 "treatments": {
  "hotstone": {
   "benefits": "Un massage du corps profondément relaxant avec des pierres chaudes qui glissent sur la peau, combiné à des techniques de massage manuelles — un moment pour vous relâcher complètement.",
   "funfact": "Les pierres sont généralement en basalte, une roche volcanique qui garde longtemps la chaleur — c'est pourquoi le massage reste agréablement chaud.",
   "aftercare": "Buvez davantage d'eau pendant les premières 24 heures, évitez une douche chaude ou le sauna juste après, et prenez le temps de vous reposer."
  },
  "cupping": {
   "benefits": "Un massage intensif où des ventouses sont utilisées localement en combinaison avec des techniques de massage manuelles, par exemple sur le dos, les épaules, les bras ou les jambes.",
   "funfact": "Les célèbres « marques de ventouses » sont dues à l'aspiration que les ventouses exercent sur la peau — plus la marque est foncée, plus la réaction locale a été intense. C'est pourquoi nous traitons toujours des zones ciblées, jamais le corps entier en une seule fois.",
   "caution": "Les ventouses ne conviennent pas en cas de fièvre, de maladie de peau contagieuse, d'ulcère à l'estomac ou à l'intestin, de maladie cardiaque ou d'insuffisance pondérale — prévenez-nous à l'avance si l'un de ces cas vous concerne. L'exposition au soleil est possible après un massage aux ventouses localisé.",
   "aftercare": "Certaines personnes se sentent assez fatiguées et un peu sensibles après les ventouses — comme après un entraînement intense. Il vaut mieux ne rien prévoir ensuite : rentrez directement chez vous, évitez le travail et les courses, et accordez-vous du repos. N'exposez pas non plus tout de suite la peau traitée à une douche ou un bain chaud ou froid. Buvez suffisamment d'eau, utilisez éventuellement de l'huile d'arnica contre les bleus, et sachez que les marques peuvent rester visibles environ 7 jours — bon à savoir avant un moment en maillot de bain, un mariage ou une séance photo. Pour un entretien durable, une séance toutes les 3 à 6 semaines est recommandée."
  },
  "cuppingpeeling": {
   "benefits": "Un soin complet pour une zone du corps choisie : un peeling corporel et un Thermo Body Pack, suivis d'un massage intensif aux ventouses. Peel → Wrap → Cup → Coffee.",
   "funfact": "Comme les ventouses constituent un soin intensif, le corps entier n'est pas traité en une seule séance. Une autre zone du corps peut, si cela convient, être traitée lors d'un rendez-vous ultérieur — le choix de la zone et du parcours est discuté lors de l'entretien préalable.",
   "caution": "Les ventouses ne conviennent pas en cas de fièvre, de maladie de peau contagieuse, d'ulcère à l'estomac ou à l'intestin, de maladie cardiaque ou d'insuffisance pondérale — prévenez-nous à l'avance si l'un de ces cas vous concerne. Vous prévoyez une exposition au soleil après ce soin ? Nous vous déconseillons alors le peeling en raison de la sensibilité accrue de la peau.",
   "aftercare": "Certaines personnes se sentent assez fatiguées et un peu sensibles après les ventouses — comme après un entraînement intense. Il vaut mieux ne rien prévoir ensuite : rentrez directement chez vous, évitez le travail et les courses, et accordez-vous du repos. N'exposez pas non plus tout de suite la peau traitée à une douche ou un bain chaud ou froid. Évitez en outre, pendant les 24 à 48 premières heures, le soleil direct, les bancs solaires et les saunas sur la zone traitée — utilisez ensuite un SPF élevé. Buvez suffisamment d'eau, utilisez éventuellement de l'huile d'arnica contre les bleus, et sachez que les marques peuvent rester visibles environ 7 jours — bon à savoir avant un moment en maillot de bain, un mariage ou une séance photo."
  },
  "swedish": {
   "benefits": "Un massage complet et relaxant de tout le corps, avec de l'attention pour chaque zone — l'intensité s'adapte à votre préférence.",
   "funfact": "Le massage suédois combine cinq mouvements classiques et constitue la base de la plupart des techniques de massage occidentales.",
   "aftercare": "Buvez beaucoup d'eau pendant les premières 24 heures, évitez les repas copieux juste après le massage et prévoyez des moments de repos."
  },
  "swedishbackneck": {
   "benefits": "Un massage relaxant avec une attention particulière pour le dos, la nuque et les épaules — idéal dès que vous avez besoin d'un moment de calme.",
   "funfact": "Ce massage plus court se concentre volontairement sur les zones où s'accumulent le plus de tensions — idéal quand un massage complet n'est pas (encore) envisageable, par exemple pendant la grossesse.",
   "aftercare": "Buvez suffisamment d'eau après le massage et prenez le temps de bouger doucement ensuite."
  },
  "swedishlegs": {
   "benefits": "Un massage relaxant pour des jambes et des pieds fatigués ou lourds.",
   "funfact": "Rester longtemps debout ou assis favorise l'accumulation de liquide dans le bas des jambes — un massage ciblé aide à relancer la circulation.",
   "aftercare": "Si possible, gardez les jambes légèrement surélevées un moment après le massage et buvez suffisamment d'eau."
  },
  "backwrap": {
   "benefits": "Un enveloppement du dos soignant avec un peeling rafraîchissant, un enveloppement aux algues revitalisant et un massage.",
   "funfact": "Un enveloppement corporel associe la chaleur à des actifs, ce qui aide la peau à mieux les absorber.",
   "aftercare": "Vous pouvez vous doucher normalement une fois de retour chez vous — buvez simplement assez d'eau et hydratez la peau chaque jour."
  },
  "manipedispa": {
   "benefits": "Des mains et des pieds soignés en une seule séance, avec une touche SPA extra relaxante.",
   "funfact": "Des manucures et pédicures régulières améliorent non seulement l'aspect, mais aussi la santé des ongles à long terme.",
   "aftercare": "Vous choisissez un vernis gel ou du gel de construction (BIAB) ? Vos ongles sont secs et à l'épreuve des traces immédiatement ! Pour un vernis classique, comptez 2 heures (mains) ou 4 heures (pieds dans des chaussures fermées) de séchage complet. Appliquez chaque jour de l'huile pour cuticules pour un résultat optimal."
  },
  "browlift": {
   "benefits": "Un regard ouvert et éveillé sans coiffage quotidien — les poils des sourcils restent en place pendant des semaines.",
   "funfact": "Un brow lift utilise la même technique qu'un lash lift, mais appliquée aux sourcils.",
   "aftercare": "Gardez les sourcils secs pendant 24 heures et évitez les démaquillants à base d'huile sur la zone des sourcils pendant les 48 premières heures."
  },
  "hennabrows": {
   "benefits": "Des sourcils à l'aspect plus fourni, avec une intensité de couleur naturelle qui dure des semaines.",
   "funfact": "Le henné colore non seulement les poils, mais aussi la peau en dessous, pour un effet encore plus dense.",
   "aftercare": "Gardez les sourcils secs pendant 24 heures et évitez les gommages ou peelings autour des sourcils pendant 3 jours."
  },
  "lashlift": {
   "benefits": "Des cils recourbés et plus foncés sans mascara — un gain de temps dans votre routine matinale.",
   "funfact": "L'effet d'un lash lift dure en moyenne un cycle complet de pousse des cils, soit environ 6 à 8 semaines.",
   "aftercare": "Gardez les cils complètement secs pendant les 24 premières heures et évitez le démaquillant à base d'huile."
  },
  "glammakeup": {
   "benefits": "Un look prêt pour les photos et la fête, adapté à votre occasion et à votre type de peau.",
   "funfact": "Le maquillage glamour professionnel utilise des techniques de superposition pour que le look tienne toute la soirée.",
   "aftercare": "Démaquillez-vous soigneusement le soir avec un nettoyant doux et hydratez la peau avant de dormir."
  },
  "hydrapeel": {
   "benefits": "Un peeling soignant pour un teint terne ou fatigué et un teint irrégulier.",
   "funfact": "Votre peau a une véritable fonction de barrière : elle limite au minimum la perte d'humidité et empêche les substances nocives de pénétrer.",
   "aftercare": "Utilisez un SPF 50 chaque jour pendant 7 jours, évitez l'exposition au soleil pendant 14 jours et n'utilisez pas de gommage pendant 48 heures."
  },
  "signaturefacial": {
   "benefits": "Un soin du visage complet, avec attention pour le nettoyage, l'état de la peau, les soins et la détente.",
   "funfact": "Saviez-vous que votre peau se renouvelle en permanence ? Environ toutes les 4 semaines, vous avez un épiderme entièrement neuf.",
   "aftercare": "Utilisez un SPF 50 chaque jour pendant 7 jours et buvez suffisamment d'eau pour soutenir l'effet purifiant."
  },
  "fillme": {
   "benefits": "Apporte l'acide hyaluronique en profondeur dans la peau pour un effet repulpant et rajeunissant.",
   "funfact": "Le soin utilise des micro-aiguilles plus fines qu'un cheveu pour administrer le sérum efficacement.",
   "aftercare": "Évitez de vous maquiller pendant les 24 premières heures et restez à l'écart du soleil et du sauna pendant 48 heures. L'application quotidienne d'une crème solaire SPF 50 est essentielle pour bien protéger votre peau tout juste rafraîchie."
  },
  "fruitacid": {
   "benefits": "Un peeling professionnel aux acides de fruits, visant un teint plus frais et plus uniforme.",
   "funfact": "L'épiderme se compose de pas moins de 4 à 5 fines sous-couches — les zones très sollicitées, comme la paume des mains, ont même une couche supplémentaire.",
   "aftercare": "Utilisez un SPF 50 chaque jour pendant 7 jours, évitez l'exposition au soleil pendant 14 jours et n'utilisez pas de produits actifs pendant 48 heures."
  },
  "liftsummere": {
   "benefits": "Un soin complet pour une peau présentant des signes visibles de vieillissement et une perte de fermeté.",
   "funfact": "Sous votre peau se trouve l'hypoderme, qui agit comme un véritable « amortisseur » — cette couche de graisse absorbe les chocs extérieurs et donne de la structure.",
   "aftercare": "Utilisez un SPF chaque jour, buvez suffisamment d'eau et évitez un maquillage épais pendant les 24 premières heures."
  },
  "detoxback": {
   "benefits": "Un soin complet du dos avec nettoyage en profondeur, soin des imperfections, un enveloppement nourrissant et un massage relaxant.",
   "funfact": "Le dos est l'une des zones les plus difficiles à soigner soi-même — une raison de plus pour un soin en salon.",
   "aftercare": "Portez de préférence des vêtements amples pendant les 24 premières heures. Vous pouvez vous doucher normalement une fois de retour chez vous."
  },
  "antiagefacial": {
   "benefits": "Un soin botanique complet du visage pour une peau présentant des signes visibles de vieillissement.",
   "funfact": "La couche basale contient aussi des mélanocytes — les cellules pigmentaires qui déterminent la couleur de votre peau et jouent un rôle dans son évolution au fil du temps.",
   "aftercare": "Utilisez un SPF 50 chaque jour pendant 7 jours et démaquillez-vous soigneusement le soir."
  },
  "harmonizingbody": {
   "benefits": "Un soin du corps soignant avec peeling et massage pour une peau rugueuse, sèche ou irrégulière — également agréable comme soin supplémentaire après l'épilation.",
   "funfact": "Ce soin combine exfoliation, massage et masque en une seule séance continue.",
   "aftercare": "Buvez beaucoup d'eau pendant les premières 24 heures et hydratez la peau chaque jour avec une lotion pour le corps."
  },
  "fullbodywrap": {
   "benefits": "Un rituel complet pour le corps avec un peeling rafraîchissant, un enveloppement aux algues revitalisant et un massage — un moment pour ralentir complètement.",
   "funfact": "Un enveloppement corps entier est souvent combiné à de la chaleur pour aider les actifs à pénétrer plus profondément.",
   "aftercare": "Vous pouvez vous doucher normalement une fois de retour chez vous — buvez simplement davantage d'eau le premier jour."
  },
  "makeupworkshop": {
   "benefits": "Un atelier privé amusant où vous apprenez à vous maquiller joliment et pratiquement — avec un copieux assortiment de douceurs fraîches Beauty & Coffee et, pour finir, un affogato à la glace vanille.",
   "funfact": "Les participants repartent avec une liste de produits personnelle adaptée à leur type de peau.",
   "aftercare": "Aucun soin particulier nécessaire — nettoyez la peau comme d'habitude en fin de journée."
  },
  "facialworkshop": {
   "benefits": "Découvrez une routine de soin simple et apprenez à finaliser ensuite votre look avec une jolie retouche maquillage.",
   "funfact": "Vous repartez avec l'ordre exact des produits qui convient le mieux à votre peau — ainsi qu'une pochette cadeau remplie de miniatures pour essayer tout de suite votre nouvelle routine à la maison.",
   "aftercare": "Utilisez un SPF chaque jour après un soin du visage et hydratez bien votre peau le soir."
  },
  "tastingbasic": {
   "benefits": "Apprenez les bases de la dégustation de café : reconnaître l'arôme, l'acidité et l'arrière-goût.",
   "funfact": "Notre Peru Single Origin et notre House Blend figurent tous deux dans cette dégustation.",
   "aftercare": "Aucun soin nécessaire — n'hésitez pas à savourer une autre tasse ensuite."
  },
  "tastingadvanced": {
   "benefits": "Plongez plus profondément dans la comparaison des origines et les méthodes d'extraction, comme un vrai barista.",
   "funfact": "Vous goûterez les mêmes grains préparés en V60, en French Press et à la cafetière moka pour sentir la différence.",
   "aftercare": "Aucun soin nécessaire — notez votre méthode d'extraction préférée pour chez vous."
  },
  "baristaworkshop": {
   "benefits": "Apprenez à préparer de délicieux espressos, boissons à base d'espresso et cafés lents à la maison, avec notamment un V60, une French Press, un Phin et une cafetière moka.",
   "funfact": "Un latte art parfait commence par un lait vapeur à la texture de microfoam exacte.",
   "aftercare": "Aucun soin nécessaire — n'hésitez pas à vous entraîner chez vous sur votre propre machine à espresso."
  },
  "manicure": {
   "benefits": "Coupe, limage, soin des cuticules, polissage, soin du pourtour des ongles et massage des mains.",
   "funfact": "Un soin régulier des cuticules prévient à terme les envies et les cuticules sèches.",
   "aftercare": "Vous choisissez un vernis gel ou du gel de construction (BIAB) ? Vos ongles sont secs et à l'épreuve des traces immédiatement ! Pour un vernis classique, comptez 2 heures (mains) de séchage complet. Appliquez chaque jour de l'huile pour cuticules pour un résultat optimal."
  },
  "pedicureexpress": {
   "benefits": "Une pédicure de base pour des ongles et un pourtour d'ongles soignés — coupe, limage, nettoyage du pourtour des ongles et crème pour les pieds.",
   "funfact": "Cette version omet volontairement l'élimination des callosités et le massage — idéale quand vous voulez des pieds présentables rapidement, sans soin complet.",
   "aftercare": "Hydratez régulièrement vos pieds et vos cuticules, surtout que cette version ne comprend pas le traitement des callosités."
  },
  "pedicure": {
   "benefits": "Une pédicure complète avec attention pour les ongles, le pourtour des ongles, les cuticules, les callosités et la détente.",
   "funfact": "Éliminer les callosités n'est pas qu'esthétique — cela prévient aussi les points de pression en marchant.",
   "aftercare": "Vous choisissez un vernis gel ou du gel de construction (BIAB) ? Vos ongles sont secs et à l'épreuve des traces immédiatement ! Pour un vernis classique, comptez 4 heures (pieds dans des chaussures fermées) de séchage complet. Appliquez chaque jour de l'huile pour cuticules pour un résultat optimal."
  },
  "slimmassage": {
   "benefits": "Un massage ferme du corps qui travaille d'abord autour des zones ganglionnaires puis applique des techniques de massage plus profondes sur les zones du corps souhaitées — axé sur le soin de la peau et les contours du corps dans le cadre du protocole de massage enseigné.",
   "funfact": "Cette technique de massage combine des prises fermes et des directions de mouvement spécifiques pour un effet raffermissant.",
   "aftercare": "Buvez davantage d'eau pendant les premières 24 heures pour favoriser l'élimination des déchets."
  },
  "oksel": {
   "benefits": "Des semaines d'aisselles douces et lisses sans rasage quotidien.",
   "funfact": "La cire arrache le poil à la racine : la repousse est donc plus lente et plus douce qu'avec le rasage.",
   "aftercare": "Évitez l'exposition directe au soleil, les bancs solaires, le déodorant, les vêtements serrés, les douches chaudes et les saunas pendant les 24 à 48 premières heures. Appliquez toujours une crème solaire à haute protection (SPF 50) sur les zones exposées pour prévenir les rougeurs et l'hyperpigmentation."
  },
  "been": {
   "benefits": "Des semaines de jambes lisses, avec une repousse plus fine et plus lente qu'avec le rasage.",
   "funfact": "Après plusieurs séances d'épilation à la cire, les poils repoussent souvent plus fins et plus clairsemés.",
   "aftercare": "Évitez l'exposition directe au soleil, les bancs solaires, les vêtements serrés, les douches chaudes et les saunas pendant les 24 à 48 premières heures. Appliquez toujours une crème solaire à haute protection (SPF 50) sur les zones exposées pour prévenir les rougeurs et l'hyperpigmentation."
  },
  "rug": {
   "benefits": "Un dos lisse et soigné, sans la corvée de raser soi-même une zone difficile d'accès.",
   "funfact": "Le dos est l'une des zones d'épilation à la cire les plus demandées par les hommes avant l'été.",
   "aftercare": "Évitez l'exposition directe au soleil, les bancs solaires, les vêtements serrés, les douches chaudes et les saunas pendant les 24 à 48 premières heures. Appliquez toujours une crème solaire à haute protection (SPF 50) sur les zones exposées pour prévenir les rougeurs et l'hyperpigmentation."
  },
  "buik": {
   "benefits": "Un ventre lisse aux résultats durables et à la repousse plus fine.",
   "funfact": "La peau du ventre est plus sensible, c'est pourquoi nous utilisons ici une cire extra douce.",
   "aftercare": "Évitez l'exposition directe au soleil, les bancs solaires, les vêtements serrés, les douches chaudes et les saunas pendant les 24 à 48 premières heures. Appliquez toujours une crème solaire à haute protection (SPF 50) sur les zones exposées pour prévenir les rougeurs et l'hyperpigmentation."
  },
  "borst": {
   "benefits": "Un torse soigné et lisse, avec des résultats qui durent des semaines.",
   "funfact": "Comme pour le dos, les poils repoussent souvent plus fins après des soins répétés.",
   "aftercare": "Évitez l'exposition directe au soleil, les bancs solaires, les vêtements serrés, les douches chaudes et les saunas pendant les 24 à 48 premières heures. Appliquez toujours une crème solaire à haute protection (SPF 50) sur les zones exposées pour prévenir les rougeurs et l'hyperpigmentation."
  }
 },
 "kid": {
  "benefits": "Un soin sûr et adapté aux enfants pour les petites mains, accompagné d'une boisson.",
  "funfact": "Nous utilisons un vernis peel-off spécialement conçu pour les enfants — après quelques jours, ils peuvent retirer eux-mêmes la couche d'un seul morceau.",
  "aftercare": "Pas besoin d'acétone ni de dissolvant — laissez d'abord bien sécher le vernis, ensuite il se retire simplement à la main."
 },
 "sunTip": "<br><br>⚠️ <strong>Conseil solaire :</strong> évitez le soleil direct ou le solarium pendant 24 heures après l'épilation, puis utilisez un SPF élevé pour prévenir les rougeurs et les taches pigmentaires.",
 "products": {
  "facial": {
   "label": "Soins du visage",
   "usage": {
    "cleanser": "Matin et soir, répartissez sur le visage, le cou et le décolleté. Massez et rincez à l'eau tiède.",
    "tonic": "Après le nettoyage, appliquez sur un disque de coton et passez sur le visage, le cou et le décolleté. Ne pas rincer.",
    "facerub": "1 à 2 fois par semaine, massez sur une peau propre et humide (en évitant le contour des yeux) puis rincez.",
    "serum": "Matin et/ou soir, appliquez quelques gouttes sous votre crème de jour ou de nuit.",
    "hydracream": "Matin et/ou soir, appliquez sur le visage, le cou et le décolleté après le sérum.",
    "mask": "1 à 2 fois par semaine, appliquez généreusement, laissez poser 10 à 15 minutes puis rincez.",
    "fillme": "Une fois toutes les 2 semaines. Remplissez l'applicateur à micro-aiguilles avec l'ampoule d'acide hyaluronique et tamponnez délicatement sur le visage.",
    "hyalift": "Chaque jour, matin et/ou soir, appliquez quelques gouttes avant votre crème de jour ou de nuit."
   }
  },
  "eye": {
   "label": "Soins des yeux",
   "usage": {
    "eyegel": "Matin et soir, tapotez délicatement une petite quantité autour du contour des yeux avec l'annulaire."
   }
  },
  "body": {
   "label": "Soins du corps",
   "usage": {
    "bodymoist": "Chaque jour après la douche, appliquez sur le corps et massez.",
    "bust": "Chaque jour, appliquez sur la poitrine et le décolleté avec des mouvements circulaires vers le haut."
   }
  },
  "hand": {
   "label": "Mains et ongles",
   "usage": {
    "handcream": "Plusieurs fois par jour, surtout après le lavage, massez — également sur les cuticules.",
    "gerlasan": "Appliquez chaque jour et après chaque contact avec l'eau, en faisant bien pénétrer."
   }
  },
  "foot": {
   "label": "Soins des pieds",
   "usage": {
    "gehwol": "1 à 2 fois par jour, massez les pieds et entre les orteils, idéalement après un bain de pieds."
   }
  },
  "sun": {
   "label": "Protection solaire",
   "usage": {
    "spf50": "Appliquez généreusement sur le visage et la peau exposée 20 minutes avant l'exposition au soleil. Renouvelez régulièrement."
   }
  },
  "soap": {
   "label": "Savons artisanaux",
   "usage": {
    "geitenmelk": "Savon nourrissant pour peau sèche — à utiliser chaque jour sous la douche ou pour la toilette.",
    "aloevera": "Savon apaisant, idéal après l'épilation ou pour les peaux sensibles.",
    "syndet": "Variante sans savon et sans parfum, spécialement formulée pour les peaux sensibles.",
    "komkommer": "Rafraîchissant et apaisant, parfait pour la peau après l'exposition au soleil ou l'épilation.",
    "amandelmelk": "Savon nourrissant qui adoucit la peau sèche — convient à un usage quotidien.",
    "paleale": "Savon nettoyant artisanal aux antioxydants issus des ingrédients de brassage de la bière.",
    "koffie": "Savon légèrement exfoliant — un accord parfait avec votre moment Beauty & Coffee.",
    "matcha": "Gommage exfoliant qui illumine la peau — à utiliser 1 à 2 fois par semaine."
   }
  }
 },
 "kidsDrinks": {
  "water": "Eau plate",
  "chocolate": "Chocolat chaud"
 },
 "slots": {
  "za-vm": "Samedi matin",
  "za-nm": "Samedi après-midi",
  "za-av": "Samedi soir",
  "zo-vm": "Dimanche matin",
  "zo-nm": "Dimanche après-midi",
  "zo-av": "Dimanche soir"
 },
 "actions": {
  "grabbelton": {
   "title": "Tonneau à surprises",
   "text": "Vous dépensez 75 € ou plus lors du même rendez-vous ? Vous pouvez alors piocher une fois dans le tonneau à surprises."
  }
 },
 "price": {
  "facial": {
   "title": "Soins du visage",
   "items": [
    [
     "Express gelaatsverzorging",
     "Soin du visage express",
     "Nettoyage, nettoyage en profondeur, masque crème & crème de jour.",
     null
    ],
    [
     "Acnécontrole – Équilibre Pureté Citron Vert",
     "Contrôle acné – Équilibre Pureté Citron Vert",
     "Soin purifiant, avec analyse de la peau lors du premier soin.",
     null
    ],
    [
     "Signature gelaatsverzorging",
     "Soin du visage Signature",
     "Soin complet avec massage ; convient aussi aux peaux sensibles.",
     null
    ],
    [
     "Fill Me Micro Infusie Treatment",
     "Fill Me Micro Infusion Treatment",
     "Nettoyant, tonique, Fill Me Serum, masque, masque LED & protection UV.",
     null
    ],
    [
     "Fruitzurenpeeling 4/26 Dr. Renaud",
     "Peeling aux acides de fruits 4/26 Dr. Renaud",
     "Pour un teint plus uniforme. Uniquement de septembre à mars.",
     null
    ],
    [
     "Huidvernieuwende Hydra Peeling pH",
     "Hydra Peeling pH régénérant",
     "Pour un teint éclatant et plus uniforme.",
     null
    ],
    [
     "Lift Summum",
     "Lift Summum",
     "Pour une peau à l'aspect plus ferme, avec massage et masque visage.",
     null
    ],
    [
     "Botanische Anti-Age",
     "Anti-âge botanique",
     "Soin anti-âge avec ampoule, massage et masque.",
     null
    ]
   ]
  },
  "facial-extra": {
   "title": "Suppléments pour votre soin du visage",
   "items": [
    [
     "Handpeeling & -massage",
     "Gommage & massage des mains",
     null,
     null
    ],
    [
     "LED-therapie",
     "Thérapie LED",
     null,
     null
    ],
    [
     "Ontharing wenkbrauwen",
     "Épilation des sourcils",
     null,
     null
    ],
    [
     "Ampul / serum",
     "Ampoule / sérum",
     null,
     null
    ],
    [
     "Peel-off masker",
     "Masque peel-off",
     null,
     null
    ],
    [
     "Collageenvliesmasker",
     "Masque en tissu au collagène",
     null,
     null
    ],
    [
     "Anti-aging paraffinemasker",
     "Masque à la paraffine anti-âge",
     null,
     null
    ],
    [
     "Hot Stone gelaatsmassage",
     "Massage du visage aux pierres chaudes",
     null,
     null
    ],
    [
     "Touch-up dagmake-up na gelaatsverzorging",
     "Retouche maquillage de jour après soin du visage",
     null,
     null
    ]
   ]
  },
  "makeup": {
   "title": "Maquillage (minéral / HD)",
   "items": [
    [
     "Touch-up dagmake-up na gelaatsverzorging",
     "Retouche maquillage de jour après soin du visage",
     null,
     null
    ],
    [
     "Avondmake-up / Party / Glam",
     "Maquillage de soirée / Party / Glam",
     null,
     "Faux cils ? Apportez vos propres cils et colle à cils ; je les pose."
    ],
    [
     "Bridal proefmake-up",
     "Essai maquillage de mariée",
     null,
     null
    ],
    [
     "Bridal proefmake-up & bruidsmake-up",
     "Essai & maquillage de mariée",
     null,
     null
    ],
    [
     "Huwelijksdag make-up, per persoon",
     "Maquillage du jour J, par personne",
     null,
     null
    ]
   ]
  },
  "brows": {
   "title": "Sourcils",
   "items": [
    [
     "Brow Tinting (kleuren haar)",
     "Teinture des sourcils (coloration des poils)",
     null,
     null
    ],
    [
     "Shaping (mappen en ontharen)",
     "Shaping (cartographie & épilation)",
     null,
     null
    ],
    [
     "Henna Brows",
     "Henna Brows",
     "Cartographie, mise en forme, coloration des poils et de la peau ; jusqu'à 6 semaines.",
     null
    ],
    [
     "Brow Lift",
     "Brow Lift",
     "Cartographie, mise en forme, laminage, coloration des poils et de la peau ; jusqu'à 6 semaines.",
     null
    ]
   ]
  },
  "lashes": {
   "title": "Cils",
   "items": [
    [
     "Lash Tinting (kleuren wimpers)",
     "Teinture des cils",
     null,
     null
    ],
    [
     "Lash Lift met kleuring",
     "Lash Lift avec teinture",
     null,
     "Jusqu'à 6 semaines."
    ]
   ]
  },
  "manicure": {
   "title": "Manucure",
   "items": [
    [
     "Express manicure",
     "Manucure express",
     "Coupe, limage, cuticules & crème mains nourrissante.",
     null
    ],
    [
     "Uitgebreide manicure",
     "Manucure complète",
     "Coupe, limage, cuticules, polissage, callosités & massage.",
     null
    ],
    [
     "Kindermanicure",
     "Manucure enfant",
     "Limage et vernis pour enfants ou peel-off.",
     null
    ],
    [
     "Supplement SPA manicure",
     "Supplément : manucure SPA",
     "Peeling, masque, enveloppement, massage & soin.",
     null
    ],
    [
     "Supplement verwijderen nagellak / gellak / BIAB",
     "Supplément : dépose vernis / gel / BIAB",
     null,
     null
    ],
    [
     "Supplement nagellak",
     "Supplément : vernis",
     null,
     null
    ],
    [
     "Supplement gellak (soak-off)",
     "Supplément : vernis gel (dépose)",
     null,
     null
    ],
    [
     "Supplement BIAB (soak-off)",
     "Supplément : BIAB (dépose)",
     null,
     null
    ]
   ]
  },
  "pedicure": {
   "title": "Pédicure",
   "items": [
    [
     "Express pedicure",
     "Pédicure express",
     "Coupe, limage, nettoyage du pourtour des ongles & crème pieds (sans élimination des callosités, sans massage).",
     null
    ],
    [
     "Uitgebreide pedicure",
     "Pédicure complète",
     "Coupe, limage, nettoyage du pourtour des ongles, cuticules, élimination standard des callosités & court massage des pieds.",
     "+ €10 par tranche de 15′ supplémentaire en cas de traitement important des callosités."
    ],
    [
     "Supplement ingegroeide nagel / copoline, per nagel",
     "Supplément : ongle incarné / copoline, par ongle",
     "Pose d'un bandage copoline dans le pourtour de l'ongle.",
     null
    ],
    [
     "Supplement drukvrij leggen / foambescherming, per teen",
     "Supplément : protection anti-pression / mousse, par orteil",
     "Un petit tube de protection en mousse pour soulager la friction et la pression de la chaussure.",
     null
    ],
    [
     "Supplement SPA pedicure",
     "Supplément : pédicure SPA",
     "Peeling, masque, enveloppement, massage prolongé.",
     null
    ],
    [
     "Supplement nagellak",
     "Supplément : vernis",
     null,
     null
    ],
    [
     "Supplement gellak (soak-off)",
     "Supplément : vernis gel (dépose)",
     null,
     null
    ],
    [
     "Supplement verwijderen nagellak / gellak",
     "Supplément : dépose vernis / gel",
     null,
     null
    ]
   ]
  },
  "waxing": {
   "title": "Épilation (cire / fil / pince)",
   "items": [
    [
     "Kin",
     "Menton",
     null,
     null
    ],
    [
     "Bovenlip",
     "Lèvre supérieure",
     null,
     null
    ],
    [
     "Wenkbrauwen (zonder mapping / opschonen)",
     "Sourcils (sans cartographie / nettoyage)",
     null,
     null
    ],
    [
     "Oksels",
     "Aisselles",
     null,
     null
    ],
    [
     "Schouders",
     "Épaules",
     null,
     null
    ],
    [
     "Buik",
     "Ventre",
     null,
     null
    ],
    [
     "Borst",
     "Torse",
     null,
     null
    ],
    [
     "Onderbenen",
     "Bas des jambes",
     null,
     null
    ],
    [
     "Onderbenen & knieën",
     "Bas des jambes & genoux",
     null,
     null
    ],
    [
     "Rug",
     "Dos",
     null,
     null
    ],
    [
     "Borst & buik",
     "Torse & ventre",
     null,
     null
    ],
    [
     "Volledige benen",
     "Jambes complètes",
     null,
     null
    ]
   ]
  },
  "body": {
   "title": "Soins du corps & massages",
   "items": [
    [
     "Cuppingmassage",
     "Massage aux ventouses (cupping)",
     "Massage ciblé aux ventouses sur des zones spécifiques.",
     null
    ],
    [
     "Cupping Body Renewal",
     "Cupping Body Renewal",
     "Peeling, Thermo Body Pack et ventouses pour une zone du corps par séance.",
     null
    ],
    [
     "Zweedse full body massage",
     "Massage suédois corps entier",
     "Relaxant et assouplissant pour les muscles.",
     null
    ],
    [
     "Zweedse rug-nek-schouder massage",
     "Massage suédois dos-nuque-épaules",
     "En cas de stress et de muscles tendus.",
     null
    ],
    [
     "Zweedse benen-voeten massage",
     "Massage suédois jambes-pieds",
     "Pour des jambes fatiguées.",
     null
    ],
    [
     "Hot Stone Massage",
     "Massage aux pierres chaudes (Hot Stone)",
     "Relaxation profonde avec des pierres chaudes.",
     null
    ],
    [
     "Afslankingsmassage",
     "Massage minceur",
     "Massage stimulant, complémentaire à une alimentation saine et à l'activité physique (hommes bienvenus aussi).",
     null
    ],
    [
     "Zuiverende rugbehandeling",
     "Soin purifiant du dos",
     "Nettoyage en profondeur, enveloppement et massage anti-stress.",
     null
    ],
    [
     "Harmoniserende verzorging rug",
     "Soin harmonisant du dos",
     "Peeling et massage pour une peau douce et lisse.",
     null
    ],
    [
     "Harmoniserende verzorging full body",
     "Soin harmonisant corps entier",
     "Peeling et massage pour une peau douce et lisse.",
     null
    ],
    [
     "Energetische rugpakking",
     "Enveloppement énergisant du dos",
     "Peeling rafraîchissant, enveloppement aux algues et massage.",
     null
    ],
    [
     "Energetische lichaamspakking full body",
     "Enveloppement énergisant corps entier",
     "Peeling rafraîchissant, enveloppement aux algues et massage.",
     null
    ]
   ]
  },
  "workshops": {
   "title": "Ateliers Beauty & Café",
   "note": "Ateliers privés en petits groupes de 3 à 4 personnes. Inscription au moins 1 semaine à l'avance.",
   "items": [
    [
     "Beauty Make-up Privéworkshop",
     "Atelier privé maquillage Beauty",
     null,
     "3–4 personnes : €35 p.p."
    ],
    [
     "Beauty Gelaatsverzorging & Touch-up Make-up Privéworkshop",
     "Atelier privé soin du visage & retouche maquillage Beauty",
     null,
     "3–4 personnes : €35 p.p."
    ],
    [
     "Koffieproeverij Basis",
     "Dégustation de café – Base",
     "Découvrez les arômes du café, l'histoire de la graine au specialty coffee et comparez plusieurs cafés.",
     "3–4 personnes"
    ],
    [
     "Koffieproeverij Verdiepend",
     "Dégustation de café – Approfondie",
     "En savoir plus sur les procédés de traitement, les variétés, les facteurs environnementaux, les profils de torréfaction et les saveurs.",
     "3–4 personnes"
    ],
    [
     "Barista Privéworkshop",
     "Atelier privé barista",
     "Préparez chez vous espresso, boissons à base d'espresso et cafés lents (V60, French Press, Phin, cafetière moka).",
     null
    ]
   ]
  }
 }
};

  I18N.fr = FR.i18n;
  window.KID_CONTENT_FR = FR.kid;
  window.SUN_TIP_FR = FR.sunTip;

  const setFr = (obj, val) => { if (obj && typeof val === "string") obj.fr = val; };

  TREATMENTS_CATALOG.forEach(tr => {
    const src = FR.treatments[tr.id];
    if (!src) { console.warn("FR: no translation for treatment", tr.id); return; }
    ["benefits","funfact","aftercare","caution"].forEach(f => { if (tr[f]) setFr(tr[f], src[f]); });
  });

  Object.keys(PRODUCT_CATEGORIES).forEach(cid => {
    const cat = PRODUCT_CATEGORIES[cid], src = FR.products[cid];
    if (!src) { console.warn("FR: no translation for product category", cid); return; }
    setFr(cat.label, src.label);
    cat.products.forEach(p => setFr(p.usage, src.usage[p.id]));
  });

  KIDS_DRINKS.forEach(d => setFr(d.name, FR.kidsDrinks[d.id]));
  BOOKING_SLOTS.forEach(s => setFr(s, FR.slots[s.id]));
  CURRENT_ACTIONS.forEach(a => {
    const src = FR.actions[a.id]; if (!src) return;
    setFr(a.title, src.title); setFr(a.text, src.text);
  });

  PRICE_LIST.forEach(sec => {
    const src = FR.price[sec.id];
    if (!src) { console.warn("FR: no translation for price section", sec.id); return; }
    setFr(sec.title, src.title);
    if (sec.note) setFr(sec.note, src.note);
    sec.items.forEach((it, i) => {
      const row = src.items[i];
      if (!row || row[0] !== it.n.nl) { console.warn("FR: price item mismatch", sec.id, i, it.n.nl); return; }
      setFr(it.n, row[1]);
      if (it.d) setFr(it.d, row[2]);
      if (it.note) setFr(it.note, row[3]);
    });
  });

  /* Fail-safe: anything still without French falls back to English,
     so the app never shows "undefined". */
  (function fill(o){
    if (!o || typeof o !== "object") return;
    if (!Array.isArray(o) && typeof o.nl === "string" && typeof o.en === "string"){
      if (typeof o.fr !== "string") o.fr = o.en;
      return;
    }
    Object.keys(o).forEach(k => fill(o[k]));
  })([TREATMENTS_CATALOG, PRODUCT_CATEGORIES, KIDS_DRINKS, PRICE_LIST, BOOKING_SLOTS, CURRENT_ACTIONS]);
})();
