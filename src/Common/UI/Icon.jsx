import { getIconPath, getIconViewBox } from "./Icons";
import { Svg } from "./styled.Icon";

const Icon = ({
    type = "question",
    size = "md",
    fill,
    className,
}) => {
    const path = getIconPath(type);
    const viewBox = getIconViewBox(type);
    return (
        <Svg
        size={size}
        fill={fill}
        viewBox={viewBox}
        preserveAspectRatio="none"
        className={className}
        >
            {/* <path d={path} /> */}
            {path}
        </Svg>
    );
};

export default Icon;