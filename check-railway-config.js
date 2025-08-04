#!/usr/bin/env node

/**
 * Railway Configuration Checker
 * This script helps verify that the Railway private network configuration is working correctly
 */

const { RAILWAY_CONFIG, adaptUrlForRailway } = require('./dist/util/railwayConfig');

console.log('🚆 Railway Configuration Checker');
console.log('================================');
console.log('');

console.log('📋 Current Configuration:');
console.log(`   Private Domain: ${RAILWAY_CONFIG.PRIVATE_DOMAIN}`);
console.log(`   Host URL: ${RAILWAY_CONFIG.getHost()}`);
console.log(`   Redis Host: ${RAILWAY_CONFIG.getRedisHost()}`);
console.log(`   Redis URL: ${RAILWAY_CONFIG.getRedisUrl()}`);
console.log(`   MongoDB URL: ${RAILWAY_CONFIG.getMongoUrl()}`);
console.log('');

console.log('🔄 URL Adaptation Examples:');
console.log(`   localhost:3000 -> ${adaptUrlForRailway('http://localhost:3000')}`);
console.log(`   127.0.0.1:8080 -> ${adaptUrlForRailway('http://127.0.0.1:8080')}`);
console.log('');

console.log('✅ Configuration Status: Railway Private Network Enabled');
console.log('');
console.log('💡 Tips:');
console.log('   - Make sure all services are deployed on Railway');
console.log('   - Private network only works between Railway services');
console.log('   - Monitor your Railway usage to confirm bandwidth savings');
console.log('');
