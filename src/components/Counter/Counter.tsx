import React from 'react';
import counter from '../../store/CountStore';
import {observer} from 'mobx-react-lite';
import './counter.scss';

const Counter = observer(() => {
	return (
		<div className='counter'>
			<h1 className='counter__title'>Count: {counter.count}</h1>
			<button className='counter__button' onClick={() => counter.increment()}>
				INCREMENT
			</button>
			<button className='counter__button' onClick={() => counter.decrement()}>
				DECREMENT
			</button>
		</div>
	);
});

export default Counter;
