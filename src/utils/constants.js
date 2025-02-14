// Authentication status constants
export const AUTH_STATUS = {
    LOADING: 'LOADING',
    AUTHENTICATED: 'AUTHENTICATED',
    UNAUTHENTICATED: 'UNAUTHENTICATED',
    ERROR: 'ERROR'
};

// Local storage keys
export const STORAGE_KEYS = {
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken',
    USER_DATA: 'userData'
};

// API endpoints for authentication
export const AUTH_ENDPOINTS = {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    REGISTER: '/api/auth/register'
};

// Error messages
export const AUTH_ERRORS = {
    INVALID_CREDENTIALS: 'Invalid email or password',
    SESSION_EXPIRED: 'Session expired. Please log in again',
    NETWORK_ERROR: 'Network error. Please try again'
};