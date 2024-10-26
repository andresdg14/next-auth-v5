/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * An array of routes that are used fop authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
  '/auth/new-password',
];

/**
 * The prefix for the api authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * An array of routes that are protected
 * These routes will redirect to the login page if the user is not authenticated
 * @type {string[]}
 */
export const protectedRoutes = ['/settings'];

/**
 * The default route to redirect to after a successful login and logout
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
export const DEFAULT_LOGOUT_REDIRECT = '/';
