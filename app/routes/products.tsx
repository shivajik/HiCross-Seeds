import type { Route } from "./+types/products";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import classNames from "classnames";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { products, productCategories } from "~/data/products";
import styles from "./products.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Products - Premium Quality Seeds | HiCross Seeds" },
    {
      name: "description",
      content:
        "Explore our extensive range of premium paddy, maize, wheat, mustard, sunflower, jowar, bajra and fodder seeds. Certified quality with superior germination rates.",
    },
  ];
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "All");

  useEffect(() => {
    if (categoryFromUrl && productCategories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Our Premium Seed Collection</h1>
          <p className={styles.heroSubtitle}>
            Discover our comprehensive range of high-quality seeds, each variety rigorously tested and certified for
            superior performance
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.filters}>
            {productCategories.map((category) => (
              <button
                key={category}
                className={classNames(styles.filterButton, {
                  [styles.active]: selectedCategory === category,
                })}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <article key={product.id} className={styles.productCard}>
                <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                <div className={styles.productContent}>
                  <span className={styles.productCategory}>{product.category}</span>
                  <h2 className={styles.productTitle}>{product.name}</h2>
                  
                  <div className={styles.productInfo}>
                    <div className={styles.productInfoItem}>
                      <span className={styles.productInfoLabel}>Seed Type:</span>
                      <span className={styles.productInfoValue}>{product.seedType}</span>
                    </div>
                    <div className={styles.productInfoItem}>
                      <span className={styles.productInfoLabel}>Crop:</span>
                      <span className={styles.productInfoValue}>{product.crop}</span>
                    </div>
                  </div>
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
