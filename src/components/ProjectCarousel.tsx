import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectCarouselProps {
  projectName: string;
  imageFiles: string[]; // ['image1.jpg', 'image2.png']
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projectName, imageFiles }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedImages = await Promise.all(
          imageFiles.map(async (file) => {
            const module = await import(
              `../assets/images/projects/${projectName}/${file}`
            );
            return module.default;
          })
        );
        setImages(loadedImages);
      } catch (err) {
        console.error('Error loading images:', err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [projectName, imageFiles]);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (loading) return <div>Loading...</div>;
  if (images.length === 0) return <div>No images found</div>;

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={img}
              alt={`${projectName} - ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={() => setCurrentIndex(p => (p - 1 + images.length) % images.length)}>
            &lt;
          </button>
          <button className="carousel-button next" onClick={() => setCurrentIndex(p => (p + 1) % images.length)}>
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;