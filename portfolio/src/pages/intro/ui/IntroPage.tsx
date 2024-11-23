import React, { useEffect, useState } from "react"

import './IntroPage.scss';
import { SkillTitle } from "@shared/index.tsx";

export const IntroPage: React.FC = () => {

    const [skillsList, setSkillsList] = useState<string[]>(['Frontend developer', 'Backend developer', 'Fullstack developer', 'Mobile developer']);

    useEffect(() => {
        const newList = skillsList.slice(1);
        const firstElem = skillsList[0];
        for (let i = 0; i < skillsList.length; i++) {
            const timeout = setTimeout(() => {
                if (firstElem) {
                    setSkillsList([...newList, firstElem])
                }
            }, 2500)

            console.log(skillsList)
            return () => clearTimeout(timeout);
        }
    }, [skillsList])



    return (
        <div className="container">
            <div className="intro-page">
                <div className="intro-page__content">
                    <h1 className="intro-page__title">Karpov Alexander -</h1>
                    <ul className="list-reset intro-page__list direction-list">
                        {skillsList.map((item, index) => (
                            <SkillTitle key={index} index={index} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}