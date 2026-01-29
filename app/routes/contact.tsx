import type { Route } from "./+types/contact";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { Button } from "~/components/ui/button/button";
import { Input } from "~/components/ui/input/input";
import { Textarea } from "~/components/ui/textarea/textarea";
import { Label } from "~/components/ui/label/label";
import styles from "./contact.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - Get in Touch | HiCross Seeds" },
    {
      name: "description",
      content:
        "Contact Hicrossbrid Seeds International Pvt. Ltd. for inquiries, support, or partnership opportunities. Our team is ready to assist you.",
    },
  ];
}

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSubtitle}>
            Have questions? We're here to help. Reach out to our team for support, inquiries, or partnership
            opportunities.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.grid}>
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <Mail className={styles.infoIcon} />
                <div className={styles.infoContent}>
                  <h3>Email Us</h3>
                  <p>For general inquiries and support</p>
                  <a href="mailto:hicrossbridseeds@gmail.com">hicrossbridseeds@gmail.com</a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <Phone className={styles.infoIcon} />
                <div className={styles.infoContent}>
                  <h3>Call Us</h3>
                  <p>Speak with our customer service team</p>
                  <a href="tel:+917378653999">+91-7378653999</a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <MapPin className={styles.infoIcon} />
                <div className={styles.infoContent}>
                  <h3>Visit Us</h3>
                  <p>Hicrossbrid Seeds International Pvt. Ltd.</p>
                  <p>P No-483, Jayabheri Park, Kompally</p>
                  <p>Hyderabad, Telangana 500100, India</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <Clock className={styles.infoIcon} />
                <div className={styles.infoContent}>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className={styles.formCard}>
              <h2>Send Us a Message</h2>
              <form>
                <div className={styles.formGroup}>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>

                <div className={styles.formGroup}>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className={styles.formGroup}>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (234) 567-890" />
                </div>

                <div className={styles.formGroup}>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" type="text" placeholder="How can we help you?" required />
                </div>

                <div className={styles.formGroup}>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={6} required />
                </div>

                <Button type="submit" size="lg" style={{ width: "100%" }}>
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className={styles.mapSection}>
            <h2>Find Us on the Map</h2>
            <div className={styles.mapPlaceholder}>
              <MapPin style={{ width: "48px", height: "48px" }} />
              <span style={{ marginLeft: "var(--space-3)" }}>Map Integration Placeholder</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
