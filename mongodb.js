// mongo
// use b27we
// db
// show collections

// when you insert data collection will be automatically created
db.movies.insertMany(
[
  {
    "id": "100",
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    "id": "101",
    "name": "No Country for Old Men",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    "id": "102",
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    "id": "103",
    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    "id": "104",
    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    "id": "105",
    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    "id": "106",
    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
  }
]);


// for getting all data
db.movies.find({})

// for getting some ggod for the data
db.movies.find({}).pretty()

// movies greater than 8
db.movies.find({
    rating: {
      "$gt": 8.0
    }
  }).pretty()

// for counting how many are there
db.movies.find({
    rating: {
      "$gt": 8.0
    }
  }).count()

// all documents in the database
db.movies.find({}).count()

// projections
// filter key only name
// included only name- inclusion
db.movies.find({}, {name: 1}).pretty()

// excluded only name- exclusion
db.movies.find({}, {name: 0}).pretty()

db.movies.find({}, {name: 1, rating: 1}).pretty()
db.movies.find({}, {name: 0, rating: 0}).pretty()

// error projection cannot have mix of inclusion
db.movies.find({}, {name: 1, rating: 0}).pretty()

// only exception
db.movies.find({}, {_id: 0, name: 1}).pretty()

// for getting only name and rating without the id's
db.movies.find({}, {_id: 0, name: 1, rating:1}).pretty()

db.movies.find({}).count()

// based on the rating we are sorting from increasing order-ascending order
db.movies.find({}, {_id: 0, name: 1, rating:1}).sort({rating: 1}).pretty()

// based on the rating we are sorting from increasing order-descending order
db.movies.find({}, {_id: 0, name: 1, rating:1}).sort({rating: -1}).pretty()

// rating is equal then internally order by name for sorting it
db.movies.find({}, {_id: 0, name: 1, rating:1}).sort({rating: -1, name: 1}).pretty()

// for getting only top 2 by using limit
db.movies.find({}, {_id: 0, name: 1, rating:1}).sort({rating: -1, name: 1}).limit(2).pretty()

// for getting only top 2 by using limit and skipping it
db.movies.find({}, {_id: 0, name: 1, rating:1}).sort({rating: -1, name: 1}).limit(2).skip(2).pretty()

// task 
// to add corresponding languages to the movies.

// getting the movies without those two movies
db.movies.find({name : {$nin:["Jai Bhim", "Baahubali"]}}, {_id: 0, name: 1, rating:1}).pretty()

db.movies.find({name : {$nin:["Jai Bhim", "Baahubali"]}}).pretty()

// updatemany is used for the updating some of the dicuments inside the collections
// we have to use the set for the setting of the required docs
db.movies.updateMany({name : {$nin:["Jai Bhim", "Baahubali"]}}, {$set:{language: "english"}})


db.movies.find({name : "Jai Bhim"}, {_id: 0, name: 1, rating:1, language:1}).pretty()

// by single one we are updating the language to that movies
db.movies.updateOne({name : "Jai Bhim"}, {$set:{language: "tamil"}})

db.movies.updateOne({name : "Baahubali"}, {$set:{language: "telugu"}})

// it will automatically converted into pretty
db.movies.findOne({name : "Baahubali"})

// for getting the english movies with rating 8
// in the first condition it will be used as the and condition i.e rating 8 and language is englis.
db.movies.find({rating: 8, language: "english"}, {_id: 0, name: 1, rating:1, language:1})

// we will write in SQL using above one.
// select name, rating, language
// from movies
// where rating = 8 and language = "english"


// for getting the english movies with rating greater than 8
db.movies.find({rating: {$gt:8}, language: "english"}, {_id: 0, name: 1, rating:1, language:1})

//orders

// again we are creating one collection of documents
db.orders.insertMany([
{ _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
{ _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
{ _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
{ _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
{ _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
{ _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
])

// we are using the _id to override the creating of the one id of BSON


// output required
[
  { _id: "Steel beam", totalUrgentQuantity: 50},
  { _id: "Iron rod", totalUrgentQuantity: 60}
]

// for the grouping purpose we are having the aggregate methods.
db.orders.aggregate([

])

// aggregate operator
// stage1 -> Filter the "urgent" orders
// {$match: {status: "urgent"}}

[
  { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
]

// stage2 -> Group based on productName ans sum quantity

// {$group: {_id: "$productName", totalUrgentQuantity: {$sum: "$quantity"}}}

// output required
[
  { _id: "Steel beam", totalUrgentQuantity: 50},
  { _id: "Iron rod", totalUrgentQuantity: 60}
]

// SQL command for the above onr
// select productNmae as _id, sum(quantity) as totalUrgentQuantity
// from orders
// where status = "urgent"
// group by productName;

// here in the below one first we wii going match the stats and next we will group by product name and doing the based on the quantity.
db.orders.aggregate([
  {$match: {status: "urgent"}},
  {$group: {_id: "$productName", totalUrgentQuantity: {$sum: "$quantity"}}}
])

// if we miss the dollar symbol for the product name the output wii come total as 110
db.orders.aggregate([
  {$match: {status: "urgent"}},
  {$group: {_id: "productName", totalUrgentQuantity: {$sum: "$quantity"}}}
])

// for sorting the we are using the sort methods
db.orders.aggregate([
  {$match: {status: "urgent"}},
  {$group: {_id: "$productName", totalUrgentQuantity: {$sum: "$quantity"}}},
  {$sort: {totalUrgentQuantity: 1}}
])

db.orders.aggregate([
  {$match: {status: "urgent"}},
  {$group: {_id: "$productName", totalUrgentQuantity: {$sum: "$quantity"}}},
  {$sort: {totalUrgentQuantity: -1}}
])


//$lookup mostly used for joins in mongodb but mostly wont use.

// [1, 3, 4]
// .map( x =. x*2 )
// .filter( f=> f>2 )
// .map(x=>[x])

// avg rating for all the movies by their language

db.movies.aggregate([
  {$group: {_id: "$language", avgRating: {$avg: "$rating"}}}
])

// maximum rating movie from all the movie collections
db.movies.aggregate([
  {$group: {_id: "$language", max: {$max: "$rating"}}}
])




