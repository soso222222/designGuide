
/**
 * MyPage
 */
export const MenuMyPage = {
    title: "My Page",
    url: "/mypage",
    isHidden: false,
    isActive: false,
    iconType: "smile", 
    // el: <RiskAssessment />,
    depth: [
        {
            title: "개인정보 관리",
            url: "/manageinfo",
            isHidden: false,
            isActive: false,
            // el: <RiskAssessmentDetail step={0} />,
        },
        {
            title: "비밀번호 수정",
            url: "/pwd",
            isHidden: false,
            isActive: false,
            // el: <RiskAssessmentDetail step={1} />,
        },
    ],
};
