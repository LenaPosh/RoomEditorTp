import React from 'react';
import styled from 'styled-components';
import {ArrowIcon} from './Icon';
import {GlobalStyle} from "./form/FormStyles";
import folderIcon from '../img/Folder.png';
import saveIcon from '../img/Save.png';
import backIcon from '../img/Back.png';


const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TitleText = styled.span`
  margin-right: 10px;
`;

const MenuLeft = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
`;

const StyledImg = styled.img`
  height: 20px;
  width: auto;
`;


const TopMenu = () => {
    return (
        <>
            <GlobalStyle/>
            <MenuContainer>
                <MenuLeft>
                    <StyledImg src={folderIcon} alt="Folder" />
                    <StyledImg src={saveIcon} alt="Save" />
                    <StyledImg src={backIcon} alt="Back" />
                </MenuLeft>
                <MenuCenter>
                    <Title>
                        <TitleText>Название проекта</TitleText>
                        <ArrowIcon />

                    </Title>
                </MenuCenter>
            </MenuContainer>
        </>

    );
};

export default TopMenu;
