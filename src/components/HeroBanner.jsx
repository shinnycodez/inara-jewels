import React from 'react';

function HeroBanner() {
  const imageUrl =
    'https://pbs.twimg.com/media/G00dxoUbIAAYRC2?format=jpg&name=900x900';

  return (
    <div className="relative bg-[#FFCCE1] ">
<div
  className="min-h-[240px] md:min-h-[480px] bg-cover lg:bg-contain bg-center bg-no-repeat transition-all duration-500 ease-in-out"
  style={{
    backgroundImage: `url("${imageUrl}")`,
  }}
/>

    </div>
  );
}

export default HeroBanner;
