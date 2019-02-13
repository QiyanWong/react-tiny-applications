import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Router from './router'
ReactDOM.render(<Router/>, document.getElementById('root'));


// serviceWorker.unregister();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';

// const counterReducer = (state = 0, action) => {
//   console.log('Action received: ');
//   console.log(action);
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const Counter = ({value, onIncrement, onDecrement}) => (
//   <div>
//     <h1>{value}</h1>
//     <button onClick={onIncrement}>+</button>
//     <button onClick={onDecrement}>-</button>
//   </div>
// );

// const render = () => {
//   console.log('Current State: ');
//   console.log(store.getState());
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() =>
//         store.dispatch({
//           type: 'INCREMENT',
//         })
//       }
//       onDecrement={() =>
//         store.dispatch({
//           type: 'DECREMENT',
//         })
//       }
//     />,
//     document.getElementById('root'),
//   );
// };
// const store = createStore(counterReducer);
// store.subscribe(render);

// render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA