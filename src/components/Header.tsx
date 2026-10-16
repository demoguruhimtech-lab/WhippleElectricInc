import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { business, navLinks } from '@/data/business';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur'
        }`}
      >
        <div className="bg-navy-900 text-white">
          <div className="container-max flex items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
            <span className="font-medium text-charcoal-100">
              Master Electrician &middot; {business.experience} of experience &middot; Fully Insured
            </span>
            <a
              href={`tel:${business.phoneTel}`}
              className="flex items-center gap-1.5 font-semibold text-electric-400 transition-colors hover:text-electric-300"
            >
              <Phone className="h-3.5 w-3.5" />
              {business.phone}
            </a>
          </div>
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 lg:h-11 lg:w-11">
                <Zap className="h-6 w-6 text-electric-400 lg:h-7 lg:w-7" fill="currentColor" />
              </div>
              <div>
                <div className="font-display text-lg font-bold leading-tight text-navy-900 lg:text-xl">
                  Whipple Electric
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-500 lg:text-xs">
                  Inc &middot; Taylor, MI
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link to="/request-an-estimate" className="btn-primary text-sm">
                Request an Estimate
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 transition-colors hover:bg-navy-50 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-white p-6 shadow-navy-lg animate-fade-in">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-navy-900">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 hover:bg-navy-50"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'bg-electric-400/10 text-navy-900'
                      : 'text-charcoal-700 hover:bg-navy-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/request-an-estimate" className="btn-primary mt-4">
                Request an Estimate
              </Link>
              <a href={`tel:${business.phoneTel}`} className="btn-dark mt-3">
                <Phone className="h-5 w-5" />
                Call {business.phone}
              </a>
            </nav>
          </div>
        </div>
      )}

      <a
        href={`tel:${business.phoneTel}`}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-electric-400 px-5 py-3.5 font-semibold text-navy-900 shadow-electric transition-all hover:bg-electric-300 hover:shadow-electric active:scale-95 lg:hidden"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
    </>
  );
}
