import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const DetailPresenter = ({ result, error, loading }) => (
  <Container>
    <Backdrop bgImage={`${result.backdrop_path}`} />
  </Container>
);

DetailPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
