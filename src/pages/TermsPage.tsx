import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { business } from '@/data/business';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms and Conditions | Whipple Electric Inc"
        description={`Terms and Conditions for ${business.name}. Please read these terms before using our website or requesting services.`}
        canonical="/terms-and-conditions"
      />
      <Breadcrumbs items={[{ name: 'Terms and Conditions', path: '/terms-and-conditions' }]} />

      <section className="bg-navy-900 py-14">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white lg:text-4xl">Terms and Conditions</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-charcoal-500">Last updated: January 2025</p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Acceptance of Terms</h2>
            <p className="mt-3 text-charcoal-700">
              By accessing and using the {business.name} website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Services</h2>
            <p className="mt-3 text-charcoal-700">
              {business.name} provides residential electrical services in Taylor, Michigan and surrounding areas. The information on this website describes our services but does not constitute a contract or guarantee of specific results, pricing, or availability. All work is subject to an individual assessment and agreement.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Estimate Requests</h2>
            <p className="mt-3 text-charcoal-700">
              Submitting an estimate request through our website does not constitute a binding service agreement. We will review your request and contact you to discuss details, scheduling, and pricing. A formal agreement is made only when work is scheduled and agreed upon.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Website Content</h2>
            <p className="mt-3 text-charcoal-700">
              All content on this website, including text, images, logos, and design, is the property of {business.name} or its licensors and may not be reproduced without permission. Service descriptions are provided for informational purposes and are based on the services we typically offer.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Limitation of Liability</h2>
            <p className="mt-3 text-charcoal-700">
              {business.name} is not liable for any damages arising from the use of this website or reliance on its content. All electrical work is performed in accordance with applicable codes and standards, and our liability for services performed is limited to the scope of the work agreed upon.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">External Links</h2>
            <p className="mt-3 text-charcoal-700">
              This website may contain links to external sites, including our Google Maps listing. We are not responsible for the content or practices of third-party websites.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Contact</h2>
            <p className="mt-3 text-charcoal-700">
              For questions about these Terms and Conditions, contact {business.name} at {business.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
