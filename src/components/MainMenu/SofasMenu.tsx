import React, {useEffect, useState} from 'react';
import {StyledImgIcon, IconContainer, IconsRow, StyledIconsSubMenu} from './SubMenuFurniture';
import {
    CloseButton,
    DropdownMenuContent,
    IconText,
    StyledArrowIcon, SubMenuContainer,
    SubMenuHeader, SubMenuItem,
    SubMenuText,
    SubMenuTitle
} from './SubMenuBuild'
import arrowIcon from "../../img/Arrow 1.png";
import sofas from '../../img/Выбор фигуры (1).png'
import straight from '../../img/прямые.png'
import angular from '../../img/угловые.png'
import folding from '../../img/раскладные.png'
import axios from "axios";
import styled from "styled-components";
import {
    backButtonText,
    cornerText, priceText,
    slidingText,
    sofasText,
    straightText,
    titleText,
    widthText
} from "../../textVariables";

type SofasMenuProps = {
    activeItem: string;
    onBack: () => void;
}

const RangeLabel = styled.h4`
  color: #000;
  margin-left: 10px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RangeSlider = styled.input`
  width: 100%;
  cursor: pointer;
  background: #4CAF50  !important;
  border-radius: 10px;
   
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 10px; 
    background: #4CAF50 !important;
    border-radius: 10px;
  }

  &::-webkit-slider-runnable-track {
    height: 10px;
    background: #ddd;
    border-radius: 10px;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 10px;
    background: #4CAF50 !important;
    border-radius: 10px;
  }

  &::-moz-range-track {
    height: 8px;
    background: #ddd;
    border-radius: 10px;
  }
`;


const SofasMenu: React.FC<SofasMenuProps> = ({activeItem, onBack }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [sofaImages, setSofaImages] = useState<{ [key: string]: string }>({});
    const [width, setWidth] = useState(50);
    const [price, setPrice] = useState(500);


    const calculateContentHeight = () => {
        if (openDropdown === 'straight') {
            return '510px';
        } else if (openDropdown === 'angular') {
            return '360px';
        } else if (openDropdown === 'folding') {
            return '360px';
        }
        return '360px';
    };

    const toggleDropdown = (item: string) => {
        if (openDropdown === item) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(item);
        }
    }

    useEffect(() => {
        const loadImages = async () => {
            const imageUrl = '';
            try {
                const response = await axios.get(imageUrl);
                setSofaImages(response.data);
            } catch (error) {
                console.error('Ошибка при загрузке изображний', error);
            }
        };

        loadImages();
    }, []);

    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setWidth(Number(e.target.value));
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPrice(Number(e.target.value));
    };



    return (
        <SubMenuContainer style={{ height: calculateContentHeight() }}>
            <SubMenuHeader>
                <SubMenuTitle>{sofasText}</SubMenuTitle>
                <CloseButton onClick={onBack}>{backButtonText}</CloseButton>
            </SubMenuHeader>

            <SubMenuItem $isActive={activeItem === 'straight'}>
                <StyledIconsSubMenu src={straight} alt="" />
                <SubMenuText onClick={() => toggleDropdown('straight')}>{straightText}</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('straight')} />
            </SubMenuItem>
            {openDropdown === 'straight' && (
                <DropdownMenuContent $isOpen={openDropdown === 'straight'}>
                    <IconsRow style={{marginTop: '-10px'}}>
                        <IconContainer>
                            <StyledImgIcon src={sofaImages.sofas || sofas} alt="" />
                            <IconText style={{marginTop: '-10px', marginLeft: '-11px'}}>{titleText}</IconText>
                        </IconContainer>

                        <IconContainer>
                            <StyledImgIcon src={sofaImages.armchairs  || sofas} alt="" />
                            <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>{titleText}</IconText>
                        </IconContainer>

                        <IconContainer>
                            <StyledImgIcon src={sofaImages.tables  || sofas} alt="" />
                            <IconText style={{marginTop: '-10px', marginLeft: '-6px'}}>{titleText}</IconText>
                        </IconContainer>

                        <IconContainer>
                            <StyledImgIcon src={sofaImages.closet  || sofas} alt="" />
                            <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>{titleText}</IconText>
                        </IconContainer>
                    </IconsRow>

                    <IconsRow>
                        <IconContainer>
                            <StyledImgIcon src={sofaImages.racks  || sofas} alt="" />
                            <IconText style={{marginTop: '-10px', marginLeft: '-11px'}}>{titleText}</IconText>
                        </IconContainer>

                        <IconContainer>
                            <StyledImgIcon src={sofaImages.chairs  || sofas} alt="" />
                            <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>{titleText}</IconText>
                        </IconContainer>

                        <IconContainer>
                            <StyledImgIcon src={sofaImages.cabinets  || sofas} alt="" />
                            <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>{titleText}</IconText>
                        </IconContainer>

                        <IconContainer>
                            <StyledImgIcon src={sofaImages.decor  || sofas} alt="" />
                            <IconText style={{marginTop: '-10px', marginLeft: '-8px'}}>{titleText}</IconText>
                        </IconContainer>
                    </IconsRow>
                </DropdownMenuContent>
            )}


            <SubMenuItem $isActive={activeItem === 'angular'}>
                <StyledIconsSubMenu src={angular} alt="" />
                <SubMenuText onClick={() => toggleDropdown('angular')}>{cornerText}</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('angular')} />
            </SubMenuItem>

            <SubMenuItem $isActive={activeItem === 'folding'}>
                <StyledIconsSubMenu src={folding} alt='' />
                <SubMenuText onClick={() => toggleDropdown('folding')}>{slidingText}</SubMenuText>
                <StyledArrowIcon src={arrowIcon} alt="Arrow Down" onClick={() => toggleDropdown('folding')}/>
            </SubMenuItem>

            <div>
                <RangeLabel >{widthText} {width}</RangeLabel>
                <RangeSlider style={{background: '#4CAF50'}} type="range" min="0" max="100" value={width} onChange={handleWidthChange} />
            </div>
            <div>
                <RangeLabel>{priceText} {price}</RangeLabel>
                <RangeSlider type="range" min="0" max="1000" value={price} onChange={handlePriceChange} />
            </div>


        </SubMenuContainer>
    );
};

export default SofasMenu;
