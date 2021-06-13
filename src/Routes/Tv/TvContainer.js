/* eslint-disable import/no-anonymous-default-export */
import { tvApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popualr: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popualr },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      this.setState({
        topRated,
        popualr,
        airingToday,
      });
    } catch {
      this.setState({
        error: "Can't find any TV show information",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popualr, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popualr={popualr}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
