import { TYPES } from '../ActionsTypes/CountActions';

export const counterInitialState = { count: 0 };

export const counterReducer = (state, action) => {
	switch (action.type) {
		case TYPES.INCREMENT:
			return { ...state, count: state.count + 1 };

		case TYPES.INCREMENT_10:
			return { ...state, count: state.count + 10 };

		case TYPES.DECREMENT:
			return { ...state, count: state.count - 1 };

		case TYPES.DECREMENT_10:
			return { ...state, count: state.count - 10 };

		case TYPES.MULTIPLY_2:
			return { ...state, count: state.count * 2 };

		case TYPES.MULTIPLY_5:
			return { ...state, count: state.count * 5 };

		case TYPES.DIVIDE_2:
			return { ...state, count: state.count / 2 };
		case TYPES.DIVIDE_5:
			return { ...state, count: state.count / 5 };
		case TYPES.RESET:
			return counterInitialState;
		default:
			return state;
	}
};
