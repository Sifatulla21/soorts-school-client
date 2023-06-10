import React from 'react';

const MyClassCard = ({cls}) => {
    const {name, image, price, seat, status } = cls;
    console.log(cls);
    return (
        <div>
             <div className="w-[300px] mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={image}
          alt="Course Image"
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-gray-600">Available Seats: 10</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-600">Price: ${price}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-600">Status: Approved</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-600">Total Enrolled Students: 20</span>
        </div>
        <div className="mb-4">
          <span className="text-gray-600">Feedback: Excellent</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Update
        </button>
      </div>
    </div>
        </div>
    );
};

export default MyClassCard;