import React from "react";
import { generateSEOMeta } from "../../../../utils/seo";

export const metadata = generateSEOMeta({
  title: "Политика за анулиране | Warrgyiz Morsch",
  description:
    "Прегледайте политиката за анулиране на Warrgyiz Morsch, която описва условията за услуги и възстановяване на суми.",
  path: "/cancellation-policy",
});

const CancellationPolicy = () => {
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
            <h1>Политика за анулиране</h1>
          </div>

          <div>
            <h5>
              warrgyiz morsch предоставя възможност за анулиране на поръчки,
              тъй като понякога студентите трябва да се откажат от идеята да
              използват външна помощ по различни причини. Ние анулираме
              поръчки при следните условия:
            </h5>

            <ul>
              <li>
                Ако студентът е направил поръчката два пъти и иска да отмени
                едната.
              </li>
              <li>
                Ако изискванията на заданието са променени от неговия/нейния
                преподавател.
              </li>
              <li>
                В случай че не сме в състояние да завършим проекта поради липса
                на експерти.
              </li>
              <li>
                Ако не можем да завършим работата в зададения срок.
              </li>
              <li>
                Ако клиентът наруши някое от посочените условия.
              </li>
            </ul>

            <h6>Моля, обърнете внимание:</h6>

            <p>
              Поръчката може да бъде анулирана само до 2 дни след потвърждаване
              на поръчката. Ако заявката бъде подадена по-късно, няма да можем
              да я анулираме. Ако срокът е кратък (до 4 дни), политиката за
              анулиране не се прилага.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancellationPolicy;