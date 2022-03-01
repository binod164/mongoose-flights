import { Flight } from '../models/flight.js'

function newFlight(req, res) {
res.render('flights/new')
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
  Movie.findById(req.params.id, function (err, flight) {
    res.render("flights/show", {
      flight: flight,
      title: title,
    })
  })
}



export {
  newFlight as new,
  create,
  index,
  show,
}