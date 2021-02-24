import { genres, bands, musicians } from "./mockedAPI/BackendData";
import { Genre } from "./mockedAPI/interfaces";

export const calculate = (item = { title: "", id: -1 }) => {
  const data = genres.map((genre: Genre) => {
    const { title, id } = item;
    return {
      id: 1,
      title: genre.name,
      isOpen:
        id === 1
          ? genre.name === title
            ? true
            : false
          : id === 2 && title.includes(genre.name)
          ? true
          : false,
      subnav: bands
        .filter((b) => genre.bands.includes(b.id))
        .map((band) => {
          return {
            id: 2,
            title: band.name,
            isOpen:
              id === 2
                ? band.name === title
                  ? true
                  : false
                : id === 3 && title.includes(band.name)
                ? true
                : false,
            subnav: musicians
              .filter((m) => band.musicians.includes(m.id))
              .map((musician) => {
                return {
                  id: 3,
                  title: musician.name,
                };
              }),
          };
        }),
    };
  });
  return data;
};
