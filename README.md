# MonogoDB Database Application

## Objectives
1. Create a server application with Node, Express, and MongoDB.
2. Create a CRUD API using Express and MongoDB.
3. Create MongoDB indexes.
4. Use MongoDB indexing to make effi cient queries.
5. Create MongoDB validation rules.
6. Use MongoDB validation to ensure data consistency.


## API's available routes and corresponding CRUD operations:

### Movie Database API Routes
#### Movie Collection Routes

GET /api/movies/: Retrieve paginated movies
GET /api/movies/all: Retrieve all movies
POST /api/movies: Create a new movie

#### Individual Movie Routes

GET /api/movies/:id: Retrieve a specific movie
PUT /api/movies/:id: Update a specific movie
DELETE /api/movies/:id: Delete a specific movie


### GET Queries / Filtering

#### Sort By Year (ascending/descending)
GET /api/movies?sort=year&order=asc
GET /api/movies?sort=year&order=desc

#### Years
/api/movies?year=2020
/api/movies?yearFrom=2010&yearTo=2020

#### Title
/api/movies?title=Inception

#### Genre
/api/movies?genre=Action
/api/movies?genres=["Action", "Sci-Fi"]

#### Director
/api/movies?director=Christopher Nolan

#### Metacritic Score
/api/movies?director=Christopher Nolan



#### Alternatives 
Pagination could be used on api/movies/all
/api/movies/all?limit=10&page=2