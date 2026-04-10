import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Leaf, Truck, CheckCircle, Star, Phone, Mail, MapPin, Send, ArrowRight, Facebook, Instagram, Twitter, Linkedin, MessageCircle, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

// List of common valid email domains
const VALID_EMAIL_DOMAINS = new Set([
  'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com',
  'icloud.com', 'mail.com', 'protonmail.com', 'zoho.com', 'yandex.com',
  'gmx.com', 'fastmail.com', 'tutanota.com', 'mailbox.org', 'posteo.de',
  'startmail.com', 'disroot.org', 'cock.li', 'riseup.net', 'proton.me',
  // Add common business domains
  'company.com', 'business.com', 'work.com', 'corporate.com',
  // Add common regional domains
  'co.uk', 'co.in', 'com.au', 'ca', 'de', 'fr', 'it', 'es', 'nl', 'be',
  'ch', 'at', 'se', 'no', 'dk', 'fi', 'pl', 'cz', 'ie', 'pt', 'gr',
  'jp', 'cn', 'in', 'br', 'mx', 'ru', 'za', 'nz', 'sg', 'hk', 'kr'
]);

const validateEmailDomain = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;
  
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return false;
  
  // Check if domain has at least one dot
  if (!domain.includes('.')) return false;
  
  // Check against common valid domains or if it's a custom domain with valid TLD
  const tld = domain.split('.').pop();
  if (!tld || tld.length < 2) return false;
  
  // Allow if it's in our valid domains list or has a valid TLD structure
  return VALID_EMAIL_DOMAINS.has(domain) || /^[a-z0-9]+\.[a-z]{2,}$/.test(domain);
};

interface FormspreeError {
  field: string;
  message: string;
}

