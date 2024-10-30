// pages/index.js
import React from 'react';
import MapComponent from '../components/MapComponent';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'addresses_data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const points = JSON.parse(jsonData);

  return {
    props: { points },
  };
}

const HomePage = ({ points }) => {
  return (
    <div>
      <h1>Карта с точками</h1>
      <MapComponent points={points} />
    </div>
  );
};

export default HomePage;
