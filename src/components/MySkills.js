import React from "react";
import MySkill from "./sub_components/MySkill";
import strings from "../res/strings";

export default function MySkills() {
  return (
    <div className="MySkillsWrapper">
      <div className="Title">{strings.myskills.title}</div>
      <MySkill
        title={strings.myskills.skill1.title}
        content={strings.myskills.skill1.content}
      />
      <MySkill
        title={strings.myskills.skill2.title}
        content={strings.myskills.skill2.content}
      />
      <MySkill
        title={strings.myskills.skill3.title}
        content={strings.myskills.skill3.content}
      />
    </div>
  );
}
