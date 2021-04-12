import { Component, OnInit } from '@angular/core';

import { PartsService } from '@services/parts.service';

@Component({
	selector: 'app-parts-list',
	templateUrl: './parts-list.component.html',
	styleUrls: ['./parts-list.component.scss'],
})
export class PartsListComponent implements OnInit {

	constructor(
		private Service: PartsService,
	) { }

	public data = [];

	ngOnInit() {
		this.populate();
	}

	private populate() {
		this.data = this.Service.getParts(30);
		console.info("parts: ", this.data);
	}

}
