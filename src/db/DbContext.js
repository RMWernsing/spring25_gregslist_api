import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { CarSchema } from '../models/Car.js';
import { HouseSchema } from '../models/house.js';
import { PetSchema } from '../models/Pets.js';

class DbContext {
  // Account = mongoose.model('Account', AccountSchema);
  Account = mongoose.model('Account', AccountSchema)
  Cars = mongoose.model('Car', CarSchema)
  Houses = mongoose.model('House', HouseSchema)
  Pets = mongoose.model('Pet', PetSchema)
}

export const dbContext = new DbContext()
