import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const Component = () => {
	const { t, i18n } = useTranslation();
	const handleTranslate = () => {
		i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
	};
	return (
		<div>
			<button onClick={handleTranslate}>{t('translate')}</button>
			{t('test')}
		</div>
	);
};

const App = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<NavBar />
				<Component />
				<div className="content-page">
					<SideBar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
