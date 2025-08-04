
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
            title: "Typography",
            url: "/typography",
            isHidden: false,
            isActive: false,
            // el: <RiskAssessmentDetail step={1} />,
        },
    ],
};
