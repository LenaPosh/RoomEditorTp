import React, {useState} from 'react';
import styled from 'styled-components';
import imageOne from '../../img/start1.png';
import imageTwo from '../../img/start2.png';
import imageOne_en from '../../img/start1en.png';
import imageTwo_en from '../../img/start2en.png'
import {ArrowGreen, PlanFourRu, PlanFourEn, SelectCircleIcon} from "../Icon";
import planOne from "../../img/Планировка 1.png"
import planeOne_en from '../../img/Планировка 1en.png'
import planTwo from '../../img/Планировка 2.png'
import planTwo_en from '../../img/Планировка 2en.png'
import planThree from '../../img/Планировка 3.png'
import planThree_en from '../../img/Планировка 3en.png'
import kitchenRoom from '../../img/kitchen2.png'
import kitchenRoomTwo from '../../img/kitchen.png'
import livingRoom from '../../img/sofa.png'
import badRoom from '../../img/bed.png'
import kidsRoom from '../../img/kids.png'
import bathroom from '../../img/bath.png'
import cabinet from '../../img/кабинет.png'
import toilet from '../../img/tw.png'
import { useNavigate } from 'react-router-dom';
import {
    alertMessage,
    bathroomText,
    bedroomText,
    cabinetText,
    closeButtonLabel, createButtonText, kidsRoomText, kitchenText, kitchenTwoText, livingRoomText,
    nextButtonText,
    startText,
    startText1,
    startText2,
    subStartText1,
    subStartText2,
    toiletText
} from "../../textVariables";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {
    Button,
    ButtonContainer,
    ButtonContainerOne,
    CloseButton,
    GreenText,
    ImagePlane,
    ImagesContainer,
    ImagesContainerPlane,
    RoomOption,
    RoomOptionIcon,
    RoomOptionsColumn,
    RoomOptionsContainer,
    RoomOptionText,
    selectedStyle, SelectIcon,
    StartHeader,
    StartPageContainer,
    StartPageContent,
    StartText, StyledButtonBack,
    SubStartText,
    TextContainer
} from "./Style";


type StartProps = {
    onClose: () => void;
};

type RoomSelectionState = {
    [key: string]: boolean;
};

type PlanFourProps = {
    isSelected: boolean;
    onClick: () => void;
};

export const Image = styled.img<{$isSelected: boolean}>`
  width: 250px;
  height: 200px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin: 10px;

  ${({ $isSelected }) => $isSelected && selectedStyle}
  background: none;

  &:first-child {
    margin-left: 10px;
  }
`;

const DynamicPlanFourSVG: React.FC<PlanFourProps> = ({ isSelected, onClick }) => {
    const { i18n } = useTranslation();
    const SVGComponent = i18n.language === 'en' ? PlanFourEn : PlanFourRu;
    return <SVGComponent isSelected={isSelected} onClick={onClick} />;
};

const StyledDynamicPlanFourSVG = styled(DynamicPlanFourSVG)<{ isSelected: boolean }>`
  cursor: pointer;
  transition: border-color 0.3s;
  box-shadow: 0 4px 8px #00000040;

    ${props => props.isSelected && selectedStyle}
    background: none;
  }
    &.selected {
      border: 2px solid #8DC646;
      border-radius: 10px;
      box-shadow: 0 4px 8px #00000040;
    }
`;




