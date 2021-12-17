import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
      Quy Nguyen <br />
      I build things for the web.
     </SectionTitle>
     <SectionText>
     I'm a software engineer based in Dallas, TX
     specializing in building exceptional websites, applications, and everything in between.
     </SectionText>
     <Button onClick={() => window.location = "mailto:quy.ybu@gmail.com" }>Get In Touch</Button>
   </LeftSection>
 </Section>
);

export default Hero;