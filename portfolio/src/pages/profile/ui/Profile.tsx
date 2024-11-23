import React from "react";

import './Profile.scss';

import myPhoto from './../../../assets/img/me.jpg';
import { Contacts } from "@shared/*";


export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__content">
                    <div className="profile__header">
                        <div className="profile__left">
                            <img className="profile__img" src={myPhoto} alt='Most handsome man in world' />
                        </div>
                        <div className="profile__right">
                            <h2 className="profile__title">Карпов Александр</h2>
                            <Contacts />
                            <p className="profile__descr">
                                {/* Frontend developer более чем с 2 годами опыта в различных проектах.
                                Имею опыт, как на фрилансе так и в команде разработчиков.
                                Специализируюсь как на классической верстке, так и на построении современных web-приложений.
                                В данный момент работаю на позиции fullstack-разработчика, по всем вопросам обращаться в telegram. */}
                                Ничто в настоящей Декларации не может быть истолковано, как предоставление какомулибо государству, группе лиц или отдельным лицам права заниматься какойлибо деятельностью или совершать действия, направленные к уничтожению прав и свобод, изложенных в настоящей Декларации. Принимая во внимание, что признание достоинства, присущего всем членам человеческой семьи, и равных и неотъемлемых прав их является основой свободы, справедливости и всеобщего мира; и
                            </p>
                        </div>
                    </div>
                    <div className="profile__body">
                        <h2 className="profile__title">Навыки:</h2>
                        <div className="profile__lists">
                            <div className="skills">
                                <article className="profile__article">Что умею</article>
                                <ul className="tech">
                                    <li className="tech__item">JavaScript/TypeScript</li>
                                    <li className="tech__item">ReactJS</li>
                                    <li className="tech__item">NodeJs</li>
                                    <li className="tech__item">Express</li>
                                    <li className="tech__item">BEM</li>
                                    <li className="tech__item">PixelPerfect</li>
                                    <li className="tech__item">SCSS</li>
                                    <li className="tech__item">Redux-toolkit</li>
                                    <li className="tech__item">Socket.io</li>
                                </ul>
                            </div>
                            <div className="skills">
                                <article className="profile__article">Что изучаю</article>
                                <ul className="tech">
                                    <li className="tech__item">Dart</li>
                                    <li className="tech__item">Flutter</li>
                                    <li className="tech__item">NextJS</li>
                                    <li className="tech__item">FSD</li>
                                    <li className="tech__item">MVVM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
