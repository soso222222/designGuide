
/**
 * Component
 */
export const MenuComponent = {
    title: "Component",
    url: "/Component",
    isHidden: false,
    iconType: "cube", 
            isActive: false,
    // el: <RiskAssessment />,
    depth: [
        {
            title: "Button",
            url: "/button",
            isHidden: false,
            isActive: false,
            // el: <RiskAssessmentDetail step={0} />,
        },
        {
            title: "Form",
            url: "/form",
            isHidden: false,
            isActive: false,
            // el: <RiskAssessmentDetail step={1} />,
        },
    ],
};
