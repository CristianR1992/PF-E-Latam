const {Review_Rating}= require("../../db")

const getReviewById = async (reviewID) => {
    try {
      const review = await Review_Rating.findByPk(reviewID);
      if (!review) {
        throw new Error('No se pudo encontrar la reseña por ID');
      }
  
      return review;
    } catch (error) {
  
      throw new Error(error.message);
    }
  };
  
  module.exports = {
    getReviewById
  }
