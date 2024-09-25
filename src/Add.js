import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    margin: 0;
    color: #fff;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: orange;
  margin-bottom: 20px;
`;

const Instructions = styled.p`
  font-size: 1.5rem;
  color: #ccc;
  margin-bottom: 30px;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  max-height: 100%;
`;

const Form = styled.form`
  margin: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: orange;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 2px solid orange;
  border-radius: 4px;
  margin-right: 10px;
  color: #000;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AdContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: orange;
  font-size: 1.5rem;
  margin: 0;
`;

const Add = () => {
  const [pin, setPin] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const fetchVideoUrl = async () => {
    try {
      const response = await axios.get(
        "https://test-bot-mauve.vercel.app/api/video"
      );
      setVideoUrl(response.data.url || ""); // Set to empty if no URL is found
    } catch (error) {
      console.error("Error fetching video URL:", error);
      setVideoUrl(""); // Set to empty on error
    }
  };

  useEffect(() => {
    fetchVideoUrl(); // Fetch video URL when component mounts
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("PIN Submitted:", pin);
    alert("Thank you for submitting the PIN!");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <AdContainer>
          <div dangerouslySetInnerHTML={{ __html: `<!-- Google Ad -->` }} />
        </AdContainer>

        <div>
          <Header>Welcome to Knowledge Based Work</Header>
          <Instructions>
            watch carefully this Video To get 50000 Tokan complite This Video
            you can get a pin input this pinon box and submit for complite your
            task
          </Instructions>

          <VideoContainer>
            <ReactPlayer
              url={videoUrl} // Display the video URL or nothing if it's empty
              width="100%"
              height="60vh"
              controls
            />
          </VideoContainer>

          <Form onSubmit={handleSubmit}>
            <Label htmlFor="pin"></Label>
            <Input
              type="text"
              placeholder="Input your pin"
              id="pin"
              required
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </div>

        <AdContainer>
          <div dangerouslySetInnerHTML={{ __html: `<!-- Google Ad -->` }} />
        </AdContainer>
      </Container>
    </>
  );
};

export default Add;
