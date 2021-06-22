import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 23px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  handleSubmit,
  error,
  updateSearchTerm,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Moives or Tv Shows...."
        value={searchTerm}
        onChange={updateSearchTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
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
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Results">
            {tvResults.map((tv) => (
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
      </>
    )}
    {error && <Message text={error} color="#e74c3c" />}
    {tvResults &&
      movieResults &&
      tvResults.length === 0 &&
      movieResults.length === 0 && (
        <Message text={`Not Found for ${searchTerm}`} color="#95a5a6" />
      )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
