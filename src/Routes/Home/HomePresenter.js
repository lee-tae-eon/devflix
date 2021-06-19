import React from "react";
import ProptTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upComing, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <span key={movie}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="Coming Soon">
          {upComing.map((movie) => (
            <span key={movie}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <span key={movie}>{movie.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );

HomePresenter.proptTypes = {
  nowPlaying: ProptTypes.array,
  upComing: ProptTypes.array,
  popualr: ProptTypes.array,
  loading: ProptTypes.bool.isRequired,
  error: ProptTypes.string,
};

export default HomePresenter;
