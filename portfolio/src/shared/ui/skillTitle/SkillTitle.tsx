import React from "react";


interface ISkillTitleProps {
    index: number,
    item: string
}

export const SkillTitle: React.FC<ISkillTitleProps> = ({ index, item }) => {

    return (
        <li
            key={index}
            className={index === 1 ? "skill-title direction-list__item direction-list__item--active" : "direction-list__item skill-title"} >
            {item}
        </li>
    )
}