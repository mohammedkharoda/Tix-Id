export const movieData = [
  {
    id: 1,
    title: "House of the Dragon",
    category1: "CCV",
    category2: "XXI",
    category3: "Cinepolis",
    linkImg:
      "https://www.themoviedb.org/t/p/original/ixOE4qfspKZaaGZUnPCQDANznTz.jpg",
    Genera: "Mystery",
    TimeHH: 1,
    TimeMM: 25,
    Director: "John Watts",
    Rating1: "MA",
  },
  {
    id: 2,
    title: "Black Phone",
    category1: "CCV",
    category2: "XXI",
    category3: "Cinepolis",
    linkImg:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2xfSO3YLkfW7rfLFKCpt9cROeBy.jpg",
    Genera: "Horror , Thriller ",
    TimeHH: 1,
    TimeMM: 43,
    Director: "Scott Derrickson",

    Rating1: "R",
  },
  {
    id: 3,
    title: "Top Gun Maverick",
    category1: "CCV",
    category2: "XXI",
    category3: "Cinepolis",
    linkImg:
      "https://www.themoviedb.org/t/p/original/xOk8XAUnJR08GDFq6hwqD1vjV9O.jpg",
    Genera: "Action,Drama",
    TimeHH: 2,
    TimeMM: 10,
    Director: "Joseph Kosinski  ",

    Rating1: "PG-13",
  },
  {
    id: 4,
    title: "Moon Knight",
    category1: "CCV",
    category2: "XXI",
    category3: "Cinepolis",
    linkImg:
      "https://www.themoviedb.org/t/p/original/fHQuhMKniqfvb3IrjIU1F5MfgQT.jpg",
    Genera: "Action & Adventure",
    TimeHH: 1,
    TimeMM: 15,
    Director: "Jeremy Slater",

    Rating1: "TV-14",
  },
];

export const AdsData = [
  {
    id: 1,
    adsImage: "https://i.postimg.cc/1zRSzwrZ/Ads-1.png",
  },
  {
    id: 2,
    adsImage: "https://i.postimg.cc/j5GBy7P2/Ads-2.png",
  },
  {
    id: 3,
    adsImage: "https://i.postimg.cc/wMX4Jb94/Ads-3.png",
  },
];

export const MoreMovie = [
  {
    id: 1,
    moreMovie: "https://i.postimg.cc/KvMYhw01/Avengers-Endgame.png",
    movieName: "Avengers Endgame",
    moreText: "Action,Adventures,Fantasy",
  },
  {
    id: 2,
    moreMovie:
      "https://www.themoviedb.org/t/p/original/26GuBJpd9vLoCdrG5ocadINtt0h.jpg",
    movieName: "The Batman",
    moreText: "Action,Thriller,Darma",
  },
  {
    id: 3,
    moreMovie:
      "https://www.themoviedb.org/t/p/original/fkR1cw83KSaFcokZ1Uzh8Ukm3Dd.jpg",
    movieName: "The SandMan",
    moreText: "Sci-Fi & Fantasy, Drama",
  },
];

export const theaterData = {
  Theater: {
    Headings: {
      headingName_1: "Grand Indonesia CGV",
      headingName_2: "leasuires SQUARE CINÉPOLIS",
      headingName_3: "PLAZA INDONESIA XXI",
    },
    TheaterType: {
      theaterName_1: "CCV",
      type_1: {
        screen_1: "Regular 2D",
        screen_2: "Gold Class 2D",
        screen_3: "Velvet 2D",
        amount_1: "Rp 45.000 - 50.000",
        amount_2: "Rp 100.000",
        amount_3: "Rp 100.00",
        type_timing: [
          "10:00",
          "1:00",
          "2:00",
          "3:00",
          "4:00",
          "5:00",
          "6:00",
          "7:00",
        ],
        type_timing_2: ["12:40", "15:40", "18:35", "17:10"],
        type_timing_3: ["12:15", "15:40", "18:35", "17:10"],
        enable: true,
        disable: false,
      },
      theaterName_2: "CINÉPOLIS",
      type_2: {
        screen_1: "2D",
        amount_1: "Rp 30.00",
        type_timing: ["13:45", "17:45", "20:00"],
      },
      theaterName_3: "XXI",
      type_3: {
        screen_1: "2D",
        amount_1: "Rp 50.00",
        type_timing: ["12:19", "16:54", "19:45"],
      },
    },
    Location: {
      address: "JL. MH. TAHMRIN NO.1",
    },
  },

  movieDisplay: {
    id: 1,
    poster:
      "https://www.themoviedb.org/t/p/original/t6l3e2pnVrg0DPhgdGY1GBGlrIQ.jpg",
    title: "House of Dragon",
    Genera: {
      type1: "Action",
      type2: "Adventure",
    },
    Time: {
      hh: 2,
      min: 25,
    },
    Director: {
      name: "John Watts",
    },
    Rating: {
      type_1: "MA",
      type_2: "PG18",
    },
  },
};
