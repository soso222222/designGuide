import { forwardRef } from "react";
import { Name, Wrapper } from "./styled.Input";
import Input from "./Input";
import Icon from "../Icon";
import { Hidden } from "../../../Components/Pages/Main/styled.Layout";

const InputGroup = forwardRef(
    (
        {
            type = "text", 
            name, 
            width = null,
            size = "xs", 
            iconSize = "xxxxxs", 
            leftIconType = null,
            rightIconType = null, 
            ...props
        },
        ref
    ) => {

        const hasName = (text) => {
            return text && !leftIconType && !rightIconType;
        };

        return (
            <Wrapper
                // ref={propsRef}
                // className={className}
                width={width}
                iconSize={iconSize}
            >
                {hasName(name) && <Name>{name}</Name>}
                {leftIconType && <Name><Icon type={leftIconType} size={iconSize} /><Hidden>{name}</Hidden></Name>}
                <Input size={size} />
                {rightIconType && <Name><Icon type={rightIconType} size={iconSize} /><Hidden>{name}</Hidden></Name>}
            </Wrapper>
        );
    }
);

export default InputGroup;
