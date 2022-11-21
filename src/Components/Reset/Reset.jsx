import React from 'react';
import { TYPES } from '../../ActionsTypes/CountActions';
import { useCountContext } from '../../Context/CountContext';
import { BiReset } from 'react-icons/bi';

const Reset = () => {
	const { dispatch } = useCountContext();

	const handleReset = () => dispatch({ type: TYPES.RESET });
	return (
		<BiReset
			cursor="pointer"
			size="38px"
			color="#f24c4c"
			onClick={handleReset}
		/>
	);
};

export default Reset;
