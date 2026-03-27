import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Leaf, Truck, CheckCircle, Star, Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Bold Green & Dark Navy Modern Design
 * - Dark navy primary (#1B4D3E), bright green secondary (#22C55E)
 * - Clean, professional layout inspired by service industry leaders
 * - Smooth, seamless animations throughout
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [visibleReviews, setVisibleReviews] = useState<number[]>([]);

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      // Using Formspree for email handling (update with your form ID)
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact from Lemonade Bloom Haul Away",
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 3000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

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
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
            <a href="tel:+14049191860" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/hero-junk-removal-professional-mAiVtbLsiMQJhPVjveaMVZ.webp"
          alt="Professional junk removal service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 text-white max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Your Space, Transformed
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
            Professional junk removal and hauling services. Same-day appointments available.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-green-500 text-white px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse-glow"
            >
              <a href="tel:+14049191860" className="flex items-center gap-2">
                Book Now <ChevronRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
            >
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up">
            We're committed to providing the best junk removal experience with professionalism and care.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "100+", label: "Happy Customers", icon: "👥" },
              { number: "95%", label: "Satisfaction Rate", icon: "⭐" },
              { number: "8+", label: "Years Experience", icon: "🏆" },
              { number: "10+", label: "Service Areas", icon: "🗺️" },
            ].map((stat, idx) => (
              <Card
                key={idx}
                className="p-8 bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-secondary transition-all hover:scale-105 hover:-translate-y-2 duration-300 animate-fade-in-up text-center"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up">
            We handle all types of junk removal with professionalism and care.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Cleaning",
                description: "Home cleanouts, garage clearing, and basement junk removal.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/services-residential-ajzazJ3Uhk3RSpXL3vmYGN.webp",
              },
              {
                title: "Office Cleaning",
                description: "Commercial space cleanup and office junk removal services.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/services-commercial-9j5J38kHf6eEZof9ogNKVF.webp",
              },
              {
                title: "Junk Hauling",
                description: "Large item removal and complete property cleanouts.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/before-after-junk-removal-CKdhaYMV63UTvXCtgyS94y.webp",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="overflow-hidden bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-2 duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <a href="tel:+14049191860" className="flex items-center justify-center gap-2 w-full">
                      Book Service <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            See the Transformation
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up">
            Real results from real customers. Watch how we transform cluttered spaces.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow animate-scale-in">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/before-after-junk-removal-CKdhaYMV63UTvXCtgyS94y.webp"
              alt="Before and after transformation"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            Our Team
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up">
            Professional, friendly, and dedicated to your satisfaction.
          </p>

          <div className="flex justify-center">
            <Card className="p-8 bg-white border-2 border-gray-200 shadow-lg max-w-2xl animate-scale-in">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/team-junk-removal-UEfcVv9QbmvUjvRCBi3NJD.webp"
                alt="Professional team"
                className="w-full rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary text-center mb-2">Meet Our Team</h3>
              <p className="text-gray-600 text-center">
                Our experienced professionals are trained to handle all types of junk removal with care and efficiency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            Client Reviews
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up">
            See what our satisfied customers have to say about our services.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "Best cleaning service ever! Professional, friendly, and incredibly efficient. Highly recommend!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                text: "Same-day service was a lifesaver. They removed everything from my garage in just a few hours. Amazing!",
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
                data-review
                data-index={idx}
                className={`p-8 bg-white border-l-4 border-secondary shadow-lg hover:shadow-xl transition-all ${
                  visibleReviews.includes(idx)
                    ? "animate-slide-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary"
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            Pricing Plans
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up">
            Transparent pricing with no hidden fees. Choose the plan that fits your needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$99",
                features: ["Single Room Cleanout", "Same-Day Service", "Eco-Friendly Disposal"],
              },
              {
                name: "Standard",
                price: "$199",
                features: ["Multi-Room Cleanout", "Priority Scheduling", "Recycling & Donation", "Free Quote"],
                highlighted: true,
              },
              {
                name: "Premium",
                price: "$299",
                features: ["Full Property Cleanout", "24/7 Support", "Complete Cleanup", "Guaranteed Satisfaction"],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-2 duration-300 animate-fade-in-up ${
                  plan.highlighted
                    ? "bg-primary text-white border-secondary"
                    : "bg-white text-gray-900 border-gray-200"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-primary"}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold mb-6 ${plan.highlighted ? "text-green-300" : "text-secondary"}`}>
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className={`w-5 h-5 ${plan.highlighted ? "text-green-300" : "text-secondary"}`} />
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
                  <a href="tel:+14049191860" className="w-full">
                    Book Now
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up">
            Have questions? Send us a message and we'll get back to you within 24 hours.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "(404) 919-1860",
                link: "tel:+14049191860",
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
                className="p-8 bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-primary p-4 rounded-lg w-fit mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 text-center">{contact.title}</h3>
                <a
                  href={contact.link}
                  className="text-gray-700 hover:text-secondary transition-colors text-center block font-semibold"
                >
                  {contact.content}
                </a>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-200 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors h-32 resize-none"
                  placeholder="Tell us about your junk removal needs..."
                ></textarea>
              </div>
              <Button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-lg transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5 mr-2" />
                {formStatus === "loading" ? "Sending..." : "Send Message"}
              </Button>
              {formStatus === "success" && (
                <p className="text-green-600 font-semibold text-center animate-fade-in-up">Message sent successfully!</p>
              )}
              {formStatus === "error" && (
                <p className="text-red-600 font-semibold text-center animate-fade-in-up">Error sending message. Please try calling us instead.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-secondary">Lemonade Bloom</h4>
              <p className="text-gray-100">Professional junk removal and hauling services with an eco-friendly heart.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-secondary">Services</h4>
              <ul className="space-y-2 text-gray-100">
                <li><a href="#services" className="hover:text-white transition-colors">Junk Removal</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Home Cleanouts</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Move-Out Hauling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Same-Day Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-secondary">Company</h4>
              <ul className="space-y-2 text-gray-100">
                <li><a href="#why-choose" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-secondary">Quick Links</h4>
              <ul className="space-y-2 text-gray-100">
                <li><a href="tel:+14049191860" className="hover:text-white transition-colors">(404) 919-1860</a></li>
                <li><a href="mailto:LemonadeBloom@gmail.com" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 pt-8 text-center text-gray-100">
            <p>&copy; 2024 Lemonade Bloom Haul Away. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      {showFloatingCTA && (
        <div className="fixed bottom-8 right-8 z-40 animate-float">
          <Button
            size="lg"
            className="bg-secondary hover:bg-green-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all font-bold text-lg"
          >
            <a href="tel:+14049191860" className="flex items-center gap-2">
              <Phone className="w-6 h-6" />
              Call Now
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
