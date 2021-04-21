import { Component, OnInit } from '@angular/core';

import { Store } from '@app/services/store/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

	public logo: string;

  constructor(
  	private Store: Store,
  ) { }

  ngOnInit() {
  	this.logo = this.Store.isDark() ? "aar_logo" : "aar_logo-black";
  }

}
