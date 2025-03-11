import { dbContext } from "../db/DbContext.js"

class HousesService {

  async getAllHouses() {
    const houses = await dbContext.Houses.find().populate('creator')
    return houses
  }

  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId).populate('creator')
    return house
  }

  async getHouseByQuery(houseQuery) {
    const sortBy = houseQuery.sortBy
    delete houseQuery.sortBy

    const house = await dbContext.Houses
      .find(houseQuery)
      .populate('creator')
      .sort(sortBy)
    return house
  }

}

export const housesService = new HousesService()