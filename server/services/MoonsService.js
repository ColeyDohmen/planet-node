import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {

    async create(body){
        return await dbContext.Moon.create(body)
    }
  async find(query={}) {
    return await dbContext.Moon.find(query).populate("planet", "title description");
  }
  async findById(id) {
    // let value = await dbContext.Values.findById(id);
    // if (!value) {
    //   throw new BadRequest("Invalid Id");
    // }
    // return value;
  }
}

export const moonsService = new MoonsService();