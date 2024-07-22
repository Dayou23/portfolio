import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components";

const Label = styled.label`
  /* color: ${({ theme }) => theme.text_primary}; */
  padding-right: 5px;
  font-size: 13px;
  font-weight: 600;
  width: 100px;
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const deta = [
  { type: "HTML", level: 75 },
  { type: "JavaScript", level: 75 },
  { type: "CSS", level: 75 },
  { type: "React JS", level: 80 },
  { type: "ReactNative", level: 80 },
  { type: "Node Js", level: 75 },
  { type: "Express Js", level: 75 },
  { type: "TypeScript", level: 75 },
  { type: "MongoDB", level: 75 },
  { type: "SQL", level: 75 },
  { type: "Solidity", level: 65 },
  { type: "PHP", level: 50 },
  { type: "Java", level: 50 },
  { type: "Python", level: 50 },
];
function ProgressSkills() {
  return (
    <div>
      {deta.map((item) => (
        <div className="progressSkills">
          <Label>{item.type}</Label>

          <ProgressBar
            now={item.level}
            label={`${item.level}%`}
            variant="teal"
            className="progressSkillsBar"
          />
        </div>
      ))}
    </div>
  );
}

export default ProgressSkills;
