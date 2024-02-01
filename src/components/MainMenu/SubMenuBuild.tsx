import React, {useState} from 'react';
import styled from 'styled-components';
import createRoomIcon from "../../img/createAroom.png";
import createAwall from '../../img/createAwall.png'
import arrowIcon from "../../img/Arrow 1.png"
import installDoor from '../../img/InstallTheDoor.png'
import installWindow from '../../img/installTheWindow.png'
import structure from '../../img/installTheStructure.png'
import formFour from '../../img/Выбор фигуры (3).png'
import formFive from '../../img/Выбор фигуры (4).png'
import formSix from '../../img/Выбор фигуры (5).png'
import doorOne from '../../img/двери.png'
import doorTwo from '../../img/двойные.png'
import doorThree from '../../img/одинарные.png'
import {
    FormFive,
    FormFour,
    FormOne, FormSix,
    FormThree,
    FormTwo,
    WindowFive,
    WindowFour,
    WindowOne,
    WindowSix,
    WindowThree,
    WindowTwo
} from "../Icon";

type SubMenuProps = {
    activeItem: string;
    onClose: () => void;
};


const SubMenuContainer = styled.div`
  width: 272px;
  height: auto;
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
  position: relative;
  align-items: center;
  justify-content: flex-start;
  gap: 1px;
  padding: 5px;
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


const Input = styled.input`
  width: 210px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;

  ::placeholder {
    color: #a9a9a9;
    font-size: 6px !important;;
    //font-style: italic;
  }

  &:focus::placeholder {
    color: #727070;
  }
`;

const Icon = styled.img`
  width: 80px;
  height: 70px;
  
`;

const IconsRow = styled.div`
  display: flex;
  justify-content: space-between;
  //margin-bottom: 10px;
`;

const DropdownMenuContent = styled.div`
  max-height: 200px;
  overflow-y: auto;
  padding: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;


const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
`;



const IconText = styled.div`
  font-size: 10px;
  text-align: center;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;



