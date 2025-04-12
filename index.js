
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Pauloshan Fish Supply";
  }, []);

  return (
    <div className="min-h-screen bg-sky-50 p-6 font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-sky-800 mb-2">Pauloshan Fish Supply</h1>
        <p className="text-lg text-sky-600">Sustainably Farmed Catfish from Ebonyi State, Nigeria</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-sky-700 mb-2">Our Mission</h2>
            <p>
              To provide high-quality, affordable catfish using sustainable aquaculture practices that empower local communities and support food security in Nigeria.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-sky-700 mb-2">Our Services</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Wholesale & Retail Catfish Sales</li>
              <li>Smoked & Packaged Fish</li>
              <li>Aquaculture Training Programs</li>
              <li>Cold Chain Logistics</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-sky-700 mb-2">Why Choose Us?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Locally Owned & Operated</li>
              <li>Climate-Smart Farming</li>
              <li>Trusted by Communities</li>
              <li>Inclusive Hiring & Training</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-sky-800 text-center mb-6">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img src="/images/farm1.jpg" alt="Fish Farm" className="rounded-2xl shadow" />
          <img src="/images/fish-products.jpg" alt="Fish Products" className="rounded-2xl shadow" />
          <img src="/images/training.jpg" alt="Training Session" className="rounded-2xl shadow" />
        </div>
      </section>

      <section className="text-center mb-10">
        <h2 className="text-2xl font-bold text-sky-800 mb-4">Testimonials</h2>
        <div className="max-w-3xl mx-auto text-sky-700 italic">
          “Thanks to Pauloshan, I now have a steady supply of quality fish for my restaurant. Their training helped me launch my own farm too!” – Ada, Enugu
        </div>
      </section>

      <section className="text-center mb-10">
        <h2 className="text-2xl font-bold text-sky-800 mb-4">Contact Us</h2>
        <p className="text-sky-700 mb-4">We’d love to hear from you. Reach out today for inquiries, orders, or training registration.</p>
        <div className="flex justify-center space-x-4 mb-6">
          <Button variant="outline" className="flex items-center gap-2 text-sky-700">
            <Mail className="w-4 h-4" /> pauloshanfish@gmail.com
          </Button>
          <Button variant="outline" className="flex items-center gap-2 text-sky-700">
            <Phone className="w-4 h-4" /> +234 812 345 6789
          </Button>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-sky-600 hover:text-sky-800">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-sky-600 hover:text-sky-800">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="text-center text-sky-600 text-sm border-t pt-4">
        &copy; {new Date().getFullYear()} Pauloshan Fish Supply. All rights reserved.
      </footer>
    </div>
  );
}
