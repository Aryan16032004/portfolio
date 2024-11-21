import React from 'react';

function Publication() {
  const publications = [
    { link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uRDJmTIAAAAJ&citation_for_view=uRDJmTIAAAAJ:Zph67rFs4hoC", title: 'A review on minimum quantity lubrication for machining processes', citedBy: 313, year: 2015 },
    { link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uRDJmTIAAAAJ&citation_for_view=uRDJmTIAAAAJ:Wp0gIr-vW9MC",title: 'An approach to cleaner production for machining hardened steel using different cooling-lubrication conditions', citedBy: 284, year: 2018 },
    { link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uRDJmTIAAAAJ&citation_for_view=uRDJmTIAAAAJ:qxL8FJ1GzNcC",title: 'Modeling and optimization of tool wear in MQL-assisted milling of Inconel 718 superalloy using evolutionary techniques', citedBy: 180, year: 2018 },
    { link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uRDJmTIAAAAJ&citation_for_view=uRDJmTIAAAAJ:u5HHmVD_uO8C",title: 'Hybrid cooling-lubrication strategies to improve surface topography and tool wear in sustainable turning of Al 7075-T6 alloy', citedBy: 153, year: 2019 },
    { link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uRDJmTIAAAAJ&citation_for_view=uRDJmTIAAAAJ:YOwf2qJgpHMC",title: 'Investigations of machining characteristics in the upgraded MQL-assisted turning of pure titanium alloys using evolutionary algorithms', citedBy: 148, year: 2019 },
    { link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uRDJmTIAAAAJ&citation_for_view=uRDJmTIAAAAJ:zYLM7Y9cAGgC",title: 'Influence of Ranque-Hilsch vortex tube and nitrogen gas assisted MQL in precision turning of Al 6061-T6', citedBy: 145, year: 2018 },
    { link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uRDJmTIAAAAJ&citation_for_view=uRDJmTIAAAAJ:mB3voiENLucC",title: 'Rice straw burning: a review on its global prevalence and the sustainable alternatives for its effective mitigation', citedBy: 113, year: 2021 },
    { link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uRDJmTIAAAAJ&citation_for_view=uRDJmTIAAAAJ:u-x6o8ySG0sC",title: 'Machining characteristics based life cycle assessment in eco-benign turning of pure titanium alloy', citedBy: 93, year: 2020 },
    { link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uRDJmTIAAAAJ&citation_for_view=uRDJmTIAAAAJ:u-x6o8ySG0sC",title: 'Machinability investigations of Inconel-800 super alloy under sustainable cooling conditions', citedBy: 75, year: 2018 },
    { link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uRDJmTIAAAAJ&citation_for_view=uRDJmTIAAAAJ:4TOpqqG69KYC",title: 'Sustainable machining of aerospace material–Ti (grade-2) alloy: modeling and optimization', citedBy: 69, year: 2017 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Selected Publications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b-2 px-4 py-2 text-left font-semibold">Title</th>
              <th className="border-b-2 px-4 py-2 text-left font-semibold">Cited By</th>
              <th className="border-b-2 px-4 py-2 text-left font-semibold">Year</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((pub, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border-b px-4 py-4">
                    <a href={pub.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                </td>
                <td className="border-b px-4 py-2">{pub.citedBy}</td>
                <td className="border-b px-4 py-2">{pub.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Publication;
