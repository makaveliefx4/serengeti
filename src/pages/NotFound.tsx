import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button"; // Import the Button component
import { Link } from "react-router-dom"; // Import Link for client-side navigation

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold text-red-500 mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        {/* Use Link and Button for an interactive and styled home button */}
        <Link to="/">
          <Button
           variant="safari" className="w-full sm:w-auto px-6 py-3 text-lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
