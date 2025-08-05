import { useEffect } from "react";
import useMenu from "../../../Common/Hooks/useMenu";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import { Wrapper } from "./styled.Layout";
import { category } from "./Header/LeftMenu/data.LeftMenu";
function Layout({ children }) {
    const menuState = useMenu();
    
    useEffect(() => {
        menuState?.setMenuData(category);
    }, [menuState?.menuData]);

    return (
        <Wrapper className="main-wrapper">
            <Header menuState={menuState} />
            <MainContent>{children}</MainContent>
        </Wrapper>
    );
}

export default Layout;
