import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { locations } from '@/data/locations';
import { business } from '@/data/business';
import { getLocalBusinessSchema } from '@/data/schema';

export default function ServiceAreasPage() {
  return (
    <>
      <SEO
        title="Service Areas | Whipple Electric Inc - Taylor, MI & Metro Detroit"
        description="Whipple Electric Inc serves homeowners in Taylor, MI and the surrounding Metro Detroit area. View our service areas and find an electrician near you."
        canonical="/service-areas"
        structuredData={getLocalBusinessSchema()}
      />
      <Breadcrumbs items={[{ name: 'Service Areas', path: '/service-areas' }]} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">Service Areas</h1>
            <p className="mt-5 text-lg text-charcoal-200">
              Whipple Electric Inc is based in Taylor, Michigan and provides residential electrical services to homeowners throughout the surrounding Metro Detroit communities.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                to={`/electrician-${location.slug}`}
                className="card group block"
              >
                <div className="card-icon mb-4 group-hover:bg-electric-400 group-hover:text-navy-900">
                  <MapPin className="h-7 w-7" />
                </div>
                <h2 className="font-display text-xl font-bold text-navy-900">{location.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 line-clamp-3">{location.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-all group-hover:gap-2.5 group-hover:text-electric-600">
                  Electrician in {location.shortName}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
