import { Route, Routes } from "react-router-dom";
import Menu from "../../../../../Common/UI/Menu/Menu";
import { category } from "./data.LeftMenu";
import { Nav, Logo, Photo, Wrapper } from "./styled.LeftMenu";
import useMenu from "../../../../../Common/Hooks/useMenu";
import { useEffect } from "react";

function LeftMenu() {
    const menuState = useMenu();
    
    useEffect(() => {
        menuState?.setMenuData(category);
    }, [menuState?.menuData]);

    return (
        <Wrapper>
            <Logo>
                <h1>
                    <Photo alt="Logo" src="/images/logo.png" />
                </h1>
            </Logo>
            <Nav>
                <Menu list={menuState?.menuData} menuState={menuState} />
            </Nav>
            
            <Routes>
                {category?.map(({ url, el, depth }, idx) => {
                    <Route
                        key={idx}
                        path={`${url}/*`}
                        element={el}
                    />
                    depth?.map(({ durl, dEl }, dIdx) => (
                        <Route
                            key={dIdx}
                            path={`${url}${durl}/*`}
                            element={dEl}
                        />
                    ))
                })}
            </Routes>
        </Wrapper>
    );
}
export default LeftMenu;
