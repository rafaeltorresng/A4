// AQU4TRO — Seções da landing page

const WHATSAPP_URL = 'https://wa.me/5581997140111?text=Ol%C3%A1%2C%20sofri%20um%20acidente%20e%20gostaria%20de%20falar%20com%20um%20especialista.';

// ─── Ícones (outline, 24px) ─────────────────────────────────────
const Icon = {
  Whatsapp: ({ size = 22, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.9.53 3.67 1.45 5.18L2 22l4.95-1.41A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M8.5 8c.3-.5.9-.5 1.3-.1.3.3.8 1.2 1 1.7.1.3 0 .6-.2.8l-.5.5c-.2.2-.2.4-.1.6.4 1 1.3 1.9 2.3 2.3.2.1.4 0 .6-.1l.5-.5c.2-.2.5-.3.8-.2.5.2 1.4.7 1.7 1 .4.4.4 1-.1 1.3-.8.6-1.8.9-2.8.7-2.1-.3-4.3-2.5-4.6-4.6-.2-1 .1-2 .7-2.7Z" fill={color}/>
    </svg>
  ),
  Phone: ({ size = 18, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" stroke={color} strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  ),
  Shield: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="m9 12 2 2 4-4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Car: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 17h14M5 17v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2M5 17l1.5-5.5A2 2 0 0 1 8.4 10h7.2a2 2 0 0 1 1.9 1.5L19 17M16 17v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7.5" cy="14.5" r="1" fill={color}/>
      <circle cx="16.5" cy="14.5" r="1" fill={color}/>
    </svg>
  ),
  App: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" stroke={color} strokeWidth="1.6"/>
      <path d="M10 18h4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M9 6h6" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
    </svg>
  ),
  Doc: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M14 2v6h6M9 14h6M9 17h4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Check: ({ size = 20, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill={color} opacity=".12"/>
      <path d="m8 12 3 3 5-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Clock: ({ size = 22, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6"/>
      <path d="M12 7v5l3 2" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  Pin: ({ size = 18, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke={color} strokeWidth="1.6"/>
      <circle cx="12" cy="10" r="2.5" stroke={color} strokeWidth="1.6"/>
    </svg>
  ),
  Chevron: ({ open, color = '#1E4FA1' }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .25s'}}>
      <path d="m6 9 6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Star: ({ color = '#FFC431' }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2Z"/></svg>
  ),
  Quote: ({ color = '#1E4FA1' }) => (
    <svg width="28" height="22" viewBox="0 0 28 22" fill={color} opacity=".18">
      <path d="M0 22V12C0 5 4 0 11 0v4c-3 0-5 2-5 5v1h5v12H0Zm17 0V12C17 5 21 0 28 0v4c-3 0-5 2-5 5v1h5v12H17Z"/>
    </svg>
  ),
  Alert: ({ color = '#FFC431' }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2 1 21h22L12 2Z" fill={color}/>
      <path d="M12 9v5M12 17.5v.5" stroke="#1E4FA1" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Menu: ({ color = '#1E4FA1' }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

// ─── Logo AQU4TRO ──────────────────────────────────────────────
function Logo({ size = 20, stacked = true, color = '#1E4FA1', accent = '#FFC431' }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: size, letterSpacing: '.02em', color }}>
        <span style={{ color: accent }}>A</span>QU<span>4</span>TRO
      </div>
      {stacked && (
        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: size * 0.32, letterSpacing: '.3em', color, marginTop: 3 }}>
          SERVIÇOS DE TRÂNSITO
        </div>
      )}
    </div>
  );
}

// ─── Top bar (fixa dentro do telefone) ─────────────────────────
function TopBar({ primary }) {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 18px', background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #E5E7EB',
    }}>
      <Logo size={17} stacked={true} color={primary} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <a href={WHATSAPP_URL} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: '#25D366', color: '#fff',
          padding: '8px 12px', borderRadius: 999,
          fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 12,
          textDecoration: 'none', boxShadow: '0 4px 10px rgba(37,211,102,.3)',
        }}>
          <Icon.Whatsapp size={14} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────
