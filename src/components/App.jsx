import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Suspense fallback={''}>
        <SharedLayout />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:itemId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </>
  );
};
