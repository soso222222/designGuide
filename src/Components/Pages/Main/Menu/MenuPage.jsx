
/**
 * MenuPage
 */
export const MenuPage = {
    title: "Page",
    url: "/page",
    isHidden: false,
    isActive: false,
    iconType: "page", 
    // el: <RiskAssessment />,
    depth: [
        {
            title: "Edit",
            url: "/edit",
            isHidden: false,
            isActive: false,
            // el: <RiskAssessmentDetail step={0} />,
        },
        {
            title: "Mail Box",
            url: "/mail",
            isHidden: false,
            isActive: false,
            // el: <RiskAssessmentDetail step={1} />,
        },
        {
            title: "View",
            url: "/view",
            isHidden: false,
            isActive: false,
            // el: <RiskAssessmentDetail step={1} />,
        },
    ],
};