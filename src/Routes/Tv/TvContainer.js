/* eslint-disable import/no-anonymous-default-export */
import { tvApi } from "api";
import React, { useEffect, useState } from "react";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  const [topRated, setTopRated] = useState();
  const [popualr, setPopualr] = useState();
  const [airingToday, setAiringToday] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getApi = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      setTopRated(topRated);
      setPopualr(popular);
      setAiringToday(airingToday);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <TVPresenter
      topRated={topRated}
      popualr={popualr}
      airingToday={airingToday}
      loading={loading}
      error={error}
    />
  );
};

export default TVContainer;

// export default class extends React.Component {
//   state = {
//     topRated: null,
//     popular: null,
//     airingToday: null,
//     loading: true,
//     error: null,
//   };

//   async componentDidMount() {
//     try {
//       const {
//         data: { results: topRated },
//       } = await tvApi.topRated();
//       const {
//         data: { results: popular },
//       } = await tvApi.popular();
//       const {
//         data: { results: airingToday },
//       } = await tvApi.airingToday();

//       this.setState({
//         topRated,
//         popular,
//         airingToday,
//       });
//     } catch {
//       this.setState({
//         error: "Can't find any TV show information",
//       });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   render() {
//     const { topRated, popular, airingToday, loading, error } = this.state;
//     return (
//       <TVPresenter
//         topRated={topRated}
//         popular={popular}
//         airingToday={airingToday}
//         loading={loading}
//         error={error}
//       />
//     );
//   }
// }
