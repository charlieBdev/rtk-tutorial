import { configureStore } from '@reduxjs/toolkit';

const reducerFn = (state = { counter: 0 }, action) => {
	// Synchronous Func
	// Must not mutate

	switch (action.type) {
		case 'INC':
			// return { ...state, counter: state.counter + 1 };
			return { counter: state.counter + 1 };

		case 'DEC':
			// return { ...state, counter: state.counter - 1 };
			return { counter: state.counter - 1 };

		case 'ADD':
			return { counter: state.counter + action.payload };

		default:
			return state;
	}
};

const store = configureStore({ reducer: reducerFn });

export default store;
