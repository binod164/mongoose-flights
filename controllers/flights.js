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

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, flight) {
    res.redirect('/flights')
  })
}

// function edit(req, res) {
//   Flight.findById(req.params.id, function(err, flight) {
//     res.render('flights/edit', {
//       flight,
//       err,
//       title: "Edit Flight"
//     })
//   })
// }

// function update(req, res) {
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key]
//   }
//   Flight.findByIdAndUpdate(req.params.id, req.body, function(err, flight) {
//     res.redirect(`/flights/${flight._id}`)
//   })
// }

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
}