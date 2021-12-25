import {makeAutoObservable} from 'mobx';
type Count = number;
class CountStore {
	count: Count = 0;
	constructor() {
		makeAutoObservable(this);
	}
	increment() {
		this.count = this.count + 1;
	}
	decrement() {
		this.count = this.count - 1;
	}
}
export default new CountStore();
