# TON Deploy Project Roadmap

This document outlines the development roadmap and future plans for the TON Deploy project.

## Current Status

**Version:** 1.0.0

The TON Deploy project is currently in a stable state with the following core features:

- ✅ Docker Compose setup for TON node deployment
- ✅ Multi-container architecture (TON Node, API, Parser, PostgreSQL, Nginx)
- ✅ Environment-based configuration via template files
- ✅ Automated deployment scripts (`start.sh`, `stop.sh`)
- ✅ CI/CD pipeline with testing and validation
- ✅ Basic documentation and licensing

---

## Roadmap

### Phase 1: Foundation & Stability (Q2 2026)

#### v1.1.0 - Infrastructure Improvements

- [ ] **Enhanced Health Checks**
  - Add container health checks to all Docker services
  - Implement automated restart policies for failed containers
  - Create a health monitoring dashboard endpoint

- [ ] **Logging & Monitoring**
  - Centralized logging with structured log output
  - Integration with common monitoring tools (Prometheus/Grafana ready)
  - Log rotation and retention policies

- [ ] **Configuration Management**
  - Support for multiple environment configurations (dev, staging, production)
  - Secrets management integration (Vault, AWS Secrets Manager)
  - Configuration validation before deployment

### Phase 2: Scalability & Performance (Q3 2026)

#### v1.2.0 - Horizontal Scaling

- [ ] **Container Orchestration**
  - Kubernetes deployment manifests (Helm charts)
  - Docker Swarm support
  - Auto-scaling configuration based on load

- [ ] **Database Optimization**
  - PostgreSQL connection pooling (PgBouncer)
  - Read replica support
  - Automated backup and restore procedures

- [ ] **Caching Layer**
  - Redis integration for API response caching
  - Session management for multi-instance API deployments

### Phase 3: Developer Experience (Q4 2026)

#### v1.3.0 - Developer Tools

- [ ] **Local Development Environment**
  - Docker Compose profiles for development mode
  - Hot-reload support for development
  - Mock services for offline development

- [ ] **Testing Infrastructure**
  - Integration test suite
  - Load testing tools and benchmarks
  - Automated security scanning in CI/CD

- [ ] **Documentation Improvements**
  - API documentation (OpenAPI/Swagger)
  - Architecture decision records (ADRs)
  - Video tutorials and quick-start guides

### Phase 4: Enterprise Features (Q1 2027)

#### v2.0.0 - Enterprise Ready

- [ ] **High Availability**
  - Multi-region deployment support
  - Failover and disaster recovery procedures
  - Zero-downtime deployment strategies

- [ ] **Security Enhancements**
  - TLS/SSL certificate automation (Let's Encrypt integration)
  - Network security policies
  - Rate limiting and DDoS protection
  - Audit logging for compliance

- [ ] **Multi-tenancy**
  - Isolated environments per tenant
  - Resource quotas and limits
  - Billing and usage metrics

---

## Contributing to the Roadmap

We welcome community input on our roadmap! If you have suggestions or would like to contribute:

1. **Feature Requests**: Open a GitHub issue with the `enhancement` label
2. **Bug Reports**: Open a GitHub issue with the `bug` label
3. **Discussions**: Use GitHub Discussions for broader topics
4. **Pull Requests**: Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md)

---

## Version History

See [HISTORY.md](HISTORY.md) for detailed change logs and version history.

---

## Disclaimer

This roadmap represents our current plans and is subject to change based on:
- Community feedback and priorities
- Technical constraints and opportunities
- Resource availability

Items may be added, removed, or rescheduled as the project evolves.

---

*Last updated: April 2026*
