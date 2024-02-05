import React, {useState} from "react";
import arrowIcon from "../../img/Arrow 1.png";
import {
    CloseButton, DropdownMenuContent, IconText, StyledArrowIcon,
    SubMenuContainer,
    SubMenuHeader,
    SubMenuProps, SubMenuText,
    SubMenuTitle
} from "./SubMenuBuild";
import livingRoom from '../../img/sofa.png'
import kitchenRoom from '../../img/kitchen2.png'
import kitchenRoomTwo from '../../img/kitchen.png'
import badRoom from '../../img/bed.png'
import kidsRoom from '../../img/kids.png'
import bathroom from '../../img/bath.png'
import styled from "styled-components";
import sofas from '../../img/Выбор фигуры (1).png'
import armchairs from '../../img/кресла.png'
import tables from '../../img/столы.png'
import closet from '../../img/шкафы.png'
import racks from '../../img/стеллажи.png'
import chairs from '../../img/стулья.png'
import cabinets from '../../img/тумбы.png'
import decor from '../../img/декор.png'
import SofasMenu from "./SofasMenu";

export const StyledIconsSubMenu = styled.img`
  width: 31px;
  height: 30px;
`;

const SubMenuItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  background-color: ${({ $isActive }) => $isActive ? '#e8e8e8' : 'transparent'};
  border-radius: 20px;

  &:hover {
    background-color: #e8e8e8;
    border-radius: 20px;
  }
`;


export const StyledImgIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-left: auto;
  `;

export const IconsRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;

