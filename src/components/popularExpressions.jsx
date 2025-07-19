import React from 'react';

export default function PopularExpressions() {
  return (
    <div className='popular-expressions'>
      <h2>Popular Expressions</h2>
      <p>These are the most popular expressions created by our AI.</p>
      <div className='popular-expressions-container'>
        <div className='popular-expression'>
          <h3>Camera Shake</h3>
          <p>A camera shake effect that simulates the camera shake seen in movies.</p>
        </div>
        <div className='popular-expression'>
          <h3>Wiggle</h3>
          <p>A wiggle effect that simulates the wiggle seen in movies.</p>
        </div>
        <div className='popular-expression'>
          <h3>Zoom In</h3>
          <p>A zoom in effect that simulates the zoom in seen in movies.</p>
        </div>
        <div className='popular-expression'>
          <h3>Zoom Out</h3>
          <p>A zoom out effect that simulates the zoom out seen in movies.</p>
        </div>
      </div>
    </div>
  );
}