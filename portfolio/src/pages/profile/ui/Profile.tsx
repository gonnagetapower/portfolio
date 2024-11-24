import React from "react";

import './Profile.scss';

import myPhoto from './../../../assets/img/me.jpg';
import { Contacts, TechItem } from "@shared/*";
import { useNavigate } from "react-router-dom";

import {techsKnow, techsStudy} from "./../../../utils/techsArray";

export const Profile = () => {

    const navigate = useNavigate()

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
                                Всем привет!  <span className="profile__emoji">👋</span> Frontend developer более чем с 2 годами опыта в разнообразных проектах.
                                Имею опыт, как на фрилансе так и в команде разработчиков.
                                Специализируюсь на построении одностраничных веб-приложений (SPA).
                                Примеры работ можете посмотреть на <span onClick={() => navigate('/projects')} className="profile__link">следующей</span> странице.
                                Углубляю свои знания в построении клиентских приложений и изучаю мобильную платформу.
                                В данный момент работаю на позиции fullstack-разработчика, по всем вопросам обращаться в <a href='https://t.me/gonnagetapower' target="_blank" className="profile__link">telegram</a>.
                            </p>
                        </div>
                    </div>
                    <div className="profile__body">
                        <h2 className="profile__title">Навыки:</h2>
                        <div className="profile__lists">
                            <div className="skills">
                                <article className="profile__article">Что умею:</article>
                                <ul className="list-reset tech">
                                    {techsKnow.map((item: string) => (
                                        <TechItem techTitle={item} />
                                    ))}
                                </ul>
                            </div>
                            <div className="skills">
                                <article className="profile__article">Что изучаю:</article>
                                <ul className="list-reset tech tech--reverse">
                                        {techsStudy.map((item: string) => (
                                        <TechItem techTitle={item} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
