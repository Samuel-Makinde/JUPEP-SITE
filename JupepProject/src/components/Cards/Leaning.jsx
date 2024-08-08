import React from "react";

const MAX_MESSAGE_LENGTH = 70;

const truncateMessage = (messages) => {
  if (messages.length > MAX_MESSAGE_LENGTH) {
    return messages.slice(0, MAX_MESSAGE_LENGTH) + "...";
  }
  return messages;
};

const MyBookCard = ({ book }) => (
  <div className="w-full px-4 bg-white min-h-[200px] mt-14 lg:mt-0 font-roboto  text-primary5  shadow-md rounded-lg p-4 m-2 ">
    <img
      src={book.image}
      alt={book.title}
      className="w-full h-32 object-cover rounded-md"
    />
    <h2 className="text-base min-h-[40px] font-bold mt-2 text-secH">
      {book.title}
    </h2>

    <p className=" tooltip cursor-pointer">
      Summary: {truncateMessage(book.description)}
    </p>
  </div>
);

export default MyBookCard;
