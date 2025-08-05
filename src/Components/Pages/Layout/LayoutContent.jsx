import Box from "../../../Common/UI/Box/Box";
import Container from "../../../Common/UI/Box/Container";
import LiveCodeEditor from "../../../Common/UI/LiveEditor/LiveCodeEditor";

function LayoutContent() {

    const scope = { Container, Box };
    const code = `
        <div>
            <Container>
                <Box title={"layout1"}>
                    layout
                </Box>
            </Container>
            <Container columns={2}>
                <Box title={"layout2"}>
                    layout
                </Box>
                <Box title={"layout3"}>
                    layout
                </Box>
            </Container>
        </div>
    `;

    return (
        <>
            <Container>
                <Box title={"Props 설명"}>
                    layout
                </Box>
            </Container>
            <LiveCodeEditor code={code} scope={scope} />
        </>
    );
}
export default LayoutContent;
