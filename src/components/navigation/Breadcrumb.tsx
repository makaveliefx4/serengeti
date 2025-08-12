import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    'destinations': 'Destinations',
    'blog': 'Travel Blog',
    'tours': 'Tours & Packages',
    'experiences': 'Experiences',
    'about': 'About Us',
    'contact': 'Contact',
    'booking': 'Booking',
    'reviews': 'Reviews'
  };

  if (pathnames.length === 0) {
    return null; // Don't show breadcrumb on home page
  }

  return (
    <nav className="bg-secondary/30 py-3 border-b">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
          </li>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNameMap[pathname] || 
              pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
                {isLast ? (
                  <span className="font-medium text-foreground">
                    {displayName}
                  </span>
                ) : (
                  <Link 
                    to={routeTo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;