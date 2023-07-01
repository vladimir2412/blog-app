import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = ({ className, children, theme, ...OtherProps }) => {
	return (
		<button className={classNames(cls.Button, {}, [className, theme])} {...OtherProps}>
			{children}
		</button>
	);
};