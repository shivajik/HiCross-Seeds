import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Sprout, Award, Users, TrendingUp, Shield, Leaf, Microscope } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { Button } from "~/components/ui/button/button";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HiCross Seeds - Premium Quality Seeds for Sustainable Agriculture" },
    {
      name: "description",
      content:
        "Hicrossbrid Seeds International Pvt. Ltd. - Leading seed manufacturer offering premium quality paddy, cereal, oilseed, and fodder seeds. Certified, tested, and trusted by farmers worldwide.",
    },
    {
      property: "og:title",
      content: "HiCross Seeds - Premium Quality Seeds for Sustainable Agriculture",
    },
    {
      property: "og:description",
      content:
        "Hicrossbrid Seeds International Pvt. Ltd. - Leading seed manufacturer offering premium quality paddy, cereal, oilseed, and fodder seeds. Certified, tested, and trusted by farmers.",
    },
    { property: "og:type", content: "website" },
    {
      name: "keywords",
      content:
        "seeds, agriculture, farming, paddy seeds, maize seeds, hybrid seeds, seed manufacturer, sustainable agriculture, HiCross Seeds, Telangana, Hyderabad, high yield seeds",
    },
    {
      property: "og:image",
      content: "/logo.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "HiCross Seeds - Premium Quality Seeds for Sustainable Agriculture",
    },
    {
      name: "twitter:description",
      content: "Hicrossbrid Seeds International Pvt. Ltd. - Leading seed manufacturer offering premium quality seeds.",
    },
  ];
}

export default function Home() {
  const features = [
    {
      icon: Sprout,
      title: "Premium Quality Seeds",
      description:
        "Rigorously tested and certified seeds with superior germination rates and crop performance. Every batch meets international quality standards.",
    },
    {
      icon: Microscope,
      title: "Advanced R&D",
      description:
        "State-of-the-art research facilities developing innovative seed varieties with enhanced yield, disease resistance, and climate adaptability.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Comprehensive testing protocols ensuring purity, germination, and genetic integrity. ISO 9001 certified quality management systems.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description:
        "Committed to environmental stewardship through organic options, reduced chemical inputs, and sustainable breeding practices.",
    },
  ];

  const testimonials = [
    {
      quote:
        "HiCross seeds have consistently delivered exceptional yields. Their technical support and quality assurance give me confidence in every planting season.",
      author: "Rajesh Kumar",
      role: "Commercial Farmer, Telangana",
    },
    {
      quote:
        "The hybrid paddy seeds from HiCross have transformed my farm's productivity. Outstanding germination rates and crop quality.",
      author: "Venkat Reddy",
      role: "Paddy Farmer, Andhra Pradesh",
    },
    {
      quote:
        "As a distributor, I trust HiCross for their consistent quality and excellent customer service. Their products are always in high demand.",
      author: "Suresh Patel",
      role: "Agricultural Distributor, Karnataka",
    },
  ];

  return (
    <>
      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroPattern} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Cultivating Excellence in Every Seed</h1>
            <p className={styles.heroSubtitle}>
              Premium quality seeds backed by cutting-edge research, rigorous testing, and a commitment to sustainable
              agriculture. Trusted by farmers worldwide.
            </p>
            <div className={styles.heroButtons}>
              <Button asChild size="lg">
                <Link to="/products">Explore Our Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Years of Excellence</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Seed Varieties</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Farmers Trust Us</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Customer Satisfaction</div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose HiCross Seeds?</h2>
            <p className={styles.sectionSubtitle}>
              We combine expertise with innovative technology to deliver seeds that exceed expectations
            </p>
          </div>
          <div className={styles.grid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <feature.icon className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trusted by Farmers</h2>
            <p className={styles.sectionSubtitle}>
              Hear what our customers have to say about their experience with HiCross Seeds
            </p>
          </div>
          <div className={styles.grid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{testimonial.author.charAt(0)}</div>
                  <div className={styles.testimonialInfo}>
                    <div className={styles.testimonialName}>{testimonial.author}</div>
                    <div className={styles.testimonialRole}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Certifications & Quality Standards</h2>
            <p className={styles.sectionSubtitle}>
              Our commitment to excellence is validated by international certifications
            </p>
          </div>
          <div className={styles.certBadges}>
            <div className={styles.certBadge}>
              <Award className={styles.certIcon} />
              ISO 9001:2015
            </div>
            <div className={styles.certBadge}>
              <Award className={styles.certIcon} />
              USDA Organic
            </div>
            <div className={styles.certBadge}>
              <Award className={styles.certIcon} />
              Non-GMO Verified
            </div>
            <div className={styles.certBadge}>
              <Award className={styles.certIcon} />
              GAP Certified
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
