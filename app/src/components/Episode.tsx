import { createUseStyles } from "react-jss";
import { IEpisode } from "types";

const useStyles = createUseStyles({
  gospels: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  },
});

interface IProps {
  episode: IEpisode;
}
export const Episode = ({ episode }: IProps) => {
  const classes = useStyles();

  return (
    <div>
      <h3>{episode.title}</h3>
      <div className={classes.gospels}>
        <div>
          <h4>Matteus</h4>
          <p>{episode.matthew}</p>
          <p>I riktig rekkefølge: {episode.matthew_ordered ? "Ja" : "Nei"}</p>
        </div>
        <div>
          <h4>Markus</h4>
          <p>{episode.mark}</p>
          <p>I riktig rekkefølge: {episode.mark_ordered ? "Ja" : "Nei"}</p>
        </div>
        <div>
          <h4>Lukas</h4>
          <p>{episode.luke}</p>
          <p>I riktig rekkefølge: {episode.luke_ordered ? "Ja" : "Nei"}</p>
        </div>
        <div>
          <h4>Johannes</h4>
          <p>{episode.john}</p>
          <p>I riktig rekkefølge: {episode.john_ordered ? "Ja" : "Nei"}</p>
        </div>
      </div>
    </div>
  );
};
