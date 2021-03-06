/* eslint-disable import/no-anonymous-default-export */
import { moviesApi } from "api";
import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState();
  const [upComing, setUpComing] = useState();
  const [popular, setPopular] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getApi = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upComing },
      } = await moviesApi.upComing();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      setNowPlaying(nowPlaying);
      setUpComing(upComing);
      setPopular(popular);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upComing={upComing}
      popular={popular}
      error={error}
      loading={loading}
    />
  );
};

export default HomeContainer;

// export default class extends React.Component {
//   state = {
//     nowPlaying: null,
//     upComing: null,
//     popular: null,
//     error: null,
//     loading: true,
//   };

//   async componentDidMount() {
//     try {
//       const {
//         data: { results: nowPlaying },
//       } = await moviesApi.nowPlaying();
//       const {
//         data: { results: upComing },
//       } = await moviesApi.upComing();
//       const {
//         data: { results: popular },
//       } = await moviesApi.popular();
//       this.setState({
//         nowPlaying,
//         upComing,
//         popular,
//       });
//     } catch {
//       this.setState({
//         error: "can't find movies information",
//       });
//     } finally {
//       this.setState({
//         loading: false,
//       });
//     }
//   }

//   render() {
//     const { nowPlaying, upComing, popular, error, loading } = this.state;
//     return (
//       <HomePresenter
//         nowPlaying={nowPlaying}
//         upComing={upComing}
//         popular={popular}
//         error={error}
//         loading={loading}
//       />
//     );
//   }
// }
