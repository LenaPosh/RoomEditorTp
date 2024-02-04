import React, {useState} from 'react';
import styled from 'styled-components';
import {GlobalStyle} from '../form/FormStyles';
import {MenuLeft} from './MenuLeft'
import SubMenuBuild from "./SubMenuBuild";
import MainHeaderIcon from "./MainHeaderIcon";
import SubMenuFurniture from "./SubMenuFurniture";



const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #F5F5F5;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 780px) {
    width: 100%; 
    box-shadow: none;
  }
`;

interface OverlayProps {
    $isOpen: boolean;
}
export const Overlay = styled.div<OverlayProps>`
  display: none; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;

  @media (max-width: 780px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  }
`;


export const MainMenu: React.FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const handleMenuClick = (itemName: string) => {
        setActiveMenuItem(itemName);
        setSubMenuOpen(true);
    };

    const handleCloseSubMenu = () => {
        setActiveMenuItem(null);
        setSubMenuOpen(false);
    };

    return (
        <>
            <GlobalStyle />
            {isSubMenuOpen && <Overlay $isOpen={isSubMenuOpen} onClick={handleCloseSubMenu} />}
            <PageContainer>
                <MenuLeft onItemSelect={handleMenuClick} />
                {activeMenuItem === 'build' && <SubMenuBuild activeItem={activeMenuItem} onClose={handleCloseSubMenu} />}
                {activeMenuItem === 'furniture' && <SubMenuFurniture activeItem={activeMenuItem} onClose={handleCloseSubMenu} />}

                <MainHeaderIcon />

            </PageContainer>
        </>
        // <>
        //     <GlobalStyle />
        //     <PageContainer>
        //         <MenuLeft onItemSelect={handleMenuClick} />
        //         {activeMenuItem === 'item1' && <SubMenuBuild activeItem={activeMenuItem} onClose={handleCloseSubMenu} />}
        //         {/*{activeMenuItem === 'item2' && <SubmenuFinish onClose={handleCloseSubMenu} />}*/}
        //         {/*{activeMenuItem === 'item3' && <SubmenuFurniture onClose={handleCloseSubMenu} />}*/}
        //         {/*{activeMenuItem === 'item4' && <SubmenuSettings onClose={handleCloseSubMenu} />}*/}
        //     <MainHeaderIcon/>
        //     </PageContainer>
        // </>
    );
};

export default MainMenu;

