import React from 'react';
import styled from 'styled-components';
import createRoomIcon from "../../img/createAroom.png";
import createAwall from '../../img/createAwall.png'
import arrowIcon from "../../img/Arrow 1.png"
import installDoor from '../../img/InstallTheDoor.png'
import installWindow from '../../img/installTheWindow.png'
import structure from '../../img/installTheStructure.png'

type SubMenuProps = {
    activeItem: string;
    onClose: () => void;
};

const SubMenuContainer = styled.div`
  width: 272px;
  height: 330px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 124px;
    margin: 0;
    padding-top: 14px;
    border-radius: 20px 20px 0 0;
    padding-bottom: 14px;
    overflow-y: auto; 
    z-index: 10;
  }
`;

const SubMenuItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 7px;
  &:hover {
    background-color: #e8e8e8;
    border-radius: 20px;
  }
  
`;
const SubMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -10px;
`;

const SubMenuTitle = styled.h3`
  color: #000;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;
const SubMenuText = styled.span`
  color: #000;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.2;
  padding: 0 5px;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #8DC646;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: auto;
`;

const StyledIconsSubMenu = styled.img`
  margin-bottom: 10px;
  width: 31px;
  height: 30px;
  `;

const StyledArrowIcon = styled.img`
  width: 15px;
  height: 9px;
  margin-left: auto;
  
`;

export const SubMenuBuild: React.FC<SubMenuProps> = ({ activeItem, onClose }) => {

    return (
        <SubMenuContainer>
            <SubMenuHeader>
                <SubMenuTitle>Стройка</SubMenuTitle>
                <CloseButton onClick={onClose}>Закрыть</CloseButton>
            </SubMenuHeader>
            <SubMenuItem
                isActive={activeItem === 'build'}
            >
                <StyledIconsSubMenu src={createRoomIcon} alt="Build" />
                <SubMenuText>Построить комнату</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" />
            </SubMenuItem>

            <SubMenuItem
                isActive={activeItem === 'awall'}
            >
                <StyledIconsSubMenu src={createAwall} alt="Awall" />
                <SubMenuText>Построить стену</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" />
            </SubMenuItem>

            <SubMenuItem
                isActive={activeItem === 'door'}
            >
                <StyledIconsSubMenu src={installDoor} alt="Door" />
                <SubMenuText>Установить дверь</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" />
            </SubMenuItem>

            <SubMenuItem
                isActive={activeItem === 'window'}
            >
                <StyledIconsSubMenu src={installWindow} alt="Window" />
                <SubMenuText>Установить окно</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" />
            </SubMenuItem>

            <SubMenuItem
                isActive={activeItem === 'structure'}
            >
                <StyledIconsSubMenu src={structure} alt="Structure" />
                <SubMenuText>Установить конструкцию</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" />
            </SubMenuItem>

        </SubMenuContainer>
    );
};

export default SubMenuBuild;
