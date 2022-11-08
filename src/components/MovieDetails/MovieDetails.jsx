import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MovieDetails } from '../Api/Api';
import { MovieCard } from '../MovieCard/MovieCard';

export default function MovieDetailsContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const item = await MovieDetails(itemId);
        setItem(item);
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.', {
          position: 'top-right',
        });
      }
    }
    fetchItem();
  }, [itemId]);

  return (
    <>
      {item && <MovieCard item={item} />}
      <ToastContainer autoClose={3000} />
    </>
  );
}
