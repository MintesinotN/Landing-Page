export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-gray-800 text-white py-8">
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
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14C2.238 0 1 1.238 1 3v18c0 1.762 1.238 3 3 3h14c1.762 0 3-1.238 3-3V3c0-1.762-1.238-3-3-3zM7.119 20.452H4.554V9h2.565v11.452zM5.837 7.658c-.837 0-1.514-.686-1.514-1.523 0-.837.686-1.523 1.514-1.523.837 0 1.523.686 1.523 1.523s-.686 1.523-1.523 1.523zM20.452 20.452h-2.565v-5.652c0-1.352-.024-3.092-1.885-3.092-1.885 0-2.174 1.47-2.174 2.987v5.757H11.264V9h2.463v1.561h.035c.343-.651 1.182-1.337 2.43-1.337 2.598 0 3.08 1.71 3.08 3.932v7.296z" />
            </svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.543 2.999h-3.844L12 9.374 6.301 2.999H2l7.756 8.882L2 21h3.844L12 14.499 17.699 21H22l-7.755-9.119L21.543 2.999z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495V14.708h-3.13v-3.62h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.62h-3.12V24h6.116C23.407 24 24 23.406 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
        </div>
        <div className="mt-8 text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
