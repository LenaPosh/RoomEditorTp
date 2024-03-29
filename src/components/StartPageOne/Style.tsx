import styled, {css} from "styled-components";
import {SelectCircleIcon} from "../Icon";
import closeImg from '../../img/Close.png'

export const StartPageContainer = styled.div`
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
  @media (max-width: 780px) {
    flex-direction: column;
    width: auto;
    height: 100%;
    background: white;    
  }
`;

export const StartPageContent = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background: #F0F1F6;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 780px) {
    padding: 10px;
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 100%;
    margin-top: 60px;
  }
`;

export const StartHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  position: relative;
  
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  @media (max-width: 780px) {
    //background-color: white;
    padding: 0;
  }
`;

export const StartText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 37px;
  letter-spacing: 0;
  text-align: center;
  width: 100%;
`;

export const SubStartText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0;
  text-align: left;
  width: 100%;
`;

export const CloseButton = styled.button`
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

  @media (max-width: 780px) {
    display: none;
  }
`;

export const ButtonContainerOne = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
  width: 100%;
  @media (max-width: 780px) {
    //background-color: white;
    padding: 0;
  }
`;

export const Button = styled.button`
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


export const ImagePlane = styled.img<{$isSelected: boolean}>`
  width: 180px;
  height: 170px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin: 5px;
  box-shadow: 0 4px 8px #00000040;
  border-radius: 10px;

  ${({ $isSelected }) => $isSelected && selectedStyle}
  background: none;

  &:first-child {
    margin-left: 1px;
  }
  
  @media (max-width: 780px) {
    box-shadow: none;
    //background-color: white;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-right: 5px;
  border-radius: 10px;

  @media (max-width: 780px) {
    flex-wrap: wrap; 
    justify-content: space-around;
    
  }
`;

export const ImagesContainerPlane = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-right: 10px;  

  &::-webkit-scrollbar {
    display: none;
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
    scrollbar-width: none;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center; 
    overflow-x: hidden; 
    overflow-y: auto;
    max-height: 400px;
    width: auto;
    //background-color: white;
    
  }
  
`;


export const selectedStyle = css`
  border: 2px solid #8DC646;
  border-radius: 10px;
`;




export const StyledButtonBack = styled.button`
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

export const GreenText = styled.span`
  color: #8DC646;
`;

export const activeStyle = css`
  fill: #8DC646;
`;

export const SelectIcon = styled(SelectCircleIcon)<{isSelected: boolean}>`
  fill: ${props => props.isSelected ? '#8DC646' : '#C4C4C4'};
  transition: fill 0.3s ease;

  &:hover {
    ${props => !props.isSelected && activeStyle}
  }

  ${props => props.isSelected && activeStyle}
`;



export const RoomOption = styled.div<{$isSelected: boolean}>`
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

  ${props => props.$isSelected && `
    ${SelectIcon} {
      background-color: #8DC646;
      border-radius: 50%;
    }
  `}
`;


export const RoomOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 10px;
  gap: 30px;

  &::-webkit-scrollbar {
    display: none;
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
    scrollbar-width: none;
  }
  @media (max-width: 780px) {
    flex-direction: column; 
    align-items: center;
    gap: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 400px;
    width: auto;
  }
`;

export const RoomOptionIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const RoomOptionText = styled.h4`
  flex-grow: 1;
  margin: 0 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

export const RoomOptionsColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;

export const CloseButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 35px; 
    height: 35px; 
    background-image: url(${closeImg});
    position: absolute;
    left: 69px;
    top: 20px;    
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    padding: 0;
  }
`;




