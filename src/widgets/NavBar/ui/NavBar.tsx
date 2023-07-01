import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}
export const NavBar = ({ className }: NavBarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
        Home page
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        About page
      </AppLink>
    </div>
  </div>
);
