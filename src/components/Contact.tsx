export default function Footer() {
    return (
      <footer className="w-full bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="text-sm text-gray-300 mb-2">
            <strong>Address:</strong> 123 Tech Avenue, Silicon Valley, CA 12345
          </p>
          <p className="text-sm text-gray-300 mb-2">
            <strong>Email:</strong> contact@techive.com
          </p>
          <p className="text-sm text-gray-300 mb-6">
            <strong>Phone:</strong> +1 (234) 567-8901
          </p>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"></path>
                <path d="M16 7a3 3 0 11-6 0 3 3 0 016 0zM12 13v4m-3 0h6m0-4h3a4 4 0 100-8H5a4 4 0 000 8h3z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 01-3.13 1.09A4.48 4.48 0 0022.47 1.9a9.88 9.88 0 01-3.13 1.2A4.47 4.47 0 0016.85 2c-2.47 0-4.48 2.02-4.48 4.5 0 .35.04.7.11 1.04-3.74-.19-7.05-2-9.27-4.8a4.5 4.5 0 00-.61 2.26c0 1.56.79 2.94 1.98 3.76a4.45 4.45 0 01-2.03-.56v.06c0 2.18 1.56 4.02 3.62 4.44a4.49 4.49 0 01-2.02.08c.56 1.74 2.19 3 4.12 3.03a9.98 9.98 0 01-6.13 2.1c-.4 0-.8-.03-1.19-.08a14.04 14.04 0 007.56 2.2c9.06 0 14-7.5 14-14 0-.21-.01-.42-.03-.62A9.93 9.93 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.04c5.52 0 9.96 4.44 9.96 9.96 0 5.52-4.44 9.96-9.96 9.96-5.52 0-9.96-4.44-9.96-9.96 0-5.52 4.44-9.96 9.96-9.96zm0 18.48c4.66 0 8.4-3.74 8.4-8.4 0-4.66-3.74-8.4-8.4-8.4-4.66 0-8.4 3.74-8.4 8.4 0 4.66 3.74 8.4 8.4 8.4zm0-4.64c-1.68 0-3.04-1.36-3.04-3.04 0-1.68 1.36-3.04 3.04-3.04s3.04 1.36 3.04 3.04c0 1.68-1.36 3.04-3.04 3.04z"></path>
              </svg>
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-300">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  