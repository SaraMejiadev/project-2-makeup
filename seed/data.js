import db from "../db/connection.js";
import Eyeshadow from "../models/eyeshadow.js";
import Foundation from "../models/foundation.js";
import Lipstick from "../models/lipstick.js";
import Mascara from "../models/mascara.js";
import eyeshadows from "./eyeshadows.json" assert { type: "json" };
import foundations from "./foundations.json" assert { type: "json" };
import lipsticks from "./lipsticks.json" assert { type: "json" };
import mascaras from "./mascaras.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();

  // Insert Data
  await Eyeshadow.create(eyeshadows);
  await Foundation.create(foundations);
  await Lipstick.create(lipsticks);
  await Mascara.create(mascaras);

  console.log(chalk.magenta("Eyeshadows, Mascara, Eyeshadows, and Foundation created!"));

  // Close DB Connection
  await db.close();
};

insertData();

// 20231031112251
// http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow

// 20231031112637
// http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation

// 20231031112637
// http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation


