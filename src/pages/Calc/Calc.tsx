import React, { ReactElement, MouseEvent, ChangeEvent, KeyboardEvent, useState } from 'react';
import { calc, str2arr, checkDoubleSymbol, checkComma } from '../../lib/Calc';
import { Box, Button, TextInput } from '../../UI/CalcUI';

const calcInputs: string[] = ['C', '√', '%', '/', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', ','];

function Calc(): ReactElement {

	const [history, setHistory] = useState('');
	const [value, setValue] = useState('');

	const valueSwitcher = (str: string, sli?: boolean) => {
		switch (sli ? str.slice(-1) :str) {
		case 'C':
			return setValue(''), setHistory('');
		case '√':
			return setValue(prev => Math.sqrt(+(calc(str2arr(prev.replace(',','.'))))) + ''), setHistory(`√${value}`);
		case '%':
			return setValue(prev => (+(calc(str2arr(prev.replace(',','.')))) / 100) + ''), setHistory(`%${value}`);
		case '/':
			return setValue(prev => checkDoubleSymbol(prev.slice(-1)) && prev ? `${prev}/` : prev);
		case '×':
			return setValue(prev => checkDoubleSymbol(prev.slice(-1)) && prev ? `${prev}×` : prev);
		case '+':
			return setValue(prev => checkDoubleSymbol(prev.slice(-1)) && prev ? `${prev}+` : prev);
		case '-':
			return setValue(prev => checkDoubleSymbol(prev.slice(-1)) && prev ? `${prev}-` : prev);
		case '00':
			return setValue(prev => prev ? `${prev}00` : '');
		case '0':
			return setValue(prev => prev === '0' ? prev : `${prev}0`);
		case ',':
			return setValue(prev => checkComma(prev) && checkDoubleSymbol(prev.slice(-1)) ? prev ? `${prev},` : '0,' : prev);
		default:
			return sli ? setValue(str) : setValue(prev => `${prev}${str}`);
		}
	};

	const handleValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const input = e.target.value
			.replace('*', '×')
			.replace('.', ',')
			.replace(/[A-Za-zА-Яа-яЁё]|[@#$^&!'";:><`~?|\\]/, '');
		valueSwitcher(input, true);
	};

	const pressValue = (e: MouseEvent<HTMLButtonElement>) => {
		valueSwitcher((e.target as HTMLInputElement).value);
	};

	const calculate = () => {
		setValue(calc(str2arr(value)));
		setHistory(value);
	};

	const handleCalc = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			calculate();
		}
	};

	return (
		<Box onKeyDown={e => handleCalc(e)} className='calc__wrapper'>
			<Box className='calc' direction='column'>
				<Box align='end' justify='end' className='calc__history'>{history}</Box>
				<TextInput
					inputMode='none'
					maxLength={12}
					className='calc__res'
					value={value}
					onChange={e => handleValue(e)}
				/>
				<Box justify='between' wrap='wrap' className='calc__controls'>
					{calcInputs.map((item, i) => {
						return (
							<Button
								key={i}
								variant='default'
								value={item}
								onClick={e => pressValue(e)}>
								{item}
							</Button>
						);
					})}
					<Button variant='contained' onClick={calculate}>=</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default Calc;