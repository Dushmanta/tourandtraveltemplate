import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { useState } from "react";
import { sliderItem } from "../../data";

const Container = styled.div`
  width: 100%;
  display: flex;
overflow:hidden;
position:absolute;
  height: 100vh;
  
  
`;
const Arrow = styled.div`
  height: 70px;
  width: 70px;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  &:hover {
    background-color: crimson;
    color: white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.6s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  height: 83vh;
  width: 40vw;
`;

const InfoContainer = styled.div`
  flex: 1;
  margin-top: -50px;
  padding: 50px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 36px 0px;
  font-size: 20px;
  font-weight: 550;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 2px;
  background-color: transparent;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  border-block-start-color: initial;
  font-family: initial;
`;

const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
          <a style={{color:"black"}}>
        <ArrowLeftOutlinedIcon/>
        </a>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItem.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>VIEW MORE</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
