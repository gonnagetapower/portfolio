import TelegramIcon from './../../../assets/svg/telegram.svg?react';
import PDFIcon from './../../../assets/svg/pdf-icon.svg?react';
import Pdf from './../../../assets/pdf/sample.pdf';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Contacts.scss';

const contacts = {
    telegram: 'https://t.me/gonnagetapower',
    github: 'https://github.com/gonnagetapower'
}

const readPrivacy = () => {
    window.open(Pdf)
}


export const Contacts = () => {
    return (
        <ul className="list-reset contacts">
            <li className="contacts__item">
                <a href={contacts.telegram} target="_blank" className="contacts__link"><TelegramIcon className="contacts__icon" /></a>
            </li>
            <li className="contacts__item">
                <a href={contacts.github} target="_blank" className="contacts__link"><GitHubIcon className="contacts__icon" /></a>
            </li>
            <li className="contacts__item">
                <a onClick={readPrivacy} target="_blank" className="contacts__link"><PDFIcon className="contacts__icon" /></a>
            </li>
        </ul>
    )
}
