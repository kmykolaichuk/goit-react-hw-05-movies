import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchMovies } from '../Api/Api';
import {
  SearchbarWrapper,
  Form,
  FormButton,
  FormInput,
} from '../SearchBar/SearchBar.styled';
import { HiSearch } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  const onInputSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });

    if (e.currentTarget.elements.query.value.trim() === '') {
      toast.error('Please, enter your search query.', {
        position: 'top-right',
      });
      return;
    }
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (query === null) {
      return;
    }

    async function SearchMovieList() {
      try {
        const cardSearch = await SearchMovies(query);
        if (cardSearch.length === 0) {
          toast.error(
            'Sorry, there are no films matching your search query. Please, try again.',
            {
              position: 'top-right',
            }
          );
        }
        setMovies(cardSearch);
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.', {
          position: 'top-right',
        });
      }
    }

    SearchMovieList();
  }, [query]);

  return (
    <>
      <main>
        <SearchbarWrapper>
          <Form onSubmit={onInputSubmit}>
            <FormButton type="submit">
              <HiSearch size={26} /> <span>Search</span>
            </FormButton>

            <FormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              name="query"
            />
          </Form>
        </SearchbarWrapper>
      </main>

      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
}