function Hero({ primary, accent, heroTone }) {
  // heroTone: 'road' | 'human'
  const isHuman = heroTone === 'human';
  return (
    <section style={{ position: 'relative', color: '#fff', overflow: 'hidden' }}>
      {/* Imagem de fundo */}
      <div style={{
        position: 'absolute', inset: 0,
        background: isHuman
          ? `linear-gradient(135deg, ${primary} 0%, #0F2E63 100%)`
          : `linear-gradient(180deg, rgba(15,46,99,.55) 0%, ${primary} 85%)`,
      }}>
        {/* Placeholder "imagem" — textura sutil */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: .25, mixBlendMode: 'screen' }}>
          <defs>
            <pattern id="roadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0" stroke="#fff" strokeWidth=".5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#roadGrid)"/>
        </svg>
        {/* Curvas sugerindo estrada / movimento */}
        <svg width="100%" height="100%" viewBox="0 0 390 560" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, opacity: .35 }}>
          <path d="M-20 560 Q 100 300, 200 250 T 410 60" stroke="#fff" strokeWidth="1" fill="none" opacity=".3"/>
          <path d="M-50 560 Q 120 320, 220 270 T 420 90" stroke={accent} strokeWidth="1.5" fill="none" opacity=".6"/>
        </svg>
      </div>

      <div style={{ position: 'relative', padding: '28px 22px 26px' }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 12px', borderRadius: 999,
          background: 'rgba(255,255,255,.15)',
          border: '1px solid rgba(255,255,255,.25)',
          fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 10.5,
          letterSpacing: '.15em', textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: accent }}/>
          Especialistas em indenização
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 800,
          fontSize: 30, lineHeight: 1.1, margin: '14px 0 0',
          letterSpacing: '-.01em',
        }}>
          Sofreu um acidente<br/>de trânsito?<br/>
          <span style={{ color: accent }}>Você tem direito</span><br/>
          à indenização.
        </h1>

        <p style={{
          fontFamily: 'Montserrat, sans-serif', fontWeight: 400,
          fontSize: 14, lineHeight: 1.55, margin: '14px 0 0',
          color: 'rgba(255,255,255,.88)', maxWidth: 320,
        }}>
          Cuidamos de tudo, do início ao fim. Sem burocracia, sem custo adiantado — só você recebendo o que é seu por direito.
        </p>

        {/* CTA principal */}
        <a href={WHATSAPP_URL} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          marginTop: 22, padding: '16px 20px',
          background: '#25D366', color: '#fff',
          borderRadius: 14, textDecoration: 'none',
          fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16,
          boxShadow: '0 10px 24px rgba(37,211,102,.35), 0 2px 6px rgba(0,0,0,.2)',
        }}>
          <Icon.Whatsapp size={22}/> Falar com um especialista
        </a>

        <div style={{
          marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: 'rgba(255,255,255,.75)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: '#4ADE80', boxShadow: '0 0 0 4px rgba(74,222,128,.25)' }}/>
          Atendimento agora · Resposta em minutos
        </div>

        {/* Stats bar */}
        <div style={{
          marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          background: 'rgba(255,255,255,.08)', borderRadius: 14,
          border: '1px solid rgba(255,255,255,.14)',
          backdropFilter: 'blur(6px)',
          overflow: 'hidden',
        }}>
          {[
            ['14', 'anos de\nexperiência'],
            ['+5mil', 'vítimas\nindenizadas'],
            ['100%', 'atendimento\nonline'],
          ].map(([big, small], i) => (
            <div key={i} style={{
              padding: '12px 8px', textAlign: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,.12)' : 'none',
            }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 22, color: accent }}>{big}</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, lineHeight: 1.25, color: 'rgba(255,255,255,.85)', whiteSpace: 'pre-line', marginTop: 2 }}>{small}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Problema ─────────────────────────────────────────────────
function Problema({ primary }) {
  const items = [
    'Não sei se tenho direito a alguma indenização.',
    'Ouvi dizer que a burocracia é grande demais.',
    'Tenho medo de ser enganado ou pagar algo adiantado.',
    'Perdi documentos ou não fiz boletim de ocorrência.',
  ];
  return (
    <section style={{ padding: '38px 22px 30px', background: '#fff' }}>
      <SectionLabel number="02" label="O que você está sentindo" primary={primary}/>
      <h2 style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: 700,
        fontSize: 24, lineHeight: 1.2, margin: '10px 0 4px', color: '#0F2E63',
        letterSpacing: '-.01em',
      }}>
        Depois de um acidente,<br/>a cabeça fica cheia de dúvidas.
      </h2>
      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13.5, lineHeight: 1.55, color: '#4B5563', margin: '8px 0 18px' }}>
        Você não está sozinho. Talvez esteja pensando:
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((t, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            padding: '14px 14px', borderRadius: 12,
            background: '#F7F9FC', border: '1px solid #E5E7EB',
          }}>
            <div style={{
              flexShrink: 0, width: 28, height: 28, borderRadius: 999,
              background: '#fff', border: '1px solid #E5E7EB',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, color: primary,
            }}>{i + 1}</div>
            <p style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: 13.5, lineHeight: 1.5,
              color: '#1F2937', margin: 0,
            }}>"{t}"</p>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 18, padding: '14px 14px', borderRadius: 12,
        background: '#FFFBEB', border: '1px solid #FEF3C7',
        display: 'flex', gap: 10, alignItems: 'flex-start',
      }}>
        <Icon.Alert/>
        <p style={{
          fontFamily: 'Montserrat, sans-serif', fontSize: 12.5, lineHeight: 1.45,
          color: '#0F2E63', margin: 0,
        }}>
          <strong>Atenção:</strong> o prazo para pedir DPVAT é de <strong>3 anos</strong> e para ação contra terceiros até <strong>5 anos</strong>. Cada dia conta.
        </p>
      </div>
    </section>
  );
}

