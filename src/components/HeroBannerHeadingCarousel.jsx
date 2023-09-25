// import React, { useState, useEffect } from 'react';

// function HeroBannerHeadingCarousel(props) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const stringArray = props.strings;

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((currentIndex + 1) % stringArray.length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [currentIndex, stringArray]);

//   return (
//     <div className="string-display">
//       {stringArray.map((text, index) => (
//         <div
//           key={index}
//           className={`string-display-content ${
//             index === currentIndex ? 'opacity-100' : 'opacity-0'
//           } transition-opacity duration-1000 ease-in-out`}
//         >
//           {text}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HeroBannerHeadingCarousel;
import React, { useState, useEffect } from 'react';

function HeroBannerHeadingCarousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stringArray = props.strings;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % stringArray.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, stringArray]);

  return (
    <div className="string-display h-16">
      {stringArray.map((text, index) => (
        <div
          key={index}
          className={`string-display-content absolute left-1/2 translate-x-[-50%] ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000 ease-in-out`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

export default HeroBannerHeadingCarousel;