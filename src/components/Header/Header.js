import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href="/">
      <a style = {{dislay: "fex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
        <DiCssdeck size= "3rem"/> <Span>Portfolio</Span>
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons herf="https://github.com/quynguyen321">
      <AiFillGithub size ="3rem"/>
    </SocialIcons>
    <SocialIcons herf="https://www.linkedin.com/in/quy-charles/">
      <AiFillLinkedin size ="3rem"/>
    </SocialIcons>
    <SocialIcons herf="https://www.instagram.com/quy_charles/">
      <AiFillInstagram size ="3rem"/>
    </SocialIcons>
  </Div3>
</Container>
);

export default Header;
