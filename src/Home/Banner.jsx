
const Banner = () => {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img className='w-full  h-96' src="https://i.ibb.co/VMKp02D/Mix-Fold-3-Slider-1262.jpg"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Qdxykct/Pixel-8-8-Pro-Slider-1-4701.jpg" className="w-full h-96 " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/JQ6Ys0R/Air-Pods-Pro-2nd-Gen-Type-C-Top-Banner-1814.jpg" className="w-full h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/FxxMQBY/Apple-Watch-Series-9-Top-Banner-9485.jpg" className="w-full h-96" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Banner;