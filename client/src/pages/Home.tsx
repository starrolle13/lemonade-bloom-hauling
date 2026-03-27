import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Leaf, Truck, CheckCircle, Star, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Premium Eco-Conscious Minimalism
 * - Deep green (#2F6F5E) primary, soft blue (#3A7CA5) secondary
 * - Playfair Display serif for headings, Montserrat sans-serif for body
 * - Ample whitespace, smooth animations, trust-building elements
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowFloatingCTA(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/lemonade-bloom-logo-XSxHwzhhHtzr59EiCZ8ge8.webp"
              alt="Lemonade Bloom Haul Away"
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#before-after" className="text-gray-700 hover:text-primary transition-colors">
              Before & After
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <Button className="bg-primary hover:bg-secondary text-white">
            <a href="#booking">Book Now</a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/hero-junk-removal-nm8SwF7eBWvmTGEsxvDVk4.webp"
          alt="Clean, organized living room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Space, Transformed
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Professional junk removal and hauling services. Same-day appointments available.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-secondary text-white px-8 py-6 text-lg"
          >
            <a href="#booking" className="flex items-center gap-2">
              Book Your Haul Away <ChevronRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We handle all types of junk removal with professionalism and care. From single items to complete home cleanouts.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Junk Removal",
                description: "Remove unwanted items from your home or office quickly and efficiently.",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                description: "We donate, recycle, and dispose responsibly to protect the environment.",
              },
              {
                icon: CheckCircle,
                title: "Same-Day Service",
                description: "Need it done today? We offer same-day appointments in your area.",
              },
              {
                icon: Truck,
                title: "Move-Out Hauling",
                description: "Complete cleanout services for moving, downsizing, or property prep.",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-8 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="before-after" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            See the Transformation
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Real results from real customers. Watch how we transform cluttered spaces into clean, organized havens.
          </p>

          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/before-after-transformation-de9FjQ7eCjQumuD5uhM3K5.webp"
              alt="Before and after transformation"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Thousands of satisfied customers have trusted us with their junk removal needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "Lemonade Bloom made my move-out so easy. Professional, friendly, and incredibly efficient. Highly recommend!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                text: "Same-day service was a lifesaver. They removed everything from my garage in just a few hours. Amazing team!",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                text: "I love that they recycle and donate items. Great service with a conscience. Will definitely use again.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <Card
                key={idx}
                className="p-8 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-primary">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose Lemonade Bloom?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "100%", label: "Eco-Friendly Disposal" },
              { number: "24/7", label: "Booking Available" },
              { number: "$0", label: "Hidden Fees" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Schedule Your Service
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Book your junk removal appointment now. Choose your preferred date and time.
          </p>

          {/* Google Calendar Embed */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <iframe
              src="https://calendar.google.com/calendar/u/0/r/eventedit?text=Junk+Removal+Appointment&dates=&details=Book+your+junk+removal+service+with+Lemonade+Bloom+Haul+Away"
              className="w-full h-96 rounded-lg border-0"
              title="Google Calendar Booking"
            ></iframe>
            <p className="text-center text-gray-600 mt-6 text-sm">
              Or call us directly: <a href="tel:+1234567890" className="text-primary font-bold hover:text-secondary">+1 (234) 567-8900</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us anytime.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+1 (234) 567-8900",
                link: "tel:+1234567890",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "LemonadeBloom@gmail.com",
                link: "mailto:LemonadeBloom@gmail.com",
              },
              {
                icon: MapPin,
                title: "Service Area",
                content: "Local & Surrounding Areas",
                link: "#",
              },
            ].map((contact, idx) => (
              <Card
                key={idx}
                className="p-8 bg-white border-0 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <contact.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{contact.title}</h3>
                <a
                  href={contact.link}
                  className="text-gray-700 hover:text-secondary transition-colors"
                >
                  {contact.content}
                </a>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc1234567890/viewform?embedded=true"
              className="w-full h-96 rounded-lg border-0"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Lemonade Bloom</h4>
              <p className="text-white/80">Professional junk removal and hauling services with an eco-friendly heart.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#services" className="hover:text-white transition-colors">Junk Removal</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Home Cleanouts</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Move-Out Hauling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Same-Day Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>&copy; 2024 Lemonade Bloom Haul Away. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      {showFloatingCTA && (
        <div className="fixed bottom-8 right-8 z-40 animate-bounce">
          <Button
            size="lg"
            className="bg-secondary hover:bg-primary text-white rounded-full shadow-lg"
          >
            <a href="#booking" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Book Now
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
