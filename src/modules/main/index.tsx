import React, { useEffect, useState } from 'react';
import Item from './Components/Item';
import { InnerLoader } from '../../components/Loader';
import Header from '../../components/Header';
import MobHeader from '../../components/MobHeader';
import { getVideos } from '../../services/youtube';
import Filter from './Components/Filter';
import useViewport from '../../hooks/useViewport';
import LoadingBar from 'react-top-loading-bar';

export const Main: React.FC<any> = () => {
  const [searchInput, setSearchInput] = useState('');
  const [videoType, setVideoType] = useState('all');
  const [videos, setvideos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [totalResults, setTotalResults] = useState(null);
  const [topLoadingBar, setTopLoadingBar] = useState(0);
  const [resultPerPage, setResultPerPage] = useState(10);

  const { width } = useViewport();
  const breakpoint = 620;

  //getVideos
  const fetchVideos = async () => {
    setTopLoadingBar(30);
    setLoader(true);
    const data = await getVideos(searchInput, videoType, resultPerPage);
    setvideos(data?.items);
    setTotalResults(data?.pageInfo);
    setLoader(false);
    setTopLoadingBar(100);
  };

  const loadMore = () => {
    setResultPerPage((prev) => prev + 10);
  };

  const onFormSubmit = async (e: Event) => {
    e.preventDefault();
    await fetchVideos();
  };

  useEffect(() => {
    fetchVideos();
  }, [videoType, resultPerPage]);

  const AllVideos = videos?.map((video: any, i: number) => (
    <Item video={video} index={i} key={i} />
  ));

  return (
    <>
      {width < breakpoint ? (
        <MobHeader
          onSubmit={onFormSubmit}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      ) : (
        <>
          <Header
            onSubmit={onFormSubmit}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={topLoadingBar}
            onLoaderFinished={() => setTopLoadingBar(topLoadingBar)}
          />
        </>
      )}

      <section className="main">
        <div className="container">
          {videos?.length > 0 && (
            <Filter
              totalResults={totalResults}
              videoType={videoType}
              setVideoType={setVideoType}
            />
          )}
          {loader ? <InnerLoader /> : null}
          {AllVideos?.length > 0 ? AllVideos : null}
          {AllVideos?.length > 0 && (
            <button className="load-more" onClick={loadMore}>
              Load More
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Main;
