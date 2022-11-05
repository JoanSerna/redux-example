

console.log('init');

// ACTIONS 
const INCREASE_COUNTER = 'INCREASE_COUNTER';
const DECREASE_COUNTER = 'DECREASE_COUNTER';

function increaseCounter(amount){
	return {
		type: INCREASE_COUNTER,
		payload: amount
	}
}
function decreaseCounter(amount){
	return {
		type: DECREASE_COUNTER,
		payload: amount
	}
}

// REDUCER

function counterReducer(state = {count: 0,increaseClicks:0,decreaseClicks:0} ,action) {
	switch(action.type){
		case INCREASE_COUNTER:
			return {
				...state,
				count: state.count + action.payload,
				increaseClicks : state.increaseClicks + 1
			}
		case DECREASE_COUNTER:
			return {
				...state,
				count: state.count - action.payload,
				decreaseClicks: state.decreaseClicks + 1
			}
		default: 
			return state;
	}
}

let store = Redux.createStore(counterReducer);


const increaseButton = document.getElementById('increaseCounterButton');
const decreaseButton = document.getElementById('decreaseCounterButton');
const countLabel = document.getElementById('countLabel');


increaseButton.addEventListener('click', () => store.dispatch(increaseCounter(1)));
decreaseButton.addEventListener('click', () => store.dispatch(decreaseCounter(1)));

const render = () => {
	// get current state
	const state = store.getState();
	countLabel.innerText = state.count;
	console.log(state);
	increaseButton.innerHTML = `+ (${state.increaseClicks})`;
	decreaseButton.innerHTML = `- (${state.decreaseClicks})`;
}
render();

store.subscribe(render)
