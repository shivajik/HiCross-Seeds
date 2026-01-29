import { Link } from "react-router";
import { Mail, Phone, MapPin, Award } from "lucide-react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3>About HiCross Seeds</h3>
            <p>
              Hicrossbrid Seeds International Pvt. Ltd. - Leading seed manufacturer committed to sustainable agriculture and innovative crop solutions. Serving farmers worldwide with premium quality seeds.
            </p>
            <div className={styles.certifications}>
              <span className={styles.badge}>ISO 9001</span>
              <span className={styles.badge}>Organic Certified</span>
              <span className={styles.badge}>Non-GMO</span>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Quick Links</h3>
            <div className={styles.links}>
              <Link to="/about" className={styles.link}>
                About Us
              </Link>
              <Link to="/products" className={styles.link}>
                Our Products
              </Link>
              <Link to="/quality" className={styles.link}>
                Quality & R&D
              </Link>
              <Link to="/blog" className={styles.link}>
                Knowledge Center
              </Link>
              <Link to="/careers" className={styles.link}>
                Careers
              </Link>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Contact Information</h3>
            <div className={styles.links}>
              <a href="mailto:hicrossbridseeds@gmail.com" className={styles.link}>
                <Mail className={styles.linkIcon} />
                hicrossbridseeds@gmail.com
              </a>
              <a href="tel:+917378653999" className={styles.link}>
                <Phone className={styles.linkIcon} />
                +91-7378653999
              </a>
              <span className={styles.link}>
                <MapPin className={styles.linkIcon} />
                P No-483, Jayabheri Park, Kompally, Hyderabad, Telangana 500100, India
              </span>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Certifications</h3>
            <p>Our commitment to quality is backed by international certifications and rigorous testing standards.</p>
            <Award className={styles.linkIcon} style={{ marginTop: "var(--space-3)" }} />
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Hicrossbrid Seeds International Pvt. Ltd. All rights reserved.</p>
          <p className={styles.credit}>
            Designed by{" "}
            <a href="https://ksoftsolution.com/" target="_blank" rel="noopener noreferrer">
              KSoft Solution
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
