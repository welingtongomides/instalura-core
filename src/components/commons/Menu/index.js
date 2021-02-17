import React from 'react';
import Logo  from '../../../theme/Logo';
import { MenuWraper } from './styles/MenuWrapper';

export default function Menu() {
    const links = [
        {
            texto: 'Home',
            url: '/'
        },
        {
            texto: 'Perguntas frequentes',
            url: '/faq'
        },
        {
            texto: 'Sobre',
            url: '/sobre'
        },
    ];

    return (
        <MenuWraper>
            <MenuWraper.LeftSide>
                    <Logo/>
            </MenuWraper.LeftSide>
            <MenuWraper.CentralSide>
                   {links.map(  (link)=>{
                       return (
                         <li>
                           <a href={link.url}>
                               {link.texto}
                           </a> 
                         </li>
                       )
                   })}
            </MenuWraper.CentralSide>
            <MenuWraper.RightSide>
                   <button>
                       Entrar
                   </button>
                   <button>
                       Cadastrar
                   </button>
            </MenuWraper.RightSide>
        </MenuWraper>
    )
}