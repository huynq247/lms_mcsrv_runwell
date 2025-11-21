export const config = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || '',
  AUTH_SERVICE_URL: process.env.REACT_APP_AUTH_SERVICE_URL || '/api',
  CONTENT_SERVICE_URL: process.env.REACT_APP_CONTENT_SERVICE_URL || '/api',
  ASSIGNMENT_SERVICE_URL: process.env.REACT_APP_ASSIGNMENT_SERVICE_URL || '/api',
  
  // Feature flags
  ENABLE_DEBUG_LOGS: false,
  ENABLE_ANALYTICS: true,
  
  // UI settings
  ITEMS_PER_PAGE: 20,
  TIMEOUT_MS: 15000,
  
  // App info
  APP_NAME: 'LMS Platform',
  VERSION: '1.0.0',
  ENVIRONMENT: 'production'
};
