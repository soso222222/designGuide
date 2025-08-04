import Input from "../../../../Common/UI/Input/InputGroup";
import Button from "../../../../Common/UI/Button/Button";

import { Wrapper, UserBox, LoginBox, RegisterBox, Text, FormBox, ButtonBox } from "./styled.Home";
import { Link } from "react-router-dom";

function Home() {

    return (
        <Wrapper>
            <UserBox>
                <LoginBox>
                    <h2>Login</h2>
                    <Text>Sign In to your account</Text>
                    <FormBox>
                        <li>
                            <Input leftIconType={"person"} width={250} name="아이디" />
                        </li>
                        <li>
                            <Input leftIconType={"lock"} width={250} name="비밀번호" />
                        </li>
                    </FormBox>
                    <ButtonBox>
                        <Button width={70} to={`/dashboard`}>Login</Button>
                        <Link to={false}>Forgot password?</Link>
                    </ButtonBox>
                </LoginBox>
                <RegisterBox>
                    <h3>Sign up</h3>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <ButtonBox>
                        <span></span>
                        <Link to={false}>Register Now!</Link>
                    </ButtonBox>
                </RegisterBox>
            </UserBox>
        </Wrapper>
    );
}
export default Home;
