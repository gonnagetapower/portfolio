import React, { useEffect, useRef, useState } from "react";

import "./Projects.scss";
import KaisoSpeakLogo from "./../../../assets/svg/logo-kaisospeak.svg?react";

import KSDashboard from "./../../../assets/img/ks-dashobard.jpg";
import KSSubs from "./../../../assets/img/ks-subscriptions.jpg";
import KShero from "./../../../assets/img/ks-hero.jpg";
import KSconnections from "./../../../assets/img/ks-connections.jpg";

import quizVideo from "./../../../assets/video/quiz.mp4";
import vkStudentx from "./../../../assets/img/vk.jpg";
import FirstVk from "./../../../assets/img/1vk.jpg";
import SecondVk from "./../../../assets/img/2vk.jpg";
import ThirdVk from "./../../../assets/img/3vk.jpg";
import FourthVk from "./../../../assets/img/4vk.jpg";

import Kor1 from "./../../../assets/img/kor1.jpg";
import Kor2 from "./../../../assets/img/kor2.jpg";

import Flutter from "./../../../assets/img/flutter.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useWindowDimensions from "src/hooks/useWindowDimensions";
import { createPortal } from "react-dom";
import Modal from "src/shared/ui/modal/Modal";

export const Projects = () => {
  const refProjects = useRef<HTMLDivElement>();
  const refFirst = useRef<HTMLDivElement>();
  const refSecond = useRef<HTMLElement>();
  const refThird = useRef<HTMLElement>();
  const refFourth = useRef<HTMLElement>();
  const videoRef = useRef<HTMLVideoElement>();

  const { width } = useWindowDimensions();

  const refsArray = [refFirst, refSecond, refThird, refFourth];

  const [mainImg, setMainImg] = useState(KSDashboard);
  const bgImages = [KSDashboard, KSSubs, KShero, KSconnections];

  const corImages = [Kor1, Kor2];
  const [mainCorImg, setMainCorImg] = useState(Kor1);
  const [indexSection, setIndexSection] = useState(0);

  const [counterScroll, setCounterScroll] = useState(0);
  const [disableScroll, setDisableScroll] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalImg, setModalImg] = useState("");
  //@ts-ignore
  //   Element.prototype.scrollIntoViewPromise = function (options) {
  //     this.scrollIntoView(options);
  //     let parent = this;
  //     return {
  //       then: function (x) {
  //         const intersectionObserver = new IntersectionObserver((entries) => {
  //           let [entry] = entries;
  //           if (entry.isIntersecting) {
  //             setTimeout(() => {
  //               x();
  //               intersectionObserver.unobserve(parent);
  //             }, 100);
  //           }
  //         });
  //         intersectionObserver.observe(parent);
  //       },
  //     };
  //   };

  const handleScroll = () => {
    setCounterScroll(0);
    setDisableScroll(false);
  };

  const handleImg = (setState: (img: string) => void, img: string) => {
    if (width > 1300) {
      setState(img);
    } else {
      setModalActive(true);
      setModalImg(img);
    }
  };

  useEffect(() => {
    if (width > 1300) {
      window.addEventListener("wheel", function (event) {
        setCounterScroll(counterScroll + 1);
        let pos = 0;
        if (disableScroll === false) {
          if (event.deltaY < 0 && indexSection >= 1) {
            //console.log('scrolling up');
            setIndexSection(indexSection - 1);
            pos = indexSection - 1;
            refsArray[pos].current!.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setCounterScroll(0);
            setDisableScroll(false);
            //   refsArray[pos].current
            //     .scrollIntoViewPromise({ behavior: "smooth" })
            //     .then(() => handleScroll());
          } else if (event.deltaY > 0 && indexSection < refsArray.length - 1) {
            //console.log('scrolling down');
            setIndexSection(indexSection + 1);
            pos = indexSection + 1;
            refsArray[pos].current!.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setCounterScroll(0);
            setDisableScroll(false);
            //   refsArray[pos].current
            //     .scrollIntoViewPromise({ behavior: "smooth" })
            //     .then(() => handleScroll());
          }
        }
      });
      if (indexSection === 1) {
        videoRef.current!.play();
      }
    }
  }, [indexSection, width]);

  return (
    <div
      className="projects"
      ref={refProjects as React.RefObject<HTMLDivElement>}
    >
      <div
        ref={refFirst as React.RefObject<HTMLDivElement>}
        className="projects__content"
      >
        <section className="projects__item project project--kaisospeak">
          <div className="project__left">
            <KaisoSpeakLogo className="project__logo" />
            <div className="link-container">
              <a
                className="project__link"
                href="https://kairospeak.com/"
                target="_blank"
              >
                kaisospeak.com
              </a>
            </div>
            {/* <h2 className="project__title">Приложение для аналитики криптобирж.</h2> */}
            <article className="project__article">Описание проекта:</article>
            <p className="project__descr">
              Коммерческий проект с Лендингом и Дашбордом. Продукт нацелен на
              отслеживание криптовалют на различных биржах с целей наиболее
              выходной покупки/продажи. В качестве системы оплаты использовался
              CloudPay, в зависимости от типа подписки пользователю доступен
              различный контент.
            </p>
            <article className="project__article">Что интересного:</article>
            <div className="list-container">
              <ul className="project-list">
                <li className="project-list__item">
                  Получение данных производится из двух источников классический
                  по http Get запросами и получение данных в реальном времени по
                  socket.io.
                </li>
                <li className="project-list__item">
                  Использование двухшаговой авторизации посредством запросом на
                  backend и приложений аунтентификаторов (например: Google
                  Authentificator).
                </li>
              </ul>
            </div>
            <article className="project__article">Сложности:</article>
            <div className="list-container">
              <ul className="project-list">
                <li className="project-list__item">
                  В дизайне отсутсвовали промежуточные разрешения, анимации
                  предоставленный дизайнером были трудноосуществимы. Многие
                  элементы в ходе разработки были придуманы мной.
                </li>
                <li className="project-list__item">
                  Возникали многочисленные баги на мобильных устройствах, в
                  частности на устройствах Apple. Например, window.open с
                  асинхронной ссылкой блокировался. Фиксированное позициорование
                  вело себя непредсказуемо.
                </li>
              </ul>
            </div>
          </div>
          <div className="project__right">
            {width > 1300 ? (
              <>
                <div className="project__img">
                  <img src={mainImg} />
                </div>
                <ul className="list-reset img-list">
                  {bgImages
                    .filter((img) => img !== mainImg)
                    .map((img, index) => (
                      <li
                        key={index}
                        className="img-list__item"
                        onClick={() => handleImg(setMainImg, img)}
                      >
                        <img src={img} alt="Subscriptipn page screen" />
                      </li>
                    ))}
                </ul>
              </>
            ) : (
              <div className="kaisospeak-swiper">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide
                    onClick={() => handleImg(setMainImg, KSDashboard)}
                  >
                    <img src={KSDashboard} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={KSSubs}
                      onClick={() => handleImg(setMainImg, KSSubs)}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={KSconnections}
                      onClick={() => handleImg(setMainImg, KSconnections)}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={KShero}
                      onClick={() => handleImg(setMainImg, KShero)}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            )}
          </div>
        </section>
        <section
          ref={refSecond as React.RefObject<HTMLElement>}
          className="projects__item project project--vk"
        >
          <div className="project__content">
            <div className="project__left">
              <video
                className="project__video"
                muted
                controls
                ref={videoRef as React.RefObject<HTMLVideoElement>}
              >
                <source src={quizVideo} type="video/mp4" />
              </video>
            </div>
            <div className="project__center">
              <h1>Проекты на платформе Vkmini app's</h1>
              <article className="project__article">Описание проектов:</article>
              <p className="project__descr">
                Quizz - приложение для прохождения тестов. Существует система
                получение внутренней валюты (монет) для прохождени для
                прохождения дальнейших уровней. Монеты зарабатывается путем
                просмотра рекламы, которая интегрирована в системе VK. StudentX
                - проект стартап, представляет собой биржу по найму/поиску
                исполнителей заказов в образовательной сфере.
              </p>
              <article className="project__article">Что интересного:</article>
              <div className="list-container">
                <ul className="project-list">
                  <li className="project-list__item">
                    Новая для меня платформа интеграции React приложений.
                  </li>
                  <li className="project-list__item">
                    Интеграция с рекламой VK.
                  </li>
                  <li className="project-list__item">
                    Использование навигации VK.
                  </li>
                  <li className="project-list__item">
                    Произвел деплой клиента на ОС centos, клиент на NGINX,
                    nodeJS под управлением PM2.
                  </li>
                </ul>
              </div>
              <article className="project__article">Сложности:</article>
              <div className="list-container">
                <ul className="project-list">
                  <li className="project-list__item">
                    В техническом задании продукта устанавливались ограничения
                    на применение библиотек.
                  </li>
                  <li className="project-list__item">
                    Существовали трудности по построению/объединению nodeJS в
                    единую устойчивую систему.
                  </li>
                </ul>
              </div>
            </div>
            <div className="project__right">
              <div className="project__img">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={vkStudentx} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={FirstVk} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={SecondVk} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThirdVk} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={FourthVk} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={refThird as React.RefObject<HTMLElement>}
          className="projects__item project project--service"
        >
          <div className="project__left">
            {/* <KaisoSpeakLogo className="project__logo" /> */}
            <h1>Закрытый проект</h1>
            <div className="link-container">
              <a className="project__link" target="_blank">
                Деплой на корпоративной сети
              </a>
            </div>
            {/* <h2 className="project__title">Приложение для аналитики криптобирж.</h2> */}
            <article className="project__article">Описание проекта:</article>
            <p className="project__descr">
              Созданный проект командой разработчиков на основной работе. Здесь
              я участвовал в качестве fullstack-разработчика. Этот проект до сих
              пор расширяется и модернизируется.
            </p>
            <article className="project__article">Что интересного:</article>
            <div className="list-container">
              <ul className="project-list">
                <li className="project-list__item">
                  Система имеет различные сервисы для разных отделов и имеет
                  разносторонние задачи.
                </li>
                <li className="project-list__item">
                  Построенная система имеет ролевое разграничение доступа по
                  метке (роли).
                </li>
                <li className="project-list__item">
                  Серверная часть приложения разбита на 3 backend-сервера,
                  каждый из которых взаимодействует со своей базой данных.
                </li>
                <li className="project-list__item">
                  Произвел деплой клиента на ОС centos, клиент на NGINX, nodeJS
                  под управлением PM2.
                </li>
              </ul>
            </div>
            <article className="project__article">Сложности:</article>
            <div className="list-container">
              <ul className="project-list">
                <li className="project-list__item">
                  В техническом задании продукта устанавливались ограничения на
                  применение библиотек.
                </li>
                <li className="project-list__item">
                  Существовали трудности по построению/объединению nodeJS в
                  единую устойчивую систему.
                </li>
              </ul>
            </div>
          </div>
          <div className="project__right">
            {width > 1300 ? (
              <>
                <div className="project__img">
                  <img src={mainCorImg} />
                </div>
                <ul className="list-reset img-list">
                  {corImages
                    .filter((img) => img !== mainCorImg)
                    .map((img, index) => (
                      <li
                        key={index}
                        className="img-list__item"
                        onClick={() => setMainCorImg(img)}
                      >
                        <img src={img} alt="Subscriptipn page screen" />
                      </li>
                    ))}
                </ul>
              </>
            ) : (
              <div className="kaisospeak-swiper">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide onClick={() => handleImg(setMainImg, Kor1)}>
                    <img src={Kor1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Kor2}
                      onClick={() => handleImg(setMainImg, Kor2)}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            )}
            <p className="post-scriptum">
              *Изображения не отображают реальный функционал приложения,
              демонстрация приложения по запросу.
            </p>
          </div>
        </section>
        <section
          ref={refFourth as React.RefObject<HTMLElement>}
          className="projects__item project project--flutter"
        >
          <div className="project__left">
            <h1>Чем занимаюсь сейчас</h1>
            <div className="link-container">
              <a className="project__link" target="_blank">
                Ссылочка будет, как выпущу деплой.
              </a>
            </div>
            <article className="project__article">Описание проекта:</article>
            <p className="project__descr">
              Пробую себя в роли мобильного разработчика. Выбрал для себя
              flutter как нечно принципиально иное (например ReactNative).
              Мучаюсь и пытаюсь понять эту экосистему. В качестве Pet-проекта
              выбрал приложение - челенджер.
            </p>
            <article className="project__article">
              Что интересного для себя узнаю:
            </article>
            <div className="list-container">
              <ul className="project-list">
                <li className="project-list__item">
                  Новая для меня мобильная платформа.
                </li>
                <li className="project-list__item">
                  Совершенно иная обработка данных.
                </li>
                <li className="project-list__item">
                  Разделение логики. Проектирование приложения под архитектуру
                  MVVM.
                </li>
              </ul>
            </div>
            <article className="project__article">Сложности:</article>
            <div className="list-container">
              <ul className="project-list">
                <li className="project-list__item">
                  Ломается все от любого чиха :)
                </li>
                <li className="project-list__item">
                  Не выбрал для себя state-менеджер из популярных таких как
                  bloc, provider, mobx, пока изучаю каждый.
                </li>
              </ul>
            </div>
          </div>
          <div className="project__right">
            <div className="project__img">
              <img src={Flutter} alt="Subscriptipn page screen" onClick={() => handleImg(setMainImg, Flutter)}/>
            </div>
          </div>
        </section>
      </div>
      {modalActive &&
        createPortal(
          <Modal closeModal={() => setModalActive(false)}>
            <div className="describe">
              <img src={modalImg} alt="Modal image" />
            </div>
          </Modal>,
          document.querySelector(".projects")!
        )}
    </div>
  );
};
