"use client";

import NewContactModal from "../../components/home-page-components/NewContactModal";

export default function CaseClient({ caseStudy }) {
    return (
        <section>
            {/* HERO */}
            <div className="aloe-section">
                <div className="aloe-image-container">
                    <img
                        src="/assets/img/service/serviceD.jpg"
                        alt={caseStudy.title}
                        className="aloe-image"
                    />
                    <div className="aloe-text">
                        {/* ✅ SINGLE H1 */}
                        <h1 className="sec-title text-white">
                            {caseStudy.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="container">
                <div className="main-div">
                    <div
                        className="content-div"
                        dangerouslySetInnerHTML={{ __html: caseStudy.content }}
                    />

                    {/* STICKY FORM */}
                    <div className="form-div">
                        <NewContactModal />
                    </div>
                </div>
            </div>
        </section>
    );
}
