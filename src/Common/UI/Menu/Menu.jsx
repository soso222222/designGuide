import { forwardRef, useEffect } from "react";
import { Wrapper } from "./styled.Menu";
import MenuItem from "./MenuItem";

const Menu = forwardRef(
    (
        {
            list = [], 
            menuState, 
            gap = 4,
            size = "xs",
            iconSize = "xxxxxxs", 
        },
        ref
    ) => {
        
        return (
            <Wrapper
                // ref={propsRef}
                // className={className}
            >
            {list.map((item, idx) => (
                <MenuItem 
                key={idx} 
                ref={ref}
                {...item}
                gap={gap}
                size={size}
                iconSize={iconSize}
                menuState={menuState} />
            ))}
            </Wrapper>
        );
    }
);

export default Menu;
