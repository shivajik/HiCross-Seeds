import { Link, useLocation } from "react-router";
import { Menu, Sprout, X, ChevronDown, Search, Phone, Mail, Wheat, Leaf, Sun, Apple } from "lucide-react";
import { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./header.module.css";
import { productCategories as allCategories } from "~/data/products";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productCategories = [
    {
      name: "Paddy Seeds",
      icon: Wheat,
      description: "Improved & hybrid varieties",
      categories: ["Improved Paddy Seeds", "Hybrid Paddy Seeds"]
    },
    {
      name: "Cereal Seeds",
      icon: Wheat,
      description: "Maize, wheat & millets",
      categories: ["Hybrid Maize Seeds", "Research Wheat Seeds", "Jowar Seeds", "Bajra Seeds"]
    },
    {
      name: "Oilseeds",
      icon: Sun,
      description: "Sunflower & mustard varieties",
      categories: ["Sunflower Seeds", "Mustard Seeds"]
    },
    {
      name: "Fodder Seeds",
      icon: Apple,
      description: "High-quality fodder crops",
      categories: ["Fodder Seeds"]
    },
  ];

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { 
      path: "/products", 
      label: "Products",
      hasMegaMenu: true,
    },
    { path: "/quality", label: "R&D & Quality" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarLeft}>
            <a href="tel:+917378653999" className={styles.topBarLink}>
              <Phone size={14} />
              <span>+91-7378653999</span>
            </a>
            <a href="mailto:hicrossbridseeds@gmail.com" className={styles.topBarLink}>
              <Mail size={14} />
              <span>hicrossbridseeds@gmail.com</span>
            </a>
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.topBarText}>Premium Quality Seeds | ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>

      <header className={classNames(styles.header, { [styles.scrolled]: scrolled })}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img src="/logo.png" alt="HiCross Seeds" className={styles.logoImage} />
          </Link>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <div 
                key={item.path} 
                className={styles.navItem}
                onMouseEnter={() => item.hasMegaMenu && setProductsDropdown(true)}
                onMouseLeave={() => item.hasMegaMenu && setProductsDropdown(false)}
              >
                <Link
                  to={item.path}
                  className={classNames(styles.navLink, {
                    [styles.active]: isActive(item.path),
                  })}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown size={16} className={styles.chevron} />}
                </Link>
                
                {item.hasMegaMenu && productsDropdown && (
                  <div 
                    className={styles.megaMenu}
                    onMouseEnter={() => setProductsDropdown(true)}
                    onMouseLeave={() => setProductsDropdown(false)}
                  >
                    <div className={styles.megaMenuContent}>
                      <div className={styles.megaMenuContainer}>
                      <div className={styles.megaMenuHeader}>
                        <h3 className={styles.megaMenuTitle}>Our Product Range</h3>
                        <p className={styles.megaMenuSubtitle}>Discover premium quality seeds for every farming need</p>
                      </div>
                      
                      <div className={styles.megaMenuGrid}>
                        {productCategories.map((group) => {
                          const IconComponent = group.icon;
                          return (
                            <div key={group.name} className={styles.megaMenuCategory}>
                              <div className={styles.megaMenuCategoryHeader}>
                                <div className={styles.megaMenuIconWrapper}>
                                  <IconComponent size={24} className={styles.megaMenuIcon} />
                                </div>
                                <div>
                                  <h4 className={styles.megaMenuCategoryTitle}>{group.name}</h4>
                                  <p className={styles.megaMenuCategoryDescription}>{group.description}</p>
                                </div>
                              </div>
                              
                              <div className={styles.megaMenuProducts}>
                                {group.categories.map((category) => (
                                  <Link
                                    key={category}
                                    to={`/products?category=${encodeURIComponent(category)}`}
                                    className={styles.megaMenuProductLink}
                                  >
                                    {category}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className={styles.megaMenuFooter}>
                        <div className={styles.megaMenuHighlight}>
                          <Sprout size={20} />
                          <div>
                            <strong>Complete Collection</strong>
                            <p>Browse all our premium seed varieties</p>
                          </div>
                          <Link to="/products" className={styles.megaMenuFooterLink}>View All →</Link>
                        </div>
                        <div className={styles.megaMenuHighlight}>
                          <Leaf size={20} />
                          <div>
                            <strong>Hybrid Excellence</strong>
                            <p>Advanced genetics for maximum yield</p>
                          </div>
                          <Link to="/products?category=Hybrid%20Paddy%20Seeds" className={styles.megaMenuFooterLink}>Explore →</Link>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <button className={styles.searchButton} aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/contact" className={styles.ctaButton}>
              Get Quote
            </Link>
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className={styles.navMobile}>
            {navItems.map((item) => (
              <div key={item.path}>
                {item.hasMegaMenu ? (
                  <>
                    <button
                      className={classNames(styles.navLink, styles.mobileNavToggle, {
                        [styles.active]: isActive(item.path),
                      })}
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    >
                      {item.label}
                      <ChevronDown 
                        size={16} 
                        className={classNames(styles.mobileChevron, {
                          [styles.mobileChevronOpen]: mobileProductsOpen
                        })} 
                      />
                    </button>
                    {mobileProductsOpen && (
                      <div className={styles.mobileSubmenu}>
                        {productCategories.map((group) => (
                          <div key={group.name}>
                            <div className={styles.mobileSubmenuTitle}>
                              {group.name}
                            </div>
                            {group.categories.map((category) => (
                              <Link
                                key={category}
                                to={`/products?category=${encodeURIComponent(category)}`}
                                className={styles.mobileSubmenuLink}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileProductsOpen(false);
                                }}
                              >
                                {category}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={classNames(styles.navLink, {
                      [styles.active]: isActive(item.path),
                    })}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/contact" 
              className={styles.mobileCtaButton}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
