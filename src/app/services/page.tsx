import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Shield, Database, Smartphone, Cloud, Zap, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      longDescription: 'We build scalable, secure, and high-performance software applications that drive business growth. From web applications to enterprise systems, our development team delivers solutions that exceed expectations.',
      features: [
        'Web Application Development',
        'Desktop Software Solutions',
        'API Development & Integration',
        'Database Design & Management',
        'Microservices Architecture',
        'Legacy System Modernization'
      ],
      technologies: ['React', 'Node.js', 'Python', '.NET', 'Java', 'PostgreSQL', 'MongoDB'],
      process: [
        'Requirements Analysis',
        'System Design',
        'Development & Testing',
        'Deployment',
        'Training & Support'
      ]
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      longDescription: 'Transform your business operations with cutting-edge digital solutions. We help organizations modernize their processes, systems, and customer experiences to stay competitive in the digital age.',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'System Integration',
        'Change Management',
        'Digital Strategy Consulting',
        'Performance Monitoring'
      ],
      technologies: ['RPA', 'BPM Tools', 'API Integration', 'Cloud Platforms', 'Analytics'],
      process: [
        'Digital Assessment',
        'Strategy Development',
        'Implementation Planning',
        'Execution & Monitoring',
        'Continuous Improvement'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      longDescription: 'Protect your business from evolving cyber threats with our comprehensive security services. We implement robust security measures and provide ongoing monitoring to ensure your systems remain secure.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Security Architecture Design',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ],
      technologies: ['SIEM', 'EDR', 'Firewalls', 'Encryption', 'IAM', 'Compliance Tools'],
      process: [
        'Security Assessment',
        'Vulnerability Analysis',
        'Security Implementation',
        'Monitoring Setup',
        'Ongoing Support'
      ]
    },
    {
      icon: Database,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable business insights',
      longDescription: 'Unlock the power of your data with advanced analytics and business intelligence solutions. We help you make data-driven decisions that drive growth and operational efficiency.',
      features: [
        'Data Analytics & Reporting',
        'Business Intelligence Dashboards',
        'Predictive Analytics',
        'Data Warehousing',
        'Machine Learning Models',
        'Real-time Analytics'
      ],
      technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL', 'AWS Analytics', 'Azure ML'],
      process: [
        'Data Assessment',
        'Architecture Design',
        'Data Processing',
        'Model Development',
        'Deployment & Training'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications',
      longDescription: 'Engage your customers with powerful mobile applications that deliver exceptional user experiences. We develop both native and cross-platform solutions for iOS and Android.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Mobile App Testing',
        'Maintenance & Updates'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Firebase'],
      process: [
        'Requirements Gathering',
        'UI/UX Design',
        'Development',
        'Testing & QA',
        'App Store Submission',
        'Post-launch Support'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and managed services',
      longDescription: 'Leverage the power of cloud computing to scale your business operations efficiently. We provide comprehensive cloud solutions including migration, optimization, and ongoing management.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'DevOps Implementation',
        'Cost Optimization',
        'Security & Compliance',
        '24/7 Monitoring'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      process: [
        'Cloud Assessment',
        'Architecture Design',
        'Migration Planning',
        'Implementation',
        'Optimization'
      ]
    }
  ];

  const stats = [
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Code, value: '500+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Zap, value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Code className="h-4 w-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Comprehensive Tech
            <span className="block gradient-text mt-2">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We deliver end-to-end technology solutions that drive innovation, 
            efficiency, and growth for businesses across Ethiopia and beyond.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-xl text-primary w-fit mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of technology services designed to meet 
              all your digital transformation needs.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-6">
                    <service.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{service.title}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-darker text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-card p-8 rounded-2xl border border-border/50">
                    <h4 className="text-xl font-semibold text-foreground mb-6">Our Process</h4>
                    <div className="space-y-4">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                            {stepIndex + 1}
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-primary-darker/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-primary hover:bg-primary-darker text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;