import { Parallells } from "components/Parallells";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {},
  main: {
    maxWidth: "1200px",
    width: "auto",
    margin: "0 auto",
  },
});

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <main className={classes.main}>
        <Parallells />
      </main>
    </div>
  );
};
