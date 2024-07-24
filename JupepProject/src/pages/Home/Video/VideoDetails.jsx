import React, { useEffect, useState } from "react";
import axios from "axios";

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-32 object-cover mb-4"
      />
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded">
          {course.level}
        </span>
        <span className="text-sm text-gray-500">{course.price} USD</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">By: {course.author}</p>
      <div className="flex justify-between items-center">
        <span className="text-yellow-500">
          ⭐ {course.rating} ({course.reviews} reviews)
        </span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Get Enrolled
        </button>
      </div>
    </div>
  );
};

const CoursesPage = () => {
  const [courses, setCourses] = useState({});
  const [selectedSubject, setSelectedSubject] = useState("Physics");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/path/to/courses.json");
      setCourses(result.data);
    };
    fetchData();
  }, []);

  const subjects = Object.keys(courses);

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold text-center mb-8">
        Most Popular Courses
      </h1>
      <p className="text-center text-gray-600 mb-16">
        These are the most popular courses among Geeks Courses learners
        worldwide in year 2022
      </p>
      <div className="flex justify-center mb-8">
        <div className="bg-gray-200 p-2 rounded-full">
          {subjects.map((subject) => (
            <button
              key={subject}
              className={`px-4 py-2 mx-1 rounded-full text-gray-800 ${
                selectedSubject === subject ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses[selectedSubject]?.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
