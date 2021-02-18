import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import content from "../../../content";

import useFetch from "../../hooks/useFetch";
import { Hero, Divider, Card, Button } from "../../components";

function Home({
  loading,
  movies,
  onSuccess,
  onFailure,
  onStart,
  favorites,
  toggleFavorite,
}) {
  useFetch({
    url: "https://academy-video-api.herokuapp.com/content/free-items",
    onSuccess,
    onFailure,
    onStart,
  });

  return (
    <>
      <Hero />
      <Divider />
      <article className="content">
        <section className="content__wrapper">
          <div className="content__movies">
            {loading && <p>Loading...</p>}
            {movies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  image={movie.image}
                  title={movie.title}
                  description={movie.description}
                  id={movie.id}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              );
            })}
          </div>
          <Button size="large">Get More Content</Button>
        </section>
      </article>
    </>
  );
}

const enhance = connect(
  (state) => ({
    movies: content.selectors.getMovies(state),
    favorites: content.selectors.getFavorites(state),
    loading: content.selectors.isLoading(state),
    token: state.auth.token,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        onStart: content.actions.getMovies,
        onSuccess: content.actions.getMoviesSuccess,
        onFailure: content.actions.getMoviesFailure,
        toggleFavorite: content.actions.toggleFavorite,
      },
      dispatch
    )
);

export default enhance(Home);
