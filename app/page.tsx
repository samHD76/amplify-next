"use client";

import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";

export default function LandingPage() {
  return (
    <main>
      <section>
        <h1>Unified Cyber Defense Platform</h1>
        <p>
          Our platform consolidates essential security functions into a single,
          integrated solution.
        </p>
      </section>

      <section>
        <h2>Real-time Threat Detection</h2>
        <p>
          AI-powered monitoring identifies suspicious activity as it happens,
          enabling rapid response and preventing potential breaches.
        </p>
        <p>Benefit: Reduced risk of successful attacks and minimized damage.</p>
      </section>

      <section>
        <h2>Unified Data Platform</h2>
        <p>
          Consolidates security data from various sources into a centralized
          data lake, providing a single source of truth.
        </p>
        <p>
          Benefit: Improved visibility, streamlined analysis, and faster threat
          hunting.
        </p>
      </section>

      <section>
        <h2>Endpoint Protection (EDR)</h2>
        <p>
          Provides comprehensive protection for endpoint devices (computers,
          mobile devices, servers) against malware, ransomware, and other
          threats.
        </p>
        <p>
          Benefit: Reduced endpoint vulnerabilities and improved overall
          security posture.
        </p>
      </section>

      <section>
        <h2>Data as a Service (DaaS)</h2>
        <p>
          Offers processed and structured security data in open formats,
          allowing for seamless integration with existing data analytics tools
          and platforms.
        </p>
        <p>
          Benefit: Enables advanced analytics, custom reporting, and improved
          collaboration between security and data teams.
        </p>
      </section>

      <section>
        <h2>Automated Response</h2>
        <p>
          Automates threat containment and mitigation actions, such as isolating
          affected devices and blocking malicious processes.
        </p>
        <p>
          Benefit: Faster response times, reduced manual effort, and minimized
          impact of security incidents.
        </p>
      </section>

      <section>
        <h2>Intelligent Action Center</h2>
        <p>
          Provides a centralized dashboard for managing security incidents,
          tracking threat status, and initiating response actions.
        </p>
        <p>
          Benefit: Improved incident management, better communication, and
          faster resolution of security issues.
        </p>
      </section>

      <section>
        <h2>Email and Messaging Integration</h2>
        <p>
          Scans emails and text messages for phishing attempts, scams, and other
          malicious content.
        </p>
        <p>
          Benefit: Protects users from social engineering attacks and reduces
          the risk of data breaches.
        </p>
        <p>(Emphasize privacy measures here)</p>
      </section>

      <section>
        <h2>Trusted Source Intelligence</h2>
        <p>
          Provides access to a curated database of trusted URLs and IPs, helping
          to identify and block known malicious actors.
        </p>
        <p>
          Benefit: Proactive threat prevention and reduced exposure to known
          threats.
        </p>
      </section>
    </main>
  );
}
