import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upComing, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substr(0, 4)}
              imageUrl={movie.poster_path}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="Coming Soon">
          {upComing.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substr(0, 4)}
              imageUrl={movie.poster_path}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substr(0, 4)}
              imageUrl={movie.poster_path}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popualr: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
