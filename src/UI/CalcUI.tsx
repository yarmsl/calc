import React, { ReactElement } from 'react';
import { BoxUI, ButtonUI, TextInputUI } from '../types/interfaces';

const Box = ({
	children, 
	direction = 'row',
	align = 'start',
	justify = 'start',
	wrap='nowrap',
	className = ''
}: BoxUI): ReactElement => {
	return (
		<div className={`box box__${direction} box__align_${align} box__justify_${justify} box__${wrap} ${className}`}>
			{children}
		</div>
	);
};

const Button = ({
	children,
	variant = 'default',
	value,
	onClick
}: ButtonUI): ReactElement => {
	return (
		<button onClick={onClick} value={value} className={`button button__${variant}`}>
			{children}
		</button>
	);
};

const TextInput = ({
	inputMode = 'text',
	placeholder = '',
	maxLength,
	className,
	autoFocus,
	value,
	onChange
}: TextInputUI): ReactElement => {
	return (
		<>
			<input autoFocus={autoFocus} type="text" onChange={onChange} value={value} inputMode={inputMode} placeholder={placeholder} maxLength={maxLength} className={`input ${className}`}/>
		</>
	);
};

export { Box, Button, TextInput };