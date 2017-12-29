// データ本体
class Data {
	constructor(reducers, initState) {
		this.reducers = reducers;
		this.state = initState;
	}
	reduce(type, action) {
		// 全reducer適用
		this.state = this.reducers.reduce(
			(state, reducer) => reducer(type, action, state),
			this.state,
		);
		return this.state;
	}
	getState() {
		return this.state;
	}
}


class Store {
	constructor(data) {
		this.data = data;
		this.connected = [];
	}
	connect(elm, mapStateToText = (state) => "") {
		this.connected.push(() => {
			elm.innerText = mapStateToText(this.data.getState());
		});
	}
	render() {
		this.connected.map((func) => func());
	}
	dispatch(type, action = {}) {
		const prevState = this.data.getState();
		const newState = this.data.reduce(type, action);
		if (newState !== prevState) {
			// 変更あり
			this.render();
		}
	}
}

const createStore = (reducers, initValue = {}) => {
	const data = new Data(reducers, initValue);
	return new Store(data);
};

module.exports = { createStore };
