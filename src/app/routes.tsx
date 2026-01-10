import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import App from './app';
import StoriesPage from '@pages/StoriesPage';
import GamesPage from '@pages/GamesPage';
import HobbiesPage from '@pages/HobbiesPage';

const routes = createBrowserRouter([
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
], {
	basename: '/pixofme',
});

export default routes;
