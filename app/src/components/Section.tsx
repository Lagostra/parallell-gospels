import { ISection } from "types";
import { Episode } from "./Episode";

interface IProps {
  section: ISection;
}
export const Section = ({ section }: IProps) => {
  return (
    <div>
      <h2>{section.title}</h2>
      <div>
        {section.episodes.map((episode) => (
          <Episode key={episode.title} episode={episode} />
        ))}
      </div>
    </div>
  );
};
