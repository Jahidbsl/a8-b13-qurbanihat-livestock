import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {/* Visual Element */}
      <h1 className="text-9xl font-extrabold text-green-600 tracking-widest">
        404
      </h1>
      
      <div className="bg-white px-4 py-2 text-sm rounded-lg shadow-sm border border-gray-100 -mt-8 mb-8 rotate-12 absolute">
        Page Not Found
      </div>

      {/* Text Content */}
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-700 transition-all active:scale-95"
          >
            Back to Homepage
          </Link>
          
          <Link
            href="/contact"
            className="px-8 py-3 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
    </div>
  );
}