/**
 * Design Philosophy: Bold Green & Dark Navy Modern Design with Green Accents
 * - Dark navy primary (#1B4D3E), bright green secondary (#22C55E)
 * - Green background sections for modern, elevated aesthetic
 * - Clean, professional layout inspired by service industry leaders
 * - Smooth, seamless animations throughout
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState<number[]>([]);
  const [state, handleSubmit] = useForm("xaqlqywg");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowFloatingCTA(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animate review cards on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          setVisibleReviews((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }
      });
    });

    document.querySelectorAll("[data-review]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);



  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-xl"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 animate-fade-in-up hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/favicon-transparent-nZgrjiSu8ALua9QWFUzxHN.webp" alt="Lemonade Bloom Haul Away" className="w-16 h-16" />
            <span className="font-bold text-lg text-primary">Lemonade Bloom Haul Away</span>
          </button>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#why-choose" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Why Us
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
            <a href="tel:+14049191860" className="flex items-center gap-2 text-white">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/hero-junk-hauling-mobile-B6KrNPPnNCCZ3QRa83BPaa.webp')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-white max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
            Your Space, Transformed
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md text-secondary">
            Professional junk removal and hauling services. Same-day appointments available.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-green-500 text-white px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse-glow"
            >
              <a href="#contact" className="flex items-center gap-2 text-white">
                Book Now <ChevronRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              <a href="#services" className="flex items-center gap-2 text-white">
                Learn More <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Quote Process Section - Green Background */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-12 drop-shadow-lg">Get Your Quote in 3 Simple Steps</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Text Us a Photo",
                description: "Send a photo of your haul via text to (404) 919-1860. Include details about what needs to be removed.",
                icon: MessageCircle,
              },
              {
                step: "2",
                title: "Get Instant Quote",
                description: "We'll review your photo and send you a quote within 2 hours. No hidden fees, transparent pricing.",
                icon: FileText,
              },
              {
                step: "3",
                title: "Book & Done",
                description: "Confirm your booking and we'll handle the rest. Fast, professional junk removal service.",
                icon: CheckCircle,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card
                  key={idx}
                  className="bg-white/10 border-white/20 text-white p-8 rounded-xl hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
                  <p className="text-white/90 text-center">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-12 drop-shadow-lg">Why Choose Lemonade Bloom</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            {[
              { stat: "500+", label: "Hauls Completed" },
              { stat: "95%", label: "On-Time Rate" },
              { stat: "100%", label: "Eco-Friendly Disposal" },
              { stat: "24/7", label: "Customer Support" },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-white/10 border-white/20 p-6 text-center rounded-xl hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-3xl font-bold mb-2">{item.stat}</div>
                <p className="text-white/90">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Our Guarantee</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide custom quotes for every project. No hidden fees, no surprises—just honest pricing based on your specific needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: "Free Quote",
                description: "Text us a photo of your junk and get a custom quote within 2 hours. No obligation.",
              },
              {
                icon: CheckCircle,
                title: "Transparent Pricing",
                description: "What you see is what you pay. We never add surprise fees or charges after the job.",
              },
              {
                icon: Truck,
                title: "Professional Service",
                description: "Experienced team handles your junk removal with care. Same-day appointments available.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all hover:border-secondary duration-300 animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-gray-600 flex-grow">{item.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">Ready to get started? Text us your photo or book a consultation.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-secondary hover:bg-green-500 text-white px-8 py-3 text-lg font-bold shadow-lg">
                <a href="tel:+14049191860" className="flex items-center gap-2 text-white">
                  <Phone className="w-5 h-5" />
                  Text (404) 919-1860
                </a>
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-bold shadow-lg">
                <a href="#contact" className="flex items-center gap-2 text-white">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Before & After Gallery</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See the transformations we've made for our customers. Professional junk removal that makes a difference.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Garage Transformation",
                before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/before-after-garage-1-before-dQGxCrRyEvDYns4JkuyGrf.webp",
                after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/before-after-garage-1-after-csskTMJHDzeBxYj5pdZGEC.webp",
              },
              {
                title: "Basement Cleanout",
                before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/before-after-basement-before-Yd6rkYPPvLKTJKfLVVnJwu.webp",
                after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/basement-cleanout-after-2qKyNnZLvDJqxBzrYzV9Uh.webp",
              },
              {
                title: "Yard Cleanup",
                before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/before-after-yard-before-Yd6rkYPPvLKTJKfLVVnJwu.webp",
                after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/before-after-yard-after-csskTMJHDzeBxYj5pdZGEC.webp",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div>
                    <p className="text-sm font-bold text-gray-600 mb-2">Before</p>
                    <img src={project.before} alt={`${project.title} Before`} className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-600 mb-2">After</p>
                    <img src={project.after} alt={`${project.title} After`} className="w-full h-48 object-cover rounded-lg" />
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <h3 className="font-bold text-lg text-primary">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">What Our Customers Say</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                text: "Lemonade Bloom made my garage cleanup so easy! Professional, fast, and affordable. Highly recommend!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                text: "Best junk removal service I've used. They showed up on time, worked efficiently, and left everything clean.",
                rating: 5,
              },
              {
                name: "Jessica Martinez",
                text: "Amazing service! They handled my entire basement cleanout with care. Will definitely use them again.",
                rating: 5,
              },
            ].map((review, idx) => (
              <Card
                key={idx}
                data-review
                data-index={idx}
                className={`p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  visibleReviews.includes(idx) ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-primary">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Service Section */}
      <section id="booking" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Book Your Service</h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Pick your preferred date and time. We'll confirm your booking within 24 hours.
          </p>

          <div className="max-w-2xl mx-auto bg-white/10 border-2 border-white/20 rounded-2xl p-8 backdrop-blur-sm animate-fade-in-up">
            <iframe
              src="https://calendly.com/lemonadeblooms/junkremoval?hide_event_type=1&hide_gdpr_banner=1"
              width="100%"
              height="600"
              frameBorder="0"
              title="Book Your Junk Removal Service"
              style={{ border: 'none', borderRadius: '12px' }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Our Service Area</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We serve Fairburn, GA and surrounding areas within a 50-mile radius. Fast, professional junk removal for your neighborhood.
          </p>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 animate-fade-in-up">
            <iframe
              width="100%"
              height="500"
              frameBorder={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.8447629463316!2d-84.6089!3d33.5627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50f9b9b9b9b9b%3A0x9b9b9b9b9b9b9b9b!2sFairburn%2C%20GA%2030213!5e0!3m2!1sen!2sus!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {[
              { city: "Fairburn", miles: "Center" },
              { city: "Atlanta", miles: "20 miles" },
              { city: "Peachtree City", miles: "25 miles" },
            ].map((location, idx) => (
              <Card
                key={idx}
                className="p-6 border-2 border-gray-200 text-center hover:border-secondary transition-all hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-bold text-lg text-primary mb-1">{location.city}</h3>
                <p className="text-gray-600">{location.miles}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors"
                  placeholder="(404) 919-1860"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your junk removal needs..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-secondary hover:bg-green-500 text-white font-bold py-3 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </span>
              </Button>

              {state.succeeded && (
                <div className="p-4 bg-green-100 border-2 border-green-500 rounded-lg text-green-700 font-bold text-center">
                  Thanks for reaching out! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Phone, label: "Call Us", value: "(404) 919-1860" },
              { icon: Mail, label: "Email Us", value: "lemonadeblooms@gmail.com" },
              { icon: MapPin, label: "Service Area", value: "Fairburn, GA & 50 mi radius" },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <Card
                  key={idx}
                  className="p-6 border-2 border-gray-200 text-center hover:border-secondary transition-all hover:shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <p className="text-sm font-bold text-gray-600 mb-1">{contact.label}</p>
                  <p className="font-bold text-primary">{contact.value}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/favicon-transparent-nZgrjiSu8ALua9QWFUzxHN.webp" alt="Lemonade Bloom Haul Away" className="w-16 h-16" />
                <h4 className="font-bold text-lg">Lemonade Bloom Haul Away</h4>
              </div>
              <p className="text-white/80">Professional junk removal and hauling services for your home and business.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white hover:text-secondary transition-colors">Services</a></li>
                <li><a href="#why-choose" className="text-white hover:text-secondary transition-colors">Why Us</a></li>
                <li><a href="#testimonials" className="text-white hover:text-secondary transition-colors">Reviews</a></li>
                <li><a href="#contact" className="text-white hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-secondary transition-colors">Residential Junk Removal</a></li>
                <li><a href="#" className="text-white hover:text-secondary transition-colors">Commercial Cleanout</a></li>
                <li><a href="#" className="text-white hover:text-secondary transition-colors">Estate Cleanup</a></li>
                <li><a href="#" className="text-white hover:text-secondary transition-colors">Eco-Friendly Disposal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <p className="text-white/80 mb-2">Phone: (404) 919-1860</p>
              <p className="text-white/80 mb-4">Email: lemonadeblooms@gmail.com</p>
              <p className="text-white/80">Service Area: Fairburn, GA & 50 mile radius</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-white/80">
              © 2026 Lemonade Bloom Haul Away. All rights reserved. | Professional Junk Removal Services
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      {showFloatingCTA && (
        <button
          onClick={() => window.location.href = "tel:+14049191860"}
          className="fixed bottom-8 right-8 bg-secondary hover:bg-green-500 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all z-40 animate-pulse-glow"
        >
          <Phone className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
