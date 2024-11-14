import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { FaResearchgate } from "react-icons/fa6";

function App() {
  const [selectedTab, setSelectedTab] = useState('Biography');

  const tabs = ['Biography', 'Research Statement', 'Research Interest', 'Selected Publications'];

  return (
    <>
      <nav className="bg-black p-7">
        <h1 className="text-white text-3xl">Dr Gurraj Singh</h1>
      </nav>

      <div className="main-content-container">
        <div className="max-w-4xl mx-auto">
          <div className="flex p-4">
            <div className="mr-4">
              <img
                src="https://www.nitj.ac.in/images/faculty/20032631333.jpg"
                alt="Dr Gurraj Singh"
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">Assistant Professor (Grade-II)</p>
              <p>Department: Industrial and Production Engineering</p>
              <p>Email: <a href="mailto:singhg@nitj.ac.in" className="text-blue-500">singhg@nitj.ac.in</a></p>
              <p>Phone: +91 9888853154</p>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-4">
            <nav className="flex space-x-4 p-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`text-lg px-3 py-2 ${
                    selectedTab === tab
                      ? 'border-b-2 border-blue-500 text-blue-500'
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4">
            {selectedTab === 'Biography' && 
            <p>
              Dr. Gurraj Singh is currently serving as Assistant Professor in the Department of Industrial and Production Engineering, Dr B R Ambedkar National Institute of Technology Jalandhar, India (NITJ). Prior to this engagement at NITJ, he served as Assistant Professor in the School of Mechanical Engineering at Lovely Professional University, Phagwara, Punjab. He did his Ph.D. in Industrial and profuction engineering from NIT Jalandhar in 2017 and MTech. in Manufacturing Technology from NIT Jalandhar in 2012 while Btech in industrial engineering from NIT Jalandhar in 2009. His research interests include: Life cycle assessment, Sustainable manufacturing, Farm machinery and parametric optimization through Design of Experiments. He has a credit for publishing a number of research articles (~40) in international peer-reviewed SCI, SCOPUS indexed journals, International conferences, book chapters, and been granted 2 patents and 1 copyright. He had supervised 4 MTech projects, 12 BTech projects, and currently supervising 7 Ph.D. students. He had been an invited speaker, guest, sessions chair, and had organized conferences and short-term courses at national and international level in India. He also acts as review for some of the most reputed international journals. He also has 3 books to his name as the author while 2 books as editor.
            </p>
            }
            {selectedTab === 'Research Statement' && <p>This is the research statement content.</p>}
            {selectedTab === 'Research Interest' && <p>Life Cycle Assessment, Manufacturing processes, Farm machinery, Machining, Sustainable manufacturing , Bio waste management</p>}
            {selectedTab === 'Selected Publications' && <p>This is the selected publications content.</p>}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="bg-gray-400 p-3 text-center">
          <p className="text-lg font-semibold mb-4">Follow me on</p>
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="https://www.linkedin.com/in/gurraj-singh-2053b82b2/" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.researchgate.net/profile/Gurraj-Singh-2" target="_blank" rel="noopener noreferrer" className="icon researchgate">
                <FaResearchgate />
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=uRDJmTIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="icon googlescholar">
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
