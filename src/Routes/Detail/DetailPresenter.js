import React from "react";
import ProptTypes from "prop-types";
import stlyed from "styled-components";

const DetailPresenter = ({ result, error, loading }) => null;

DetailPresenter.proptTypes = {
  result: ProptTypes.Object,
  error: ProptTypes.string,
  loading: ProptTypes.bool.isRequired,
};

export default DetailPresenter;
