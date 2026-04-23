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
          Cuidamos de tudo, do início ao fim. Sem burocracia, sem custo adiantado — só você recebendo o que é seu por direito.
        </p>
        <a href={WA_URL} className="btn-shine" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginTop:22, padding:'16px 20px', background:'#25D366', color:'#fff', borderRadius:14, textDecoration:'none', fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize:16, boxShadow:'0 10px 24px rgba(37,211,102,.35)' }}>
          <Icon.Whatsapp size={22}/> Falar com um especialista
        </a>
        <div style={{ marginTop:10, display:'flex', alignItems:'center', justifyContent:'center', gap:6, fontFamily:'DM Sans, sans-serif', fontSize:11, color:'rgba(255,255,255,.75)' }}>
          <span className="pulse-dot" style={{ width:6, height:6, borderRadius:999, background:'#4ADE80' }}/> Atendimento agora · Resposta em minutos
        </div>
        <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', background:'rgba(255,255,255,.08)', borderRadius:14, border:'1px solid rgba(255,255,255,.14)', overflow:'hidden' }}>
          {[['14','anos de\nexperiência'],['+5mil','vítimas\nindenizadas'],['100%','atendimento\non-line']].map(([b,s],i)=>(
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

function Problema({ primary }) {
  const items = [
    'Não sei se tenho direito a alguma indenização.',
    'Ouvi dizer que a burocracia é grande demais.',
    'Tenho medo de ser enganado ou pagar algo adiantado.',
    'Perdi documentos ou não fiz boletim de ocorrência.',
  ];
  return (
    <section style={{ padding: '38px 22px 30px', background: '#f5f5f5' }}>
      <SectionLabel label="O que você está sentindo" primary={primary}/>
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 28, lineHeight: 1.1, margin: '14px 0 6px', color: '#0F2E63', letterSpacing: '-0.01em' }}>
        Dúvidas comuns após<br/><span style={{ color: primary }}>um acidente.</span>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
        {items.map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px', borderRadius: 16, background: 'rgba(247, 249, 252, 0.4)', border: '1px solid rgba(229, 231, 235, 0.6)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
            <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 9, background: '#fff', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, color: primary }}>{i + 1}</div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, lineHeight: 1.5, color: '#1F2937', margin: 0, fontWeight: 500 }}>"{t}"</p>
          </div>
        ))}
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
    { icon: Icon.Rideshare, t:'Indenização via App', d:'Motoristas e passageiros de Uber, 99 e iFood têm direito a coberturas específicas.', tag:'NOVO', brandStrip: true },
    { icon: Icon.ThirdParty, t:'Processos contra Terceiros', d:'Danos materiais, morais e estéticos causados por outros condutores.' },
    { icon: Icon.Passenger,  t:'Seguro de Passageiro (APP)', d:'Acionamento de apólices privadas para invalidez ou despesas médicas.' },
    { icon: Icon.Legacy,     t:'Casos DPVAT (Legado)', d:'Atendimentos para acidentes ocorridos antes da mudança na legislação de 2025.' },
  ];
  return (
    <section style={{ padding:'38px 22px 30px', background:'#f5f5f5' }}>
      <SectionLabel label="Especialidades" primary={primary}/>
      <h2 style={{ fontFamily:'Poppins, sans-serif', fontWeight:500, fontSize:28, lineHeight:1.1, margin:'14px 0 24px', color:'#0F2E63', letterSpacing:'-0.01em' }}>
        Onde nossa equipe<br/><span style={{ color:primary }}>pode te ajudar.</span>
      </h2>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        {services.map((s,i)=>{ const I = s.icon; return (
          <div key={i} style={{ position:'relative', padding:'20px 16px', borderRadius:18, background:'rgba(247,249,252,.8)', border:'1px solid #E5E7EB', minHeight: s.brandStrip ? undefined : 160, display:'flex', flexDirection:'column', boxShadow:'0 4px 20px rgba(0,0,0,.03)' }}>
            {s.tag && <span style={{ position:'absolute', top:12, right:12, fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize:8, letterSpacing:'.12em', padding:'3px 7px', borderRadius:6, background:accent, color:'#0F2E63' }}>{s.tag}</span>}
            <div style={{ width:44, height:44, borderRadius:12, background:'#fff', border:'1px solid #E5E7EB', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:12, boxShadow:'0 2px 8px rgba(0,0,0,.05)' }}><I color={primary}/></div>
            <h3 style={{ fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize:13, color:'#0F2E63', margin:0 }}>{s.t}</h3>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:11, lineHeight:1.45, color:'#6B7280', margin:'6px 0 0' }}>{s.d}</p>
            {s.brandStrip && <PartnerBrandStrip/>}
          </div>
        );})}
      </div>
    </section>
  );
}

