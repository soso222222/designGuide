import LayoutContent from "../../Layout/LayoutContent";

/**
 * Base
 */
export const MenuBase = {
    title: "Base",
    url: "/base",
    isHidden: false,
    iconType: "box", 
    isActive: false,
    // el: <RiskAssessment />,
    depth: [
        {
            title: "Color",
            url: "/color",
            isHidden: false,
            isActive: false,
            // el: <RiskAssessmentDetail step={0} />,
        },
        {
            title: "Layout",
            url: "/layout",
            isHidden: false,
            isActive: false,
            el: <LayoutContent />,
        },
        {
            title: "Typography",
            url: "/typography",
            isHidden: false,
            isActive: false,
            // el: <RiskAssessmentDetail step={1} />,
        },
    ],
};
