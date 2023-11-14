import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starImg = i <= rating
        ? <img key={i} src={require('./img/fullstar-icon.png')} alt="Full Star Logo" onClick={() => handleStarClick(i)} />
        : <img key={i} src={require('./img/emptystar-icon.png')} alt="Empty Star Logo" onClick={() => handleStarClick(i)} />;
      stars.push(starImg);
    }
    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
    </div>
  );
};

export default Rating;
