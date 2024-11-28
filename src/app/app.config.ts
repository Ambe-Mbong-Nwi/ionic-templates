import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface AppConfig {
	demoMode: boolean;
	buyNowLink: string;
}

export const BaseAppConfig: AppConfig = {
	buyNowLink: "https://bit.ly/cc2_OpusUIkit",
	demoMode: false
};

