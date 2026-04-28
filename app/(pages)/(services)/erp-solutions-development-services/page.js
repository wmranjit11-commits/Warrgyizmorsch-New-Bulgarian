import { roleWriting, LargeData, AssistanceSection, FAQ } from '../../../../data/All_Services_Data/erpSoftwareDevelopmentServicesData';
import Assistance_section from "../../../../components/service-components/Assistance_section";
import Handle_Largedata_section from "../../../../components/service-components/Handle_Largedata_section";
import NewBlogSection from "../../../../components/home-page-components/NewBlogSection";
import FAQ_section from "../../../../components/service-components/FAQ_section";
import Role_writing from "../../../../components/service-components/Role_writing";
import NewServiceHeroForm from "../../../../components/home-page-components/NewServiceHeroForm";
import { generateSEOMeta } from "../../../../utils/seo";
import NewIndustrySection from "../../../../components/home-page-components/NewIndustrySection";

export const metadata = generateSEOMeta({
  title: "Услуги за разработка на персонализирани ERP решения за бизнес ефективност",
  description:
    "Повишете производителността с нашите услуги за разработка на персонализирани ERP решения, проектирани да оптимизират операциите и да стимулират бизнес растежа.",
  keywords: [
    "Персонализирани ERP решения",
    "Разработка на ERP софтуер",
    "ERP услуги",
    "ERP системи",
    "Планиране на ресурсите на предприятието",
    "ERP софтуер",
  ],
  path: "erp-solutions-development-services",
});

