import { BoxContainer } from "./styled.Box";

const Box = ({ 
    title,
    children
}) => {
    return (
        <BoxContainer>
            {title && (<h3>{title}</h3>)}
            {children}
        </BoxContainer>
    );
};

export default Box;