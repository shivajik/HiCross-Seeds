import type { Route } from "./+types/quality";
import { Microscope, FlaskConical, Shield, Award, CheckCircle2, Sprout } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import styles from "./quality.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research & Development, Quality Assurance | HiCross Seeds" },
    {
      name: "description",
      content:
        "Discover our state-of-the-art R&D facilities, rigorous quality testing protocols, and international certifications ensuring superior seed quality.",
    },
  ];
}

export default function Quality() {
  const processes = [
    {
      icon: Sprout,
      title: "Breeding & Selection",
      description:
        "Advanced plant breeding techniques combining traditional methods with modern molecular markers to develop superior varieties.",
    },
    {
      icon: FlaskConical,
      title: "Laboratory Testing",
      description:
        "Comprehensive germination, purity, and vigor testing in our ISO-certified laboratories ensuring consistent quality.",
    },
    {
      icon: Microscope,
      title: "Disease Screening",
      description:
        "Rigorous pathogen testing and disease resistance evaluation to guarantee healthy, disease-free seed lots.",
    },
    {
      icon: CheckCircle2,
      title: "Field Trials",
      description:
        "Multi-location field testing across diverse climates and soil types to validate performance and adaptability.",
    },
    {
      icon: Shield,
      title: "Quality Control",
      description:
        "Continuous monitoring throughout production with strict adherence to international seed quality standards.",
    },
    {
      icon: Award,
      title: "Certification",
      description:
        "Third-party certification and regular audits ensuring compliance with organic, non-GMO, and quality standards.",
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management System",
    },
    {
      icon: Award,
      title: "USDA Organic",
      description: "Certified Organic Production",
    },
    {
      icon: Award,
      title: "Non-GMO Verified",
      description: "Non-GMO Project Verified",
    },
    {
      icon: Award,
      title: "GAP Certified",
      description: "Good Agricultural Practices",
    },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Research & Development Excellence</h1>
          <p className={styles.heroSubtitle}>
            Combining cutting-edge science with decades of expertise to deliver seeds that exceed expectations
          </p>
        </section>

        <section className={styles.section}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-6)", fontSize: "var(--font-size-fluid-2)" }}>
            Our Quality Process
          </h2>
          <div className={styles.grid}>
            {processes.map((process, index) => (
              <div key={process.title} className={styles.processCard}>
                <div className={styles.processNumber}>{index + 1}</div>
                <process.icon className={styles.processIcon} />
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Average Germination Rate</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Research Scientists</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Field Trial Locations</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Quality Tested</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h3>State-of-the-Art Research Facilities</h3>
              <p>
                Our 50,000 square foot research complex houses advanced laboratories, greenhouses, and controlled
                environment chambers equipped with the latest technology.
              </p>
              <ul>
                <li>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>Molecular breeding and marker-assisted selection</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>Tissue culture and micropropagation labs</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>Climate-controlled growth chambers</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>Advanced seed testing equipment</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>Disease diagnostic facilities</span>
                </li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
              alt="Research laboratory"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentGrid} style={{ flexDirection: "row-reverse" }}>
            <div className={styles.content}>
              <h3>Rigorous Quality Standards</h3>
              <p>
                Every seed lot undergoes comprehensive testing to ensure it meets or exceeds international quality
                standards before reaching our customers.
              </p>
              <ul>
                <li>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>Germination testing per ISTA/AOSA protocols</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>Genetic purity verification</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>Seed health and pathogen screening</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>Physical purity analysis</span>
                </li>
                <li>
                  <CheckCircle2 className={styles.checkIcon} />
                  <span>Vigor and viability assessment</span>
                </li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
              alt="Quality testing"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-6)", fontSize: "var(--font-size-fluid-2)" }}>
            Certifications & Standards
          </h2>
          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <div key={cert.title} className={styles.certCard}>
                <cert.icon className={styles.certIcon} />
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
