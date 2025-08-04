import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /** defaultTheme */
  :root{
    --Black:${(props) => props.theme.colors.Black};
    --White:${(props) => props.theme.colors.White};
    
    --LightRed10:${(props) => props.theme.colors.LightRed};
    --Red10:${(props) => props.theme.colors.Red};
    --DarkRed10:${(props) => props.theme.colors.DarkRed};
    --LightPink10:${(props) => props.theme.colors.LightPink};
    --Pink10:${(props) => props.theme.colors.Pink};
    --Sand10:${(props) => props.theme.colors.Sand};
    --Yellow10:${(props) => props.theme.colors.Yellow};
    --LightOrange10:${(props) => props.theme.colors.LightOrange};
    --Orange10:${(props) => props.theme.colors.Orange};
    --LightGreen10:${(props) => props.theme.colors.LightGreen};
    --Green10:${(props) => props.theme.colors.Green};
    --DarkGreen10:${(props) => props.theme.colors.DarkGreen};
    --LightPurple10:${(props) => props.theme.colors.LightPurple};
    --Purple10:${(props) => props.theme.colors.Purple};
    --DarkPurple10:${(props) => props.theme.colors.DarkPurple};
    --Navy10:${(props) => props.theme.colors.Navy};
    --Blue10:${(props) => props.theme.colors.Blue};
    --Gray10:${(props) => props.theme.colors.Gray};

    --LightRed08:${(props) => props.theme.colors.LightRed08};
    --Red08:${(props) => props.theme.colors.Red08};
    --DarkRed08:${(props) => props.theme.colors.DarkRed08};
    --LightPink08:${(props) => props.theme.colors.LightPink08};
    --Pink08:${(props) => props.theme.colors.Pink08};
    --Sand08:${(props) => props.theme.colors.Sand08};
    --Yellow08:${(props) => props.theme.colors.Yellow08};
    --LightOrange08:${(props) => props.theme.colors.LightOrange08};
    --Orange08:${(props) => props.theme.colors.Orange08};
    --LightGreen08:${(props) => props.theme.colors.LightGreen08};
    --Green08:${(props) => props.theme.colors.Green08};
    --DarkGreen08:${(props) => props.theme.colors.DarkGreen08};
    --LightPurple08:${(props) => props.theme.colors.LightPurple08};
    --Purple08:${(props) => props.theme.colors.Purple08};
    --DarkPurple08:${(props) => props.theme.colors.DarkPurple08};
    --Navy08:${(props) => props.theme.colors.Navy08};
    --Blue08:${(props) => props.theme.colors.Blue08};
    --Gray08:${(props) => props.theme.colors.Gray08};
    --White08:${(props) => props.theme.colors.White08};
    --Black08:${(props) => props.theme.colors.Black08};

    --H_Text10:${(props) => props.theme.colors.H_Text10};

    --Text10:${(props) => props.theme.colors.Text10};
    --Text08:${(props) => props.theme.colors.Text08};
    --Text07:${(props) => props.theme.colors.Text07};
    --Text05:${(props) => props.theme.colors.Text05};
    --Text03:${(props) => props.theme.colors.Text03};
    
    --LogoBg10:${(props) => props.theme.colors.LogoBg10};
    --H_Bg10:${(props) => props.theme.colors.H_Bg10};
    --H_Bg05:${(props) => props.theme.colors.H_Bg05};
    --H_Bg03:${(props) => props.theme.colors.H_Bg03};
    --C_Bg10:${(props) => props.theme.colors.C_Bg10};
    --Bg10:${(props) => props.theme.colors.Bg10};
    --Border10:${(props) => props.theme.colors.Border10};

    --Elevation_001:${(props) => props.theme.elevation.Elevation__001};
    --Elevation_002:${(props) => props.theme.elevation.Elevation__002};
    --Elevation_003:${(props) => props.theme.elevation.Elevation__003};
    --Elevation_004:${(props) => props.theme.elevation.Elevation__004};
    --Elevation_005:${(props) => props.theme.elevation.Elevation__005};
    --Elevation_006:${(props) => props.theme.elevation.Elevation__006};
    --Elevation_007:${(props) => props.theme.elevation.Elevation__007};
    --Elevation_008:${(props) => props.theme.elevation.Elevation__008};
  }
`;

export default GlobalStyle;
