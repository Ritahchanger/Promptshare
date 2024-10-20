import { useEffect } from "react";
import {
  FaRegFileAlt,
  FaChartLine,
  FaTag,
  FaFileContract,
  FaRobot,
  FaLanguage,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import Navbar from "../../../components/Navbar/Navbar";

import "./Home.css";

import UsersChatIcon from "../../../Assets/icons/assets.svg";

const features = [
  {
    title: "TEXT SUMMARISER",
    description:
      "Summarize long texts into concise summaries with our advanced summarization tools.",
    icon: <FaRegFileAlt className="text-4xl text-orange-600" />,
  },
  {
    title: "SENTIMENT ANALYSIS",
    description:
      "Analyze the sentiment of your text and gain insights into the emotions conveyed.",
    icon: <FaChartLine className="text-4xl text-orange-600" />,
  },
  {
    title: "KEYWORD EXTRACTION",
    description:
      "Extract important keywords from your documents to focus on key topics.",
    icon: <FaTag className="text-4xl text-orange-600" />,
  },
  {
    title: "TEXT CLASSIFICATION",
    description:
      "Automatically classify text into predefined categories to streamline your workflow.",
    icon: <FaFileContract className="text-4xl text-orange-600" />,
  },
  {
    title: "LANGUAGE TRANSLATION",
    description:
      "Translate text from one language to another with high accuracy.",
    icon: <FaLanguage className="text-4xl text-orange-600" />,
  },
  {
    title: "CHATBOT",
    description:
      "Interact with our intelligent chatbot for instant responses and assistance.",
    icon: <FaRobot className="text-4xl text-orange-600" />,
  },
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated =
      !!localStorage.getItem("authenticated") ||
      !!localStorage.getItem("token");

    if (!isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="max-w-[1200px] mx-auto p-[3rem]">
          <div className="max-w-[600px] mx-auto">
            <img src={UsersChatIcon} alt="" />
          </div>
          <div className="grid grid-cols-2  md:grid-cols-3 gap-[20px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="shadow-xl p-4 flex items-center flex-col cursor-pointer"
              >
                <div className="mr-4 ">{feature.icon}</div>
                <div className="">
                  <p className="text-xl font-semibold text-orange-600">
                    {feature.title}
                  </p>
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
