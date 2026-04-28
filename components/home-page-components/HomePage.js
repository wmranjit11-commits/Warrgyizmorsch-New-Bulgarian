import NewBriefIntro from "./NewBriefIntro";
import NewWhyChooseUs from "./NewWhyChooseUs";
import NewService from "./NewService";
import NewHero from "./NewHero";
import NewSlider from "./NewSlider";
import NewCta from "./NewCta";
import NewTechSection from "./NewTech";
import NewOurWork from "./NewOurWork";
import NewCaseStudy from "./NewCaseStudy";
import NewBlogSection from "./NewBlogSection";
import NewFaq from "./NewFaq";
import NewContact from "./NewContact";
import NewGallery from "./NewGallery";
import NewLeader from "./NewLeader";
import NewTestimonial from "./NewTestimonial";
import NewProjectProcess from "./NewProcess";
import SocialMediaGrid from "./SocialMediaGrid";

const HomePage = () => {

  return (
    <>
      <NewHero />

      {/* Sub hero section  */}
      <NewSlider />
      {/* Brief Intro  */}
      <NewBriefIntro />

      {/* Our Service */}
      <NewService />

      {/* Why Choose us  */}
      <NewWhyChooseUs />

      {/* CTA Strip */}
      <NewCta />

      {/* Tech Stack */}
      <div className="overflow-hidden">
        <NewTechSection />
      </div>

      {/* Our Work  */}
      <NewOurWork />

      {/* Case Study  */}
      <div className="hide-on-mobile">
        <NewCaseStudy />
      </div>

      {/* Testimonial  */}
      <NewTestimonial />

      {/* Process  */}
      <NewProjectProcess />

      {/* Our Leaders  */}
      <NewLeader />

      {/* Gallery  */}
      <NewGallery />

      {/* FAQ  */}
      <NewFaq />

      {/* Blog Section  */}
      <NewBlogSection />
      {/* Social Media */}
      <SocialMediaGrid />
      {/* Contact section */}
      <NewContact />

    </>
  );
};

export default HomePage;
