import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Conversation = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Corrected useParams to be called as a function

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!id) {
      navigate("/admin/dashboard/home");
      return;
    }
    switch (parseInt(id)) {
      case 1:
        setTitle("TEXT SUMMARISER");
        break;
      case 2:
        setTitle("SENTIMENT ANALYSIS");
        break;
      case 3:
        setTitle("KEYWORD EXTRACTION");
        break;
      case 4:
        setTitle("TEXT CLASSIFICATION");
        break;
      case 5:
        setTitle("LANGUAGE TRANSLATION");
        break;
      case 6:
        setTitle("CHATBOT");
        break;
      default:
        navigate("/admin/dashboard/home");
        break;
    }
  }, [id, navigate]);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <p className="text-xl font-bold text-center text-rose-600">{title}</p>
      </div>
    </div>
  );
};

export default Conversation;
