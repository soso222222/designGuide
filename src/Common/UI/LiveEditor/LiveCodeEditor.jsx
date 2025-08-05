import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import Box from "../Box/Box";
import Container from "../Box/Container";

const LiveCodeEditor = ({ 
    code, 
    scope, 
    language = "jsx" 
}) => {
    return (
        <LiveProvider code={code} scope={scope}>
            <LiveEditor 
            className={`language-${language} prism-atom-dark`} />
            <Container margin="20rem 0">
                <Box title={"결과"}>
                    <LivePreview />
                </Box>
            </Container>
            <LiveError />
        </LiveProvider>
    );
};

export default LiveCodeEditor;