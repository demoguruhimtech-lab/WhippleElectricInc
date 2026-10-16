import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Electrical Services in Taylor, MI | Whipple Electric Inc"
        description="Explore the full range of residential electrical services offered by Whipple Electric Inc — troubleshooting, panel upgrades, wiring, lighting installation, safety inspections, and more in Taylor, MI."
        canonical="/services"
      />
      <Breadcrumbs items={[{ name: 'Services', path: '/services' }]} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">
              Electrical Services
            </h1>
            <p className="mt-5 text-lg text-charcoal-200">
              Whipple Electric Inc offers a comprehensive range of residential electrical services in Taylor, Michigan and the surrounding Metro Detroit area. From diagnosis and repair to installation and upgrades, each service is performed by an experienced Master Electrician.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
