import React from 'react';
import './Card.css'; // Import CSS for styling (if needed)

const Card = ({
  title,
  description,
  duration,
  associatedWith,
  skills,
  imagePath,
  moreInfoLink,
}) => {
  const cardStyle = {
    backgroundImage: `url(${imagePath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Other styles remain the same
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.6s',
  };

  return (
    <div className="card">
      <div className="card-front" style={cardStyle}>
        <h3>{title}</h3>
      </div>
      <div className="card-back">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <strong className="headings">Duration:</strong> {duration}
        </p>
        <p>
          <strong className="headings">Associated with:</strong>{' '}
          {associatedWith}
        </p>
        <p>
          <strong className="headings">Skills:</strong> {skills}
        </p>
        <p>
          <button onClick={() => window.open(moreInfoLink, '_blank')}>
            {' '}
            More Info{' '}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Card;
