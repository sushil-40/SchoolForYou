import React, { useState } from "react";

// App.jsx
// Single-file React component for a Mechanical & Tyre Shop
// Uses TailwindCSS classes for styling. Default export is the main App component.

const tyres = [
  {
    id: 1,
    name: "All-Season Pro 205/55R16",
    price: "$120",
    description: "Reliable all-season tyre for small to mid-size cars.",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
  },
  {
    id: 2,
    name: "SportGrip 225/45R17",
    price: "$160",
    description: "Performance tyre with great grip in wet conditions.",
    image:
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2",
  },
  {
    id: 3,
    name: "MudX 265/70R16",
    price: "$200",
    description: "Off-road tyre built for durability and traction.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
  },
];

function Header({ onOpen }) {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
  }

  return (
    <header className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center font-bold text-lg">
            TS
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              Townsend Mechanical & Tyres
            </h1>
            <p className="text-xs text-slate-300">Service · Tyres · Repairs</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="hover:text-orange-400">
            Services
          </a>
          <a href="#tyres" className="hover:text-orange-400">
            Tyres
          </a>
          <a href="#book" className="hover:text-orange-400">
            Book
          </a>
          <a href="#contact" className="hover:text-orange-400">
            Contact
          </a>
          <button
            onClick={() => onOpen()}
            className="bg-orange-500 px-4 py-2 rounded-md font-medium hover:bg-orange-400"
          >
            Request Quote
          </button>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={toggle}
            className="p-2 rounded-md bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {open && (
            <div className="absolute right-4 top-20 bg-slate-900 border border-slate-700 rounded-md p-4 w-56 z-40">
              <a className="block py-2" href="#services">
                Services
              </a>
              <a className="block py-2" href="#tyres">
                Tyres
              </a>
              <a className="block py-2" href="#book">
                Book
              </a>
              <a className="block py-2" href="#contact">
                Contact
              </a>
              <button
                onClick={() => {
                  onOpen();
                  setOpen(false);
                }}
                className="mt-2 w-full bg-orange-500 px-4 py-2 rounded-md font-medium"
              >
                Request Quote
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Reliable mechanical repairs & tyre services
          </h2>
          <p className="mt-4 text-slate-200 max-w-xl">
            We provide fast, trustworthy car servicing, tyre fitting, wheel
            balancing and mobile tyre change across the region. Book online or
            call us today.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#book"
              className="bg-orange-500 px-5 py-3 rounded-md font-semibold hover:bg-orange-400"
            >
              Book Now
            </a>
            <a
              href="#tyres"
              className="border border-slate-600 px-5 py-3 rounded-md hover:border-orange-400"
            >
              Browse Tyres
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-slate-300">
            <div>
              <div className="font-semibold text-white">Opening Hours</div>
              <div>Mon - Fri: 8am - 5pm</div>
            </div>
            <div>
              <div className="font-semibold text-white">Call Us</div>
              <div>+61 400 123 456</div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              alt="garage"
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Tyre Fitting & Balancing",
      text: "New tyre fitting, wheel balancing and alignment checks.",
    },
    {
      title: "Mechanical Repairs",
      text: "Brakes, suspension, exhausts and general servicing.",
    },
    {
      title: "Mobile Tyre Service",
      text: "On-site tyre replacement for breakdowns and flats.",
    },
  ];

  return (
    <section id="services" className="container mx-auto px-4 py-16">
      <h3 className="text-3xl font-semibold mb-6">Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="p-6 border rounded-lg hover:shadow-lg">
            <h4 className="font-semibold text-xl mb-2">{it.title}</h4>
            <p className="text-slate-600">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TyreCard({ tyre, onAdd }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md">
      <img
        src={tyre.image}
        alt={tyre.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{tyre.name}</h4>
          <div className="text-orange-500 font-bold">{tyre.price}</div>
        </div>
        <p className="text-sm text-slate-600 mt-2">{tyre.description}</p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onAdd(tyre)}
            className="flex-1 bg-slate-900 text-white px-3 py-2 rounded-md"
          >
            Add to Quote
          </button>
          <button className="px-3 py-2 border rounded-md">Details</button>
        </div>
      </div>
    </div>
  );
}

function TyreCatalog({ onAddToQuote }) {
  return (
    <section id="tyres" className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-semibold">Tyre Catalogue</h3>
        <div className="text-sm text-slate-500">Showing top picks</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tyres.map((t) => (
          <TyreCard key={t.id} tyre={t} onAdd={onAddToQuote} />
        ))}
      </div>
    </section>
  );
}

