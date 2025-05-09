import React from 'react';
import { Diamond, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import MaxWidthWrapper from '../MaxWidth';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' }
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram }
];

const contactInfo = [
  { icon: Mail, text: 'contact@gmail.com' },
  { icon: Phone, text: '+91 123456789' },
  { icon: MapPin, text: 'New Delhi' }
];

export function Footer() {
  return (
    <footer className="border-t border-electric-blue/10 bg-blue-950">
    <MaxWidthWrapper maxWidth='2xl'>

      <div className="mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Diamond className="w-6 h-6 text-electric-blue transform rotate-45" />
              <span className="text-2xl font-bold tracking-tight text-white">
              logo
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing sales.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-dark-card border border-neon-green/10 flex items-center justify-center hover:border-neon-green/30 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-neon-green transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <info.icon className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-400">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latestsales insights.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white border border-electric-blue/20 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none transition-colors text-neutral-dark"
              />
              <button className="w-full px-6 py-3 bg-electric-blue text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-neon-green/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 FinCon. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-neon-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
    </footer>

  );
}