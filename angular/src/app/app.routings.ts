import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";

export const AppRoutes: Routes = [];
export const APP_ROUTINGS: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {
  useHash: true
});
