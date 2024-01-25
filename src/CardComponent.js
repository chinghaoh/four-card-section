import React from 'react';
import PropTypes from 'prop-types'; 

function CardComponent({ title, description, imageSrc ,hslColour}) {

  const cardStyle = {
    borderTop: `5px solid ${hslColour}`,
    padding: '10px',
  };

  return (
    <div className="card" style={cardStyle}>
      <h2 className='card__title'>{title}</h2>
      <p>{description}</p>
      <img className='card__image' src={imageSrc} alt={title} />
    </div>
  );
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  hslColour: PropTypes.string.isRequired
};

export default CardComponent;
