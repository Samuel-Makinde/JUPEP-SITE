import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

const apiUrl = "https://jupeb-site-backend.onrender.com/api/v1/books";

const viewSyllabusPage = () => {
  const [syllabusData, setSyllabusData] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(true);

  const fetchSyllabus = async () => {
    setLoadingSpinner(true);
    try {
      const response = await fetch(apiUrl);
      const syllabusData = await response.json();
      setLoadingSpinner(false);
      setSyllabusData(syllabusData);
    } catch (error) {
      setLoadingSpinner(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSyllabus();
  }, []);

  if (loadingSpinner) {
    return (
      <main>
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <div>
      {syllabusData.map((item) => (
        <div key={item.id}>
           <a href={item.book} target="_blank" rel="noopener noreferrer">View Book</a>
          <img src={item.image} alt={item.picture} />
          <p>{item.describtion}</p>
        </div>
      ))}
    </div>
  );
};

export default viewSyllabusPage;
