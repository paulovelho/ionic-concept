import { Component, forwardRef, Input, HostBinding } from '@angular/core';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
  providers: [{
  	provide: NG_VALUE_ACCESSOR,
  	useExisting: forwardRef(() => CurrencyInputComponent),
  	multi: true,
  }],
})
export class CurrencyInputComponent implements ControlValueAccessor {
  @HostBinding('attr.id') externalId = '';
  private _ID = '';
	@Input()
  set id(id: string) {
    this._ID = id;
    this.externalId = null;
  }
  get id() {
    return this._ID;
  }

	public symbol: string = "R$";

  @Input('amount') amount = 0.00;
  onChange: any = (delta: any) => {};
  onTouched: any = () => {};

  constructor() { }

	get value(): any { return this.amount; }
	set value(val: any) {
		console.info("set val", val);
		this.amount = val
		this.onChange(val);
		this.onTouched();
	}

	updateChanges(): void { 
		this.onChange(this.amount);
	}

	writeValue(delta: any): void {
		if(delta)	this.amount = delta;
	}
	registerOnChange(fn: (v: any) => void): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}
}
