import { forwardRef } from "react";
import { Wrapper } from "./styled.Button";
import { useNavigate } from "react-router-dom";

const Button = forwardRef(
    (
        {
            children,
            themeName = "normal",
            onClick,
            className,
            type,
            size = "xs",
            width,
            to,
            bg,
        },
        ref
    ) => {
        const navigate = useNavigate();
        return (
            <Wrapper
            className={className}
            themeName={themeName}
            size={size}
            width={width}
            bg={bg}
            onClick={(e) => {
                to ? navigate(to) : onClick && onClick(e);
                e.stopPropagation();
            }}
        >
            {children}
            </Wrapper>
        );
    }
);

Button.defaultProps = {
    Theme: false,
    fill: false,
    color: null,
    onClick: () => {},
    disabled: false,
    className: null,
    type: "button",
    loading: false,
    leftIcon: false,
    rightIcon: false,
};
export default Button;
