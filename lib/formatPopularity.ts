export const formatPopularity = (popularity: number) => {
  if(popularity < 1e3) return popularity;
  if(popularity >= 1e3 && popularity <= 1e6) return +(popularity/1e3).toFixed(1) + "K";
  if(popularity >= 1e6 && popularity <= 1e9) return +(popularity/1e6).toFixed(1) + "M";
  if(popularity >= 1e9 && popularity <= 1e12) return +(popularity/1e9).toFixed(1) + "B";
}