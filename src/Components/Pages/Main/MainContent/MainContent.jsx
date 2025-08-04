import { Route, Routes } from "react-router-dom";
import { Wrapper } from "./styled.MainContent";
import { category } from "../Header/LeftMenu/data.LeftMenu";

function MainContent() {

    return (
        <Wrapper>
            <Routes>
                {category.map(({ url, el, depth }, idx) => {
                    return (
                        <>
                            <Route
                            key={idx}
                            path={`${url}/*`}
                            element={el}
                            />
                            {depth?.map(({ url: durl, el: dEl }, dIdx) => (
                                <Route key={dIdx}
                                path={`${url}${durl}/*`}
                                element={dEl} />
                                ))}
                        </>
                    );
                })}
            </Routes>
        </Wrapper>
    );
}
export default MainContent;
