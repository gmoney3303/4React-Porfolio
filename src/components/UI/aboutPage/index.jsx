import Carousel from "react-bootstrap/Carousel";

import image_1 from "../../../assets/images/unnamed.jpg";
import image_2 from "../../../assets/images/monkey.jpg";

export default function CarouselPhotos() {
  return (
    <div className="d-flex justify-content-center">
      <Carousel fade className="col-md-6">
        <Carousel.Item>
          <img src={image_1} alt="Trip in europe" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image_2} alt="monkey" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
