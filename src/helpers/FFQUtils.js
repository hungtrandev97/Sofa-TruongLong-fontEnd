const {
  FOOD_CATEGORY_CODE,
  MOM_FFQ_FREQUENCY,
  FFQ_UNIT,
} = require("../constants/DefaultValues");

export const freOptions = [
  { label: "Rarely/Never", value: MOM_FFQ_FREQUENCY.RARELY_NEVER },
  { label: "Per day", value: MOM_FFQ_FREQUENCY.PER_DAY },
  { label: "Per week", value: MOM_FFQ_FREQUENCY.PER_WEEK },
  { label: "Per month", value: MOM_FFQ_FREQUENCY.PER_MONTH },
];

export const quantityOps = [
  { label: "01 time", value: 1 },
  { label: "02 times", value: 2 },
  { label: "03 times", value: 3 },
  { label: "04 times", value: 4 },
  { label: "05 times", value: 5 },
  { label: "06 times", value: 6 },
  { label: "07 times", value: 7 },
  { label: "08 times", value: 8 },
  { label: "09 times", value: 9 },
  { label: "10 times", value: 10 },
];

export const unitOps = [
  { label: "Slice", value: FFQ_UNIT.SLICE },
  { label: "Tbsp", value: FFQ_UNIT.TBSP },
  { label: "Small bowl", value: FFQ_UNIT.SMALL_BOWL },
  { label: "Stalks", value: FFQ_UNIT.STALKS },
  { label: "Whole fruit", value: FFQ_UNIT.WHOLE_FRUIT },
  { label: "Pcs", value: FFQ_UNIT.PCS },
  { label: "Cup(120ml)", value: FFQ_UNIT.CUP12ML },
  { label: "Tsp", value: FFQ_UNIT.TSP },
];

export const unitQuantityOps = [
  { label: "0.5", value: 0.5 },
  { label: "1", value: 1 },
  { label: "1.5", value: 1.5 },
  { label: "2", value: 2 },
  { label: "2.5", value: 2.5 },
  { label: "3", value: 3 },
  { label: "3.5", value: 3.5 },
  { label: "4", value: 4 },
  { label: "4.5", value: 4.5 },
  { label: "5", value: 5 },
  { label: "5.5", value: 5.5 },
  { label: "6", value: 6 },
  { label: "6.5", value: 6.5 },
  { label: "7", value: 7 },
  { label: "7.5", value: 7.5 },
  { label: "8", value: 8 },
  { label: "8.5", value: 8.5 },
  { label: "9", value: 9 },
  { label: "9.5", value: 9.5 },
  { label: "10", value: 10 },
];

export const MOM_FOODS = [
  FOOD_CATEGORY_CODE.B_C,
  FOOD_CATEGORY_CODE.R_P,
  FOOD_CATEGORY_CODE.OTHER_CARBO,
  FOOD_CATEGORY_CODE.FERMENTED,
  FOOD_CATEGORY_CODE.NOODLES,
  FOOD_CATEGORY_CODE.SOUPS,
  FOOD_CATEGORY_CODE.V_B,
  FOOD_CATEGORY_CODE.SALAD,
  FOOD_CATEGORY_CODE.FRUITS,
  FOOD_CATEGORY_CODE.POULTRY,
  FOOD_CATEGORY_CODE.MEAT,
  FOOD_CATEGORY_CODE.F_SF,
  FOOD_CATEGORY_CODE.P_F,
  FOOD_CATEGORY_CODE.EGGS,
  FOOD_CATEGORY_CODE.DESSERT_SNACK,
  FOOD_CATEGORY_CODE.CAKE,
  FOOD_CATEGORY_CODE.F_F,
  FOOD_CATEGORY_CODE.SW_B,
  FOOD_CATEGORY_CODE.NUTS,
  FOOD_CATEGORY_CODE.TITBIT_SNACK,
  FOOD_CATEGORY_CODE.BEVERAGES,
  FOOD_CATEGORY_CODE.MILK_DAIRY,
  FOOD_CATEGORY_CODE.SOYA,
  FOOD_CATEGORY_CODE.VEGETARIAN_CHINESE,
  FOOD_CATEGORY_CODE.ALCOHOLIC_DRINKS,
];

export const BABY_FOODS = [
  FOOD_CATEGORY_CODE.BABY_CARBO,
  FOOD_CATEGORY_CODE.VEGETABLES,
  FOOD_CATEGORY_CODE.LEGUME_SOY,
  FOOD_CATEGORY_CODE.BABY_FRUITS,
  FOOD_CATEGORY_CODE.FISH_MEAT_POULTRY,
  FOOD_CATEGORY_CODE.DAIRY,
  FOOD_CATEGORY_CODE.SNACKS,
  FOOD_CATEGORY_CODE.BABY_BEVERAGES,
  FOOD_CATEGORY_CODE.BABY_F_F,
  FOOD_CATEGORY_CODE.SEASONING,
  FOOD_CATEGORY_CODE.SUPPLEMENTS,
];

