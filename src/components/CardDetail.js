// src/components/CardDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CardDetail.css';

function CardDetail() {
  const { cardSlug } = useParams(); // Get the slug from the URL
  const [cardDetail, setCardDetail] = useState(null); // State to hold card data
  const [error, setError] = useState(null); // State to hold errors

  // Fetch card details from the backend
  useEffect(() => {
    const fetchCardDetail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/cards/${cardSlug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch card details');
        }
        const data = await response.json();
        setCardDetail(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCardDetail();
  }, [cardSlug]);

  // Render a loading state
  if (!cardDetail && !error) {
    return <h1>Loading...</h1>;
  }

  // Render an error state if fetching fails
  if (error) {
    return <h1>{error}</h1>;
  }

  // Render card details
  return (
    <div className="card-detail-page">
      {/* Media Section */}
      <div className="card-detail-header">
        {cardDetail.type === 'video' ? (
          <video
            className="header-video"
            src={cardDetail.media}
            autoPlay
            loop
            muted
          />
        ) : (
          <img
            className="header-image"
            src={cardDetail.media}
            alt={cardDetail.name}
          />
        )}
        <div className="card-title-overlay">
          <h1 className="card-title">{cardDetail.name}</h1>
        </div>
      </div>

      {/* Content Box */}
      <div className="card-detail-content-box">
        <p
          className="card-description"
          dangerouslySetInnerHTML={{
            __html: cardDetail.description.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'),
          }}
        ></p>
      </div>
    </div>
  );
}

export default CardDetail;
