# CLAUDE.md - CitizenHub Platform

**Last Updated**: 24 Octobre 2025 - 23:20
**Project Status**: ✅ Production Ready (Vercel deployed)

---

## 📋 SESSION RÉCENTE (24 Oct 2025)

### **Travail Effectué**

**Corrections & Optimisations:**
- ✅ Fixed `.github/SECURITY.md` - Updated project name (AgriSurvey → CitizenHub)
- ✅ Fixed `.github/dependabot.yml` - Updated project name in comments
- ✅ Customized security measures for civic tech (blockchain voting, DDoS protection)
- ✅ Pushed fixes to GitLab Mercure + GitHub NextAIgeneration

**Commits:**
- `b767630` - fix: Correct project name in GitHub config files

**Documentation:**
- ✅ Created comprehensive wake-up report with Adobe CC recommendations
- ✅ Prepared sprint plan for Notion + Metadata Fastlane + Adobe CC setup
- ✅ Created Python automation scripts for visual assets generation

---

## 🚀 SPRINT PRÉVU (25 Oct 2025)

### **Phase 1: Notion Workspace (2-3h)**
Setup Content Engine avec databases:
- Products & Services
- Customer Personas
- Sales Funnel Stages
- SEO Keywords Bank
- Content Library
- Creative Assets

### **Phase 2: Metadata Fastlane (1-2h)**
- Generate SEO metadata for 9 pages CitizenHub (FR/NL/EN)
- Homepage, landing pages, blog posts
- Export to Notion

### **Phase 3: Adobe CC + Python (3-4h)**
- Logo CitizenHub (Illustrator)
- Open Graph images (Photoshop - 3 languages)
- Favicons
- **BONUS**: Python auto-generation (architecture diagrams, infographics)

**Deliverables attendus:**
- 9 pages SEO-optimized metadata
- 1 logo vectoriel + variations
- 3 Open Graph images (FR/NL/EN)
- 1 set favicons
- ~10 assets Python auto-generated

---

## 🏗️ ARCHITECTURE ACTUELLE

### **Tech Stack**
```yaml
Frontend: Next.js 16.0 + React 19.2 + TypeScript
Styling: Tailwind CSS 4.0
Deployment: Vercel (auto-deploy from GitHub)
Repository:
  Private: gitlab.com/enzoxic03/citizenhub-platform
  Public: github.com/NextAIgeneration/citizenhub-platform
```

### **Key Features**
- 🗳️ Vote électronique blockchain
- 💬 Forums intelligents (modération IA)
- 📍 Services géolocalisés (hyper-locaux)
- 📊 Budgets participatifs
- 🌐 Multilingue (FR/NL/EN)

---

## 🎯 TARGET AUDIENCE (B2G)

**Primary Persona: Maire Ville Moyenne (10-50k habitants)**
- Pain Points: Engagement faible (5-10%), transparence manquante
- Goals: Augmenter participation 3x, moderniser démocratie locale
- Budget: 3000-10000€/mois
- Location: Belgique (Wallonie/Flandre), France

---

## 🔑 SEO KEYWORDS (Prioritaires)

**Français:**
- plateforme civic tech (620/mois, Medium comp, 3.50€ CPC)
- vote électronique blockchain (480/mois, Low comp, 4.80€ CPC)
- participation citoyenne numérique (1350/mois, High comp, 2.90€ CPC)
- budget participatif ville (890/mois, Medium comp, 3.20€ CPC)

**Nederlands:**
- digitale burger participatie (720/mois, Medium comp, 3.10€ CPC)
- elektronisch stemmen blockchain (410/mois, Low comp, 4.50€ CPC)

---

## 🎨 BRAND GUIDELINES

**Colors:**
```yaml
Primary: #1565C0 (Bleu confiance)
Secondary: #F57C00 (Orange civic)
Accent: #43A047 (Vert démocratie)
Gradient: linear-gradient(135deg, #1565C0 0%, #1976D2 100%)
```

**Typography:**
- Headings: Inter Bold (700)
- Body: Inter Regular (400)

**Voice & Tone:**
- Trustworthy, Transparent, Civic-minded
- Institutionnel mais moderne
- Focus transparence et démocratie

---

## 📦 ASSETS À CRÉER (Sprint 25 Oct)

**Adobe CC:**
- [ ] citizenhub-logo.ai (Illustrator - Building + network)
- [ ] citizenhub-og-fr.png (1200x630 - Photoshop)
- [ ] citizenhub-og-nl.png (1200x630 - Photoshop)
- [ ] citizenhub-og-en.png (1200x630 - Photoshop)
- [ ] Favicons (16x16, 32x32, 192x192, 512x512, ICO, apple-touch)

