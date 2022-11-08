import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';
import {
  Container,
  Poster,
  GenreWrapper,
  InfoWrapper,
  CastLink,
} from './MovieCard.styled';

export const FilmCard = ({ item }) => {
  const filmId = item.id;
  const location = useLocation();

  return (
    <main>
      <Link to={location?.state?.from ?? '/home'}>
        <HiArrowSmLeft />
        Go back
      </Link>
      <Container>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
        />

        <div>
          <h2>
            {item.title}({item.release_date.slice(0, 4)})
          </h2>
          <p>User score: {Math.round(item.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{item.overview}</p>
          <h3>Genres</h3>
          <GenreWrapper>
            {item.genres.map(item => (
              <p key={item.id}>{item.name}</p>
            ))}
          </GenreWrapper>
        </div>
      </Container>

      <InfoWrapper>
        <h3>Additional information</h3>
        <ul>
          <CastLink
            to={`/movies/${filmId}/cast`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Cast
          </CastLink>
          <NavLink
            to={`/movies/${filmId}/reviews`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Reviews
          </NavLink>
        </ul>
      </InfoWrapper>

      <Outlet />
    </main>
  );
};
