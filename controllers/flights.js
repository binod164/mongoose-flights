import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'

function newFlight(req, res) {
  res.render('flights/new',{
    title:'Add Flight'
  })
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
		if (err) return res.render('/flights/new')
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
    console.log(error)
    res.render("flights/index", {
      error: error,
      flights: flights,
      title: 'All Flights',
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('meal')
  .exec(function(err, flight) {
    Meal.find({_id: {$nin: flight.meal}}, function(err, meals) {
      res.render('flights/show', {
        flight: flight,
        title: 'Flight Detail', 
        meals,
      })
    })
  })
}

function createTicket(req,res){
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function addToMeal(req,res){
  Flight.findById(req.params.id, function(err, flight) {
    flight.meal.push(req.body.mealId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  createTicket,
  addToMeal,
}