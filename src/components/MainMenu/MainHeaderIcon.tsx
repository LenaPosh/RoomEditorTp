import React from 'react';
import styled from 'styled-components';
import groupIcons from '../../img/4icons.png';
import plusIcon from '../../img/+.png';
import minusIcon from '../../img/-.png';
import cellIcon from '../../img/cell.png';
import settingIcon from '../../img/settingGreen.png';
import notes from '../../img/notes.png';
import furniture from '../../img/groupFurniture.png';
import window from '../../img/window.png';
import send from '../../img/send.png';

const IconGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 410px;
  height: 45px;
  box-shadow: 4px 4px 20px 0 rgba(212, 212, 212, 0.50);
  margin-top: 20px;
  border-radius: 20px;
  background: #fff;
  margin-left: 20px;
  
  @media (max-width: 780px) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 30px; 
  height: 30px;
  margin: 0 5px;
 `;

const FirstGroupIcon = styled(Icon)`
  &:hover {
    background-color: #8DC646;
    border-radius: 7px;
  }
`;

const IconGroup = styled.img`
  width: 140px;
  height: 30px;
`;

const DarkGreenIcon = styled.div`
  width: 30px; 
  height: 30px;
  background: #8DC64666;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover {
    background-color: #8DC646;
    border-radius: 7px;
  }
`;


const HorizontalBar = styled.div`
  width: 20px;
  height: 1px;
  background: #000;
  margin-top: 5px;
`;

const VerticalBar = styled.div`
  width: 0.8px;
  height: 7px;
  background: #000;
  position: absolute; 
`;

const Text = styled.div`
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 6px;
  margin-bottom: 7px;
  font-weight: 600;
  position: absolute;
`;

const MainHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto; 
  height: 50px;
  margin-top: 10px;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: flex-start; 
    justify-content: flex-start;
    margin-right: auto;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }
`;


const SecondIconGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 280px;
  height: 50px;
  background: #fff;
  border-radius: 10px 10px 10px 10px;
  margin-left: 20px;
  padding: 0 5px;
  margin-top: 20px;
  
  @media (max-width: 780px) {
    flex-direction: column;
    width: 50px;
    height: auto; 
    max-height: 280px; 
    margin-left: auto;
    margin-right: 5mm; 
  }

`;

const Text2D = styled.div`
  color: #8DC646;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-style: normal;
  transform: rotate(90deg);
  font-weight: 700;
  line-height: normal;
  position: absolute;
 
  // ${SecondIconGroupContainer}:hover & {
  //   color: #fff;
  // }

  @media (max-width: 780px) {
      transform: rotate(0deg);
    }
`;



const FirstGreenIcon = styled.div`
  width: 45px;
  height: 50px;
  transform: rotate(-90deg);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px 10px 0 0;

  &:hover {
    //background-color: #8DC646;
    color: #fff;

    ${Text2D} {
      color: #fff;
    }
  }
  
  @media (max-width: 780px) {
      transform: rotate(0deg);

    }
