import React, { useState } from 'react';
import styled from 'styled-components';
import buildIcon from '../../img/Building.png';
import finishIcon from '../../img/Finishing.png';
import furnitureIcon from '../../img/Furniture.png';
import settingIcon from '../../img/Settings.png';
import {buildText, finishingText, furnitureText, settingText} from "../../textVariables";
import {useTranslation} from "react-i18next";


type MenuLeftProps = {
    onItemSelect: (itemName: string) => void;
};

const MenuLeftContainer = styled.div`
  width: 81px;
  height: 302px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
  margin-top: 20px;
  margin-left: 20px;
  @media (max-width: 768px) {
    width: 100%; 
    height: auto;
    position: fixed;
    bottom: 0;
    left: 0; 
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; 
    border-radius: 20px 20px 0 0;
    background: #FFF;
    padding-top: 14px;
    padding-bottom: 14px;
    z-index: 10;
  

    &::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 13%;
      height: 4px;
      background: #AEAEAE;
      border-radius: 4px;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 33%;
      height: 4px;
      background: var(--Label-Color-Light-Primary, #000);
      border-radius: 100px;
    }
}
`;

const MenuItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ $isActive }) => ($isActive ? '#e8e8e8' : 'transparent')};
  border-radius: ${({ $isActive }) => ($isActive ? '20px' : 'none')};

  &:hover {
    background-color: #e8e8e8;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    padding: 5px;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;

const MenuText = styled.span`
  color: #000;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`;


const StyledIcons = styled.img`
  margin-bottom: 5px;
  width: 36px;
  height: 33px;
`;


export const MenuLeft: React.FC<MenuLeftProps> = ({ onItemSelect }) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const { t } = useTranslation();
    const handleMenuItemClick = (itemName: string) => {
        console.log('MenuLeft item clicked:', itemName);
        setActiveItem(itemName);
        onItemSelect(itemName);
    };
    return (
        <MenuLeftContainer>
            <MenuItem
                onClick={() => handleMenuItemClick('build')}
                $isActive={activeItem === 'build'}
            >
                <StyledIcons src={buildIcon} alt="Build" />
                <MenuText>{t('buildText')}</MenuText>
            </MenuItem>
            <MenuItem
                onClick={() => handleMenuItemClick('finishing')}
                $isActive={activeItem === 'finishing'}
            >
                <StyledIcons src={finishIcon} alt="finishing" />
                <MenuText>{t('finishingText')}</MenuText>
            </MenuItem>
            <MenuItem
                onClick={() => handleMenuItemClick('furniture')}
                $isActive={activeItem === 'furniture'}
            >
                <StyledIcons src={furnitureIcon} alt="" />
                <MenuText>{t('furnitureText')}</MenuText>
            </MenuItem>
            <MenuItem
                onClick={() => handleMenuItemClick('setting')}
                $isActive={activeItem === 'setting'}
            >
                <StyledIcons src={settingIcon} alt="" />
                <MenuText>{t('settingText')}</MenuText>
            </MenuItem>

        </MenuLeftContainer>
    );
};

export default MenuLeft;
