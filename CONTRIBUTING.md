# Contributing to TON Deploy

Thank you for your interest in contributing to TON Deploy! This document provides guidelines and best practices for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Reporting Issues](#reporting-issues)

---

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Docker** (version 20.10 or higher)
- **Docker Compose** (version 2.0 or higher)
- **Node.js** (version 18.0 or higher)
- **npm** (version 9.0 or higher)
- **Git**

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ton-deploy.git
   cd ton-deploy
   ```
3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/kushmanmb-org/ton-deploy.git
   ```

---

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Bug fixes**: Help us squash bugs and improve stability
- **Features**: Implement new features from the [roadmap](ROADMAP.md)
- **Documentation**: Improve or add documentation
- **Tests**: Add or improve test coverage
- **Performance**: Optimize existing functionality
- **Security**: Report or fix security vulnerabilities

### Finding Issues to Work On

- Look for issues labeled `good first issue` for beginner-friendly tasks
- Check issues labeled `help wanted` for tasks needing community help
- Review the [ROADMAP.md](ROADMAP.md) for planned features

---

## Development Setup

### Initial Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the example environment file:
   ```bash
   cp ton_example.env ton.env
   ```

3. Configure your environment variables in `ton.env`

### Running Tests

```bash
# Run all tests
npm test

# Run linting
npm run lint

# Run validation (lint + tests)
npm run validate
```

### Local Development

For local development without a full deployment:

```bash
# Validate Docker configuration
docker compose -f ton-compose.yaml config
```

---

## Pull Request Process

### Before Submitting

1. **Sync with upstream**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** with clear, focused commits

4. **Test your changes**:
   ```bash
   npm run validate
   ```

### Submitting a PR

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a Pull Request against the `main` branch

3. Fill out the PR template completely, including:
   - Clear description of changes
   - Related issue numbers
   - Testing performed
   - Screenshots (if applicable)

### PR Review Process

- All PRs require at least one approval from a maintainer
- CI/CD checks must pass
- Address all review comments
- Keep PRs focused and reasonably sized

---

## Style Guidelines

### Shell Scripts

- Use `#!/bin/bash` shebang
- Include error handling (`set -e` when appropriate)
- Add comments for complex logic
- Follow [ShellCheck](https://www.shellcheck.net/) recommendations

### Dockerfiles

- Use official base images when possible
- Minimize layer count and image size
- Add appropriate labels (maintainer, version, description)
- Follow [Dockerfile best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

### JavaScript

- Use strict mode (`'use strict'`)
- Follow consistent naming conventions
- Add JSDoc comments for functions
- Use `const` and `let` (avoid `var`)

### Documentation

- Use Markdown for all documentation
- Include code examples where helpful
- Keep documentation up-to-date with code changes
- Use clear and concise language

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(docker): add health checks to API container
fix(nginx): resolve upstream timeout issue
docs(readme): update installation instructions
```

---

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

1. **Environment details**: OS, Docker version, Node.js version
2. **Steps to reproduce**: Clear steps to reproduce the issue
3. **Expected behavior**: What you expected to happen
4. **Actual behavior**: What actually happened
5. **Logs/Screenshots**: Relevant logs or screenshots
6. **Configuration**: Relevant configuration (sanitized of secrets)

### Feature Requests

When requesting features, please include:

1. **Problem statement**: What problem does this solve?
2. **Proposed solution**: How would you like it to work?
3. **Alternatives considered**: Other approaches you've thought of
4. **Additional context**: Any other relevant information

---

## Security Issues

**Do not report security vulnerabilities through public GitHub issues.**

Please review our [Security Policy](SECURITY.md) for instructions on reporting security issues.

---

## Questions?

If you have questions about contributing:

- Open a GitHub Discussion
- Check existing issues and discussions
- Review the [README](README.md) and [ROADMAP](ROADMAP.md)

---

Thank you for contributing to TON Deploy! 🚀
