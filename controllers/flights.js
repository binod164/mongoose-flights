import { Flight } from '../models/flight.js'

function newFlight(req, res) {
res.render('flights/new',{
  title:"Add Flight"
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
  Flight.findById(req.params.id, function (err, flight) {
    res.render("flights/show", {
    title: 'Flight Detail',
    flight: flight,
    })
  })
}

function createTicket(req,res){
  // console.log("Yoooo")
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

// function deleteFlight(req, res) {
//   Flight.findByIdAndDelete(req.params.id, function(err, flight) {
//     res.redirect('/flights')
//   })
// }


export {
  newFlight as new,
  create,
  index,
  show,
  createTicket,
}