const pillars = [
  'Behavior change',
  'Role-based training',
  'Phishing resilience',
  'Security culture',
  'Metrics and reporting'
];

const scenario = {
  title: 'Executive Wire Request',
  context: 'CFO requests urgent funds transfer via email.',
  choices: ['Approve immediately', 'Verify via secondary channel', 'Escalate to security'],
  correct: 1
};

const weeklyCards = [
  {
    title: 'Weekly scenarios',
    text: 'Real-world business context simulations designed for decisions under pressure.'
  },
  {
    title: 'Decision-based learning',
    text: 'Learners navigate branching choices to understand risk tradeoffs and consequences.'
  },
  {
    title: 'Behavioral outcomes',
    text: 'Each challenge maps to measurable shifts in reporting, escalation, and secure habits.'
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
  {
    phase: '30 Days',
    plan: 'Assess baseline maturity, stakeholder map, and risk-prioritized awareness gaps.'
  },
  {
    phase: '60 Days',
    plan: 'Launch role-based pilots, targeted phishing tracks, and outcome reporting cadence.'
  },
  {
    phase: '90 Days',
    plan: 'Scale high-performing interventions, align to business KPIs, and embed governance.'
  }
];

function Section({ id, title, subtitle, bg = '', children }) {
  return (
    <section id={id} className={`section ${bg}`}>
      <div className="container">
        <p className="text-xs uppercase tracking-widest muted mb-2">{subtitle}</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <header className="section border-b border-gray-200 bg-white">
        <div className="container">
          <p className="text-xs uppercase tracking-widest text-gray-500">Fitch Group Candidate Portfolio</p>

          <h1 className="text-4xl md:text-5xl font-semibold mt-4 text-gray-900">
            Associate Director, Security Awareness
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Transformational security awareness program focused on behavioral risk reduction, education, and measurable
            culture change.
          </p>

          <a href="#philosophy" className="inline-block mt-8 text-blue-700 font-medium">
            Explore Strategy →
          </a>
        </div>
      </header>

      <main>
        <Section id="philosophy" subtitle="Executive Philosophy" title="Security Leadership Vision">
          <div className="card">
            <p className="text-xl text-gray-700 leading-relaxed">
              “Security awareness is not about training people — it's about transforming behavior.”
            </p>
          </div>
        </Section>

        <Section id="threat" subtitle="Security Reality" title="Human Behavior is the Primary Attack Surface">
          <div className="card">
            <p className="text-xl text-gray-700 leading-relaxed">
              “Adversaries don’t break systems — they influence people into breaking them.”
            </p>
          </div>
        </Section>

        <Section id="framework" subtitle="Program Design" title="Transformational Security Framework">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((item) => (
              <div key={item} className="card">
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="game-theory"
          subtitle="Behavioral Model"
          title="Security awareness is not knowledge recall — it is decision-making under uncertainty."
        >
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {weeklyCards.map((c) => (
              <div className="card" key={c.title}>
                <h3 className="font-semibold mb-2 text-gray-900">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="card">
            <p className="text-sm muted mb-2">Featured Scenario</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{scenario.title}</h3>
            <p className="text-gray-600 mb-4">{scenario.context}</p>
            <div className="grid md:grid-cols-3 gap-3">
              {scenario.choices.map((choice, idx) => (
                <div
                  key={choice}
                  className={`rounded-lg border p-3 text-sm ${
                    idx === scenario.correct ? 'border-blue-700 bg-blue-50 text-blue-800' : 'border-gray-200 text-gray-700'
                  }`}
                >
                  {choice}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="phishing" subtitle="Measurement System" title="Security Metrics Overview" bg="bg-gray-50">
          <div className="grid md:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div className="card" key={m.label}>
                <p className="text-sm text-gray-500">{m.label}</p>
                <p className="text-3xl font-semibold mt-2 text-gray-900">{m.value}</p>
                <p className="text-blue-700 text-sm mt-1">{m.trend}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="dashboard" subtitle="Metrics Dashboard" title="Executive Performance Snapshot" bg="bg-gray-50">
          <div className="grid md:grid-cols-3 gap-4">
            {dashboard.map((card) => (
              <div key={card.title} className="card">
                <h3 className="font-semibold mb-2 text-gray-900">{card.title}</h3>
                <p className="text-3xl font-semibold text-gray-900">{card.value}</p>
                <p className="text-gray-600 text-sm mt-2">{card.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="plan" subtitle="Execution Model" title="30-60-90 Day Plan" bg="bg-gray-50">
          <div className="space-y-4">
            {timeline.map((t) => (
              <div className="card" key={t.phase}>
                <p className="font-semibold text-blue-700">{t.phase}</p>
                <p className="text-gray-600 mt-2">{t.plan}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="culture" subtitle="Culture Transformation" title="From Awareness to Behavioral Identity">
          <div className="card">
            <p className="text-xl text-gray-700 leading-relaxed">
              “The goal is not compliance — it is instinctive secure behavior at scale.”
            </p>
          </div>
        </Section>

        <section className="section border-t border-gray-200 bg-white">
          <div className="container text-center">
            <p className="text-xs uppercase tracking-widest muted mb-4">Call to Action</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Day One Security Awareness Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Ready to establish a measurable, behavior-focused security awareness program aligned to global financial
              priorities.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
