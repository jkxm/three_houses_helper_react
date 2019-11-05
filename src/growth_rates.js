// var be_base_stats = {
//   Edelgard:[]
// }

// character specific stuff
// [growth rate][lost item][liked item]
var houses = {
  "Protagonist":["Byleth"],
  "Black Eagles":["Edelgard","Hubert","Dorothea","Ferdinand","Bernadetta","Caspar","Petra","Linhardt"],
  "Blue Lions":["Dimitri","Dedude","Felix","Mercedes","Ashe","Annette","Sylvain","Ingrid"],
  "Golden Deer":["Claude","Lorenz","Hilda","Raphael","Lysithea","Ignatz","Marianne","Leonie"],
  "Church of Seiros":["Manuela", "Hanneman", "Seteth", "Flayn", "Cyril"],
  "Knights of Seiros":["Catherine", "Alois", "Gilbert", "Shamir"],
}

var unit_list = [
  "Byleth",
  "Edelgard",
  "Hubert",
  "Dorothea",
  "Ferdinand",
  "Bernadetta",
  "Caspar",
  "Petra",
  "Linhardt",
  "Dimitri",
  "Dedude",
  "Felix",
  "Mercedes",
  "Ashe",
  "Annette",
  "Sylvain",
  "Ingrid",
  "Claude",
  "Lorenz",
  "Hilda",
  "Raphael",
  "Lysithea",
  "Ignatz",
  "Marianne",
  "Leonie",
  "Manuela",
  "Hanneman",
  "Seteth",
  "Flayn",
  "Cyril",
  "Catherine",
  "Alois",
  "Gilbert",
  "Shamir"
];

var male = [
  "Hubert",
  "Ferdinand",
  "Caspar",
  "Linhardt",
  "Dimitri",
  "Dedude",
  "Felix",
  "Ashe",
  "Sylvain",
  "Claude",
  "Lorenz",
  "Raphael",
  "Ignatz",
  "Hanneman",
  "Seteth",
  "Cyril",
  "Alois",
  "Gilbert",
];

var female = [
  "Edelgard",
  "Dorothea",
  "Bernadetta",
  "Petra",
  "Mercedes",
  "Annette",
  "Ingrid",
  "Hilda",
  "Lysithea",
  "Marianne",
  "Leonie",
  "Manuela",
  "Flayn",
  "Catherine",
  "Shamir"
];

var male_classes = [
  "Brawler",
  "Dark Mage",
  "Hero",
  "Grappler",
  "Dark Bishop",
  "War Master",
];

var female_classes = [
  "Pegasus Knight",
  "Falcon Knight",
  "Gremory",
]


// unit:  [growth][lostitem][likeditem][perosnal ability, [unit specific ablities],[unit_specific arts],
// [unit_specific arts] = [["art name"]]
//
var flying_classes = [
  "Pegasus Knight",
  "Wyvern Master",
  "Wyvern Rider",
  "Barbarossa",
  "Falcon Knight",
  "Wyvern Lord"
]

var lords = [
  "Edelgard",
  "Dimitri",
  "Claude"
]

