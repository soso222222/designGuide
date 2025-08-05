import LiveCodeEditor from "../../../Common/UI/LiveEditor/LiveCodeEditor";
import { Button } from "../../../Common";
import styled from "styled-components";


export const Box = styled.div`
  button {
    margin-right: 5rem;
  }
`;

function ButtonContent() {

    const scope = { Button ,Box };
    const code = `
    <Box>
        <Button>test</Button>
        <Button themeName="red">red</Button>
    </Box>
    `;
    
    return (
        <>
            <LiveCodeEditor code={code} scope={scope} />
        </>
    );
}

export default ButtonContent;
