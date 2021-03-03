import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxiesService {

    async create(body){
        return await dbContext.Galaxy.create(body)
    }
  async find(query={}) {
    return await dbContext.Galaxy.find(query);
  }
  async findById(id) {
    // let value = await dbContext.Values.findById(id);
    // if (!value) {
    //   throw new BadRequest("Invalid Id");
    // }
    // return value;
  }
}

export const galaxiesService = new GalaxiesService();