`;


const GreenBar = styled.div`
  width: 1px;
  height: 50px;
  background: #8DC646;
  @media (max-width: 780px) {
    width: 50px;
    height: 1px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  height: 50px;
  border-radius: 10px;
  box-sizing: border-box;
  
  &:hover {
    background-color: #8DC646;
    min-width: 50px;

    & > img {
      filter: brightness(0) invert(1);
    }

    & > div {
      color: #fff;
    }
    & svg path {
      stroke: #ffffff; 
    }
  }
`;

const ThirdIconGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50px; 
  height: 50px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 10px;
  background: #fff;
  padding: 0 5px;

  @media (max-width: 780px) {
    flex-direction: column;
    width: 50px;
    height: auto;
    max-height: 280px;
    margin-left: auto;
    margin-right: 5mm;
  }
`;

// const ThirdIconGroup = () => (
//     <ThirdIconGroupContainer>
//         <IconWrapper>
//             <Icon src={send} alt="Send" />
//         </IconWrapper>
//     </ThirdIconGroupContainer>
// );



const IconThree = () => (
    <IconWrapper>
        <div style={{ position: 'relative', width: '45px', height: '46px' }}>
            <svg style={{ position: 'absolute', top: '10px', left: '10px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_793_39)">
                    <path d="M17 3.03516H7.14286C6.23553 3.03516 5.5 3.77069 5.5 4.67801V12.8923C5.5 13.7996 6.23553 14.5352 7.14286 14.5352H17C17.9073 14.5352 18.6429 13.7996 18.6429 12.8923V4.67801C18.6429 3.77069 17.9073 3.03516 17 3.03516Z" stroke="#8DC646" strokeWidth="2.14286" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.49972 7.96387H3.03544C2.59972 7.96387 2.18186 8.13695 1.87376 8.44505C1.56566 8.75314 1.39258 9.17101 1.39258 9.60672V16.9996C1.39258 17.4353 1.56566 17.8532 1.87376 18.1613C2.18186 18.4694 2.59972 18.6424 3.03544 18.6424H21.1069C21.5426 18.6424 21.9604 18.4694 22.2685 18.1613C22.5766 17.8532 22.7497 17.4353 22.7497 16.9996V9.60672C22.7497 9.17101 22.5766 8.75314 22.2685 8.44505C21.9604 8.13695 21.5426 7.96387 21.1069 7.96387H18.6426M7.14258 18.6424L6.32115 22.7496M16.9997 18.6424L17.8211 22.7496" stroke="#8DC646" strokeWidth="2.14286" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_793_39">
                        <rect width="23" height="23" fill="white" transform="translate(0.571289 0.571289)"/>
                    </clipPath>
                </defs>
            </svg>
            <svg style={{ position: 'absolute', top: '2px', right: '5px' }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <g clipPath="url(#clip0_793_43)">
                    <path d="M10.0713 5.07129L10.6963 3.69629L12.0713 3.07129L10.6963 2.44629L10.0713 1.07129L9.44629 2.44629L8.07129 3.07129L9.44629 3.69629L10.0713 5.07129ZM10.0713 8.07129L9.44629 9.44629L8.07129 10.0713L9.44629 10.6963L10.0713 12.0713L10.6963 10.6963L12.0713 10.0713L10.6963 9.44629L10.0713 8.07129ZM6.32129 5.32129L5.07129 2.57129L3.82129 5.32129L1.07129 6.57129L3.82129 7.82129L5.07129 10.5713L6.32129 7.82129L9.07129 6.57129L6.32129 5.32129ZM5.56629 7.06629L5.07129 8.15629L4.57629 7.06629L3.48629 6.57129L4.57629 6.07629L5.07129 4.98629L5.56629 6.07629L6.65629 6.57129L5.56629 7.06629Z" fill="#8DC646"/>
                </g>
                <defs>
                    <clipPath id="clip0_793_43">
                        <rect width="12" height="12" fill="white" transform="translate(0.571289 0.571289)"/>
                    </clipPath>
                </defs>
            </svg>
            <svg style={{ position: 'absolute', top: '25px', left: '0' }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <g clipPath="url(#clip0_793_45)">
                    <path d="M8.48828 4.32161L9.00912 3.17578L10.1549 2.65495L9.00912 2.13411L8.48828 0.988281L7.96745 2.13411L6.82161 2.65495L7.96745 3.17578L8.48828 4.32161ZM8.48828 6.82161L7.96745 7.96745L6.82161 8.48828L7.96745 9.00912L8.48828 10.1549L9.00912 9.00912L10.1549 8.48828L9.00912 7.96745L8.48828 6.82161ZM5.36328 4.52995L4.32161 2.23828L3.27995 4.52995L0.988281 5.57161L3.27995 6.61328L4.32161 8.90495L5.36328 6.61328L7.65495 5.57161L5.36328 4.52995ZM4.73411 5.98411L4.32161 6.89245L3.90911 5.98411L3.00078 5.57161L3.90911 5.15911L4.32161 4.25078L4.73411 5.15911L5.64245 5.57161L4.73411 5.98411Z" fill="#8DC646"/>
                </g>
                <defs>
                    <clipPath id="clip0_793_45">
                        <rect width="10" height="10" fill="white" transform="translate(0.571289 0.571289)"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    </IconWrapper>

)

const MainHeaderIcon = () => {
    return (
        <>
            <IconGroupContainer>
                <IconGroup src={groupIcons} alt="Group Icons" />
                <FirstGroupIcon src={plusIcon} alt="Plus Icon" />
                <FirstGroupIcon src={minusIcon} alt="Minus Icon" />
                <FirstGroupIcon src={cellIcon} alt="Cell Icon" />
                <DarkGreenIcon>
                    <VerticalBar style={{ left: '5px', top: '14px' }} />
                    <HorizontalBar />
                    <VerticalBar style={{ right: '5px', top: '14px' }} />
                    <Text>40мм</Text>
                </DarkGreenIcon>

                <FirstGroupIcon src={settingIcon} alt="Setting Icon" />
            </IconGroupContainer>
            <MainHeaderContainer>
                <SecondIconGroupContainer>
                    <IconWrapper>
                        <FirstGreenIcon>
                            <Text2D>2D</Text2D>
                        </FirstGreenIcon>
                    </IconWrapper>
                    <GreenBar/>
                    <IconWrapper>
                        <IconThree/>
                    </IconWrapper>
                    <GreenBar/>

                    <IconWrapper>
                        <Icon src={notes} alt="Notes" />
                    </IconWrapper>
                    <GreenBar/>

                    <IconWrapper>
                        <Icon src={furniture} alt="Notes" />
                    </IconWrapper>
                    <GreenBar/>

                    <IconWrapper>
                        <Icon src={window} alt="Window" />
                    </IconWrapper>


                </SecondIconGroupContainer>
                <ThirdIconGroupContainer>
                    <IconWrapper>
                        <Icon src={send} alt="Send" />
                    </IconWrapper>
                </ThirdIconGroupContainer>

                {/*<ThirdIconGroup/>*/}
            </MainHeaderContainer>

        </>

    );
};

export default MainHeaderIcon;
