import { dbContext } from "../db/DbContext.js"

class HousesService {
  async getAllHouses() {
    const houses = await dbContext.Houses.find().populate('creator')
    return houses
  }

}

export const housesService = new HousesService()