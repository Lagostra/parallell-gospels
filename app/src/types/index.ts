export interface IEpisode {
  title: string;
  matthew: string;
  matthew_ordered: boolean;
  mark: string;
  mark_ordered: boolean;
  luke: string;
  luke_ordered: boolean;
  john: string;
  john_ordered: boolean;
}

export interface ISection {
  title: string;
  episodes: IEpisode[];
}
