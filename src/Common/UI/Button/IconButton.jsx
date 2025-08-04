import { forwardRef } from "react";
import { Wrapper } from "./styled.IconButton";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon";
import { Hidden } from "../../../Components/Pages/Main/styled.Layout";

const IconButton = forwardRef(
    (
        {
            children,
            themeName,
            onClick,
            className = "",
            size = "xs",
            iconSize = "xxxxs",
            width, 
            type,
            to,
            isBorder = true,
            fill,
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
            isBorder={isBorder}
            onClick={(e) => {
                to ? navigate(to) : onClick && onClick(e);
                e.stopPropagation();
            }}
        >
            <Icon type={type} size={iconSize} fill={fill} />
            <Hidden>{children}</Hidden>
            </Wrapper>
        );
    }
);

IconButton.defaultProps = {
    themeName: false,
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

export default IconButton;
