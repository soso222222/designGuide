import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import { Wrapper } from "./styled.Layout";
function Layout({ children }) {
    return (
        <Wrapper className="main-wrapper">
            <Header />
            <MainContent>{children}</MainContent>
        </Wrapper>
    );
}

export default Layout;
