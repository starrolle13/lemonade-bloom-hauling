import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Leaf, Truck, CheckCircle, Star, Phone, Mail, MapPin, Send, ArrowRight, Facebook, Instagram, Twitter, Linkedin, MessageCircle, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

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
          <div className="flex items-center gap-2 animate-fade-in-up">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg text-primary">Lemonade Bloom</span>
          </div>
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
          {/* Social Media Icons */}
          <div className="flex gap-3 mr-4">
            <a href="#facebook" className="text-secondary hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#instagram" className="text-secondary hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#twitter" className="text-secondary hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#linkedin" className="text-secondary hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/hero-junk-hauling-black-woman-csa2kyoviCQkocpzevPqQB.webp')`,
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
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{item.step}</h3>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-white/90">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We handle all types of junk removal and hauling needs with professional care and eco-friendly disposal.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Residential Haul",
                description: "Home cleanouts, garage junk removal, basement decluttering, and more.",
                icon: Truck,
              },
              {
                title: "Commercial Haul",
                description: "Office cleanouts, construction debris removal, and business waste management.",
                icon: Leaf,
              },
              {
                title: "Same-Day Service",
                description: "Need it gone today? We offer same-day junk removal appointments.",
                icon: CheckCircle,
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-secondary transition-all hover:scale-105 hover:-translate-y-2 duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Green Background */}
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Simple Pricing</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that fits your needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Small Haul",
                price: "$99",
                features: ["Small Haul Cleanout", "Same-Day Service", "Eco-Friendly Disposal"],
              },
              {
                name: "Medium Haul",
                price: "$199",
                features: ["Medium Junk Removal", "Priority Scheduling", "Recycling & Donation", "Free Quote"],
                highlighted: true,
              },
              {
                name: "Large Haul",
                price: "$299",
                features: ["Large Property Cleanout", "24/7 Support", "Complete Cleanup", "Guaranteed Satisfaction"],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-2 duration-300 animate-fade-in-up flex flex-col ${
                  plan.highlighted
                    ? "bg-primary text-white border-secondary"
                    : "bg-white text-gray-900 border-gray-200"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? "text-white" : "text-primary"
                }`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold mb-6 ${
                  plan.highlighted ? "text-green-300" : "text-secondary"
                }`}>
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className={`w-5 h-5 ${
                        plan.highlighted ? "text-green-300" : "text-secondary"
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-white text-primary hover:bg-gray-100"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  <a href="#contact" className={`w-full ${
                    plan.highlighted ? "text-primary" : "text-white"
                  }`}>
                    Book Now
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Customer Reviews</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                text: "Best junk removal service I've used! Professional, fast, and affordable.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                text: "They removed everything from my garage in just 2 hours. Highly recommend!",
                rating: 5,
              },
              {
                name: "Jessica Williams",
                text: "Excellent customer service and they recycled most of my items. Thank you!",
                rating: 5,
              },
            ].map((review, idx) => (
              <Card
                key={idx}
                data-review
                data-index={idx}
                className={`p-8 border-2 border-gray-200 shadow-lg rounded-xl transition-all duration-500 ${
                  visibleReviews.includes(idx)
                    ? "animate-slide-up opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-primary">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to get your space cleared? Contact us today or text a photo for a quick quote.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "(404) 919-1860",
                link: "tel:+14049191860",
              },
              {
                icon: MessageCircle,
                title: "Text for Quote",
                content: "(404) 919-1860",
                link: "sms:+14049191860",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "lemonadeblooms@gmail.com",
                link: "mailto:lemonadeblooms@gmail.com",
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-secondary transition-all text-center rounded-xl animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{contact.title}</h3>
                  <a
                    href={contact.link}
                    className="text-gray-700 hover:text-secondary transition-colors text-center block font-semibold break-all"
                  >
                    {contact.content}
                  </a>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-200 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-primary mb-6">Book Your Service</h3>
            {state.succeeded ? (
              <div className="text-center py-8">
                <p className="text-green-600 font-bold text-lg mb-4">✓ Message sent successfully!</p>
                <p className="text-gray-600">We'll contact you shortly to confirm your booking.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Service Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors h-32 resize-none"
                    placeholder="Describe your junk removal needs (e.g., small haul, medium haul, large haul)..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-lg transition-all disabled:opacity-50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Lemonade Bloom</h4>
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
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="tel:+14049191860" className="text-white hover:text-secondary transition-colors">(404) 919-1860</a></li>
                <li><a href="mailto:lemonadeblooms@gmail.com" className="text-white hover:text-secondary transition-colors">lemonadeblooms@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#facebook" className="text-white hover:text-secondary transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#instagram" className="text-white hover:text-secondary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#twitter" className="text-white hover:text-secondary transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#linkedin" className="text-white hover:text-secondary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>&copy; 2026 Lemonade Bloom Hauling. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      {showFloatingCTA && (
        <div className="fixed bottom-8 right-8 z-40 animate-fade-in-up">
          <Button className="bg-secondary hover:bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all animate-pulse-glow">
            <a href="#contact" className="flex items-center gap-2 text-white">
              <MessageCircle className="w-5 h-5" />
              Book Now
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
