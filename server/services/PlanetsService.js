import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {

    async create(body){
        return await dbContext.Planet.create(body)
    }
  async find(query={}) {
    return await dbContext.Planet.find(query).populate("star", "title description");
  }
  async findById(id) {
    // let value = await dbContext.Values.findById(id);
    // if (!value) {
    //   throw new BadRequest("Invalid Id");
    // }
    // return value;
  }
}

export const planetsService = new PlanetsService();