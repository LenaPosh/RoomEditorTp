import React, {useState} from 'react';
import styled from 'styled-components';
import createRoomIcon from "../../img/createAroom.png";
import createAwall from '../../img/createAwall.png'
import arrowIcon from "../../img/Arrow 1.png"
import installDoor from '../../img/InstallTheDoor.png'
import installWindow from '../../img/installTheWindow.png'
import structure from '../../img/installTheStructure.png'
import formOne from '../../img/прямоугольная.png'
import formTwo from '../../img/г-образная.png'
import formThree from '../../img/срезанный угол.png'
import formFour from '../../img/Выбор фигуры (3).png'
import formFive from '../../img/Выбор фигуры (4).png'
import formSix from '../../img/Выбор фигуры (5).png'
import doorOne from '../../img/двери.png'
import doorTwo from '../../img/двойные.png'
import doorThree from '../../img/одинарные.png'

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
  //margin-right: 10px;
  //&:hover {
  //  background-color: #8DC646;
  //}
  
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

const IconWithColor = styled.img`
  background-color: rgba(141, 198, 70, 0.2);
  width: 80px;
  height: 80px;
  //margin-right: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 90px;
  cursor: pointer;
  padding: 0;
`;

const IconText = styled.div`
  font-size: 10px;
  //margin-top: -10px;
  margin-top: 3px;
`;



const BuildForm = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="56" viewBox="0 0 121 56" fill="none">
                <g filter="url(#filter0_d_72_10002)">
                    <rect y="16" width="96" height="96" rx="6" fill="#8DC646" fillOpacity="0.2" shapeRendering="crispEdges"/>
                    <rect x="0.5" y="16.5" width="95" height="95" rx="5.5" stroke="#C9C9C9" shapeRendering="crispEdges"/>
                </g>
                <path d="M17 57C17 56.4477 17.4477 56 18 56H30.5C32.1569 56 33.5 54.6569 33.5 53V33C33.5 32.4477 33.9477 32 34.5 32H62.5C63.0523 32 63.5 32.4477 63.5 33V53C63.5 54.6569 64.8431 56 66.5 56H79C79.5523 56 80 56.4477 80 57V94C80 94.5523 79.5523 95 79 95H18C17.4477 95 17 94.5523 17 94V57Z" stroke="#9F9F9F" strokeWidth="2"/>
                <defs>
                    <filter id="filter0_d_72_10002" x="-15" y="0" width="136" height="136" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="5" dy="4"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.831373 0 0 0 0 0.831373 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_10002"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_10002" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
        )
}

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
                                <Icon src={formOne} alt="Прямоугольная" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-11px'}}>Прямоугольная</IconText>
                            </IconContainer>

                            <IconContainer>
                                <Icon src={formTwo} alt="Г-образная" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>Г-образная</IconText>
                            </IconContainer>

                            <IconContainer>
                                <Icon src={formThree} alt="Срезанный угол" />
                                <IconText style={{marginTop: '-10px'}}>Срезанный угол</IconText>
                            </IconContainer>
                        </IconsRow>


                        <IconsRow style={{marginTop: '-20px'}}>
                            <IconContainer>
                                <Icon src={formFour} alt="" />
                                <IconText>Вид</IconText>
                            </IconContainer>
                            {/*<BuildForm/>*/}
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
                        {/*<BuildForm/>*/}
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
