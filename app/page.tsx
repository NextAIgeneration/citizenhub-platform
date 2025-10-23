'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: 'linear-gradient(135deg, #3a2a1a 0%, #2f1f0f 50%, #1f0f0a 100%)', color: '#e0e0e0', minHeight: '100vh', padding: '0' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap'); body { margin: 0; padding: 0; } * { box-sizing: border-box; }`}</style>

      {/* Hero */}
      <section style={{ padding: '80px 40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.1) 0%, rgba(211, 84, 0, 0.1) 100%)' }}>
        <h1 style={{ fontSize: '3.5em', background: 'linear-gradient(135deg, #E67E22 0%, #D35400 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px', fontWeight: 800, textShadow: '0 4px 20px rgba(52, 152, 219, 0.15), 0 8px 40px rgba(52, 152, 219, 0.1)' }}>
          🏛️ CitizenHub
        </h1>
        <p style={{ fontSize: '1.4em', color: '#EB984E', maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          Assistance citoyenne IA locale • Interface vocale • OCR documents • Navigation services publics
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
          {['✅ Ultra-Simple', '🗣️ Vocal', '📄 OCR Auto', '🔒 Privacy', '⚖️ Droits Garantis'].map((badge, idx) => (
            <span key={idx} style={{ background: 'rgba(230, 126, 34, 0.2)', border: '1px solid rgba(230, 126, 34, 0.4)', color: '#E67E22', padding: '10px 20px', borderRadius: '25px', fontSize: '0.95em', fontWeight: 600 }}>{badge}</span>
          ))}
        </div>
      </section>

      {/* Vue d'Ensemble */}
      <section style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ color: '#E67E22', fontSize: '2.5em', textAlign: 'center', marginBottom: '50px', fontWeight: 700 }}>📖 Vue d'Ensemble</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[
            { icon: '🗣️', title: 'Interface Vocale', desc: 'Commande vocale + synthèse voix pour accessibilité maximale' },
            { icon: '📄', title: 'OCR Documents', desc: 'Scan automatique formulaires administratifs avec pré-remplissage' },
            { icon: '🧭', title: 'Navigation Services', desc: 'Orientation intelligente vers services publics appropriés' },
            { icon: '⚖️', title: 'Droits & Conformité', desc: 'Vérification droits citoyens + obligations légales' }
          ].map((feature, idx) => (
            <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '30px', borderRadius: '15px', border: '2px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
              <div style={{ fontSize: '3em', marginBottom: '15px' }}>{feature.icon}</div>
              <h3 style={{ color: '#E67E22', fontSize: '1.3em', marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ color: '#c0c0c0', lineHeight: 1.6, fontSize: '1em' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Métriques */}
      <section style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.05) 0%, rgba(211, 84, 0, 0.05) 100%)', borderRadius: '20px' }}>
        <h2 style={{ color: '#E67E22', fontSize: '2.5em', textAlign: 'center', marginBottom: '50px', fontWeight: 700 }}>📈 Métriques Programme Pilote</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          {[
            { value: '12K', label: 'Citoyens actifs' },
            { value: '94%', label: 'Problème résolu' },
            { value: '-68%', label: 'Temps démarche' },
            { value: '4.8/5', label: 'Satisfaction' },
            { value: '€0', label: 'Coût citoyen' },
            { value: '100%', label: 'Conformité RGPD' }
          ].map((metric, idx) => (
            <div key={idx} style={{ background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.15) 0%, rgba(235, 152, 78, 0.15) 100%)', padding: '30px', borderRadius: '12px', textAlign: 'center', border: '2px solid rgba(230, 126, 34, 0.3)' }}>
              <div style={{ fontSize: '3em', fontWeight: 800, background: 'linear-gradient(135deg, #E67E22 0%, #D35400 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '10px' }}>{metric.value}</div>
              <div style={{ color: '#EB984E', fontSize: '1.1em', fontWeight: 600 }}>{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ color: '#E67E22', fontSize: '2.5em', textAlign: 'center', marginBottom: '50px', fontWeight: 700 }}>🎯 Cas d'Usage</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { title: 'Assistance Administrative', icon: '📄', slug: 'assistance-administrative', desc: 'OCR + pré-remplissage formulaires complexes (impôts, aides sociales)' },
            { title: 'Interface Vocale Simple', icon: '🗣️', slug: 'interface-vocale', desc: 'Commande vocale complète pour accessibilité seniors/PMR' },
            { title: 'Navigation Services', icon: '🧭', slug: 'navigation-services', desc: 'Orientation automatique vers bon service/guichet administratif' },
            { title: 'Droits & Conformité', icon: '⚖️', slug: 'droits-conformite', desc: 'Vérification droits + obligations légales personnalisées' }
          ].map((useCase, idx) => (
            <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '30px', borderRadius: '15px', border: '2px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', cursor: 'pointer' }} onClick={() => window.location.href = `/use-cases/${useCase.slug}`}>
              <div style={{ fontSize: '3.5em', marginBottom: '15px', textAlign: 'center' }}>{useCase.icon}</div>
              <h3 style={{ color: '#E67E22', fontSize: '1.4em', marginBottom: '12px', textAlign: 'center' }}>{useCase.title}</h3>
              <p style={{ color: '#c0c0c0', lineHeight: 1.6, fontSize: '0.95em', textAlign: 'center' }}>{useCase.desc}</p>
              <div style={{ marginTop: '20px', textAlign: 'center' }}><span style={{ color: '#E67E22', fontSize: '0.9em', fontWeight: 600 }}>Explorer →</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.05) 0%, rgba(211, 84, 0, 0.05) 100%)', borderRadius: '20px' }}>
        <h2 style={{ color: '#E67E22', fontSize: '2.5em', textAlign: 'center', marginBottom: '50px', fontWeight: 700 }}>🏗️ Architecture Platform</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[
            { title: 'OCR Intelligent', icon: '📄', tech: ['Tesseract + IA', 'Multi-formulaires', 'Pré-remplissage'], slug: 'ocr-intelligent' },
            { title: 'Vocal Interface', icon: '🗣️', tech: ['Whisper (STT)', 'TTS local', 'Commandes NLU'], slug: 'vocal-interface' },
            { title: 'Service Router', icon: '🧭', tech: ['Graph services BE', 'Matching besoins', 'API gouv.be'], slug: 'service-router' },
            { title: 'Privacy First', icon: '🔒', tech: ['100% local', 'RGPD compliance', 'Zero cloud'], slug: 'privacy-first' }
          ].map((arch, idx) => (
            <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '30px', borderRadius: '15px', border: '2px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', cursor: 'pointer' }} onClick={() => window.location.href = `/architecture/${arch.slug}`}>
              <div style={{ fontSize: '3em', marginBottom: '15px', textAlign: 'center' }}>{arch.icon}</div>
              <h3 style={{ color: '#EB984E', fontSize: '1.3em', marginBottom: '15px', textAlign: 'center' }}>{arch.title}</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 1.8, paddingLeft: '20px', fontSize: '0.9em', listStyle: 'none' }}>
                {arch.tech.map((t, tidx) => (<li key={tidx} style={{ marginBottom: '8px' }}>• {t}</li>))}
              </ul>
              <div style={{ marginTop: '20px', textAlign: 'center' }}><span style={{ color: '#EB984E', fontSize: '0.9em', fontWeight: '600' }}>Détails →</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '60px 20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '80px' }}>
        <p style={{ fontSize: '1.2em', color: '#EB984E', marginBottom: '20px' }}>FFT Cognitive Foundation • CitizenHub • 2025</p>
        <p style={{ fontSize: '0.9em', color: '#888' }}>Assistance citoyenne locale, accessible et souveraine</p>
      </footer>
    </div>
  );
}
