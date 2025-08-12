import { useEffect, useState } from 'react';

const portfolioSlides = [
  {
    id: 1,
    name: 'Modern Lamp Collection',
    description: 'Elegant lighting solutions for modern homes',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
    price: '$299'
  },
  {
    id: 2,
    name: 'Smart Home Hub',
    description: 'Control your home with voice commands',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    price: '$199'
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    description: 'Premium sound quality with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    price: '$399'
  },
  {
    id: 4,
    name: 'Smart Watch Pro',
    description: 'Track your fitness and stay connected',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    price: '$499'
  }
];

export default function PortfolioCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentProduct = portfolioSlides[currentSlide];

  return (
    <section className="product-carousel">
      <div className="carousel-container">
        {/* Navigation Arrows */}
        <button className="nav-arrow nav-left" onClick={prevSlide} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="nav-arrow nav-right" onClick={nextSlide} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Product Display */}
        <div className="product-display">
          <div className="product-image">
            <img src={currentProduct.image} alt={currentProduct.name} />
          </div>
          <div className="product-info">
            <h2 className="product-name">{currentProduct.name}</h2>
            <p className="product-description">{currentProduct.description}</p>
            <div className="product-price">{currentProduct.price}</div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="pagination-dots">
          {portfolioSlides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fab-container">
        <button className="fab fab-whatsapp" aria-label="Contact via WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </button>
        <button className="fab fab-phone" aria-label="Call us">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 5.5C2 4.12 3.12 3 4.5 3h2A2.5 2.5 0 0 1 9 5.5v1A2.5 2.5 0 0 1 6.5 9H6a12.96 12.96 0 0 0 5 5v-.5A2.5 2.5 0 0 1 13.5 11h1A2.5 2.5 0 0 1 17 13.5v2A2.5 2.5 0 0 1 14.5 18h-1C7.71 18 2 12.29 2 5.5Z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
