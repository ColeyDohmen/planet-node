import ValueSchema from "../models/Value";
import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
   Star = mongoose.model("Star", StarSchema);
  Planet = mongoose.model("Planet", PlanetSchema);
  Moon = mongoose.model("Moon", MoonSchema);
}


export const dbContext = new DbContext();
