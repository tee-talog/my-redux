const Reducers = [
	(type, action, state) => {
		switch (type) {
			case "INCREMENT": {
				return {
					...state,
					num: state.num + 1,
				};
			}
			case "DECREMENT": {
				return {
					...state,
						num: state.num - 1,
				};
			}
			default: {
				return state;
			}
		}
	},
	(type, action, state) => {
		switch (type) {
			case "TEXT_CHANGE": {
				return {
					...state,
					text: action.text,
				};
			}
			default: {
				return state;
			}
		}
	},
];

module.exports = Reducers;
