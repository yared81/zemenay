// Navigation Constants
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Events', href: '/events' },
  { label: 'Games', href: '/games' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
  { label: 'Pricing', href: '/pricing' },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Careers', href: '/get-involved' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Software Development', href: '/services#software' },
    { label: 'Digital Transformation', href: '/services#digital' },
    { label: 'Cybersecurity', href: '/services#security' },
    { label: 'Data Analytics', href: '/services#analytics' },
  ],
  resources: [
    { label: 'Blog', href: '/news' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Support', href: '/support' },
    { label: 'API Reference', href: '/api' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
} as const;

// Contact Information
export const CONTACT_INFO = {
  email: 'info@zemenay.com',
  phone: '+251 911 123 456',
  address: 'Bole, Addis Ababa, Ethiopia',
  businessHours: 'Monday - Friday: 8:00 AM - 6:00 PM',
} as const;
