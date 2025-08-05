import { TopItem, TopleftItem, ToprightItem, Mode, ModeItem, Title, User, Wrapper, Photo } from "./styled.TopMenu";
import { IconButton } from "../../../../../Common";
import { useSelector } from "react-redux";

function TopMenu() {
    const { selectedState: {title} } = useSelector((state) => state.menu);
    
    const onClick = (e) => {
        const classList = document.querySelector(".main-wrapper").classList;

        if(classList.contains("zoom"))
            classList.remove("zoom");
        else
            classList.add("zoom");
    };

    return (
        <Wrapper className="top">
            <TopItem>
                <TopleftItem>
                    <IconButton 
                    type="arrowLeftUpDown" 
                    size="xxxxs" 
                    isBorder={false} 
                    fill={"var(--Orange08)"}
                    onClick={(e) => onClick(e)}>
                    메뉴 열기/닫기
                    </IconButton>
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
                <h2>{title}</h2>
            </Title>
        </Wrapper>
    );
}
export default TopMenu;
