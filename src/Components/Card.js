import React from 'react';
import './cont.css';

const Card = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-start mt-4">
        <div className="w-1/5 mr-20">
          <img
            className="w-full h-auto im"
            src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
            alt="dummy image"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="mb-2 title">GOD OF WAR</h1>
          <h2 className="mb-2 rating">8.9</h2>
        </div>
      </div>
      <div className="flex flex-col items-center mt-auto mb-40"> {/* Add margin to the description box */}
        <textarea
          className="w-2/3 h-24 p-2 border rounded focus:outline-none focus:border-blue-500 desc"
          placeholder="Generated review"
        ></textarea>
      </div>
    </div>
  );
};

export default Card;
