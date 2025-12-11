/**
 * Unit Tests for Game Model
 * Tests filtering logic for both filtered and unfiltered scenarios
 */

const { getAllGames, filterGamesByName, getGames } = require('../game');

describe('Game Model', () => {
  describe('getAllGames', () => {
    test('should return all games', () => {
      const games = getAllGames();
      expect(games).toBeInstanceOf(Array);
      expect(games.length).toBeGreaterThan(0);
      expect(games[0]).toHaveProperty('id');
      expect(games[0]).toHaveProperty('name');
      expect(games[0]).toHaveProperty('genre');
      expect(games[0]).toHaveProperty('year');
    });
  });

  describe('filterGamesByName', () => {
    const allGames = getAllGames();

    test('should return all games when search keyword is null', () => {
      const result = filterGamesByName(allGames, null);
      expect(result).toEqual(allGames);
    });

    test('should return all games when search keyword is undefined', () => {
      const result = filterGamesByName(allGames, undefined);
      expect(result).toEqual(allGames);
    });

    test('should return all games when search keyword is empty string', () => {
      const result = filterGamesByName(allGames, '');
      expect(result).toEqual(allGames);
    });

    test('should return all games when search keyword is only whitespace', () => {
      const result = filterGamesByName(allGames, '   ');
      expect(result).toEqual(allGames);
    });

    test('should filter games by name (case-insensitive)', () => {
      const result = filterGamesByName(allGames, 'zelda');
      expect(result.length).toBeGreaterThan(0);
      expect(result.every(game => 
        game.name.toLowerCase().includes('zelda')
      )).toBe(true);
    });

    test('should filter games by name (uppercase search)', () => {
      const result = filterGamesByName(allGames, 'MARIO');
      expect(result.length).toBeGreaterThan(0);
      expect(result.every(game => 
        game.name.toLowerCase().includes('mario')
      )).toBe(true);
    });

    test('should filter games by name (mixed case search)', () => {
      const result = filterGamesByName(allGames, 'ReD DeAd');
      expect(result.length).toBeGreaterThan(0);
      expect(result.every(game => 
        game.name.toLowerCase().includes('red dead')
      )).toBe(true);
    });

    test('should return empty array when no games match', () => {
      const result = filterGamesByName(allGames, 'nonexistentgame12345');
      expect(result).toEqual([]);
    });

    test('should handle partial matches', () => {
      const result = filterGamesByName(allGames, 'witcher');
      expect(result.length).toBeGreaterThan(0);
      expect(result.some(game => 
        game.name.toLowerCase().includes('witcher')
      )).toBe(true);
    });

    test('should handle search with leading/trailing spaces', () => {
      const result = filterGamesByName(allGames, '  zelda  ');
      expect(result.length).toBeGreaterThan(0);
      expect(result.every(game => 
        game.name.toLowerCase().includes('zelda')
      )).toBe(true);
    });
  });

  describe('getGames', () => {
    test('should return all games when search is not provided', () => {
      const result = getGames();
      const allGames = getAllGames();
      expect(result).toEqual(allGames);
    });

    test('should return all games when search is null', () => {
      const result = getGames(null);
      const allGames = getAllGames();
      expect(result).toEqual(allGames);
    });

    test('should return filtered games when search is provided', () => {
      const result = getGames('mario');
      expect(result.length).toBeGreaterThan(0);
      expect(result.every(game => 
        game.name.toLowerCase().includes('mario')
      )).toBe(true);
    });

    test('should return empty array when search matches nothing', () => {
      const result = getGames('xyzabc123nonexistent');
      expect(result).toEqual([]);
    });

    test('should handle case-insensitive search', () => {
      const upperResult = getGames('DARK');
      const lowerResult = getGames('dark');
      expect(upperResult).toEqual(lowerResult);
    });
  });
});

