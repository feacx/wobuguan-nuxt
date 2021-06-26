export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Preloader } from '../..\\components\\Preloader.vue'
export { default as Banner } from '../..\\components\\index\\Banner.vue'
export { default as Why } from '../..\\components\\index\\Why.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components_Navbar" */).then(c => c.default || c)
export const LazyPreloader = import('../..\\components\\Preloader.vue' /* webpackChunkName: "components_Preloader" */).then(c => c.default || c)
export const LazyBanner = import('../..\\components\\index\\Banner.vue' /* webpackChunkName: "components_index/Banner" */).then(c => c.default || c)
export const LazyWhy = import('../..\\components\\index\\Why.vue' /* webpackChunkName: "components_index/Why" */).then(c => c.default || c)
