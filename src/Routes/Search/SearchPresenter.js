import React from "react";
import ProptTypes from "prop-types";
import stlyed from "styled-components";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  handleSubmit,
  error,
}) => null;

SearchPresenter.proptTypes = {
  movieResults: ProptTypes.array,
  tvResults: ProptTypes.array,
  error: ProptTypes.string,
  searchTerm: ProptTypes.string,
  loading: ProptTypes.bool.isRequired,
  handleSubmit: ProptTypes.func.isRequired,
};

export default SearchPresenter;
