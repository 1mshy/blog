import React from 'react';
import {ReactComponent as AboutLogo} from '../static/icons/account.svg';
import {ReactComponent as HomeLogo} from '../static/icons/home.svg';
import {ReactComponent as MailLogo} from '../static/icons/mail.svg';

export const SidebarData = [
    {
        title:"Dashboard",
        icon: <HomeLogo />,
        link: "/home"

    },
    {
        title:"Mailbox",
        icon: <MailLogo />,
        link: "/mail"

    },
    {
        title:"About",
        icon: <AboutLogo />,
        link: "/about"

    }
]