import { Link } from 'react-router-dom';
import { Star, ArrowRight, Phone, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import StarRating from '@/components/StarRating';
import { business } from '@/data/business';
import { getLocalBusinessSchema } from '@/data/schema';

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title={`Reviews | ${business.name} - Taylor, MI`}
        description={`Read what customers say about ${business.name}. Rated ${business.rating}/5 stars based on ${business.reviewCount} Google reviews. A trusted electrician in Taylor, Michigan.`}
        canonical="/reviews"
        structuredData={getLocalBusinessSchema()}
      />
      <Breadcrumbs items={[{ name: 'Reviews', path: '/reviews' }]} />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-400/10 px-4 py-1.5">
              <Star className="h-5 w-5 text-electric-400" fill="currentColor" />
              <span className="text-sm font-semibold text-electric-400">Customer Reviews</span>
            </div>
            <h1 className="font-display text-4xl font-bold text-white text-balance lg:text-5xl">Reviews</h1>
            <div className="mt-6 flex items-center justify-center gap-4">
              <StarRating rating={business.rating} size="lg" />
              <span className="font-display text-3xl font-bold text-white">{business.rating}</span>
              <span className="text-charcoal-300">/ 5</span>
            </div>
            <p className="mt-2 text-charcoal-300">Based on {business.reviewCount} Google reviews</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-charcoal-100 bg-charcoal-50 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-electric-400/10">
                <Star className="h-8 w-8 text-electric-500" fill="currentColor" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-navy-900">Read Reviews on Google</h2>
              <p className="mt-3 text-charcoal-600">
                We value every customer's feedback. To read authentic reviews from homeowners who have worked with {business.name}, please visit our Google listing. We do not display review content directly on this site to ensure all reviews remain genuine and sourced from verified customers.
              </p>
              <a
                href={business.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 btn-primary"
              >
                <ExternalLink className="h-5 w-5" />
                View Google Reviews
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { value: business.rating.toFixed(1), label: 'Google Rating' },
                { value: business.reviewCount.toString(), label: 'Google Reviews' },
                { value: business.experience, label: 'of Experience' },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl border border-charcoal-100 bg-white p-6 text-center shadow-card">
                  <div className="font-display text-3xl font-bold text-navy-900">{stat.value}</div>
                  <div className="mt-1 text-sm text-charcoal-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 lg:text-3xl">Share Your Experience</h2>
            <p className="mt-4 text-charcoal-600">
              Have you worked with {business.name}? We would appreciate your feedback on Google. Your review helps other homeowners in the Taylor area find a trusted electrician.
            </p>
            <a
              href={business.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-secondary"
            >
              <Star className="h-5 w-5" />
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