// ─── Como funciona ────────────────────────────────────────────
function ComoFunciona({ primary, accent }) {
  const steps = [
    { n: '01', t: 'Você conta o que aconteceu', d: 'Pelo WhatsApp, em minutos. Tudo online, sem sair de casa.' },
    { n: '02', t: 'Analisamos seu caso', d: 'Um especialista avalia gratuitamente se você tem direito e qual o caminho.' },
    { n: '03', t: 'Cuidamos de toda burocracia', d: 'Documentos, laudos, protocolos — fazemos tudo por você.' },
    { n: '04', t: 'Você recebe sua indenização', d: 'Acompanhamento do início ao fim, com transparência total.' },
  ];
  return (
    <section style={{ padding: '38px 22px 30px', background: '#F7F9FC' }}>
      <SectionLabel number="03" label="Como funciona" primary={primary}/>
      <h2 style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: 700,
        fontSize: 24, lineHeight: 1.2, margin: '10px 0 22px', color: '#0F2E63',
        letterSpacing: '-.01em',
      }}>
        Do primeiro contato<br/>até o pagamento.
      </h2>
      <div style={{ position: 'relative' }}>
        {/* Linha conectora */}
        <div style={{
          position: 'absolute', left: 22, top: 22, bottom: 22,
          width: 2, background: `repeating-linear-gradient(to bottom, ${primary} 0 4px, transparent 4px 8px)`,
          opacity: .3,
        }}/>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, marginBottom: i === steps.length - 1 ? 0 : 18, position: 'relative' }}>
            <div style={{
              flexShrink: 0, width: 44, height: 44, borderRadius: 999,
              background: primary, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13,
              boxShadow: `0 6px 16px ${primary}40`,
              border: `3px solid #F7F9FC`,
            }}>{s.n}</div>
            <div style={{ paddingTop: 2 }}>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15,
                color: '#0F2E63', margin: 0, lineHeight: 1.3,
              }}>{s.t}</h3>
              <p style={{
                fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 1.5,
                color: '#4B5563', margin: '4px 0 0',
              }}>{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Especialidades ───────────────────────────────────────────
function Especialidades({ primary, accent }) {
  const services = [
    { icon: Icon.App, t: 'Indenização via App', d: 'Motoristas e passageiros de Uber, 99 e iFood têm direito.', tag: 'NOVO' },
    { icon: Icon.Car, t: 'Processos contra Terceiros', d: 'Acidentes causados por outros condutores. Cobrança direta ou judicial.' },
    { icon: Icon.Shield, t: 'DPVAT', d: 'Seguro obrigatório para vítimas de acidente. Morte, invalidez ou despesas médicas.' },
    { icon: Icon.Doc, t: 'Resgate de Documentos', d: 'Ajudamos a reconstruir boletim, laudos e histórico médico.' },
  ];
  return (
    <section style={{ padding: '38px 22px 30px', background: '#fff' }}>
      <SectionLabel number="04" label="Especialidades" primary={primary}/>
      <h2 style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: 700,
        fontSize: 24, lineHeight: 1.2, margin: '10px 0 20px', color: '#0F2E63',
        letterSpacing: '-.01em',
      }}>
        Em que a gente atua.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {services.map((s, i) => {
          const I = s.icon;
          return (
            <div key={i} style={{
              position: 'relative',
              padding: '16px 14px 14px', borderRadius: 14,
              background: '#F7F9FC', border: '1px solid #E5E7EB',
              minHeight: 140,
            }}>
              {s.tag && (
                <span style={{
                  position: 'absolute', top: 10, right: 10,
                  fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 8.5,
                  letterSpacing: '.15em',
                  padding: '3px 6px', borderRadius: 4,
                  background: accent, color: '#0F2E63',
                }}>{s.tag}</span>
              )}
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: '#fff', border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 10,
              }}>
                <I color={primary}/>
              </div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13.5,
                color: '#0F2E63', margin: 0, lineHeight: 1.25,
              }}>{s.t}</h3>
              <p style={{
                fontFamily: 'Montserrat, sans-serif', fontSize: 11.5, lineHeight: 1.4,
                color: '#4B5563', margin: '6px 0 0',
              }}>{s.d}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Prova Social ─────────────────────────────────────────────
function ProvaSocial({ primary, accent }) {
  const [active, setActive] = React.useState(0);
  const depos = [
    { name: 'Juliana M.', role: 'Passageira de Uber · Recife, PE', text: 'Fui atropelada dentro do aplicativo e nem sabia que tinha direito. A equipe cuidou de tudo, e em poucos meses recebi minha indenização. Atendimento humano desde o começo.', stars: 5 },
    { name: 'Carlos R.', role: 'Motorista · Olinda, PE', text: 'Tinha medo de cair em golpe. Fui recebido com clareza, me explicaram cada etapa. Hoje indico para qualquer colega motorista.', stars: 5 },
    { name: 'Dona Helena', role: 'Familiar de vítima · São Paulo, SP', text: 'Perdi meu irmão em um acidente e não sabia nem por onde começar. A A QU4TRO me acolheu e garantiu o DPVAT da família.', stars: 5 },
  ];
  return (
    <section style={{ padding: '38px 0 30px', background: '#F7F9FC' }}>
      <div style={{ padding: '0 22px' }}>
        <SectionLabel number="05" label="Quem confiou" primary={primary}/>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 700,
          fontSize: 24, lineHeight: 1.2, margin: '10px 0 4px', color: '#0F2E63',
          letterSpacing: '-.01em',
        }}>
          Histórias reais de<br/>quem foi indenizado.
        </h2>
      </div>

      {/* Barra de números */}
      <div style={{
        margin: '18px 22px 18px',
        padding: '14px 14px',
        background: '#0F2E63', borderRadius: 14,
        color: '#fff',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8,
      }}>
        {[['4,4mil', 'seguidores'], ['423', 'casos no Insta'], ['98%', 'satisfação']].map(([b, s], i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 18, color: accent }}>{b}</div>
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(255,255,255,.75)', marginTop: 2 }}>{s}</div>
          </div>
        ))}
      </div>

      {/* Card de depoimento */}
      <div style={{ padding: '0 22px' }}>
        <div style={{
          padding: '18px 18px 16px', background: '#fff', borderRadius: 14,
          border: '1px solid #E5E7EB', position: 'relative',
          boxShadow: '0 4px 14px rgba(15,46,99,.06)',
        }}>
          <div style={{ position: 'absolute', top: 12, right: 14 }}><Icon.Quote color={primary}/></div>
          <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
            {Array.from({ length: depos[active].stars }).map((_, i) => <Icon.Star key={i}/>)}
          </div>
          <p style={{
            fontFamily: 'Montserrat, sans-serif', fontSize: 13.5, lineHeight: 1.55,
            color: '#1F2937', margin: 0,
          }}>
            {depos[active].text}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14, paddingTop: 12, borderTop: '1px solid #F1F5F9' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 999,
              background: `linear-gradient(135deg, ${primary}, #0F2E63)`,
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13,
            }}>{depos[active].name[0]}</div>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, color: '#0F2E63' }}>{depos[active].name}</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: '#6B7280' }}>{depos[active].role}</div>
            </div>
          </div>
        </div>
        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14 }}>
          {depos.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: active === i ? 22 : 8, height: 8, borderRadius: 999,
              background: active === i ? primary : '#CBD5E1',
              border: 'none', padding: 0, cursor: 'pointer',
              transition: 'all .25s',
            }}/>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Quem somos ───────────────────────────────────────────────
