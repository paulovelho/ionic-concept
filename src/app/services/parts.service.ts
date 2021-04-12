import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor() { }

  private pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  private randomSerial() {
  	return "SN" + Math.random() * (999);
  }
  private randomName() {
  	let from = ["Fuselage", "Cockpit", "Passenger", "Plane", "Wall", "Wheel", "Airduct", "Turbine", "Motor", "Wing"];
  	let adjective = ["good", "extra", "lucky", "bad", "rotten", "curve", "straight", "bold", "last", "new", "refurbished", "angular", "flying"];
  	let piece = ["nail", "end", "glue", "hammer", "screw", "vent", "wheel", "luck", "fuselage", "oil", "thing", "something", "piece", "driver"];
  	return `${this.pick(from)}'s ${this.pick(adjective)} ${this.pick(piece)}`;
  }
  private randomPrice() {
  	let value = Math.random() * 999 + 42;
  	return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  public getParts(qtt: number) {
  	let data = [];
		let i = 0;
		while( i < qtt ){
			let part = {
				name: this.randomName(),
				serial: this.randomSerial(),
				type: this.pick(["new", "refurbished", "broken"]),
				price: this.randomPrice(),
			};
			data.push(part);
			i++;
		}
		return data;
	}

}
