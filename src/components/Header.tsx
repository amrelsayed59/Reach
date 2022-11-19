import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

export const Header: React.FC<any> = ({
  onSubmit,
  searchInput,
  setSearchInput,
}) => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const history = useHistory();

  // handle scroll event
  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  //onFocus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

  return (
    <>
      <section style={{ marginTop: sticky.offset }}>
        <header
          className={`header ${sticky.isSticky ? ' sticky' : ''}`}
          ref={headerRef}
        >
          <div className="container">
            <div className="header__box">
              <div className="header__logo">
                <img className="header__logo-img" src={logo} alt="logoImg" />
              </div>
              <div className="filter">
                <form onSubmit={onSubmit}>
                  <div className="filter__inputgroup">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      ref={inputRef}
                      value={searchInput}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                      }}
                    />
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
      </section>
    </>
  );
};

export default Header;
