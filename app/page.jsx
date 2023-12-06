"use client";

import { useState, useEffect } from "react";
import { CarouselGallery, CarouselBlog } from "./components/carousel";

export default function Home() {
  const [smallScreen, setSmallScreen] = useState(true);

  useEffect(() => {
    setSmallScreen(window.innerWidth < 768);
  }, []);

  return (
    <main className="h-full">
      {/* hero section */}
      <section className="h-[80vh] bg-[url('/images/hero-bg.png')] bg-cover md:h-[60vh] xl:h-[80vh]">
        <div className="w-full h-full px-5 bg-ctm-gradient">
          {/* headings */}
          <div className="max-w-screen-xl h-full mx-auto text-ctm-primary flex items-center">
            <div className="md:w-1/2 lg:w-3/6 lg:ms-16">
              <h1 className="ff-ctm-accent text-5xl mb-2 lg:text-6xl">
                Transforming <br />
                Visions into Reality
              </h1>
              <p className="mb-5">
                Welcome to Moretha, where we turn dreams into reality. With
                unwavering precision and a passion for construction, we craft
                structures that stand as timeless legacies. Join us in
                redefining the future of construction.
              </p>

              <button
                type="button"
                className="py-3 px-6 border-2 rounded-lg border-ctm-accent hover:bg-ctm-accent"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* service section */}
      <section id="services" className="bg-ctm-secondary py-16 md:py-0">
        <div className="max-w-screen-xl mx-auto px-5 grid gap-y-10  text-ctm-primary md:px-0 md:grid-cols-2 lg:px-5 lg:grid-cols-4">
          <div className="grid place-items-center text-center py-5 md:py-10 lg:py-16">
            <picture>
              <img src="/icon-architectural.svg" alt="service icon" />
            </picture>
            <h2 className="text-lg font-bold my-3">Construction Management</h2>
            <p className="px-5">
              From concept to blueprint, we bring your vision to life with
              innovative and functional designs, turning dreams into detailed
              plans.
            </p>
          </div>

          <div className="grid place-items-center text-center py-5 bg-ctm-accent md:py-10">
            <picture>
              <img src="/icon-construction.svg" alt="service icon" />
            </picture>
            <h2 className="text-lg font-bold my-3">Construction Management</h2>
            <p className="px-5">
              Experienced professionals ensure your project stays on time, on
              budget, and meets the highest standards of quality and safety.
            </p>
          </div>

          <div className="grid place-items-center text-center py-5 md:py-10">
            <picture>
              <img src="/icon-sustainable.svg" alt="service icon" />
            </picture>
            <h2 className="text-lg font-bold my-3">Sustainable Building</h2>
            <p className="px-5">
              Commitment to eco-friendly practices, offering green solutions and
              energy-efficient designs for environmental construction.
            </p>
          </div>

          <div className="grid place-items-center text-center py-5 md:py-10">
            <picture>
              <img src="/icon-renovation.svg" alt="service icon" />
            </picture>
            <h2 className="text-lg font-bold my-3">Renovation Expertise</h2>
            <p className="px-5">
              Revitalize spaces with our remodeling services, seamlessly
              blending functionality and aesthetics to meet evolving needs.
            </p>
          </div>
        </div>
      </section>

      {/* gallery section */}
      <section id="gallery">
        <div className="max-w-screen-xl mx-auto px-5 py-24">
          {/* headiings */}
          <div className="text-center mb-10 lg:px-64">
            <h2 className="text-3xl font-bold mb-2">
              Showcase of Craftsmanship
            </h2>
            <p>
              Explore our gallery, a curated collection capturing the essence of
              our craftsmanship. Each image tells a story of precision, passion,
              and the transformative power of construction.
            </p>
          </div>

          {/* gallery */}
          {smallScreen ? (
            <CarouselGallery />
          ) : (
            <div className="grid grid-cols-3 gap-5 lg:px-32">
              <div>
                <picture>
                  <img
                    src="/images/gallery-1.png"
                    alt="gallery image"
                    className="img"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <img
                    src="/images/gallery-2.png"
                    alt="gallery image"
                    className="img"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <img
                    src="/images/gallery-3.png"
                    alt="gallery image"
                    className="img"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <img
                    src="/images/gallery-4.png"
                    alt="gallery image"
                    className="img"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <img
                    src="/images/gallery-5.png"
                    alt="gallery image"
                    className="img"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <img
                    src="/images/gallery-6.png"
                    alt="gallery image"
                    className="img"
                  />
                </picture>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* about section */}
      <section
        id="about"
        className="pt-24 bg-ctm-secondary text-ctm-primary md:py-24 lg:py-0"
      >
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-20 md:px-16 lg:gap-10">
          {/* supporting image */}
          <div className="order-2 h-96 lg:h-full">
            <picture>
              <img
                src="/images/about-image.png"
                alt="about company image"
                className="img"
              />
            </picture>
          </div>

          {/* company details */}
          <div className="px-5 lg:py-16 lg:order-2">
            <h2 className="ff-ctm-accent text-4xl mb-4">About the Company</h2>
            <span className="separator block w-16 h-1 mb-6 rounded-full bg-ctm-accent"></span>
            <p className="mb-5">
              Step into the world of Moretha, where innovation meets integrity.
              Our commitment to excellence and customer satisfaction is at the
              heart of everything we do. Explore the essence of Moretha – more
              than a company, a commitment to exceeding expectations.
            </p>

            <ul className="grid gap-4 mb-6">
              <li className="flex items-start gap-2">
                <picture>
                  <img
                    src="/icon-location.svg"
                    alt="social icon"
                    className="w-5 mt-1 md:mt-0"
                  />
                </picture>
                Pleasant Hills Subd Narra Street Main Rd, CSJDM Bulacan
              </li>
              <li className="flex items-center gap-2">
                <picture>
                  <img
                    src="/icon-email.svg"
                    alt="social icon"
                    className="w-5"
                  />
                </picture>
                moretha@corporation.com
              </li>
              <li className="flex items-center gap-2">
                <picture>
                  <img
                    src="/icon-contact.svg"
                    alt="social icon"
                    className="w-5"
                  />
                </picture>
                +63 991 1234 5678
              </li>
            </ul>

            <button
              type="button"
              className="py-3 px-6 rounded-lg bg-ctm-accent hover:bg-ctm-accent/95"
            >
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* benefits section */}
      <section>
        <div className="max-w-screen-xl mx-auto px-5 py-24">
          {/* headiings */}
          <div className="text-center mb-10 lg:px-64">
            <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
            <p>
              Elevate Your Experience: Unveiling the Moretha Difference - Where
              Commitment Meets Craftsmanship for Unmatched Quality and
              Satisfaction.
            </p>
          </div>

          {/* benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <div className="grid place-items-center text-center py-5 md:py-10">
              <picture>
                <img src="/icon-craftsmanship.svg" alt="service icon" />
              </picture>
              <h2 className="text-lg font-bold my-3">Expert Craftsmanship</h2>
              <p className="px-8">
                Moretha is your choice for unparalleled expertise. Our seasoned
                professionals ensure every project reflects precision and
                excellence, delivering results that stand the test of time.
              </p>
            </div>

            <div className="grid place-items-center text-center py-5 md:py-10">
              <picture>
                <img src="/icon-excellence.svg" alt="service icon" />
              </picture>
              <h2 className="text-lg font-bold my-3">
                Client-Centric Excellence
              </h2>
              <p className="px-8">
                Construction partner that prioritizes your vision. Our
                client-focused approach guarantees transparent communication and
                a final result that goes beyond expectations.
              </p>
            </div>

            <div className="grid place-items-center text-center py-5 md:py-10 md:px-56 md:col-start-1 md:col-end-3 lg:px-0 lg:col-start-auto lg:col-end-auto">
              <picture>
                <img src="/icon-innovation.svg" alt="service icon" />
              </picture>
              <h2 className="text-lg font-bold my-3">
                Innovation and Sustainability
              </h2>
              <p className="px-8">
                Innovation and sustainability. From cutting-edge solutions to
                eco-friendly practices, we committed to building a future that
                is both advanced and environmentally responsible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* partnership section */}
      <section className="bg-[url('/images/partnership-bg.png')] bg-cover">
        <div className="w-full h-full px-5 bg-ctm-gradient py-10 lg:py-16">
          <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-16 lg:gap-24">
            <div>
              <picture>
                <img
                  src="/images/company-1.png"
                  alt="company logo"
                  className="img"
                />
              </picture>
            </div>
            <div>
              <picture>
                <img
                  src="/images/company-1.png"
                  alt="company logo"
                  className="img"
                />
              </picture>
            </div>
            <div>
              <picture>
                <img
                  src="/images/company-1.png"
                  alt="company logo"
                  className="img"
                />
              </picture>
            </div>
            <div>
              <picture>
                <img
                  src="/images/company-1.png"
                  alt="company logo"
                  className="img"
                />
              </picture>
            </div>
            <div>
              <picture>
                <img
                  src="/images/company-1.png"
                  alt="company logo"
                  className="img"
                />
              </picture>
            </div>
            <div>
              <picture>
                <img
                  src="/images/company-1.png"
                  alt="company logo"
                  className="img"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* blog section */}
      <section>
        <div className="max-w-screen-xl mx-auto px-5 py-24 lg:px-16">
          {/* headiings */}
          <div className="text-center mb-10 lg:px-64">
            <h2 className="text-3xl font-bold mb-2">Latest News</h2>
            <p>
              Uncover Stories That Matter - Your Source for Timely Updates,
              In-Depth Analysis, and the Pulse of Current Affairs.
            </p>
          </div>

          {/* blog */}
          {smallScreen ? (
            <CarouselBlog />
          ) : (
            <div className="grid md:grid-cols-3 md:gap-6 lg:gap-16">
              <div className="grid py-5 md:py-10">
                <div className="h-64">
                  <picture>
                    <img
                      src="/images/news-1.png"
                      alt="blog image"
                      className="img"
                    />
                  </picture>
                </div>
                <h2 className="text-lg font-bold my-3">
                  The Art of Sustainable Living
                </h2>
                <p>
                  Embark on a journey towards eco-friendly living. Explore
                  practical tips, innovative solutions, and inspiring stories
                  that showcase the beauty of sustainability and how it can
                  posi...
                </p>
              </div>
              <div className="grid py-5 md:py-10">
                <div className="h-64">
                  <picture>
                    <img
                      src="/images/news-2.png"
                      alt="blog image"
                      className="img"
                    />
                  </picture>
                </div>
                <h2 className="text-lg font-bold my-3">
                  Mastering the Work-Life Balance
                </h2>
                <p>
                  Striking the right balance between work and life is an ongoing
                  challenge. Delve into actionable strategies, real-life
                  experiences, and expert advice to help you navigate the
                  comp...
                </p>
              </div>
              <div className="grid py-5 md:py-10">
                <div className="h-64">
                  <picture>
                    <img
                      src="/images/news-3.png"
                      alt="blog image"
                      className="img"
                    />
                  </picture>
                </div>
                <h2 className="text-lg font-bold my-3">
                  Mindfulness Meditation
                </h2>
                <p>
                  Discover the transformative power of mindfulness meditation.
                  Dive into the science, techniques, and personal journeys that
                  illuminate the path to a calmer mind, red...
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