function ComoFunciona({ primary, accent }) {
  const steps = [
    { n:'01', t:'Você conta o que aconteceu', d:'Pelo WhatsApp, em minutos. Tudo online, sem sair de casa.', icon: Icon.Whatsapp },
    { n:'02', t:'Analisamos seu caso', d:'Um especialista avalia gratuitamente se você tem direito.', icon: Icon.CaseReview },
    { n:'03', t:'Cuidamos de toda burocracia', d:'Documentos, laudos, protocolos — fazemos tudo por você.', icon: Icon.PaperworkStack },
    { n:'04', t:'Você recebe sua indenização', d:'Acompanhamento do início ao fim, com transparência total.', icon: Icon.PayoutReceived },
  ];
  return (
    <section style={{ padding:'40px 22px 36px', background:'#F7F9FC' }}>
      <div style={{ textAlign:'center', marginBottom:30 }}>
        <SectionLabel label="Como funciona" primary={primary}/>
        <h2 style={{ fontFamily:'Poppins, sans-serif', fontWeight:500, fontSize:32, lineHeight:1.05, margin:'14px 0 0', color:'#0F2E63', letterSpacing:'-0.01em' }}>
          Sua jornada para<br/><span style={{ color:primary }}>a indenização.</span>
        </h2>
      </div>
      <div style={{ position:'relative' }}>
        <div style={{ position:'absolute', left:24, top:20, bottom:20, width:3, background:`linear-gradient(to bottom, ${primary}10, ${primary}, ${accent}, ${primary}10)`, borderRadius:4 }}/>
        {steps.map((s,i)=>{ const I = s.icon; return (
          <div key={i} style={{ display:'flex', gap:24, marginBottom: i===steps.length-1?0:24, position:'relative' }}>
            <div style={{ flexShrink:0, width:50, height:50, borderRadius:16, background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 8px 20px rgba(15,46,99,.08)', border:'1px solid #E5E7EB', zIndex:2, position:'relative' }}>
              <div style={{ position:'absolute', left:-5, top:-5, width:20, height:20, borderRadius:999, background:primary, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:800, fontFamily:'Poppins', border:'2px solid #F7F9FC' }}>{s.n}</div>
              <I color={primary} size={24}/>
            </div>
            <div style={{ flex:1, background:'rgba(255,255,255,0.4)', padding:'16px 20px', borderRadius:20, border:'1px solid rgba(255,255,255,0.6)', backdropFilter:'blur(10px)' }}>
              <h3 style={{ fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize:16, color:'#0F2E63', margin:0 }}>{s.t}</h3>
              <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:13, lineHeight:1.55, color:'#6B7280', margin:'8px 0 0' }}>{s.d}</p>
            </div>
          </div>
        );})}
      </div>
    </section>
  );
}

