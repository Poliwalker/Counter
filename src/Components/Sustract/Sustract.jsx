import React from 'react';
import { CounterButtonSustract } from './Sustract.Style';

import { FiDivideCircle } from 'react-icons/fi';
import { RiNumber0 } from 'react-icons/ri';
import { RiNumber1 } from 'react-icons/ri';
import { RiNumber2 } from 'react-icons/ri';
import { RiNumber5 } from 'react-icons/ri';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useCountContext } from '../../Context/CountContext';
import { TYPES } from '../../ActionsTypes/CountActions';

export const Sustract = () => {
	const { dispatch } = useCountContext();

	const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });

	const handleDecrement_10 = () => dispatch({ type: TYPES.DECREMENT_10 });

	const handleDivide_2 = () => dispatch({ type: TYPES.DIVIDE_2 });

	const handleDivide_5 = () => dispatch({ type: TYPES.DIVIDE_5 });

	return (
		<>
			<CounterButtonSustract last onClick={handleDivide_5}>
				<FiDivideCircle size="32px" color="white" />
				<RiNumber5 size="32px" color="white" />
			</CounterButtonSustract>
			<CounterButtonSustract onClick={handleDivide_2}>
				<FiDivideCircle size="32px" color="white" />
				<RiNumber2 size="32px" color="white" />
			</CounterButtonSustract>

			<CounterButtonSustract onClick={handleDecrement_10}>
				<p>
					-<RiNumber1 size="32px" color="white" />
					<RiNumber0 size="32px" color="white" />
				</p>
			</CounterButtonSustract>
			<CounterButtonSustract onClick={handleDecrement}>
				<AiOutlineMinusCircle size="32px" color="white" />
			</CounterButtonSustract>
		</>
	);
};
