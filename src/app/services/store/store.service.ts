import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable()
export class Store {

	constructor(
	) {
	}

	public set(key, value): void {
		localStorage.setItem(key, value);
	}
	public get(key): any {
		return localStorage.getItem(key);
	}
	public getBool(key): boolean {
		let b = localStorage.getItem(key);
		return b === 'true';
	}

	public isDark(): boolean {
		return this.getBool("dark-mode");
	}


	// TOKEN Maintenance
	public setToken(token: string): void {
		localStorage.setItem("token", token);
	}
	public getToken(): string {
		return localStorage.getItem("token") || null;
	}

	public setExpiration(expire: number): void {
		localStorage.setItem("expires", expire.toString());
	}
	public isExpired(): boolean {
		var ts = Math. round((new Date()). getTime() / 1000);
		let expires = localStorage.getItem("expires");
		return (+expires <= ts);
	}


}
