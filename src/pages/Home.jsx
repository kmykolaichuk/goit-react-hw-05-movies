import { useEffect, useState } from 'react';
import { FetchTrendingMovies } from '../Services/MovieDB';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from '../Navigation/Navigation.styled';

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await FetchTrendingMovies();
        setList(response);
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.', {
          position: 'top-right',
        });
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <ToastContainer autoClose={3000} />
    </>
  );
}
