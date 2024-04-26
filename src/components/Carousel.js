import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button className='left' onClick={goToPrevSlide}>&larr;</button>
      <img src={images[currentIndex].image} alt={`Slide ${currentIndex}`} />
      <button className='right' onClick={goToNextSlide}>&rarr;</button>
    </div>
  );
};

export default Carousel;

// import React, { useState } from 'react';
// // import './Carousel.css'; // Import the CSS file

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.image}
//             alt={`Slide ${index}`}
//             className="carousel-image"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           />
//         ))}
//       </div>
//       <button className="carousel-button left" onClick={goToPrevSlide}>
//         &larr;
//       </button>
//       <button className="carousel-button right" onClick={goToNextSlide}>
//         &rarr;
//       </button>
//     </div>
//   );
// };

// export default Carousel;


