import { Link } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import EstimateForm from '@/components/EstimateForm';
import { business } from '@/data/business';

export default function EstimatePage() {
  return (
    <>
      <SEO
        title={`Request an Estimate | ${business.name} - Taylor, MI`}
        description={`Request a free estimate from ${business.name}. Tell us about your electrical project and we'll get back to you. Serving Taylor, MI and Metro Detroit. Call ${business.phone}.`}
        canonical="/request-an-estimate"
      />
      <Breadcrumbs items={[{ name: 'Request an Estimate', path: '/request-an-estimate' }]} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">Request an Estimate</h1>
            <p className="mt-5 text-lg text-charcoal-200">
              Tell us about your electrical project or repair, and we'll get back to you to discuss the details and arrange service.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="font-display text-xl font-bold text-navy-900">How It Works</h2>
              <div className="mt-6 space-y-6">
                {[
                  { num: '1', title: 'Submit Your Request', description: 'Fill out the form with details about your electrical issue or project.' },
                  { num: '2', title: 'We Review & Contact You', description: 'We review your request and reach out to discuss your needs and arrange service.' },
                  { num: '3', title: 'Service Performed', description: 'We arrive at the scheduled time, diagnose the issue, and perform the work.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 font-display text-lg font-bold text-electric-400">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-navy-900">{step.title}</h3>
                      <p className="mt-1 text-sm text-charcoal-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-charcoal-100 bg-charcoal-50 p-5">
                <h3 className="font-display text-base font-bold text-navy-900">Prefer to Call?</h3>
                <p className="mt-1 text-sm text-charcoal-600">We're available to take your call.</p>
                <a href={`tel:${business.phoneTel}`} className="mt-3 btn-primary w-full text-sm">
                  <Phone className="h-4 w-4" />
                  Call {business.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-xl border border-charcoal-100 bg-white p-6 shadow-card lg:p-8">
                <h2 className="font-display text-xl font-bold text-navy-900">Estimate Request Form</h2>
                <p className="mt-1 text-sm text-charcoal-500">Fields marked with * are required.</p>
                <div className="mt-6">
                  <EstimateForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
