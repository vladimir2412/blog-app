import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
const App = () => {
	return (
		<div className="app">
			<Link to="/">Home page</Link>
			<Link to="/about">About page</Link>
			<Suspense fallback={<h1>loading...</h1>}>
				<Routes>
					<Route path="/" element={<AboutPageAsync />} />
					<Route path="/about" element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