var base_stats = {
  "Byleth"    :[
    [45,45,35,45,45,45,35,30,45],
    [],//lost
    [],//liked
    ["Professor’s Guidance",["Battalion Vantage" ,	"Model Leader" ,"	Battalion Desperation" ,"	Rally Movement" ,"White Magic Avoid +20",]],//abilites
    ["Bane of Monsters",	"Windsweep",	"Draining Blow",	"Mystic Blow"],//dependent arts

  ],
  "Edelgard"  :[
    [40,55,45,45,40,30,35,35,60],
    ["White Glove",	"Time-worn Quill Pen", "Eastern Porcelain"],
    ["Carnation", "Armored Bear Stuffy", "Monarch Studies Book", "Board Game"],
    ["Imperial Lineage",["Battalion Vantage" ,	"Model Leader" ,	"Battalion Renewal" ,	"Rally Charm" ,"Black Magic Crit +10",]],
    ["Haze Strike","Hexblade","Monster Breaker","Lightning Axe", "Subdue"]
  ],
  "Hubert"    :[
    [35,30,55,45,45,35,25,40,35],
    ["Hresvelg Treatise",	"Noxious Handkerchief",	"Folding Razor"],
    ["Coffee Beans", "Board Game", "The History of Fodlan"],
    ["Officer Duty",["Rally Magic" ,	"Battalion Wrath" ,	"Rally Resistance" ,	"Battalion Desperation" , "Rally Speed" ,]],
    ["Heavy Draw", "Schism Shot", "Frozen Lance"]
  ],
  "Dorothea"  :[
    [40,20,40,45,40,35,15,35,40],
    ["Silver Brooch", "Songstress Poster","Lovely Comb"],
    ["Book of Sheet Music", "Gemstone Beads", "Stylish Hair Clip"],
    ["Songstress",["Rally Charm" ,	"Battalion Desperation" ,"White Magic Avoid +20"]],
    ["Hexblade"]
  ],
  "Ferdinand" :[
    [50,45,20,40,50,40,35,20,40],
    ["Maintenance Oil",	"Agricultural Survey",	"Bag of Tea Leaves"],
    ["Riding Boots", "Whetstone", "Tea Leaves"],
    ["Confidence",["Rally Dexterity" ,	"Battalion Desperation" ,"Seal Speed"]],
    ["Sunder",	"Shatter Slash",	"Swift Strikes",	"Focused Strike", "Armored Strike"]
  ],
  "Bernadetta":[
    [35,35,20,55,50,25,20,30,35],
    ["Needle and Thread",	"Still-Life Picture",	"Hedgehog Case"],
    ["Pitcher Plant", "Armored Bear Stuffy", "Book of Sheet Music", "Watering Can", "Landscape Painting", "Dapper Handkerchief"],
    ["Persecution Complex",["Battalion Wrath", "Pass"]],
    ["Vengeance","Deadeye", "Encloser"]
  ],
  "Caspar"    :[
    [55,45,25,45,45,40,30,20,25],
    ["Thunderbrand Replica",	"Tattered Overcoat",	"Grounding Charm"],
    ["Training Weight", "Whetstone",	" Hunting Dagger", "Smoked Meat"],
    ["Born Fighter",["Battalion Wrath"]],
    ["Wild Abandon", "Exhaustive Strike", "Bombard", "Mighty Blow"]
  ],
  "Petra"     :[
    [45,40,25,50,60,45,30,15,35],
    ["Exotic Flower","	Small Tanned Hide",	"Annotated Dictionary"],
    ["Sunflower", "Hunting Dagger", "Exotic Spices	Smoked Meat"],
    ["Hunter’s Boon",["Battalion Wrath"]],
    ["Bane of Monsters",	"Finesse Blade","Wild Abandon", "Diamond Axe", "Waning Shot"]
  ],
  "Linhardt"  :[
    [30,30,45,40,40,45,30,45,20],
    ["The Saints Revealed",	"Feather Pillow",	"Animated Bait"],
    ["Tasty Baked Treat", "Book of Crest Designs", "Fishing Float"],
    ["Catnap",["Battalion Renewal"]],
    []
  ],
  "Dimitri"   :[
    [55,60,20,50,50,25,40,20,55],
    ["Dulled Longsword",	"Black Leather Gloves",	"Training Logbook"],
    ["Training Weight", "Whetstone", "Riding Boots", "Ceremonial Sword"],
    ["Royal Lineage",["Battalion Wrath ",	"Model Leader" ,	"Battalion Vantage" ,	"Rally Charm" ,"Seal Movement"]],
    ["Sunder","Windsweep","Monster Piercer","Glowing Ember","Subdue"]
  ],
  "Dedude"    :[
    [60,50,15,30,20,25,50,10,30],
    ["Gold Earring", "Gardening Sheers", "Iron Cooking Pot"],
    ["Exotic Spices", "Floral Adornment", "Watering Can"],
    ["Staunch Shield",["Battalion Wrath"]],
    ["Vengeance" ,	"Monster Breaker" ,	"Armored Strike" ,	"One-Two Punch" , "Mighty Blow" ,]
  ],
  "Felix"     :[
    [45,55,30,45,55,40,30,20,30],
    ["Black Iron Spur", "Sword Belt Fragment",	"Toothed Dagger"],
    ["Smoked Meat", "Hunting Dagger", "Training Weight", "Ceremonial Sword"],
    ["Lone Wolf",["Battalion Vantage" ,"Black Magic Crit +10"]],
    ["Sunder" ,	"Finesse Blade" ,	"Heavy Draw" ,	"Nimble Combo" ,"Mystic Blow" ,]
  ],
  "Mercedes"  :[
    [30,25,50,45,40,30,25,45,40],
    ["Book of Ghost Stories", "Fruit Preserves", "How to Bake Sweets"],
    ["Lavender", "Tasty Bake Treat", "Goddess Statuette", "Armored Bear Stuffy", "Gemstone Beads"],
    ["Live to Serve",["Battalion Renewal"]],
    ["Waning Shot"]
  ],
  "Ashe"      :[
    [35,35,25,55,50,40,20,35,25],
    ["Moon Knight’s Tale", "Evil-Repelling Amulet", "Bundle of Herbs"],
    ["Violet", "Legends of Chivalry", "Exotic Spices", "Tasty Baked Treat", "Ancient Coin"],
    ["Lockpick",["Battalion Desperation"]],
    ["Focused Strike" ,	"Deadeye" ,	"Waning Shot" ,"Shatter Smash"]
  ],
  "Annette"   :[
    [25,30,50,50,35,35,20,30,35],
    ["Unfinished Score", "School of Sorcery Book", "Wax Diptych"],
    ["Book of Sheet Music", "Stylish Hair Clip", "Arithmetic Textbook"],
    ["Perseverance",["Rally Resistance" ,	"Battalion Renewal" ,	"Rally Speed" ,	"Battalion Wrath" , "Rally Movement" ,]],
    ["Lightning Axe"]
  ],
  "Sylvain"   :[
    [55,45,30,35,50,35,40,25,40],
    ["Unused Lipstick", "Crumpled Love Letter", "The History of Sreng"],
    ["Landscape Painting", "Dapper Handkerchief", "Board Game"],
    ["Philanderer",["Battalion Vantage" ,"Black Magic Avo +20"]],
    ["Monster Piercer" ,	"Swift Strikes" ,	"Spike" ,	"Lightning Axe" ,]
  ],
  "Ingrid"    :[
    [40,35,35,40,60,45,30,40,45],
    ["Pegasus Horseshoes", "Jousting Almanac", "Curry Comb"],
    ["Riding Boots", "Smoked Meat", "Legends of Chivalry"],
    ["Lady Knight",["Rally Magic" ,	"Battalion Desperation" ,]],
    ["Hexblade" ,	"Hit and Run" ,	"Frozen Lance" ,]
  ],
  "Claude"    :[
    [35,40,25,60,55,45,30,25,55],
    ["Leather Bow Sheath", "Mild Stomach Poison", "Board Game Piece"],
    ["Riding Boots", "Book of Crest Designs", "Exotic Spices", "Board Game"],
    ["Leicester Lineage",["Battalion Desperation" ,	"Model Leader ",	"Battalion Wrath" ,	"Rally Charm" ]],
    ["Bane of Monsters" ,	"Finesse Blade" ,	"Monster Blast" ,	"Encloser" ,"Diamond Axe", "Subdue"]
  ],
  "Lorenz"    :[
    [55,40,40,45,40,25,30,40,35],
    ["Artificial Flower", "A Treatise on Etiquette", "Silk Handkerchief"],
    ["Rose", "Floral Adornment", "Tea Leaves", "Book of Sheet Music"],
    ["Distinguished House",["Battalion Vantage"]],
    ["Frozen Lance" ,]
  ],
  "Hilda"     :[
    [50,45,25,30,50,35,35,20,50],
    ["Handmade Hair Clip","Spotless Bandage", "Used Bottle of Perfume"],
    ["Anemone", "Gemstone Beads", "Dapper Handkerchief", "Book of Sheet Music", "Stylish Hair Clip", "Armored Bear Stuffy"],
    ["Advocate",["Battalion Wrath", "Seal Speed"]],
    ["Shatter Slash" ,	"Spike" ,	"Diamond Axe" ,]
  ],
  "Raphael"   :[
    [65,50,15,35,15,35,45,10,25],
    ["Wooden Button", "Burlap Sack of Rocks", "Big Spoon"],
    ["Smoked Meat", "Training Weight", "Tasty Baked Treat", "Blue Cheese"],
    ["Goody Basket",["Rally Strength" , "Battalion Wrath"]],
    ["Wild Abandon" ,	"Monster Crusher" ,	"Draining Blow" ,]
  ],
  "Lysithea"  :[
    [20,15,60,60,50,15,10,25,25],
    ["Encyclopedia of Sweets", "Princess Doll", "New Bottle of Perfume"],
    ["Lily", "Armored Bear Stuffy", "Arithmetic Textbook", "Tasty Baked Treat", "Book of Crest Designs"],
    ["Mastermind",["Battalion Desperation"]],
    ["Soulblade"]
  ],
  "Ignatz"    :[
    [35,35,30,50,50,55,25,35,25],
    ["Blue Stone", "Art Book", "Letter to the Goddess"],
    ["Forget-me-nots", "Ancient Coin", "Landscape Painting", "Goddess Statuette", "Ceremonial Sword"],
    ["Watchful Eye",["Rally Speed" ,	"Battalion Desperation" ,	"Rally Dexterity" ,	"Battalion Vantage" , "Rally Strength" ,"Seal Strength"]],
    ["Haze Slice" ,	"Break Shot" , "Ward Arrow" ,]
  ],
  "Marianne"  :[
    [30,20,50,40,40,35,15,45,40],
    ["Bag of Seeds", "How to be Tidy", "Confessional Letter"],
    ["Lily of the Valley", "Dapper Handkerchief", "Floral Adornment", "Armored Bear Stuffy"],
    ["Animal Friend",["Battalion Renewal"]],
    ["Soulblade" ,"Frozen Lance"]
  ],
  "Leonie"    :[
    [40,40,20,55,60,40,40,15,40],
    ["Hand Drawn Map", "Crude Arrowheads", "Fur Scarf"],
    ["Hunting Dagger", "Training Weight", "Fishing Float"],
    ["Rivalry",["Battalion Desperation"]],
    ["Monster Piercer" ,	"Lance Jab" ,	"Break Shot" ,	"Point-Blank Volley" ,]
  ],
  "Manuela"   :[
    [50,35,35,40,60,35,30,25,50],
    ["Wellness Herbs", "Clean Dusting Cloth", "Light Purple Veil"],
    ["Book of Sheet Music",	"Gemstone Beads", "Blue Cheese", "Goddess Statuette"],
    ["Infirmary Master",["Rally Charm" ,	"Battalion Renewal"]],
    ["Hexblade" ,]
  ],
  "Hanneman"  :[
    [40,30,55,45,20,35,25,40,35],
    ["Lens Cloth", "Hammer and Chisel", "Sketch of a Sigil"],
    ["Arithmetic Textbook", "Tea Leaves", "Book of Crest Designs", "Dapper Handkerchief"],
    ["Crest Scholar",["Battalion Desperation"]],
    ["Schism Shot" ,	"Ward Arrow" ,]
  ],
  "Seteth"    :[
    [50,45,35,50,50,25,30,25,45],
    ["Unfinished Fable", "Old Fishing Rod", "Snapped Writing Quill"],
    ["The History of Fodlan", "Fishing Float", "Dapper Handkerchief"],
    ["Guardian",["Rally Defence" ,	"Battalion Wrath" ,	"Model Leader" ,	"Battalion Desperation" , "Rally Resistance" ,]],
    ["Haze Slice" ,	"Focused Strike" ,	"Diamond Axe" ,	"Monster Piercer" ,"Swift Strikes" ,]
  ],
  "Flayn"     :[
    [25,25,55,45,35,15,25,50,45],
    ["Antique Clasp", "Old Map of Enbarr", "Dusty Book of Fables"],
    ["Forget-me-nots", "Tasty Baked Treat", "Armored Bear Stuffy", "Stylish Hair Clip", "Dapper Handkerchief"],
    ["Lily’s Poise",["Rally Luck" ,	"Battalion Renewal" ,"Seal Magic"]],
    ["Hit and Run" ,	"Frozen Lance" ,]
  ],
  "Cyril"     :[
    [35,20,15,40,40,30,10,10,15],
    ["Well-Used Hatchet", "Portrait of Rhea", "Old Cleaning Cloth"],
    ["Baby’s Breath", "Smoked Meat",	"Hunting Dagger", "Watering Can"],
    ["Aptitude",["Battalion Desperation"]],
    ["Vengeance" ,	"Lance Jab" ,	"Monster Breaker" ,	"Armored Strike" ,"Point-Blank Volley" ,]
  ],
  "Catherine" :[
    [50,50,25,40,55,30,30,20,25],
    ["Weathered Cloak", "Letter to Rhea", "Badge of Graduation"],
    ["Training Weight", "Whetstone", "Legends of Chivalry", "Blue Cheese" ],
    ["Fighting Spirit",["Battalion Vantage"]],
    ["Bane of Monsters" ,	"Finesse Blade" ,	"Nimble Combo" ,	"Bombard" ,]
  ],
  "Alois"     :[
    [45,45,20,35,40,30,40,20,40],
    ["Introduction to Magic", "Foreign Gold Coin", "Mysterious Notebook"],
    ["Sunflower", "Ancient Coin", "Fishing Float", "Floral Adornment"],
    ["Compassion",["Rally Strength" ,	"Battalion Wrath"]],
    ["Spike" ,	"Exhaustive Strike" ,	"One-Two Punch" ,	"Mighty Blow" ,]
  ],
  "Gilbert"   :[
    [55,45,20,45,30,15,45,10,35],
    ["Noseless Puppet", "Carving Hammer", "Silver Necklace"],
    ["Goddess Statuette", "Fishing Float", "Ceremonial Sword"],
    ["Veteran Knight",["Rally Defence" ,	"Battalion Wrath"]],
    ["Shatter Slash" ,	"Glowing Ember" ,	"Spike" ,]
  ],
  "Shamir"    :[
    [35,40,20,55,40,55,20,15,30],
    ["Bundle of Dry Hemp", "Centipede Picture", "Animal Bone Dice"],
    ["Ancient Coin", "Exotic Spices", "Coffee Beans", "Hunting Dagger", "Book of Sheet Music"],
    ["Survival Instinct",["Battalion Desperation"]],
    ["Hit and Run" ,	"Lance Jab" ,	"Heavy Draw" ,	"Monster Blast" ,]
  ],

}

