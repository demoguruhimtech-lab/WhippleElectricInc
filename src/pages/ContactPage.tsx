import { Phone, MapPin, Clock, Mail, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { business } from '@/data/business';
import { getLocalBusinessSchema } from '@/data/schema';

export default function ContactPage() {
  return (
    <>
      <SEO
        title={`Contact ${business.name} | Electrician in Taylor, MI`}
        description={`Contact Whipple Electric Inc for electrical services in Taylor, MI. Call ${business.phone}, visit our location, or send us a message. We serve Metro Detroit.`}
        canonical="/contact"
        structuredData={getLocalBusinessSchema()}
      />
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">Contact Us</h1>
            <p className="mt-5 text-lg text-charcoal-200">
              Get in touch with {business.name} to discuss your electrical project, repair, or installation needs. We're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">Get in Touch</h2>
              <p className="mt-4 text-charcoal-600">
                Whether you need a repair, an upgrade, or have a question about your electrical system, we're ready to help. Call us directly or visit our location in Taylor, Michigan.
              </p>

              <div className="mt-8 space-y-5">
                <a href={`tel:${business.phoneTel}`} className="flex items-center gap-4 rounded-xl border border-charcoal-100 bg-charcoal-50 p-5 transition-all hover:border-electric-400/40 hover:shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-400/10 text-electric-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-charcoal-500">Phone</div>
                    <div className="font-display text-lg font-bold text-navy-900">{business.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-charcoal-100 bg-charcoal-50 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-400/10 text-electric-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-charcoal-500">Address</div>
                    <div className="font-display text-lg font-bold text-navy-900">{business.address}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-charcoal-100 bg-charcoal-50 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-400/10 text-electric-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-charcoal-500">Hours</div>
                    <div className="font-display text-lg font-bold text-navy-900">{business.hours}</div>
                  </div>
                </div>

                <a href={business.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-charcoal-100 bg-charcoal-50 p-5 transition-all hover:border-electric-400/40 hover:shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-400/10 text-electric-600">
                    <ExternalLink className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-charcoal-500">Google Maps</div>
                    <div className="font-display text-lg font-bold text-navy-900">View on Google Maps</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">Our Location</h2>
              <p className="mt-4 text-charcoal-600">
                Visit us at our Taylor, Michigan location. Use the map below for directions, or click through to Google Maps for turn-by-turn navigation.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-charcoal-200 shadow-card">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src={business.googleMapsEmbed}
                    className="h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={`Map showing ${business.name} location in Taylor, Michigan`}
                  />
                </div>
              </div>
              <a href={business.googleMapsLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-electric-600">
                <ExternalLink className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
