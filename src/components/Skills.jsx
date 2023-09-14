import { skills } from "../data/constants";
import styled from "styled-components";
import SkillBar from "react-skillbars";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 900px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid rgba(23, 92, 230);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const IllSection = styled.section`
  width: 24px;
  height: 24px;
`;
const KillBx = styled.div`
  background: rgba(23, 92, 230, 0.15);
  /* color: #022129; */
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -60px;
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const SkillH2 = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  font-size: 45px;
  font-weight: 700;
`;

const SkillP = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px 0 40px 0;
`;

export const Skills = () => {
  const skillsPr = [
    { type: "HTML", level: 80 },
    { type: "Javascript", level: 80 },
    { type: "CSS", level: 80 },
    { type: "React JS", level: 85 },
    { type: "ReactNative", level: 55 },
    { type: "Node Js", level: 80 },
    { type: "Express Js", level: 85 },
    { type: "MongoDB", level: 80 },
    { type: "SQL", level: 70 },
    { type: "Solidity", level: 75 },
    { type: "PHP", level: 50 },
    { type: "java", level: 50 },
    { type: "Python", level: 50 },
  ];

  const colors = {
    bar: "#4288d0",
    title: {
      text: "#fff",
      background: "#124e8c",
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <KillBx className="skill-bx wow zoomIn">
              <SkillH2>Skills</SkillH2>
              <SkillP>
                Here are some of my skills on which I have been working.
              </SkillP>
              <SkillBar
                skills={skillsPr}
                colors={colors}
                animationDuration={2000}
              />
              <SkillsContainer>
                <Skill>
                  {skills.map((skill) => (
                    <div>
                      <SkillTitle>{skill.title}</SkillTitle>
                      <SkillList>
                        {skill.skills.map((item) => (
                          <SkillItem>
                            <SkillImage src={item.image} />
                            {item.name}
                          </SkillItem>
                        ))}
                      </SkillList>
                    </div>
                  ))}
                </Skill>
              </SkillsContainer>
            </KillBx>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};