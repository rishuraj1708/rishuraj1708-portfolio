import React from "react";
import iptracker from "../assets/portfolio/installNode.jpg";
import ExpenseEcho from "../assets/portfolio/ExpenseEcho.png";
import StellarShot from "../assets/portfolio/StellarShot.png";
import PortfolioSelf from "../assets/portfolio/PortfolioSelf.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ExpenseEcho,
      link: 'https://expenseecho.vercel.app/',
      repo: 'https://github.com/rishuraj1708/ExpenseEcho'
    },
    {
      id: 2,
      src: PortfolioSelf,
      link: 'https://rishuraj1708-portfolio.vercel.app/',
      repo: 'https://github.com/rishuraj1708/rishuraj1708-portfolio'
    },
    {
      id: 3,
      src: StellarShot,
      link: 'https://stellarshot.vercel.app/',
      repo: 'https://github.com/rishuraj1708/StellarShot'
    },
    {
      id: 4,
      src: StellarShot,
      link: 'https://stellarshot.vercel.app/',
      repo: 'https://github.com/rishuraj1708/StellarShot'
    },
    {
      id: 5,
      src: iptracker,
      link: '',
      repo: ''
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer hover:bg-gray-700 rounded-2xl " onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gray-700 rounded-2xl cursor-pointer" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;