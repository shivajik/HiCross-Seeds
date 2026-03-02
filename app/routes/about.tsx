import type { Route } from "./+types/about";
import { Target, Heart, Lightbulb, Users, Award } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { teamMembers } from "~/data/team";
import styles from "./about.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - HiCross Seeds | Our Story & Mission" },
    {
      name: "keywords",
      content: "about HiCross Seeds, seed manufacturing Hyderabad, agricultural innovation, sustainable farming, seed quality control",
    },
    {
      property: "og:title",
      content: "About Us - HiCross Seeds | Our Story & Mission",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
}

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "Unwavering commitment to delivering the highest quality seeds through rigorous testing and innovation.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Building trust through transparency, ethical practices, and honest relationships with our customers.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously advancing seed technology to meet evolving agricultural challenges and opportunities.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Collaborating with farmers, researchers, and communities to create shared success and sustainable growth.",
    },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Story</h1>
            <p className={styles.heroSubtitle}>
              Hicrossbrid Seeds International Pvt. Ltd. has been at the forefront of agricultural innovation, providing
              farmers worldwide with premium quality seeds that drive sustainable success.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>Who We Are</h2>
              <p>
                Hicrossbrid Seeds International Pvt. Ltd. is a leading seed manufacturing company dedicated to advancing global agriculture
                through superior genetics, rigorous quality control, and unwavering customer support.
              </p>
              <p>
                Based in Hyderabad, Telangana, we've grown to become a trusted seed supplier serving
                farmers across India and beyond. Our success is built on a simple principle: when farmers succeed, we all
                succeed.
              </p>
              <p>
                Today, we operate cutting-edge research facilities, maintain extensive field trial networks, and employ
                a team of world-class plant breeders, agronomists, and quality specialists committed to your success.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
              alt="Agricultural field"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentGrid} style={{ flexDirection: "row-reverse" }}>
            <div className={styles.content}>
              <h2>Our Mission</h2>
              <p>
                To empower farmers worldwide with innovative, high-quality seeds that maximize yield, minimize
                environmental impact, and contribute to global food security.
              </p>
              <h2 style={{ marginTop: "var(--space-6)" }}>Our Vision</h2>
              <p>
                A world where sustainable agriculture thrives through accessible, superior seed genetics that adapt to
                changing climates and meet the nutritional needs of growing populations.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
              alt="Seed research"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-8)", fontSize: "var(--font-size-fluid-2)" }}>
            Leadership
          </h2>
          {teamMembers.filter(m => m.id === "nilesh-bhosale").map(director => (
            <div key={director.id} className={styles.contentGrid} style={{ alignItems: "center", gap: "var(--space-8)" }}>
              <img
                src={director.imageUrl}
                alt={director.name}
                className={styles.image}
                style={{ borderRadius: "var(--radius-3)", aspectRatio: "1/1", objectFit: "cover" }}
              />
              <div className={styles.content}>
                <h3 style={{ fontSize: "var(--font-size-4)", color: "var(--brand)" }}>{director.name}</h3>
                <p style={{ fontWeight: "600", color: "var(--text-2)", marginBottom: "var(--space-2)" }}>
                  {director.position} | {director.qualification}
                </p>
                <p>{director.bio}</p>
                <p style={{ marginTop: "var(--space-4)" }}>
                  Throughout his professional journey, Mr. Bhosale has received numerous awards and recognitions for
                  outstanding performance, leadership excellence, and significant contributions to the seed industry.
                  He is widely respected for his deep market knowledge, farmer-centric approach, and consistent results.
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-6)", fontSize: "var(--font-size-fluid-2)" }}>
            Our Core Values
          </h2>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <value.icon className={styles.valueIcon} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
