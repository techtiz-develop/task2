/**
 * Game data model
 * Represents a game entity with its properties
 */

/**
 * Sample games data
 * In a production environment, this would typically come from a database
 */
const SAMPLE_GAMES = [
  { id: 1, name: "The Legend of Zelda: Breath of the Wild", genre: "Action-Adventure", year: 2017 },
  { id: 2, name: "Super Mario Odyssey", genre: "Platform", year: 2017 },
  { id: 3, name: "Red Dead Redemption 2", genre: "Action-Adventure", year: 2018 },
  { id: 4, name: "The Witcher 3: Wild Hunt", genre: "RPG", year: 2015 },
  { id: 5, name: "Minecraft", genre: "Sandbox", year: 2011 },
  { id: 6, name: "Grand Theft Auto V", genre: "Action-Adventure", year: 2013 },
  { id: 7, name: "Dark Souls III", genre: "Action RPG", year: 2016 },
  { id: 8, name: "Portal 2", genre: "Puzzle-Platform", year: 2011 },
  { id: 9, name: "Half-Life 2", genre: "First-Person Shooter", year: 2004 },
  { id: 10, name: "The Last of Us", genre: "Action-Adventure", year: 2013 }
];

/**
 * Retrieves all games from the data source
 * @returns {Array<Object>} Array of game objects
 */
function getAllGames() {
  return SAMPLE_GAMES;
}

/**
 * Filters games by name using case-insensitive search
 * @param {Array<Object>} games - Array of game objects to filter
 * @param {string} searchKeyword - The keyword to search for in game names
 * @returns {Array<Object>} Filtered array of game objects
 */
function filterGamesByName(games, searchKeyword) {
  if (!searchKeyword || typeof searchKeyword !== 'string') {
    return games;
  }

  const normalizedKeyword = searchKeyword.trim().toLowerCase();
  
  if (normalizedKeyword === '') {
    return games;
  }

  return games.filter(game => 
    game.name.toLowerCase().includes(normalizedKeyword)
  );
}

/**
 * Gets games with optional search filtering
 * @param {string|null|undefined} searchKeyword - Optional search keyword to filter by name
 * @returns {Array<Object>} Array of game objects (filtered or unfiltered)
 */
function getGames(searchKeyword = null) {
  const allGames = getAllGames();
  
  if (!searchKeyword) {
    return allGames;
  }

  return filterGamesByName(allGames, searchKeyword);
}

module.exports = {
  getAllGames,
  filterGamesByName,
  getGames
};

