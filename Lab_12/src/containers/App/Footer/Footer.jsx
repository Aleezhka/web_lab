import React from 'react';
import { Wrapper, LogoWrapper, IconsWrapper, StyledText } from './Footer.styled';
import { TwitterOutlined, InstagramOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';

const Footer = () => (
  <Wrapper>
    <LogoWrapper>
      <h1>Shoes Shop</h1>
    </LogoWrapper>
    <p>Fashionable and stylish footwear for every occasion.</p>
    <IconsWrapper>
      <YoutubeOutlined style={{ color: '#FF0000', fontSize: '1.5rem' }} />
      <TwitterOutlined style={{ color: '#03A9F4', fontSize: '1.5rem' }} />
      <FacebookOutlined style={{ color: '#3b5998', fontSize: '1.5rem' }} />
      <InstagramOutlined style={{ color: '#E1306C', fontSize: '1.5rem' }} />
    </IconsWrapper>
    <StyledText>© Shoes Shop, all rights reserved</StyledText>
  </Wrapper>
);

export default Footer;
