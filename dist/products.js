/* Catalog of all products */
export const products = [
    /* ---- Tents ---- */
    {
        id: "tent01",
        name: "Enchanted Tent",
        price: 209.99,
        category: "tents",
        image: "/images/catalog_images/enchanted-tents.png",
        description: "Campfire tent made with durable materials and design that turns your ambience into an extraordinary and mesmerizing world you’ve never seen before.",
        includes: [
            "Tents with built-in LED lights",
            "Compact carrying case",
            "Design to fit up to 4 people"
        ]
    },
    {
        id: "tent02",
        name: "Nyx’s Veil Stargazer Tent",
        price: 199.99,
        category: "tents",
        image: "/images/catalog_images/nyxs-tent.png",
        description: "Immerse yourself in the celestial mysteries of the night with Nyx’s Veil Stargazer Tent, inspired by the primordial goddess of the night. Designed for dreamers, mystics, and cosmic explorers, this ultralight, two-person tent features a semi-transparent star map printed on the inner canopy, allowing campers to align with constellations as they rest. The deep indigo fabric shimmers subtly under moonlight, creating an ethereal glow in the dark.",
        includes: [
            "Ultralight yet durable weather-resistant fabric",
            "Two-person capacity with a quick-setup frame",
            "Cosmic star map lining the inner canopy for celestial alignment",
            "UV-protective rainfly with an iridescent sheen",
            "Glow-in-the-dark zippers and celestial rune markings",
            "Compact carrying pouch with Nyx’s sigil"
        ]
    },
    {
        id: "tent03",
        name: "Werewolf's Whisper Shelter",
        price: 249.99,
        category: "tents",
        image: "/images/catalog_images/werewolf-tent.png",
        description: "Dare to sleep under the eerie glow of the wilderness with the Werewolf’s Whisper Shelter, a rugged 4-season tent built for those who venture deep into the unknown. Crafted with stealthy dark forest hues and wind-resistant materials, this tent is designed to keep you secure while the shadows move beyond the treeline. The glow-in-the-dark Werewolf claw mark accents and reflective guide ropes ensure you won’t lose your way—unless something finds you first.",
        includes: [
            "Heavy-duty waterproof, windproof, and insulated fabric for all seasons",
            "Two-person capacity with a reinforced aluminum frame",
            "Glow-in-the-dark Werewolf claw marks on the rainfly for eerie nighttime aesthetics",
            "Reflective guide ropes for added visibility",
            "Mesh panels for ventilation and stargazing",
            "Custom carrying bag with Werewolf emblem",
            "Sleeping bags"
        ]
    },
    /* ---- Sleeping Bags ---- */
    {
        id: "sleepbag01",
        name: "Kraken’s Abyss Sleeping Bag",
        price: 169.99,
        category: "sleepingbags",
        image: "/images/catalog_images/krakens-sleepingbag.png",
        description: "Descend into the depths of comfort with the Kraken’s Abyss Sleeping Bag. Designed for extreme cold-weather camping, this sleeping bag mimics the embrace of the legendary sea monster, with thermal-insulated layers inspired by deep-sea survival. The interior features a soft, bioluminescent-like pattern, while the water-resistant outer shell boasts tentacle-shaped stitching for a cryptid-inspired aesthetic.",
        includes: [
            "Rated for extreme temperatures as low as -20°F (-29°C)",
            "Water-resistant and windproof outer shell with tentacle stitching",
            "Glow-in-the-dark bioluminescent lining for a deep-sea feel",
            "Adjustable hood for full head and neck warmth",
            "Compression sack with Kraken emblem for easy packing"
        ]
    },
    {
        id: "sleepbag02",
        name: "Phoenix Ember Recharge Sleeping Bag",
        price: 129.99,
        category: "sleepingbags",
        image: "/images/catalog_images/phoenix-sleepingbag.png",
        description: "Rise from the ashes of exhaustion with the Phoenix Ember Recharge Sleeping Bag, an ultralight, heat-retaining sleeping bag designed to keep adventurers warm in any environment. Infused with thermal-reactive technology, the fabric captures and redistributes body heat, creating a self-heating cocoon. The fiery gradient design and embroidered phoenix crest ensure you camp with both warmth and style.",
        includes: [
            "Heat-reflective lining that redistributes warmth for optimal insulation",
            "Rated for temperatures as low as 0°F (-18°C)",
            "Lightweight and compact, perfect for backpacking",
            "Fire-inspired color gradient with glowing ember accents",
            "Adjustable draft collar and footbox for maximum heat retention",
            "Compression sack with Phoenix sigil"
        ]
    },
    /* ---- Lighting ---- */
    {
        id: "light01",
        name: "Will-o’-Wisp Phantom Lantern",
        price: 49.99,
        category: "lighting",
        image: "/images/catalog_images/willowisp-lantern.png",
        description: "Step into the realm of the supernatural with the Will-o’-Wisp Phantom Lantern, a mystical light source inspired by the ghostly orbs that lure travelers through the marshlands. This eerie yet functional lantern emits an ethereal blue glow, with a flickering flame effect that mimics the mysterious Will-o'-Wisps. Designed for both campsite ambiance and practical illumination, it offers multiple light settings and a rechargeable battery for long-lasting use.",
        includes: [
            "Adjustable brightness with flickering wisp mode",
            "Soft blue glow for an eerie nighttime atmosphere",
            "USB-rechargeable battery with up to 24 hours of light",
            "Water-resistant and impact-resistant design",
            "Hanging hook and foldable handle for versatility"
        ]
    },
    {
        id: "light02",
        name: "Cerberus Tri-Flame Tactical Flashlight",
        price: 59.99,
        category: "lighting",
        image: "/images/catalog_images/cerberus-flashlight.png",
        description: "Unleash the power of the underworld with the Cerberus Tri-Flame Tactical Flashlight, a beastly tool built for the most rugged adventures. Featuring three adjustable LED heads resembling the three heads of Cerberus, this flashlight provides an intense, directional beam that adapts to any environment. Switch between spotlight, floodlight, and red night vision modes for ultimate control in the dark.",
        includes: [
            "Three adjustable LED heads for customizable lighting",
            "2000-lumen maximum brightness with a long-range beam",
            "Red night vision mode to preserve night-adapted vision",
            "Rechargeable lithium-ion battery with power bank capability",
            "Durable, weatherproof aluminum alloy body"
        ]
    },
    {
        id: "light03",
        name: "Selene’s Moonbeam Glow Stick",
        price: 34.99,
        category: "lighting",
        image: "/images/catalog_images/selenes-flashlight.png",
        description: "Channel the goddess of the moon with Selene’s Moonbeam Glow Stick, an enchanting, rechargeable glow stick that provides soft, lunar-inspired illumination. Perfect for night hikes, tent lighting, or creating a mystical camp ambiance, this glow stick features a moon-phase cycle mode that gradually shifts through soft white, silver-blue, and pale violet hues.",
        includes: [
            "Three lighting modes: soft white, silver-blue, and moon-phase cycle",
            "Rechargeable via USB with 18-hour battery life",
            "Waterproof and impact-resistant",
            "Lightweight and clip-on design for easy carrying",
            "Magnetic base for hands-free use"
        ]
    },
    /* ---- Jackets ---- */
    {
        id: "jacket01",
        name: "Yeti’s Frostbound Expedition Jacket",
        price: 229.99,
        category: "jackets",
        image: "/images/catalog_images/yetis-jacket.png",
        description: "Brave the cold with the Yeti’s Frostbound Expedition Jacket, designed to withstand the harshest winter conditions while keeping you warm and agile. Inspired by the legendary Himalayan cryptid, this insulated jacket features a rugged, snow-resistant shell and a plush yeti-fur-lined interior for maximum heat retention. Subtle claw-mark stitching and frost-like reflective accents make this jacket both stylish and functional.",
        includes: [
            "Thermal-insulated shell rated for -40°F (-40°C)",
            "Water-resistant and windproof design",
            "Faux yeti-fur-lined hood and interior for warmth",
            "Hidden zippered pockets with fleece lining",
            "Adjustable cuffs and hem to lock in heat",
            "Reflective frost patterns for enhanced visibility"
        ]
    },
    {
        id: "jacket02",
        name: "Shadow Stalker Wraith Cloak",
        price: 199.99,
        category: "jackets",
        image: "/images/catalog_images/shadow-jacket.png",
        description: "Move unseen through the night with the Shadow Stalker Wraith Cloak, a lightweight, windproof jacket designed for stealth and versatility. This modern take on the legendary wraith’s shroud features an ultra-light, ripstop fabric that blends into the darkness while providing superior protection from the elements. The hood’s high collar and subtle rune-etched patterns enhance its cryptic, ghostly aesthetic.",
        includes: [
            "Lightweight, water-resistant, and windproof construction",
            "Stealth fabric that reduces noise while moving",
            "High-collar hood with an adjustable drawstring for face coverage",
            "Glow-in-the-dark rune patterns for a mystic touch",
            "Internal utility pockets for securing small gear",
            "Breathable mesh lining for comfort"
        ]
    },
    /* ---- Cookware ---- */
    {
        id: "cookware01",
        name: "Mystic Campfire Cooking Set",
        price: 87.99,
        category: "cookware",
        image: "/images/catalog_images/mystic-campfire-cook-set1.png",
        description: "Bring a new experience to cooking—enjoy your meal with a touch of mystery using high-quality cookware.",
        includes: [
            "Pots and grill",
            "Cooking tools",
            "1 set of eating utensils",
            "4 plates",
            "Recipe book",
            "Logo"
        ]
    },
    {
        id: "cookware02",
        name: "Baba Yaga’s Iron Cauldron Cookware Set",
        price: 89.99,
        category: "cookware",
        image: "/images/catalog_images/baba-yaga-cookset.png",
        description: "Summon the magic of ancient hearths with Baba Yaga’s Iron Cauldron Cookware Set, a rugged, multi-purpose cooking system designed for the wild. This cast-iron pot is perfect for stews, soups, and boiling water, featuring a triple-legged design for stability over open flames. A mystical engraving of Baba Yaga’s hut and runes enhances its rustic, enchanted aesthetic.",
        includes: [
            "2.5-quart cast-iron cauldron with a lid",
            "Foldable tripod stand for open-fire cooking",
            "Heat-resistant leather grip handle",
            "Fire-resistant storage bag with Slavic rune embroidery",
            "Wooden spoon with carved owl insignia"
        ]
    },
    /* ---- First Aid Kits ---- */
    {
        id: "firstaid01",
        name: "Selkie’s Seaside First Aid Kit",
        price: 39.99,
        category: "firstaid",
        image: "/images/catalog_images/sea-firstaid-kit.png",
        description: "Inspired by the mythical selkies of the sea, this first aid kit is designed for water-based adventures. Whether you’re kayaking, fishing, or camping near the coast, this compact and waterproof kit has all the essentials to handle minor injuries, cuts, and stings.",
        includes: [
            "Waterproof, floatable carrying case",
            "Waterproof bandages, antiseptic wipes, and sting relief pads",
            "Burn gel and blister treatments",
            "Medical shears and tweezers for splinter removal",
            "Electrolyte tablets for hydration",
            "Compact whistle for signaling"
        ]
    },
    {
        id: "firstaid02",
        name: "Nessie’s Guardian First Aid Kit",
        price: 42.99,
        category: "firstaid",
        image: "/images/catalog_images/nessie-firstaid-kit.png",
        description: "Inspired by the legendary Loch Ness Monster, this first aid kit is designed to keep adventurers safe whether exploring misty lakes or rugged highlands. The sleek, waterproof case features a deep green, scale-like texture with a shimmering, holographic silhouette of Nessie.",
        includes: [
            "Waterproof, floating, and impact-resistant case",
            "Holographic first aid cross for visibility in low light",
            "Blister pads and anti-chafing balm for long hikes",
            "Waterproof bandages and antiseptic wipes",
            "Sting and bite relief gel for outdoor protection",
            "Emergency whistle shaped like Nessie’s head",
            "Compact survival blanket for warmth"
        ]
    },
    /* ---- Fire Starters ---- */
    {
        id: "fire01",
        name: "Jörmungandr's Ember Coil",
        price: 14.99,
        category: "firestarters",
        image: "/images/catalog_images/jorm-firestarter.png",
        description: "Unleash the ancient fire of the Midgard Serpent with Jörmungandr’s Ember Coil—a fire starter infused with Norse legend. This coiled fire rope ignites easily and burns steadily, ensuring your campsite remains warm, even in the most treacherous conditions.",
        includes: [
            "6-ft wax-infused fire-starting rope designed to unravel and ignite easily",
            "Ferrocerium striker with serpent-scale grip",
            "Waterproof storage tin featuring Jörmungandr artwork",
            "Bonus Norse rune charm for good fortune in the wild"
        ]
    },
    {
        id: "fire02",
        name: "Mothman’s Shadow Spark",
        price: 15.99,
        category: "firestarters",
        image: "/images/catalog_images/moth-firestarter.png",
        description: "Harness the eerie glow of Mothman’s Shadow Spark, a cryptid-themed fire starter designed for adventurers who thrive in the unknown. Whether you're trekking through dense forests or setting up camp under a full moon, this kit ensures a quick, reliable blaze.",
        includes: [
            "Compact ferro rod with glow-in-the-dark handle",
            "Blackened steel striker etched with Mothman’s wingspan",
            "Compressed charcoal fire pucks (x3) for long-lasting flames",
            "Weatherproof carrying pouch with reflective Mothman emblem"
        ]
    },
    {
        id: "fire03",
        name: "Mystic Campfire Kit",
        price: 55.99,
        category: "firestarters",
        image: "/images/catalog_images/mystic-campfire-kit1.png",
        description: "A campfire kit that will transform an ordinary campfire into a supernatural experience.",
        includes: [
            "Color-Changing Flame Packets",
            "Storytelling Cards",
            "Fire Safety Gloves",
            "Enchanting Matches"
        ]
    },
    /* ---- Repellents ---- */
    {
        id: "repel01",
        name: "Mothman’s Nocturnal Guard Bug Spray",
        price: 12.99,
        category: "repellent",
        image: "/images/catalog_images/moth-repel.png",
        description: "Stay bite-free in the dark with Mothman’s Nocturnal Guard Bug Spray, a powerful insect repellent inspired by the enigmatic cryptid. Infused with natural essential oils, this DEET-free formula provides long-lasting protection against mosquitoes, ticks, and other pests.",
        includes: [
            "All-natural, DEET-free formula with citronella, eucalyptus, and peppermint oils",
            "Glow-in-the-dark Mothman eyes for nighttime visibility",
            "12-hour protection against mosquitoes, ticks, and flies",
            "Water-resistant and sweat-proof formula",
            "Recyclable bottle with an easy spray applicator"
        ]
    },
    {
        id: "repel02",
        name: "Chupacabra Venom Mosquito Repellent Balm",
        price: 9.99,
        category: "repellent",
        image: "/images/catalog_images/chup-repel.png",
        description: "Harness the power of legend with Chupacabra Venom Mosquito Repellent Balm, a potent, skin-friendly insect deterrent that keeps bugs at bay with a fierce herbal blend.",
        includes: [
            "Compact, easy-to-apply solid balm formula",
            "Infused with lemongrass, cedarwood, and neem oil for all-natural protection",
            "Sweat-resistant and long-lasting",
            "Compact tin with Chupacabra fang etching",
            "Safe for sensitive skin and eco-friendly"
        ]
    },
    {
        id: "repel03",
        name: "Banshee’s Wail Ultrasonic Pest Repeller",
        price: 24.99,
        category: "repellent",
        image: "/images/catalog_images/banshee-repel.png",
        description: "Drive bugs away with Banshee’s Wail Ultrasonic Pest Repeller, an advanced, rechargeable device that emits high-frequency sound waves inaudible to humans but unbearable for mosquitoes, gnats, and other pests. The device is shaped like a ghostly wisp and glows faintly in the dark.",
        includes: [
            "Portable, USB-rechargeable design",
            "Silent ultrasonic frequency technology for non-toxic, chemical-free protection",
            "Soft glowing light shaped like a spectral wisp",
            "Clips onto gear, belts, or backpacks for hands-free use",
            "20-hour battery life per charge"
        ]
    }
];
