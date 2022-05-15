import { ISection } from "types";
import data from "../parallels.json";
import { Section } from "./Section";

export const Parallells = () => {
  const sections = data as ISection[];

  return (
    <div>
      {sections.map((section) => (
        <Section key={section.title} section={section} />
      ))}
    </div>
  );
};
