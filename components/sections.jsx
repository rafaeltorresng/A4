// AQU4TRO — Top-level sections (Refactored)

function TopBar({ primary }) {
  return (
    <div style={{ position:'sticky', top:0, zIndex:10, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 18px', background:'rgba(255,255,255,.75)', backdropFilter:'blur(15px) saturate(160%)', borderBottom:'1px solid rgba(229,231,235,.5)' }}>
      <Logo size={17} stacked color={primary} accent="#FFC431"/>
      <a href={WA_URL} className="btn-shine" style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#25D366', color:'#fff', padding:'8px 14px', borderRadius:999, fontFamily:'DM Sans, sans-serif', fontWeight:700, fontSize:11, textDecoration:'none', boxShadow:'0 4px 12px rgba(37,211,102,.25)' }}>
        <Icon.Whatsapp size={14}/> WhatsApp
      </a>
    </div>
  );
}

function Hero({ primary, accent }) {
  return (
    <section style={{ position:'relative', color:'#fff', overflow:'hidden', minHeight:480, display:'flex', alignItems:'center' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'url("assets/hero-bg.png")', backgroundSize:'cover', backgroundPosition:'center' }}>
        <div style={{ position:'absolute', inset:0, background:`linear-gradient(180deg, rgba(15,46,99,0.7) 0%, ${primary}ee 100%)` }}/>
      </div>
      <svg width="100%" height="100%" viewBox="0 0 390 560" preserveAspectRatio="none" style={{ position:'absolute', inset:0, opacity:.4, pointerEvents:'none' }}>
        <path d="M-20 560 Q 100 300, 200 250 T 410 60" stroke="#fff" strokeWidth="0.5" fill="none" opacity=".2"/>
        <path d="M-50 560 Q 120 320, 220 270 T 420 90" stroke={accent} strokeWidth="1" fill="none" opacity=".4"/>
      </svg>
      <div style={{ position:'relative', padding:'28px 22px 26px' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 12px', borderRadius:999, background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.12)', fontFamily:'DM Sans, sans-serif', fontWeight:700, fontSize:10, letterSpacing:'.12em', textTransform:'uppercase', color:'#fff' }}>
          <span style={{ width:6, height:6, borderRadius:999, background:accent, boxShadow:`0 0 10px ${accent}` }}/> Especialistas em indenização
        </div>
        <h1 style={{ fontFamily:'Poppins, sans-serif', fontWeight:800, fontSize:30, lineHeight:1.1, margin:'14px 0 0', letterSpacing:'-.01em' }}>
          Sofreu um acidente<br/>de trânsito?<br/>
          <span style={{ color:accent }}>Você tem direito</span><br/>à indenização.
        </h1>
        <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:14, lineHeight:1.55, margin:'14px 0 0', color:'rgba(255,255,255,.88)', maxWidth:320 }}>
          Resolvemos toda a burocracia para você receber o valor máximo da sua indenização, sem custos adiantados.
        </p>
        <a href={WA_URL} className="btn-shine" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginTop:22, padding:'16px 20px', background:'#25D366', color:'#fff', borderRadius:14, textDecoration:'none', fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize:16, boxShadow:'0 10px 24px rgba(37,211,102,.35)' }}>
          <Icon.Whatsapp size={22}/> Falar com um especialista
        </a>
        <div style={{ marginTop:10, display:'flex', alignItems:'center', justifyContent:'center', gap:6, fontFamily:'DM Sans, sans-serif', fontSize:11, color:'rgba(255,255,255,.75)' }}>
          <span className="pulse-dot" style={{ width:6, height:6, borderRadius:999, background:'#4ADE80' }}/> Especialistas on-line agora
        </div>
        <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', background:'rgba(255,255,255,.08)', borderRadius:14, border:'1px solid rgba(255,255,255,.14)', overflow:'hidden' }}>
          {[['14','anos de\nexperiência'],['+5mil','vítimas\npagas'],['100%','atendimento\ndigital']].map(([b,s],i)=>(
            <div key={i} style={{ padding:'12px 8px', textAlign:'center', borderRight: i<2?'1px solid rgba(255,255,255,.12)':'none' }}>
              <div style={{ fontFamily:'Poppins, sans-serif', fontWeight:800, fontSize:22, color:accent }}><Counter target={b}/></div>
              <div style={{ fontFamily:'DM Sans, sans-serif', fontSize:10, lineHeight:1.25, color:'rgba(255,255,255,.85)', whiteSpace:'pre-line', marginTop:2 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ticker({ items }) {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {[...items, ...items].map((text, i) => (
          <div key={i} className="ticker-item">
            <span>{text}</span>
            <span className="ticker-sep">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Problema({ primary }) {
  const chatMessages = [
    { type: 'user', text: 'Não sei se tenho direito a receber algo...' },
    { type: 'a4', text: 'Essa é a dúvida de quase todos. A verdade é que a maioria dos acidentes gera algum tipo de reparação.' },
    { type: 'user', text: 'Mas a burocracia parece grande demais.' },
    { type: 'a4', text: 'Para quem está sozinho, sim. Nossa equipe cuida de toda a papelada para você.' },
    { type: 'user', text: 'Tenho medo de pagar taxas sem ter garantia.' },
    { type: 'a4', text: 'Aqui você só paga se a indenização cair na sua conta. Risco zero e transparência total.' },
  ];

  return (
    <section style={{ padding: '0 0 40px', background: '#fff', overflow: 'hidden' }}>
      <Ticker items={[
        'Não sei se tenho direito', 
        'Quanto vou receber?',
        'Perdi meus documentos', 
        'Burocracia excessiva', 
        'Acidente com moto',
        'Uber / 99 / iFood',
        'Não fiz boletim de ocorrência',
        'A culpa foi minha?',
        'O prazo já passou?',
        'Invalidez permanente',
        'Gastos com hospital',
        'Danos morais e materiais',
        'O veículo não tinha seguro',
        'Preciso de advogado?'
      ]} />
      
      <div style={{ padding: '38px 22px 0' }}>
        <SectionLabel label="Dúvidas comuns" primary={primary}/>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 28, lineHeight: 1.1, margin: '14px 0 6px', color: '#0F2E63', letterSpacing: '-0.01em' }}>
          Você não precisa lidar com<br/><span style={{ color: primary }}>isso sozinho.</span>
        </h2>

        <div className="chat-container">
          {chatMessages.map((msg, i) => (
            <div key={i} className={`chat-row ${msg.type}`} style={{ animation: `slideUp 0.5s ease both ${i * 0.2}s` }}>
              <div className="chat-avatar">
                {msg.type === 'a4' ? (
                  <LogoMark size={32} />
                ) : (
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#FFC431', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(255, 196, 49, 0.2)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F2E63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                )}
              </div>
              <div className={`chat-bubble ${msg.type}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Faixa de marcas (card Indenização via App) ───────────────
function Brand99Mark({ height = 22 }) {
  const padX = Math.round(height * 0.36);
  return (
    <span role="img" aria-label="99" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height, minWidth: height * 1.45, padding: `0 ${padX}px`, borderRadius: Math.max(6, Math.round(height * 0.28)), background: '#FFDD00', boxSizing: 'border-box', fontFamily: '"Poppins", system-ui, sans-serif', fontWeight: 800, fontSize: Math.round(height * 0.58), lineHeight: 1, letterSpacing: '-0.04em', color: '#1A1A1A' }}>99</span>
  );
}

function PartnerBrandStrip() {
  const logoH = 22;
  const img = { height: logoH, width: 'auto', display: 'block' };
  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14, rowGap: 10 }} aria-label="Plataformas de mobilidade">
        <img src="assets/brands/uber.svg" alt="Uber" style={img}/>
        <Brand99Mark height={logoH}/>
        <img src="assets/brands/ifood.svg" alt="iFood" style={img}/>
      </div>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 9, lineHeight: 1.35, color: '#9CA3AF', margin: '8px 0 0' }}>Marcas exibidas pertencem aos respectivos titulares.</p>
    </div>
  );
}

function Especialidades({ primary, accent }) {
  const services = [
    { icon: Icon.Rideshare, t:'Indenização via App', d:'Motoristas e passageiros de Uber, 99 e iFood têm direito a coberturas exclusivas.', tag:'NOVO', brandStrip: true },
    { icon: Icon.ThirdParty, t:'Contra Terceiros', d:'Danos materiais, morais e estéticos causados por outros condutores.' },
    { icon: Icon.Passenger,  t:'Seguro de Passageiro', d:'Acionamento de apólices privadas para invalidez ou despesas médicas.' },
    { icon: Icon.Legacy,     t:'Casos DPVAT', d:'Atendimentos para casos ocorridos até 14/11/2023, devido à mudança na legislação.' },
  ];
  return (
    <section style={{ padding:'38px 22px 30px', background:'#fff' }}>
      <SectionLabel label="Especialidades" primary={primary}/>
      <h2 style={{ fontFamily:'Poppins, sans-serif', fontWeight:500, fontSize:28, lineHeight:1.1, margin:'14px 0 24px', color:'#0F2E63', letterSpacing:'-0.01em' }}>
        Como garantimos sua<br/><span style={{ color:primary }}>indenização.</span>
      </h2>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        {services.map((s,i)=>{ const I = s.icon; return (
          <div key={i} className="card-premium" style={{ 
            position:'relative', 
            padding:'22px 16px', 
            borderRadius:20, 
            background:'#fff', 
            border:'1.5px solid #e4eaff', 
            minHeight: s.brandStrip ? undefined : 160, 
            display:'flex', 
            flexDirection:'column', 
            boxShadow:'0 4px 24px rgba(15, 34, 117, 0.07)',
          }}>
            {s.tag && <span style={{ position:'absolute', top:12, right:12, fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize:8, letterSpacing:'.12em', padding:'3px 8px', borderRadius:6, background:accent, color:'#0F2E63' }}>{s.tag}</span>}
            
            <div className="icon-box-premium" style={{ 
              width:50, height:50, 
              background:primary, 
              borderRadius:14, 
              display:'flex', 
              alignItems:'center', 
              justifyContent:'center', 
              marginBottom:16, 
              position:'relative'
            }}>
              <I color="#fff" size={24}/>
              <span style={{ 
                position:'absolute', 
                top:-4, right:-4, 
                width:12, height:12, 
                background:accent, 
                borderRadius:999, 
                border:'2px solid #fff' 
              }}/>
            </div>
            
            <h3 style={{ fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize:13, color:'#0F2E63', margin:0, lineHeight: 1.35 }}>{s.t}</h3>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:11, lineHeight:1.45, color:'#6B7280', margin:'8px 0 0' }}>{s.d}</p>
            {s.brandStrip && <PartnerBrandStrip/>}
          </div>
        );})}
      </div>
    </section>
  );
}

function ComoFunciona({ primary, accent }) {
  const [active, setActive] = React.useState(0);
  const steps = [
    { n:'01', t:'Você conta o que aconteceu', d:'Pelo WhatsApp, em poucos minutos. Tudo 100% digital, sem sair de casa.', icon: Icon.Whatsapp, pill: 'Rápido e digital' },
    { n:'02', t:'Analisamos seu caso', d:'Um especialista avalia gratuitamente se você tem direito. Sem compromisso.', icon: Icon.CaseReview, pill: 'Avaliação gratuita' },
    { n:'03', t:'Resolvemos a burocracia', d:'Documentos, laudos e protocolos — nossa equipe resolve tudo por você.', icon: Icon.PaperworkStack, pill: 'Sem esforço' },
    { n:'04', t:'Pagamento na sua conta', d:'Acompanhamento total até o recebimento do valor da sua indenização.', icon: Icon.PayoutReceived, pill: 'Transparência total' },
  ];
  return (
    <section style={{ padding:'40px 22px 36px', background:'#F7F9FC' }}>
      <div style={{ textAlign:'center', marginBottom:30 }}>
        <SectionLabel label="Como funciona" primary={primary}/>
        <h2 style={{ fontFamily:'Poppins, sans-serif', fontWeight:500, fontSize:32, lineHeight:1.05, margin:'14px 0 0', color:'#0F2E63', letterSpacing:'-0.01em' }}>
          Como funciona<br/><span style={{ color:primary }}>o processo.</span>
        </h2>
      </div>
      
      <div className="accordion">
        {steps.map((s,i)=>{ 
          const I = s.icon; 
          const isOpen = active === i;
          return (
            <div key={i} className={`acc-item ${isOpen ? 'open' : ''}`}>
              <div className="acc-header" onClick={() => setActive(isOpen ? -1 : i)}>
                <span className="acc-num">{s.n}</span>
                <div className="acc-icon-box">
                  <I color={isOpen ? "#fff" : primary} size={22}/>
                </div>
                <span className="acc-title-txt">{s.t}</span>
                <span className="acc-arrow">+</span>
              </div>
              <div className="acc-body">
                <p>{s.d}</p>
                <span className="acc-pill">
                  <span style={{ width:5, height:5, borderRadius:999, background:primary }}/>
                  {s.pill}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function InstagramBanner({ primary = '#0F2E63' }) {
  return (
    <section style={{ padding: '0 22px 42px', textAlign: 'center', background: '#F7F9FC' }}>
      <a href="https://www.instagram.com/a4servicosdetransito" className="btn-shine" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '16px 26px', borderRadius: 999, background: '#fff', border: '1px solid rgba(229, 231, 235, 0.8)', textDecoration: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon.Instagram size={24} color={primary}/>
          <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: 999, background: '#4ADE80' }}/>
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: '#0F2E63', lineHeight: 1 }}>@a4servicosdetransito</div>
          <div style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 11, color: '#6B7280', marginTop: 3 }}>Acompanhe casos reais</div>
        </div>
        <Icon.ExternalLink size={16} color="#FFC431"/>
      </a>
    </section>
  );
}

function QuemSomos({ primary, accent }) {
  const values = ['Sem custos adiantados','Atendimento 100% digital','Transparência total','Acompanhamento até o pagamento'];
  return (
    <section style={{ padding:0, background:primary, color:'#fff', position:'relative', overflow:'hidden' }}>
      <div style={{ width:'100%', height:240, position:'relative' }}>
        <img src="assets/about-us.png" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        <div style={{ position:'absolute', inset:0, background:`linear-gradient(0deg, ${primary} 10%, transparent 100%)` }}/>
      </div>
      <div style={{ padding:'0 22px 36px', position:'relative', marginTop:-40 }}>
        <div style={{ position:'absolute', top:14, right:22, filter:'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}>
          <LogoMark size={54} color="#1E4FA1" accent={accent}/>
        </div>
        <SectionLabel label="Quem somos" primary={accent}/>
        <h2 style={{ fontFamily:'Poppins, sans-serif', fontWeight:500, fontSize:30, lineHeight:1.1, margin:'14px 0 0', letterSpacing:'-0.01em' }}>
          14 anos de experiência<br/><span style={{ color:accent }}>em indenizações.</span>
        </h2>
        <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:13.5, lineHeight:1.55, color:'rgba(255,255,255,.85)', margin:'14px 0 0' }}>
          Especialistas em transformar a complexidade de um acidente em uma reparação justa. Somos uma assessoria técnica independente, não uma seguradora nem um órgão público.
        </p>
        <div style={{ marginTop:20, padding:'16px', background:'rgba(255,255,255,.08)', borderRadius:12, border:'1px solid rgba(255,255,255,.14)' }}>
          {values.map((v,i)=>(
            <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 0', borderBottom: i<values.length-1?'1px solid rgba(255,255,255,.1)':'none' }}>
              <Icon.Check size={18} color={accent}/>
              <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:13, color:'#fff' }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop:18, display:'flex', alignItems:'center', gap:8, fontFamily:'DM Sans, sans-serif', fontSize:12, color:'rgba(255,255,255,.8)' }}>
          <Icon.Pin size={14} color={accent}/> Recife, PE · Atendemos todo o Brasil
        </div>
      </div>
    </section>
  );
}

function FAQ({ primary }) {
  const [active, setActive] = React.useState(0);
  const faqs = [
    { q:'Preciso pagar algo adiantado?', a:'Não. Cobramos apenas uma porcentagem do valor que você efetivamente receber. Sem taxas de cadastro ou mensalidades.' },
    { q:'Quanto tempo demora?', a:'Varia conforme o caso. Indenizações via seguro de aplicativo costumam ser processadas em poucos meses.' },
    { q:'Quais documentos são necessários?', a:'Basicamente RG, CPF, comprovante de residência e o Boletim de Ocorrência (se houver). Caso falte algo, nós te orientamos.' },
    { q:'Qual o prazo máximo para pedir?', a:'Geralmente você tem até 3 anos após o acidente. No entanto, quanto antes você iniciar o processo, mais rápido recebe.' },
    { q:'Preciso ir a algum tribunal?', a:'Quase nunca. A maioria dos nossos casos é resolvida de forma administrativa e 100% digital, sem você sair de casa.' },
    { q:'Fui atendido pelo SUS, tenho direito?', a:'Com certeza. O atendimento público não anula seu direito à indenização por danos físicos, invalidez ou despesas médicas.' },
    { q:'Posso receber mesmo se a culpa foi minha?', a:'Sim. Passageiros de apps e motoristas (em certas coberturas) têm direito independente da culpa no acidente.' },
    { q:'Atendem fora de Recife?', a:'Atendemos em todo o Brasil. O processo é 100% digital e seguro.' },
  ];
  return (
    <section style={{ padding:'38px 22px 30px', background:'#fff' }}>
      <SectionLabel label="FAQ" primary={primary}/>
      <h2 style={{ fontFamily:'Poppins, sans-serif', fontWeight:500, fontSize:28, lineHeight:1.1, margin:'14px 0 24px', color:'#0F2E63', letterSpacing:'-0.01em' }}>
        Dúvidas frequentes sobre<br/><span style={{ color:primary }}>seu direito.</span>
      </h2>
      
      <div className="accordion">
        {faqs.map((f,i)=>{ 
          const isOpen = active === i;
          return (
            <div key={i} className={`acc-item ${isOpen ? 'open' : ''}`} style={{ borderTop: i===0?'none':'1px solid var(--neutral-200)' }}>
              <div className="acc-header" onClick={() => setActive(isOpen ? -1 : i)} style={{ padding: isOpen ? '20px 0 12px' : '18px 0' }}>
                <span className="acc-title-txt" style={{ fontSize: '14px', color: isOpen ? primary : '#0F2E63' }}>{f.q}</span>
                <span className="acc-arrow" style={{ fontSize: '20px' }}>+</span>
              </div>
              <div className="acc-body" style={{ padding: isOpen ? '0 0 20px 0' : '0' }}>
                <p style={{ fontSize: '13px', color: '#6B7280' }}>{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CTAFinal({ primary = '#0F2E63', accent }) {
  return (
    <section style={{ padding:'20px 18px 60px', background:'#fff' }}>
      <div style={{ 
        maxWidth: 440, 
        margin: '0 auto',
        padding:'48px 24px', 
        background: primary, 
        color:'#fff', 
        borderRadius: 32,
        position:'relative', 
        overflow:'hidden', 
        textAlign:'center',
        boxShadow: '0 20px 50px rgba(15, 46, 99, 0.2)'
      }}>
        {/* Aura decorativa de fundo */}
        <div style={{ position:'absolute', top:'-10%', right:'-10%', width:180, height:180, background:accent, borderRadius:'50%', opacity:0.12, filter:'blur(40px)', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', bottom:'-5%', left:'-5%', width:120, height:120, background:accent, borderRadius:'50%', opacity:0.06, filter:'blur(30px)', pointerEvents:'none' }}/>
        
        <div style={{ position:'relative', zIndex: 1 }}>
          <div style={{ marginBottom:20 }}><Logo size={20} stacked={false} color="#fff" accent={accent}/></div>
          <h2 style={{ fontFamily:'Poppins, sans-serif', fontWeight:600, fontSize:28, lineHeight:1.1, margin:'0 auto 16px', letterSpacing:'-0.02em' }}>
            Não deixe seu direito<br/><span style={{ color:accent }}>expirar.</span>
          </h2>
          <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:14, lineHeight:1.6, color:'rgba(255,255,255,.7)', margin:'0 auto 28px', maxWidth:280 }}>
            Fale com um especialista agora e descubra se você tem direito.
          </p>
          
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
            <a href={WA_URL} className="btn-shine" style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:10, padding:'18px 24px', background:'#25D366', color:'#fff', borderRadius:16, textDecoration:'none', fontFamily:'DM Sans, sans-serif', fontWeight:700, fontSize:16, boxShadow: '0 10px 24px rgba(37,211,102,0.3)' }}>
              <Icon.Whatsapp size={22}/> Iniciar atendimento
            </a>
            <a href="tel:+5581997140111" style={{ display:'inline-flex', alignItems:'center', gap:8, color:'rgba(255,255,255,.5)', textDecoration:'none', fontFamily:'DM Sans, sans-serif', fontWeight:500, fontSize:13 }}>
              <Icon.Phone size={14} color="rgba(255,255,255,0.3)"/> Ou ligue: (81) 99714-0111
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ accent }) {
  return (
    <footer style={{ 
      padding:'40px 22px calc(60px + env(safe-area-inset-bottom))', 
      background:'#0A1F45', 
      color:'rgba(255,255,255,.7)' 
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:18, marginBottom:22 }}>
        <Logo size={18} color="#fff" accent={accent} variant="reduced"/>
        <div style={{ display:'flex', alignItems:'center', gap:14, borderLeft:'1px solid rgba(255,255,255,.15)', paddingLeft:16 }}>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ display:'flex', color:'rgba(255,255,255,.5)', textDecoration:'none' }}>
            <Icon.Whatsapp size={18} color="rgba(255,255,255,.7)"/>
          </a>
          <a href="https://www.instagram.com/a4servicosdetransito" target="_blank" rel="noopener noreferrer" style={{ display:'flex', color:'rgba(255,255,255,.5)', textDecoration:'none' }}>
            <Icon.Instagram size={18} color="rgba(255,255,255,.7)"/>
          </a>
        </div>
      </div>
      
      <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:12, lineHeight:1.6, margin:0, color:'rgba(255,255,255,.5)' }}>
        A QU4TRO Serviços de Trânsito · Assessoria especializada em indenizações por acidente. Não somos seguradora nem órgão público.
      </p>
      
      <div style={{ marginTop:24, fontFamily:'DM Sans, sans-serif', fontSize:11, color:'rgba(255,255,255,.3)', borderTop:'1px solid rgba(255,255,255,.05)', paddingTop:16 }}>
        © 2026 A QU4TRO. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <a href={WA_URL} className="btn-shine" style={{ position: 'fixed', right: 16, bottom: 24, zIndex: 30, width: 54, height: 54, borderRadius: 999, background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 24px rgba(37,211,102,.45), 0 2px 6px rgba(0,0,0,.2)', textDecoration: 'none' }}>
      <Icon.Whatsapp size={26}/>
    </a>
  );
}

Object.assign(window, { TopBar, Hero, Problema, Especialidades, ComoFunciona, InstagramBanner, QuemSomos, FAQ, CTAFinal, Footer, FloatingCTA });
