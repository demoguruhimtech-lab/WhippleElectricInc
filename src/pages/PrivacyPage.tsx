import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { business } from '@/data/business';

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Whipple Electric Inc"
        description={`Privacy Policy for ${business.name}. Learn how we handle your personal information when you contact us or request an estimate.`}
        canonical="/privacy-policy"
      />
      <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} />

      <section className="bg-navy-900 py-14">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white lg:text-4xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-charcoal">
            <p className="text-sm text-charcoal-500">Last updated: January 2025</p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Introduction</h2>
            <p className="mt-3 text-charcoal-700">
              {business.name} ("we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or contact us for services.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Information We Collect</h2>
            <p className="mt-3 text-charcoal-700">When you contact us or request an estimate, we may collect:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal-700">
              <li>Your full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property type and project location</li>
              <li>Description of your electrical issue or project</li>
              <li>Preferred contact method</li>
            </ul>
            <p className="mt-3 text-charcoal-700">We do not collect payment information through this website.</p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">How We Use Your Information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal-700">
              <li>To respond to your estimate requests and service inquiries</li>
              <li>To schedule and perform electrical work at your property</li>
              <li>To communicate with you about your project</li>
              <li>To improve our services and website</li>
            </ul>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Information Sharing</h2>
            <p className="mt-3 text-charcoal-700">
              We do not sell, rent, or share your personal information with third parties for marketing purposes. Your information is used solely to provide the electrical services you have requested.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Data Security</h2>
            <p className="mt-3 text-charcoal-700">
              We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. Estimate submissions are stored securely and accessible only to authorized personnel.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Your Rights</h2>
            <p className="mt-3 text-charcoal-700">
              You may request access to, correction of, or deletion of your personal information at any time by contacting us at {business.phone}.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-navy-900">Contact Us</h2>
            <p className="mt-3 text-charcoal-700">
              If you have questions about this Privacy Policy, please contact us at {business.phone} or visit our contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
