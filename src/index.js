const { createStore } = require("../lib/createStore");

const Reducers = require("./Reducers");
const ActionCreator = require("./ActionCreator");

// -----------------------------------------------------------------------------

const initValue = {
	num: 0,
	text: "",
};

const store = createStore(Reducers, initValue);
const { increment, decrement, textChange } = ActionCreator(store);

// -----------------------------------------------------------------------------

const numElement = document.getElementById("num");
store.connect(
	numElement,
	(state) => `${state.num} times`
);

const incrementElement = document.getElementById("increment");
incrementElement.addEventListener("click", increment);
const decrementElement = document.getElementById("decrement");
decrementElement.addEventListener("click", decrement);

// -----------------------------------------------------------------------------

const textElement = document.getElementById("text");
store.connect(
	textElement,
	(state) => `${state.text}`
);

const textareaElement = document.getElementById("textarea");
textareaElement.addEventListener("keyup", textChange);
textareaElement.addEventListener("keydown", textChange);
textareaElement.addEventListener("keypress", textChange);

// -----------------------------------------------------------------------------

store.render();

