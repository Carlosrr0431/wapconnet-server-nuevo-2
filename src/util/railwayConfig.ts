/*
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Railway Network Configuration Helper
 * This file contains utilities for Railway private network configuration
 */

// Railway private network configuration
export const RAILWAY_CONFIG = {
  // Private network domain
  PRIVATE_DOMAIN: 'wapconnet-server-nuevo-2.railway.internal',
  
  // Default ports
  DEFAULT_PORT: '21465',
  REDIS_PORT: '6379',
  MONGODB_PORT: '27017',
  
  // Network helpers
  getPrivateUrl: (port?: string) => {
    const p = port || RAILWAY_CONFIG.DEFAULT_PORT;
    return `http://${RAILWAY_CONFIG.PRIVATE_DOMAIN}:${p}`;
  },
  
  getRedisUrl: () => {
    return `redis://${RAILWAY_CONFIG.PRIVATE_DOMAIN}:${RAILWAY_CONFIG.REDIS_PORT}`;
  },
  
  getMongoUrl: (database: string = 'tokens') => {
    return `mongodb://${RAILWAY_CONFIG.PRIVATE_DOMAIN}:${RAILWAY_CONFIG.MONGODB_PORT}/${database}`;
  },
  
  // Get host with default Railway configuration
  getHost: () => {
    return RAILWAY_CONFIG.getPrivateUrl();
  },
  
  // Get Redis host with default Railway configuration
  getRedisHost: () => {
    return RAILWAY_CONFIG.PRIVATE_DOMAIN;
  }
};

// Helper function to replace URLs for Railway private network
export function adaptUrlForRailway(url: string): string {
  // Replace localhost and 127.0.0.1 with Railway private domain
  return url
    .replace(/http:\/\/localhost/g, `http://${RAILWAY_CONFIG.PRIVATE_DOMAIN}`)
    .replace(/https:\/\/localhost/g, `http://${RAILWAY_CONFIG.PRIVATE_DOMAIN}`)
    .replace(/http:\/\/127\.0\.0\.1/g, `http://${RAILWAY_CONFIG.PRIVATE_DOMAIN}`)
    .replace(/https:\/\/127\.0\.0\.1/g, `http://${RAILWAY_CONFIG.PRIVATE_DOMAIN}`);
}