var class_groups = {
  "Unique":["Noble","Commoner","Dancer"],
  "Beginner":["Myrmidon","Soldier","Fighter","Monk"],
  "Intermediate":["Lord","Mercenary","Thief","Armored Knight","Cavalier","Brigand","Archer","Brawler","Mage","Dark Mage","Priest","Pegasus Knight"],
  "Advanced":["Armored Lord","High Lord","Wyvern Master","Hero","Swordmaster","Assassin","Fortress Knight","Paladin","Wyvern Rider","Warrior","Sniper","Grappler","Warlock","Dark Bishop","Bishop"],
  "Master":["Enlightened One","Emperor","Great Lord","Barbarossa","Falcon Knight","Wyvern Lord","Mortal Savant","Great Knight","Bow Knight","Dark Knight","Holy Knight","War Master","Gremory"],
  }


// class:[
//   [growth rates],
//   [class mastery],
//   [[class abilities], class specific art],
//   [skill req for class]
// ]
// [class masteries]

var class_rates = {
  "Noble"           :[
    [0,0,0,0,0,0,0,0,5        ],
    ["HP +5"],
    [
      []
    ],
    []
  ],
  "Commoner"        :[
    [0,0,0,0,0,0,0,0,0        ],
    ["HP +5"],
    [
      []
    ],
    []
  ],
  "Dancer"          :[
    [20, -5, 0,0,0,0,-5,-5,10 ],
    [],
    [
      ["Dance", "Special Dance"]
    ],
    []
  ],
  // beginner

  "Myrmidon"        :[
    [10,0,0,0,5,0,0,-5,5      ],
    ["Speed +2"],
    [
      []
    ],
    ["Sword D"]
  ],
  "Soldier"         :[
    [10,0,0,5,0,0,0,-5,5      ],
    ["Defense +2"],
    [
      []
    ],
    ["Lance D"]
  ],
  "Fighter"         :[
    [10,5,0,0,0,0,0,-5,5      ],
    ["Strength +2"],
    [
      []
    ],
    ["Axe D", "Bow D", "Brawl D"]
  ],
  "Monk"            :[
    [5,0,0,0,0,0,0,5,5        ],
    ["Magic +2"],
    [
      []
    ],
    ["Reason D", "Faith D"]
  ],
  // Intermediate

  "Lord"            :[
    [20,0,0,10,0,0,0,0,10     ],
    ["Resistance +2"],
    [
      ["Charm"],
    ],
    ["Sword D+","Authority C"]
  ],
  "Mercenary"       :[
    [20,5,0,0,5,0,0,-5,5      ],
    ["Vantage"],
    [
      []
    ],
    ["Sword C"]
  ],
  "Thief"           :[
    [20,0,0,10,10,0,0,0,5     ],
    ["Steal"],
    [
      ["Steal", "Locktouch"]
    ],
    ["Sword C"]
  ],
  "Armored Knight"  :[
    [20,0,0,0,-10,0,5,0,5     ],
    ["Armored Blow"],
    [
      []
    ],
    ["Axe C", "Hvy Armor D"]
  ],
  "Cavalier"        :[
    [20,5,0,5,-10,0,5,0,5     ],
    ["Desperation"],
    [
      ["Canto"]
    ],
    ["Lance C","Riding D"]
  ],
  "Brigand"         :[
    [30,10,0,0,0,0,0,-5,5     ],
    ["Death Blow"],
    [
      []
    ],
    ["Axe C"]
  ],
  "Archer"          :[
    [5,0,0,10,0,5,0,0,5       ],
    ["Hit +20"],
    [
      ["Bowrange +1"]
    ],
    ["Bow C"]
  ],
  "Brawler"         :[
    [30,0,-10,10,10,0,0,-10,5 ],
    ["Unarmed Combat"],
    [
      ["Unarmed Combat"]
    ],
    ["Brawl C"]
  ],
  "Mage"            :[
    [5,-5,10,5,0,0,-5,5,5     ],
    ["Fiendish Blow"],
    [
      ["Fire"]
    ],
    ["Reason C"]
  ],
  "Dark Mage"       :[
    [5,-5,10,5,0,0,-5,5,0     ],
    ["Poison Strike"],
    [
      ["Miasma Δ", "Heartseeker"]
    ],
    ["Reason C"]
  ],
  "Priest"          :[
    [5,-5,5,5,0,0,-5,10,10    ],
    ["Miracle"],
    [
      ["Heal", "White Magic Heal +5"]
    ],
    ["Faith C"]
  ],
  "Pegasus Knight"  :[
    [15,0,0,0,10,0,0,5,10     ],
    ["Darting Blow"],
    [
      ["Canto", "Avoid +10"],
    ],
    ["Lance C","Flying D"]
  ],
  // advanced

  "Armored Lord"    :[
    [20,5,5,0,0,0,5,5,10      ],
    ["Pomp and Circumstance"],
    [
      ["Charm", "Axefaire"]
    ],
    []
  ],
  "High Lord"       :[
    [20,5,0,5,0,0,5,0,10      ],
    ["Pomp and Circumstance"],
    [
      ["Charm", "Lancefaire"]
    ],
    []
  ],
  "Wyvern Master"   :[
    [20,10,0,0,5,0,5,0,10     ],
    ["Pomp and Circumstance"],
    [
      ["Charm", "Bowfaire", "Canto"]
    ],
    []
  ],
  "Hero"            :[
    [30,10,0,0,10,0,0,-5,5    ],
    ["Defiant Strength"],
    [
      ["Swordfaire", "Vantage"]
    ],
    ["Sword B","Axe C"]
  ],
  "Swordmaster"     :[
    [25,10,0,0,20,0,0,-5,5    ],
    [],
    [
      ["Swordfaire", "Sword Crit +10"],
      "Astra"
    ],
    ["Sword A"]
  ],
  "Assassin"        :[
    [20,0,0,20,20,0,0,0,0     ],
    ["Lethality"],
    [
      ["Swordfaire", "Locktouch", "Stealth"],
      "Assassinate"
    ],
    ["Sword B","Bow C"]
  ],
  "Fortress Knight" :[
    [30,10,0,0,-10,0,15,0,5   ],
    ["Pavise"],
    [
      ["Axefaire", "Weight -5"]
    ],
    ["Axe B","Hvy Armor B"]
  ],
  "Paladin"         :[
    [30,10,0,5,-10,5,5,5,5    ],
    ["Aegis"],
    [
      ["Canto", "Lancefaire","Terrain Resistance"]
    ],
    ["Lance B","Riding B"]
  ],
  "Wyvern Rider"    :[
    [30,10,-5,0,0,0,5,-5,5    ],
    ["Seal Defense"],
    [
      ["Canto", "Axefaire"]
    ],
    ["Axe B","Flying C"]
  ],
  "Warrior"         :[
    [40,15,-5,0,0,0,0,0,5     ],
    ["Wrath"],
    [
      ["Axefaire", "Axe Crit +10"]
    ],
    ["Axe A"]
  ],
  "Sniper"          :[
    [10,5,0,20,0,10,0,0,5     ],
    [],
    [
      ["Bowfaire", "Bowrange +1"],
      "Hunter's Volley"
    ],
    ["Bow A"]
  ],
  "Grappler"        :[
    [40,10,0,10,10,0,0,0,5    ],
    ["Tomebreaker"],
    [
      ["Fistfaire", "Unarmed Combat"],
      "Fierce Iron Fist"
    ],
    ["Brawl A"]
  ],
  "Warlock"         :[
    [10,0,10,0,0,0,-5,5,5     ],
    ["Bowbreaker"],
    [
      ["Black Tomefaire", "Black Magic Uses x2"],
    ],
    ["Reason A"]
  ],
  "Dark Bishop"     :[
    [10,0,10,0,0,0,-5,5,0     ],
    ["Lifetaker"],
    [
      ["Miasma Δ", "Fiendish Blow", "Heartseeker"]
    ],
    ["Reason A"]
  ],
  "Bishop"          :[
    [10,0,10,0,0,10,-5,5,10   ],
    ["Renewal"],
    [
      ["White Magic Uses x2", "White Magic Heal +10", "Terrain Resistance"],
    ],
    ["Faith A"]
  ],
  // master

  "Enlightened One" :[
    [20,10,10,0,0,0,5,0,5     ],
    ["Sacred Power"],
    [
      ["Swordfaire", "Terrain Resistance"],
    ],
    []
  ],
  "Emperor"         :[
    [30,10,10,0,0,0,5,5,10    ],
    [],
    [
      ["Charm", "Axefaire"],
      "Flickering Flower"
    ],
    []
  ],
  "Great Lord"      :[
    [30,10,0,10,0,0,5,0,10    ],
    [],
    [
      ["Charm", "Lancefaire"],
      "Paraselene"
    ],
    []
  ],
  "Barbarossa"      :[
    [30,15,0,0,10,0,5,0,10    ],
    [],
    [
      ["Charm", "Bowfaire", "Canto"],
      "Wind God"
    ],
    []
  ],
  "Falcon Knight"   :[
    [30,10,0,0,20,0,0,5,10    ],
    ["Defiant Avo"],
    [
      ["Canto", "Lancefaire", "Avoid +10"]
    ],
    ["Sword C", "Lance A","Flying B+"]
  ],
  "Wyvern Lord"     :[
    [30,15,-5,0,10,0,5,0,5    ],
    ["Defiant Crit"],
    [
      ["Canto", "Axefaire", "Avoid +10"]
    ],
    ["Lance C", "Axe A","Flying A"]
  ],
  "Mortal Savant"   :[
    [20,10,10,0,-10,10,0,0,5  ],
    ["Warding Blow"],
    [
      ["Swordfaire", "Black Tomefaire"]
    ],
    ["Sword A","Reason B+"]
  ],
  "Great Knight"    :[
    [30,10,0,0,-10,0,5,-5,5   ],
    ["Defiant Def"],
    [
      ["Canto", "Lancefaire", "Axefaire"]
    ],
    ["Axe B+", "Hvy Armor A","Riding B+"]
  ],
  "Bow Knight"      :[
    [10,0,0,0,-5,0,0,0,5      ],
    ["Defiant Spd"],
    [
      ["Canto","Bowfaire","Bowrange +2"]
    ],
    ["Lance C", "Bow A","Riding A"]
  ],
  "Dark Knight"     :[
    [10,5,10,0,-5,0,5,10,5    ],
    ["Seal Resistance"],
    [
      ["Canto","Black Tomefaire","Dark Tomefaire"]
    ],
    ["Lance C","Reason B+","Riding A"]
  ],
  "Holy Knight"     :[
    [10,0,10,0,-5,10,5,10,10  ],
    ["Defiant Res"],
    [
      ["Canto","White Tomefaire","Terrain Resistance"]
    ],
    ["Lance C","Faith B+","Riding A"]
  ],
  "War Master"      :[
    [40,15,0,0,10,0,0,0,5     ],
    ["Quick Riposte"],
    [
      ["Fistfaire","Axefaire","Crit +20"],
      "War Master's Strike"
    ],
    ["Axe A","Brawl A"]
  ],
  "Gremory"         :[
    [10,0,10,10,0,0,0,5,10    ],
    ["Defiant Mag"],
    [
      ["Black Magic Uses x2","Dark Magic Uses x2","White Magic Uses x2"]
    ],
    ["Reason A","Faith A"]
  ],
}





export {class_rates,class_groups,unit_list,male,female,male_classes,female_classes,flying_classes,};
// export {class_groups};
export {base_stats};
export {houses, lords};
// export {unit_list};
