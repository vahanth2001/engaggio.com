const app = document.getElementById("app");

const pages = {
  home: `
<body>
<!-- HERO -->
<section class="hero-home">
  <div class="hero-home-content">
    <h1>Understanding Humans. Improving Performance.</h1>
    <p>
      Engaggio is a People Intelligence and AI technology company helping organisations
      and learning ecosystems understand engagement, wellbeing, and behaviour.
    </p>
    <div class="hero-home-actions">
      <button class="btn-primary">Request a Demo</button>
    </div>
  </div>
</section>

<!-- PLATFORMS -->
<section class="platforms-section">
  <div class="container-section">

    <div class="section-title">
      <h2>Our Platforms</h2>
      <p>Engaggio builds purpose-driven intelligence platforms that translate human behaviour into clear, actionable insight. Our solutions are designed to uncover patterns that traditional systems miss—helping organisations and learning ecosystems move from intuition to evidence-based decisions.</p>
      <p>Each platform is built on IP-protected methodologies, combining behavioural science, advanced analytics, and AI-assisted interpretation to deliver intelligence that is ethical, explainable, and trusted.
      </p>
    </div>

    <div class="platforms-grid">

      <!-- AIDORA -->
      <div class="platform-card">
        <h3><img src="assets/Aidora.png" alt="AIDORA"></h3>
        <p>
          Student engagement and wellbeing intelligence beyond academics —
          enabling early intervention and responsible decision-making.
        </p>
        <a href="#" class="platform-link">Explore AIDORA →</a>
      </div>

      <!-- DECODE -->
      <div class="platform-card">
        <h3><img src="assets/Decode.png" alt="DECODE"></h3>
        <p>
          Employee engagement and sentiment intelligence that helps leaders
          understand culture, motivation, and performance drivers.
        </p>
        <a href="#" class="platform-link">Explore DECODE →</a>
      </div>

    </div>
  </div>
</section>

<!-- WHAT YOU CAN ACHIEVE -->

<section class="slider-section">
  <div class="container">
    <div class="slider">
      <div class="slider-header">
        <div>
          <div class="eyebrow">WHAT YOU CAN ACHIEVE</div>
          <h2 class="section-title">
            Turning human insight into measurable outcomes.
          </h2>
          <p class="section-sub">
            Engaggio helps organisations understand behaviour, engagement,
            and wellbeing to improve learning, work, and performance outcomes.
          </p>
        </div>

        <div class="slider-controls">
          <button class="slider-btn" id="sliderPrev" aria-label="Previous slide">←</button>
          <div class="dots">
            <div class="dot active" data-slide="0"></div>
            <div class="dot" data-slide="1"></div>
            <div class="dot" data-slide="2"></div>
          </div>
          <button class="slider-btn" id="sliderNext" aria-label="Next slide">→</button>
        </div>
      </div>

      <div class="slider-items" id="sliderItems">

        <!-- SLIDE 1 -->
        <div class="slider-card" data-slide-index="0">
          <strong>Improve Engagement & Wellbeing</strong>
          Gain a deeper understanding of how people feel, engage, and behave
          across learning and work environments.
        </div>

        <div class="slider-card" data-slide-index="0">
          <strong>Enable Early Intervention</strong>
          Identify early signals of disengagement, burnout, or risk and take
          informed, timely action.
        </div>

        <div class="slider-card" data-slide-index="0">
          <strong>Support Better Outcomes</strong>
          Use behavioural and engagement insights to improve performance,
          retention, and success.
        </div>

        <!-- SLIDE 2 -->
        <div class="slider-card" data-slide-index="1" style="display:none;">
          <strong>Strengthen Leadership Decisions</strong>
          Provide leaders with clear, human-centric intelligence to guide
          strategy and decision-making.
        </div>

        <div class="slider-card" data-slide-index="1" style="display:none;">
          <strong>Align People & Performance</strong>
          Connect engagement, behaviour, and outcomes to understand what
          truly drives performance.
        </div>

        <div class="slider-card" data-slide-index="1" style="display:none;">
          <strong>Build Trust & Transparency</strong>
          Ensure insights are collected and used responsibly with consent-led,
          privacy-first design.
        </div>

        <!-- SLIDE 3 -->
        <div class="slider-card" data-slide-index="2" style="display:none;">
          <strong>Scale Responsibly</strong>
          Deploy people intelligence across institutions and enterprises
          without compromising ethics or trust.
        </div>

        <div class="slider-card" data-slide-index="2" style="display:none;">
          <strong>Unify Insight Across Contexts</strong>
          Understand humans consistently across education, work, and leadership
          environments.
        </div>

        <div class="slider-card" data-slide-index="2" style="display:none;">
          <strong>Future-Proof Your Organisation</strong>
          Prepare for a data-driven, human-centred future of learning and work.
        </div>

      </div>
    </div>
  </div>
</section>

<!-- TRUST -->
<section class="trust">
  <div class="container">
    <h2>Built on Trust. Designed for Responsibility.</h2>
    <p>Privacy-first. Consent-led. Ethical AI by design.</p>
    <br/>
    <button class="btn-primary">Request a Demo</button>
  </div>
</section>
<!-- CLIENTS & PARTNERS -->
<section class="clients-slider-section">
  <div class="container">

    <div class="clients-header">
      <h3>Clients & Partners</h3>
    </div>

    <div class="clients-slider">

      <button class="clients-nav prev" id="clientsPrev">←</button>

      <div class="clients-viewport">
        <div class="clients-track" id="clientsTrack">

          <!-- LOGO CARD -->
          <div class="client-card">
            <img src="assets/client1.png" alt="Client 1">
          </div>

          <div class="client-card">
            <img src="assets/client2.png" alt="Client 2">
          </div>

          <div class="client-card">
            <img src="assets/client3.png" alt="Client 3">
          </div>

          <div class="client-card">
            <img src="assets/client4.png" alt="Client 4">
          </div>

        </div>
      </div>

      <button class="clients-nav next" id="clientsNext">→</button>

    </div>

  </div>
</section>

</body>
  `,

  education: `
<body>
<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div>
      <div class="breadcrumb">Solutions / For Education</div>
      <h1>Transforming Education through Student Engagement Intelligence</h1>
      <p>
        Empower institutions to understand learner wellbeing, motivation,
        and engagement—ethically, responsibly, and beyond academics.
      </p>
      <button class="btn-primary">Request a Demo</button>
    </div>
  </div>
</section>

<!-- SOLUTIONS -->
<section>
  <div class="container">
    <div class="section-title">
      <h2>Our Education Solutions</h2>
      <p>Purpose-built to improve student wellbeing, engagement, and success.</p>
    </div>

    <div class="grid-3">
      <div class="card">
        <i class="fa fa-heart"></i>
        <h3>Emotional Wellbeing Insights</h3>
        <p>Identify early signals around stress, comfort, and balance.</p>
      </div>

      <div class="card">
        <i class="fa fa-users"></i>
        <h3>Social Belonging</h3>
        <p>Understand inclusion, peer harmony, and learner safety.</p>
      </div>

      <div class="card">
        <i class="fa fa-chart-line"></i>
        <h3>Engagement Trends</h3>
        <p>Track motivation, confidence, and behavioural patterns over time.</p>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIAL -->
<section>
  <div class="testimonial">
    <p>
      “CADMUS has transformed how we support our students.
      We now intervene earlier and more responsibly.”
    </p>
    <span>— Dean of Student Services, University Partner</span>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2>Drive Better Learning Outcomes with CADMUS</h2>
    <br/>
    <button class="btn-primary">Request a Demo</button>
  </div>
</section>

</body>
</html>
  `,

  leadership: `
<section class="page-hero leadership-hero">
  <div class="container">
    <div class="breadcrumb">Solutions / Leadership & HR</div>
    <h1>Empowering Leaders with Ethical Workforce Intelligence</h1>
    <p>
      Give leaders the clarity they need to support people, culture,
      and performance—responsibly.
    </p>
    <button class="btn-primary">Request a Demo</button>
  </div>
</section>

<section class="page-features">
  <div class="container grid-3">
    <div class="card">
      <h3>Human-Centred Insights</h3>
      <p>Move beyond metrics to understand real workforce experiences.</p>
    </div>
    <div class="card">
      <h3>Early Risk Signals</h3>
      <p>Identify burnout, disengagement, and risk before issues escalate.</p>
    </div>
    <div class="card">
      <h3>Responsible Decisions</h3>
      <p>Support decisions with privacy-first, consent-led intelligence.</p>
    </div>
  </div>
</section>
  `,

  insights: `
<body>

<!-- ================= HERO ================= -->
<section class="page-hero insights-hero">
  <div class="container">
    <div class="breadcrumb">Insights</div>

    <h1>Insights on People, Performance & Ethical AI</h1>

    <p>
      Research, thinking, and real-world perspectives on engagement,
      wellbeing, and responsible people intelligence.
    </p>
  </div>
</section>

<!-- ================= INSIGHTS OVERVIEW ================= -->
<section class="page-features">
  <div class="container grid-3">

    <div class="card">
      <h3>Research</h3>
      <p>
        Evidence-based frameworks grounded in behavioural science,
        organisational psychology, and longitudinal data.
      </p>
    </div>

    <div class="card">
      <h3>Perspectives</h3>
      <p>
        Thought leadership on ethical AI, engagement intelligence,
        and responsible data use.
      </p>
    </div>

    <div class="card">
      <h3>Case Studies</h3>
      <p>
        Practical applications across education and enterprise,
        with measurable outcomes.
      </p>
    </div>

  </div>
</section>

<!-- ================= BLOG ================= -->
<section class="insights-section">
  <div class="container">

    <div class="section-title">
      <h2>Blog</h2>
      <p>
        Latest thinking from Engaggio on engagement, wellbeing,
        and ethical people intelligence.
      </p>
    </div>

    <div class="grid-3">

      <article class="card insight-card">
        <h3>Why Engagement Data Needs Context</h3>
        <p>
          Behavioural data without interpretation can mislead.
          True insight comes from understanding patterns — not scores.
        </p>
        <a href="#" class="text-link">Read Article →</a>
      </article>

      <article class="card insight-card">
        <h3>The Future of Ethical AI at Work</h3>
        <p>
          How organisations can leverage AI for insight
          without eroding trust, consent, or autonomy.
        </p>
        <a href="#" class="text-link">Read Article →</a>
      </article>

      <article class="card insight-card">
        <h3>Wellbeing Beyond Surveys</h3>
        <p>
          Moving from retrospective feedback
          to continuous, intelligence-led understanding.
        </p>
        <a href="#" class="text-link">Read Article →</a>
      </article>

    </div>
  </div>
</section>

<!-- ================= CASE STUDIES ================= -->
<section class="insights-section alt">
  <div class="container">

    <div class="section-title">
      <h2>Case Studies</h2>
      <p>
        How organisations apply Engaggio’s platforms
        in complex, real-world environments.
      </p>
    </div>

    <div class="grid-3">

      <article class="card insight-card">
        <h3>Strengthening Workforce Stability in Construction</h3>
        <p>
          How DECODE enabled a large, multi-site construction enterprise
          to identify engagement and stress patterns early —
          without disrupting operations.
        </p>
        <a href="#" class="text-link">View Case Study →</a>
      </article>

      <article class="card insight-card">
        <h3>Transforming Engagement in a Technology Organisation</h3>
        <p>
          Moving from annual surveys to continuous engagement intelligence,
          improving manager confidence and team stability.
        </p>
        <a href="#" class="text-link">View Case Study →</a>
      </article>

      <article class="card insight-card">
        <h3>Responsible AI in People Intelligence</h3>
        <p>
          Embedding privacy, consent, and explainability
          into AI-assisted engagement insights.
        </p>
        <a href="#" class="text-link">View Case Study →</a>
      </article>

    </div>
  </div>
</section>

<!-- ================= RESEARCH & RESOURCES ================= -->
<section class="insights-section">
  <div class="container">

    <div class="section-title">
      <h2>Research & Resources</h2>
      <p>
        Whitepapers, reports, and frameworks grounded in
        behavioural science and ethical design.
      </p>
    </div>

    <div class="grid-3">

      <article class="card insight-card">
        <h3>Engagement & Wellbeing Framework</h3>
        <p>
          A research-backed model for understanding engagement,
          stability, and motivation over time.
        </p>
        <a href="#" class="text-link">Download PDF →</a>
      </article>

      <article class="card insight-card">
        <h3>Ethical AI Principles for People Intelligence</h3>
        <p>
          Design principles for transparency, consent,
          and responsible AI-assisted interpretation.
        </p>
        <a href="#" class="text-link">Download PDF →</a>
      </article>

      <article class="card insight-card">
        <h3>Future of Work & Engagement Report</h3>
        <p>
          Trends shaping leadership, engagement,
          and organisational resilience.
        </p>
        <a href="#" class="text-link">Download PDF →</a>
      </article>

    </div>
  </div>
</section>

</body>
`,

  contact: `
<section class="page-hero contact-hero">
  <div class="container">
    <div class="breadcrumb">Request a Demo</div>
    <h1>Let’s Talk</h1>
    <p>Tell us about your organisation. We respect your privacy.</p>
  </div>
</section>

<<section class="contact-section">
  <div class="container">

    <div class="contact-illustration">
      <img src="./assets/connect.png" alt="Let’s connect illustration" />
    </div>

    <form class="contact-form">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Work Email" required />
      <textarea placeholder="How can we help?" rows="4"></textarea>
      <button class="btn-primary">Submit Request</button>
    </form>

  </div>
</section>
  `,

  cadmus:`
<body>

<!-- ================= AIDORA HERO ================= -->
<section class="product-hero-cadmus">
  <div class="container product-hero-grid-cadmus">
    <div class="product-hero-content">

      <span class="eyebrow">AIDORA PLATFORM</span>

      <h1>
        Measuring what matters —<br />
        beyond academics.
      </h1>

      <p class="product-sub">
        AIDORA is the world’s first holistic engagement intelligence platform
        designed to understand students beyond academics —
        emotionally, socially, and behaviourally.
      </p>

      <div class="product-actions">
        <button class="btn-primary">Request a Demo</button>
        <button class="btn-outline-cadmus">Talk to Us</button>
      </div>

    </div>
  </div>
</section>

<!-- ================= WHY AIDORA ================= -->
<section class="product-section">
  <div class="container narrow">

    <h2 class="section-title">Why AIDORA</h2>

    <p>
      Learning outcomes are shaped long before grades appear.
      Emotional wellbeing, social belonging, motivation, and confidence
      determine how students engage, grow, and perform.
    </p>

    <p>
      AIDORA makes these invisible factors visible —
      ethically, responsibly, and without academic judgement.
    </p>

    <p class="section-lead">
      There are tools for academics, tools for attendance, and tools for counselling.
      What hasn’t existed until now is a unified intelligence layer that understands
      the learner as a human being.
    </p>

    <p>
      That’s what AIDORA does.
    </p>

  </div>
</section>

<!-- ================= WHAT AIDORA HELPS YOU UNDERSTAND ================= -->
<section class="product-section bg-soft">
  <div class="container-aidora">

    <h2 class="section-title">What AIDORA Helps You Understand</h2>

    <div class="feature-grid">

      <div class="feature-card">
        <h3>Emotional Wellbeing Insights</h3>
        <p>Early signals around emotional comfort, balance, and stress patterns.</p>
      </div>

      <div class="feature-card">
        <h3>Social Connectedness & Belonging</h3>
        <p>Understand inclusion, peer harmony, and social safety.</p>
      </div>

      <div class="feature-card">
        <h3>Motivation & Engagement Signals</h3>
        <p>Track interest, curiosity, and participation trends over time.</p>
      </div>

      <div class="feature-card">
        <h3>Confidence & Resilience Indicators</h3>
        <p>See how students express themselves and cope with challenges.</p>
      </div>

      <div class="feature-card">
        <h3>Behavioural Stability Patterns</h3>
        <p>Identify consistency, volatility, and emerging support needs.</p>
      </div>

      <div class="feature-card">
        <h3>AI-Guided Support Recommendations</h3>
        <p>Clear, age-appropriate guidance for families and institutions.</p>
      </div>

    </div>
  </div>
</section>

<!-- ================= HOW IT WORKS ================= -->
<section class="product-section">
  <div class="container narrow">

    <h2 class="section-title">How AIDORA Works</h2>

    <ul class="process-list">
      <li><strong>Secure individual login</strong> for every student</li>
      <li><strong>Short, age-appropriate online check-ins</strong></li>
      <li><strong>Pattern-based intelligence analysis</strong> over time</li>
      <li><strong>Clear insights</strong> shared with authorised stakeholders</li>
    </ul>

    <p class="muted-note">
      No academic evaluation. No diagnosis. No labelling.
    </p>

  </div>
</section>

<!-- ================= TRUST & SAFETY ================= -->
<section class="product-section bg-soft">
  <div class="container narrow">

    <h2 class="section-title">Built for Trust & Safety</h2>

    <div class="trust-grid">
      <span>Privacy-first & consent-led</span>
      <span>Role-based access controls</span>
      <span>Non-diagnostic engagement intelligence</span>
      <span>Child-safe by design</span>
    </div>

  </div>
</section>

<!-- ================= WHO IT IS FOR ================= -->
<section class="product-section">
  <div class="container narrow">

    <h2 class="section-title">Who AIDORA Is For</h2>

    <ul class="audience-list">
      <li>Learning institutions & ecosystems</li>
      <li>Wellbeing and student support teams</li>
      <li>Families and caregivers</li>
      <li>Academic and institutional leadership</li>
    </ul>

  </div>
</section>

<!-- ================= FINAL CTA ================= -->
<section class="product-cta">
  <div class="container narrow">

    <h2>See AIDORA in Action</h2>

    <p>
      Experience a responsible, insight-driven approach to
      student engagement and wellbeing.
    </p>

    <button class="btn-primary">Request a Demo</button>

  </div>
</section>

</body>
`,

  decode:`
<body>

<!-- ================= DECODE HERO ================= -->
<section class="product-hero-decode">
  <div class="container product-hero-grid-decode">

    <div class="product-hero-content">
      <span class="eyebrow">DECODE PLATFORM</span>

      <h1>
        Employee Engagement Intelligence<br />
        for High-Performance Organisations
      </h1>

      <p class="intro">
        Go beyond surveys. DECODE transforms behavioural signals into
        decision-ready engagement intelligence — continuously, ethically,
        and at enterprise scale.
      </p>

      <div class="hero-actions">
        <button class="btn-primary">Book a Demo</button>
        <button class="btn-outline">Talk to Us</button>
      </div>
    </div>

  </div>
</section>

<!-- ================= WHY DECODE ================= -->
<section class="product-section light">
  <div class="container narrow">

    <h2 class="section-title">Why DECODE</h2>

    <p>
      Engagement is dynamic. Traditional tools capture opinions after the fact —
      often influenced by fear, bias, or fatigue.
    </p>

    <p>
      DECODE uncovers how engagement actually evolves over time, revealing
      behavioural patterns leaders can act on before performance declines.
    </p>

    <p class="section-lead">
      Built for organisations that value clarity over noise —
      and insight over static scores.
    </p>

  </div>
</section>

<!-- ================= WHAT DECODE DELIVERS ================= -->
<section class="product-section">
  <div class="container">

    <div class="section-title">
      <h2>What DECODE Helps You See</h2>
      <p>Outcome-focused engagement intelligence — not just dashboards.</p>
    </div>

    <div class="grid-3">

      <div class="card">
        <h3>Real-Time Engagement Signals</h3>
        <p>Understand how engagement shifts across teams, roles, and time.</p>
      </div>

      <div class="card">
        <h3>Behavioural & Sentiment Patterns</h3>
        <p>Identify the drivers behind motivation, morale, and energy.</p>
      </div>

      <div class="card">
        <h3>Manager & Team Health Insights</h3>
        <p>Spot strengths, overload, and friction early.</p>
      </div>

      <div class="card">
        <h3>Burnout & Risk Indicators</h3>
        <p>Detect emerging risks before performance drops.</p>
      </div>

      <div class="card">
        <h3>Retention & Stability Signals</h3>
        <p>Understand attrition risk without invasive monitoring.</p>
      </div>

      <div class="card">
        <h3>AI-Guided Action Intelligence</h3>
        <p>Clear, role-specific recommendations leaders can act on.</p>
      </div>

    </div>
  </div>
</section>

<!-- ================= HOW IT WORKS ================= -->
<section class="product-section soft">
  <div class="container how-it-works-simple">

    <h2 class="section-title">How DECODE Works</h2>

    <div class="steps-grid">

      <div class="step">
        <span>01</span>
        <h4>Lightweight Engagement Inputs</h4>
        <p>Low-friction, text-based inputs designed for participation.</p>
      </div>

      <div class="step">
        <span>02</span>
        <h4>Continuous Listening</h4>
        <p>Ongoing insight — not one-time surveys.</p>
      </div>

      <div class="step">
        <span>03</span>
        <h4>Behavioural Intelligence Engine</h4>
        <p>Pattern-based analysis powered by AI-assisted interpretation.</p>
      </div>

      <div class="step">
        <span>04</span>
        <h4>Action-Ready Dashboards</h4>
        <p>Clear views for HR, leaders, and managers.</p>
      </div>

    </div>

    <p class="muted-note">
      Built on IP-protected methodologies. Explainable, non-diagnostic,
      and designed for scale.
    </p>

  </div>
</section>

<!-- ================= ENTERPRISE TRUST ================= -->
<section class="product-section light">
  <div class="container narrow">

    <h2 class="section-title">Built for Enterprise Trust</h2>

    <ul class="trust-list">
      <li>Privacy-first, non-invasive by design</li>
      <li>Role-based access and audit controls</li>
      <li>Explainable insights — no black boxes</li>
      <li>Secure, compliant cloud infrastructure</li>
    </ul>

  </div>
</section>

<!-- ================= WHO IT'S FOR ================= -->
<section class="product-section">
  <div class="container narrow">

    <h2 class="section-title">Who DECODE Is For</h2>

    <ul class="audience-list">
      <li>HR and People teams</li>
      <li>Business and functional leaders</li>
      <li>Organisations focused on performance, accountability, and retention</li>
    </ul>

  </div>
</section>

<!-- ================= FINAL CTA ================= -->
<section class="product-cta">
  <div class="container narrow">

    <h2>Turn Engagement Insight into Action</h2>

    <p>
      See how DECODE transforms engagement data into
      measurable organisational outcomes.
    </p>

    <button class="btn-primary">Book a Demo</button>

  </div>
</section>

</body>
`,

Engaggiooverview:`
<body>

<!-- HERO -->
<section class="overview-hero">
  <div class="container">
    <h1>Engaggio Intelligence & Analytics</h1>

    <p>
      Engaggio Intelligence & Analytics is a People Intelligence company focused on
      understanding human engagement, behaviour, and performance through data,
      behavioural science, and AI-assisted insight.
    </p>

    <p>
      We help organisations and institutions move beyond surface-level metrics
      to understand what truly drives productivity, engagement, resilience,
      and outcomes—across workforces and learning ecosystems.
    </p>

    <p>
      At Engaggio, we believe that engagement is not an opinion—it is a pattern.
      And patterns, when observed responsibly and interpreted intelligently,
      enable better decisions, healthier environments, and sustained performance.
    </p>

    <button class="btn-primary">Request a Demo</button>
  </div>
</section>

<!-- WHAT WE DO -->
<section class="overview-section">
  <div class="container overview-grid">

    <div class="overview-content">
      <h2>What We Do</h2>

      <p>
        Engaggio designs and deploys intelligence systems that transform behavioural
        signals, engagement data, and contextual inputs into clear, actionable insight.
      </p>

      <p>
        Our solutions are built on behavioural science frameworks, IP-protected
        analytical methodologies, AI-assisted interpretation (within defined ethical
        boundaries), and privacy-first, consent-led data governance.
      </p>

      <p>
        Rather than replacing human judgment, Engaggio augments leaders, educators,
        and support teams with continuous, contextual intelligence—so they can act
        earlier, act better, and act responsibly.
      </p>
    </div>

    <div class="overview-stats">
      <div class="stat">
        <strong>Behavioural Science</strong>
        <span>Framework-driven engagement understanding</span>
      </div>
      <div class="stat">
        <strong>Ethical AI</strong>
        <span>AI-assisted interpretation within defined boundaries</span>
      </div>
      <div class="stat">
        <strong>Privacy-First</strong>
        <span>Consent-led, responsible data governance</span>
      </div>
    </div>

  </div>
</section>

<!-- PRODUCT FOCUS -->
<section class="overview-section">
  <div class="container overview-grid">

    <div class="overview-content">
      <h2>Our Product Focus</h2>

      <p>
        Engaggio currently operates with two core product lines.
      </p>

      <h3>DECODE</h3>
      <p>
        Employee Engagement Intelligence.
      </p>
      <p>
        A continuous engagement intelligence solution that helps organisations
        understand workforce patterns, performance drivers, and retention risks.
      </p>
      <p>
        DECODE is already in use by select organisations to support leadership
        decision-making, culture improvement, and productivity outcomes.
      </p>

      <h3>AIDORA</h3>
      <p>
        Learner Engagement & Intelligence.
      </p>
      <p>
        A world-first, holistic engagement intelligence system designed to understand
        learners beyond academics—focusing on emotional, social, behavioural, and
        motivational dimensions.
      </p>
      <p>
        AIDORA is built with child-safety, consent, and ethics at its core and
        represents Engaggio’s long-term vision for responsible people intelligence.
      </p>
    </div>

    <div class="overview-stats">
      <div class="stat">
        <strong>DECODE</strong>
        <span>Workforce engagement intelligence</span>
      </div>
      <div class="stat">
        <strong>AIDORA</strong>
        <span>Learner engagement intelligence</span>
      </div>
    </div>

  </div>
</section>

<!-- DIFFERENTIATION -->
<section class="overview-pillars">
  <h1>How We Are Different</h1>
  <div class="container grid-3">
    <div class="card">
      <h3>Patterns Over Time</h3>
      <p>
        We focus on patterns over time, not one-time responses.
      </p>
    </div>

    <div class="card">
      <h3>Context Over Conclusions</h3>
      <p>
        We prioritise context over conclusions.
      </p>
    </div>

    <div class="card">
      <h3>Ethics by Design</h3>
      <p>
        We embed ethics, safety, and privacy by design.
      </p>
    </div>

  </div>
</section>

<!-- PHILOSOPHY -->
<section class="overview-section">
  <div class="container">
    <h2>Our Philosophy</h2>

    <p>Human behaviour is complex.</p>
    <p>Engagement cannot be reduced to a score.</p>
    <p>Performance is shaped by unseen factors.</p>

    <p>
      Engaggio exists to make those factors visible, understandable,
      and actionable—without oversimplification or intrusion.
    </p>
  </div>
</section>

<!-- LOOKING AHEAD -->
<section class="overview-cta">
  <div class="container">
    <h2>Looking Ahead</h2>

    <p>
      Engaggio is building a focused, vertical intelligence portfolio—deepening
      capabilities within engagement and behaviour-driven analytics while continuing
      to invest in research, IP development, and responsible AI practices.
    </p>

    <p>
      As we grow, our commitment remains unchanged:
      Measure what matters. Interpret responsibly. Act with clarity.
    </p>

    <button class="btn-primary">Explore Our Platforms</button>
  </div>
</section>

</body>
`,


Mission:`
<section class="page-hero mission-hero">
  <div class="container">
    <div class="breadcrumb">Company / Mission & Purpose</div>
    <h1>Our Mission & Purpose</h1>
    <p>
      To help organisations understand humans more deeply —
      and act more responsibly.
    </p>
  </div>
</section>

<section class="mission-section">
  <div class="container mission-grid">

    <div class="mission-content">
      <h2>Why Engaggio Exists</h2>
      <p>
        Organisations make decisions about people every day — often with
        incomplete, biased, or purely transactional data.
      </p>
      <p>
        Engaggio exists to change that. We help leaders understand engagement,
        wellbeing, and behaviour in ways that are ethical, transparent, and
        genuinely human.
      </p>
    </div>

    <div class="mission-values">
      <div class="value-card">
        <strong>Human First</strong>
        <span>People are not data points. Every insight must respect dignity and trust.</span>
      </div>
      <div class="value-card">
        <strong>Ethics by Design</strong>
        <span>Consent-led, privacy-first, and responsible AI at every layer.</span>
      </div>
      <div class="value-card">
        <strong>Insight with Impact</strong>
        <span>Intelligence only matters when it enables better decisions.</span>
      </div>
    </div>

  </div>
</section>

<section class="mission-cta">
  <div class="container">
    <h2>Helping organisations act with insight, not assumption.</h2>
    <button class="btn-primary">Explore Our Platforms</button>
  </div>
</section>
`,

careers: `
<section class="page-hero careers-hero">
  <div class="container">
    <div class="breadcrumb">Company / Careers</div>
    <h1>Build the Future of People Intelligence</h1>
    <p>
      Join a team shaping ethical, human-centred intelligence
      for learning and work.
    </p>
  </div>
</section>

<section class="careers-section">
  <div class="container careers-grid">

    <div class="careers-content">
      <h2>Why Work at Engaggio?</h2>
      <p>
        We are a multidisciplinary team of technologists, researchers,
        designers, and strategists who care deeply about people.
      </p>
      <p>
        At Engaggio, you’ll work on meaningful problems — building products
        that influence how organisations understand and support humans.
      </p>
    </div>

    <div class="careers-perks">
      <div class="perk">Purpose-driven work</div>
      <div class="perk">Flexible & remote-friendly</div>
      <div class="perk">Ethics-led innovation</div>
      <div class="perk">Learning & growth focused</div>
    </div>

  </div>
</section>

<section class="open-roles">
  <div class="container">
    <h2>Open Roles</h2>

    <div class="role">
      <strong>Frontend Engineer</strong>
      <span>Remote / Hybrid</span>
    </div>

    <div class="role">
      <strong>Data Scientist (People Analytics)</strong>
      <span>Remote / Hybrid</span>
    </div>

    <div class="role">
      <strong>Product Manager</strong>
      <span>Remote / Hybrid</span>
    </div>

    <p class="careers-note">
      Don’t see a role that fits?  
      We’re always open to hearing from thoughtful people.
    </p>

    <button class="btn-primary">Get in Touch</button>
  </div>
</section>
`
};

function router() {
  const page = location.hash.replace("#", "") || "home";
  app.innerHTML = pages[page] || pages.home;

  // Scroll to top
  window.scrollTo(0, 0);

  // ✅ INIT SLIDER ONLY IF PRESENT
  if (page === "home" && window.initSlider) {
    // Delay ensures DOM is fully painted
    setTimeout(() => {
      window.initSlider();
    }, 0);
  }
}


window.addEventListener("hashchange", router);
window.addEventListener("load", router);
