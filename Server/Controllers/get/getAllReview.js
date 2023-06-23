const { ReviewRating } = require('../../db');

const getAllReviews = async () => {
  try {
    const reviews = await ReviewRating.findAll();
    return reviews;
  } catch (error) {
    throw new Error('No se pudieron obtener las reseñas');
  }
};


module.exports = {
  getAllReviews
}