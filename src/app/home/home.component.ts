import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	roomMinValue = 1;
	roomMaxValue = 5;
	adultMinValue = 1;
	adultMaxValue = 4;
	childrenMaxValue = this.adultMaxValue - 1;
	childrenMinValue = 0;
	rooms = 1;
	adults = 1;
	child = 0;
	constructor() {}
	ngOnInit() {
		//this.incrDecr('room', true);
	}

	incrDecr(type, flag) {
		if (type == 'room' && flag && this.rooms < this.roomMaxValue) {
			this.rooms++;
			this.adultMaxValue = this.rooms * 4;
			this.childrenMaxValue = this.adultMaxValue - this.adults;
		} else if (type == 'room' && !flag && this.rooms > this.roomMinValue) {
			this.rooms--;
			this.adultMaxValue = this.rooms * 4;
			this.childrenMaxValue = this.adultMaxValue - this.adults;
			if (this.adults > this.adultMaxValue || this.child > this.childrenMaxValue) {
				this.adults = this.adultMaxValue;
				if (this.child > this.childrenMaxValue) {
					this.child = 0;
				}
			}
		}

		if (
			type == 'adult' &&
			flag &&
			this.adults < this.adultMaxValue &&
			this.adults + this.child < this.adultMaxValue
		) {
			this.adults++;
			this.childrenMaxValue = this.adultMaxValue - this.adults;
		} else if (type == 'adult' && !flag && this.adults > this.adultMinValue) {
			this.adults--;
			this.childrenMaxValue = this.adultMaxValue - this.adults;
			if (this.child > this.childrenMaxValue) {
				this.child = this.adultMaxValue - this.adults;
			}
		}

		if (type == 'child' && flag && this.child < this.childrenMaxValue) {
			this.child++;
		} else if (type == 'child' && !flag && this.child > this.childrenMinValue) {
			this.child--;
		}
	}
}
