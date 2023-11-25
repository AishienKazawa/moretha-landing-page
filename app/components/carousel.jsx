import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselGallery = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <picture>
          <img src="/images/gallery-1.png" alt="gallery image" />
        </picture>
      </div>
      <div>
        <picture>
          <img src="/images/gallery-2.png" alt="gallery image" />
        </picture>
      </div>
      <div>
        <picture>
          <img src="/images/gallery-3.png" alt="gallery image" />
        </picture>
      </div>
      <div>
        <picture>
          <img src="/images/gallery-4.png" alt="gallery image" />
        </picture>
      </div>
      <div>
        <picture>
          <img src="/images/gallery-5.png" alt="gallery image" />
        </picture>
      </div>
      <div>
        <picture>
          <img src="/images/gallery-6.png" alt="gallery image" />
        </picture>
      </div>
    </Slider>
  );
};

const CarouselBlog = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="grid py-5 md:py-10">
        <div className="h-64">
          <picture>
            <img src="/images/news-1.png" alt="blog image" className="img" />
          </picture>
        </div>
        <h2 className="text-lg font-bold my-3">
          The Art of Sustainable Living
        </h2>
        <p>
          Embark on a journey towards eco-friendly living. Explore practical
          tips, innovative solutions, and inspiring stories that showcase the
          beauty of sustainability and how it can posi...
        </p>
      </div>
      <div className="grid py-5 md:py-10">
        <div className="h-64">
          <picture>
            <img src="/images/news-2.png" alt="blog image" className="img" />
          </picture>
        </div>
        <h2 className="text-lg font-bold my-3">
          Mastering the Work-Life Balance
        </h2>
        <p>
          Striking the right balance between work and life is an ongoing
          challenge. Delve into actionable strategies, real-life experiences,
          and expert advice to help you navigate the comp...
        </p>
      </div>
      <div className="grid py-5 md:py-10">
        <div className="h-64">
          <picture>
            <img src="/images/news-3.png" alt="blog image" className="img" />
          </picture>
        </div>
        <h2 className="text-lg font-bold my-3">Mindfulness Meditation</h2>
        <p>
          Discover the transformative power of mindfulness meditation. Dive into
          the science, techniques, and personal journeys that illuminate the
          path to a calmer mind, red...
        </p>
      </div>
    </Slider>
  );
};

export { CarouselGallery, CarouselBlog };
