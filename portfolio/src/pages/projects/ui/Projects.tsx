import React, { useState } from "react";
import Lottie from 'lottie-react';

import './Projects.scss';
import kaisospeak from './../../../assets/video/kaisospeak.mp4';
import book from './../../../assets/json/StudyX.json';
import quiz from './../../../assets/img/quiz-icon.png';

import EtukkLogo from './../../../assets/svg/etukk-logo.svg?react';
import KaisoSpeakLogo from './../../../assets/svg/logo-kaisospeak.svg?react';


import KSDashboard from './../../../assets/img/ks-dashobard.jpg';
import KSSubs from './../../../assets/img/ks-subscriptions.jpg';
import KShero from './../../../assets/img/ks-hero.jpg';
import KSconnections from './../../../assets/img/ks-connections.jpg';

export const Projects = () => {

    const [mainImg, setMainImg] = useState(KSDashboard)

    return (
        <div className="projects">
            {/* <div className="projects__content">
                <div className="projects__item projects__item--kaisospeak">
                    <video src={kaisospeak} muted autoPlay loop className="projects__video"></video>
                    <div className="projects__additional">
                        <p>Ваш личный помощник в мире криптоарбитража.
                            Наша передовая система не только обнаруживает для вас самые выгодные торговые возможности в реальном времени,
                            но и учитывает все сопутствующие комиссии.
                        </p>
                    </div>
                </div>
                <div className="projects__item projects__item--service">
                </div>
                <div className="projects__item projects__item--etukk">
                    <EtukkLogo />
                </div>
                <div className="projects__item projects__item--studyx">
                    <div className="book-animation">
                        <Lottie animationData={book} loop={true} />
                    </div>
                    <article className="projects__article">Student Exchange</article>
                </div>
                <div className="projects__item projects__item--quizz">
                    <img src={quiz} alt="quiz icon" />
                    Quizz
                </div>
            </div> */}
            <div className="projects__content">
                <section className="projects__item project project--kaisospeak">
                    <div className="project__left">
                        <KaisoSpeakLogo className="project__logo" />
                        <div className="link-container">
                            <a className="project__link" href='https://kairospeak.com/' target="_blank">kaisospeak.com</a>
                        </div>
                        {/* <h2 className="project__title">Приложение для аналитики криптобирж.</h2> */}
                        <article className="project__article">Описание проекта:</article>
                        <p className="project__descr">
                            Коммерческий проект с Лендингом и Дашбордом.
                            Продукт нацелен на отслеживание криптовалют на различных биржах с целей наиболее выходной покупки/продажи.
                            В качестве системы оплаты использовался CloudPay, в зависимости от типа подписки пользователю доступен различный контент.
                        </p>
                        <article className="project__article">Что интересного:</article>
                        <div className="list-container">
                            <ul className="project-list">
                                <li className="project-list__item">
                                    Получение данных производится из двух источников классический по http Get запросами и получение данных в реальном времени по socket.io.
                                </li>
                                <li className="project-list__item">
                                    Использование двухшаговой авторизации посредством запросом на backend и приложений аунтентификаторов (например: Google Authentificator).
                                </li>
                            </ul>
                        </div>
                        <article className="project__article">Сложности:</article>
                        <div className="list-container">
                            <ul className="project-list">
                                <li className="project-list__item">
                                    В дизайне отсутсвовали промежуточные разрешения, анимации предоставленный дизайнером были трудноосуществимы.
                                    Многие элементы в ходе разработки были придуманы мной.
                                </li>
                                <li className="project-list__item">
                                    Возникали многочисленные баги на мобильных устройствах, в частности на устройствах Apple. Например, window.open с асинхронной ссылкой блокировался.
                                    Фиксированное позициорование вело себя непредсказуемо.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project__right">
                        <div className="project__img">
                            <img src={mainImg} />
                        </div>
                        <ul className="list-reset img-list">
                            <li className="img-list__item" onClick={(() => setMainImg(KSSubs))}  >
                                <img src={KSSubs} alt='Subscriptipn page screen' />
                            </li>
                            <li className="img-list__item" onClick={(() => setMainImg(KShero))}>
                                <img src={KShero} alt='Hero section screen' />
                            </li>
                            <li className="img-list__item" onClick={(() => setMainImg(KSconnections))}>
                                <img src={KSconnections} alt='Connection section screen' />
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}
