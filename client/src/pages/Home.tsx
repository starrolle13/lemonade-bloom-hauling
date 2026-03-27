import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Leaf, Truck, CheckCircle, Star, Phone, Mail, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Bold Blue & Gold Modern Design
 * - Deep navy blue (#1E3A8A) primary, bright blue (#3B82F6) secondary
 * - Gold (#F59E0B) accent for premium feel
 * - Dynamic animations and visual effects for engagement
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowFloatingCTA(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      // Send email via FormSubmit.co (free service that sends to your email)
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
            ? "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 animate-fade-in-up">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/lemonade-bloom-logo-XSxHwzhhHtzr59EiCZ8ge8.webp"
              alt="Lemonade Bloom Haul Away"
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#before-after" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Before & After
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>
          <Button className="bg-primary hover:bg-secondary text-white shadow-lg hover:shadow-xl transition-all">
            <a href="#booking" className="flex items-center gap-2">
              Book Now
            </a>
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/40"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Your Space, Transformed
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
            Professional junk removal and hauling services. Same-day appointments available.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-yellow-500 text-primary px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all animate-pulse-glow"
          >
            <a href="#booking" className="flex items-center gap-2">
              Book Your Haul Away <ChevronRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up">
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
                className="p-8 bg-white border-2 border-secondary shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-2 duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-lg w-fit mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="before-after" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            See the Transformation
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up">
            Real results from real customers. Watch how we transform cluttered spaces into clean, organized havens.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow animate-scale-in">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663439414161/AwKDmHFk4xyRYJ3UhPwEnr/before-after-transformation-de9FjQ7eCjQumuD5uhM3K5.webp"
              alt="Before and after transformation"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto animate-fade-in-up">
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
                className="p-8 bg-white border-l-4 border-accent shadow-lg hover:shadow-xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
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
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Why Choose Lemonade Bloom?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "100%", label: "Eco-Friendly Disposal" },
              { number: "24/7", label: "Booking Available" },
              { number: "$0", label: "Hidden Fees" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl font-bold mb-2 text-accent">{stat.number}</div>
                <p className="text-lg font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
            Schedule Your Service
          </h2>
          <p className="text-center text-gray-600 mb-12 animate-fade-in-up">
            Call us now or book your appointment online. We're ready to help!
          </p>

          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl animate-scale-in">
            <div className="text-center mb-8">
              <Phone className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2">Call Now</h3>
              <a
                href="tel:+14049191860"
                className="text-4xl font-bold text-accent hover:text-yellow-300 transition-colors"
              >
                (404) 919-1860
              </a>
            </div>
            <p className="text-center text-blue-100 mb-8">
              Available 24/7 for same-day bookings. Quick response time guaranteed.
            </p>
            <Button
              className="w-full bg-accent hover:bg-yellow-500 text-primary font-bold py-6 text-lg"
              asChild
            >
              <a href="tel:+14049191860">Call Now to Book</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
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
                className="p-8 bg-white border-2 border-secondary shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-lg w-fit mx-auto mb-4">
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
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border-2 border-secondary animate-fade-in-up">
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
                className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 text-lg transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5 mr-2" />
                {formStatus === "loading" ? "Sending..." : "Send Message"}
              </Button>
              {formStatus === "success" && (
                <p className="text-green-600 font-semibold text-center">Message sent successfully!</p>
              )}
              {formStatus === "error" && (
                <p className="text-red-600 font-semibold text-center">Error sending message. Please try again.</p>
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
              <h4 className="font-bold mb-4 text-accent">Lemonade Bloom</h4>
              <p className="text-blue-100">Professional junk removal and hauling services with an eco-friendly heart.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-accent">Services</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#services" className="hover:text-white transition-colors">Junk Removal</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Home Cleanouts</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Move-Out Hauling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Same-Day Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-accent">Company</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-accent">Quick Links</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#booking" className="hover:text-white transition-colors">Book Now</a></li>
                <li><a href="tel:+14049191860" className="hover:text-white transition-colors">(404) 919-1860</a></li>
                <li><a href="mailto:LemonadeBloom@gmail.com" className="hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
            <p>&copy; 2024 Lemonade Bloom Haul Away. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      {showFloatingCTA && (
        <div className="fixed bottom-8 right-8 z-40 animate-bounce">
          <Button
            size="lg"
            className="bg-accent hover:bg-yellow-500 text-primary rounded-full shadow-2xl hover:shadow-3xl transition-all font-bold text-lg animate-pulse-glow"
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
