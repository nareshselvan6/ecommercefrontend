// import React from 'react';
// import carousel1 from "../Images/carousel1.png";
// import carousel2 from "../Images/carousel2.png";
// import carousel3 from "../Images/carousel3.png";
// import "../Components/Carousel.css";

// const Carousel = () => {
//   return (
//     <div className='total'>
//       <div id="carouselExampleIndicators" className="carousel slide">
//         <div className="carousel-indicators">
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={carousel1} className="d-block w-100 cimg" alt="carousel1" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel2} className="d-block w-100 cimg" alt="carousel2" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel3} className="d-block w-100 cimg" alt="carousel3" />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true" />
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true" />
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


// import React from 'react';
// import carousel1 from "../Images/carousel1.png";
// import carousel2 from "../Images/carousel2.png";
// import carousel3 from "../Images/carousel3.png";
// import "../Components/Carousel.css";

// const Carousel = () => {
//   return (
//     <div className="container-fluid p-0"> {/* Fluid container to make it responsive */}
//       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-indicators">
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={carousel1} className="d-block w-100 img-fluid" alt="carousel1" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel2} className="d-block w-100 img-fluid" alt="carousel2" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel3} className="d-block w-100 img-fluid" alt="carousel3" />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true" />
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true" />
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import React from 'react';
import carousel1 from "../Images/carousel1.png";
import carousel2 from "../Images/carousel2.png";
import carousel3 from "../Images/carousel3.png";
import "../Components/Carousel.css";

const Carousel = () => {
  return (
    <div className="container-fluid p-0"> {/* Fluid container to make it responsive */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100 cimg img-fluid" alt="carousel1" />
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100 cimg img-fluid" alt="carousel2" />
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100 cimg img-fluid" alt="carousel3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
