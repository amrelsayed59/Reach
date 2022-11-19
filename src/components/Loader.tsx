import React, { useState, useEffect } from 'react';

const Loader: React.FC<any> = () => {
  const [percentLoaded, setPercentLoaded] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let val = percentLoaded + 100;
      if (percentLoaded >= 100) {
        setPercentLoaded(percentLoaded);
      } else {
        setPercentLoaded(val);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [percentLoaded]);

  return (
    <div className="determinate-loader">
      <div
        className="determinate-loader--bar"
        style={{ width: percentLoaded + '%' }}
      ></div>
    </div>
  );
};

export const InnerLoader: React.FC<any> = () => {
  return (
    <div className="mobile-loader">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      <p className="pt-1 font-12">Loading...</p>
    </div>
  );
};

export default Loader;
