import React from "react";

export default function MySkill(props) {
  return (
    <div className="MySkill">
      <div className="SkillTitle">{props.title}</div>
      <div className="SkillContent">{props.content}</div>
    </div>
  );
}
