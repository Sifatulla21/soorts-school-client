import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const ReviewCard = ({ userImage, userName, review, rating }) => {
    return ( 
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="flex flex-col h-full">
        <div className="flex items-center p-4">
          <img
            className="w-12 h-12 rounded-full mr-4 object-cover"
            src={userImage}
            alt="User"
          />
                  <div>
        <h2 className="text-lg font-bold text-gray-800">{userName}</h2>
        <Rating
                        className="text-yellow-500 text-3xl"
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
        </div>
        </div>
        <div className="py-4 px-6 flex-grow">
          <p className="text-gray-600 text-sm mt-2">{review}</p>
        </div>
      </div>
    </div>
      );
    };
export default ReviewCard;