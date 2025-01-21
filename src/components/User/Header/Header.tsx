import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-gray-300 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300 transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Sign In
        </button>
      </div>
    </header>
  )
}

export default Header

