# Security Policy

## Supported Versions

We actively support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please report it responsibly.

### How to Report

**Please DO NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing:

📧 **security@kushmanmb-org.github.io** (or create a private security advisory on GitHub)

Alternatively, you can use GitHub's private vulnerability reporting feature:

1. Go to the [Security tab](https://github.com/kushmanmb-org/ton-deploy/security) of this repository
2. Click on "Report a vulnerability"
3. Fill out the security advisory form

### What to Include

Please include the following information in your report:

- **Type of issue** (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- **Full paths of source file(s)** related to the vulnerability
- **Location of the affected source code** (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the issue**, including how an attacker might exploit it
- **Any special configuration required** to reproduce the issue

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 5 business days
- **Patch/Fix**: Depends on severity and complexity

We will keep you informed about the progress toward a fix and full announcement.

## Security Best Practices

When deploying TON Deploy, please follow these security best practices:

### Environment Configuration

1. **Never commit secrets**: Keep `ton.env` out of version control
2. **Use strong passwords**: Generate random, strong passwords for database credentials
3. **Limit exposure**: Only expose necessary ports to the network

### Docker Security

1. **Keep images updated**: Regularly update base Docker images
2. **Use non-root users**: Run containers as non-root when possible
3. **Limit resources**: Set memory and CPU limits for containers
4. **Network isolation**: Use Docker networks to isolate services

### Network Security

1. **Use TLS/SSL**: Enable HTTPS for all external traffic
2. **Firewall configuration**: Only allow necessary inbound traffic
3. **Rate limiting**: Configure rate limiting in Nginx

### Database Security

1. **Strong authentication**: Use strong PostgreSQL passwords
2. **Connection limits**: Limit database connections
3. **Regular backups**: Maintain encrypted backups
4. **Audit logging**: Enable database audit logging

### Monitoring

1. **Log monitoring**: Monitor logs for suspicious activity
2. **Access controls**: Implement least-privilege access
3. **Update notifications**: Subscribe to security updates

## Known Security Considerations

### Docker Host Network Mode

The TON node runs with `network_mode: host` for network connectivity requirements. This means:
- The container has direct access to the host's network stack
- Proper firewall configuration is essential
- Only expose necessary ports

### Environment Files

The `ton.env` file contains sensitive configuration:
- Never commit this file to version control
- Set appropriate file permissions (e.g., `chmod 600 ton.env`)
- Consider using secret management tools in production

## Security Updates

Security updates will be released as patch versions. We recommend:

1. **Subscribe to releases**: Watch this repository for new releases
2. **Review changelogs**: Check [HISTORY.md](HISTORY.md) for security-related changes
3. **Update promptly**: Apply security patches as soon as possible

## Acknowledgments

We appreciate security researchers who help keep TON Deploy secure. Contributors who responsibly disclose vulnerabilities will be acknowledged (with permission) in our security advisories.

---

*This security policy is effective as of April 2026.*
