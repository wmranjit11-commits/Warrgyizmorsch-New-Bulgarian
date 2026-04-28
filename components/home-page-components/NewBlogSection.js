"use client";
import React, { useEffect, useMemo, useState } from "react";
// import { blogDataList } from "../../data/More_Data/blogData";
import ProductSlider from "../common-components/ProductSlider";
import Link from "next/link";
import { ApiService, API_BASE } from "../../axios/http";

const NewBlogSection = () => {
  const [winWidth, setWinWidth] = useState(null);
  const [blogDataList, setBlogDataList] = useState([]);

  useEffect(() => {
    const update = () => setWinWidth(window.innerWidth);
    update(); // set initial width on client
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(()=>{
    const getBlogData = async () => {
      try{
        const response = await ApiService.get("/blogs", {
          site: "warrgyizmorsch",
        });

        const data = response.data ?? response;

        setBlogDataList(Array.isArray(data) ? data : []);
      } catch(error){
        console.error(error)
      }
    }
    getBlogData();
  },[])

  const truncateText = (text = "", length) =>
    text.length > length ? text.substring(0, length) + "..." : text;

  const getLengths = (w) => {
    // defaults (also used for initial server render)
    let titleLength = 30;
    let descLength = 100;

    if (typeof w !== "number") return { titleLength, descLength };

    if (w < 265) {
      titleLength = 30;
      descLength = 60;
    } else if (w > 265 && w < 355) {
      titleLength = 30;
      descLength = 85;
    } else if (w > 355 && w < 387) {
      titleLength = 30;
      descLength = 95;
    } else if (w > 387 && w < 450) {
      titleLength = 30;
      descLength = 110;
    } else if (w > 450 && w < 1200) {
      titleLength = 20;
      descLength = 110;
    } else if (w > 1200) {
      titleLength = 32;
      descLength = 120;
    }

    return { titleLength, descLength };
  };

  const formatBlogDate = (isoDate) => {
    if (!isoDate) return { day: "", rest: "" };

    const date = new Date(isoDate);

    const day = date.getDate(); // 15
    const rest = date.toLocaleString("en-US", {
      month: "short", // Dec
      year: "numeric", // 2025
    });

    return { day, rest };
  };

  const generateBlogCardHTML = (blogData, w) => {
    const { titleLength, descLength } = getLengths(w);

    const title = truncateText(blogData.title, titleLength);
    const description = truncateText(blogData.content, descLength);
    const imageSrc = blogData.images?.startsWith("http")
      ? blogData.images
      : `${API_BASE}/${blogData.images}`;
    const blogUrl = `/blog/${blogData.slug}`;
    const { day, rest } = formatBlogDate(blogData.created_at);

    return `
      <div class="swiper-slide">
        <div class="nb-card">
          <div class="nb-media">
            <img loading="lazy" src="${imageSrc}" alt="${
      blogData.altText || blogData.title
    }" title="${blogData.title}">
            <div class="nb-date">
              <div class="nb-date-day">${day}</div>
              <div class="nb-date-rest">${rest}</div>
            </div>
          </div>

          <div class="nb-body">
            <div class="nb-author" ${
              blogData?.author?.photo ? "" : 'style="display:none"'
            }>
              <img src=${API_BASE}/storage/${blogData?.author?.photo} alt="author" onerror="this.parentElement.style.display='none'">
            </div>

            <div>
              <h3 class="nb-card-title">
                <a href="${blogUrl}">${title}</a>
              </h3>

              <div class="nb-excerpt">${description}</div>

              <div class="nb-cta-row">
                <a class="th-btn style-radius" href="${blogUrl}">
                  Прочетете повече
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  const blogHTMLData = useMemo(() => {
    return blogDataList?.slice(0, 6)
      .map((b) => generateBlogCardHTML(b, winWidth));
  }, [winWidth, blogDataList]);

  if (blogDataList.length === 0) {
    return null;
  }

    return (
      <div>
        <section>
          <div className="container">
            <div className="title-area text-center">
              <h2
                style={{ color: "black", fontWeight: "500", fontSize: "34px" }}
              >
                Най-новият <span className="new-italic">блог</span>
              </h2>
              <p
                style={{
                  textAlign: "center",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Водейки разговора около технологичните решения и процеси, ви предлагаме най-новите актуализации и прозрения от различни индустрии.
              </p>
            </div>

            <div className="slider-area">
              <ProductSlider cardData={blogHTMLData} slidesPerView={3} />
            </div>
          </div>

          <div className="text-center" style={{ margin: "5px 0 20px 0" }}>
            <Link href={"/blog"}>
              <button className="th-btn style-radius">
                Всички блогове →
              </button>
            </Link>
          </div>
        </section>
      </div>
    );
};

export default NewBlogSection;