export const SubMenuBuild: React.FC<SubMenuProps> = ({ activeItem, onClose }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (item: string) => {
        console.log('toggleDropdown called with item:', item);
        if (openDropdown === item) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(item);
        }
    };
    return (
        <SubMenuContainer>
            <SubMenuHeader>
                <SubMenuTitle>Стройка</SubMenuTitle>
                <CloseButton onClick={onClose}>Закрыть</CloseButton>
            </SubMenuHeader>

            <SubMenuItem                isActive={activeItem === 'build'}>
                <StyledIconsSubMenu src={createRoomIcon} alt="Build" />
                <SubMenuText onClick={() => toggleDropdown('build')}>Построить комнату</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('build')} />
            </SubMenuItem>
            {openDropdown === 'build' && (
                <DropdownMenuContent>
                        <Input placeholder="Ширина в мм" />
                        <Input placeholder="Длина в мм" />
                        <IconsRow>
                            <IconContainer>
                                <FormOne />
                                <IconText style={{marginTop: '-15px', marginLeft: '-11px'}}>Прямоугольная</IconText>
                            </IconContainer>

                            <IconContainer>
                                <FormTwo/>
                                <IconText style={{marginTop: '-15px', marginLeft: '-8px'}}>Г-образная</IconText>
                            </IconContainer>

                            <IconContainer>
                                <FormThree />
                                <IconText style={{marginTop: '-15px'}}>Срезанный угол</IconText>
                            </IconContainer>
                        </IconsRow>


                        <IconsRow>
                            <IconContainer>
                                <FormFour/>
                                <IconText style={{marginTop: '-5px', marginLeft: '-15px'}}>Ступенчатая</IconText>
                            </IconContainer>
                            <IconContainer>
                                <FormFive />
                                <IconText style={{marginTop: '-5px', marginLeft: '-8px'}}>Полукруг</IconText>
                            </IconContainer>
                            <IconContainer>
                                <FormSix />
                                <IconText style={{marginTop: '-5px'}}>Зигзагообразная</IconText>
                            </IconContainer>

                        </IconsRow>
                </DropdownMenuContent>
            )}


            <SubMenuItem isActive={activeItem === 'awall'}>
                <StyledIconsSubMenu src={createAwall} alt="Awall" />
                <SubMenuText onClick={() => toggleDropdown('awall')}>Построить стену</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('awall')} />
            </SubMenuItem>
            {openDropdown === 'awall' && (
                <DropdownMenuContent>
                    <Input placeholder="Толщина в мм" />
                </DropdownMenuContent>
            )}

            <SubMenuItem isActive={activeItem === 'door'}>
                <StyledIconsSubMenu src={installDoor} alt="Door" />
                <SubMenuText onClick={() => toggleDropdown('door')}>Установить дверь</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('door')}/>
            </SubMenuItem>
            {openDropdown === 'door' && (
                <DropdownMenuContent>
                    <Input placeholder="Ширина в мм" />
                    <Input placeholder="Длина в мм" />
                    <IconsRow>
                        <IconContainer>
                            <Icon src={doorOne} alt="" />
                            <IconText style={{marginTop: '-10px'}}>Одностворчатая
                                распашная</IconText>
                        </IconContainer>

                        <IconContainer>
                            <Icon src={doorTwo} alt="" />
                            <IconText style={{marginTop: '-10px'}}>Двухстворчатая
                                распашная</IconText>
                        </IconContainer>

                        <IconContainer>
                            <Icon src={doorThree} alt="" />
                            <IconText style={{marginTop: '-10px'}}>Одностворчатая
                                раздвижная</IconText>
                        </IconContainer>
                    </IconsRow>


                    <IconsRow style={{marginTop: '-20px'}}>
                        <IconContainer>
                            <Icon src={formFour} alt="" />
                            <IconText>Вид</IconText>
                        </IconContainer>
                        <IconContainer>
                            <Icon src={formFive} alt="" />
                            <IconText>Вид</IconText>
                        </IconContainer>
                        <IconContainer>
                            <Icon src={formSix} alt="" />
                            <IconText>Вид</IconText>
                        </IconContainer>

                    </IconsRow>
                </DropdownMenuContent>
            )}

            <SubMenuItem
                isActive={activeItem === 'window'}
            >
                <StyledIconsSubMenu src={installWindow} alt="Window" />
                <SubMenuText onClick={() => toggleDropdown('window')}>Установить окно</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('window')} />
            </SubMenuItem>
            {openDropdown === 'window' && (
                <DropdownMenuContent>
                    <Input placeholder="Ширина в мм" />
                    <Input placeholder="Длина в мм" />
                    <Input placeholder="Высота от пола в мм" />
                    <IconsRow>
                        <IconContainer>
                            <WindowOne/>
                            <IconText style={{marginTop: '-10px'}}>Одностворчатое
                                распашное</IconText>
                        </IconContainer>

                        <IconContainer>
                            <WindowTwo/>
                            <IconText style={{marginTop: '-10px'}}>Двухстворчатое
                                распашное</IconText>
                        </IconContainer>

                        <IconContainer>
                            <WindowThree/>
                            <IconText style={{marginTop: '-10px'}}>Трехстворчатое
                                распашное</IconText>
                        </IconContainer>
                    </IconsRow>

                    <IconsRow style={{marginTop: '-20px'}}>
                        <IconContainer>
                            <WindowFour/>
                            <IconText>Вид</IconText>
                        </IconContainer>
                        <IconContainer>
                            <WindowFive/>
                            <IconText>Вид</IconText>
                        </IconContainer>
                        <IconContainer>
                            <WindowSix/>
                            <IconText>Вид</IconText>
                        </IconContainer>

                    </IconsRow>
                </DropdownMenuContent>
            )}

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
