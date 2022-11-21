import React from 'react';
import { useCountContext } from '../../Context/CountContext';
import {
	CounterButtonContainerStyled,
	CounterContainerStyled,
	CounterSpanStyled,
} from './CounterStyle';

import { AddCounter } from '../Add/AddCounter';
import { Sustract } from '../Sustract/Sustract';
import Reset from '../Reset/Reset';

const Counter = () => {
	const { state } = useCountContext();

	return (
		<>
			<CounterContainerStyled>
				<CounterButtonContainerStyled>
					<Sustract />
					<CounterSpanStyled>{state.count}</CounterSpanStyled>
					<AddCounter />
				</CounterButtonContainerStyled>
				<Reset />
			</CounterContainerStyled>
		</>
	);
};

export default Counter;