function QuoteSidebar({ items, onClear }) {
  return (
    <aside className="hidden lg:block w-80 p-4 border-l">
      <h4 className="font-semibold mb-2">Quote Basket</h4>
      {items.length === 0 ? (
        <div className="text-sm text-slate-500">
          No items yet. Add tyres to prepare a quote.
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it.id} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{it.name}</div>
                <div className="text-sm text-slate-500">{it.price}</div>
              </div>
              <div className="text-sm text-slate-600">x1</div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <button
          onClick={onClear}
          className="w-full bg-red-500 text-white px-3 py-2 rounded-md"
        >
          Clear
        </button>
      </div>
    </aside>
  );
}

function BookingForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "Tyre Fitting",
    date: "",
  });

  function change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      phone: "",
      vehicle: "",
      service: "Tyre Fitting",
      date: "",
    });
  }

  return (
    <form id="book" onSubmit={submit} className="max-w-xl">
      <h4 className="text-2xl font-semibold mb-4">Book a Service</h4>

      <label className="block mb-2">
        <span className="text-sm">Full Name</span>
        <input
          required
          name="name"
          value={form.name}
          onChange={change}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        <span className="text-sm">Phone</span>
        <input
          required
          name="phone"
          value={form.phone}
          onChange={change}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        <span className="text-sm">Vehicle</span>
        <input
          name="vehicle"
          value={form.vehicle}
          onChange={change}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        <span className="text-sm">Service</span>
        <select
          name="service"
          value={form.service}
          onChange={change}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        >
          <option>Tyre Fitting</option>
          <option>Wheel Balancing</option>
          <option>General Service</option>
          <option>Brake Repair</option>
        </select>
      </label>

      <label className="block mb-4">
        <span className="text-sm">Preferred Date</span>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={change}
          className="mt-1 block w-full rounded-md border px-3 py-2"
        />
      </label>

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-md"
        >
          Request Booking
        </button>
        <button
          type="button"
          onClick={() =>
            setForm({
              name: "",
              phone: "",
              vehicle: "",
              service: "Tyre Fitting",
              date: "",
            })
          }
          className="px-4 py-2 border rounded-md"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-2xl font-semibold">Get in touch</h4>
          <p className="mt-2 text-slate-600">
            Pop in, call or send us a message and we'll respond within one
            business day.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <div>
              <div className="font-semibold">Address</div>
              <div>123 Service Road, Gold Coast, QLD</div>
            </div>
            <div>
              <div className="font-semibold">Phone</div>
              <div>+61 400 123 456</div>
            </div>
            <div>
              <div className="font-semibold">Email</div>
              <div>hello@townsendmechanical.com.au</div>
            </div>
          </div>
        </div>

        <div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
            className="w-full h-48 rounded-md border"
          />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [quoteItems, setQuoteItems] = useState([]);

  function handleAddToQuote(tyre) {
    setQuoteItems((s) => {
      if (s.find((x) => x.id === tyre.id)) return s;
      return [...s, tyre];
    });
  }

  function handleClearQuote() {
    setQuoteItems([]);
  }

  function handleBooking(form) {
    // In production: send to API / serverless function / email
    console.log("Booking requested:", form);
    alert(
      "Thanks, your booking request has been received. We'll contact you soon."
    );
  }

  function handleRequestQuote() {
    // a simple mock of quote request
    if (quoteItems.length === 0) {
      alert("Add at least one tyre to the quote basket.");
      return;
    }
    console.log("Quote requested for:", quoteItems);
    alert("Quote request sent. We'll follow up shortly.");
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header onOpen={handleRequestQuote} />
      <main>
        <Hero />
        <Services />

        <div className="lg:flex lg:items-start lg:justify-center">
          <div className="lg:flex-1 lg:max-w-6xl">
            <TyreCatalog onAddToQuote={handleAddToQuote} />
            <section className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <BookingForm onSubmit={handleBooking} />
                <Contact />
              </div>
            </section>
          </div>

          <QuoteSidebar items={quoteItems} onClear={handleClearQuote} />
        </div>
      </main>

      <footer className="bg-slate-900 text-white mt-8">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="font-semibold">Townsend Mechanical & Tyres</div>
            <div className="text-sm text-slate-300">
              © {new Date().getFullYear()} Townsend Mechanical
            </div>
          </div>

          <div className="text-sm text-slate-300 mt-3 md:mt-0">
            Designed with care — call +61 400 123 456
          </div>
        </div>
      </footer>
    </div>
  );
}
