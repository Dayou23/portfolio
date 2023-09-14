import { useState, useEffect } from "react";
// import headerImg from "../assets/img/header-img.svg";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import "animate.css";
// import TrackVisibility from "react-on-screen";
import styled from "styled-components";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
const BannerStyle = styled.section`
  margin-top: 0;
  padding: 200px 0 100px 0;
  /* background-image: url('./assets/img/quinton-coetzee.jpg'); */
  /* background-position: top center; */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
`;
const BannerH1 = styled.h1`
  color: ${({ theme }) => theme.text_primary};
  font-size: 65px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
`;
const BannerSpan = styled.span`
  color: rgba(0, 109, 204);
  font-size: 30px;
  font-weight: 600;
`;
const BannerP = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;
`;

const BannerButton = styled.button`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
  font-size: 20px;
  margin-top: 50px;
  letter-spacing: 0.8px;
`;

const Tagline = styled.span`
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 8px 10px;
  background: linear-gradient(
    90.21deg,
    rgba(87, 202, 233, 0.5) -5.91%,
    rgba(74, 47, 189, 0.5) 111.58%
  );
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-bottom: 16px;
  display: inline-block;
`;
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    // "Web and Mobile Developer",
    "Web Developer",
    "Full Stack Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <BannerStyle id="home">
      <div className="container ">
        <div className="row aligh-items-center">
          <div className="Col col-xs-12 col-md-6 col-xl-7">
            <div>
              {/* {({ isVisible }) => ( */}
              <div
              // className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <BannerH1>
                  {`Hi! I'm Diyaa`}{" "}
                  <div
                    className="txt-rotate"
                    // dataPeriod="1000"
                    // data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                  >
                    I am a <BannerSpan>{text}</BannerSpan>
                  </div>
                </BannerH1>
                <BannerP>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </BannerP>
                <Tagline Resume>Check Resume</Tagline>
                <BannerButton
                  className="button"
                  onClick={() => console.log("connect")}
                >
                  Let’s Connect <ArrowCircleRightOutlined size={25} />
                </BannerButton>
              </div>
              {/* )} */}
            </div>
          </div>
          {/* <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col> */}
        </div>
      </div>
    </BannerStyle>
  );
};