**Python Auto-Generated:**
- [ ] Architecture diagram (civic tech infrastructure)
- [ ] Engagement metrics chart (before/after)
- [ ] Voting security infographic (blockchain flow)
- [ ] GitHub badges

---

## 🔗 URLS IMPORTANTES

**Production:**
- https://citizenhub-platform-d8a3mwtk7-enzoxics-projects.vercel.app

**Repositories:**
- GitLab: https://gitlab.com/enzoxic03/citizenhub-platform (private)
- GitHub: https://github.com/NextAIgeneration/citizenhub-platform (public)

**Documentation Sprint:**
- ~/Documents/fft-mercure-vault/📝 Notes/🚀 SPRINT DEMAIN - Notion + Fastlane + Adobe Setup.md
- ~/Documents/fft-mercure-vault/📝 Notes/🎨 ADOBE CC - Assets Specifications.md

---

## ⚙️ CI/CD STATUS

**GitLab CI/CD (Private):**
- Status: ⚠️ Not yet configured
- TODO: Setup `.gitlab-ci.yml` for automated testing
- Priority: Medium (after sprint content creation)

**GitHub Actions:**
- Status: ⚠️ Not yet configured
- TODO: Consider Vercel preview deploys automation

**Current Deployment:**
- Method: Manual push → GitHub → Vercel webhook (auto-deploy)
- Works: ✅ Reliable
- Improvement needed: Automated testing before deploy

---

## 📋 BACKLOG / TODO

**Immediate (Post-Sprint 25 Oct):**
- [ ] Integrate SEO metadata in app/layout.tsx
- [ ] Add Open Graph images to public/assets/og/
- [ ] Update favicons
- [ ] Test OG images (Facebook Debugger, Twitter Card Validator)

**Short-term (Cette semaine):**
- [ ] Create README.nl.md (full Dutch translation)
- [ ] Create README.en.md (full English translation)
- [ ] Add GitHub About section (description, topics, website)
- [ ] Setup Vercel Analytics

**Medium-term (Ce mois):**
- [ ] Configure GitLab CI/CD pipeline
- [ ] Setup automated testing (Jest + Playwright)
- [ ] Google Search Console integration
- [ ] First blog post (civic tech Belgique 2025)

**Long-term (Q4 2025):**
- [ ] Notion Kanban board for content planning
- [ ] Automated content generation (Python → Notion → Production)
- [ ] Multi-language routing (app/[lang]/)
- [ ] First demo municipality (pilot program)

---

## 🎯 SUCCESS METRICS (Current)

```yaml
Development:
  README Quality: ✅ Production-ready (295 lines, SEO-optimized)
  Security: ✅ SECURITY.md + dependabot configured
  Deployment: ✅ Live on Vercel

Content:
  Metadata: ⏳ Pending (sprint 25 Oct)
  Assets: ⏳ Pending (sprint 25 Oct)
  Blog: ⏳ Not started

SEO:
  Current Ranking: 0 (new project)
  Target Ranking: Top 10 for "plateforme civic tech" (Q4 2025)

Business:
  Status: Pre-launch
  First Customer Target: Q1 2026
  MRR Target: €15,000 (5 municipalities × €3000)
```

---

## 💡 NOTES IMPORTANTES

**Fred French Touch Integration:**
- All assets must include FFT branding
- Contact: govtech@fredfrenchtouch.com
- Brand colors consistent across COSMIC projects

**Multilingual Strategy:**
- FR = 50% content (primary market)
- NL = 30% content (Flanders market)
- EN = 20% content (international/Brussels)

**Compliance:**
- GDPR/RGPD 100% (citizen data protection)
- Blockchain voting audit trail (immutable)
- Accessibility WCAG AA minimum

---

## 🤝 COLLABORATION

**Working with Claude Code:**
- Always read CLAUDE.md before major changes
- Update this file after significant work
- Use conventional commits (feat:, fix:, docs:)
- Test locally before pushing to production

**Team Communication:**
- Obsidian vault: ~/Documents/fft-mercure-vault/📝 Notes/
- Daily summaries in Obsidian
- Sprint planning documents prepared in advance

---

**Next Session**: 25 Octobre 2025 - Sprint Execution
**Status**: 🟢 READY FOR SPRINT
**Confidence**: 💯 100%
