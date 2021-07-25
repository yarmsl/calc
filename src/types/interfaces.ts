import React from 'react';

export interface MainLt  {
	children?: React.ReactNode;
}

export interface BoxUI  {
	children?: React.ReactNode;
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	align?: 'start' | 'center' | 'end';
	justify?: 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly';
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	className?: string;
	onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}

export interface ButtonUI {
	children?: React.ReactNode;
	variant?: 'contained' | 'default';
	value?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface TextInputUI {
	inputMode?: 'text' | 'decimal' | 'numeric' | 'none' | 'tel' | 'email' | 'search' | 'url';
	placeholder?: string;
	maxLength?: number;
	className?: string;
	autoFocus?: boolean;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}