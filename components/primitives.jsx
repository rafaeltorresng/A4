// AQU4TRO UI Kit — Landing primitives (Icons, Logo, Labels)
const WA_URL = 'https://wa.me/5581997140111?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista.';

const Icon = {
  Whatsapp: ({ size = 22, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  Phone: ({ size = 18, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
  ),
  Check: ({ size = 20, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
  ),
  Pin: ({ size = 18, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Chevron: ({ open, color = '#1E4FA1' }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transform: open?'rotate(180deg)':'none', transition:'transform .25s'}}><path d="m6 9 6 6 6-6"/></svg>
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  PaperworkStack: ({ size = 24, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  PayoutReceived: ({ size = 24, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Rideshare: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </svg>
  ),
  ThirdParty: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Passenger: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Legacy: ({ size = 26, color = '#1E4FA1' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
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
