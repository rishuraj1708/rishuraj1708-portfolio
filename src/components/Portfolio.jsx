import React from "react";
import tracker from "../assets/portfolio/installNode.jpg";
import Expense from "../assets/portfolio/ExpenseEcho.png";
import Stellar from "../assets/portfolio/StellarShot.png";
import SelfPortfolio from "../assets/portfolio/PortfolioSelf.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Expense,
      name: "ExpenseEcho",
      technologies: ["React", "Tailwind", "React Router"],
      link: 'https://expenseecho.vercel.app/',
      repo: 'https://github.com/rishuraj1708/ExpenseEcho'
    },
    {
      id: 2,
      src: SelfPortfolio,
      name: "PortfolioSelf",
      technologies: ["React", "Tailwind", "React Router"],
      link: 'https://rishuraj1708-portfolio.vercel.app/',
      repo: 'https://github.com/rishuraj1708/rishuraj1708-portfolio'
    },
    {
      id: 3,
      src: Stellar,
      name: "StellarShot",
      technologies: ["Html","CSS","Javascript"],
      link: 'https://stellarshot.vercel.app/',
      repo: 'https://github.com/rishuraj1708/StellarShot'
    },
    {
      id: 4,
      src: tracker,
      name: "iptracker",
      technologies: ["Html","CSS","Javascript"],
      link: '',
      repo: ''
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, technologies, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <h3 className="text-2xl font-bold mb-2 ml-4 mt-8">{name}</h3>
              <p className="text-gray-400 mb-4 ml-4 mt-4">{technologies.join(", ")}</p>
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