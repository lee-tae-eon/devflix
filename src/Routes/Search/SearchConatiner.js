/* eslint-disable import/no-anonymous-default-export */
import { moviesApi, tvApi } from "api";
import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState();
  const [tvResults, setTvResults] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      searchByTerm();
    }
  };
  const updateSearchTerm = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      loading={loading}
      error={error}
      searchTerm={searchTerm}
      handleSubmit={handleSubmit}
      updateSearchTerm={updateSearchTerm}
    />
  );
};

export default SearchContainer;

// export default class extends React.Component {
//   state = {
//     movieResults: null,
//     tvResults: null,
//     searchTerm: "",
//     loading: false,
//     error: null,
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { searchTerm } = this.state;
//     if (searchTerm !== "") {
//       this.searchByTerm();
//     }
//   };

//   updateSearchTerm = (event) => {
//     const {
//       target: { value },
//     } = event;
//     this.setState({
//       searchTerm: value,
//     });
//   };

//   searchByTerm = async () => {
//     const { searchTerm } = this.state;
//     this.setState({ loading: true });
//     try {
//       const {
//         data: { results: movieResults },
//       } = await moviesApi.search(searchTerm);
//       const {
//         data: { results: tvResults },
//       } = await tvApi.search(searchTerm);
//       this.setState({
//         movieResults,
//         tvResults,
//       });
//     } catch {
//       this.setState({ error: "Couldn't search by " });
//     } finally {
//       this.setState({ loading: false });
//     }
//   };

//   render() {
//     const { movieResults, tvResults, searchTerm, loading, error } = this.state;
//     return (
//       <SearchPresenter
//         movieResults={movieResults}
//         tvResults={tvResults}
//         loading={loading}
//         error={error}
//         searchTerm={searchTerm}
//         handleSubmit={this.handleSubmit}
//         updateSearchTerm={this.updateSearchTerm}
//       />
//     );
//   }
// }
