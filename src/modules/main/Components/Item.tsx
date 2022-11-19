import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const Item: React.FC<any> = ({ video }) => {
  return (
    <>
      <div className="main__list">
        <div className="main__listimg">
          <img
            className="main__listimg-img"
            src={video.snippet?.thumbnails.medium.url}
            alt="item"
          />
          {video?.id?.kind === 'youtube#video' ? (
            <div className="main__time">
              <p>{dayjs(video.snippet?.publishTime).format('h:mm')}</p>
            </div>
          ) : null}
        </div>
        <div className="main__listcontent">
          <h6 className="main__listcontent-title">{video.snippet?.title}</h6>
          <p className="main__listcontent-subtitle">
            {video.snippet?.channelTitle} -{' '}
            {dayjs(video.snippet?.publishedAt).fromNow()}
          </p>
          <p className="main__listcontent-text">{video.snippet?.description}</p>
        </div>
      </div>
    </>
  );
};

export default Item;
