import { TopItem, TopleftItem, ToprightItem, Mode, ModeItem, Title, User, Wrapper, Photo } from "./styled.TopMenu";
import { IconButton } from "../../../../../Common";

function TopMenu() {
    return (
        <Wrapper className="top">
            <TopItem>
                <TopleftItem>
                    <IconButton type="menu" isBorder={false} fill={"var(--Orange08)"}>메뉴 열기/닫기</IconButton>
                </TopleftItem>
                <ToprightItem>
                    <Mode>
                        <ModeItem>
                            <IconButton type="sun" fill={"var(--Orange08)"}>라이트 모드</IconButton>
                        </ModeItem>
                    </Mode>
                    <User>
                        <Photo alt="사용자 프로필" src="/images/header-user-photo2.jpg" />
                    </User>
                </ToprightItem>
            </TopItem>
            <Title>
                <h2>Dashboard</h2>
            </Title>
        </Wrapper>
    );
}
export default TopMenu;
