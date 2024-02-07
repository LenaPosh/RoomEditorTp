import React from 'react';
import styled from 'styled-components';
import { SelectCircleIcon } from "../Icon";


type RoomOptionProps = {
    room: string;
    isSelected: boolean;
    onToggle: (room: string) => void;
    iconSrc: string;
};

const StyledImgIcon = styled.img`
  
`;

const RoomOption: React.FC<RoomOptionProps> = ({ room, isSelected, onToggle, iconSrc }) => (
    <div onClick={() => onToggle(room)}
         style={{
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'space-between',
             padding: '2px',
             background: '#FFF',
             color: '#000',
             border: '2px solid',
             borderColor:'#e5e5e5',
             borderRadius: '5px',
             cursor: 'pointer'
         }}>
        <StyledImgIcon src={iconSrc} alt={room} />
        <h4>{room}</h4>
        <SelectCircleIcon isSelected={isSelected} />
    </div>
);

export default RoomOption;