const StartPageOne: React.FC<StartProps> = ({onClose}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPlane, setSelectedPlane] = useState<string | null>(null);
    const [selectedRooms, setSelectedRooms] = useState<RoomSelectionState>({});
    const selectImageOne = () => setSelectedImage('imageOne');
    const selectImageTwo = () => setSelectedImage('imageTwo');

    const selectPlaneOne = () => setSelectedPlane('planOne');
    const selectPlaneTwo = () => setSelectedPlane('planTwo');
    const selectPlaneThree = () => setSelectedPlane('planThree');
    const selectPlaneFour = () => setSelectedPlane('planFour');

    const { t } = useTranslation();
    const language = i18n.language;

    const handleNextClick = () => {
        if (selectedImage) {
            setCurrentPage(currentPage + 1);
        } else {
            alert(t('alertMessage'));

        }
    }

    const handleBackClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleRoomSelect = (room: string) => {
        setSelectedRooms((prev: RoomSelectionState) => ({
            ...prev,
            [room]: !prev[room],
        }));
    };

    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate('/main');
    };

    const roomData = [
        { name: t('kitchenText'), iconSrc: kitchenRoom },
        { name: t('kitchenTwoText'), iconSrc: kitchenRoomTwo },
        { name: t('livingRoomText'), iconSrc: livingRoom },
        { name: t('bedroomText'), iconSrc: badRoom },
        { name: t('kidsRoomText'), iconSrc: kidsRoom },
        { name: t('bathroomText'), iconSrc: bathroom },
        { name: t('cabinetText'), iconSrc: cabinet },
        { name: t('toiletText'), iconSrc: toilet },
    ];

    const imageOneSrc = language === 'en' ? imageOne_en : imageOne;
    const imageTwoSrc = language === 'en' ? imageTwo_en : imageTwo;

    const planeOneSrc = language === 'en' ? planeOne_en : planOne;
    const planeTwoSrc = language === 'en' ? planTwo_en : planTwo;
    const planeThreeSrc = language === 'en' ? planThree_en : planThree;



    return (
        <StartPageContainer>
            {currentPage === 1 && (
                <StartPageContent>
                    <StartHeader>
                        <StartText>{t('startText')}</StartText>
                        <CloseButton onClick={onClose}>{t('closeButtonLabel')}</CloseButton>
                    </StartHeader>

                    <ImagesContainer>
                        <Image
                            src={imageOneSrc}
                            alt="Создать проект"
                            $isSelected={selectedImage === 'imageOne'}
                            onClick={selectImageOne}
                        />
                        <Image
                            src={imageTwoSrc}
                            alt="Выбрать типовой объект"
                            $isSelected={selectedImage === 'imageTwo'}
                            onClick={selectImageTwo}
                        />
                    </ImagesContainer>
                    <ButtonContainerOne>
                        <Button onClick={handleNextClick}>{t('nextButtonText')}</Button>
                    </ButtonContainerOne>
                </StartPageContent>
            )}
            {currentPage === 2 && (
                <StartPageContent>
                    <StartHeader>
                        <TextContainer>
                            <StartText>{t('startText1')} <GreenText>1/2</GreenText></StartText>
                            <SubStartText>{t('subStartText1')}</SubStartText>
                        </TextContainer>
                        <CloseButton onClick={onClose}>{t('closeButtonLabel')}</CloseButton>
                    </StartHeader>

                    <ImagesContainerPlane>
                        <ImagePlane
                            src={planeOneSrc}
                            alt=""
                            $isSelected={selectedPlane === 'planOne'}
                            onClick={selectPlaneOne}
                        />
                        <ImagePlane
                            src={planeTwoSrc}
                            alt=""
                            $isSelected={selectedPlane === 'planTwo'}
                            onClick={selectPlaneTwo}
                        />
                        <ImagePlane
                            src={planeThreeSrc}
                            alt=""
                            $isSelected={selectedPlane === 'planThree'}
                            onClick={selectPlaneThree}
                        />
                        <StyledDynamicPlanFourSVG
                            isSelected={selectedPlane === 'planFour'}
                            onClick={selectPlaneFour}
                        />


                    </ImagesContainerPlane>
                    <ButtonContainer>
                        <StyledButtonBack onClick={handleBackClick}><ArrowGreen/></StyledButtonBack>
                        <Button onClick={handleNextClick}>{t('nextButtonText')}</Button>
                    </ButtonContainer>

                </StartPageContent>
            )}
            {currentPage === 3 && (
                <StartPageContent>
                    <StartHeader>
                        <TextContainer>
                            <StartText>{t('startText2')} <GreenText>2/2</GreenText></StartText>
                            <SubStartText>{t('subStartText2')}</SubStartText>
                        </TextContainer>
                        <CloseButton onClick={onClose}>{t('closeButtonLabel')}</CloseButton>
                    </StartHeader>

                    <RoomOptionsContainer>
                        <RoomOptionsColumn>
                            {roomData.slice(0, 5).map(({ name, iconSrc }) => (
                                <RoomOption
                                    key={name}
                                    $isSelected={selectedRooms[name]}
                                    onClick={() => handleRoomSelect(name)}
                                >
                                    <RoomOptionIcon src={iconSrc} alt={name} />
                                    <RoomOptionText>{name}</RoomOptionText>
                                    <SelectIcon isSelected={selectedRooms[name]}  />
                                </RoomOption>
                            ))}
                        </RoomOptionsColumn>
                        <RoomOptionsColumn>
                            {roomData.slice(5).map(({ name, iconSrc }) => (
                                <RoomOption
                                    key={name}
                                    $isSelected={selectedRooms[name]}
                                    onClick={() => handleRoomSelect(name)}
                                >
                                    <RoomOptionIcon src={iconSrc} alt={name} />
                                    <RoomOptionText>{name}</RoomOptionText>
                                    <SelectCircleIcon isSelected={selectedRooms[name]} />
                                </RoomOption>
                            ))}
                        </RoomOptionsColumn>
                    </RoomOptionsContainer>

                    <ButtonContainer>
                        <StyledButtonBack onClick={handleBackClick}>
                            <ArrowGreen/>
                        </StyledButtonBack>
                        <Button onClick={handleCreateClick}>{t('createButtonText')}</Button>
                    </ButtonContainer>

                </StartPageContent>
            )}
        </StartPageContainer>
    );
};

export default StartPageOne;
