import userModel from "../models/userModel.js"
import { isValidPassword } from "../utils.js"

export class UserManager {
  constructor() {

  }

  getAllUsers() {

    const users = userModel.find()

    return users
  }

  getUser(email) {

    const user = userModel.findOne({ email: email })

    return user
  }

  deleteUser(email) {
    const userDelete = userModel.deleteOne({ email: email })

    return userDelete
  }

  async addUser(data) {

    const user = await userModel.create(data)

    return user
  }
}