function ProvaSocial({ primary, accent }) {
  const [active, setActive] = React.useState(0);
  const depos = [
    { name: 'Juliana M.', role: 'Passageira de Uber · Recife, PE', text: 'Fui atropelada em uma viagem de app e nem sabia que tinha direito a seguro. A equipe cuidou de tudo e recebi minha indenização em poucos meses.', stars: 5 },
    { name: 'Carlos R.', role: 'Motorista · Olinda, PE', text: 'Tinha medo de burocracia por causa das mudanças na lei. Fui recebido com clareza, me explicaram o que ainda era possível e o que mudou.', stars: 5 },
    { name: 'Dona Helena', role: 'Familiar de vítima · São Paulo, SP', text: 'Perdi meu irmão em um acidente antigo e não sabia como receber. A A QU4TRO me acolheu e garantiu o direito da nossa família.', stars: 5 },
  ];
  return (
    <section style={{ padding: '38px 0 30px', background: '#F7F9FC' }}>
      <div style={{ padding: '0 22px' }}>
        <SectionLabel label="Quem confiou" primary={primary}/>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 28, lineHeight: 1.1, margin: '14px 0 6px', color: '#0F2E63', letterSpacing: '-0.01em' }}>
          Histórias reais de<br/><span style={{ color: primary }}>quem confiou.</span>
        </h2>
      </div>
      <div style={{ padding: '0 22px', marginTop: 24 }}>
        <div style={{ padding: '24px 22px 20px', background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(20px) saturate(180%)', borderRadius: 24, border: '1px solid rgba(255, 255, 255, 0.8)', position: 'relative', boxShadow: '0 10px 30px rgba(15,46,99,.08)' }}>
          <div style={{ position: 'absolute', top: 16, right: 18 }}><Icon.Quote color={primary}/></div>
          <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>{Array.from({ length: 5 }).map((_, i) => <Icon.Star key={i}/>)}</div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13.5, lineHeight: 1.6, color: '#1F2937', margin: 0, fontWeight: 500 }}>{depos[active].text}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,.05)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 14, background: `linear-gradient(135deg, ${primary}, #0F2E63)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14 }}>{depos[active].name[0]}</div>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: '#0F2E63' }}>{depos[active].name}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#6B7280', fontWeight: 500 }}>{depos[active].role}</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14 }}>
          {depos.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: active === i ? 22 : 8, height: 8, borderRadius: 999, background: active === i ? primary : '#CBD5E1', border: 'none', padding: 0, cursor: 'pointer', transition: 'all .25s' }}/>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramBanner({ primary = '#0F2E63' }) {
  return (
    <section style={{ padding: '0 22px 38px', textAlign: 'center', background: '#F7F9FC' }}>
      <a href="https://www.instagram.com/a4servicosdetransito" className="btn-shine" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 20px', borderRadius: 999, background: '#fff', border: '1px solid rgba(229, 231, 235, 0.8)', textDecoration: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon.Instagram size={20} color={primary}/>
          <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: 999, background: '#4ADE80' }}/>
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: 12, color: '#0F2E63', lineHeight: 1 }}>@a4servicosdetransito</div>
          <div style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 10, color: '#6B7280', marginTop: 2 }}>Casos reais atualizados hoje</div>
        </div>
        <Icon.ExternalLink size={14} color="#9CA3AF"/>
      </a>
    </section>
  );
}

function QuemSomos({ primary, accent }) {
  const values = ['Sem custo adiantado para você','Atendimento 100% online','Transparência em cada etapa','Acompanhamento até o pagamento'];
  return (
    <section style={{ padding:0, background:primary, color:'#fff', position:'relative', overflow:'hidden' }}>
      <div style={{ width:'100%', height:240, position:'relative' }}>
        <img src="assets/about-us.png" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        <div style={{ position:'absolute', inset:0, background:`linear-gradient(0deg, ${primary} 0%, transparent 100%)` }}/>
      </div>
      <div style={{ padding:'0 22px 36px', position:'relative', marginTop:-40 }}>
        <SectionLabel label="Quem somos" primary={accent}/>
        <h2 style={{ fontFamily:'Poppins, sans-serif', fontWeight:500, fontSize:30, lineHeight:1.1, margin:'14px 0 0', letterSpacing:'-0.01em' }}>
          14 anos lutando pelo<br/><span style={{ color:accent }}>seu direito.</span>
        </h2>
        <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:13.5, lineHeight:1.55, color:'rgba(255,255,255,.85)', margin:'14px 0 0' }}>
          Nascemos em Recife com uma missão: transformar a dor de um acidente em reparação justa. Somos uma equipe especializada em indenizações, não uma seguradora nem um órgão público.
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
  const [open, setOpen] = React.useState(0);
  const faqs = [
    { q:'Preciso pagar algo adiantado?', a:'Não. Nosso trabalho é remunerado só quando você recebe. Sem taxa de cadastro, sem mensalidade, sem pegadinha.' },
    { q:'Quanto tempo demora?', a:'Depende do tipo de caso. Indenizações via seguro de aplicativo costumam sair em poucos meses.' },
    { q:'Posso receber mesmo se a culpa foi minha?', a:'Em muitos casos, sim — especialmente em acidentes envolvendo aplicativos, onde passageiros e motoristas têm coberturas específicas.' },
    { q:'Atendem fora de Recife?', a:'Atendemos em todo o Brasil, 100% online. Já representamos clientes em todos os estados.' },
  ];
  return (
    <section style={{ padding:'38px 22px 30px', background:'#f5f5f5' }}>
      <SectionLabel label="Dúvidas frequentes" primary={primary}/>
      <h2 style={{ fontFamily:'Poppins, sans-serif', fontWeight:500, fontSize:28, lineHeight:1.1, margin:'14px 0 22px', color:'#0F2E63', letterSpacing:'-0.01em' }}>
        Perguntas que ouvimos<br/><span style={{ color:primary }}>todos os dias.</span>
      </h2>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {faqs.map((f,i)=>(
          <div key={i} style={{ borderRadius:16, border:'1px solid rgba(229,231,235,.6)', background: open===i?'rgba(247,249,252,.6)':'rgba(255,255,255,.4)', boxShadow: open===i?'0 8px 25px rgba(0,0,0,.05)':'none', overflow:'hidden', transition:'all .3s' }}>
            <button onClick={()=>setOpen(open===i?-1:i)} style={{ width:'100%', padding:'18px', display:'flex', alignItems:'center', gap:12, justifyContent:'space-between', background:'transparent', border:'none', cursor:'pointer', textAlign:'left' }}>
              <span style={{ fontFamily:'Poppins, sans-serif', fontWeight:600, fontSize:13, color: open===i?primary:'#0F2E63', lineHeight:1.4 }}>{f.q}</span>
              <Icon.Chevron open={open===i} color={open===i?primary:'#6B7280'}/>
            </button>
            {open===i && (
              <div style={{ padding:'0 18px 18px' }}>
                <div style={{ height:1, background:'rgba(0,0,0,.05)', marginBottom:14 }}/>
                <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:12.5, lineHeight:1.6, color:'#6B7280', margin:0, fontWeight:500 }}>{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTAFinal({ primary = '#0F2E63', accent }) {
  return (
    <section style={{ padding:'50px 22px 40px', background:primary, color:'#fff', position:'relative', overflow:'hidden', textAlign:'center' }}>
      <div style={{ marginBottom:20 }}><Logo size={22} stacked={false} color="#fff" accent={accent}/></div>
      <h2 style={{ fontFamily:'DM Sans, sans-serif', fontWeight:500, fontSize:32, lineHeight:1.1, margin:'0 auto 16px', letterSpacing:'-0.02em', maxWidth:280 }}>
        Seu direito,<br/><span style={{ color:accent }}>nossa prioridade.</span>
      </h2>
      <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:15, lineHeight:1.6, color:'rgba(255,255,255,.7)', margin:'0 auto 28px', maxWidth:300 }}>
        Conte sua história agora. Em poucos minutos você sabe se tem direito.
      </p>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
        <a href={WA_URL} className="btn-shine" style={{ width:'100%', maxWidth:280, display:'flex', alignItems:'center', justifyContent:'center', gap:10, padding:'18px 24px', background:'#25D366', color:'#fff', borderRadius:16, textDecoration:'none', fontFamily:'DM Sans, sans-serif', fontWeight:700, fontSize:16, boxShadow:'0 12px 24px rgba(37,211,102,0.25)' }}>
          <Icon.Whatsapp size={22}/> Falar com especialista
        </a>
        <a href="tel:+5581997140111" style={{ display:'inline-flex', alignItems:'center', gap:8, color:'rgba(255,255,255,.6)', textDecoration:'none', fontFamily:'DM Sans, sans-serif', fontWeight:500, fontSize:14 }}>
          <Icon.Phone size={16} color="rgba(255,255,255,0.4)"/> Ou ligue: (81) 99714-0111
        </a>
      </div>
    </section>
  );
}

function Footer({ accent }) {
  return (
    <footer style={{ padding:'24px 22px 28px', background:'#0A1F45', color:'rgba(255,255,255,.7)' }}>
      <Logo size={18} color="#fff" accent={accent}/>
      <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:11.5, lineHeight:1.5, margin:'14px 0 0', color:'rgba(255,255,255,.6)' }}>
        A QU4TRO Serviços de Trânsito · Assessoria especializada em indenizações por acidente. Não somos seguradora nem órgão público.
      </p>
      <div style={{ marginTop:14, fontFamily:'DM Sans, sans-serif', fontSize:10, color:'rgba(255,255,255,.4)' }}>© 2026 A QU4TRO.</div>
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

Object.assign(window, { TopBar, Hero, Problema, Especialidades, ComoFunciona, ProvaSocial, InstagramBanner, QuemSomos, FAQ, CTAFinal, Footer, FloatingCTA });
