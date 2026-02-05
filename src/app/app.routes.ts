import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: "full"},
    { path: 'home', loadComponent: () => import("./pages/main-page/main-page.component").then( c => c.MainPageComponent)},
    { path: 'blog', loadComponent: () => import("./pages/blog-page/blog-page.component").then( c => c.BlogPageComponent)},
    { path: 'about', loadComponent: () => import("./pages/about-page/about-page.component").then( c => c.AboutPageComponent)},
    { path: 'privacy-policy', loadComponent: () => import("./pages/privacy-policy-page/privacy-policy-page.component").then( c => c.PrivacyPolicyPageComponent)},
    { path: 'terms-of-services', loadComponent: () => import("./pages/terms-of-services-page/terms-of-services-page.component").then( c => c.TermsOfServicesPageComponent)},
    { path: '**', loadComponent: () => import("./pages/not-found-page/not-found-page.component").then( c => c.NotFoundPageComponent)  }
];
