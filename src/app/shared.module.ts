import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { CurrencyInputComponent } from '@app/shared/currency-input/currency-input.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		CurrencyInputComponent,
	],
	providers: [
	],
	exports: [
		CurrencyInputComponent,
	]
})
export class SharedModule { }
