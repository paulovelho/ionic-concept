import { Component } from '@angular/core';

import { Store } from '@app/services/store/store.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	public appPages = [
		{ title: 'HOME (Parts Search)', url: '/home', icon: 'home' },
		{ title: 'CUSTOMER BACKLOG', url: '/parts', icon: 'ticket' },
		{ title: 'APPROVALS', url: '/orders', icon: 'checkmark' },
	];

	public myAppPages = [
		{ title: 'FEEDBACK', url: '#', icon: 'chatbubble' },
		{ title: 'WHAT\'S NEW', url: '#', icon: 'sparkles' },
	];

	public darkMode: boolean;

	constructor(
		private Store: Store,
	) {
		this.Initialize();
	}

	private async Initialize() {
		this.changeLights(this.Store.isDark());
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
		prefersDark.addListener((setting) => this.changeLights(setting.matches));
	}

	private changeLights(dark: boolean){
		this.darkMode = dark;
		this.Store.set("dark-mode", dark);
		document.body.classList.toggle('dark', dark);
		document.body.classList.toggle('light', !dark);
	}
	public pressLightSwitch(event) {
		this.changeLights(event.detail.checked);
	}
}
