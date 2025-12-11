/**
 * Integration Tests for Games API Endpoint
 * Tests both filtered and unfiltered scenarios
 */

const request = require('supertest');
const app = require('../../server');

describe('GET /api/games', () => {
  describe('Unfiltered scenarios (default behavior)', () => {
    test('should return all games when no search parameter is provided', async () => {
      const response = await request(app)
        .get('/api/games')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('genre');
      expect(response.body[0]).toHaveProperty('year');
    });

    test('should return all games when search parameter is empty string', async () => {
      const response = await request(app)
        .get('/api/games?search=')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('Filtered scenarios (with search parameter)', () => {
    test('should return filtered games when search parameter is provided', async () => {
      const response = await request(app)
        .get('/api/games?search=zelda')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body.every(game => 
        game.name.toLowerCase().includes('zelda')
      )).toBe(true);
    });

    test('should be case-insensitive', async () => {
      const upperResponse = await request(app)
        .get('/api/games?search=MARIO')
        .expect(200);

      const lowerResponse = await request(app)
        .get('/api/games?search=mario')
        .expect(200);

      expect(upperResponse.body).toEqual(lowerResponse.body);
    });

    test('should handle partial matches', async () => {
      const response = await request(app)
        .get('/api/games?search=red')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body.every(game => 
        game.name.toLowerCase().includes('red')
      )).toBe(true);
    });

    test('should return empty array when no games match', async () => {
      const response = await request(app)
        .get('/api/games?search=nonexistentgame12345')
        .expect(200);

      expect(response.body).toEqual([]);
    });

    test('should handle search with spaces', async () => {
      const response = await request(app)
        .get('/api/games?search=grand theft')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body.every(game => 
        game.name.toLowerCase().includes('grand theft')
      )).toBe(true);
    });

    test('should preserve API response structure', async () => {
      const response = await request(app)
        .get('/api/games?search=portal')
        .expect(200);

      if (response.body.length > 0) {
        const game = response.body[0];
        expect(game).toHaveProperty('id');
        expect(game).toHaveProperty('name');
        expect(game).toHaveProperty('genre');
        expect(game).toHaveProperty('year');
        expect(typeof game.id).toBe('number');
        expect(typeof game.name).toBe('string');
        expect(typeof game.genre).toBe('string');
        expect(typeof game.year).toBe('number');
      }
    });
  });

  describe('Error handling', () => {
    test('should return 400 when search is not a string', async () => {
      const response = await request(app)
        .get('/api/games?search[]=test')
        .expect(400);

      expect(response.body).toHaveProperty('error');
      expect(response.body).toHaveProperty('message');
    });

    test('should handle special characters in search', async () => {
      const response = await request(app)
        .get('/api/games?search=@#$%')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe('Backward compatibility', () => {
    test('should maintain same response structure as unfiltered endpoint', async () => {
      const filteredResponse = await request(app)
        .get('/api/games?search=mario')
        .expect(200);

      const unfilteredResponse = await request(app)
        .get('/api/games')
        .expect(200);

      if (filteredResponse.body.length > 0 && unfilteredResponse.body.length > 0) {
        const filteredGame = filteredResponse.body[0];
        const unfilteredGame = unfilteredResponse.body[0];
        
        expect(Object.keys(filteredGame)).toEqual(Object.keys(unfilteredGame));
      }
    });
  });
});

