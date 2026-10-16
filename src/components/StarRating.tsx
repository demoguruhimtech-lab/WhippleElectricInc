import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  reviewCount?: number;
}

export default function StarRating({ rating, size = 'md', showValue = false, reviewCount }: StarRatingProps) {
  const sizes = { sm: 'h-4 w-4', md: 'h-5 w-5', lg: 'h-6 w-6' };
  const textSize = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizes[size]} ${
              star <= Math.round(rating) ? 'text-electric-400' : 'text-charcoal-300'
            }`}
            fill="currentColor"
          />
        ))}
      </div>
      {showValue && (
        <span className={`font-display font-bold text-navy-900 ${textSize[size]}`}>
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className={`text-charcoal-500 ${textSize[size]}`}>
          ({reviewCount} reviews)
        </span>
      )}
    </div>
  );
}
