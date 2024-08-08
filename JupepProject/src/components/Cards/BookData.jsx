import React from "react";
import exam from "../../assets/Home Landing Image/exams.png";
// import samuel from "../../assets/Home Landing Image/samuel.png"
// import peter from "../../assets/Home Landing Image/peter.jpg"
import Bookcard from "./Book";
import phyImage from "../../assets/syllabus/phyImage.jpg";
import mathImage from "../../assets/syllabus/mathImage.jpg";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();
  const coursecards = [
    {
      id: 1,
      img: phyImage,
      course: "Physics",
      author: "Musa Doe",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      page: "200",
      rating: "4.5",
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["physics Introduction", "Themometer", "Meter"],
    },
    {
      id: 2,
      img: exam,
      course: "Chemistry",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: 4.5,
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["Chemistry", "Chemistry", "Chemistry"],
    },
    {
      id: 3,
      img: mathImage,
      course: "Mathematics",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: "4.5",
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["Mathematics", "Mathematics", "Mathematics"],
    },
    {
      id: 4,
      img: exam,
      course: "Biology",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: "4.5",
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["Biology", "Biology", "Biology"],
    },
    {
      id: 5,
      img: exam,
      course: "Government",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: 4.5,
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["Governament", "Governament", "Governament"],
    },
    {
      id: 6,
      img: exam,
      course: "Literature-In-English",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: "4.5",
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["Lit in English", "Lit in English", "Lit in English"],
    },
    {
      id: 7,
      img: exam,
      course: "CRS",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: 4.5,
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["CRS", "CRS", "CRS"],
    },
    {
      id: 8,
      img: exam,
      course: "Economics",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: 4.5,
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["Economics", "Economics", "Economics"],
    },
    {
      id: 9,
      img: exam,
      course: "Accounting",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: 4.5,
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["Accounting", "Accounting", "Accounting"],
    },
    {
      id: 10,
      img: exam,
      course: "Business Studies",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: "4.5",
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["Business", "Business", "Business"],
    },
    {
      id: 11,
      img: exam,
      course: "History",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: 4.5,
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["History", "History", "History"],
    },
    {
      id: 12,
      img: exam,
      course: "Visual Art",
      subscriber: "500",
      reviews: "9300",
      view: "1000",
      author: "Ted Hawkins",
      page: "200",
      rating: 4.5,
      description:
        "Yes, our Jupeb textbooks cover all topics in subjects 001, 002, 003, and 004, providing detailed explanations to support your learning",
      topics: ["visual", "visual", "visual"],
    },
  ];

  const handleClick = (coursecard) => {
    navigate(`/book-details/${coursecard.course}`, {
      state: { courseDetails: coursecard },
    });
  };
  console.log(handleClick);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {coursecards.map((coursecard, index) => (
        <Bookcard
          key={index}
          img={coursecard.img}
          course={coursecard.course}
          hours={coursecard.hours}
          author={coursecard.author}
          subscriber={coursecard.subscriber}
          reviews={coursecard.reviews}
          view={coursecard.view}
          page={coursecard.page}
          rating={coursecard.rating}
          description={coursecard.description}
          // level={coursecard.level}
          // price={coursecard.price}
          // authorImg={coursecard.authorImg}
          handleClick={() => handleClick(coursecard)}
        />
      ))}
    </div>
  );
};

export default Books;