function QuemSomos({ primary, accent }) {
  const values = [
    'Sem custo adiantado para você',
    'Atendimento 100% online',
    'Transparência em cada etapa',
    'Acompanhamento até o pagamento',
  ];
  return (
    <section style={{ padding: '40px 22px 36px', background: primary, color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Textura suave */}
      <svg style={{ position: 'absolute', right: -60, top: -60, opacity: .1 }} width="240" height="240" viewBox="0 0 240 240">
        <circle cx="120" cy="120" r="118" stroke="#fff" strokeWidth="1" fill="none"/>
        <circle cx="120" cy="120" r="80" stroke="#fff" strokeWidth="1" fill="none"/>
        <circle cx="120" cy="120" r="42" stroke="#fff" strokeWidth="1" fill="none"/>
      </svg>

      <div style={{ position: 'relative' }}>
        <div style={{
          display: 'inline-block',
          fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 10.5,
          letterSpacing: '.25em', textTransform: 'uppercase',
          color: accent,
        }}>06 · Quem somos</div>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 700,
          fontSize: 26, lineHeight: 1.15, margin: '10px 0 0',
          letterSpacing: '-.01em',
        }}>
          14 anos lutando<br/>pelo direito da vítima.
        </h2>
        <p style={{
          fontFamily: 'Montserrat, sans-serif', fontSize: 13.5, lineHeight: 1.55,
          color: 'rgba(255,255,255,.85)', margin: '14px 0 0',
        }}>
          Nascemos em Recife com uma missão: transformar a dor de um acidente em reparação justa. Somos uma equipe especializada em indenizações, não uma seguradora nem um órgão público. Trabalhamos por você, do primeiro contato até o dia em que o dinheiro entra na sua conta.
        </p>

        <div style={{
          marginTop: 20, padding: '16px 16px',
          background: 'rgba(255,255,255,.08)', borderRadius: 12,
          border: '1px solid rgba(255,255,255,.14)',
        }}>
          {values.map((v, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 0', borderBottom: i < values.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none',
            }}>
              <Icon.Check size={18} color={accent}/>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#fff' }}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 18, display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(255,255,255,.8)',
        }}>
          <Icon.Pin size={14} color={accent}/> Recife, PE · Atendemos todo o Brasil
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────
function FAQ({ primary }) {
  const [open, setOpen] = React.useState(0);
  const faqs = [
    { q: 'Preciso pagar algo adiantado?', a: 'Não. Nosso trabalho é remunerado só quando você recebe. Sem taxa de cadastro, sem mensalidade, sem pegadinha.' },
    { q: 'Quanto tempo demora?', a: 'Depende do tipo de caso. DPVAT costuma sair em 3 a 6 meses. Processos contra terceiros variam, mas você acompanha cada etapa em tempo real.' },
    { q: 'Posso receber mesmo se a culpa foi minha?', a: 'Em muitos casos, sim — principalmente no DPVAT e em acidentes envolvendo aplicativos. Analisamos seu caso gratuitamente para te dar uma resposta segura.' },
    { q: 'E se eu não tiver boletim de ocorrência?', a: 'A gente ajuda a reconstruir. Laudo médico, testemunhas e registros de aplicativo também servem como prova.' },
    { q: 'Passageiro de Uber/99 também tem direito?', a: 'Sim. Motoristas e passageiros de aplicativo têm cobertura específica — inclusive quando o acidente é culpa do condutor.' },
    { q: 'Qual o valor da indenização?', a: 'Varia conforme o tipo de lesão, gravidade e caso. Já conseguimos valores de R$ 3 mil a mais de R$ 100 mil. Te damos uma estimativa realista logo no primeiro contato.' },
    { q: 'DPVAT ainda existe?', a: 'Sim. O DPVAT foi reformulado, mas continua garantindo indenização para vítimas de acidente de trânsito em todo o país.' },
    { q: 'Atendem fora de Recife?', a: 'Atendemos em todo o Brasil, 100% online. Já representamos clientes em todos os estados.' },
  ];
  return (
    <section style={{ padding: '38px 22px 30px', background: '#fff' }}>
      <SectionLabel number="07" label="Dúvidas frequentes" primary={primary}/>
      <h2 style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: 700,
        fontSize: 24, lineHeight: 1.2, margin: '10px 0 18px', color: '#0F2E63',
        letterSpacing: '-.01em',
      }}>
        Perguntas que a gente<br/>ouve todo dia.
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {faqs.map((f, i) => (
          <div key={i} style={{
            borderRadius: 12, border: '1px solid #E5E7EB',
            background: open === i ? '#F7F9FC' : '#fff',
            overflow: 'hidden', transition: 'background .2s',
          }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} style={{
              width: '100%', padding: '14px 14px',
              display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'space-between',
              background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
            }}>
              <span style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 13.5,
                color: '#0F2E63', lineHeight: 1.3,
              }}>{f.q}</span>
              <Icon.Chevron open={open === i} color={primary}/>
            </button>
            {open === i && (
              <div style={{ padding: '0 14px 14px' }}>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 1.55,
                  color: '#4B5563', margin: 0,
                }}>{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CTA Final ────────────────────────────────────────────────
function CTAFinal({ primary, accent }) {
  return (
    <section style={{
      padding: '40px 22px 36px',
      background: `linear-gradient(180deg, #0F2E63 0%, ${primary} 100%)`,
      color: '#fff', position: 'relative', overflow: 'hidden',
    }}>
      <svg style={{ position: 'absolute', left: -40, bottom: -40, opacity: .12 }} width="220" height="220" viewBox="0 0 100 100">
        <path d="M20 80 Q 50 20, 80 80" stroke={accent} strokeWidth="2" fill="none"/>
        <path d="M10 90 Q 50 10, 90 90" stroke="#fff" strokeWidth="1" fill="none"/>
      </svg>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', marginBottom: 12 }}>
          <div style={{
            width: 54, height: 54, borderRadius: 14,
            background: 'rgba(255,255,255,.1)',
            border: '1px solid rgba(255,255,255,.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon.Shield size={28} color={accent}/>
          </div>
        </div>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 800,
          fontSize: 28, lineHeight: 1.1, margin: 0,
          letterSpacing: '-.015em',
        }}>
          Seu direito,<br/>
          <span style={{ color: accent }}>nossa prioridade.</span>
        </h2>
        <p style={{
          fontFamily: 'Montserrat, sans-serif', fontSize: 13.5, lineHeight: 1.55,
          color: 'rgba(255,255,255,.85)', margin: '12px auto 0', maxWidth: 300,
        }}>
          Conte sua história agora. Em poucos minutos você sabe se tem direito — sem compromisso, sem custo.
        </p>

        <a href={WHATSAPP_URL} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          marginTop: 22, padding: '17px 20px',
          background: '#25D366', color: '#fff',
          borderRadius: 14, textDecoration: 'none',
          fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16,
          boxShadow: '0 10px 28px rgba(37,211,102,.4)',
        }}>
          <Icon.Whatsapp size={22}/> Falar agora no WhatsApp
        </a>

        <a href="tel:+5581997140111" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          marginTop: 14, padding: '10px 14px',
          color: '#fff', textDecoration: 'none',
          fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 13,
          borderBottom: '1px dashed rgba(255,255,255,.4)',
        }}>
          <Icon.Phone size={14} color={accent}/> (81) 99714-0111
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────
function Footer({ primary, accent }) {
  return (
    <footer style={{ padding: '24px 22px 28px', background: '#0A1F45', color: 'rgba(255,255,255,.7)' }}>
      <Logo size={18} color="#fff" accent={accent}/>
      <p style={{
        fontFamily: 'Montserrat, sans-serif', fontSize: 11.5, lineHeight: 1.5,
        margin: '14px 0 0', color: 'rgba(255,255,255,.6)',
      }}>
        A QU4TRO Serviços de Trânsito · Assessoria especializada em indenizações por acidente. Atuamos como facilitadores entre você e os responsáveis pelo pagamento. Não somos seguradora nem órgão público.
      </p>
      <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a href={WHATSAPP_URL} style={linkStyle}>WhatsApp</a>
        <span style={{ color: 'rgba(255,255,255,.25)' }}>·</span>
        <a href="https://www.instagram.com/a4servicosdetransito" style={linkStyle}>Instagram</a>
        <span style={{ color: 'rgba(255,255,255,.25)' }}>·</span>
        <a href="#" style={linkStyle}>Política de Privacidade</a>
      </div>
      <div style={{
        marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,.1)',
        fontFamily: 'Montserrat, sans-serif', fontSize: 10.5, color: 'rgba(255,255,255,.45)',
      }}>
        © 2026 A QU4TRO. Todos os direitos reservados.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: '#FFC431', textDecoration: 'none',
  fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600,
};

// ─── Helper: SectionLabel ─────────────────────────────────────
function SectionLabel({ number, label, primary }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{
        fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 11,
        padding: '3px 7px', borderRadius: 4,
        background: primary, color: '#fff', letterSpacing: '.1em',
      }}>{number}</span>
      <span style={{
        fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 10.5,
        letterSpacing: '.2em', textTransform: 'uppercase', color: primary,
      }}>{label}</span>
    </div>
  );
}

// ─── Floating WhatsApp button ─────────────────────────────────
function FloatingCTA() {
  return (
    <a href={WHATSAPP_URL} style={{
      position: 'absolute', right: 16, bottom: 24, zIndex: 30,
      width: 54, height: 54, borderRadius: 999,
      background: '#25D366',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 10px 24px rgba(37,211,102,.45), 0 2px 6px rgba(0,0,0,.2)',
      textDecoration: 'none',
      animation: 'pulse 2s ease-in-out infinite',
    }}>
      <Icon.Whatsapp size={26}/>
    </a>
  );
}

Object.assign(window, { Hero, Problema, ComoFunciona, Especialidades, ProvaSocial, QuemSomos, FAQ, CTAFinal, Footer, TopBar, FloatingCTA, Icon, Logo });
