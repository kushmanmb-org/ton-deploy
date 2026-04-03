/**
 * TON Deploy - Main Entry Point
 * 
 * This module provides utility functions for TON node deployment
 * using Docker and Docker Compose.
 */

'use strict';

const { execSync, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

/**
 * Check if required environment variables are set
 * @returns {Object} Validation result with errors if any
 */
function validateEnvironment() {
  const required = ['PUBLIC_IP', 'POSTGRES_DB', 'POSTGRES_USER', 'POSTGRES_PASSWORD'];
  const errors = [];
  
  for (const envVar of required) {
    if (!process.env[envVar]) {
      errors.push(`Missing required environment variable: ${envVar}`);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Check if Docker is available and running
 * @returns {boolean} True if Docker is available
 */
function checkDocker() {
  try {
    execSync('docker info', { stdio: 'ignore' });
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Check if docker-compose is available
 * @returns {boolean} True if docker-compose is available
 */
function checkDockerCompose() {
  try {
    execSync('docker-compose --version', { stdio: 'ignore' });
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Get the project root directory
 * @returns {string} Absolute path to project root
 */
function getProjectRoot() {
  return path.resolve(__dirname);
}

/**
 * Check if required template files exist
 * @returns {Object} Validation result
 */
function checkTemplateFiles() {
  const templates = [
    'docker-compose.yaml.template',
    'ton.Dockerfile.template',
    'api.Dockerfile.template',
    'indexer.Dockerfile.template',
    'local_config.cfg.template'
  ];
  
  const projectRoot = getProjectRoot();
  const missing = [];
  
  for (const template of templates) {
    const filePath = path.join(projectRoot, template);
    if (!fs.existsSync(filePath)) {
      // Also check in template directory
      const templatePath = path.join(projectRoot, 'template', template);
      if (!fs.existsSync(templatePath)) {
        missing.push(template);
      }
    }
  }
  
  return {
    valid: missing.length === 0,
    missing
  };
}

/**
 * Run pre-deployment checks
 * @returns {Object} Check results
 */
function preDeploymentChecks() {
  const results = {
    docker: checkDocker(),
    dockerCompose: checkDockerCompose(),
    templates: checkTemplateFiles(),
    environment: validateEnvironment()
  };
  
  results.ready = results.docker && 
                  results.dockerCompose && 
                  results.templates.valid && 
                  results.environment.valid;
  
  return results;
}

module.exports = {
  validateEnvironment,
  checkDocker,
  checkDockerCompose,
  getProjectRoot,
  checkTemplateFiles,
  preDeploymentChecks
};
