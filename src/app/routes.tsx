import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import App from './app';
import StoriesPage from '@pages/StoriesPage';
import GamesPage from '@pages/GamesPage';
import HobbiesPage from '@pages/HobbiesPage';

const routes = createHashRouter([
  {
    path: "/",
    element: <App />,
	errorElement: <NotFoundPage />,
	children: [
		{
			index: true,
			element: <HomePage />
		},
		{
			path: 'stories',
			element: <StoriesPage />
		},
		{
			path: 'Hobbies',
			element: <HobbiesPage />
		},
		{
			path: 'Games',
			element: <GamesPage />
		},
	]
  },
]);

export default routes;
