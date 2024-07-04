import React from 'react'
import exam from "../../assets/Home Landing Image/exams.png"
import samuel from "../../assets/Home Landing Image/samuel.png"
import peter from "../../assets/Home Landing Image/peter.jpg"
import Coursecard from './coursecard'

const Courses = () => {
    const coursecards = [
        {
            id: 1,
            img: exam,
            course: "Biology",
            hours: "2hour",
            level: "beginner",
            price: "3000",
            author: "Musa Doe",
            authorImg: samuel
        },
        {   id: 2,
            img: exam,
            course: "Chemistry",
            hours: "3hour",
            level: "intermediate",
            price: "4000",
            author: "Jane Doe",
            authorImg: peter,
        },
        {   id: 3,
            img: exam,
            course: "Physics",
            hours: "1hour",
            level: "Advance",
            price: "5000",
            author: "Musa Doe",
            authorImg: samuel,
        },
        {   id: 4,
            img: exam,
            course: "Accounting",
            hours: "5hours",
            level: "beginner",
            price: "6000",
            author: "Janet Doe",
            authorImg: peter,
        },
    ]


  return (


    <div className='flex'>
      {
 coursecards.map ((coursecard, index) => (
    <Coursecard 
    key={index}
    img={coursecard.img}
    course={coursecard.course}
    hours={coursecard.hours}
    level={coursecard.level}
    price={coursecard.price}
    author={coursecard.author}
    authorImg={coursecard.authorImg}
    />
))
      }
    </div>
  )
}

export default Courses
