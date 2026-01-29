import type { Route } from "./+types/blog";
import { useState } from "react";
import { Calendar, User, Clock } from "lucide-react";
import classNames from "classnames";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { blogPosts, blogCategories } from "~/data/blog";
import styles from "./blog.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Knowledge Center - Farming Tips & Guides | HiCross Seeds" },
    {
      name: "description",
      content:
        "Expert farming advice, seed management tips, and agricultural insights. Learn best practices for maximizing crop yields and sustainable farming.",
    },
  ];
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Knowledge Center</h1>
          <p className={styles.heroSubtitle}>
            Expert insights, farming tips, and agricultural best practices to help you succeed
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.filters}>
            {blogCategories.map((category) => (
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
            {filteredPosts.map((post) => (
              <article key={post.id} className={styles.articleCard}>
                <img src={post.imageUrl} alt={post.title} className={styles.articleImage} />
                <div className={styles.articleContent}>
                  <div className={styles.articleMeta}>
                    <span className={styles.articleCategory}>{post.category}</span>
                    <span className={styles.articleDate}>
                      <Calendar className={styles.authorIcon} />
                      {new Date(post.publishDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className={styles.articleTitle}>{post.title}</h2>
                  <p className={styles.articleExcerpt}>{post.excerpt}</p>
                  <div className={styles.articleFooter}>
                    <span className={styles.articleAuthor}>
                      <User className={styles.authorIcon} />
                      {post.author}
                    </span>
                    <span className={styles.articleReadTime}>
                      <Clock className={styles.clockIcon} />
                      {post.readTime}
                    </span>
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
