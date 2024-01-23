import React, { useState } from 'react';
import styled from 'styled-components';
import buildIcon from '../../img/Building.png';
import finishIcon from '../../img/Finishing.png';
import furnitureIcon from '../../img/Furniture.png';
import settingIcon from '../../img/Settings.png';

const MenuLeftContainer = styled.div`
  width: 81px;
  height: 322px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
  margin-top: 20px;
  margin-left: 20px;
`;
const MenuItem = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e8e8e8;
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


export const MenuLeft = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const handleMenuItemClick = (itemName: string) => {
        setActiveItem(itemName);
    };
    return (
        <MenuLeftContainer>
            <MenuItem
                onClick={() => handleMenuItemClick('item1')}
                isActive={activeItem === 'item1'}
            >
                <StyledIcons src={buildIcon} alt="Build" />
                <MenuText>Стройка</MenuText>
            </MenuItem>
            <MenuItem
                onClick={() => handleMenuItemClick('item2')}
                isActive={activeItem === 'item2'}
            >
                <StyledIcons src={finishIcon} alt="" />
                <MenuText>Отделка</MenuText>
            </MenuItem>
            <MenuItem
                onClick={() => handleMenuItemClick('item3')}
                isActive={activeItem === 'item3'}
            >
                <StyledIcons src={furnitureIcon} alt="" />
                <MenuText>Мебель</MenuText>
            </MenuItem>
            <MenuItem
                onClick={() => handleMenuItemClick('item4')}
                isActive={activeItem === 'item4'}
            >
                <StyledIcons src={settingIcon} alt="" />
                <MenuText>Настройки</MenuText>
            </MenuItem>

        </MenuLeftContainer>
    );
};

export default MenuLeft;
