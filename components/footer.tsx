"use client";

import Link from "next/link";
import { Heart, Facebook, Twitter, Instagram, Shield, Lock, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const trustIndicators = [
  {
    icon: Shield,
    title: "Secure Platform",
    description: "256-bit SSL encryption",
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "GDPR Compliant",
  },
  {
    icon: Award,
    title: "Verified Nonprofit",
    description: "501(c)(3) registered",
  },
];

const links = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Donor Protection", href: "/donor-protection" },
  ],
  resources: [
    { label: "Help Center", href: "/help" },
    { label: "Blog", href: "/blog" },
    { label: "Success Stories", href: "/stories" },
    { label: "Impact Reports", href: "/impact" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-muted/40 border-t">
      <div className="w-full py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trustIndicators.map((indicator) => (
            <div
              key={indicator.title}
              className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 border"
            >
              <div className="p-2 rounded-full bg-primary/10">
                <indicator.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{indicator.title}</h3>
                <p className="text-sm text-muted-foreground">{indicator.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 p-8 rounded-lg bg-primary/5 border text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Join our newsletter to get updates on our impact and latest campaigns
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border bg-background"
            />
            <Button>Subscribe</Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">FundRaiser</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Making a difference through transparent and impactful fundraising.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator />

        <div className="pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FundRaiser. All rights reserved.</p>
          <p className="mt-2">
            Registered 501(c)(3) nonprofit organization. EIN: XX-XXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}