import React from 'react';
import ReviewCard from './ReviewCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Fade } from "react-awesome-reveal";

const UserReview = () => {
    const userReviews = [
        {
          id: 1,
          userImage: "https://rb.gy/bl6rt",
          userName: "John Doe",
          rating: "4.5",
          review:
          "Attending sports zone was a game-changer for me! The coaching staff is incredibly knowledgeable and dedicated, and they really push you to reach your full potential. I've seen significant improvement in my skills since joining, and I can't recommend this place enough!",
        },
        {
          id: 2,
          userImage: "https://rb.gy/xzv2e",
          userName: "Jane Smith",
          rating: "5",
          review:
          "I enrolled my child in this school, and it has been an amazing experience. The instructors are fantastic with kids, creating a fun and supportive environment. My child's confidence has soared, and they have made lifelong friends. It's a top-notch facility with a real focus on skill development.",
        },
        {
          id: 3,
          userImage: "https://rb.gy/k5k9y",
          userName: "Mike Johnson",
          rating: "4",
          review:
          "As a beginner in the world of sports, I was nervous about joining a sports school. However, the staff here made me feel welcome right from the start. They provided personalized attention and tailored training programs to suit my needs. I've come a long way and have fallen in love with the sport thanks to their guidance.",
        },
        {
          id: 4,
          userImage: "https://rb.gy/uqu5d",
          userName: "Emily Johnson",
          rating: "4.5",
          review: "This sports school is simply outstanding! The facilities are top-of-the-line, and the coaches are incredibly professional and passionate. They create a positive and competitive atmosphere that brings out the best in each athlete. I've witnessed incredible growth in my performance and have forged lifelong bonds with my teammates.",
        },
        {
          id: 5,
          userImage: "https://rb.gy/ms0ny",
          userName: "Sophia Williams",
          rating: "5",
          review: "I've trained at several sports schools, but none compare to this one. The expertise and dedication of the coaches are unmatched. They go above and beyond to help you reach your goals and provide valuable feedback for improvement. The training programs are challenging yet rewarding, and the camaraderie among athletes is inspiring.",
        },
        {
          id: 6,
          userImage: "https://rb.gy/senpy",
          userName: "Oliver Brown",
          rating: "4",
          review: "I can't speak highly enough about this sports school. The coaching staff's commitment to excellence is evident in every aspect of their training. The facilities are state-of-the-art, and the variety of sports offered is impressive. Whether you're a beginner or an elite athlete, this school has everything you need to take your skills to the next level.",
        }
      ];
    
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };
    
      return (
        <div className="container mx-auto py-8">
            <Fade>
          <h1 className="text-3xl text-blue-400 font-bold my-12 text-center">User Reviews</h1>
          </Fade>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {userReviews.map((review) => (
              <ReviewCard
                key={review.id}
                userImage={review.userImage}
                userName={review.userName}
                review={review.review}
                rating={review.rating}
              />
            ))}
          </Carousel>
        </div>
      );
    };

export default UserReview;