const ErpSoftwareDevelopmentServices = () => {

    return (
      <>
        <NewServiceHeroForm
          title={"Услуги за разработка на персонализирани ERP решения"}
        />
        <section className="space-extra-bottom">
          <div className="page-single">
            <div className="page-content">
              <style>{`
                        .header-section{
                            display: flex;
                            align-items: center;
                            gap: 20px;
                            margin-bottom: 30px;
                        }
                        .header-section img{
                            height: 400px;
                        }
                        .header-section p{
                            text-align: left;
                        }

                        @media only screen and (max-width: 990px) {
                            .header-section{
                                flex-direction: column;
                            }
                            .header-section img{
                                height: 200px;
                            }
                            .header-section p{
                                text-align: center;
                            }
                        }
                        `}</style>
              {/* Intro part  */}
              <div
                className="header-section container"
                style={{ marginTop: "20px" }}
              >
                <img
                  src="assets/img/icon/erp-development.png"
                  loading="lazy"
                  alt="heading_image"
                />
                <div>
                  <p>
                    <a href="/">Warrgyizmorsch</a> предоставя услуги за разработка на персонализирани ERP решения, които съответстват на вашия бизнес процес с прецизност и гъвкавост. Разбираме, че всяка компания има уникален начин на работа, затова създаваме ERP услуги за мащабируемост, ефективност и пълен контрол върху вашите операции. Нашият екип има задълбочени познания в индустрията и опит в предоставянето на надеждни решения, които са лесни за потребителите и готови за бъдещи нужди. Както стартъпите, така и утвърдените предприятия се възползват от оптимизирани операции, по-добра видимост на данните и по-бързо вземане на решения. Проектираме ERP решения, които се разширяват с растежа на вашия бизнес, носейки гъвкавост и висока производителност на всеки етап.
                  </p>
                </div>
              </div>
              <Role_writing data={roleWriting} />
              <Handle_Largedata_section LargeData={LargeData} />
              <section className="erp-section container">
                <style>
                  {`
                                .erp-section {
                                    padding: 2.5rem 1rem;
                                    background-color: white;
                                    font-family: Arial, sans-serif;
                                    color: #1f2937;
                                }

                                .erp-section-heading {
                                    text-align: center;
                                }

                                .erp-section-body {
                                    display: flex;
                                    flex-direction: column;
                                    gap: 2rem;
                                }

                                .erp-section-image {
                                    text-align: center;
                                }

                                .erp-section-image img {
                                    max-width: 100%;
                                    height: auto;
                                }

                                .erp-section-lists {
                                    display: grid;
                                    grid-template-columns: 1fr;
                                    gap: 1rem;
                                }

                                .erp-section-lists ul {
                                    padding-left: 1.25rem;
                                    list-style: disc;
                                }

                                .erp-section-lists li {
                                    margin-bottom: 0.25rem;
                                }

                                @media (min-width: 768px) {
                                    .erp-section-body {
                                    flex-direction: row;
                                    align-items: center; /* Center image and lists vertically */
                                    }

                                    .erp-section-image {
                                    width: 33.333%;
                                    }

                                    .erp-section-lists-wrapper {
                                    width: 66.666%;
                                    }

                                    .erp-section-lists {
                                    grid-template-columns: 1fr 1fr;
                                    }
                                }
                                `}
                </style>

                <div className="erp-section-heading">
                  <h2>Характеристики на персонализирания ERP софтуер</h2>
                  <p>
                    Нашият ERP софтуер идва с функции за инвентар, финанси, човешки ресурси, CRM, производство и други, съобразени с вашите задачи. Моментален достъп до данни, сигурен достъп на базата на роли, персонализирани табла и силни отчети ви позволяват да вземате по-добри бизнес решения. Поддръжката на операции на няколко места, няколко езика и мобилно управление ви помагат да контролирате бизнеса във всяка ситуация. Автоматизациите намаляват ръчните грешки, правейки ежедневните задачи по-ефективни и данните винаги надеждни. Всеки ERP продукт е изграден за сигурност и съответствие с правилата, гарантирайки безопасността на вашите данни.
                  </p>
                </div>

                <div className="erp-section-body">
                  <div className="erp-section-image">
                    <img
                      src="/assets/img/icon/erp_service.jpeg"
                      alt="ERP Features"
                    />
                  </div>

                  <div className="erp-section-lists-wrapper">
                    <div className="erp-section-lists">
                      <ul>
                        <li>Управление на взаимоотношенията с клиенти (CRM)</li>
                        <li>Управление на инвентара</li>
                        <li>Управление на проекти</li>
                        <li>Управление на активите на предприятието</li>
                        <li>Управление на дистрибуцията</li>
                        <li>Управление на веригата за доставки</li>
                        <li>Управление на документи</li>
                        <li>Анализи и отчети</li>
                      </ul>
                      <ul>
                        <li>Финансово управление</li>
                        <li>Управление на услугите</li>
                        <li>Планиране на материалните ресурси</li>
                        <li>Проследяемост на партиди и серийни номера</li>
                        <li>Управление на полеви услуги</li>
                        <li>Управление на складове</li>
                        <li>Управление на поръчки за покупка</li>
                        <li>Управление на ресурсите</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section className="container extra-space">
                <style>{`
                                .extra-space {
                                padding-top: 4rem;
                                }
                                .grid-container {
                                padding-top: 2rem;
                                display: grid;
                                grid-template-columns: repeat(3, 1fr);
                                grid-template-rows: repeat(3, auto);
                                gap: 1rem;
                                }
                                .grid-item {
                                //   background: #f9f9f9;
                                //   padding: 1rem;
                                //   border-radius: 0.75rem;
                                //   box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                                display: flex;
                                flex-direction: column;
                                // justify-content: center;
                                align-items: center;
                                text-align: justify;
                                }
                                .grid-item img {
                                max-width: 100%;
                                height: auto;
                                border-radius: 0.75rem;
                                }
                                .grid-item h3 {
                                font-size: 1.1rem;
                                margin-bottom: 0.5rem;
                                }
                                .grid-item p {
                                font-size: 0.9rem;
                                line-height: 1.4;
                                color: #555;
                                }
                                @media (max-width: 768px) {
                                .grid-container {
                                    grid-template-columns: 1fr;
                                }
                                }
                            `}</style>

                <div>
                  <h2>
                    Персонализирани ERP услуги и решения от експертните разработчици на Warrgyizmorsch
                  </h2>
                  <p>
                    Warrgyizmorsch доставя пълен спектър от ERP разработки, използвайки опитни специализирани екипи. От консултациите до стартирането и текущата поддръжка, всяка стъпка е под един покрив при нас. Вярваме, че ERP не трябва да бъде само технически стабилно, но и оперативно полезно за вашата компания. Нашият екип познава много технологични стекове и рамки, изграждайки системи според вашите спецификации. Получавате пълна персонализация и всички части работят безпроблемно заедно. Фокусът остава върху резултатите, доброто представяне на системата и постигането на бизнес целите.
                  </p>
                </div>
                <div className="grid-container">
                  {/* Top-left */}
                  <div className="grid-item">
                    <h3>Разработка на ERP по поръчка</h3>
                    <p>
                      Нашата разработка е насочена към решения, които отразяват вашия бизнес процес и цели. Разбирането на ежедневния ви работен процес е първата стъпка, след което проектираме архитектурата. Изграждаме бази данни, интерфейси и всички компоненти, за да осигурим контрол, мащаб и издръжливост. Всяко ERP е проектирано със скорост и интегритет на данните. Облачно или локално – всяко решение поддържа висока наличност и безопасност. Редовните актуализации и поддръжка винаги са включени, за да поддържат технологията ви напред. Получавате само това, от което се нуждаете.
                    </p>
                  </div>

                  {/* Top-center */}
                  <div className="grid-item">
                    <h3>Експертно внедряване на ERP</h3>
                    <p>
                      Предлагаме експертно внедряване за постигане на резултати без прекъсване на работния процес. Процесът започва с проучване на изискванията, планиране, конфигурация и проверка. Инсталираме всеки ERP модул според вашата бизнес структура. Служителите получават обучение и документация, което им позволява да използват системата по-бързо. Фокусът ни е върху системи, които са лесни за използване и носят незабавни ползи. Рискът и сигурността на данните се управляват по време на цялото внедряване, спазвайки стриктно вашия график.
                    </p>
                  </div>

                  {/* Top-right */}
                  <div className="grid-item">
                    <h3>Безпроблемна миграция на данни</h3>
                    <p>
                      За компаниите, преминаващи от стари към нови ERP системи, осигуряваме безпроблемна миграция, така че важната информация да остане защитена. Управляваме мапирането, проверката, преместването и потвърждаването на всяка единица данни. Историческите данни остават в безопасност и готови за използване в новата настройка. Използваме доказани инструменти и скриптове за избягване на ръчни грешки и намаляване на прекъсванията. Независимо дали сменяте ERP или го надграждате, вашата работа ще остане непрекъсната.
                    </p>
                  </div>

                  {/* Middle-left */}
                  <div className="grid-item">
                    <h3>Услуги за интеграция на ИИ и ERP</h3>
                    <p>
                      Доставяме усъвършенствани услуги за интеграция на ИИ и ERP за повишаване на интелигентността на корпоративната система във всеки отдел. Моделите за машинно обучение и прогнозните анализи се интегрират директно във вашето ERP, за да можете да автоматизирате бизнес процеси и да правите точни прогнози. Тези решения помагат за оптимизиране на управлението на инвентара, повишаване на ангажираността на клиентите и подобряване на оперативната ефективност. Проектираме модули с изкуствен интелект, които се вписват перфектно във вашата инфраструктура. Нека трансформираме вашето текущо ERP в система, която може да се учи и развива с вашата компания.
                    </p>
                  </div>

                  {/* Middle-center (Image) */}
                  <div
                    className="grid-item"
                    style={{ justifyContent: "center" }}
                  >
                    <img src="assets/img/icon/erp.png" alt="ERP Solutions" />
                  </div>

                  {/* Middle-right */}
                  <div className="grid-item">
                    <h3>Конфигурации на ERP системи</h3>
                    <p>
                      Предлагаме услуги за конфигурация, които съгласуват всички настройки на софтуера с вашата бизнес логика и ежедневни работни процеси. Всяка настройка и разрешение са съобразени с оперативните приоритети и одобрения, които вашите екипи изискват. По отношение на потребителските роли, правилата за автоматизация и йерархиите на одобрение – ние управляваме всяка конфигурация за висока използваемост. Потребителските интерфейси и таблата също се адаптират за всеки екип. Получавате напълно съгласувана система, която работи в ритъма на вашия бизнес.
                    </p>
                  </div>

                  {/* Bottom-left */}
                  <div className="grid-item">
                    <h3>Складиране на данни</h3>
                    <p>
                      Осигуряваме на бизнесите стабилни решения за складиране на данни, правейки възможно централизирането и анализирането на големи количества информация. Нашите хранилища са готови да съхраняват структурирани и неструктурирани данни от много източници, поддържайки директна интеграция с ERP системата. Вашите данни остават последователни, достъпни и бързи за извличане. Тези решения подпомагат прогнозирането на тенденции и мониторинга на производителността за стратегическо планиране. Системите ни са мащабируеми, за да отговорят на вашите нужди.
                    </p>
                  </div>

                  {/* Bottom-center */}
                  <div className="grid-item">
                    <h3>Мощни отчети</h3>
                    <p>
                      От бързи резюмета за ръководството до подробни анализи, нашите модули за отчетност улесняват вземането на интелигентни решения с прецизност и темпо. Вградени са инструменти за визуализация за лесно интерпретиране на данните. С нашите решения всеки бизнес превръща своите данни в приложими знания. Персонализируемите табла позволяват на различните отдели да наблюдават най-важното за тях. Отчетите могат да се планират или генерират в реално време, предоставяйки навременни прозрения.
                    </p>
                  </div>

                  {/* Bottom-right */}
                  <div className="grid-item">
                    <h3>Персонализирани ERP табла</h3>
                    <p>
                      Проектираме персонализирани табла, за да дадем на всяко ниво потребители приложим изглед на ключовите показатели за ефективност. Всеки интерфейс е отзивчив, лесен за навигация и организиран за ясна комуникация на бизнес целите. Сложните данни се превръщат в лесни визуализации, които помагат на екипите да действат бързо. Потребителите могат да създават сигнали, за да бъдат информирани в реално време. Интерактивните диаграми и уиджети позволяват задълбочаване в данните без технически умения. Нашите решения гарантират, че вземащите решения получават правилната информация в точното време.
                    </p>
                  </div>
                </div>
              </section>
              <Assistance_section data={AssistanceSection} />
              <NewIndustrySection />;
              {/* Blog Section  */}
              <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <NewBlogSection />
              </div>
              {/* FAQ section  */}
              <FAQ_section data={FAQ} />
            </div>
          </div>
        </section>
        <div className="scroll-top">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: "307.919",
              }}
            ></path>
          </svg>
        </div>
      </>
    );
}

export default ErpSoftwareDevelopmentServices