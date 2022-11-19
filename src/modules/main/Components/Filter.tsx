import React, { useState } from 'react';
import useViewport from '../../../hooks/useViewport';
import { types } from '../../../constants';

const Filter: React.FC<any> = ({ totalResults, videoType, setVideoType }) => {
  const [show, setShow] = useState(false);
  const { width } = useViewport();
  const breakpoint = 620;

  const showToggle = () => {
    setShow(!show);
  };

  const handleType = (value: string) => {
    setVideoType(value);
  };

  const FilterType = types.map((type) => (
    <option id={type.value} key={type.value} value={type.value}>
      {type.label}
    </option>
  ));

  return (
    <>
      {width < breakpoint ? (
        <div className="main__head">
          <div className="main__filters">
            <select
              value={videoType}
              onChange={(e) => handleType(e.target.value)}
            >
              {FilterType}
            </select>
          </div>
        </div>
      ) : (
        <div className="main__head">
          <div className="main__result">
            <p>About {totalResults?.totalResults} filtered results</p>
            <p className="pointer text-uppercase" onClick={showToggle}>
              <i className="fas fa-filter"></i>
              Filter
            </p>
          </div>

          <div className={`main__filters ${show ? 'd-block' : 'd-none'}`}>
            <select
              value={videoType}
              onChange={(e) => handleType(e.target.value)}
            >
              {FilterType}
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
