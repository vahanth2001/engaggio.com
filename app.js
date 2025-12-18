const app = document.getElementById("app");

const pages = {
  home: `
<body>
<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <h1>Understanding Humans. Improving Performance.</h1>
    <p>
      Engaggio is a People Intelligence and AI technology company helping organisations
      and learning ecosystems understand engagement, wellbeing, and behaviour.
    </p>
    <div class="hero-actions">
      <button class="btn-primary">Request a Demo</button>
      <button class="btn-secondary">Explore Our Platforms</button>
    </div>
  </div>
</section>

<!-- PLATFORMS -->
<section>
  <div class="container">
    <div class="section-title">
      <h2>Our Platforms</h2>
      <p>Purpose-built intelligence platforms designed around how humans think and engage.</p>
    </div>

    <div class="grid-3">
      <div class="card">
        <i class="fa fa-user-graduate"></i>
        <h3>CADMUS</h3>
        <p>Student engagement & wellbeing intelligence beyond academics.</p>
        <a href="#">Explore CADMUS →</a>
      </div>

      <div class="card">
        <i class="fa fa-users"></i>
        <h3>DECODE</h3>
        <p>Employee engagement insights leaders can act on.</p>
        <a href="#">Explore DECODE →</a>
      </div>

      <div class="card">
        <i class="fa fa-chart-line"></i>
        <h3>HORUS</h3>
        <p>Workforce productivity and performance intelligence.</p>
        <a href="#">Explore HORUS →</a>
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

<!-- FOOTER -->
<footer>
  <div class="footer-grid">
    <div>
      <h4>Platforms</h4>
      <ul>
        <li><a href="#">CADMUS</a></li>
        <li><a href="#">DECODE</a></li>
        <li><a href="#">HORUS</a></li>
      </ul>
    </div>

    <div>
      <h4>Solutions</h4>
      <ul>
        <li><a href="#">For Education</a></li>
        <li><a href="#">For Enterprises</a></li>
        <li><a href="#">For Leadership & HR</a></li>
      </ul>
    </div>

    <div>
      <h4>Company</h4>
      <ul>
        <li><a href="#">About Engaggio</a></li>
        <li><a href="#">Trust & Ethics</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>

    <div>
      <h4>Insights</h4>
      <ul>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">Resources</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    © 2025 Engaggio. All rights reserved.
  </div>
</footer>

</body>
</html>


<!-- TRUST -->
<section class="trust">
  <div class="container">
    <h2>Built on Trust. Designed for Responsibility.</h2>
    <p>Privacy-first. Consent-led. Ethical AI by design.</p>
    <br/>
    <button class="btn-primary">Request a Demo</button>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-grid">
    <div>
      <h4>Platforms</h4>
      <ul>
        <li><a href="#">CADMUS</a></li>
        <li><a href="#">DECODE</a></li>
        <li><a href="#">HORUS</a></li>
      </ul>
    </div>

    <div>
      <h4>Solutions</h4>
      <ul>
        <li><a href="#">For Education</a></li>
        <li><a href="#">For Enterprises</a></li>
        <li><a href="#">For Leadership & HR</a></li>
      </ul>
    </div>

    <div>
      <h4>Company</h4>
      <ul>
        <li><a href="#">About Engaggio</a></li>
        <li><a href="#">Trust & Ethics</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>

    <div>
      <h4>Insights</h4>
      <ul>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">Resources</a></li>
      </ul>
    </div>
  </div>
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

  enterprise: `
    <section>
      <h1>Solutions for Enterprises</h1>
      <p>
        Drive performance, productivity, and retention with DECODE.
      </p>
    </section>
  `,

  leadership: `
    <section>
      <h1>Leadership & HR</h1>
      <p>
        Empower leaders with ethical workforce intelligence.
      </p>
    </section>
  `,

  insights: `
    <section>
      <h1>Insights</h1>
      <p>
        Research and thinking on people intelligence.
      </p>
    </section>
  `,

  contact: `
    <section>
      <h1>Request a Demo</h1>
      <p>We respect your privacy. No spam.</p>
      <form>
        <input placeholder="Name"><br><br>
        <input placeholder="Email"><br><br>
        <button>Submit</button>
      </form>
    </section>
  `
};

function router() {
  const page = location.hash.replace("#", "") || "home";
  app.innerHTML = pages[page] || pages.home;
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
