import React from 'react'
import ProductSlider from './ProductSlider';
import { cardData4 } from '../../data/More_Data/clientInfoData';
import Link from 'next/link';

const ClientTestimonialSection = () => {

    const generateTestimonialCardHTML = (cardContent) => {
      const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
      };
      const cardContentText = truncateText(cardContent.text, 350);
      const cardContentName = truncateText(cardContent.name, 50);
      const cardContentDesignation = truncateText(cardContent.designation, 20);
      const stars = Array(cardContent.reviewStars)
        .fill('<i class="fa-solid fa-star-sharp"></i>')
        .join("");

      return `
        <div class="swiper-slide">
            <div class="testi-card">
                <div class="testi-card_review">
                    ${stars}
                </div>
                <p class="testi-card_text">
                    "${cardContentText}"
                </p>
                <div class="testi-card_profile">
                    <div class="testi-card_avater">
                    <img loading="lazy" src="${cardContent.avatarSrc}" alt="${cardContent.name}" title="${cardContent.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 50%;">
                    </div>
                    <div class="media-body">
                    <h3 class="testi-card_name">${cardContentName}</h3>
                    <span class="testi-card_desig">${cardContentDesignation}</span>
                    </div>
                </div>
                <div class="testi-card_quote">
                    <img loading="lazy" src="${cardContent.quoteIconSrc}" alt="quote${cardContent.name}" title="${cardContent.name}">
                </div>
            </div>
        </div>
        `;
    };

    const generateTestimonialSliderHTML = (data) => {
      return data.map(generateTestimonialCardHTML);
    };

    const cardHTMLDataForTestimonials =
      generateTestimonialSliderHTML(cardData4);
  return (
    <div>
      <section
        className="overflow-hidden space"
        style={{ backgroundImage: `url('assets/img/bg/contact_bg_1.webp')` }}
        data-bg-src=""
        data-overlay="overlay1"
        data-opacity="5"
      >
        <div className="container z-index-common">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="pe-xxl-5 text-xl-start text-center">
                <div className="title-area mb-35">
                  <span className="sub-title">ОТЗИВИ</span>
                  <h2 className="text-white">
                    Нека чуем какво <span className="text-theme"> казват</span> нашите клиенти
                  </h2>
                </div>
                <p className="mt-n2 mb-35 text-white">
                  Нашите клиенти ни се доверяват заради качеството, иновациите и удовлетвореността на клиентите. 
                  Прочетете историите на успеха по-долу, за да видите трансформацията в бизнеса им.
                </p>
                <Link
                  href="/about-us"
                  className="th-btn style3 shadow-none"
                >
                  ВИЖТЕ ПОВЕЧЕ
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-7 mt-40 mt-xl-0">
              <div className="testi-card-area slider-area">
                <div className="testi-thumb-wrap">
                  <div
                    className="testi-thumb testi-card-tab"
                    data-slider-tab="#testiSlide1"
                  >
                    <div className="tab-btn active">
                      <img
                        loading="lazy"
                        src="assets/img/testimonial/logo/assignmentinneed.avif"
                        alt="assignmentinneed"
                        title="assignmentinneed"
                      />
                    </div>
                    <div className="tab-btn">
                      <img
                        loading="lazy"
                        src="assets/img/testimonial/logo/comforttransfers.avif"
                        alt="comforttransfers"
                        title="comforttransfers"
                      />
                    </div>
                    <div className="tab-btn">
                      <img
                        loading="lazy"
                        src="assets/img/testimonial/logo/letslearn.avif"
                        alt="letslearn"
                        title="letslearn"
                      />
                    </div>
                    <div className="tab-btn">
                      <img
                        loading="lazy"
                        src="assets/img/testimonial/logo/aloe.avif"
                        alt="aloe"
                        title="aloe"
                      />
                    </div>
                    <div className="tab-btn">
                      <img
                        loading="lazy"
                        src="assets/img/testimonial/logo/globalassignmentsupport.avif"
                        alt="globalassignmentsupport"
                        title="globalassignmentsupport"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-wrapper">
                  <ProductSlider
                    cardData={cardHTMLDataForTestimonials}
                    slidesPerView={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientTestimonialSection
