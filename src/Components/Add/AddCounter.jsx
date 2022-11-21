import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';
import { RiNumber5 } from 'react-icons/ri';
import { TYPES } from '../../ActionsTypes/CountActions';
import { useCountContext } from '../../Context/CountContext';
import { CounterButtonStyled } from './AddCounterStyle';

export const AddCounter = () => {
	const { dispatch } = useCountContext();

	const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });

	const handleIncrement_10 = () => dispatch({ type: TYPES.INCREMENT_10 });

	const handleMultiply_2 = () => dispatch({ type: TYPES.MULTIPLY_2 });

	const handleMultiply_5 = () => dispatch({ type: TYPES.MULTIPLY_5 });

	return (
		<>
			<CounterButtonStyled onClick={handleIncrement}>
				<AiOutlinePlusCircle size="32px" color="white" />
			</CounterButtonStyled>
			<CounterButtonStyled onClick={handleIncrement_10}>
				<p>
					+<RiNumber5 size="32px" color="white" />
				</p>
			</CounterButtonStyled>
			<CounterButtonStyled onClick={handleMultiply_2}>
				<FaRegTimesCircle size="32px" color="white" />
			</CounterButtonStyled>
			<CounterButtonStyled last onClick={handleMultiply_5}>
				<FaRegTimesCircle size="32px" color="white" />
			</CounterButtonStyled>
		</>
	);
};
