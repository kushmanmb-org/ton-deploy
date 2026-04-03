/**
 * Tests for TON Deploy utilities
 */

'use strict';

const { describe, it, mock, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const path = require('path');

// Import the module under test
const tonDeploy = require('../index.js');

describe('TON Deploy Utilities', () => {
  describe('validateEnvironment', () => {
    const originalEnv = { ...process.env };
    
    beforeEach(() => {
      // Clear relevant env vars before each test
      delete process.env.PUBLIC_IP;
      delete process.env.POSTGRES_DB;
      delete process.env.POSTGRES_USER;
      delete process.env.POSTGRES_PASSWORD;
    });
    
    afterEach(() => {
      // Restore original environment
      process.env = { ...originalEnv };
    });
    
    it('should return invalid when required env vars are missing', () => {
      const result = tonDeploy.validateEnvironment();
      
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.length > 0);
      assert.ok(result.errors.some(e => e.includes('PUBLIC_IP')));
    });
    
    it('should return valid when all required env vars are set', () => {
      process.env.PUBLIC_IP = '127.0.0.1';
      process.env.POSTGRES_DB = 'tondb';
      process.env.POSTGRES_USER = 'tonuser';
      process.env.POSTGRES_PASSWORD = 'tonpass';
      
      const result = tonDeploy.validateEnvironment();
      
      assert.strictEqual(result.valid, true);
      assert.strictEqual(result.errors.length, 0);
    });
  });
  
  describe('getProjectRoot', () => {
    it('should return the project root directory', () => {
      const root = tonDeploy.getProjectRoot();
      
      assert.ok(typeof root === 'string');
      assert.ok(path.isAbsolute(root));
    });
  });
  
  describe('checkTemplateFiles', () => {
    it('should check for template files existence', () => {
      const result = tonDeploy.checkTemplateFiles();
      
      assert.ok(typeof result === 'object');
      assert.ok(typeof result.valid === 'boolean');
      assert.ok(Array.isArray(result.missing));
    });
  });
  
  describe('checkDocker', () => {
    it('should return a boolean indicating Docker availability', () => {
      const result = tonDeploy.checkDocker();
      
      assert.ok(typeof result === 'boolean');
    });
  });
  
  describe('checkDockerCompose', () => {
    it('should return a boolean indicating docker-compose availability', () => {
      const result = tonDeploy.checkDockerCompose();
      
      assert.ok(typeof result === 'boolean');
    });
  });
  
  describe('preDeploymentChecks', () => {
    it('should return comprehensive check results', () => {
      const results = tonDeploy.preDeploymentChecks();
      
      assert.ok(typeof results === 'object');
      assert.ok(typeof results.docker === 'boolean');
      assert.ok(typeof results.dockerCompose === 'boolean');
      assert.ok(typeof results.templates === 'object');
      assert.ok(typeof results.environment === 'object');
      assert.ok(typeof results.ready === 'boolean');
    });
  });
});
