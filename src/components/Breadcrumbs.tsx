import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb {
  name: string;
  path: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ name: 'Home', path: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-charcoal-100 bg-charcoal-50">
      <div className="container-max px-4 py-3 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index === 0 && <Home className="h-3.5 w-3.5 text-charcoal-400" />}
                {isLast ? (
                  <span className="font-medium text-charcoal-700" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link to={item.path} className="text-charcoal-500 transition-colors hover:text-navy-700">
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="h-3.5 w-3.5 text-charcoal-300" />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
