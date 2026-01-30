import type { Route } from "./+types/careers";
import { Briefcase, MapPin, Clock, CheckCircle2, Heart, TrendingUp, Users, GraduationCap } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { Button } from "~/components/ui/button/button";
import { jobPostings } from "~/data/careers";
import styles from "./careers.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Careers - Join Our Team | HiCross Seeds" },
    {
      name: "keywords",
      content: "agriculture jobs Hyderabad, seed industry careers, farming jobs India, HiCross Seeds careers",
    },
    {
      property: "og:title",
      content: "Careers - Join Our Team | HiCross Seeds",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
}

export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs for you and your family.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Professional development opportunities, training programs, and clear advancement pathways.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive, innovative, and inclusive environment.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Access to conferences, workshops, and continuing education to expand your expertise.",
    },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Join Our Growing Team</h1>
          <p className={styles.heroSubtitle}>
            Be part of a company that's shaping the future of agriculture through innovation, quality, and dedication
          </p>
        </section>

        <section className={styles.benefitsSection}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-6)", fontSize: "var(--font-size-fluid-2)" }}>
            Why Work With Us?
          </h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.benefitCard}>
                <benefit.icon className={styles.benefitIcon} />
                <div className={styles.benefitContent}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-7)", fontSize: "var(--font-size-fluid-2)" }}>
            Current Openings
          </h2>
          <div className={styles.jobsList}>
            {jobPostings.map((job) => (
              <article key={job.id} className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.jobMetaItem}>
                        <Briefcase className={styles.metaIcon} />
                        {job.department}
                      </span>
                      <span className={styles.jobMetaItem}>
                        <MapPin className={styles.metaIcon} />
                        {job.location}
                      </span>
                      <span className={styles.jobMetaItem}>
                        <Clock className={styles.metaIcon} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className={styles.jobDescription}>{job.description}</p>

                <div className={styles.jobSection}>
                  <h4>Requirements</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>
                        <CheckCircle2 className={styles.checkIcon} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.jobSection}>
                  <h4>Responsibilities</h4>
                  <ul>
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>
                        <CheckCircle2 className={styles.checkIcon} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.jobFooter}>
                  <span className={styles.postedDate}>
                    Posted:{" "}
                    {new Date(job.postedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <Button>Apply Now</Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
