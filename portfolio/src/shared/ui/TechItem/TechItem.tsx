import React from "react";

import './TechItem.scss';

interface ITechItemProps {
    techTitle: string
}

export const TechItem: React.FC<ITechItemProps> = ({techTitle}) => {
    return (
        <li className="tech-item">{techTitle}</li>
    )
}