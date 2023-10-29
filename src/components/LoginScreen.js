import React from "react";
import styled from "styled-components";

const LoginScreen = () => {
  return (
    <Container>
      <Title>Welcome Back</Title>
      <UsernameInput type="text" placeholder="ENTER YOUR USERNAME" />
      <PasswordInput type="password" placeholder="ENTER YOUR PASSWORD" />
      <Button type="submit">Log In</Button>
      <Text>or Login using</Text>
      <LoginContainer>
        <GoogleLogin />
        <FaceBookLogin />
        <LinkeInLogin />
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 30em;
  height: 30em;
  position: relative;
  border-radius: 1em;
  box-shadow: 0 0.188em 1.55em rgb(156, 156, 156);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  color: gray;
`;

const UsernameInput = styled.input`
  border: none;
  background-color: rgb(229, 226, 226);
  height: 4em;
  width: 80%;
  border-radius: 0.25em;
  text-align: center;
  padding: 2em;
  letter-spacing: 2px;
`;

const PasswordInput = styled.input`
  border: none;
  background-color: rgb(229, 226, 226);
  height: 4em;
  width: 80%;
  border-radius: 0.25em;
  text-align: center;
  padding: 2em;
  letter-spacing: 2px;
`;

const Button = styled.button`
  height: 3em;
  width: 79.9%;
  font-size: 15px;
  color: #fff;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
`;

const Text = styled.p`
  position: relative;
  top: 1em;
`;

const LoginContainer = styled.div`
  width: 80%;
  height: 3em;
  display: flex;
  justify-content: center;
`;

const GoogleLogin = styled.div`
  width: 30%;
  height: 90%;
  border-radius: 0.25em;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  background-image: url("https://w7.pngwing.com/pngs/338/520/png-transparent-g-suite-google-play-google-logo-google-text-logo-cloud-computing-thumbnail.png");
`;

const FaceBookLogin = styled.div`
  width: 30%;
  height: 90%;
  border-radius: 0.25em;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://w7.pngwing.com/pngs/561/460/png-transparent-fb-facebook-facebook-logo-social-media-icon-thumbnail.png");
`;

const LinkeInLogin = styled.div`
  width: 30%;
  height: 90%;
  border-radius: 0.25em;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://w7.pngwing.com/pngs/1022/657/png-transparent-linked-in-logo-social-media-individual-social-network-linkedin-linked-in-blue-angle-text-thumbnail.png");
`;

export default LoginScreen;