`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;

  margin-right: -10px;
  &:last-child {
    margin-right: 0;
  }

`;
export const SubMenuFurniture: React.FC<SubMenuProps> = ({ activeItem, onClose }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [showSofasMenu, setShowSofasMenu] = useState(false);

    const toggleDropdown = (item: string) => {
        if (openDropdown === item) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(item);
        }
    };

    const calculateContentHeight = () => {
        if (openDropdown === 'livingRoom') {
            return '530px';
        } else if (openDropdown === 'kitchen') {
            return '390px';
        } else if (openDropdown === 'kitchenTwo') {
            return '540px';
        } else if (openDropdown === 'badroom') {
            return '530px';
        }  else if (openDropdown === 'kids') {
            return '550px';
        }  else if (openDropdown === 'bathroom') {
            return '550px';
        }
        return '370px';
    };


    const handleSofasClick = () => {
        console.log('Клик по диванам');
        setShowSofasMenu(true);
    };

    const handleBackClick = () => {
        setShowSofasMenu(false);
    };

    return (
        <>
            {showSofasMenu ? (

                <SofasMenu activeItem={activeItem} onBack={handleBackClick} />
            ) : (
            <SubMenuContainer style={{ height: calculateContentHeight() }}>
                <SubMenuHeader>
                    <SubMenuTitle>Мебель</SubMenuTitle>
                    <CloseButton onClick={onClose}>Закрыть</CloseButton>
                </SubMenuHeader>

                <SubMenuItem $isActive={activeItem === 'livingRoom'}>
                    <StyledIconsSubMenu src={livingRoom} alt="" />
                    <SubMenuText onClick={() => toggleDropdown('livingRoom')}>Гостинная</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('livingRoom')} />
                </SubMenuItem>
                {openDropdown === 'livingRoom' && (
                    <DropdownMenuContent $isOpen={openDropdown === 'livingRoom'}>
                        <IconsRow style={{marginTop: '-10px'}}>
                            <IconContainer onClick={() => handleSofasClick()}>
                                <StyledImgIcon src={sofas} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-11px'}}>Диваны</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={armchairs} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>Кресла</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={tables} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-6px'}}>Столы</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={closet} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>Шкафы</IconText>
                            </IconContainer>
                        </IconsRow>

                        <IconsRow>
                            <IconContainer>
                                <StyledImgIcon src={racks} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-11px'}}>Стеллажи</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={chairs} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>Стулья</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={cabinets} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>Тумбы</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={decor} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>Декор</IconText>
                            </IconContainer>
                        </IconsRow>
                    </DropdownMenuContent>
                )}


                <SubMenuItem $isActive={activeItem === 'kitchen'}>
                    <StyledIconsSubMenu src={kitchenRoom} alt="" />
                    <SubMenuText onClick={() => toggleDropdown('kitchen')}>Кухня</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('kitchen')} />
                </SubMenuItem>
                {/*{openDropdown === 'kitchen' && (*/}
                {/*    <DropdownMenuContent isOpen={openDropdown === 'kitchen'}>*/}
                {/*        <Input placeholder="Толщина в мм" />*/}
                {/*    </DropdownMenuContent>*/}
                {/*)}*/}

                <SubMenuItem $isActive={activeItem === 'kitchenTwo'}>
                    <StyledIconsSubMenu src={kitchenRoomTwo} alt='' />
                    <SubMenuText onClick={() => toggleDropdown('kitchenTwo')}>Столовая</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('kitchenTwo')}/>
                </SubMenuItem>
                {/*{openDropdown === 'kitchenTwo' && (*/}
                {/*    <DropdownMenuContent isOpen={openDropdown === 'kitchenTwo'}>*/}
                {/*        <Input placeholder="Ширина в мм" />*/}
                {/*        <Input placeholder="Длина в мм" />*/}
                {/*        <IconsRow>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <DoorOne/>*/}
                {/*                <IconText style={{marginTop: '-10px'}}>Одностворчатая*/}
                {/*                    распашная</IconText>*/}
                {/*            </StyledIconContainer>*/}

                {/*            <StyledIconContainer>*/}
                {/*                <DoorTwo/>*/}
                {/*                <IconText style={{marginTop: '-10px'}}>Двухстворчатая*/}
                {/*                    распашная</IconText>*/}
                {/*            </StyledIconContainer>*/}

                {/*            <StyledIconContainer>*/}
                {/*                <DoorThree/>*/}
                {/*                <IconText style={{marginTop: '-10px'}}>Одностворчатая*/}
                {/*                    раздвижная</IconText>*/}
                {/*            </StyledIconContainer>*/}
                {/*        </IconsRow>*/}


                {/*        <IconsRow>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <DoorFour />*/}
                {/*                <IconText>Двухстворчатая*/}
                {/*                    раздвижная</IconText>*/}
                {/*            </StyledIconContainer>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <DoorFive />*/}
                {/*                <IconText>Одностворчатая встраиваемая</IconText>*/}
                {/*            </StyledIconContainer>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <DoorSix/>*/}
                {/*                <IconText>Двухстворчатая встраиваемая</IconText>*/}
                {/*            </StyledIconContainer>*/}

                {/*        </IconsRow>*/}
                {/*    </DropdownMenuContent>*/}
                {/*)}*/}

                <SubMenuItem
                    $isActive={activeItem === 'badroom'}
                >
                    <StyledIconsSubMenu src={badRoom} alt="" />
                    <SubMenuText onClick={() => toggleDropdown('badroom')}>Спальня</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('badroom')} />
                </SubMenuItem>
                {/*{openDropdown === 'badroom' && (*/}
                {/*    <DropdownMenuContent isOpen={openDropdown === 'badroom'}>*/}
                {/*        <Input placeholder="Ширина в мм" />*/}
                {/*        <Input placeholder="Длина в мм" />*/}
                {/*        <Input placeholder="Высота от пола в мм" />*/}
                {/*        <IconsRow>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <WindowOne/>*/}
                {/*                <IconText style={{marginTop: '-10px'}}>Одностворчатое*/}
                {/*                    распашное</IconText>*/}
                {/*            </StyledIconContainer>*/}

                {/*            <StyledIconContainer>*/}
                {/*                <WindowTwo/>*/}
                {/*                <IconText style={{marginTop: '-10px'}}>Двухстворчатое*/}
                {/*                    распашное</IconText>*/}
                {/*            </StyledIconContainer>*/}

                {/*            <StyledIconContainer>*/}
                {/*                <WindowThree/>*/}
                {/*                <IconText style={{marginTop: '-10px'}}>Трехстворчатое*/}
                {/*                    распашное</IconText>*/}
                {/*            </StyledIconContainer>*/}
                {/*        </IconsRow>*/}

                {/*        <IconsRow>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <WindowFour/>*/}
                {/*                <IconText>Одностворчатое глухое</IconText>*/}
                {/*            </StyledIconContainer>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <WindowFive/>*/}
                {/*                <IconText>Одностворчатое раздвижное</IconText>*/}
                {/*            </StyledIconContainer>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <WindowSix/>*/}
                {/*                <IconText>Двухстворчатое раздвижное</IconText>*/}
                {/*            </StyledIconContainer>*/}

                {/*        </IconsRow>*/}
                {/*    </DropdownMenuContent>*/}
                {/*)}*/}


                <SubMenuItem
                    $isActive={activeItem === 'kids'}
                >
                    <StyledIconsSubMenu src={kidsRoom} alt="" />
                    <SubMenuText onClick={() => toggleDropdown('kids')}>Детская</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('kids')} />
                </SubMenuItem>

                {/*{openDropdown === 'kids' && (*/}
                {/*    <DropdownMenuContent isOpen={openDropdown === 'kids'}>*/}
                {/*        <Input placeholder="Длина в мм" />*/}
                {/*        <Input placeholder="Ширина в мм" />*/}
                {/*        <Input placeholder="Высота в мм" />*/}
                {/*        <IconsRow>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <StructureOne/>*/}
                {/*                <IconText style={{marginTop: '-10px', marginLeft: '-11px'}}>Лестница <br/> прямая</IconText>*/}
                {/*            </StyledIconContainer>*/}

                {/*            <StyledIconContainer>*/}
                {/*                <StructureTwo/>*/}
                {/*                <IconText style={{marginTop: '-10px',  marginLeft: '-9px'}}>Лестница поворотная</IconText>*/}
                {/*            </StyledIconContainer>*/}

                {/*            <StyledIconContainer>*/}
                {/*                <StructureThree/>*/}
                {/*                <IconText style={{marginTop: '-10px'}}>Лестница винтовая</IconText>*/}
                {/*            </StyledIconContainer>*/}
                {/*        </IconsRow>*/}

                {/*        <IconsRow>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <StructureFour/>*/}
                {/*                <IconText style={{ marginLeft: '-11px'}}>Лестничное ограждение</IconText>*/}
                {/*            </StyledIconContainer>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <StructureFive/>*/}
                {/*                <IconText style={{marginBottom: '10px', marginLeft: '-11px'}}>Очаг</IconText>*/}
                {/*            </StyledIconContainer>*/}
                {/*            <StyledIconContainer>*/}
                {/*                <StructureSix/>*/}
                {/*                <IconText style={{marginBottom: '10px'}}>Камин</IconText>*/}
                {/*            </StyledIconContainer>*/}

                {/*        </IconsRow>*/}
                {/*    </DropdownMenuContent>*/}
                {/*)}*/}

                <SubMenuItem
                    $isActive={activeItem === 'bathroom'}
                >
                    <StyledIconsSubMenu src={bathroom} alt="" />
                    <SubMenuText onClick={() => toggleDropdown('bathroom')}>Санузел</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('bathroom')} />
                </SubMenuItem>

                {/*{openDropdown === 'bathroom' && (*/}
                {/*    <DropdownMenuContent isOpen={openDropdown === 'bathroom'}>*/}
                {/*        <Input placeholder="Длина в мм" />*/}
                {/*    </DropdownMenuContent>*/}
                {/*)}*/}

            </SubMenuContainer>

            )}
        </>


    );
};

export default SubMenuFurniture;
