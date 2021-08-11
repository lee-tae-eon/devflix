import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const VideoContainer = styled.section`
  border: 2px solid #141414;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.3);
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    width: 10px;
  }
  overflow-y: hidden;
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: ${(props) =>
    props.resultLength === 1 ? "center" : "baseline"};
  div {
    padding: 5px 10px;
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

const EmptyVideo = styled.div`
  font-size: 60px;
  height: calc(100vh - 500px);
  display: flex;
  align-items: center;
  color: inherit;
`;

const Videos = ({ resultVideos }) => (
  <VideoContainer resultLength={resultVideos.length}>
    {resultVideos.length > 0 ? (
      resultVideos.map((result, index) =>
        index < 4 ? (
          <div key={result.key}>
            <iframe
              title={result.name}
              src={`http://www.youtube.com/embed/${result.key}`}
              width="320px"
              height="180px"
              allow="
              accelerometer;
              clipboard-white;
              encrypted-media;
              gyroscope;
              picture-in-picture;
            "
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
        ) : null
      )
    ) : (
      <EmptyVideo>Video Not Found</EmptyVideo>
    )}
  </VideoContainer>
);

Videos.propTypes = {
  resultVideos: PropTypes.array.isRequired,
};

export default Videos;
