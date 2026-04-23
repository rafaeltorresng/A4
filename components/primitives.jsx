// AQU4TRO UI Kit — Landing primitives (Icons, Logo, Labels)
const WA_URL = 'https://wa.me/5581997140111?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista.';

const Icon = {
  Whatsapp: ({ size = 22, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  ),
  Phone: ({ size = 18, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" stroke={color} strokeWidth="1.7" strokeLinejoin="round"/></svg>
  ),
  Check: ({ size = 20, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill={color} opacity=".12"/><path d="m8 12 3 3 5-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Pin: ({ size = 18, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke={color} strokeWidth="1.6"/><circle cx="12" cy="10" r="2.5" stroke={color} strokeWidth="1.6"/></svg>
  ),
  Chevron: ({ open, color = '#1E4FA1' }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{transform: open?'rotate(180deg)':'none', transition:'transform .25s'}}><path d="m6 9 6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Star: ({ color = '#FFC431' }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2Z"/></svg>
  ),
  Quote: ({ color = '#1E4FA1' }) => (
    <svg width="28" height="22" viewBox="0 0 28 22" fill={color} opacity=".18"><path d="M0 22V12C0 5 4 0 11 0v4c-3 0-5 2-5 5v1h5v12H0Zm17 0V12C17 5 21 0 28 0v4c-3 0-5 2-5 5v1h5v12H17Z"/></svg>
  ),
  Instagram: ({ size = 20, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  ExternalLink: ({ size = 14, color = '#9CA3AF' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  CaseReview: ({ size = 24, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M10.5 3h3a1 1 0 0 1 1 1v1.5h3.5a1 1 0 0 1 1 1V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6.5a1 1 0 0 1 1-1H9.5V4a1 1 0 0 1 1-1Z" stroke={color} strokeWidth="1.55" strokeLinejoin="round"/><circle cx="17" cy="9.5" r="3.25" fill="#fff" stroke={color} strokeWidth="1.45"/><path d="m15.4 9.5 1.35 1.35 2.9-2.9" stroke={color} strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  PaperworkStack: ({ size = 24, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M5.5 8.5h12A1.5 1.5 0 0 1 19 10v8.5A1.5 1.5 0 0 1 17.5 20h-12A1.5 1.5 0 0 1 4 18.5V10a1.5 1.5 0 0 1 1.5-1.5Z" stroke={color} strokeWidth="1.55" strokeLinejoin="round"/><circle cx="17" cy="12" r="3.5" fill={color}/><path d="m15.2 12 1.3 1.2 2.5-2.8" stroke="#fff" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  PayoutReceived: ({ size = 24, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M4.5 11.5h15a1.25 1.25 0 0 1 1.25 1.25v6.5a1.25 1.25 0 0 1-1.25 1.25h-15A1.25 1.25 0 0 1 3.25 19.25v-6.5a1.25 1.25 0 0 1 1.25-1.25Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 4.25v5.75M9.25 7.25 12 4.5l2.75 2.75" stroke={color} strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Rideshare: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="6" y="3.25" width="11.5" height="17.5" rx="2.35" stroke={color} strokeWidth="1.45"/><path d="M9.5 16.25c1.4-2.5 3.4-4 6.25-4.75" stroke={color} strokeWidth="1.35" strokeLinecap="round" fill="none"/><circle cx="9.5" cy="16.25" r="1.25" fill={color}/><circle cx="18.25" cy="5.75" r="2.4" fill="#fff" stroke={color} strokeWidth="1.35"/><path d="m16.85 5.75 1.05.95 1.9-1.85" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  ThirdParty: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3.5 17.2h6.2l.9-3.1a.85.85 0 01.8-.6h.9a.85.85 0 01.8.6l.9 3.1h1.4" stroke={color} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/><path d="M14.1 17.2h6.2l.9-3.1a.85.85 0 01.8-.6h.9a.85.85 0 01.8.6l.9 3.1h1.35" stroke={color} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"/><circle cx="12.8" cy="9.8" r="1.15" fill={color}/></svg>
  ),
  Passenger: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="4.75" y="5.25" width="14.5" height="13.5" rx="2.15" stroke={color} strokeWidth="1.45"/><circle cx="12" cy="12.35" r="2.35" stroke={color} strokeWidth="1.35"/><path d="M12 10.6v3.5M10.25 12.35h3.5" stroke={color} strokeWidth="1.25" strokeLinecap="round"/><circle cx="18.35" cy="8.15" r="2.55" fill="#fff" stroke={color} strokeWidth="1.3"/><path d="M18.35 6.85v2.6M17.05 8.15h2.6" stroke={color} strokeWidth="1.15" strokeLinecap="round"/></svg>
  ),
  Legacy: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M5 6.5h5l1.2 1.4H19a1.2 1.2 0 011.2 1.2v9.6a1.2 1.2 0 01-1.2 1.2H5a1.2 1.2 0 01-1.2-1.2V7.7A1.2 1.2 0 015 6.5Z" stroke={color} strokeWidth="1.45" strokeLinejoin="round"/><circle cx="17.2" cy="9.3" r="3.6" fill="#fff" stroke={color} strokeWidth="1.35"/><path d="M17.2 7.4v2.35l1.55.9" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
};

function Logo({ size = 20, stacked = true, color = '#1E4FA1', accent = '#FFC431', variant = 'full' }) {
  if (variant === 'mark') return <LogoMark size={size * 2} color={color} accent={accent}/>;
  
  const text = variant === 'reduced' ? 'AQ4TRO' : 'AQU4TRO';
  const parts = variant === 'reduced' ? [['A', accent], ['Q', color], ['4', accent], ['TRO', color]] : [['A', accent], ['QU', color], ['4', accent], ['TRO', color]];

  return (
    <div style={{ display:'inline-flex', flexDirection:'column', alignItems:'flex-start', lineHeight:1 }}>
      <div style={{ fontFamily:'Poppins, sans-serif', fontWeight:800, fontSize:size, letterSpacing:'.02em', color }}>
        {parts.map(([txt, clr], i) => <span key={i} style={{ color: clr }}>{txt}</span>)}
      </div>
      {stacked && variant === 'full' && (
        <div style={{ fontFamily:'Poppins, sans-serif', fontWeight:500, fontSize:size*0.32, letterSpacing:'.3em', color, marginTop:3 }}>SERVIÇOS DE TRÂNSITO</div>
      )}
    </div>
  );
}

function LogoMark({ size = 44, color = '#1E4FA1', accent = '#FFC431' }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: size * 0.42,
      letterSpacing: '-0.02em', lineHeight: 1, color: '#fff',
      boxShadow: '0 4px 12px rgba(15,46,99,0.15)'
    }}>
      <span style={{ color: accent }}>A</span>Q<span style={{ color: accent }}>4</span>
    </div>
  );
}

function SectionLabel({ label, primary='#1E4FA1' }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom: 8 }}>
      <span style={{ width:4, height:4, borderRadius:999, background:primary }}/>
      <div style={{ fontFamily:'DM Sans, sans-serif', fontWeight:700, fontSize:10, letterSpacing:'.12em', textTransform:'uppercase', color:primary }}>{label}</div>
    </div>
  );
}

// ─── Componente de Contador (Motion) ──────────────────────────
function Counter({ target, duration = 2000 }) {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const endValue = parseInt(target.replace(/\D/g, ''));
        if (isNaN(endValue)) {
          setCount(target);
          return;
        }
        const increment = endValue / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= endValue) {
            setCount(endValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, { threshold: 0.5 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  const suffix = target.replace(/[0-9]/g, '').replace('+', '');
  const prefix = target.startsWith('+') ? '+' : '';
  
  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
}

Object.assign(window, { WA_URL, Icon, Logo, LogoMark, SectionLabel, Counter });
