import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {

    async create(body){
        return await dbContext.Star.create(body)
    }
  async find(query={}) {
    return await dbContext.Star.find(query).populate("galaxy", "title description");
  }
  async findById(id) {
    // let value = await dbContext.Values.findById(id);
    // if (!value) {
    //   throw new BadRequest("Invalid Id");
    // }
    // return value;
  }
}

export const starsService = new StarsService();