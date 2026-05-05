import React from 'react';
import './Services.css';

const servicesData = [
  {
    icon: '🍽️',
    title: 'Quality Food',
    desc: 'Fresh and hygienic food'
  },
  {
    icon: '🚚',
    title: 'Fast Delivery',
    desc: 'Quick doorstep delivery'
  },
  {
    icon: '💰',
    title: 'Affordable Price',
    desc: 'Best price guaranteed'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">
          {servicesData.map((item, index) => (
            <div key={index} className="service-card">
              <span className="icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;