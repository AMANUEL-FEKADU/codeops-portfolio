import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>Welcome to Addis Eats</h1>
      <p>Discover authentic Ethiopian cuisine delivered straight to your door.</p>
      <Link to="/menu" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#d35400', color: '#fff', textDecoration: 'none', borderRadius: '6px' }}>
        Explore Our Menu
      </Link>
    </div>
  );
}

export default Home;