import React from "react";
import Lottie from 'lottie-react';

import './Projects.scss';
import kaisospeak from './../../../assets/video/kaisospeak.mp4';
import book from './../../../assets/json/StudyX.json';
import quiz from './../../../assets/img/quiz-icon.png';

import EtukkLogo from './../../../assets/svg/etukk-logo.svg?react';


export const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__content">
                <div className="projects__item projects__item--kaisospeak">
                    <video src={kaisospeak} muted autoPlay loop className="projects__video"></video>
                    <div className="projects__additional">
                        <p>Ваш личный помощник в мире криптоарбитража.
                            Наша передовая система не только обнаруживает для вас самые выгодные торговые возможности в реальном времени,
                            но и учитывает все сопутствующие комиссии.
                        </p>
                        {/* <button className="btn-reset">Подробнее</button> */}
                    </div>
                </div>
                <div className="projects__item projects__item--service">
                    {/* <ServiceLogo /> */}
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
            </div>
        </div>
    )
}
