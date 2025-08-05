import Menu from "../../../../../Common/UI/Menu/Menu";
import { Nav, Logo, Photo, Wrapper } from "./styled.LeftMenu";

function LeftMenu({ menuState }) {

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
        </Wrapper>
    );
}
export default LeftMenu;
