import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rate Tv Show">
          {topRated.map((tv) => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Tv Show">
          {popular.map((tv) => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Now">
          {airingToday.map((tv) => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
