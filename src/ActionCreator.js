const ActionCreator = (store) => ({
	increment() {
		store.dispatch("INCREMENT");
	},
	decrement() {
		store.dispatch("DECREMENT");
	},
	textChange(event) {
		store.dispatch("TEXT_CHANGE", { text: event.target.value });
	},
});

module.exports = ActionCreator;
