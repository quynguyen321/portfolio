
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:quy.ybu@gmail.com">
          quy.ybu@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/quynguyen321">
      <AiFillGithub size ="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/quy-charlie/">
      <AiFillLinkedin size ="3rem"/>
       </SocialIcons>
         <SocialIcons href="https://www.instagram.com/quy_charlie/">
        <AiFillInstagram size ="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;