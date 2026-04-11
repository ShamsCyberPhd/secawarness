const html = htm.bind(React.createElement);

const pillars = [
  'Behavior change',
  'Role-based training',
  'Phishing resilience',
  'Security culture',
  'Metrics and reporting'
];

const weeklyCards = [
  {
    title: 'Executive Wire Request',
    text: 'CFO requests urgent transfer via email; verify through secondary channel before action.'
  },
  {
    title: 'Privileged Access Prompt',
    text: 'Admin receives unusual MFA fatigue prompts; pause and escalate potential account takeover.'
  },
  {
    title: 'Vendor Invoice Change',
    text: 'Supplier payment details updated unexpectedly; validate with known contacts and controls.'
  }
];

const metrics = [
  { label: 'Human Risk Exposure', value: 'Low', trend: '↓ improving' },
  { label: 'Decision Accuracy Rate', value: '71%', trend: '↑ improving' },
  { label: 'Behavioral Drift Index', value: '1.7%', trend: '↓ controlled' }
];

const dashboard = [
  { title: 'Training Completion', value: '96%', detail: 'Global completion across all functions' },
  { title: 'Phishing Resilience', value: 'A-', detail: 'Risk exposure trending down across regions' },
  { title: 'Culture Engagement', value: '84', detail: 'Security sentiment index, enterprise-wide' }
];

const timeline = [
  { phase: '30 Days', plan: 'Assess baseline maturity, stakeholder map, and risk-prioritized awareness gaps.' },
  { phase: '60 Days', plan: 'Launch role-based pilots, targeted phishing tracks, and outcome reporting cadence.' },
  { phase: '90 Days', plan: 'Scale high-performing interventions, align to business KPIs, and embed governance.' }
];

function App() {
  return html`
    <div>
      <header className="section border-b border-gray-200 bg-white">
        <div className="container">
          <p className="text-xs uppercase tracking-widest text-gray-500">Fitch Group Candidate Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-4">Associate Director, Security Awareness</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Transformational security awareness program focused on behavioral risk reduction, education, and measurable
            culture change.
          </p>
          <a href="#philosophy" className="inline-block mt-8 text-blue-700 font-medium">Explore Strategy →</a>
        </div>
      </header>

      <section id="philosophy" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Executive Philosophy</h2>
          <div className="card">
            <p className="text-xl text-gray-700 leading-relaxed">
              “Security awareness is not about training people — it's about transforming behavior.”
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50" id="framework">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Security Awareness Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            ${pillars.map((p) => html`<div className="card" key=${p}><p className="font-medium">${p}</p></div>`)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Scenario-Based Learning Modules</h2>
          <div className="grid md:grid-cols-3 gap-4">
            ${weeklyCards.map(
              (c) => html`<div className="card" key=${c.title}><h3 className="font-semibold mb-2">${c.title}</h3><p className="text-gray-600 text-sm">${c.text}</p></div>`
            )}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Security Metrics Overview</h2>
          <div className="grid md:grid-cols-3 gap-4">
            ${metrics.map(
              (m) => html`<div className="card" key=${m.label}><p className="text-sm text-gray-500">${m.label}</p><p className="text-3xl font-semibold mt-2">${m.value}</p><p className="text-blue-700 text-sm mt-1">${m.trend}</p></div>`
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Executive Dashboard</h2>
          <div className="grid md:grid-cols-3 gap-4">
            ${dashboard.map(
              (d) => html`<div className="card" key=${d.title}><h3 className="font-medium">${d.title}</h3><p className="text-3xl font-semibold mt-3">${d.value}</p><p className="text-gray-500 text-sm mt-2">${d.detail}</p></div>`
            )}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50" id="plan">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">30-60-90 Day Plan</h2>
          <div className="space-y-4">
            ${timeline.map(
              (t) => html`<div className="card" key=${t.phase}><p className="font-semibold text-blue-700">${t.phase}</p><p className="text-gray-600 mt-2">${t.plan}</p></div>`
            )}
          </div>
        </div>
      </section>
    </div>
  `;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}
ReactDOM.createRoot(rootElement).render(html`<${App} />`);
