import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import createRoomIcon from "../../img/createAroom.png";
import createAwall from '../../img/createAwall.png'
import arrowIcon from "../../img/Arrow 1.png"
import installDoor from '../../img/InstallTheDoor.png'
import installWindow from '../../img/installTheWindow.png'
import structure from '../../img/installTheStructure.png'
import {
    DoorFive,
    DoorFour,
    DoorOne, DoorSix, DoorThree, DoorTwo,
    FormFive,
    FormFour,
    FormOne, FormSix,
    FormThree,
    FormTwo, StructureFive, StructureFour, StructureOne, StructureSix, StructureThree, StructureTwo,
    WindowFive,
    WindowFour,
    WindowOne,
    WindowSix,
    WindowThree,
    WindowTwo
} from "../Icon";
import {
    angledText,
    buildRoomText,
    buildText,
    buildWallText,
    closeButtonLabel,
    doubleEmbeddedDoorText,
    doubleSlidingDoorText,
    doubleSlidingWindowText,
    doubleSwingDoorText,
    doubleSwingWindowText,
    fireplaceMantelText,
    fireplaceText, heightFromFloorLabel, heightLabel,
    installDoorText,
    installStructureText,
    installWindowText, lengthLabel,
    lShapedText,
    rectangularText,
    roundedText,
    singleEmbeddedDoorText,
    singleFixedWindowText,
    singleSlidingDoorText,
    singleSlidingWindowText,
    singleSwingDoorText,
    singleSwingWindowText,
    spiralStaircaseText,
    staircaseRailingText, straightStaircaseText, thicknessLabel,
    tripleSwingWindowText,
    tShapedText,
    turnStaircaseText, widthLabel,
    zShapedText
} from "../../textVariables";
import {useTranslation} from "react-i18next";

export type SubMenuProps = {
    activeItem: string;
    onClose: () => void;
};

export interface DropdownMenuContentProps {
    $isOpen: boolean;
}


export const SubMenuContainer = styled.div`
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

export const SubMenuItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 5px;
  background-color: transparent;
  border-radius: 20px;
  cursor: pointer;

  &:hover, &:active {
    background-color: #e8e8e8;
  }
`;

export const SubMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -10px;
`;

export const SubMenuTitle = styled.h3`
  color: #000;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;
export const SubMenuText = styled.span`
  color: #000;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.2;
  padding: 0 5px;
  cursor: pointer;
`;

export const CloseButton = styled.button`
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

export const StyledArrowIcon = styled.img`
  width: 15px;
  height: 9px;
  margin-left: auto;
  `;


export const Input = styled.input`
  width: 210px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;

  ::placeholder {
    color: #a9a9a9;
    font-size: 6px !important;;
  }

  &:focus::placeholder {
    color: #727070;
  }

  @media (max-width: 768px) {
    width: 90%;

  }
`;

const IconsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DropdownMenuContent = styled.div<DropdownMenuContentProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
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



export const IconText = styled.div`
  font-size: 10px;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
`;

export const StyledIconContainer = styled(IconContainer)`
  &:hover {
    svg {
      fill: #8DC646;
    }

    & svg {
      stroke: black;
    }

    nth-child(2) {
    stroke: black;
  }

    rect:nth-of-type(1), rect:nth-of-type(2), rect:nth-of-type(3), rect:nth-of-type(4), rect:nth-of-type(5), rect:nth-of-type(6), rect:nth-of-type(7), rect:nth-of-type(8), rect:nth-of-type(9), rect:nth-of-type(10), rect:nth-of-type(11) {
      stroke: #1f1f1f;
    }

    path, circle, line {
      stroke: black;
    }
  }

