# Games API

A robust, maintainable backend API for retrieving games with optional search filtering functionality.

## Features

- **GET /api/games** - Retrieve all games or filter by name
- Case-insensitive search filtering
- Backward compatible API design
- Comprehensive error handling
- Full test coverage
- Production-ready code structure

## API Documentation

### GET /api/games

Retrieves a list of games with optional search filtering.

#### Query Parameters

| Parameter | Type   | Required | Description                                    |
|-----------|--------|----------|------------------------------------------------|
| search    | string | No       | Case-insensitive keyword to filter games by name |

#### Request Examples

```bash
# Get all games (default behavior)
GET /api/games

# Filter games by name (case-insensitive)
GET /api/games?search=zelda
GET /api/games?search=MARIO
GET /api/games?search=red dead
```

#### Response Format

**Status Code:** 200 OK

**Response Body:**
```json
[
  {
    "id": 1,
    "name": "The Legend of Zelda: Breath of the Wild",
    "genre": "Action-Adventure",
    "year": 2017
  },
  {
    "id": 2,
    "name": "Super Mario Odyssey",
    "genre": "Platform",
    "year": 2017
  }
]
```

#### Behavior

- **Without `search` parameter:** Returns the complete list of all games (default behavior)
- **With `search` parameter:** Returns only games whose name includes the search keyword (case-insensitive)
- **Empty `search` parameter:** Returns all games (same as no parameter)
- **No matches:** Returns an empty array `[]`

#### Error Responses

**400 Bad Request**
```json
{
  "error": "Bad Request",
  "message": "Search parameter must be a string"
}
```

**500 Internal Server Error**
```json
{
  "error": "Internal server error",
  "message": "An error occurred while fetching games"
}
```

## Project Structure

```
task1/
├── src/
│   ├── models/
│   │   ├── __tests__/
│   │   │   └── game.test.js      # Unit tests for game model
│   │   └── game.js               # Game data model and filtering logic
│   ├── routes/
│   │   ├── __tests__/
│   │   │   └── games.test.js     # Integration tests for API endpoint
│   │   └── games.js              # Games API routes
│   ├── middleware/
│   │   └── validation.js         # Request validation middleware
│   └── server.js                 # Express server setup
├── package.json
├── jest.config.js
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000` by default.

## Testing

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Run tests with coverage:
```bash
npm run test:coverage
```

### Test Coverage

The test suite includes:

1. **Unit Tests** (`src/models/__tests__/game.test.js`):
   - Testing `getAllGames()` function
   - Testing `filterGamesByName()` with various scenarios
   - Testing `getGames()` with and without search parameter
   - Case-insensitive filtering
   - Edge cases (null, undefined, empty strings)

2. **Integration Tests** (`src/routes/__tests__/games.test.js`):
   - Unfiltered API requests (default behavior)
   - Filtered API requests with search parameter
   - Case-insensitive search
   - Error handling
   - Backward compatibility
   - Response structure validation

## Code Quality

### Design Principles

- **Modularity:** Code is organized into separate modules (models, routes, middleware)
- **Separation of Concerns:** Business logic separated from HTTP handling
- **Reusability:** Functions are designed to be reusable and testable
- **Error Handling:** Comprehensive error handling at all levels
- **Validation:** Input validation middleware for request parameters

### Key Functions

- `getAllGames()` - Retrieves all games from data source
- `filterGamesByName(games, searchKeyword)` - Filters games by name (case-insensitive)
- `getGames(searchKeyword)` - Main function that handles both filtered and unfiltered scenarios
- `validateSearchQuery()` - Middleware to validate search query parameter

## Backward Compatibility

The API maintains full backward compatibility:
- Existing clients calling `GET /api/games` without parameters continue to work unchanged
- The `search` parameter is optional, so it doesn't break existing integrations
- Response structure remains identical for both filtered and unfiltered requests

## Performance Considerations

- Filtering happens on the backend (as required)
- Case-insensitive comparison is optimized
- Empty search strings are handled efficiently (returns all games without filtering)
- No unnecessary database queries or operations

## Future Enhancements

Potential improvements for production:
- Database integration (replace in-memory data)
- Pagination support
- Additional filtering options (genre, year, etc.)
- Caching layer for frequently accessed data
- Rate limiting
- Authentication/Authorization
- API versioning

## License

ISC

