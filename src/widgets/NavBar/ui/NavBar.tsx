import { classNames } from 'shared/lib/classNames/classNames';
import {
  AppLink,
  AppLinkTheme,
} from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}
export const NavBar = ({ className }: NavBarProps) => {
  const about = '/about';
  const { t } = useTranslation('nav');
  return (
    <div
      className={classNames(cls.Navbar, {}, [className])}
    >
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={cls.mainLink}
        >
          {t('main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={about}>
          {t('about')}
        </AppLink>
      </div>
    </div>
  );
};
