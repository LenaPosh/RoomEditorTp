import React from 'react';
import styled from 'styled-components';
import {ArrowIcon} from './Icon';
import {GlobalStyle} from "./form/FormStyles";
import folderIcon from '../img/Folder.png';
import saveIcon from '../img/Save.png';
import backIcon from '../img/Back.png';
import {projectTitleText} from "../textVariables";
import { useTranslation } from 'react-i18next';


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

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 7px;
  }
`;

const StyledImg = styled.img`
  height: 20px;
  width: auto;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
    border-radius: 4px;
  }
`;

const MenuRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LanguageSwitcherButton = styled.button`
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e0e0e0;
  }
`;



const TopMenu = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLanguage = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(nextLanguage);
    };

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
                        <TitleText>{t('projectTitleText')}</TitleText>
                        <ArrowIcon />
                    </Title>
                </MenuCenter>
                <MenuRight>
                    <LanguageSwitcherButton onClick={toggleLanguage}>
                        {i18n.language === 'en' ? 'RU' : 'EN'}
                    </LanguageSwitcherButton>
                </MenuRight>
            </MenuContainer>
        </>

    );
};

export default TopMenu;
