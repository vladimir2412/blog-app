import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={() => toggleTheme()}>Toggle Theme</button>
			<Link to="/">Home page</Link>
			<Link to="/about">About page</Link>
			<Suspense fallback={<h1>loading...</h1>}>
				<Routes>
					<Route path="/" element={<AboutPage />} />
					<Route path="/about" element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