`;


export const SubMenuBuild: React.FC<SubMenuProps> = ({ activeItem, onClose }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const { t } = useTranslation();
    const toggleDropdown = (item: string) => {
        console.log('toggleDropdown called with item:', item);
        if (openDropdown === item) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(item);
        }
    };

    const calculateContentHeight = () => {
        if (openDropdown === 'build') {
            return '530px';
        } else if (openDropdown === 'awall') {
            return '390px';
        } else if (openDropdown === 'door') {
            return '540px';
        } else if (openDropdown === 'window') {
            return '530px';
        }  else if (openDropdown === 'structure') {
            return '550px';
        }
        return '320px';
    };

    useEffect(() => {
        console.log('Текущий активный элемент:', activeItem);
    }, [activeItem]);
    return (
        <SubMenuContainer style={{ height: calculateContentHeight() }}>
            <SubMenuHeader>
                <SubMenuTitle>{t('buildText')}</SubMenuTitle>
                <CloseButton onClick={onClose}>{t('closeButtonLabel')}</CloseButton>
            </SubMenuHeader>

            <SubMenuItem                $isActive={activeItem === 'build'} onClick={() => toggleDropdown('build')}>
                <StyledIconsSubMenu src={createRoomIcon} alt="Build" />
                <SubMenuText onClick={() => toggleDropdown('build')}>{t('buildRoomText')}</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down"  />
            </SubMenuItem>
            {openDropdown === 'build' && (
                <DropdownMenuContent $isOpen={openDropdown === 'build'}>
                        <Input placeholder={t('widthLabel')} />
                        <Input placeholder={t('lengthLabel')} />
                        <IconsRow>
                            <StyledIconContainer>
                                <FormOne />
                                <IconText style={{marginTop: '-15px', marginLeft: '-11px'}}>{t('rectangularText')}</IconText>
                            </StyledIconContainer>

                            <StyledIconContainer>
                                <FormTwo/>
                                <IconText style={{marginTop: '-15px', marginLeft: '-8px'}}>{t("lShapedText")}</IconText>
                            </StyledIconContainer>

                            <StyledIconContainer>
                                <FormThree />
                                <IconText style={{marginTop: '-15px'}}>{t('angledText')}</IconText>
                            </StyledIconContainer>
                        </IconsRow>


                        <IconsRow>
                            <StyledIconContainer>
                                <FormFour/>
                                <IconText style={{marginTop: '-5px', marginLeft: '-15px'}}>{t('tShapedText')}</IconText>
                            </StyledIconContainer>
                            <StyledIconContainer>
                                <FormFive />
                                <IconText style={{marginTop: '-5px', marginLeft: '-8px'}}>{t('roundedText')}</IconText>
                            </StyledIconContainer>
                            <StyledIconContainer>
                                <FormSix />
                                <IconText style={{marginTop: '-5px'}}>{t('zShapedText')}</IconText>
                            </StyledIconContainer>

                        </IconsRow>
                </DropdownMenuContent>
            )}


            <SubMenuItem $isActive={activeItem === 'awall'} onClick={() => toggleDropdown('awall')}>
                <StyledIconsSubMenu src={createAwall} alt="Awall" />
                <SubMenuText onClick={() => toggleDropdown('awall')}>{t('buildWallText')}</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down"  />
            </SubMenuItem>
            {openDropdown === 'awall' && (
                <DropdownMenuContent $isOpen={openDropdown === 'awall'}>
                    <Input placeholder={t('thicknessLabel')} />
                </DropdownMenuContent>
            )}

            <SubMenuItem $isActive={activeItem === 'door'} onClick={() => toggleDropdown('door')}>
                <StyledIconsSubMenu src={installDoor} alt="Door" />
                <SubMenuText onClick={() => toggleDropdown('door')}>{t('installDoorText')}</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" />
            </SubMenuItem>
            {openDropdown === 'door' && (
                <DropdownMenuContent $isOpen={openDropdown === 'door'}>
                    <Input placeholder={t('widthLabel')} />
                    <Input placeholder={t('lengthLabel')} />
                    <IconsRow>
                        <StyledIconContainer>
                            <DoorOne/>
                            <IconText style={{marginTop: '-10px'}}>{t('singleSwingDoorText')}</IconText>
                        </StyledIconContainer>

                        <StyledIconContainer>
                            <DoorTwo/>
                            <IconText style={{marginTop: '-10px'}}>{t('doubleSwingDoorText')}</IconText>
                        </StyledIconContainer>

                        <StyledIconContainer>
                            <DoorThree/>
                            <IconText style={{marginTop: '-10px'}}>{t("singleSlidingDoorText")}</IconText>
                        </StyledIconContainer>
                    </IconsRow>


                    <IconsRow>
                        <StyledIconContainer>
                            <DoorFour />
                            <IconText>{t('doubleSlidingDoorText')}</IconText>
                        </StyledIconContainer>
                        <StyledIconContainer>
                            <DoorFive />
                            <IconText>{t('singleEmbeddedDoorText')}</IconText>
                        </StyledIconContainer>
                        <StyledIconContainer>
                            <DoorSix/>
                            <IconText>{t('doubleEmbeddedDoorText')}</IconText>
                        </StyledIconContainer>

                    </IconsRow>
                </DropdownMenuContent>
            )}

            <SubMenuItem $isActive={activeItem === 'window'}  onClick={() => toggleDropdown('window')}
            >
                <StyledIconsSubMenu src={installWindow} alt="Window" />
                <SubMenuText onClick={() => toggleDropdown('window')}>{t('installWindowText')}</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down"  />
            </SubMenuItem>
            {openDropdown === 'window' && (
                <DropdownMenuContent $isOpen={openDropdown === 'window'}>
                    <Input placeholder={t('widthLabel')} />
                    <Input placeholder={t('lengthLabel')}  />
                    <Input placeholder={t('heightFromFloorLabel')} />
                    <IconsRow>
                        <StyledIconContainer>
                            <WindowOne/>
                            <IconText style={{marginTop: '-10px'}}>{t('singleSwingWindowText')}</IconText>
                        </StyledIconContainer>

                        <StyledIconContainer>
                            <WindowTwo/>
                            <IconText style={{marginTop: '-10px'}}>{t('doubleSwingWindowText')}</IconText>
                        </StyledIconContainer>

                        <StyledIconContainer>
                            <WindowThree/>
                            <IconText style={{marginTop: '-10px'}}>{t('tripleSwingWindowText')}</IconText>
                        </StyledIconContainer>
                    </IconsRow>

                    <IconsRow>
                        <StyledIconContainer>
                            <WindowFour/>
                            <IconText>{t('singleFixedWindowText')}</IconText>
                        </StyledIconContainer>
                        <StyledIconContainer>
                            <WindowFive/>
                            <IconText>{t('singleSlidingWindowText')}</IconText>
                        </StyledIconContainer>
                        <StyledIconContainer>
                            <WindowSix/>
                            <IconText>{t('doubleSlidingWindowText')}</IconText>
                        </StyledIconContainer>

                    </IconsRow>
                </DropdownMenuContent>
            )}


            <SubMenuItem
                $isActive={activeItem === 'structure'} onClick={() => toggleDropdown('structure')}
            >
                <StyledIconsSubMenu src={structure} alt="Structure" />
                <SubMenuText onClick={() => toggleDropdown('structure')}>{t('installStructureText')}</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down"  />
            </SubMenuItem>

            {openDropdown === 'structure' && (
                <DropdownMenuContent $isOpen={openDropdown === 'structure'}>
                    <Input placeholder={t('lengthLabel')} />
                    <Input placeholder={t('widthLabel')} />
                    <Input placeholder={t('heightLabel')} />
                    <IconsRow>
                        <StyledIconContainer>
                            <StructureOne/>
                            <IconText style={{marginTop: '-10px', marginLeft: '-11px', whiteSpace: 'pre-wrap'}}>{t('straightStaircaseText')}</IconText>
                        </StyledIconContainer>

                        <StyledIconContainer>
                            <StructureTwo/>
                            <IconText style={{marginTop: '-10px',  marginLeft: '-9px'}}>{t('turnStaircaseText')}</IconText>
                        </StyledIconContainer>

                        <StyledIconContainer>
                            <StructureThree/>
                            <IconText style={{marginTop: '-10px'}}>{t('spiralStaircaseText')}</IconText>
                        </StyledIconContainer>
                    </IconsRow>

                    <IconsRow>
                        <StyledIconContainer>
                            <StructureFour/>
                            <IconText style={{ marginLeft: '-11px'}}>{t('staircaseRailingText')}</IconText>
                        </StyledIconContainer>
                        <StyledIconContainer>
                            <StructureFive/>
                            <IconText style={{marginBottom: '10px', marginLeft: '-11px'}}>{t('fireplaceText')}</IconText>
                        </StyledIconContainer>
                        <StyledIconContainer>
                            <StructureSix/>
                            <IconText style={{marginBottom: '10px'}}>{t('fireplaceMantelText')}</IconText>
                        </StyledIconContainer>

                    </IconsRow>
                </DropdownMenuContent>
            )}

        </SubMenuContainer>
    );
};

export default SubMenuBuild;
