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
    const pageNumber = parseInt(houseQuery.page) || 1
    const houseLimit = 5
    const skipAmount = pageNumber * houseLimit - houseLimit
    delete houseQuery.page

    const sortBy = houseQuery.sortBy
    delete houseQuery.sortBy

    const houseCount = await dbContext.Houses.countDocuments(houseQuery)
    const totalPages = Math.ceil(houseCount / houseLimit) || 1

    const house = await dbContext.Houses
      .find(houseQuery)
      .limit(houseLimit)
      .skip(skipAmount)
      .sort(sortBy)
      .populate('creator')


    const responseObj = {
      house: house,
      currentPage: pageNumber,
      totalHouses: houseCount,
      totalPages: totalPages
    }
    return responseObj
  }

}

export const housesService = new HousesService()