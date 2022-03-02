import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String
  },
  price: {
    type:Number,
    min: 0
  }
})
	
const flightSchema = new Schema({
  airline: {
    type:String,
    enum: ["American","Southwest","United"]
  },
  airport: {
    type:String, 
    enum: ["AUS","DFW","DEN","LAX","SAN"],
    default: "DEN"
  },
  flightNo: {
    type:Number,
    min: 10,
    max: 9999
  },
  departs: {
    type:Date,
    default: function() {
      return new Date().getFullYear()
    },
  },
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)
const Ticket = mongoose.model('Ticket', ticketSchema)

export{
  Flight
}