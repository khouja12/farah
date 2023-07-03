import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselAcceuil.css'

const CarouselAcceuil = () => {
  const onChange = (selectedIndex) => {
    console.log(`Selected index: ${selectedIndex}`);
  };

  const onClickItem = (index, item) => {
    console.log(`Clicked item: ${item}`);
  };

  const onClickThumb = (index, item) => {
    console.log(`Clicked thumb: ${item}`);
  };

  return (
    <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
      <div>
        <img src="data:image/jpeg;base64,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" alt="Image 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="data:image/jpeg;base64,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 " alt="Image 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s" alt="Image 3" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="assets/4.jpeg" alt="Image 4" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="assets/5.jpeg" alt="Image 5" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="assets/6.jpeg" alt="Image 6" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
};

ReactDOM.render(<CarouselAcceuil />, document.getElementById('root'));
export default CarouselAcceuil