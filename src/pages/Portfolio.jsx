import PortfolioCarousel from '../components/PortfolioCarousel';

const portfolioItems = [
  {
    name: 'ShopEasy Mobile',
    category: 'E-commerce Mobile App',
    tech: 'React Native E-commerce App',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'MediCare Pro',
    category: 'Healthcare Management System',
    tech: 'Hospital Management Software',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'SecureBank',
    category: 'Banking Application',
    tech: 'Mobile Flutter Banking Application',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'EnterpriseOne ERP',
    category: 'ERP System Dashboard',
    tech: 'Custom Business Management System',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'FitTrack Pro',
    category: 'Fitness Tracking App',
    tech: 'IoT Fitness Application',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'EduLearn Platform',
    category: 'Education Platform',
    tech: 'LMS with AI Recommendations',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'QuickBites',
    category: 'Food Delivery App',
    tech: 'Food Delivery Solution',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'PropertyFinder',
    category: 'Real Estate Portal',
    tech: 'VR Real Estate Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'CryptoVault',
    category: 'Blockchain Wallet',
    tech: 'Blockchain Digital Wallet',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'FleetTrack Pro',
    category: 'Fleet Management System',
    tech: 'Logistics Management Software',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'SocialPulse Analytics',
    category: 'Social Media Dashboard',
    tech: 'AI-Powered Social Media Tool',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'HomeControl Hub',
    category: 'Smart Home Application',
    tech: 'IoT Smart Home Solution',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  }
];

const servicePackages = [
  {
    title: 'Basic Development',
    originalPrice: '₹5,000',
    service: 'Landing Page',
    features: [
      'Responsive Website Design',
      'Up to 20 Custom Pages',
      'Basic SEO Optimization',
      'Contact Form Integration',
      '1 Month Support'
    ],
    buttonText: 'Start Project',
    popular: false
  },
  {
    title: 'Standard Development',
    originalPrice: '₹15,000',
    service: 'Business Website',
    features: [
      'Responsive Website Design',
      'Up to 50 Custom Pages',
      'Advanced SEO Optimization',
      'E-commerce Integration',
      '3 Months Support',
      'CMS Integration'
    ],
    buttonText: 'Start Project',
    popular: true
  },
  {
    title: 'Premium Development',
    originalPrice: '₹35,000',
    service: 'Full Stack App',
    features: [
      'Custom Web Application',
      'Database Design',
      'API Development',
      'Advanced Security',
      '6 Months Support',
      'Performance Optimization'
    ],
    buttonText: 'Start Project',
    popular: false
  }
];

export default function Portfolio() {
  return (
    <div>
<section className="section portfolio-grid-section">
          <div className="section-header">
            <h2 className="section-title">Our Technology Solutions & Success Stories</h2>
          </div>
          <PortfolioCarousel />
    
      </section>




     

      {/* Services Section with Pricing Cards */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose The Perfect Solution For Your Digital Transformation</h2>
            
          </div>
          
          <div className="services-grid">
            {servicePackages.map((pkg, index) => (
              <div key={index} className={`service-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                <div className="service-header">
                  <h3 className="service-title">{pkg.title}</h3>
                  <div className="service-price">
                    <span className="original-price">{pkg.originalPrice}</span>
                  </div>
                  <div className="service-name">{pkg.service}</div>
                </div>
                
                <ul className="service-features">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                
                <button className="service-cta">{pkg.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      
    </div>
  );
}



