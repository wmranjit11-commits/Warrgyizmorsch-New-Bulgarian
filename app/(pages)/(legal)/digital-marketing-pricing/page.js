import React from "react";
import { generateSEOMeta } from "../../../../utils/seo";

export const metadata = generateSEOMeta({
  title: "Цени за дигитален маркетинг | Warrgyiz Morsch",
  description:
    "Вижте прозрачни ценови планове за дигитален маркетинг, създадени за различни бизнес цели.",
  path: "/digital-marketing-pricing",
});

const DigitalMarketingPricing = () => {
  return (
    <>
      <div
        className="space"
        id="contact-sec"
        style={{
          backgroundImage: `url('assets/img/bg/form_bg_1.jpg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="title-area text-center">
            <h1>Цени за дигитален маркетинг</h1>
          </div>

          <div>
            <h5>Таблица с цени за дигитален маркетинг и бизнес услуги за 2025 г.</h5>

            <table>
              <thead>
                <tr>
                  <th>Услуга за дигитален маркетинг</th>
                  <th>Глобална месечна цена (USD)</th>
                  <th>Месечна цена в Индия (INR)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Оптимизация за търсачки (SEO)</td>
                  <td>$500–$10,000</td>
                  <td>₹15K–₹20K</td>
                </tr>
                <tr>
                  <td>Реклама с плащане на клик (PPC)</td>
                  <td>$100–$50,000</td>
                  <td>₹5K–₹20K</td>
                </tr>
                <tr>
                  <td>Имейл маркетинг</td>
                  <td>$50–$5,000</td>
                  <td>₹5K–₹10K</td>
                </tr>
                <tr>
                  <td>Маркетинг в социалните мрежи</td>
                  <td>$300–$20,000</td>
                  <td>₹10K–₹30K</td>
                </tr>
                <tr>
                  <td>Уеб дизайн / разработка</td>
                  <td>$500–$50,000</td>
                  <td>₹50K–₹200K</td>
                </tr>
                <tr>
                  <td>Съдържание маркетинг</td>
                  <td>$650–$25,000</td>
                  <td>₹10K–₹20K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketingPricing;