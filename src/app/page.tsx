"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Heart, Milk, Snowflake, Sparkles, Star } from 'lucide-react';

const assetMap = [
  // No assets defined in IMAGE MANIFEST, using remote URLs as fallbacks
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      {/* Navigation */}
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Chocolates", id: "feature" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sweet Artisan"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Artisan Chocolates Made with Love"
          description="Handcrafted premium chocolates using the finest ingredients. Every piece is a masterpiece of flavor and craftsmanship."
          tag="Premium Bakery"
          tagIcon={Heart}
          buttons={[
            {
              text: "Shop Now",
              href: "contact"
            },
            {
              text: "Our Story",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/30222481/pexels-photo-30222481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Artisan chocolate bakery workshop with chocolatier at work"
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about">
        <TextAbout
          title="We believe that chocolate is more than just a treat – it's an experience that brings joy to every moment. Our master chocolatiers craft each piece with passion and precision, using time-honored techniques and the finest ingredients from around the world. With 20+ years of chocolate craftsmanship, we have perfected the art of creating extraordinary chocolate experiences."
          buttons={[
            {
              text: "Learn More",
              href: "feature"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
        />
      </div>

      {/* Feature Section */}
      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Our Chocolate Specialties"
          description="Discover our signature chocolate creations, each crafted with unique flavors and premium ingredients"
          tag="Specialties"
          tagIcon={Sparkles}
          features={[
            {
              title: "Dark Chocolate Collection",
              description: "Rich, intense flavors from single-origin cacao beans with notes of fruit and earth",
              icon: Coffee,
              button: {
                text: "Explore",
                href: "contact"
              }
            },
            {
              title: "Milk Chocolate Delights",
              description: "Smooth and creamy with the perfect balance of sweetness and cocoa depth",
              icon: Milk,
              button: {
                text: "Try Now",
                href: "contact"
              }
            },
            {
              title: "White Chocolate Elegance",
              description: "Delicate vanilla notes with subtle sweetness and luxurious texture",
              icon: Snowflake,
              button: {
                text: "Order",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      {/* Testimonial Section */}
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from chocolate lovers who experience our artisan creations"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Emma Thompson",
              role: "Food Blogger",
              company: "Sweet Moments Blog",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8217384/pexels-photo-8217384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "Restaurant Owner",
              company: "Gourmet Bistro",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Sofia Rodriguez",
              role: "Event Planner",
              company: "Elegant Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6516091/pexels-photo-6516091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Chen",
              role: "Corporate Buyer",
              company: "Premium Gifts Co",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7552321/pexels-photo-7552321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Isabella Brown",
              role: "Chocolate Enthusiast",
              company: "Local Food Club",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4177725/pexels-photo-4177725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Place Your Order"
          description="Ready to experience our artisan chocolates? Contact us for custom orders, bulk purchases, or visit our bakery."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "order",
            placeholder: "Tell us about your chocolate needs - special occasions, flavor preferences, quantity...",
            rows: 4,
            required: true
          }}
          buttonText="Send Order Request"
        />
      </div>

      {/* Footer Section */}
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "Dark Chocolate",
                  href: "feature"
                },
                {
                  label: "Milk Chocolate",
                  href: "feature"
                },
                {
                  label: "White Chocolate",
                  href: "feature"
                },
                {
                  label: "Custom Orders",
                  href: "contact"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Reviews",
                  href: "testimonial"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Visit Us",
              items: [
                {
                  label: "Bakery Location",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "contact"
                },
                {
                  label: "Catering",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Sweet Artisan Chocolates"
        />
      </div>
    </ThemeProvider>
  );
}