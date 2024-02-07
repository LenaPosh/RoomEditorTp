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
import {
    armchairsText,
    bathroomText,
    bedroomText, cabinetsText, chairsText, closeButtonLabel, closetText, decorText,
    furnitureText,
    kidsRoomText,
    kitchenText,
    kitchenTwoText,
    livingRoomText, racksText, sofasText, tablesText
} from "../../textVariables";
import {useTranslation} from "react-i18next";

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
  cursor: pointer;

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

    const { t } = useTranslation();
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
            return '370px';
        } else if (openDropdown === 'bedroom') {
            return '370px';
        }  else if (openDropdown === 'kids') {
            return '370px';
        }  else if (openDropdown === 'bathroom') {
            return '370px';
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
                    <SubMenuTitle>{t('furnitureText')}</SubMenuTitle>
                    <CloseButton onClick={onClose}>{t('closeButtonLabel')}</CloseButton>
                </SubMenuHeader>

                <SubMenuItem $isActive={activeItem === 'livingRoom'} onClick={() => toggleDropdown('livingRoom')}>
                    <StyledIconsSubMenu src={livingRoom} alt="" />
                    <SubMenuText onClick={() => toggleDropdown('livingRoom')}>{t('livingRoomText')}</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down"  />
                </SubMenuItem>
                {openDropdown === 'livingRoom' && (
                    <DropdownMenuContent $isOpen={openDropdown === 'livingRoom'}>
                        <IconsRow style={{marginTop: '-10px'}}>
                            <IconContainer onClick={() => handleSofasClick()}>
                                <StyledImgIcon src={sofas} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-11px'}}>{t('sofasText')}</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={armchairs} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>{t('armchairsText')}</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={tables} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-6px'}}>{t('tablesText')}</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={closet} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>{t('closetText')}</IconText>
                            </IconContainer>
                        </IconsRow>

                        <IconsRow>
                            <IconContainer>
                                <StyledImgIcon src={racks} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-11px'}}>{t('racksText')}</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={chairs} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>{t('chairsText')}</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={cabinets} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>{t('cabinetsText')}</IconText>
                            </IconContainer>

                            <IconContainer>
                                <StyledImgIcon src={decor} alt="" />
                                <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>{t('decorText')}</IconText>
                            </IconContainer>
                        </IconsRow>
                    </DropdownMenuContent>
                )}


                <SubMenuItem $isActive={activeItem === 'kitchen'} onClick={() => toggleDropdown('kitchen')}>
                    <StyledIconsSubMenu src={kitchenRoom} alt="" />
                    <SubMenuText onClick={() => toggleDropdown('kitchen')}>{t('kitchenText')}</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down"  />
                </SubMenuItem>

                <SubMenuItem $isActive={activeItem === 'kitchenTwo'} onClick={() => toggleDropdown('kitchenTwo')}>
                    <StyledIconsSubMenu src={kitchenRoomTwo} alt='' />
                    <SubMenuText onClick={() => toggleDropdown('kitchenTwo')}>{t('kitchenTwoText')}</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down" />
                </SubMenuItem>

                <SubMenuItem
                    $isActive={activeItem === 'bedroom'} onClick={() => toggleDropdown('bedroom')}
                >
                    <StyledIconsSubMenu src={badRoom} alt="" />
                    <SubMenuText onClick={() => toggleDropdown('bedroom')}>{t('bedroomText')}</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down"  />
                </SubMenuItem>


                <SubMenuItem
                    $isActive={activeItem === 'kids'} onClick={() => toggleDropdown('kids')}
                >
                    <StyledIconsSubMenu src={kidsRoom} alt="" />
                    <SubMenuText onClick={() => toggleDropdown('kids')}>{t('kidsRoomText')}</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down"  />
                </SubMenuItem>


                <SubMenuItem
                    $isActive={activeItem === 'bathroom'} onClick={() => toggleDropdown('bathroom')}
                >
                    <StyledIconsSubMenu src={bathroom} alt="" />
                    <SubMenuText onClick={() => toggleDropdown('bathroom')}>{t('bathroomText')}</SubMenuText>
                    <StyledArrowIcon src={arrowIcon} alt="Arrow Down"  />
                </SubMenuItem>


            </SubMenuContainer>

            )}
        </>


    );
};

export default SubMenuFurniture;
