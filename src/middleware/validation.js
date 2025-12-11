/**
 * Validation Middleware
 * Validates request parameters and query strings
 */

/**
 * Validates the search query parameter
 * Ensures search is a string if provided
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
function validateSearchQuery(req, res, next) {
  const { search } = req.query;

  // If search is provided, it must be a string
  if (search !== undefined && typeof search !== 'string') {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Search parameter must be a string'
    });
  }

  next();
}

module.exports = {
  validateSearchQuery
};

