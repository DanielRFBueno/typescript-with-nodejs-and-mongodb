import { Schema, model, Document } from 'mongoose'
import { UserInterface } from '../interfaces/User'

export interface UserModel extends UserInterface, Document {
    fullName(): string
  }

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return this.firstName + ' ' + this.lastName
}

export default model<UserModel>('User', UserSchema)
