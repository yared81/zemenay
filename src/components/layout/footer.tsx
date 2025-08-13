import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Updates', href: '/news' },
    ],
    services: [
      { name: 'Software Development', href: '/services/software-development' },
      { name: 'Digital Transformation', href: '/services/digital-transformation' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Cloud Services', href: '/services/cloud-services' },
      { name: 'Data Analytics', href: '/services/data-analytics' },
      { name: 'Mobile Solutions', href: '/services/mobile-solutions' },
    ],
    resources: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'GitHub', href: '#', icon: Github },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Zemenay
              </span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Empowering Ethiopia's digital future through innovative technology solutions, 
              software development, and IT consulting services that drive growth and transformation.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-slate-400 hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="font-medium text-white">info@zemenay.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-600/20 rounded-xl text-green-400">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="font-medium text-white">+251 911 123 456</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-600/20 rounded-xl text-purple-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Address</p>
                <p className="font-medium text-white">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-sm text-slate-400">
                © {currentYear} Zemenay. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer