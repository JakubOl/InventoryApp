const Item = require("./models/item");
const Category = require("./models/category");
require("dotenv").config();

const mongoose = require("mongoose");
const mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createItem = async (name, category, price, description, inStock) => {
  itemDetail = { name, category, price, description, inStock };

  const item = new Item(itemDetail);

  item.save(function (err) {
    if (err) {
      console.log(err, null);
      return;
    }
    console.log("New item: " + item);
  });
};

function categoryCreate(name, description, cb) {
  const category = new Category({ name });

  category.save(function (err) {
    if (err) {
      console.log(err, null);
      return;
    }
    console.log("New Category: " + category);
  });
}

categoryCreate("Amino Acids");
categoryCreate("Carbo");
categoryCreate("Creatines");
categoryCreate("Diet food");
categoryCreate("Energy and Concentration");
categoryCreate("Fat burners");
categoryCreate("Intra-workout");
categoryCreate("Mass gainers");
categoryCreate("Pre-workouts");
categoryCreate("Proteins");
categoryCreate("Testosterone boosters");
categoryCreate("Vitamins & Minerals");

// createItem(
//   "BCAA",
//   "Amino Acids",
//   14.99,
//   "BCAA + Green Tea Shock Shot offers amino acids in a convenient liquid form. BCAA + Green Tea Shock Shot combination of leucine, isoleucine and valine in a 2:1:1 ratio is the key to effective post-workout regeneration, reduction of catabolism during exercise and building of pure muscle mass. BCAA amino acids should be used both during the period of reduction and mass building."
// );
// createItem(
//   "Glutamine",
//   "Amino Acids",
//   12.99,
//   "It is high-quality, pharmaceutically pure l-glutamine, additionally supplemented with the amino acid taurine and vitamin C. Glutamine is one of the three most important and most abundant amino acids in the human body. It participates in a number of metabolic processes. Glutamine significantly accelerates regeneration processes, improves the immune system and concentration and response time. Glutamine Recovery Amino is intended for athletes that want to eliminate the negative effects of intensive training.",
//   2
// );
// createItem(
//   "Creatine Malate",
//   "Creatines",
//   11.99,
//   "3-Creatine Malate is the highest quality creatine malate with the addition of the amino acid taurine and vitamin B6. Creatine malate is an improved form of creatine characterized by better solubility and greater chemical stability. Vitamin B6 contributes to the reduction of tiredness and fatigue and contributes to the proper metabolism of protein and glycogen.",
//   1
// );
// createItem(
//   "Creatine Monohydrate",
//   "Creatines",
//   14.99,
//   "TRI CREATINE MALATE XTRACAPS is the highest quality creatine malate without unnecessary additives. Creatine malate is an improved form of creatine characterized by better solubility and greater chemical stability.",
//   121
// );
// createItem(
//   "Nutlove",
//   "Diet food",
//   8.99,
//   "Why buy NUTLOVE CHOCO HAZELNUT? CHOCOLATE CREAM with crunchy hazelnut pieces Real cocoa paste Real milk chocolate chips with no added sugar No palm oil No added sugar! A perfect snack any time of day GOES PERFECTLY WITH PANCAKES, RICE CAKES, OMELETTES AND OTHER FIT DESSERTS NUTLOVE is love you can’t get enough of!",
//   123
// );
// createItem(
//   "Nutwhey",
//   "Diet food",
//   9.99,
//   "NUTWHEY ALMOND WHITE is a delicious high-protein almond cream with white chocolate flavour. Perfect accompaniment to your favourite omelettes and pancakes. Nutwhey also works brilliantly with rice cakes, fit desserts and baked goods. Whenever you crave something sweet, you can reach for Nutwhey without feeling guilty. Imagine the taste of thick cream that reminds you of your favourite candy or chocolate. This is what Nutwhey tastes like! Try it once and it will become a permanent part of your diet.",
//   55
// );
// createItem(
//   "In Jelly",
//   "Diet food",
//   6.99,
//   "Apples have a low glycemic index value, so they are recommended for people with diabetes or hyperglycemia (does not apply to juice). They contain vitamin C to boost immunity, and potassium and magnesium for a healthy nervous system. It helps clear and improve the elasticity of the skin, improves cell function and is involved in collagen production. Apples have very many benefits. Mangoes are a good source of vitamins and minerals as well as carbohydrates, giving us a solid boost of energy. The vitamins in mango include vitamin C, A, E, K and some B vitamins. The precious ingredients are complete with antioxidants. The fruit also supports health and has a positive effect on appearance.",
//   33
// );
// createItem(
//   "BCAA",
//   "Amino Acids",
//   14.99,
//   "BCAA + Green Tea Shock Shot offers amino acids in a convenient liquid form. BCAA + Green Tea Shock Shot combination of leucine, isoleucine and valine in a 2:1:1 ratio is the key to effective post-workout regeneration, reduction of catabolism during exercise and building of pure muscle mass. BCAA amino acids should be used both during the period of reduction and mass building.",
//   0
// );
// createItem(
//   "Burn4all",
//   "Fat burners",
//   17.99,
//   "Burn4ALL Extreme is a product created for everyone who dreams of effective and safe fat loss. Burn4ALL Extreme contains 5 extracts whose synergic and comprehensive action is a fast solution that facilitates weight loss.The addition of tyrosine and caffeine provides the necessary energy every time we need it. With regular use of Burn4All Extreme, your workouts will be longer, more intense and geared towards effective fat burning.",
//   22
// );
// createItem(
//   "Aerofuel",
//   "Intra-workout",
//   9.99,
//   "BCAA + Green Tea Shock Shot offers amino acids in a convenient liquid form. BCAA + Green Tea Shock Shot combination of leucine, isoleucine and valine in a 2:1:1 ratio is the key to effective post-workout regeneration, reduction of catabolism during exercise and building of pure muscle mass. BCAA amino acids should be used both during the period of reduction and mass building.",
//   77
// );
// createItem(
//   "BCAA",
//   "Amino Acids",
//   14.99,
//   "AEROFUEL INTRA BOOST is a formula for physically-active people containing hydrolysed corn starch, dextrose, creatine monohydrate and BCAA amino acids. Creatine enhances physical performance in case of consecutive short, high-intensity exercise. A beneficial effect occurs when 3 g of creatine is consumed daily.",
//   55
// );
// createItem(
//   "Bulk Pro",
//   "Mass gainers",
//   20.99,
//   "Bulk pro is a carbohydrate-protein complex whose task is to provide both the building blocks for muscles and the energy necessary for training. The carbohydrates used in GAINER DELICIOUS are characterized by a different absorption time, which ensures a gradual supply of energy, while the protein is a combination of buttermilk with whey protein concentrate. Protein contributes to the growth of muscle mass.",
//   99
// );
// createItem(
//   "Beta-alanine",
//   "Pre-workouts",
//   12.99,
//   "ALLNUTRITION – BETA ALANINE is a supplement based on the amino acid beta-alanine with the addition of taurine and vitamin B6 (for the unmaked version). Beta alanine is an organic chemical compound from the group of amino acids. It is a strong precursor of carnosine, which buffers the drop in pH associated, among others, with with the formation of lactic acid in the muscles during exercise. For this reason, it is a great post-workout supplement, affecting regeneration, reducing physical fatigue and having an anti-catabolic effect.",
//   12
// );
// createItem(
//   "Citrulline",
//   "Pre-workouts",
//   14.99,
//   "Citrulline malate is a combination of L-cytrulline and malate (malic acid). The product increases the physical performance, delays the feeling of fatigue and speeds up regeneration time. Citrulline supports blood flow to muscles, boosts strength and removes toxins, including lactic acid and ammonia, from the body.",
//   21
// );
// createItem(
//   "Egg Protein",
//   "Proteins",
//   5.99,
//   "EGG WHITE PROTEIN is a formula intended for physically active people, containing an egg protein concentrate. It is a protein with high biological value.Chicken egg proteins are an alternative to whey proteins. Compared to plant sources, they have a better amino acid profile due to the perfect balance of essential amino acids. They are a good option for those looking to increase their protein intake in the diet. Protein contributes to the growth of muscle mass and helps to maintain it.",
//   321
// );
// createItem(
//   "Vegetable Protein",
//   "Proteins",
//   18.99,
//   "Why buy SOY PROTEIN? SOY PROTEIN is a vegan protein supplement available in three delicious flavours, based on soya protein isolate, which makes up 89% of each serving. This makes the supplement vegan- and vegetarian-friendly. You no longer have to give up on your dream figure just because you can’t find a protein supplement for yourself.",
//   2121
// );
// createItem(
//   "Whey Isolate",
//   "Proteins",
//   23.99,
//   "AllNUTRITION ISOLATE PROTEIN is the highest-quality high-protein nutrient containing pure whey protein isolate without any other types of proteins. It is characterized by rapid absorption, a high level of branched chain amino acids and the highest biological value (BV 159). Protein helps maintain muscle mass and contributes to its growth.",
//   122
// );
// createItem(
//   "Whey Protein WPC",
//   "Proteins",
//   25.99,
//   "Whey Delicious Protein is a high-protein supplement based on a concentrate and whey protein isolate with the addition of buttermilk in a dry, concentrated form, giving the product a delicious, light, milky taste. Created for athletes as well as amateurs.",
//   54
// );
// createItem(
//   "Ashwagandha",
//   "Vitamins & Minerals",
//   11.99,
//   "ASHWAGANDHA + GUARANA is a product containing guarana extract standardised to 10% caffeine and Indian ginseng root extract (called ashwagandha). Regular use of the product can have a beneficial effect on your wellbeing.",
//   46
// );
// createItem(
//   "Magnesium",
//   "Vitamins & Minerals",
//   5.99,
//   "ALLNUTRITION Mag-Vit is a dietary supplement in the form of effervescent tablets, supplementing the diet with vitamins and magnesium, with lemon flavor. Magnesium is one of the essential elements for our body. It supports the proper functioning of muscles and the nervous system, reduces fatigue, supports the immune system and helps maintain healthy bones and teeth. If we want to be successful in sport and at the same time take care of health, we should ensure that the body is supplied with the right amount of vitamins and magnesium.",
//   765
// );
// createItem(
//   "Omega-3",
//   "Vitamins & Minerals",
//   6.99,
//   "ALLNUTRITION OMEGA 3 is a dietary supplement containing high-quality fish oil. It supplements the diet with Omega-3 fatty acids (EPA and DHA) and natural vitamin E. Using the product may help reduce the risk of cardiological diseases and improve the physical and mental condition. Moreover, it benefits bone health. The OMEGA 3 supplement protects joints from arthritis, relieves pain and stiffness accompanying rheumatic diseases. It also facilitates calcium absorption. Omega-3 acids can bind and dissolve saturated acids, which results in improving the body’s ability to cleanse itself of concrements.",
//   567
// );
// createItem(
//   "Vitamin C",
//   "Vitamins & Minerals",
//   7.99,
//   "ALLNUTRITION – ROSE HIPS is a dietary supplement containing natural vitamin C from wild rose extract.* Vitamin C helps with the normal functioning of the immune system and with protection of cells against oxidative stress. Wild rose fruits, i.e. rose hips, are valued for their numerous health-promoting properties. Rose hips are considered to be the most valuable material and are used in natural medicine, culinary arts and cosmetics. Rose hips support the functioning of the circulatory system. Vitamin C helps seal blood vessels, strengthens walls and arteries and prevents capillary breakage. Vitamin C also aids absorption of iron from the digestive system, thereby allowing the maintenance of adequate haemoglobin levels in the blood and preventing the development of anaemia.",
//   66
// );
// createItem(
//   "Vitamin D",
//   "Vitamins & Minerals",
//   7.99,
//   "VIT D3 4000 FORTE supplements the daily diet with vitamin D3, which is necessary for the proper functioning of the body. The practical and convenient form of gel capsules makes this sensational dietary supplement easy to swallow. This product provides as much as 2000% of the reference intake value for vitamin D!",
//   52
// );
