/**
 * Games API Routes
 * Handles HTTP requests for game-related endpoints
 */

const express = require('express');
const router = express.Router();
const { getGames } = require('../models/game');
const { validateSearchQuery } = require('../middleware/validation');

/**
 * GET /api/games
 * 
 * Retrieves a list of games with optional search filtering.
 * 
 * Query Parameters:
 *   - search (optional): Case-insensitive keyword to filter games by name
 * 
 * Example Request:
 *   GET /api/games
 *   GET /api/games?search=zelda
 *   GET /api/games?search=MARIO
 * 
 * Example Response (200 OK):
 *   [
 *     {
 *       "id": 1,
 *       "name": "The Legend of Zelda: Breath of the Wild",
 *       "genre": "Action-Adventure",
 *       "year": 2017
 *     },
 *     ...
 *   ]
 * 
 * Response Codes:
 *   - 200: Success
 *   - 400: Bad Request (invalid query parameters)
 *   - 500: Internal Server Error
 */
router.get('/', validateSearchQuery, (req, res) => {
  try {
    const searchKeyword = req.query.search;
    const games = getGames(searchKeyword);
    
    res.status(200).json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred while fetching games'
    });
  }
});

module.exports = router;

