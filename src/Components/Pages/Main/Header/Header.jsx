import LeftMenu from "./LeftMenu/LeftMenu";
import TopMenu from "./TopMenu/TopMenu";
import { TopWrapper, LeftWrapper } from "./styled.Header";

function Header({ menuState }) {
    return (
        <>
            <TopWrapper id="header">
                <TopMenu />
            </TopWrapper>
            <LeftWrapper id="gnb">
                <LeftMenu menuState={menuState} />
            </LeftWrapper>
        </>
    );
}

export default Header;
