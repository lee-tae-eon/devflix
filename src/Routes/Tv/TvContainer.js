/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import TvContainer from "./TvContainer";

export default class extends React.Component {
  state = {
    topRated: null,
    pupular: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  render() {
    const { topRated, pupular, airingToday, error, loading } = this.state;
    return (
      <TvContainer
        topRated={topRated}
        pupular={pupular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
