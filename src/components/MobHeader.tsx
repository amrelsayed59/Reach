import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';

export const MobHeader: React.FC<any> = ({
  onSubmit,
  searchInput,
  setSearchInput,
}) => {

  //showToggle search input
  const [show, setShow] = useState(false);
  const showToggle = () => {
    setShow(!show);
  };
  const showInput: any = {
    width: '100%',
    padding: '0 .5rem',
  };
  const history = useHistory();

  //queryParam
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchInput) {
      params.append('query', searchInput);
    } else {
      params.delete('query');
    }
    history.push({ search: params.toString() });
  }, [searchInput, history]);

  //onFocus input
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <header className="header-mob">
        <div className="container p-sm-0">
          <div className="header__box">
            <div className="header__logo">
              <i className="fab fa-youtube fa-2x text-white"></i>
            </div>
            <div className="filter">
              <form onSubmit={onSubmit}>
                <div className="filter__inputgroup">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    ref={inputRef}
                    style={show ? showInput : null}
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                  />
                  <span
                    onClick={showToggle}
                    className={`filter__inputgroup-value ${
                      show ? 'd-none' : 'd-block'
                    }`}
                  >
                    {searchInput ? searchInput : 'Search'}
                  </span>
                  <div
                    className="filter__inputgroup-prepend"
                    onClick={onSubmit}
                  >
                    <span
                      className="filter__inputgroup-text"
                      id="inputGroup-sizing-sm"
                    >
                      {' '}
                      <i className="fas fa-search fa-fw"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MobHeader;
