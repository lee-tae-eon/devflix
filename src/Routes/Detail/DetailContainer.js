/* eslint-disable import/no-anonymous-default-export */
import { moviesApi, tvApi } from "api";
import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = (props) => {
  let [result, setResult] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getApi = async ({ pathname, push, parsedId }) => {
    if (isNaN(parsedId)) {
      return push("/");
    }

    try {
      if (pathname.includes("/movie/")) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        setResult(result);
      } else if (pathname.includes("/tv/")) {
        ({ data: result } = await tvApi.tvshowDetail(parsedId));
        setResult(result);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const {
      location: { pathname },
      match: {
        params: { id },
      },
      history: { push },
    } = props;
    const parsedId = parseInt(id);
    getApi({ pathname, push, parsedId });
  }, []);

  return <DetailPresenter result={result} error={error} loading={loading} />;
};

export default DetailContainer;

// export default class extends React.Component {
//   constructor(props) {
//     super(props);
//     const {
//       location: { pathname },
//     } = props;

//     this.state = {
//       result: null,
//       error: null,
//       loading: true,
//       isMovie: pathname.includes("/movie/"),
//     };
//   }
//   async componentDidMount() {
//     const {
//       match: {
//         params: { id },
//       },
//       history: { push },
//     } = this.props;
//     const { isMovie } = this.state;
//     const parsedId = parseInt(id);
//     if (isNaN(parsedId)) {
//       return push("/");
//     }

//     let result = null;

//     try {
//       if (isMovie) {
//         ({ data: result } = await moviesApi.movieDetail(parsedId));
//       } else {
//         ({ data: result } = await tvApi.tvshowDetail(parsedId));
//       }
//     } catch {
//       this.setState({ error: "Can't find detail page" });
//     } finally {
//       this.setState({ loading: false, result });
//     }
//   }

//   render() {
//     const { result, error, loading, isMovie } = this.state;
//     return (
//       <DetailPresenter
//         result={result}
//         error={error}
//         loading={loading}
//         isMovie={isMovie}
//       />
//     );
//   }
// }