export const FOOD_LIST = [
  {
    categoryCode: FOOD_CATEGORY_CODE.B_C,
    name: "Breads and Cereals",
    image: "bread-cereals.png",
    bigTitle: "BREADS & CEREALS",
    groups: [
      {
        title: "Bread",
        fields: [
          "B_C_WHITE-BREAD",
          "B_C_WHOLEMEAL-BREAD",
          "B_C_BREAD-WITH-FRUITS",
        ],
      },
      {
        title: "Bread spreads used",
        fields: [
          "B_C_BUTTER",
          "B_C_MARGARINE",
          "B_C_PEANUT-BUTTER",
          "B_C_JAMS",
          "B_C_KAYA",
        ],
      },
      {
        title: "Other types of breads",
        fields: [
          "B_C_ROTI",
          "B_C_CHAPATI",
          "B_C_FRENCH-BUNS",
          "B_C_BREAD-BUNS",
        ],
      },
      {
        title: "Cereal",
        fields: ["B_C_PLAIN", "B_C_MIXED-FRUIT", "B_C_WHOLE", "B_C_OATS"],
      },
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.R_P,
    name: "Rice and Porridge",
    image: "rice-and-porridge.png",
    bigTitle: "RICE & PORRIDGE",
    foods: [
      "R_P_PLAIN-RICE",
      "R_P_BROWN",
      "R_P_PLAIN-PORRIDGE",
      "R_P_FRIED-RICE",
      "R_P_CHICKEN-RICE",
      "R_P_RICE-NOODLE",
      "R_P_NASI-BIRYANI",
      "R_P_NASI-LEMAK",
      "R_P_CLAYPOT",
      "R_P_GLUTINOUS",
      "R_P_FLAVOURED",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.OTHER_CARBO,
    name: "Other source of carbohydrate",
    image: "other-carbohydrates.png",
    bigTitle: "OTHER SOURCES OF CARBOHYDRATES",
    foods: [
      "OTHER_CARBO_CORN",
      "OTHER_CARBO_CASSAVA",
      "OTHER_CARBO_SWEET-POTATOES",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.FERMENTED,
    name: "Fermented food",
    image: "fermented.png",
    bigTitle: "FERMENTED FOOD",
    foods: [
      "FERMENTED_KIMCHI",
      "FERMENTED_NATO",
      "FERMENTED_TEMPE",
      "FERMENTED_TAPAI",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.NOODLES,
    name: "Noodles (rice noodles, wheat noodles, bean noodles, pasta)",
    image: "noodle.png",
    bigTitle: "NOODLES",
    subBigTitle: "(rice noodles, wheat noodles, bean noodles, pasta)",
    foods: [
      "NOODLES_RICE-BASED",
      "NOODLES_WHEAT-BASED",
      "NOODLES_FRIED-RICE",
      "NOODLES_FRIED-WHEAT",
      "NOODLES_RICE-NOODLE",
      "NOODLES_INSTANT-NOODLE",
      "NOODLES_BOILED",
      "NOODLES_BOILED-CREAM",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.SOUPS,
    name: "Soups",
    image: "soup.png",
    bigTitle: "Soups",
    foods: ["SOUPS_CREAM-SOUP", "SOUPS_CLEAR-SOUP"],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.V_B,
    name: "Vegetables and Beancurd",
    image: "vegetables-and-beancurd.png",
    bigTitle: "vegetables & beancurd",
    groups: [
      {
        title: "Mixed vegetables",
        fields: [
          "V_B_STIR-FRIED",
          "V_B_STIR-FRIED-MEAT",
          "V_B_STIR-FRIED-OYSTER",
          "V_B_STIR-FRIED-SAMBAL",
          "V_B_CURRY-LEMAK",
          "V_B_RAW-IN-SOUP",
          "V_B_DRIED-LEGUMES",
          "V_B_RAW-STEAMED-BOILED",
        ],
      },
      {
        title: "Preserved vegetable (chye sim, olives etc)",
        fields: [
          "V_B_STIR-FRIED_MIXED",
          "V_B_STIR-FRIED-MEAT_MIXED",
          "V_B_STIR-FRIED-OYSTER_MIXED",
          "V_B_BATTERED-DEEP-FRIED",
          "V_B_CURRY-LEMAK_MIXED",
          "V_B_RAW-IN-SOUP_MIXED",
          "V_B_FRIED",
          "V_B_STEAM-IN-SOUP",
          "V_B_STIR-FRIED-POTATOES",
          "V_B_SOUPS-MEAT-STOCK",
          "V_B_STEWS",
        ],
      },
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.SALAD,
    name: "Salad dressings",
    image: "salad-dressings.png",
    bigTitle: "Salad dressings",
    foods: ["SALAD_CREAMY-REGULAR", "SALAD_CREAMY-LIGHT", "SALAD_OIL-BASED"],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.FRUITS,
    name: "Fruits",
    image: "fruits.png",
    bigTitle: "Fruits",
    foods: [
      "FRUITS_FRESH-FRUITS",
      "FRUITS_OTHER-FRESH-FRUITS",
      "FRUITS_FRESH FRUIT JUICE",
      "FRUITS_BANANAS",
      "FRUITS_CANNED-FRUITS",
      "FRUITS_MIXED-FRUITS",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.POULTRY,
    name: "Poultry",
    image: "poultry.png",
    bigTitle: "Poultry",
    groups: [
      {
        title: "Poultry-without skin",
        fields: [
          "POULTRY_STIR-FRIED",
          "POULTRY_PAN-DEEP-FRIED",
          "POULTRY_COCONUT-CURRY",
          "POULTRY_CURRY-WITHOUT-COCONUT",
          "POULTRY_STEW-BRAISED-ROASTED",
          "POULTRY_STEAMED",
        ],
      },
      {
        title: "Poultry-with skin",
        fields: [
          "POULTRY_SKIN-STIR-FRIED",
          "POULTRY_SKIN-PAN-DEEP-FRIED",
          "POULTRY_SKIN-COCONUT-CURRY",
          "POULTRY_SKIN-CURRY-WITHOUT-COCONUT",
          "POULTRY_SKIN-STEW-BRAISED-ROASTED",
          "POULTRY_SKIN-STEAMED",
        ],
      },
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.MEAT,
    name: "Meat",
    image: "meat.png",

    bigTitle: "Meat",
    groups: [
      {
        title: "Meat-lean",
        fields: [
          "MEAT_STIR-FRIED",
          "MEAT_PAN-DEEP-FRIED",
          "MEAT_COCONUT-CURRY",
          "MEAT_CURRY-WITHOUT-COCONUT",
          "MEAT_STEWED-BRAISED",
          "MEAT_ROASTED-GRILLED-BBQ",
          "MEAT_STEAMED-SOUP",
        ],
      },
      {
        title: "Meat-lean and fat",
        fields: [
          "MEAT_FAT-STIR-FRIED",
          "MEAT_FAT-PAN-DEEP-FRIED",
          "MEAT_FAT-COCONUT-CURRY",
          "MEAT_FAT-CURRY-WITHOUT-COCONUT",
          "MEAT_FAT-STEWED-BRAISED",
          "MEAT_FAT-ROASTED-GRILLED-BBQ",
          "MEAT_FAT-STEAMED-SOUP",
        ],
      },
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.F_SF,
    name: "Fish/Seafood",
    image: "fish-seafood.png",
    bigTitle: "Fish/Seafood",
    groups: [
      {
        title: "Fish",
        fields: [
          "F_SF_FISH-RAW",
          "F_SF_FISH-STIR",
          "F_SF_FISH-STEAMED",
          "F_SF_FISH-WITH-COCONUT",
          "F_SF_FISH-GRILLED",
          "F_SF_FISH-CANNED",
        ],
      },
      {
        title: "Other seafood",
        fields: [
          "F_SF_RAW",
          "F_SF_STIR",
          "F_SF_STEAMED",
          "F_SF_WITH-COCONUT",
          "F_SF_GRILLED",
          "F_SF_CANNED",
        ],
      },
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.P_F,
    name: "Processed foods",
    image: "processed-foods.png",

    bigTitle: "processed foods",
    foods: [
      "P_F_SAUSAGES",
      "P_F_BACON",
      "P_F_HAM",
      "P_F_JERKY",
      "P_F_FISH-CAKES",
      "P_F_FISH-BALLS",
      "P_F_CANNED-MEAT",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.EGGS,
    name: "Eggs",
    image: "eggs.png",
    bigTitle: "eggs",
    groups: [
      {
        title: "Whole eggs (including salted and century eggs)",
        fields: ["EGGS_BOILED", "EGGS_FRIED"],
      },
      {
        title: "Egg whites, only",
        fields: ["EGGS_BOILED-WHITE", "EGGS_FRIED-WHITE"],
      },
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.DESSERT_SNACK,
    name: "Desserts/Local Snacks",
    image: "desserts-local-snacks.png",
    bigTitle: "desserts/local snacks",
    groups: [
      {
        title: "Dessert in soup",
        fields: [
          "DESSERT_SNACK_WITH-COCONUT-SOUP",
          "DESSERT_SNACK_WITHOUT-COCONUT-SOUP",
        ],
      },
      {
        title: "Kueh kueh-steamed",
        fields: [
          "DESSERT_SNACK_WITH-COCONUT-STEAMED",
          "DESSERT_SNACK_WITHOUT-COCONUT-STEAMED",
        ],
      },
      {
        title: "Others",
        fields: [
          "DESSERT_SNACK_FRIED-SNACK",
          "DESSERT_SNACK_DIM-SUM",
          "DESSERT_SNACK_DIM-SUM-FRIED",
          "DESSERT_SNACK_SWEET-INDIAN-SNACKS",
        ],
      },
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.CAKE,
    name: "Biscuits, Pastries and Cakes",
    image: "biscuits-pastries-cakes.png",
    bigTitle: "biscuits, pastries & cakes",
    foods: [
      "CAKE_PLAIN-BISCUITS",
      "CAKE_CREAM-FILLED",
      "CAKE_PUFF-FLAKY-PASTRIES",
      "CAKE_PLAIN-BUTTER",
      "CAKE_SPONGE-CAKES",
      "CAKE_CREAM-CAKES",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.F_F,
    name: "Fast Foods",
    image: "fast-foods.png",
    bigTitle: "fast foods",
    foods: [
      "F_F_BURGERS-BEEF-CHICKEN",
      "F_F_BURGERS-FISH",
      "F_F_FRENCH-FRIES",
      "F_F_PIZZA",
      "F_F_MASHED-POTATO",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.SW_B,
    name: "Sweetened beverages",
    image: "sweetened-beverages.png",
    bigTitle: "sweetened beverages",
    foods: ["SW_B_SWEETENED-BEVERAGES"],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.NUTS,
    name: "Nuts",
    image: "nuts.png",
    bigTitle: "nuts",
    foods: ["NUTS_DRY-ROASTED", "NUTS_FRIED"],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.TITBIT_SNACK,
    name: "Tidbits/Snacks",
    image: "tibits-snacks.png",
    bigTitle: "tidbits/snacks",
    foods: [
      "TITBIT_SNACK_FRIED",
      "TITBIT_SNACK_ICE-CREAM",
      "TITBIT_SNACK_CHOCOLATE",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.BEVERAGES,
    name: "Beverages",
    image: "beverages.png",
    bigTitle: "beverages",
    foods: [
      "BEVERAGES_COFFEE-WITHOUT-SUGAR",
      "BEVERAGES_COFFEE-WITH-SUGAR",
      "BEVERAGES_TEA-WITHOUT-SUGAR",
      "BEVERAGES_TEA-WITH-SUGAR",
      "BEVERAGES_MALT-BEVERAGES",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.MILK_DAIRY,
    name: "Milk, Plant-Based Milk and Dairy Products",
    image: "milk-diary-product.png",
    bigTitle: "Milk, Plant-Based Milk & Dairy Products",
    groups: [
      {
        title: "Milk (as a drink)",
        fields: [
          "MILK_DAIRY_FULL-CREAM-MILK",
          "MILK_DAIRY_LOW-FAT-MILK",
          "MILK_DAIRY_SKIMMED-MILK",
        ],
      },
      {
        title: "Yoghurt",
        fields: [
          "MILK_DAIRY_REGULAR",
          "MILK_DAIRY_LOW-FAT",
          "MILK_DAIRY_KERDS-KEFIR",
        ],
      },
      {
        title: "Cheese",
        fields: ["MILK_DAIRY_CHEESE-SPREAD", "MILK_DAIRY_LOW-FAT-CHEESE"],
      },
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.SOYA,
    name: "Soya Products",
    image: "soya-products.png",
    bigTitle: "soya products",
    foods: ["SOYA_SOYA-MILK", "SOYA_SOYA-BEANCURD", "SOYA_TOFU"],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.VEGETARIAN_CHINESE,
    name: "Vegetarian (Chinese)",
    image: "vegetarians.png",
    bigTitle: "Vegetarian (Chinese)",
    foods: [
      "VEGETARIAN_CHINESE_FRIED-VEGETARIAN-NOODLES",
      "VEGETARIAN_CHINESE_GLUTEN",
      "VEGETARIAN_CHINESE_FRIED-BEANCURD-SHEET",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.ALCOHOLIC_DRINKS,
    name: "Alcoholic drinks",
    image: "alcoholic-drinks.png",
    bigTitle: "alcoholic drinks",
    foods: [
      "ALCOHOLIC_DRINKS_BEER",
      "ALCOHOLIC_DRINKS_CIDER",
      "ALCOHOLIC_DRINKS_STOUT",
      "ALCOHOLIC_DRINKS_WINE",
      "ALCOHOLIC_DRINKS_RICE-WINE",
      "ALCOHOLIC_DRINKS_SPIRITS",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.BABY_CARBO,
    name: "Carbohydrates",
    image: "carbohydrates.png",
    bigTitle: "carbohydrates",
    foods: [
      "BB_BEAD",
      "BB_CEREAL",
      "BB_CHAPATTI",
      "BB_DOSAI",
      "BB_MILLET",
      "BB_OATMEAL",
      "BB_PASTA",
      "BB_RICE",
      "NODDLES",
      "BB_PIZZA",
      "BB_PRATA",
      "BB_PORRIDGE",
      "QUINOA",
      "SEMOLINA",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.VEGETABLES,
    name: "Vegetables",
    image: "vegetables.png",
    bigTitle: "vegetables",
    foods: [
      "BULBS",
      "FLOWERS",
      "LEAFY",
      "TUBERS",
      "ROOT",
      "STEM",
      "BABY_VEGETABLE",
      "SEEDS",
      "MUSHROOM",
      "WOLF_BERRIES",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.LEGUME_SOY,
    name: "Legumes and Soy Items",
    image: "legume-soy.png",
    bigTitle: "legumes & soy items",
    foods: ["BEANS", "LEGUMES", "TAU_KWA"],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.BABY_FRUITS,
    name: "Fruits",
    image: "fruits.png",
    bigTitle: "fruits",
    foods: ["FLESHY_FRUITS", "OTHER_FLESHY", "BERRIES", "CITRUS", "STONE"],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.FISH_MEAT_POULTRY,
    name: "Fish, Meat and Poultry",
    image: "fish-meat-poultry.png",
    bigTitle: "fish, meat, and poultry",
    foods: [
      "BEEF",
      "CHICKEN",
      "PORK",
      "MUTTON",
      "TURKEY",
      "PROCESS_MEAT",
      "OILY_FISH",
      "OTHER_S_F",
      "EGG",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.DAIRY,
    name: "Dairy Products",
    image: "dairy.png",
    bigTitle: "dairy products",
    foods: [
      "DAIRY_CHEESE",
      "MILK_LIQUID",
      "MILK_POWDER",
      "YOGURT",
      "OTHER_DAIRY",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.SNACKS,
    name: "Snacks",
    image: "snacks.png",
    bigTitle: "snacks",
    foods: [
      "BISCUITS",
      "BUN",
      "CAKE",
      "CONFECTIONERY",
      "BEAN_CURD",
      "SAVORY",
      "SWEET_SNACK",
      "NUTS",
      "SAVORY_SNACK",
      "PRESERVED",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.BABY_BEVERAGES,
    name: "Beverages",
    image: "baby-beverages.png",
    bigTitle: "beverages",
    foods: ["F_JUICES", "MILK_SHAKES", "PLAIN_WATER", "SOFT_DRINK", "SOYBEAN"],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.BABY_F_F,
    name: "Fast food",
    image: "baby-fast-food.png",
    bigTitle: "fast food",
    foods: [
      "BURGER",
      "FRENCH_FRIES",
      "FRIED_CHICKEN",
      "POTATO_DISHED",
      "HOT_CAKES",
      "PIZZA",
    ],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.SEASONING,
    name: "Seasoning",
    image: "seasoning.png",
    bigTitle: "seasoning",
    foods: ["SAVORY_SAUCES", "SWEET_SAUCES", "SPREADS", "OTHER_SEASONING"],
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.SUPPLEMENTS,
    name: "Supplement",
    image: "supplements.png",
    bigTitle: "supplements",
    foods: ["VITAMIN_SUP", "OTHER_SUP"],
  },
];

export const FIELD_NAME = [
  {
    name: "White bread, including naan and bun",
    code: "B_C_WHITE-BREAD",
  },
  {
    name: "Wholemeal bread",
    code: "B_C_WHOLEMEAL-BREAD",
  },
  {
    name: "Bread with fruits and nuts",
    code: "B_C_BREAD-WITH-FRUITS",
  },
  {
    name: "Butter",
    code: "B_C_BUTTER",
  },
  {
    name: "Margarine",
    code: "B_C_MARGARINE",
  },
  {
    name: "Peanut butter",
    code: "B_C_PEANUT-BUTTER",
  },
  {
    name: "Jams/honey",
    code: "B_C_JAMS",
  },
  {
    name: "Kaya",
    code: "B_C_KAYA",
  },
  {
    name: "Roti prata/murtabak",
    code: "B_C_ROTI",
  },
  {
    name: "Chapati/thosai",
    code: "B_C_CHAPATI",
  },
  {
    name: "French toast/roti telur/roti john",
    code: "B_C_FRENCH-BUNS",
  },
  {
    name: "Bread buns with coconut/meat fillings",
    code: "B_C_BREAD-BUNS",
  },
  {
    name: "Plain/flavoured breakfast cereal",
    code: "B_C_PLAIN",
  },
  {
    name: "Mixed (with fruit/nuts) breakfast cereal",
    code: "B_C_MIXED-FRUIT",
  },
  {
    name: "Whole-grains breakfast cereals",
    code: "B_C_WHOLE",
  },
  {
    name: "Oats/oatmeal (raw)",
    code: "B_C_OATS",
  },
  // Rice and Porridge
  {
    name: "Plain rice",
    code: "R_P_PLAIN-RICE",
  },
  {
    name: "Brown or red rice",
    code: "R_P_BROWN",
  },
  {
    name: "Plain porridge",
    code: "R_P_PLAIN-PORRIDGE",
  },
  {
    name: "Fried rice",
    code: "R_P_FRIED-RICE",
  },
  {
    name: "Chicken/duck rice",
    code: "R_P_CHICKEN-RICE",
  },
  {
    name: "Fine rice noodle (beehoon)",
    code: "R_P_RICE-NOODLE",
  },
  {
    name: "Nasi biryani",
    code: "R_P_NASI-BIRYANI",
  },
  {
    name: "Nasi lemak",
    code: "R_P_NASI-LEMAK",
  },
  {
    name: "Claypot rice",
    code: "R_P_CLAYPOT",
  },
  {
    name: "Glutinous rice",
    code: "R_P_GLUTINOUS",
  },
  {
    name: "Flavoured porridge (e.g. chicken, pork, duck, fish)",
    code: "R_P_FLAVOURED",
  },
  // Other source of carbohydrate
  {
    name: "Corn",
    code: "OTHER_CARBO_CORN",
  },
  {
    name: "Cassava",
    code: "OTHER_CARBO_CASSAVA",
  },
  {
    name: "Sweet potatoes",
    code: "OTHER_CARBO_SWEET-POTATOES",
  },
  // Fermented food
  {
    name: "Kimchi",
    code: "FERMENTED_KIMCHI",
  },
  {
    name: "Nato",
    code: "FERMENTED_NATO",
  },
  {
    name: "Tempe",
    code: "FERMENTED_TEMPE",
  },
  {
    name: "Tapai",
    code: "FERMENTED_TAPAI",
  },
  // Noodles (rice noodles, wheat noodles, bean noodles, pasta)
  {
    name: "Rice-based soup noodles (e.g. beehoon, kway teow, hor fun, laksa)",
    code: "NOODLES_RICE-BASED",
  },
  {
    name: "Wheat-based soup noodles (e.g. mee, udon, ramen, mee rebus)",
    code: "NOODLES_WHEAT-BASED",
  },
  {
    name: "Fried rice noodle",
    code: "NOODLES_FRIED-RICE",
  },
  {
    name: "Fried wheat noodle",
    code: "NOODLES_FRIED-WHEAT",
  },
  {
    name: "Rice noodle (e.g. mee siam)",
    code: "NOODLES_RICE-NOODLE",
  },
  {
    name: "Instant/cup  noodles",
    code: "NOODLES_INSTANT-NOODLE",
  },
  {
    name: "Boiled noodles/spaghetti/pasta (plain)",
    code: "NOODLES_BOILED",
  },
  {
    name: "Boiled noodles/spaghetti/pasta with cream white sauce",
    code: "NOODLES_BOILED-CREAM",
  },
  // Soups
  {
    name: "Cream soup",
    code: "SOUPS_CREAM-SOUP",
  },
  {
    name: "Clear soup/broth",
    code: "SOUPS_CLEAR-SOUP",
  },
  // Vegetables and Beancurd
  {
    name: "Stir fried, plain",
    code: "V_B_STIR-FRIED",
  },
  {
    name: "Stir fried, with meat/seafood",
    code: "V_B_STIR-FRIED-MEAT",
  },
  {
    name: "Stir fried in oyster sauce",
    code: "V_B_STIR-FRIED-OYSTER",
  },
  {
    name: "Stir fried in sambal belacan/dried prawns",
    code: "V_B_STIR-FRIED-SAMBAL",
  },
  {
    name: "Curry/lemak",
    code: "V_B_CURRY-LEMAK",
  },
  {
    name: "Raw/steam/in soup",
    code: "V_B_RAW-IN-SOUP",
  },
  {
    name: "Dried legumes (e.g. dhal, dried beans) in gravy",
    code: "V_B_DRIED-LEGUMES",
  },
  {
    name: "Raw/steamed/boiled",
    code: "V_B_RAW-STEAMED-BOILED",
  },
  {
    name: "Stir fried, plain",
    code: "V_B_STIR-FRIED_MIXED",
  },
  {
    name: "Stir fried, with meat/seafood",
    code: "V_B_STIR-FRIED-MEAT_MIXED",
  },
  {
    name: "Stir fried in oyster sauce",
    code: "V_B_STIR-FRIED-OYSTER_MIXED",
  },
  {
    name: "Battered deep fried (e.g. tempura)",
    code: "V_B_BATTERED-DEEP-FRIED",
  },
  {
    name: "Curry/lemak",
    code: "V_B_CURRY-LEMAK_MIXED",
  },
  {
    name: "Raw/steamed/in soup/rojak",
    code: "V_B_RAW-IN-SOUP_MIXED",
  },
  {
    name: "Fried",
    code: "V_B_FRIED",
  },
  {
    name: "Steamed/in soup",
    code: "V_B_STEAM-IN-SOUP",
  },
  {
    name: "Stir fried potatoes",
    code: "V_B_STIR-FRIED-POTATOES",
  },
  {
    name: "Soups with meat stock",
    code: "V_B_SOUPS-MEAT-STOCK",
  },
  {
    name: "Stews",
    code: "V_B_STEWS",
  },
  // Salad dressings
  {
    name:
      "Creamy dressing-regular (e.g thousand island, mayonnaise, salad cream etc)",
    code: "SALAD_CREAMY-REGULAR",
  },
  {
    name: "Creamy dressing-light/low fat",
    code: "SALAD_CREAMY-LIGHT",
  },
  {
    name: "Oil-based dressing",
    code: "SALAD_OIL-BASED",
  },
  // Fruits
  {
    name: "Orange/red/yellow fresh fruits",
    code: "FRUITS_FRESH-FRUITS",
  },
  {
    name: "Other fresh fruits",
    code: "FRUITS_OTHER-FRESH-FRUITS",
  },
  {
    name: "Fresh fruit juice",
    code: "FRUITS_FRESH FRUIT JUICE",
  },
  {
    name: "Bananas",
    code: "FRUITS_BANANAS",
  },
  {
    name: "Canned fruits",
    code: "FRUITS_CANNED-FRUITS",
  },
  {
    name: "Mixed fruits (dried)",
    code: "FRUITS_MIXED-FRUITS",
  },
  // Poultry
  {
    name: "Stir fried",
    code: "POULTRY_STIR-FRIED",
  },
  {
    name: "Pan/deep fried",
    code: "POULTRY_PAN-DEEP-FRIED",
  },
  {
    name: "Coconut curry",
    code: "POULTRY_COCONUT-CURRY",
  },
  {
    name: "Curry without coconut",
    code: "POULTRY_CURRY-WITHOUT-COCONUT",
  },
  {
    name: "Stew/braised/roasted",
    code: "POULTRY_STEW-BRAISED-ROASTED",
  },
  {
    name: "Steamed",
    code: "POULTRY_STEAMED",
  },
  {
    name: "Stir fried",
    code: "POULTRY_SKIN-STIR-FRIED",
  },
  {
    name: "Pan/deep fried",
    code: "POULTRY_SKIN-PAN-DEEP-FRIED",
  },
  {
    name: "Coconut curry",
    code: "POULTRY_SKIN-COCONUT-CURRY",
  },
  {
    name: "Curry without coconut",
    code: "POULTRY_SKIN-CURRY-WITHOUT-COCONUT",
  },
  {
    name: "Stew/braised/roasted",
    code: "POULTRY_SKIN-STEW-BRAISED-ROASTED",
  },
  {
    name: "Steamed",
    code: "POULTRY_SKIN-STEAMED",
  },
  // Meat
  {
    name: "Stir fried",
    code: "MEAT_STIR-FRIED",
  },
  {
    name: "Pan/deep fried",
    code: "MEAT_PAN-DEEP-FRIED",
  },
  {
    name: "Coconut curry/rendang",
    code: "MEAT_COCONUT-CURRY",
  },
  {
    name: "Curry without coconut",
    code: "MEAT_CURRY-WITHOUT-COCONUT",
  },
  {
    name: "Stewed/braised",
    code: "MEAT_STEWED-BRAISED",
  },
  {
    name: "Roasted/grilled/BBQ",
    code: "MEAT_ROASTED-GRILLED-BBQ",
  },
  {
    name: "Steamed/soup",
    code: "MEAT_STEAMED-SOUP",
  },
  {
    name: "Stir fried",
    code: "MEAT_FAT-STIR-FRIED",
  },
  {
    name: "Pan/deep fried",
    code: "MEAT_FAT-PAN-DEEP-FRIED",
  },
  {
    name: "Coconut curry/rendang",
    code: "MEAT_FAT-COCONUT-CURRY",
  },
  {
    name: "Curry without coconut",
    code: "MEAT_FAT-CURRY-WITHOUT-COCONUT",
  },
  {
    name: "Stewed/braised",
    code: "MEAT_FAT-STEWED-BRAISED",
  },
  {
    name: "Roasted/grilled/BBQ",
    code: "MEAT_FAT-ROASTED-GRILLED-BBQ",
  },
  {
    name: "Steamed/soup",
    code: "MEAT_FAT-STEAMED-SOUP",
  },

  // Fish/Seafood
  {
    name: "Raw (e.g. sashimi)",
    code: "F_SF_FISH-RAW",
  },
  {
    name: "Stir fried/pan fried/deep fried",
    code: "F_SF_FISH-STIR",
  },
  {
    name: "Steamed",
    code: "F_SF_FISH-STEAMED",
  },
  {
    name: "With coconut milk/meat",
    code: "F_SF_FISH-WITH-COCONUT",
  },
  {
    name: "Grilled",
    code: "F_SF_FISH-GRILLED",
  },
  {
    name: "Canned (e.g. tuna)",
    code: "F_SF_FISH-CANNED",
  },
  {
    name: "Raw",
    code: "F_SF_RAW",
  },
  {
    name: "Stir fried/pan fried/deep fried",
    code: "F_SF_STIR",
  },
  {
    name: "Steamed",
    code: "F_SF_STEAMED",
  },
  {
    name: "With coconut milk/meat",
    code: "F_SF_WITH-COCONUT",
  },
  {
    name: "Grilled",
    code: "F_SF_GRILLED",
  },
  {
    name: "Canned",
    code: "F_SF_CANNED",
  },
  // Processed foods
  {
    name: "Sausages",
    code: "P_F_SAUSAGES",
  },
  {
    name: "Bacon",
    code: "P_F_BACON",
  },
  {
    name: "Ham",
    code: "P_F_HAM",
  },
  {
    name: "Jerky",
    code: "P_F_JERKY",
  },
  {
    name: "Fish cakes",
    code: "P_F_FISH-CAKES",
  },
  {
    name: "Fish balls",
    code: "P_F_FISH-BALLS",
  },
  {
    name: "Canned meat",
    code: "P_F_CANNED-MEAT",
  },
  // Eggs
  {
    name: "Boiled/poached/in soup/steamed",
    code: "EGGS_BOILED",
  },
  {
    name: "Fried/scrambled",
    code: "EGGS_FRIED",
  },
  {
    name: "Boiled/poached/in soup/steamed",
    code: "EGGS_BOILED-WHITE",
  },
  {
    name: "Fried/scrambled",
    code: "EGGS_FRIED-WHITE",
  },
  // Desserts/Local Snacks
  {
    name: "With coconut milk/cream (e.g pulut hitam, bubur cha cha)",
    code: "DESSERT_SNACK_WITH-COCONUT-SOUP",
  },
  {
    name: "Without coconut milk (e.g. cheng tng, green bean soup, tau suan).",
    code: "DESSERT_SNACK_WITHOUT-COCONUT-SOUP",
  },
  {
    name:
      "With coconut/coconut milk/coconut cream (e.g. kueh sarlat, kueh dadar, putu mayam, idli)",
    code: "DESSERT_SNACK_WITH-COCONUT-STEAMED",
  },
  {
    name: "Without coconut milk (kueh tutu, soon kueh)",
    code: "DESSERT_SNACK_WITHOUT-COCONUT-STEAMED",
  },
  {
    name: "Fried snacks (e.g. you tiao, goreng pisang, Indian rojak)",
    code: "DESSERT_SNACK_FRIED-SNACK",
  },
  {
    name: "Dim Sum - steamed (e.g. chee cheong fun, dumplings, rice dumplings)",
    code: "DESSERT_SNACK_DIM-SUM",
  },
  {
    name:
      "Dim sum - fried/deep fried (e.g. fried carrot cake, wanton, char siew puff)",
    code: "DESSERT_SNACK_DIM-SUM-FRIED",
  },
  {
    name: "Sweet Indian snacks (e.g. burfi, halwa)",
    code: "DESSERT_SNACK_SWEET-INDIAN-SNACKS",
  },
  // Biscuits, Pastries and Cakes
  {
    name: "Plain biscuits",
    code: "CAKE_PLAIN-BISCUITS",
  },
  {
    name: "Cream filled biscuits/shortbread",
    code: "CAKE_CREAM-FILLED",
  },
  {
    name: "Puff/flaky pastries (croissants, baked curry puffs etc)",
    code: "CAKE_PUFF-FLAKY-PASTRIES",
  },
  {
    name: "Plain butter cake/fruit cake",
    code: "CAKE_PLAIN-BUTTER",
  },
  {
    name: "Sponge cakes",
    code: "CAKE_SPONGE-CAKES",
  },
  {
    name: "Cream cakes",
    code: "CAKE_CREAM-CAKES",
  },
  // Fast Foods
  {
    name: "Burgers, with beef or chicken",
    code: "F_F_BURGERS-BEEF-CHICKEN",
  },
  {
    name: "Burgers, fish",
    code: "F_F_BURGERS-FISH",
  },
  {
    name: "French fries",
    code: "F_F_FRENCH-FRIES",
  },
  {
    name: "Pizza",
    code: "F_F_PIZZA",
  },
  {
    name: "Mashed potato with gravy",
    code: "F_F_MASHED-POTATO",
  },
  // Sweetened beverages
  {
    name:
      "Sweetened beverages (e.g. soft drinks, packet drinks, yoghurt drinks)",
    code: "SW_B_SWEETENED-BEVERAGES",
  },
  // Nuts
  {
    name: "Dry roasted",
    code: "NUTS_DRY-ROASTED",
  },
  {
    name: "Fried",
    code: "NUTS_FRIED",
  },
  // Titbits/Snacks
  {
    name:
      "Fried salty snacks (crisps, prawn crackers, keropok, salted biscuits etc)",
    code: "TITBIT_SNACK_FRIED",
  },
  {
    name: "Ice cream",
    code: "TITBIT_SNACK_ICE-CREAM",
  },
  {
    name: "Chocolate",
    code: "TITBIT_SNACK_CHOCOLATE",
  },
  // Beverages
  {
    name: "Coffee without sugar",
    code: "BEVERAGES_COFFEE-WITHOUT-SUGAR",
  },
  {
    name: "Coffee with sugar",
    code: "BEVERAGES_COFFEE-WITH-SUGAR",
  },
  {
    name: "Tea without sugar",
    code: "BEVERAGES_TEA-WITHOUT-SUGAR",
  },
  {
    name: "Tea with sugar",
    code: "BEVERAGES_TEA-WITH-SUGAR",
  },
  {
    name: "Malt beverages (e.g. hot chocolate, Horlicks, Milo, Ovaltine)",
    code: "BEVERAGES_MALT-BEVERAGES",
  },
  // Milk & Dairy Products
  {
    name: "Full cream milk (fresh, UHT, powder)",
    code: "MILK_DAIRY_FULL-CREAM-MILK",
  },
  {
    name: "Low fat milk (fresh, UHT, Powder)",
    code: "MILK_DAIRY_LOW-FAT-MILK",
  },
  {
    name: "Skimmed milk (fresh, UHT, powder)",
    code: "MILK_DAIRY_SKIMMED-MILK",
  },
  {
    name: "Regular",
    code: "MILK_DAIRY_REGULAR",
  },
  {
    name: "Low fat (including frozen yoghurt)",
    code: "MILK_DAIRY_LOW-FAT",
  },
  {
    name: "Kerds, Kefir",
    code: "MILK_DAIRY_KERDS-KEFIR",
  },
  {
    name: "Cheese/cheese spread",
    code: "MILK_DAIRY_CHEESE-SPREAD",
  },
  {
    name: "Low fat cheese",
    code: "MILK_DAIRY_LOW-FAT-CHEESE",
  },
  // Soya Products
  {
    name: "Soya milk (fresh/packet/can)",
    code: "SOYA_SOYA-MILK",
  },
  {
    name: "Soya beancurd (tau huay)",
    code: "SOYA_SOYA-BEANCURD",
  },
  {
    name: "Tofu",
    code: "SOYA_TOFU",
  },
  // Vegetarian (Chinese)
  {
    name: "Fried vegetarian noodles",
    code: "VEGETARIAN_CHINESE_FRIED-VEGETARIAN-NOODLES",
  },
  {
    name: "Gluten (mock char siew/duck)",
    code: "VEGETARIAN_CHINESE_GLUTEN",
  },
  {
    name: "Fried beancurd sheet",
    code: "VEGETARIAN_CHINESE_FRIED-BEANCURD-SHEET",
  },
  // Alcoholic drinks
  {
    name: "Beer",
    code: "ALCOHOLIC_DRINKS_BEER",
  },
  {
    name: "Cider",
    code: "ALCOHOLIC_DRINKS_CIDER",
  },
  {
    name: "Stout",
    code: "ALCOHOLIC_DRINKS_STOUT",
  },
  {
    name: "Wine",
    code: "ALCOHOLIC_DRINKS_WINE",
  },
  {
    name: "Rice wine",
    code: "ALCOHOLIC_DRINKS_RICE-WINE",
  },
  {
    name: "Spirits",
    code: "ALCOHOLIC_DRINKS_SPIRITS",
  },
  // How often do you have the following

  // Baby
  // Carbohydrate
  {
    name: "Bread (White, wholemeal)",
    code: "BB_BEAD",
  },
  {
    name: "Cereal (Instant, manufactured)",
    code: "BB_CEREAL",
  },
  {
    name: "Chapatti",
    code: "BB_CHAPATTI",
  },
  {
    name: "Dosai",
    code: "BB_DOSAI",
  },
  {
    name: "Millet (Ragi)",
    code: "BB_MILLET",
  },
  {
    name: "Oatmeal",
    code: "BB_OATMEAL",
  },
  {
    name: "Pasta (Spaghetti, Macaroni, Noodles, Vermicelli)",
    code: "BB_PASTA",
  },
  {
    name:
      "Rice (Porridge, Rice congee, Nasi Lemak, Nasi Biryani, Fried Rice, Butter Rice)",
    code: "BB_RICE",
  },
  {
    name: "Noodles (Mee Hoon, Ban Mian, Yellow Noodles)",
    code: "NODDLES",
  },
  {
    name: "Pizza",
    code: "BB_PIZZA",
  },
  {
    name: "Prata",
    code: "BB_PRATA",
  },
  {
    name: "Porridge (rice, pumpkin, instant)",
    code: "BB_PORRIDGE",
  },
  {
    name: "Quinoa",
    code: "QUINOA",
  },
  {
    name: "Semolina (Porridge, Upma, Kheer)",
    code: "SEMOLINA",
  },
  // vegetables
  {
    name: "Bulbs (Onions, Spring Onions, Garlic, Leek, Ginger)",
    code: "BULBS",
  },
  {
    name:
      "Flower Vegetables (Cauliflower, Broccoli, Kai lan, Banana flower, Bean sprouts, Bitter gourd, Bottle gourd, Winter melon, Snake gourd, Ivy gourd)",
    code: "FLOWERS",
  },
  {
    name:
      "Leafy Vegetables (Fenugreek leaves, Drumstick leaves, Spinach, Sweet potato leaves, Cabbage, Chinese cabbage (xiaobaicai), Chyesim)",
    code: "LEAFY",
  },
  {
    name: "Tubers (Yam Huai San, Potato)",
    code: "TUBERS",
  },
  {
    name:
      "Root Vegetables (Beetroot, Carrot, Parsnip, Radish, Turnip, Lotus Root, Sweet Potato)",
    code: "ROOT",
  },
  {
    name: "Stem Vegetables (Asparagus, Celery)",
    code: "STEM",
  },
  {
    name:
      "Vegetable fruits (Capsicum, Courgette, Cucumber, Eggplant, Pumpkin, Tomato)",
    code: "BABY_VEGETABLE",
  },
  {
    name:
      "Seeds (Corns, French beans, Cluster beans, Long beans, Rajma, Peas, Snow Peas, Green peas, Lotus seed)",
    code: "SEEDS",
  },
  {
    name: "Mushroom",
    code: "MUSHROOM",
  },
  {
    name: "Wolfberries",
    code: "WOLF_BERRIES",
  },
  // LEGUME_SOY: "LEGUME_SOY", // Legumes and Soy Items
  {
    name: "Beans (Green beans, red beans)",
    code: "BEANS",
  },
  {
    name: "Legumes (Dal, Lentils, Chickpeas, Green gram)",
    code: "LEGUMES",
  },
  {
    name: "Tau kwa, Mung bean, Tofu, Beancurd, Tau pok",
    code: "TAU_KWA",
  },
  // BABY_FRUITS: "BABY_FRUIT", // Baby fruits
  {
    name:
      "Fleshy Fruits (Apple, Dragon Fruit, Durian, Jack fruit, Kiwi, Pear, Pineapple, Banana, Longan)",
    code: "FLESHY_FRUITS",
  },
  {
    name: "Other fleshy Fruits (Papaya)",
    code: "OTHER_FLESHY",
  },
  {
    name:
      "Berries (Blueberries, Cranberries, Cherry, Grapes, Lychee, Plum, Prune, Strawberry)",
    code: "BERRIES",
  },
  {
    name: "Citrus (Orange, Mandarin)",
    code: "CITRUS",
  },
  {
    name: "Stone Fruits (Mango, Peaches, Avocado)",
    code: "STONE",
  },
  // FISH_MEAT_POULTRY: "FISH_MEAT_POULTRY", // Fish, Meat and Poultry
  {
    name: "Beef",
    code: "BEEF",
  },
  {
    name: "Chicken",
    code: "CHICKEN",
  },
  {
    name: "Pork",
    code: "PORK",
  },
  {
    name: "Mutton or Lamb",
    code: "MUTTON",
  },
  {
    name: "Turkey",
    code: "TURKEY",
  },
  {
    name: "Processed meat (Sausages, Nuggets, Wonton)",
    code: "PROCESS_MEAT",
  },
  {
    name:
      "Oily Fish (Salmon, Anchovies, Mackerel, Trout, Sardines, Tuna, Silver)",
    code: "OILY_FISH",
  },
  {
    name: "Other seafood (Squids, Scallops, Crabs, Prawns)",
    code: "OTHER_S_F",
  },
  {
    name: "Egg (boiled, scrambled, steamed, fried, omelette)",
    code: "EGG",
  },
  // DAIRY: "DAIRY", // Dairy Products
  {
    name: "Cheese",
    code: "DAIRY_CHEESE",
  },
  {
    name: "Milk liquid (Fresh, Pasteurized, Plain, Low fat, Hi-cal, UHT Milk)",
    code: "MILK_LIQUID",
  },
  {
    name: "Milk Powder (Formula)",
    code: "MILK_POWDER",
  },
  {
    name: "Yogurt",
    code: "YOGURT",
  },
  {
    name: "Others (eg. Ice-cream, custard, cultured drinks, pudding)",
    code: "OTHER_DAIRY",
  },
  // SNACKS: "SNACKS", // Snacks
  {
    name: "Biscuits, short breads, wafers and cookies",
    code: "BISCUITS",
  },
  {
    name: "Bun (Pau with fillings, Mantou)",
    code: "BUN",
  },
  {
    name:
      "Cake (Pastries, Muffins, Tart, Pancakes, Waffles, Fruit bars, Appam)",
    code: "CAKE",
  },
  {
    name:
      "Confectionery (Candies, Lollipops, Jellies, Marshmallows, Chocolate)",
    code: "CONFECTIONERY",
  },
  {
    name: "Beancurd",
    code: "BEAN_CURD",
  },
  {
    name: "Savory Snacks (Muruku, Adai, fritters)",
    code: "SAVORY",
  },
  {
    name:
      "Sweet snacks (Laddo, Gulab Jaman, Kesari, Halva, Sooji pudding, Putu Mayam, Egg Tarts, Puteri Salat)",
    code: "SWEET_SNACK",
  },
  {
    name: "Nuts (Peanuts, Almonds)",
    code: "NUTS",
  },
  {
    name: "Savory Snack (Potato chips, Spring rolls, Crackers and Papadums)",
    code: "SAVORY_SNACK",
  },
  {
    name: "Preserved fruits and Raisins",
    code: "PRESERVED",
  },
  // BABY_BEVERAGES: "BABY_BEVERAGES", // Baby beverages
  {
    name: "Fruit Juices",
    code: "F_JUICES",
  },
  {
    name: "Milk shakes and Smoothies, Flavored, Milo, Fruit, Lassi, Bandung",
    code: "MILK_SHAKES",
  },
  {
    name: "Plain water",
    code: "PLAIN_WATER",
  },
  {
    name: "Soft drinks (Ribena, Barley, Green, Lemon, Ice, Bubble)",
    code: "SOFT_DRINK",
  },
  {
    name: "Soybean milk",
    code: "SOYBEAN",
  },
  // BABY_F_F: "BABY_F_F", // Baby fast food
  {
    name: "Burger",
    code: "BURGER",
  },
  {
    name: "French Fries",
    code: "FRENCH_FRIES",
  },
  {
    name: "Fried chicken (KFC)",
    code: "FRIED_CHICKEN",
  },
  {
    name:
      "Potato dishes (Hash brown, Whipped potato (KFC, Mashed Potato, Nando's))",
    code: "POTATO_DISHED",
  },
  {
    name: "Hotcakes (McD)",
    code: "HOT_CAKES",
  },
  {
    name: "Pizza",
    code: "PIZZA",
  },
  // SEASONING: "SEASONING", // Seasoning
  {
    name: "Savory Sauces (Oyster, pasta, Soy, white or dark)",
    code: "SAVORY_SAUCES",
  },
  {
    name: "Sweet Sauces (Apple sauce, Tomato, Ketchup)",
    code: "SWEET_SAUCES",
  },
  {
    name: "Spreads (Honey, Nutella, Kaya)",
    code: "SPREADS",
  },
  {
    name: "Other (Sambal, Chicken essence)",
    code: "OTHER_SEASONING",
  },
  // SUPPLEMENTS: "SUPPLEMENTS", // Supplements
  {
    name:
      "Vitamin Supplements (B12 vitamin syrup, Cod liver oil (Scott's emulsion))",
    code: "VITAMIN_SUP",
  },
  {
    name: "Other supplements (Chlorophyll powder, DHA probiotics, Spirulina)",
    code: "OTHER_SUP",
  },
];
