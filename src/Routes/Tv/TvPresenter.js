import React from "react";
import ProptTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rate Tv Show">
          {topRated.map((tv) => (
            <span>{tv.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Tv Show">
          {popular.map((tv) => (
            <span>{tv.name}</span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Now">
          {airingToday.map((tv) => (
            <span>{tv.name}</span>
          ))}
        </Section>
      )}
    </Container>
  );

TVPresenter.proptTypes = {
  topRated: ProptTypes.array,
  popular: ProptTypes.array,
  airingToday: ProptTypes.array,
  loading: ProptTypes.bool.isRequired,
  error: ProptTypes.string,
};

export default TVPresenter;
