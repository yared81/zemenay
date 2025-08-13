import React from 'react';
import HeroSection from '@/components/sections/hero';
import ServicesOverview from '@/components/sections/services-overview';
import ClientShowcase from '@/components/sections/clients';
import Testimonials from '@/components/sections/testimonials';
import NewsHighlights from '@/components/sections/news-highlights';
import PartnerLogos from '@/components/sections/partner-logos';

// Mock Data for Tech Company News
export const mockNewsItems = [
	{
		id: 1,
		slug: 'zemenay-launches-ai-powered-analytics-platform',
		title: 'Zemenay Launches AI-Powered Analytics Platform',
		date: 'December 15, 2024',
		excerpt:
			'Revolutionary business intelligence platform helps Ethiopian companies make data-driven decisions...',
		imageUrl: '/assets/images/events/cs_championship.webp',
		category: 'Product Launch',
    content: `
      <p>Zemenay is proud to announce the launch of our revolutionary AI-powered analytics platform, designed specifically for Ethiopian businesses looking to harness the power of their data.</p>
      <p>This cutting-edge platform combines advanced machine learning algorithms with intuitive business intelligence tools, enabling companies to make data-driven decisions that drive growth and efficiency.</p>
      <h2>Key Features:</h2>
      <ul>
        <li><strong>AI-Powered Insights:</strong> Automated pattern recognition and predictive analytics</li>
        <li><strong>Real-time Dashboards:</strong> Live monitoring of key business metrics</li>
        <li><strong>Custom Reports:</strong> Tailored analytics for specific business needs</li>
        <li><strong>Mobile Access:</strong> Full functionality on any device</li>
      </ul>
      <p>Early adopters are already seeing impressive results, with an average 35% improvement in decision-making speed and 28% increase in operational efficiency.</p>
      <p>For more information and to schedule a demo, please visit our <a href="/services" class="text-primary hover:underline">Services page</a>.</p>
    `,
	},
	{
		id: 2,
		slug: 'zemenay-partners-with-ethiopian-universities',
		title: 'Zemenay Partners with Ethiopian Universities for Tech Education',
		date: 'December 10, 2024',
		excerpt:
			'Strategic partnership aims to bridge the digital skills gap and prepare students for the future of work...',
		imageUrl: '/assets/images/events/EA_Sport_FC_24_championship.webp',
		category: 'Partnership',
    content: `
      <p>Zemenay has announced strategic partnerships with leading Ethiopian universities to enhance technology education and prepare students for the digital economy.</p>
      <p>These partnerships will provide students with access to cutting-edge technology, real-world project experience, and mentorship from industry professionals.</p>
      <h3>Partnership Benefits:</h3>
      <p>Students will gain hands-on experience with modern development tools, cloud platforms, and emerging technologies like AI and blockchain.</p>
      <h3>Future Impact:</h3>
      <p>This initiative aims to create a pipeline of skilled tech professionals who can contribute to Ethiopia's digital transformation and economic growth.</p>
      <p>Read more about our commitment to education and community development.</p>
    `,
	},
	{
		id: 3,
		slug: 'zemenay-expands-cybersecurity-services',
		title: 'Zemenay Expands Cybersecurity Services Portfolio',
		date: 'December 5, 2024',
		excerpt:
			'New comprehensive security solutions address growing cyber threats in the digital landscape...',
		imageUrl: '/assets/images/events/mobile_legend_championship.webp',
		category: 'Service Expansion',
    content: `
      <p>Zemenay is expanding its cybersecurity services portfolio to address the growing need for comprehensive digital security solutions in Ethiopia.</p>
      <p>Our new offerings include advanced threat detection, incident response, security training, and compliance management services.</p>
      <p>The expanded portfolio covers:</p>
      <ul>
        <li>Advanced Threat Detection & Response</li>
        <li>Security Architecture Design</li>
        <li>Compliance & Risk Management</li>
        <li>Security Awareness Training</li>
        <li>Penetration Testing & Audits</li>
      </ul>
      <p>With cyber threats on the rise globally, these services will help Ethiopian businesses protect their digital assets and maintain customer trust.</p>
      <p>Contact us to learn more about our comprehensive cybersecurity solutions.</p>
    `,
	},
];
export type NewsItemType = {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  content: string;
};

// Mock Data for Partner Logos
const mockPartnerLogos = [
	{
		id: 1,
		name: 'Efuye Gela',
		logoUrl: '/assets/images/partners/efuye_gela.png',
	},
	{
		id: 2,
		name: 'Chewata Awaqi',
		logoUrl: '/assets/images/partners/chewata_awaqi.png',
	},
	{
		id: 3,
		name: 'Busara',
		logoUrl: '/assets/images/partners/busara.webp',
	},
	{
		id: 4,
		name: 'Ethio Telecom',
		logoUrl: '/assets/images/partners/efuye_gela.png',
	},
	{
		id: 5,
		name: 'Commercial Bank of Ethiopia',
		logoUrl: '/assets/images/partners/chewata_awaqi.png',
	},
	{
		id: 6,
		name: 'Ethiopian Airlines',
		logoUrl: '/assets/images/partners/busara.webp',
	},
];
export type PartnerLogoType = (typeof mockPartnerLogos)[0];

const HomePage = () => {
	return (
		<main className="flex-grow">
			<HeroSection />
			<ServicesOverview />
			<ClientShowcase />
			<Testimonials />
			<NewsHighlights newsItems={mockNewsItems} />
			<PartnerLogos logos={mockPartnerLogos} />
		</main>
	);
};

export default HomePage;