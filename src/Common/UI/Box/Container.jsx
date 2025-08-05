import { Wrapper } from "./styled.BoxContainer";

const Container = ({ 
    columns,
    rows,
    gap = "10rem", 
    margin = "0 0 10rem 0",
    padding = "0",
    children
}) => {
    return (
        <Wrapper columns={columns} rows={rows} gap={gap} margin={margin} padding={padding}>
            {children}
        </Wrapper>
    );
};

export default Container;