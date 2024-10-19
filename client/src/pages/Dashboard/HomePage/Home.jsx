import React from "react";
import { FaRegFileAlt, FaChartLine, FaTag, FaFileContract, FaLanguage } from "react-icons/fa"; // Import the icons
import Navbar from "../../../components/Navbar/Navbar";

const features = [
  {
    title: "TEXT SUMMARISER",
    description: "Summarize long texts into concise summaries with our advanced summarization tools.",
    icon: <FaRegFileAlt className="text-4xl text-orange-600" />, 
  },
  {
    title: "SENTIMENT ANALYSIS",
    description: "Analyze the sentiment of your text and gain insights into the emotions conveyed.",
    icon: <FaChartLine className="text-4xl text-orange-600" />, 
  },
  {
    title: "KEYWORD EXTRACTION",
    description: "Extract important keywords from your documents to focus on key topics.",
    icon: <FaTag className="text-4xl text-orange-600" />,
  },
  {
    title: "TEXT CLASSIFICATION",
    description: "Automatically classify text into predefined categories to streamline your workflow.",
    icon: <FaFileContract className="text-4xl text-orange-600" />, 
  },
  {
    title: "LANGUAGE TRANSLATION",
    description: "Translate text from one language to another with high accuracy.",
    icon: <FaLanguage className="text-4xl text-orange-600" />, 
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="max-w-[1200px] mx-auto p-[3rem]">
          <div className="grid grid-cols-3 gap-[20px]">
            {features.map((feature, index) => (
              <div key={index} className="shadow-xl p-4 flex items-center">
                <div className="mr-4">{feature.icon}</div>
                <div>
                  <p className="text-2xl font-semibold text-orange-600">{feature.title}</p>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
