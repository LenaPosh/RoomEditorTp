import React from 'react';
import styled from 'styled-components';
import {GlobalStyle} from '../form/FormStyles';
import {MenuLeft} from './MenuLeft'


const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #F5F5F5;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);

`;

export const MainMenu: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <PageContainer>
                <MenuLeft/>

            </PageContainer>
        </>
    );
};

export default MainMenu;
