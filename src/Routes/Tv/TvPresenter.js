import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV | devflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rate Tv Show">
            {topRated.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substr(0, 4)}
                imageUrl={tv.poster_path}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Tv Show">
            {popular.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substr(0, 4)}
                imageUrl={tv.poster_path}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Now">
            {airingToday.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.name}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substr(0, 4)}
                imageUrl={tv.poster_path}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    )}
    ;
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
