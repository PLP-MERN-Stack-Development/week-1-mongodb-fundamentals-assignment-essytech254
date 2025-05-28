// MongoDB Queries
// query1:Find all books in a specific genre
db.movies.find({ genre: "Fiction" })
// query2:Find books published after a specific year
db.movies.find({ published_year: { $gt: 1950 } })
// query3:Find books by a specific author   
db.movies.find({ author: "Michelle Obama" })
//Update the price of a specific book
db.movies.updateOne(
  { title: "Becoming" },
  { $set: { price: 15.99 } }
)
 //Delete a book by its title
db.movies.deleteOne({ title: "The Silent Patient" })
// Advanced queries
// books that are both in stock and published after 2010
db.movies.find({
    in_stock: true,
    published_year: {$gt:2010}
    })
//projection to return only the title, author, and price fields in your queries
    db.movies({
    title: 1,
    author:1,
    _id: 0
    })
 //sorting to display books by price (both ascending and descending)
db.movies.find().sort({price: 1}) // Ascending order
db.movies.find().sort({price: -1}) // Descending order
//pagination (5 books per page)
db.books.find().skip((n - 1) * 5).limit(5)
//Aggregation
db.books.aggregate([
  {
    $group: {
      _id: "$genre",               // Group by genre
      averagePrice: { $avg: "$price" }  // Calculate average price
    }
  }
])
db.books.aggregate([
  {
    $group: {
      _id: "$author",         // Group by author
      totalBooks: { $sum: 1 } // Count books per author
    }
  },
  {
    $sort: { totalBooks: -1 } // Sort by number of books (descending)
  },
  {
    $limit: 1 // Only keep the top result
  }
])
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [ { $divide: ["$published_year", 10] }, 1 ] } ] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 } // Sort decades in ascending order
  }
])
//indexing
db.books.createIndex({ title: 1 }) // Create an index on the title field
db.books.createIndex({ author: 1, published_year: 1 })
//explain()
db.books.find({ genre: "Fiction" }).explain("executionStats") // Get execution stats for a query


