import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import imageOne from '../img/start1.png';
import imageTwo from '../img/start2.png';
import {ArrowGreen, PlanFour, SelectCircleIcon} from "./Icon";
import planOne from "../img/Планировка 1.png"
import planTwo from '../img/Планировка 2.png'
import planThree from '../img/Планировка 3.png'
import kitchenRoom from '../img/kitchen2.png'
import kitchenRoomTwo from '../img/kitchen.png'
import livingRoom from '../img/sofa.png'
import badRoom from '../img/bed.png'
import kidsRoom from '../img/kids.png'
import bathroom from '../img/bath.png'
import cabinet from '../img/кабинет.png'
import toilet from '../img/tw.png'
import { useNavigate } from 'react-router-dom';


type StartProps = {
    onClose: () => void;
};

type RoomSelectionState = {
    [key: string]: boolean;
};

const StartPageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const StartPageContent = styled.div`
  width: 600px;
  padding: 20px;
  background: #F0F1F6;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -10px;
  width: 100%;
  position: relative;
`;

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
`;

const StartText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 37px;
  letter-spacing: 0;
  text-align: center;
  width: 100%;
`;

const SubStartText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0;
  text-align: left;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 05px;
  border: none;
  background: none;
  cursor: pointer;
  color: #8DC646;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: auto;
`;

const ButtonContainerOne = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
  width: 100%;
`;

const Button = styled.button`
  padding: 12px 40px;
  background-color: #8DC646;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  box-shadow: 0 4px 8px #00000040;
  transition: all 0.3s ease;

  &:hover {    
    background-color: #709f37;
  }
`;

const Image = styled.img<{isSelected: boolean}>`
  width: 250px;
  height: 200px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin: 10px;
  
  ${props => props.isSelected && selectedStyle}
  background: none;

  &:first-child {
    margin-left: 10px;
  }
`;

const ImagePlane = styled.img<{isSelected: boolean}>`
  width: 180px;
  height: 170px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin: 5px;
  box-shadow: 0 4px 8px #00000040;
  
  ${props => props.isSelected && selectedStyle}
  background: none;

  &:first-child {
    margin-left: 1px;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-right: 5px;
`;
  
const ImagesContainerPlane = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-right: 10px;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.03);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    border: 2px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  & {
    scrollbar-width: thin; 
    scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1);
  }
`;

const StyledPlanFourSVG = styled(PlanFour)<{ isSelected: boolean }>`
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

const selectedStyle = css`
  border: 2px solid #8DC646;
  border-radius: 10px;
`;


const StyledButtonBack = styled.button`
  padding: 12px 8px;
  background-color: white;
  color: #8DC646;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  box-shadow: 0 4px 8px #00000040;
  transition: all 0.3s ease;

  &:hover {    
    background-color: #F0F1F6;
  }
`;

const GreenText = styled.span`
  color: #8DC646;
`;

const activeStyle = css`
  fill: #8DC646;
`;

const SelectIcon = styled(SelectCircleIcon)<{isSelected: boolean}>`
  fill: ${props => props.isSelected ? '#8DC646' : '#C4C4C4'};
  transition: fill 0.3s ease;

  &:hover {
    ${props => !props.isSelected && activeStyle}
  }

  ${props => props.isSelected && activeStyle}
`;



const RoomOption = styled.div<{isSelected: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  box-shadow: 0 4px 8px #00000040;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    ${SelectIcon} {
      background-color: #8DC646;
      border-radius: 50%;
    }
  }

  ${props => props.isSelected && `
    ${SelectIcon} {
      background-color: #8DC646;
      border-radius: 50%;
    }
  `}
`;

const RoomOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 10px;
  gap: 30px;
`;

const RoomOptionIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const RoomOptionText = styled.h4`
  flex-grow: 1;
  margin: 0 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

const RoomOptionsColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
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

    const handleNextClick = () => {
        if (selectedImage) {
            setCurrentPage(currentPage + 1);
        } else {
            alert('Пожалуйста, выберите объект перед переходом дальше.')
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
        { name: 'Кухня', iconSrc: kitchenRoom },
        { name: 'Столовая', iconSrc: kitchenRoomTwo },
        { name: 'Гостинная', iconSrc: livingRoom },
        { name: 'Спальня', iconSrc: badRoom },
        { name: 'Детская', iconSrc: kidsRoom },
        { name: 'Ванная', iconSrc: bathroom },
        { name: 'Кабинет', iconSrc: cabinet },
        { name: 'Туалет', iconSrc: toilet },
    ];


    return (
        <StartPageContainer>
            {currentPage === 1 && (
                <StartPageContent>
                    <StartHeader>
                        <StartText>Начать новый проект</StartText>
                        <CloseButton onClick={onClose}>Закрыть</CloseButton>
                    </StartHeader>

                    <ImagesContainer>
                        <Image
                            src={imageOne}
                            alt="Создать проект"
                            isSelected={selectedImage === 'imageOne'}
                            onClick={selectImageOne}
                        />
                        <Image
                            src={imageTwo}
                            alt="Выбрать типовой объект"
                            isSelected={selectedImage === 'imageTwo'}
                            onClick={selectImageTwo}
                        />
                    </ImagesContainer>
                    <ButtonContainerOne>
                        <Button onClick={handleNextClick}>Далее</Button>
                    </ButtonContainerOne>
                </StartPageContent>
            )}
            {currentPage === 2 && (
                <StartPageContent>
                    <StartHeader>
                        <TextContainer>
                            <StartText>Типовые планировки <GreenText>1/2</GreenText></StartText>
                            <SubStartText>Выберите типовую планировку, приближенную к вашей ситуции:</SubStartText>
                        </TextContainer>
                        <CloseButton onClick={onClose}>Закрыть</CloseButton>
                    </StartHeader>

                    <ImagesContainerPlane>
                        <ImagePlane
                            src={planOne}
                            alt=""
                            isSelected={selectedPlane === 'planOne'}
                            onClick={selectPlaneOne}
                        />
                        <ImagePlane
                            src={planTwo}
                            alt=""
                            isSelected={selectedPlane === 'planTwo'}
                            onClick={selectPlaneTwo}
                        />
                        <ImagePlane
                            src={planThree}
                            alt=""
                            isSelected={selectedPlane === 'planThree'}
                            onClick={selectPlaneThree}
                        />
                        <StyledPlanFourSVG
                            isSelected={selectedPlane === 'planFour'}
                            onClick={selectPlaneFour}
                        />

                    </ImagesContainerPlane>
                    <ButtonContainer>
                        <StyledButtonBack onClick={handleBackClick}><ArrowGreen/></StyledButtonBack>
                        <Button onClick={handleNextClick}>Далее</Button>
                    </ButtonContainer>

                </StartPageContent>
            )}
            {currentPage === 3 && (
                <StartPageContent>
                    <StartHeader>
                        <TextContainer>
                            <StartText>Назначение помещения <GreenText>2/2</GreenText></StartText>
                            <SubStartText>Выберите функцию комнаты:</SubStartText>
                        </TextContainer>
                        <CloseButton onClick={onClose}>Закрыть</CloseButton>
                    </StartHeader>

                    <RoomOptionsContainer>
                        <RoomOptionsColumn>
                            {roomData.slice(0, 5).map(({ name, iconSrc }) => (
                                <RoomOption
                                    key={name}
                                    isSelected={selectedRooms[name]}
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
                                    isSelected={selectedRooms[name]}
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
                        <Button onClick={handleCreateClick}>Создать</Button>
                    </ButtonContainer>

                </StartPageContent>
            )}
        </StartPageContainer>
    );
};

export default StartPageOne;
