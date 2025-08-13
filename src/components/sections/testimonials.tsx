// src/components/home-ui/testimonials.tsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Zemenay transformed our entire digital infrastructure. Their team's expertise in software development and digital transformation helped us achieve a 40% increase in operational efficiency.",
    name: 'Abebe Kebede',
    role: 'CTO, Ethio Telecom',
    company: 'Ethio Telecom',
    rating: 5,
    avatar: '/src/assets/images/executive_members/Natnael_Alemayehu_Hailu.jpg'
  },
  {
    id: 2,
    quote: "Working with Zemenay was a game-changer for our banking operations. Their secure, scalable solutions have revolutionized how we serve our customers.",
    name: 'Sara Getachew',
    role: 'Head of IT',
    company: 'Commercial Bank of Ethiopia',
    rating: 5,
    avatar: '/src/assets/images/executive_members/Tihitina_Askal.jpg'
  },
  {
    id: 3,
    quote: "The level of professionalism and technical expertise Zemenay brings to the table is unmatched. They delivered our project on time and exceeded all expectations.",
    name: 'Yared Endale',
    role: 'IT Director',
    company: 'Ethiopian Airlines',
    rating: 5,
    avatar: '/src/assets/images/executive_members/Yared_Endale.jpg'
  },
  {
    id: 4,
    quote: "Zemenay's cybersecurity solutions gave us peace of mind. Their comprehensive approach to security has protected our critical infrastructure effectively.",
    name: 'Tihitina Askal',
    role: 'Security Manager',
    company: 'Ethiopian Electric Power',
    rating: 5,
    avatar: '/src/assets/images/executive_members/Tihitina_Askal.webp'
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="group relative p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
        <Quote className="h-8 w-8" />
      </div>
      
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-warning text-warning" />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
        &quot;{testimonial.quote}&quot;
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
          <span className="text-lg font-semibold text-muted-foreground">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          <div className="text-sm text-primary font-medium">{testimonial.company}</div>
        </div>
      </div>
      
      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-darker rounded-b-2xl group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients
            <span className="block gradient-text">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders say about 
            working with Zemenay and the results we&apos;ve delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-darker/10 rounded-2xl p-12 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Project Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience the Zemenay Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses 
              with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-primary hover:bg-primary-darker text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;