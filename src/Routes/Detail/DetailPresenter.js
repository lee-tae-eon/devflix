import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.h3`
  font-size: 34px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  .imdb__link {
    padding: 5px;
    background-color: #e2b615;
    color: black;
    font-weight: 900;
    border-radius: 5px;
  }
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.div`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 80%;
`;

const TubeSect = styled.section`
  margin-top: 100px;
  width: 100%;
  height: calc(100vh - 350px);
  overflow-x: scroll;
  h1 {
    margin-bottom: 30px;
    font-size: 22px;
    text-align: center;
  }

  .video-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      margin: 0 auto;
      &:not(:last-child) {
        margin-bottom: 40px;
      }
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

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | devflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_name ? result.original_name : result.original_title}{" "}
          | devflix
        </title>
      </Helmet>
      <Backdrop
        bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgUrl={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
              : require("../../assets/noPosterSmall.png").default
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date
                : result.first_air_date}
            </Item>
            <Divider>·</Divider>
            <Item>
              {result.runtime
                ? `${result.runtime} minute`
                : `${result.episode_run_time} minute`}
            </Item>
            <Divider>·</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>

            {result.imdb_id ? (
              <>
                <Divider>·</Divider>
                <Item>
                  <a
                    className="imdb__link"
                    href={`http://imdb.com/title/${result.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    IMDB
                  </a>
                </Item>
              </>
            ) : null}
          </ItemContainer>
          <Overview>
            {result.overview.length > 100
              ? `${result.overview.substr(0, 100)}... ...`
              : result.overview}
          </Overview>
          <TubeSect>
            <h1> Preview Videos </h1>
            <div className="video-container">
              {result.videos.results.length > 0 ? (
                result.videos.results.map((result, index) =>
                  index < 4 ? (
                    <div key={result.key}>
                      <iframe
                        title={result.name}
                        src={`http://www.youtube.com/embed/${result.key}`}
                        width="800px"
                        height="450px"
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
                  ) : (
                    <h1>Video Not Found</h1>
                  )
                )
              ) : (
                <EmptyVideo>Video Not Found</EmptyVideo>
              )}
            </div>
          </TubeSect>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
