import React, {useState} from 'react';
import styled from 'styled-components';
import {GlobalStyle} from '../form/FormStyles';
import {MenuLeft} from './MenuLeft'
import SubMenuBuild from "./SubMenuBuild";



const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #F5F5F5;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);

`;

export const MainMenu: React.FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

    const handleMenuClick = (itemName: string) => {
        setActiveMenuItem(itemName);
    };

    const handleCloseSubMenu = () => {
        setActiveMenuItem(null);
    };

    return (
        <>
            <GlobalStyle />
            <PageContainer>
                <MenuLeft onItemSelect={handleMenuClick} />
                {activeMenuItem === 'item1' && <SubMenuBuild activeItem={activeMenuItem} onClose={handleCloseSubMenu} />}
                {/*{activeMenuItem === 'item2' && <SubmenuFinish onClose={handleCloseSubMenu} />}*/}
                {/*{activeMenuItem === 'item3' && <SubmenuFurniture onClose={handleCloseSubMenu} />}*/}
                {/*{activeMenuItem === 'item4' && <SubmenuSettings onClose={handleCloseSubMenu} />}*/}
            </PageContainer>
        </>
    );
};

export default MainMenu;

