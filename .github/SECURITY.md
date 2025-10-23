# Security Policy | Politique de Sécurité

## 🔒 Supported Versions | Versions Supportées

Currently supported versions of AgriSurvey Platform receiving security updates:

| Version | Supported          | Support End Date |
| ------- | ------------------ | ---------------- |
| 0.1.x   | ✅ Active Support  | TBD              |

---

## 🐛 Reporting a Vulnerability | Signaler une Vulnérabilité

We take security seriously. If you discover a security vulnerability in AgriSurvey Platform, please follow these steps:

### 🇫🇷 Français

**NE PAS** créer une issue publique GitHub pour les vulnérabilités de sécurité.

**Contactez-nous directement** :
- 📧 Email: security@fredfrenchtouch.com
- 🔐 PGP Key: [Available on request]
- ⏱️ Response Time: &lt;48 heures

**Informations à fournir** :
1. Description détaillée de la vulnérabilité
2. Steps to reproduce (étapes pour reproduire)
3. Impact potentiel (CVSS score si possible)
4. Votre suggestion de fix (optionnel)
5. Votre nom/pseudo pour attribution (optionnel)

### 🇬🇧 English

**DO NOT** create a public GitHub issue for security vulnerabilities.

**Contact us directly**:
- 📧 Email: security@fredfrenchtouch.com
- 🔐 PGP Key: [Available on request]
- ⏱️ Response Time: &lt;48 hours

**Information to provide**:
1. Detailed vulnerability description
2. Steps to reproduce
3. Potential impact (CVSS score if available)
4. Your suggested fix (optional)
5. Your name/handle for attribution (optional)

---

## 🛡️ Security Measures | Mesures de Sécurité

### Authentication & Authorization
- ✅ NextAuth.js with secure session management
- ✅ HTTPS-only in production (enforced by Vercel)
- ✅ CSRF protection enabled
- ✅ Rate limiting on sensitive endpoints

### Data Protection
- ✅ GDPR compliant data handling
- ✅ Encrypted data at rest (database)
- ✅ Encrypted data in transit (TLS 1.3)
- ✅ Regular security audits

### Drone Systems Security
- ✅ Encrypted MAVLink communications
- ✅ Authentication required for fleet control
- ✅ Geofencing (No-Fly Zones) enforced
- ✅ Emergency stop mechanisms

### Infrastructure
- ✅ Automated dependency updates (Dependabot)
- ✅ Container security scanning
- ✅ Secrets managed via environment variables
- ✅ Principle of least privilege (access control)

---

## 🏆 Security Disclosure Policy

### Timeline

1. **Day 0**: You report the vulnerability
2. **Day 1-2**: We acknowledge receipt and start investigation
3. **Day 3-7**: We develop and test a fix
4. **Day 7-14**: We deploy the fix to production
5. **Day 30**: We publish a security advisory (with your credit if desired)

### Recognition

Security researchers who responsibly disclose vulnerabilities will be:
- ✅ Credited in our security advisories (unless anonymity requested)
- ✅ Mentioned in project changelog
- ✅ Eligible for bug bounty rewards (case-by-case basis)

---

## 📞 Contact

**🏢 Fred French Touch - Security Team**
- 📧 Email: security@fredfrenchtouch.com
- 🌐 Website: [fredfrenchtouch.com](https://fredfrenchtouch.com)
- 🔐 Encrypted Communication: PGP available on request

**Response Time Commitment**:
- Critical vulnerabilities: &lt;24 hours
- High severity: &lt;48 hours
- Medium/Low severity: &lt;1 week

---

## 🔗 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [GDPR Compliance](https://gdpr.eu/)
- [ANSSI Guidelines (FR)](https://www.ssi.gouv.fr/)

---

**Last Updated**: October 2025
**Security Contact**: security@fredfrenchtouch.com
