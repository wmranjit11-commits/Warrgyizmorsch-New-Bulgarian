import React from "react";
import NewContact from "../../../components/home-page-components/NewContact";
import { generateSEOMeta } from "../../../utils/seo";

export const metadata = generateSEOMeta({
  title: "Contact Us | Warrgyiz Morsch",
  description:
    "Get in touch with Warrgyiz Morsch to discuss your digital requirements and business goals.",
  path: "/contact-us",
});

const Contact = () => {
  return (

    <>
      <NewContact />

      <section className="about-sec-v4 pb-5">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-30 mb-lg-0">
              <div className="img-box6">
                <div className="img1">
                  <img
                    src="assets/img/normal/about_4_1.png"
                    loading="lazy"
                    alt="About"
                  />
                </div>
                <div className="shape1">
                  <img
                    src="assets/img/normal/about_4_2.png"
                    loading="lazy"
                    alt="About"
                  />
                </div>
                <div className="shape2">
                  <img
                    src="assets/img/normal/about_4_3.png"
                    loading="lazy"
                    alt="About"
                  />
                </div>
                <div className="color-animate"></div>
              </div>
            </div>
            <div className="col-lg-8 text-lg-start text-center">
              <div className="ps-xxl-5">
                <div className="title-area mb-35">
                  <span className="sub-title">Контактна информация</span>
                  <h1 className="sec-title">Warrgyizmorsch private limited</h1>
                </div>
                {/* <div className="checklist style4 mb-20 list-center">
                                    <ul>
                                        <li>
                                            <i className="fas fa-location-dot"></i>
                                            <b>Our Office Address :</b> International House, Constance Street, London E16                                                
                                        </li>
                                        <li>
                                            <i className="fas fa-location-dot"></i>
                                            <b>Our India Branch :</b> 27 krishna vihar Behind mds school old rto Pratap nagar Udaipur, Rajasthan                                       
                                        </li>
                                        <li>
                                            <i className="fas fa-envelope"></i>
                                            <b>Send An Email :</b><a href="mailto:info@warrgyizmorsch.com">info@warrgyizmorsch.com</a>                                                
                                        </li>
                                        <li>
                                            <i className="fas fa-phone"></i>                                            
                                            <b>Call Us Anytime:</b>
                                            <a href="tel:+442030533844">+44 2030533844</a> 
                                            <a href="tel:+919784710045">+91 9784710045</a>
                                        </li>
                                    </ul>
                                </div> */}
                <div className="checklist style4 mb-20 list-center">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 card p-2">
                      <div
                        className="text-center"
                        style={{ color: "#18336c", fontSize: "20px" }}
                      >
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div
                        className="text-center"
                        style={{ color: "black", fontSize: "20px" }}
                      >
                        <b>Изпратете имейл :</b>
                      </div>
                      <div className="text-center">
                        <a href="mailto:info@warrgyizmorsch.com">
                          info@warrgyizmorsch.com
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 card p-2">
                      <div
                        className="text-center"
                        style={{ color: "#18336c", fontSize: "20px" }}
                      >
                        <i className="fas fa-phone"></i>
                      </div>
                      <div
                        className="text-center"
                        style={{ color: "black", fontSize: "20px" }}
                      >
                        <b>Обадете ни се по всяко време:</b>
                      </div>
                      <div className="text-center">
                        <a href="tel:+447789161193">+44 7789161193</a>
                      </div>
                      <div className="text-center">
                        <a href="tel:+919257874994">+91 9257874994</a>
                      </div>
                    </div>
                    {/* <div className='col-12 col-md-12 col-lg-6 card p-2'>
                                            <div className='text-center' style={{color: '#18336c', fontSize: '20px'}}><i className="fas fa-location-dot"></i></div>
                                            <div className='text-center' style={{color: 'black', fontSize: '20px'}}><b>Our Office Address :</b></div>
                                            <div className='text-center'>International House, Constance Street, London E16</div>
                                        </div> */}
                    <div className="col-12 col-md-12 col-lg-12 card p-2">
                      <div
                        className="text-center"
                        style={{ color: "#18336c", fontSize: "20px" }}
                      >
                        <i className="fas fa-location-dot"></i>
                      </div>
                      <div
                        className="text-center"
                        style={{ color: "black", fontSize: "20px" }}
                      >
                        <b>Нашият клон в Индия :</b>
                      </div>
                      <div className="text-center">
                        410, 4-ти етаж, Ашока Палас, Шобхагпура, Udaipur,
                        Rajasthan
                      </div>
                    </div>
                    {/* UK Branch Address  */}
                    <div className="col-12 col-md-12 col-lg-12 card p-2">
                      <div
                        className="text-center"
                        style={{ color: "#18336c", fontSize: "20px" }}
                      >
                        <i className="fas fa-location-dot"></i>
                      </div>
                      <div
                        className="text-center"
                        style={{ color: "black", fontSize: "20px" }}
                      >
                        <b>Нашият клон в Обединеното кралство :</b>
                      </div>
                      <div className="text-center">
                        312, Пентакс Хаус, Саут Хил Авеню, Саут Хароу,
                        Мидълсекс, HA2 0DU, United Kingdom
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
