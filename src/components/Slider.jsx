import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <div>
          <img
            style={{ width: "600px", marginLeft: "30rem"}}
            src="https://img.freepik.com/free-vector/world-blood-donor-day-heart-blood-drop-with-heartbeat-line-concept-poster_1017-38605.jpg"
            alt=""
          />
        </div>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <div >
          <img style={{ width: "700px", marginLeft: "30rem" }} src="https://d2aq6dqxahe4ka.cloudfront.net/assets/uploads/challenges/Impactguru-blog-cover62a88a8901ef31655212681.jpg" alt="" />
        </div>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <div>
          <img style={{ width: "800px", marginLeft: "30rem" }} src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/06/world-blood-donor-day-1655115531.jpg" alt="" />
        </div>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

