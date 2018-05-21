import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default [
    {
        id: '0',
        title: <span>Formula<br/>Stocks</span>,
        subtitle: (<span>
                        Beat the stock market with
                        <br/>
                        an +89% winrate using AI.
                    </span>),
        website: 'https://formulastocks.com',
        image: '/media/fs_screenshot.jpg',
        webpImage: '/media/fs_screenshot.webp',
        color: '#27a5f9',
    },
    {
        id: '1',
        title: <span>Bring<br/>The band</span>,
        subtitle: (<span>
                        Vote for your favorite
                        <br/>
                        artist to join the festival
                    </span>),
        website: 'https://marklyck.github.io/Bring-the-Band',
        image: '/media/btb_screenshot.png',
        webpImage: '/media/btb_screenshot.webp',
        color: '#2bba87',
    },
    {
        id: '2',
        title: <span>Let's<br/>Get in Touch</span>,
        subtitle: (<span>
                        <FontAwesomeIcon icon="envelope" /> <a href="mailto:hello@markdid.it">hello@markdid.it</a><br/>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} /> <a href="https://www.linkedin.com/in/mlyck/" target="_blank" rel="noopener noreferrer" >LinkedIn</a><br/>
                        <FontAwesomeIcon icon={['fab', 'twitter']} /> <a href="https://twitter.com/MarkLyck" target="_blank" rel="noopener noreferrer" >Twitter</a><br/>
                        <FontAwesomeIcon icon={['fab', 'github']} /> <a href="https://github.com/MarkLyck" target="_blank" rel="noopener noreferrer" >GitHub</a><br/>
                        <FontAwesomeIcon icon={['fas', 'file-pdf']} style={{ margin: '0 3px' }}/> <a href="/files/Resume_Mark_Lyck.pdf" target="_blank" rel="noopener noreferrer" >Résumé</a><br/>
                    </span>),
        website: '',
        image: '/media/contact.jpg',
        webpImage: '/media/contact.webp',
        color: '#ff4d5a',
    },
]