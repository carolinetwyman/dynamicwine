const mongoose = require("mongoose");
const db = require("../models");

// Empty the Users and insert the user below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/winelist"
);

const wineSeed = [
  {
    wine_name: "Menti",
    year: "2018",
    color: "White",
    carbonation: "Sparkling",
    grape: "Garganega",
    grape_detail: "Garganega",
    full_name: "Roncaie sui lieviti",
    country: "Italy",
    region: "Veneto",
    address: "UFFICI /HEADQUARTER, via Dr. Bruzzo, 24, 36053 Gambellara VI, Italy",
    PPB: 44,
    size: "Bottle",
    PPG: "",
    details: "Minerally nose, and yeasty. Light on the palate with notes of lemon serbet, pithy frapefruit, green apple, pear, and brioche. Slight salinity in finish",
    date: new Date(Date.now())
  },
  {
    wine_name: "Raventos I Blanc",
    year: "2017",
    color: "White",
    carbonation: "Sparkling",
    grape: "Sparkling White Blend",
    grape_detail: "Macabeo, Parellada, Xarello",
    full_name: "Blanc de Blancs",
    country: "Spain",
    region: "Barcelona",
    address: "Plaça del Roure, S/N, 08770 Sant Sadurní d'Anoia, Barcelona, Spain",
    PPB: 44,
    size: "Glass",
    PPG: 10,
    details: "Raventos is one of our favorite estates in Catalonia. The families’ winemaking roots date back over 500 years and the exceptional quality of their wines further proves their passion. This biodynamic blend of 60% Macabeo, 20% Parellada, and 20% Xarel-lo is expansive and elegant, it spends a minimum of 15 months on the lees and shows a beautiful balance of minerality, white peach, floral overtones, and toasted brioche.",
    date: new Date(Date.now())
  },
  {
    wine_name: "Mirco Mariotti",
    year: "NV",
    color: "White",
    carbonation: "Sparkling",
    grape: "Fortana",
    grape_detail: "Fortana",
    full_name: "Set e Mez",
    country: "Italy",
    region: "Dell'Emilia",
    address: "Via Rosa Bardelli, 12, 44011 Argenta FE, Italy",
    PPB: 48,
    size: "Glass",
    PPG: 11,
    details: "This Italian ancestrale methode sparkler comes from very old Fortana vines planted to sandy soils just west of the Adriatic Sea. Mirco ferments in concrete and secondary fermentation takes place in the bottle using fresh juice from the same vintage. The resulting wine is hazy, with expansive carbonation, and balanced aromas and flavors of tart red fruit, sandy minerals, sea salt, and grape skin. ",
    date: new Date(Date.now())
  },
  {
    wine_name: "Ameztoi",
    year: "2019",
    color: "White",
    carbonation: "Still",
    grape: "Txakolina",
    grape_detail: "Hondurribi Zuri Txakolina",
    full_name: "Getariako",
    country: "Spain",
    region: "Basque Country",
    address:  "Lugar Barrio Eitzaga, 10, 20808 Eitzaga, SS, Spain",
    PPB: "44",
    size: "Glass",
    PPG: 11,
    details: "In the traditional style of txakolina from Getaria, this light and crisp wine is bottled with a little bit of residual carbon dioxide to give it its signature natural spritz.",
    date: new Date(Date.now())
  },
  {
    wine_name: "Domaine Mercouri",
    year: "2017",
    color: "Red",
    carbonation: "Still",
    grape: "Red Blend",
    grape_detail: "Refosco, Mavrodaphne",
    full_name: "Vin des Letinon",
    country: "Greece",
    region: "Peloponnesus",
    address: "Korakochori 271 00, Greece",
    PPB: 50,
    size: "Glass",
    PPG: 13,
    details: "From the western edge of the Peloponnesus, from a place surrounded by palm trees and pines and a salty sea breeze, comes this stately, Burgundian blend of Refosco and Mavrodaphne, delivering lean sour-cherry, black raspberry and tobacco, violets and rosemary, all held in the firm yet gentle grip of burnt cinnamon and cedar tannins. We're simply delighted we can pour this for you--the sexiest red you'll sip all year, we swear.",
    date: new Date(Date.now())
  },
  {
    wine_name: "Weingut Schmitt",
    year: "2019",
    color: "White",
    carbonation: "Still",
    grape: "White Field Blend",
    grape_detail: 'Scheurebe, Pinot Blanc, Huxelrebe, Pinot Gris, Ortega',
    full_name: "Frei, Korper, Kultur",
    country: "Germany",
    region: "Rheinhessen",
    address: "Sülzer Weg, 67283 Obrigheim (Pfalz), Germany",
    PPB: 62,
    size: "Glass",
    PPG: 11.5,
    details: "Rheinhessen is quickly becoming one of the most exciting regions in Germany for younger wine growers experimenting with natural viticulture. Bianka and Daniel Schmitt are two of our favorites in the area and this wild field blend saw a three-week maceration lending this bottling a hazy color, bright aromatics, and a palate of orange zest, limestone, crisp acidity, and more…",
    date: new Date(Date.now())
  },
  {
    wine_name: "Clos de Tue-Boeuf",
    year: "2019",
    color: "White",
    carbonation: "Still",
    grape: 'Sauvignon Blanc',
    grape_detail: 'Sauvignon Blanc',
    full_name: "Vin Blanc",
    country: "France",
    region: "Vin de France",
    address: "6 Route de Seur, 41120 Les Montils, France",
    PPB: 48,
    size: "Glass",
    PPG: 11,
    details: "Our longtime friend Thierry Puzelat makes one of the wildest and most delicious expressions of Sauvignon Blanc around. Sourced from several organically farmed vineyards near his home in Cheverny, this bottling displays focused acidity and flavors of lean tropical fruit, citrus zest, clay, and more",
    date: new Date(Date.now())
  },
  {
    wine_name: "Domaine Taillandier",
    year: "2019",
    color: "Rose",
    carbonation: "Still",
    grape: "Rose Blend",
    grape_detail: 'Cinsault, Syrah, Carignan',
    full_name: "Six Roses",
    country: "France",
    region: "Languedoc-Roussillon",
    address: "Le Château de Varennes, 49170 Savennières, France",
    PPB: 44,
    size: "Glass",
    PPG: 10,
    details: "Benjamin Taillandier naturally works 9.5 hectacres in Minervois and stylistically he prefers to bottle lighter, more approachable wines than the region is commonly known for. This focused rose is ideal late summer/early autumn drinking, the cinsault lends ample red fruit flavors while the Syrah and Carignan give the wine more depth, spice, and minerality",
    date: new Date(Date.now())
  },
  {
    wine_name: "Tiago Teles",
    year: "2017",
    color: "Red",
    carbonation: "Still",
    grape: 'Alfrocheiro',
    grape_detail: 'Alfrocheiro',
    full_name: "Riaz",
    country: "Portugal",
    region: "Vihno de Portugal",
    address: "R. da Primavera 96, 4470-605 Nogueira, Portugal",
    PPB: 50,
    size: "Glass",
    PPG: 11.5,
    details: "For nearly a decade, Tiago worked as a wine journalist and Portuguese wine advocate before starting his estate in 2012. He and his father naturally farm costal vineyards planted to some of Portugal’s lesser-known indigenous varietals and this blend of Alfrochiero and Bical is a perfect red for Chicago cooler months. Medium-bodied and edgy, the palate shows dried black fruit, soft spice, mountain herbs, and granite.",
    date: new Date(Date.now())
  },
  {
    wine_name: "Bedrock Wine Co.",
    year: "2018",
    color: "Red",
    carbonation: "Still",
    grape: 'Zinfandel',
    grape_detail: "Old Vine Zinfandel",
    full_name: "Old Vine",
    country: "USA",
    region: "Sonoma",
    address: "414 1st St E, Sonoma, CA 95476",
    PPB: 50,
    size: "Glass",
    PPG: 11.5,
    details: "Morgan Twain-Peterson of Bedrock is widely regarded as one of the most talented young producers in the Cali. This Zinfandel led blend is from 3 Sonoma vineyards planted in 1888, 1896, and 1905. The average vine age here is just over 80 years, lending a bit more depth and mineral to this intriguing bottling. The wine is rich in texture and character showing a balanced palate of brambly fruit, bitter chocolate, mild spice, and silky tannin.",
    date: new Date(Date.now())
  },
  {
    wine_name: "Stirm Wine Company",
    year: "2019",
    color: "White",
    carbonation: "Sparkling",
    grape: 'Albarino',
    grape_detail: 'Albarino',
    full_name: "Los Chuchaquis",
    country: "USA",
    region: "Santa Ynez Valley",
    address: "65 Rogge Ln, Watsonville, CA 95076",
    PPB: 58,
    size: "Bottle",
    PPG: "",
    details: "This is the first sparkling wine release from Ryan Stirm and it has all of the glou-glou PetNat freshness and high-toned Albariño fruit you’d hope for. Bottled without filtration or SO2, this wine is turbid, tart, and so refreshing it begs for another sip.",
    date: new Date(Date.now())
  },
  {
    wine_name: "Rippon",
    year: "2016",
    color: "White",
    carbonation: "Still",
    grape: 'Riesling',
    grape_detail: "Riesling",
    full_name: "Mature Vine Riesling",
    country: "New Zealand",
    region: "Central Otago",
    address: "Wanaka 9305, New Zealand",
    PPB: 65,
    size: "Bottle",
    PPG: "",
    details: "Here’s another terrific bottling from our dear friend Nick Mills, his non-interventionalist style thoughtfully displays the uniqeness of his hillside vineyard perched above the picturesque Lake Wanaka. From 20-30 year old vines, this viscous Riesling shows bright acidity and layered flavors of kumquat, lemongrass, and a long mineral-driven finish balanced by a touch of sweetness.",
    date: new Date(Date.now())
  },
  {
    wine_name: "Frank Cornelissen",
    year: "2019",
    color: "Rose",
    carbonation: "Still",
    grape: "Rose Blend",
    grape_detail: 'Malvasia, Catarratto, Nerello, Mascalese, Insolia',
    full_name: "Susucaru",
    country: "Italy",
    region: "Mt. Etna",
    address: "Italy, Provincia di Catania, Castiglione di Sicilia, Via Canonico Zumbo 1 Passopiaciaro",
    PPB: 66,
    size: "Bottle",
    PPG: "",
    details: "A harmonious blend of red and white varietals (Malvasia, Catarratto, Nerello Mascalese, & Insolia), this natural rose is both funky and fresh. The wine is medium bodied, pouring a deep scarlet, with lively acidity and flavors of raspberry lambic, volcanic minerals, creamy lees, and more…",
    date: new Date(Date.now())
  },
  {
    wine_name: "Eyrie Vinyards",
    year: "2016",
    color: "Red",
    carbonation: "Still",
    grape: 'Pinot Noir',
    grape_detail: 'Pinot Noir',
    full_name: "Trousseau",
    country: "USA",
    region: "Willamette Valley",
    address: "935 NE 10th Ave, McMinnville, OR 97128",
    PPB: 75,
    size: "Bottle",
    PPG: "",
    details: "Jimi Brooks - Russian lit fanatic, biodynamicist, talented chef, and francophile – was a great friend of ours; his sudden passing at the age of 38 in 2004 left us feeling like a light was dimmed in the wine world.  It has since been resumed by friends in the Willamette Valley – his wines are now being made, under his name, as he would have wished, by his friend Chris Williams.  Pure and spicy and full of bright fruit, they express the best of what Oregon can show.",
    date: new Date(Date.now())
  },
  {
    wine_name: "Pearl Morissette",
    year: "2017",
    color: "Red",
    carbonation: "Still",
    grape: "Cabernet Franc",
    grape_detail: 'Cabernet Franc, Gamay,Pinot Noir',
    full_name: "Metis Rouge",
    country: "Canada",
    region: "Niagra Peninsula",
    address: "3953 Jordan Rd, Jordan Station, ON L0R 1S0, Canada",
    PPB: 66,
    size: "Bottle",
    PPG: "",
    details: "Francois Morissette makes some of our favorite Cabernet Franc bottlings in North America. In 2017 he blended in a touch of Gamay and Pinot Noir and we couldn’t be more delighted with how this wine turned out. The aromatic profile brings Chinon to mind and the palate is focused and bright showing black cherry, potting clay, dried herbs, and a touch of funk.",
    date: new Date(Date.now())
  }
];

db.Wine
  .remove({})
  .then(() => db.Wine.collection.insertMany(wineSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });