'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeDiagram, setActiveDiagram] = useState('overview');
  const [autoPlay, setAutoPlay] = useState(true);

  const diagrams = [
    { id: 'overview', label: '🏛️ Vue Ensemble', desc: 'Architecture globale CitizenHub' },
    { id: 'voting', label: '🗳️ Vote Blockchain', desc: 'Système vote sécurisé' },
    { id: 'forums', label: '💬 Forums IA', desc: 'Modération intelligente' },
    { id: 'budget', label: '💰 Budget Participatif', desc: 'Allocation ressources citoyens' },
    { id: 'services', label: '📍 Services Locaux', desc: 'Cartographie services publics' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel automatique
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveDiagram((current) => {
        const currentIndex = diagrams.findIndex(d => d.id === current);
        const nextIndex = (currentIndex + 1) % diagrams.length;
        return diagrams[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, diagrams]);

  const handleManualSelect = (diagramId: string) => {
    setActiveDiagram(diagramId);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #1a2332 0%, #0f1419 50%, #0a0e14 100%)',
      color: '#e0e0e0',
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; overflow-x: hidden; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-on-scroll {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

        {/* Header */}
        <header style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          marginBottom: '40px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h1 style={{
            fontSize: '3.5em',
            background: 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            fontWeight: 800,
            textShadow: '0 4px 20px rgba(255, 152, 0, 0.25), 0 8px 40px rgba(255, 152, 0, 0.15), 0 0 60px rgba(255, 255, 255, 0.4)',
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 229, 255, 0.3))'
          }}>
            🏛️ CitizenHub Platform
          </h1>
          <p style={{
            fontSize: '1.3em',
            color: '#64B5F6',
            marginBottom: '30px'
          }}>
            Plateforme Civic Tech • Démocratie Participative Numérique • Vote Blockchain
          </p>
          <p style={{
            fontSize: '1em',
            color: '#888',
            marginBottom: '30px'
          }}>
            Forums IA Modérés • Budgets Participatifs • Services Hyper-Locaux • Transparence Blockchain
          </p>

          {/* Badges uniformisés */}
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '30px'
          }}>
            {[
              '✅ Production Ready',
              '🗳️ Vote Blockchain',
              '📍 100% Local',
              '🔒 RGPD Compliant',
              '💰 0€ Citoyen'
            ].map((badge, idx) => (
              <span
                key={idx}
                style={{
                  padding: '8px 16px',
                  background: 'rgba(21, 101, 192, 0.2)',
                  border: '1px solid rgba(21, 101, 192, 0.4)',
                  borderRadius: '20px',
                  fontSize: '0.9em',
                  color: '#1565C0',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(21, 101, 192, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(21, 101, 192, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(21, 101, 192, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <a
              href="/docs"
              style={{
                padding: '15px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1em',
                background: 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(21, 101, 192, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(21, 101, 192, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(21, 101, 192, 0.3)';
              }}
            >
              📖 Documentation Complète
            </a>
            <a
              href="https://github.com/NextAIgeneration/citizenhub-platform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '15px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1em',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#64B5F6',
                border: '2px solid #1565C0',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(21, 101, 192, 0.2)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              💻 GitHub Repository
            </a>
          </div>
        </header>

        {/* Diagrammes Carousel */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '20px',
          padding: '40px 30px',
          marginBottom: '40px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h2 style={{
            color: '#1565C0',
            fontSize: '2em',
            marginBottom: '30px',
            textAlign: 'center',
            fontWeight: 700
          }}>
            📊 Architecture Interactive
          </h2>

          {/* Carousel Controls */}
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '30px',
            flexWrap: 'wrap'
          }}>
            {diagrams.map((diagram) => (
              <button
                key={diagram.id}
                onClick={() => handleManualSelect(diagram.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '15px',
                  border: activeDiagram === diagram.id ? '2px solid #1565C0' : '1px solid rgba(255, 255, 255, 0.2)',
                  background: activeDiagram === diagram.id ? 'rgba(21, 101, 192, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeDiagram === diagram.id ? '#64B5F6' : '#888',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9em',
                  fontWeight: 600
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(21, 101, 192, 0.2)';
                  e.currentTarget.style.color = '#64B5F6';
                }}
                onMouseOut={(e) => {
                  if (activeDiagram !== diagram.id) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = '#888';
                  }
                }}
              >
                {diagram.label}
              </button>
            ))}
          </div>

          {/* Active Diagram Display */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '15px',
            padding: '40px',
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(21, 101, 192, 0.3)'
          }}>
            <div style={{ fontSize: '5em', marginBottom: '20px' }} className="pulse">
              {diagrams.find(d => d.id === activeDiagram)?.label.split(' ')[0]}
            </div>
            <h3 style={{
              color: '#64B5F6',
              fontSize: '1.8em',
              marginBottom: '15px',
              fontWeight: 700
            }}>
              {diagrams.find(d => d.id === activeDiagram)?.label.split(' ').slice(1).join(' ')}
            </h3>
            <p style={{
              color: '#aaa',
              fontSize: '1.1em',
              maxWidth: '600px'
            }}>
              {diagrams.find(d => d.id === activeDiagram)?.desc}
            </p>
            <p style={{
              color: '#666',
              fontSize: '0.9em',
              marginTop: '30px',
              fontStyle: 'italic'
            }}>
              📍 Diagramme détaillé disponible dans /architecture/{activeDiagram}
            </p>
          </div>

          {/* Auto-play Indicator */}
          <div style={{
            marginTop: '20px',
            textAlign: 'center',
            color: '#666',
            fontSize: '0.85em'
          }}>
            {autoPlay ? '▶️ Auto-play actif (5s)' : '⏸️ Auto-play en pause'}
          </div>
        </section>

        {/* Métriques Clés */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '20px',
          padding: '40px 30px',
          marginBottom: '40px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h2 style={{
            color: '#1565C0',
            fontSize: '2em',
            marginBottom: '30px',
            textAlign: 'center',
            fontWeight: 700
          }}>
            📈 Métriques Programme Pilote
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {[
              { label: 'Citoyens Actifs', value: '12,450', unit: 'utilisateurs', icon: '👥' },
              { label: 'Taux Résolution', value: '94%', unit: 'problèmes résolus', icon: '✅' },
              { label: 'Temps Démarche', value: '-68%', unit: 'réduction', icon: '⏱️' },
              { label: 'Satisfaction', value: '4.8/5', unit: 'moyenne', icon: '⭐' },
              { label: 'Coût Citoyen', value: '€0', unit: 'gratuit', icon: '💰' },
              { label: 'Conformité RGPD', value: '100%', unit: 'certifié', icon: '🔒' }
            ].map((metric, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.15) 0%, rgba(25, 118, 210, 0.15) 100%)',
                  padding: '25px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  border: '1px solid rgba(21, 101, 192, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(21, 101, 192, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '2.5em', marginBottom: '10px' }}>{metric.icon}</div>
                <div style={{
                  fontSize: '2.5em',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px'
                }}>
                  {metric.value}
                </div>
                <div style={{ color: '#64B5F6', fontSize: '1em', fontWeight: 600, marginBottom: '5px' }}>
                  {metric.label}
                </div>
                <div style={{ color: '#888', fontSize: '0.85em' }}>
                  {metric.unit}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section style={{
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#1565C0',
            fontSize: '2em',
            marginBottom: '30px',
            textAlign: 'center',
            fontWeight: 700
          }}>
            🎯 Cas d'Usage Civic Tech
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {[
              {
                icon: '🗳️',
                title: 'Vote Blockchain',
                desc: 'Vote électronique sécurisé avec blockchain immuable et audit trail complet',
                slug: 'vote-blockchain',
                metrics: '99.9% uptime • 0 fraudes'
              },
              {
                icon: '💬',
                title: 'Forums Modérés IA',
                desc: 'Détection toxicité temps réel, résumés débats, fact-checking automatique',
                slug: 'forums-ia',
                metrics: '-85% modération manuelle'
              },
              {
                icon: '💰',
                title: 'Budget Participatif',
                desc: 'Allocation ressources citoyenne avec visualisation impact projets',
                slug: 'budget-participatif',
                metrics: '3x participation vs traditionnel'
              },
              {
                icon: '📍',
                title: 'Services Hyper-Locaux',
                desc: 'Cartographie services publics géolocalisés par quartier/rue',
                slug: 'services-locaux',
                metrics: 'Précision GPS <10m'
              },
              {
                icon: '📊',
                title: 'Analytics Prédictifs',
                desc: 'Tendances émergentes, clustering opinions, prévisions besoins',
                slug: 'analytics',
                metrics: '94% précision prévisions'
              },
              {
                icon: '🌐',
                title: 'Multilingue Temps Réel',
                desc: 'Traduction instantanée FR/NL/EN pour débats inclusifs',
                slug: 'multilingue',
                metrics: 'Latence <200ms'
              }
            ].map((useCase, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '30px',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => window.location.href = `/use-cases/${useCase.slug}`}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#1565C0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(21, 101, 192, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '3.5em', marginBottom: '15px', textAlign: 'center' }}>
                  {useCase.icon}
                </div>
                <h3 style={{
                  color: '#64B5F6',
                  fontSize: '1.4em',
                  marginBottom: '12px',
                  textAlign: 'center',
                  fontWeight: 700
                }}>
                  {useCase.title}
                </h3>
                <p style={{
                  color: '#c0c0c0',
                  lineHeight: 1.6,
                  fontSize: '0.95em',
                  textAlign: 'center',
                  marginBottom: '15px'
                }}>
                  {useCase.desc}
                </p>
                <div style={{
                  textAlign: 'center',
                  color: '#1565C0',
                  fontSize: '0.85em',
                  fontWeight: 600,
                  padding: '8px 12px',
                  background: 'rgba(21, 101, 192, 0.1)',
                  borderRadius: '10px',
                  marginTop: '15px'
                }}>
                  📊 {useCase.metrics}
                </div>
                <div style={{
                  marginTop: '20px',
                  textAlign: 'center'
                }}>
                  <span style={{
                    color: '#1565C0',
                    fontSize: '0.9em',
                    fontWeight: 600
                  }}>
                    Explorer →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Technique */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '20px',
          padding: '40px 30px',
          marginBottom: '40px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h2 style={{
            color: '#1565C0',
            fontSize: '2em',
            marginBottom: '30px',
            textAlign: 'center',
            fontWeight: 700
          }}>
            🏗️ Architecture Technique
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px'
          }}>
            {[
              {
                title: 'Frontend Layer',
                icon: '💻',
                tech: ['Next.js 16', 'React 19.2', 'Tailwind 4', 'TypeScript'],
                slug: 'frontend'
              },
              {
                title: 'Blockchain Layer',
                icon: '⛓️',
                tech: ['Ethereum/Polygon', 'Smart Contracts', 'IPFS Storage', 'Audit Trail'],
                slug: 'blockchain'
              },
              {
                title: 'AI/ML Layer',
                icon: '🤖',
                tech: ['Ollama Local', 'Moderation Models', 'NLP FR/NL/EN', 'Prophet Forecasting'],
                slug: 'ai-ml'
              },
              {
                title: 'Data Layer',
                icon: '🗄️',
                tech: ['PostgreSQL', 'DuckDB Analytics', 'Vector Embeddings', 'Time-Series'],
                slug: 'data'
              },
              {
                title: 'Security Layer',
                icon: '🔒',
                tech: ['OAuth 2.0', 'RGPD Compliance', 'Rate Limiting', 'DDoS Protection'],
                slug: 'security'
              },
              {
                title: 'GEO Layer',
                icon: '📍',
                tech: ['OpenStreetMap', 'GPS Précis (<10m)', 'Services Locaux BE/FR', 'NFZ Aware'],
                slug: 'geo'
              }
            ].map((layer, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '30px',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => window.location.href = `/architecture/${layer.slug}`}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#1565C0';
                  e.currentTarget.style.background = 'rgba(21, 101, 192, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <div style={{ fontSize: '3em', marginBottom: '15px', textAlign: 'center' }}>
                  {layer.icon}
                </div>
                <h3 style={{
                  color: '#64B5F6',
                  fontSize: '1.3em',
                  marginBottom: '15px',
                  textAlign: 'center',
                  fontWeight: 700
                }}>
                  {layer.title}
                </h3>
                <ul style={{
                  color: '#c0c0c0',
                  lineHeight: 1.8,
                  paddingLeft: '0',
                  fontSize: '0.9em',
                  listStyle: 'none'
                }}>
                  {layer.tech.map((t, tidx) => (
                    <li key={tidx} style={{ marginBottom: '8px', textAlign: 'center' }}>
                      • {t}
                    </li>
                  ))}
                </ul>
                <div style={{
                  marginTop: '20px',
                  textAlign: 'center'
                }}>
                  <span style={{
                    color: '#1565C0',
                    fontSize: '0.9em',
                    fontWeight: 600
                  }}>
                    Détails →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tarification B2G */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.1) 0%, rgba(25, 118, 210, 0.1) 100%)',
          borderRadius: '20px',
          padding: '40px 30px',
          marginBottom: '40px',
          border: '1px solid rgba(21, 101, 192, 0.3)'
        }}>
          <h2 style={{
            color: '#1565C0',
            fontSize: '2em',
            marginBottom: '15px',
            textAlign: 'center',
            fontWeight: 700
          }}>
            💰 Tarification B2G (Business-to-Government)
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#aaa',
            fontSize: '1.1em',
            marginBottom: '40px'
          }}>
            Solutions adaptées selon taille commune/collectivité
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px'
          }}>
            {[
              {
                tier: 'Starter',
                population: '< 10K habitants',
                price: '999€',
                features: ['Vote électronique', 'Forums de base', 'Support email', 'Dashboard analytics']
              },
              {
                tier: 'Professional',
                population: '10K - 50K habitants',
                price: '2,499€',
                features: ['Toutes features Starter', 'Budget participatif', 'Modération IA', 'Support prioritaire', 'Intégration APIs']
              },
              {
                tier: 'Enterprise',
                population: '> 50K habitants',
                price: '4,999€',
                features: ['Toutes features Pro', 'Multilingue complet', 'Analytics prédictifs', 'Support 24/7', 'SLA garanti', 'Custom features']
              }
            ].map((plan, idx) => (
              <div
                key={idx}
                style={{
                  background: idx === 1 ? 'rgba(21, 101, 192, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  padding: '30px',
                  borderRadius: '15px',
                  border: idx === 1 ? '2px solid #1565C0' : '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(21, 101, 192, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {idx === 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)',
                    color: 'white',
                    padding: '5px 20px',
                    borderRadius: '20px',
                    fontSize: '0.85em',
                    fontWeight: 700
                  }}>
                    ⭐ POPULAIRE
                  </div>
                )}
                <h3 style={{
                  color: '#64B5F6',
                  fontSize: '1.8em',
                  marginBottom: '10px',
                  fontWeight: 700
                }}>
                  {plan.tier}
                </h3>
                <p style={{
                  color: '#888',
                  fontSize: '0.9em',
                  marginBottom: '20px'
                }}>
                  {plan.population}
                </p>
                <div style={{
                  fontSize: '3em',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '5px'
                }}>
                  {plan.price}
                </div>
                <p style={{
                  color: '#888',
                  fontSize: '0.9em',
                  marginBottom: '25px'
                }}>
                  /mois
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '25px',
                  textAlign: 'left'
                }}>
                  {plan.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      style={{
                        color: '#c0c0c0',
                        fontSize: '0.95em',
                        marginBottom: '10px',
                        paddingLeft: '25px',
                        position: 'relative'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#1565C0'
                      }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: 'none',
                    background: idx === 1 ? 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)' : 'rgba(21, 101, 192, 0.2)',
                    color: idx === 1 ? 'white' : '#64B5F6',
                    fontWeight: 700,
                    fontSize: '1em',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    if (idx !== 1) {
                      e.currentTarget.style.background = 'rgba(21, 101, 192, 0.2)';
                      e.currentTarget.style.color = '#64B5F6';
                    }
                  }}
                >
                  Demander une Démo
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Intégration Fred French Touch */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '20px',
          padding: '40px 30px',
          marginBottom: '40px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h2 style={{
            color: '#1565C0',
            fontSize: '2em',
            marginBottom: '30px',
            textAlign: 'center',
            fontWeight: 700
          }}>
            🏢 Intégration Fred French Touch
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
            marginBottom: '30px'
          }}>
            {[
              { icon: '🤖', title: 'Expert IA Civic Tech', desc: 'Spécialiste démocratie numérique & blockchain voting' },
              { icon: '🚀', title: 'Transformation GovTech', desc: 'Modernisation services publics & e-administration' },
              { icon: '🌍', title: 'Solutions Multilingues', desc: 'Marché BE/FR/EU avec support FR/NL/EN' },
              { icon: '📊', title: 'Data Science Civique', desc: 'Analytics participation & prévisions besoins citoyens' }
            ].map((service, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '25px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div style={{ fontSize: '3em', marginBottom: '12px' }}>{service.icon}</div>
                <h3 style={{ color: '#64B5F6', fontSize: '1.2em', marginBottom: '10px', fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p style={{ color: '#aaa', fontSize: '0.9em', lineHeight: 1.5 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#aaa', fontSize: '1em', marginBottom: '20px' }}>
              Services d'accompagnement disponibles :
            </p>
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '25px'
            }}>
              {[
                'Audit maturité digitale collectivités',
                'Déploiement clés en main',
                'Formation élus & agents',
                'Support technique dédié',
                'Développement features sur-mesure'
              ].map((service, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(21, 101, 192, 0.15)',
                    borderRadius: '20px',
                    color: '#64B5F6',
                    fontSize: '0.9em',
                    fontWeight: 500
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <div style={{ color: '#888', fontSize: '0.95em' }}>
                🌐 <a href="https://fredfrenchtouch.com" style={{ color: '#1565C0', textDecoration: 'none' }}>
                  fredfrenchtouch.com
                </a>
              </div>
              <div style={{ color: '#888', fontSize: '0.95em' }}>
                📧 <a href="mailto:govtech@fredfrenchtouch.com" style={{ color: '#1565C0', textDecoration: 'none' }}>
                  govtech@fredfrenchtouch.com
                </a>
              </div>
              <div style={{ color: '#888', fontSize: '0.95em' }}>
                📍 Belgique | France | Europe
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '40px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '60px'
        }}>
          <p style={{ fontSize: '1.2em', color: '#64B5F6', marginBottom: '15px', fontWeight: 600 }}>
            CitizenHub Platform • Démocratie Participative Numérique • 2025
          </p>
          <p style={{ fontSize: '0.95em', color: '#888', marginBottom: '20px' }}>
            Développé par Fred French Touch • Civic Tech Made in BE/FR/EU
          </p>
          <div style={{
            display: 'flex',
            gap: '25px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/docs" style={{ color: '#1565C0', textDecoration: 'none', fontSize: '0.9em' }}>
              Documentation
            </a>
            <a href="/use-cases" style={{ color: '#1565C0', textDecoration: 'none', fontSize: '0.9em' }}>
              Cas d'Usage
            </a>
            <a href="/architecture" style={{ color: '#1565C0', textDecoration: 'none', fontSize: '0.9em' }}>
              Architecture
            </a>
            <a href="https://github.com/NextAIgeneration/citizenhub-platform" target="_blank" rel="noopener noreferrer" style={{ color: '#1565C0', textDecoration: 'none', fontSize: '0.9em' }}>
              GitHub
            </a>
            <a href="https://gitlab.com/enzoxic03/citizenhub-platform" target="_blank" rel="noopener noreferrer" style={{ color: '#1565C0', textDecoration: 'none', fontSize: '0.9em' }}>
              GitLab
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
