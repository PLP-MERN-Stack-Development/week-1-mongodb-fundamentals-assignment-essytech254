[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19654869&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 

## Assignment Explanation
## Running MongoDB Query Scripts
## Overview
1. This project contains MongoDB queries and commands to:

2. Find, update, and delete book documents

3. Use projections, sorting, and pagination

4. Perform aggregations

5. Create indexes

6. Analyze query performance with .explain()
## 🚀 How to Run the Queries
1. Start the Mongo Shell
```
mongosh
```
Or connect to your remote MongoDB instance:
```
mongosh "your-mongo-uri"
```

### 2. Switch to Your Database
```js
use yourDatabaseName
```

### 3. Run the Queries

Copy and paste each block of code into the Mongo shell or script file and run it. For example:

#### Find books by genre:
```js
db.books.find({ genre: "Fiction" })
```

#### Update book price:
```js
db.books.updateOne({ title: "Becoming" }, { $set: { price: 15.99 } })
```

#### Aggregation example:
```js
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
])
```

#### Create an index:
```js
db.books.createIndex({ title: 1 })
```

#### Use .explain() to analyze performance:
```js
db.books.find({ genre: "Fiction" }).explain("executionStats")
```

## File Structure (if saved in a `.js` file)
You can place your scripts in a file, e.g., `mongoQueries.js`, and load it like this:

```bash
mongosh < mongoQueries.js
```

Make sure the file uses valid JavaScript syntax and connects to the right database.

## Notes
- Replace `"yourDatabaseName"` with the actual name of your MongoDB database.
- Use `db.books` or `db.movies` depending on your collection name.
- You can modify values in queries (e.g., author name, title, year) as needed.
- Use `.pretty()` for more readable output:
```js
db.books.find({ genre: "Fiction" }).pretty()
```

---
## A screenshot of MongoDB Compass showing collections and sample data
![MongoDB compass Screenshot](\images\compass.png)
![MongoDB sample data Screenshot](\images\sample.png)
