import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { FaResearchgate } from "react-icons/fa6";
import Publication from './Publication';

function App() {
  const [selectedTab, setSelectedTab] = useState('Biography');

  const tabs = ['Biography', 'Research Statement', 'Research Interest', 'Selected Publications'];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-900 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">Dr. Gurraj Singh</h1>
      </nav>

      {/* Main Content */}
      <div className="main-content-container bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto py-8">
          {/* Header Section */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6">
            <img
              src="https://www.nitj.ac.in/images/faculty/20032631333.jpg"
              alt="Dr Gurraj Singh"
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-900"
            />
            <div className="ml-6">
              <p className="text-xl font-semibold">Assistant Professor (Grade-II)</p>
              <p className="text-gray-700">Department: Industrial and Production Engineering</p>
              <p>Email: <a href="mailto:singhg@nitj.ac.in" className="text-blue-700 underline">singhg@nitj.ac.in</a></p>
              <p>Phone: +91 9888853154</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8">
            <nav className="flex space-x-6 border-b border-gray-300 pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`text-lg font-medium px-3 py-2 rounded-md ${
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

          {/* Tab Content */}
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            {selectedTab === 'Biography' && (
              <p className="text-gray-800 leading-7">
                Dr. Gurraj Singh is currently serving as Assistant Professor in the Department of Industrial and Production Engineering,
                Dr. B R Ambedkar National Institute of Technology Jalandhar, India (NITJ). Prior to this engagement at NITJ, he served as
                Assistant Professor in the School of Mechanical Engineering at Lovely Professional University, Phagwara, Punjab. He did his Ph.D. in Industrial
                and production engineering from NIT Jalandhar in 2017 and MTech. in Manufacturing Technology from NIT Jalandhar in 2012 while
                BTech in industrial engineering from NIT Jalandhar in 2009. His research interests include Life cycle assessment, Sustainable
                manufacturing, Farm machinery, and parametric optimization through Design of Experiments. He has published ~40 research
                articles, holds 2 patents and 1 copyright, and has supervised numerous projects.
              </p>
            )}
            {selectedTab === 'Research Statement' && <div className="text-gray-800 leading-7 whitespace-pre-wrap break-words overflow-auto ">
            <p className='mb-5 font-medium'> Research Statement: Life Cycle Assessment of Agricultural Operations and Supply Chains</p> 
            <p className='mb-2'> My research focuses on understanding and improving the sustainability of agricultural operations and supply chains through the application of life cycle assessment (LCA). As the global demand for food continues to rise, there is an urgent need to minimize the environmental impact of agriculture, which is a major contributor to greenhouse gas emissions, water use, soil degradation, and biodiversity loss. LCA is a powerful tool that allows for a comprehensive evaluation of the environmental, economic, and social impacts of agricultural systems across their entire life cycle—from raw material extraction, through production, transportation, processing, and consumption, to waste management.</p>
            <p className='mb-2'> One of the key areas of my research is the development of LCA methodologies tailored to the complexities of agricultural systems. Unlike conventional industrial processes, agricultural systems are dynamic and highly context-dependent, influenced by factors such as climate, soil type, farming practices, and supply chain structure. I seek to refine LCA models to better capture the unique aspects of agriculture, including the interactions between land use, water resources, and biodiversity. This involves developing new metrics and indicators that can assess the multi-dimensional sustainability of agricultural practices, incorporating not only environmental factors but also economic and social dimensions such as food security, equity, and labor conditions.</p>
            <p className='mb-2'> In addition to improving LCA methodologies, my work emphasizes the practical application of LCA to identify sustainable solutions for agricultural supply chains. I work closely with farmers, agribusinesses, policymakers, and other stakeholders to implement LCA-based decision-making tools that can optimize resource use, reduce emissions, and enhance overall sustainability. This includes the analysis of supply chains for key agricultural products (such as grains, vegetables, livestock, and biofuels) to identify opportunities for process improvements, alternative practices, and circular economy approaches. For example, my research has focused on evaluating the environmental trade-offs of different crop rotation practices, the impacts of precision agriculture technologies on resource efficiency, and the role of food waste reduction strategies in mitigating supply chain emissions.
            </p>
            <p className='mb-2'>
            A central theme in my work is promoting the integration of sustainability metrics into policy and business decision-making. I believe that the widespread adoption of LCA in agriculture can lead to more informed choices by both producers and consumers. By comparing the environmental and socio-economic impacts of different agricultural products and practices, I aim to provide actionable insights that guide both policy and consumer behavior toward more sustainable food systems. Additionally, I am committed to promoting interdisciplinary collaboration, working with experts in fields such as economics, environmental science, and social sciences to ensure that agricultural LCA approaches are holistic and effective in addressing the interconnected challenges of food security, climate change, and ecosystem preservation.
            </p>
            <p className='mb-2'>
            Through my research, I aim to contribute to the development of agricultural systems that are not only productive but also environmentally resilient and socially responsible, helping to shape a more sustainable and equitable global food system for future generations.</p>
              </div>}

            {selectedTab === 'Research Interest' && (
              <p className="text-gray-800">
                Life Cycle Assessment, Manufacturing processes, Farm machinery, Machining, Sustainable manufacturing, Bio waste management
              </p>
            )}

            {selectedTab === 'Selected Publications' && <Publication/>}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg font-semibold mb-4">Follow me on</p>
          <ul className="flex justify-center space-x-6 text-2xl">
            <li>
              <a href="https://www.linkedin.com/in/gurraj-singh-2053b82b2/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.researchgate.net/profile/Gurraj-Singh-2" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaResearchgate />
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=uRDJmTIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
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
