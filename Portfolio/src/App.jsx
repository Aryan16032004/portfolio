import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { FaResearchgate } from "react-icons/fa6";
import Publication from './Publication';
import Research from './Research';
import Biography from './Biography';



function App() {
  const [selectedTab, setSelectedTab] = useState('Biography');

  const tabs = ['Biography', 'Research Statement', 'Research Interest', 'Selected Publications'];

  return (
    <>
  
      <nav className="bg-blue-900 text-white p-4 shadow-lg">
        <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">
          Dr. Gurraj Singh
        </h1>
      </nav>

     
      <div className="main-content-container bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-8">
          
          <div className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-6">
           <div className=''>
           <img
              src="https://www.nitj.ac.in/images/faculty/20032631333.jpg"
              alt="Dr Gurraj Singh"
              className="w-40 h-40 object-contain bg-pink-950 rounded-full border-4 border-pink-950 "
            />
           </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <p className="text-lg sm:text-xl font-semibold">
                Assistant Professor (Grade-II)
              </p>
              <p className="text-gray-700">
                Department: Industrial and Production Engineering
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:singhg@nitj.ac.in"
                  className="text-blue-700 underline"
                >
                  singhg@nitj.ac.in
                </a>
              </p>
              <p>Phone: +91 9888853154</p>
            </div>
          </div>

          
          <div className="mt-8">
            <nav className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-6 border-b border-gray-300 pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`text-sm sm:text-lg font-medium px-3 py-2 rounded-md ${
                    selectedTab === tab
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          
          <div className="mt-6 bg-white shadow-md rounded-lg p-4 sm:p-6">
            {selectedTab === 'Biography' && (
              <Biography />
            )}
            {selectedTab === 'Research Statement' && (
              <div className="text-gray-800 leading-7 whitespace-pre-wrap break-words overflow-auto">
                <Research />
              </div>
            )}
            {selectedTab === 'Research Interest' && (
              <p className="text-gray-800">
                Life Cycle Assessment, Manufacturing processes, Farm machinery,
                Machining, Sustainable manufacturing, Bio waste management
              </p>
            )}
            {selectedTab === 'Selected Publications' && <Publication />}
          </div>
        </div>
      </div>

    
      <footer className="bg-blue-900 text-white py-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg font-semibold mb-4">Follow me on</p>
          <ul className="flex justify-center space-x-4 sm:space-x-6 text-2xl">
            <li>
              <a
                href="https://www.linkedin.com/in/gurraj-singh-2053b82b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.researchgate.net/profile/Gurraj-Singh-2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaResearchgate />
              </a>
            </li>
            <li>
              <a
                href="https://scholar.google.com/citations?user=uRDJmTIAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <SiGooglescholar />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;

