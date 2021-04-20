import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	public appPages = [
		{ title: 'HOME (Parts Search)', url: '/parts', icon: 'home' },
		{ title: 'CUSTOMER BACKLOG', url: '/orders', icon: 'ticket' },
		{ title: 'APPROVALS', url: '/orders', icon: 'checkmark' },
	];

	public myAppPages = [
		{ title: 'FEEDBACK', url: '/parts', icon: 'chatbubble' },
		{ title: 'WHAT\'S NEW', url: '/orders', icon: 'sparkles' },
	];

	public darkMode: boolean;

	constructor(
	) {
		this.Initialize();
	}

	private async Initialize() {
		this.changeLights(true);
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
		prefersDark.addListener((setting) => this.changeLights(setting.matches));
	}

	private changeLights(dark: boolean){
		console.info("setting lights to ", dark);
		this.darkMode = dark;
		document.body.classList.toggle('dark', dark);
	}
	public pressLightSwitch(event) {
		this.changeLights(event.detail.checked);
	}
}
