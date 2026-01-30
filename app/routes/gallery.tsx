import type { Route } from "./+types/gallery";
import { useState } from "react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import styles from "./gallery.module.css";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gallery - HiCross Seeds" },
    { name: "description", content: "Explore our agricultural fields and seed processing facilities." },
  ];
}

const images = [
  "/gallery/HiCrossBridSeeds_(1)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(2)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(7)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(12)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(4)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(5)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(6)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(10)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(13)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(3)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(8)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(9)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(11)_1769792745654.jpg",
  "/gallery/HiCrossBridSeeds_(14)_1769792745654.jpg",
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Gallery</h1>
            <p className={styles.heroSubtitle}>
              A glimpse into our fields, research, and processing excellence
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.grid}>
            {images.map((src, index) => (
              <div key={index} className={styles.thumbnailWrapper} onClick={() => openLightbox(index)}>
                <img src={src} alt={`Gallery image ${index + 1}`} className={styles.thumbnail} />
                <div className={styles.overlay}>
                  <span>View Full Size</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedImageIndex !== null && (
          <div className={styles.lightbox} onClick={closeLightbox}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              <X size={32} />
            </button>
            <button className={styles.navButtonPrev} onClick={prevImage}>
              <ChevronLeft size={48} />
            </button>
            <div className={styles.lightboxContent}>
              <img src={images[selectedImageIndex]} alt="Full size" className={styles.fullImage} />
            </div>
            <button className={styles.navButtonNext} onClick={nextImage}>
              <ChevronRight size={48} />
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
