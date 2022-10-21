/* eslint-disable no-dupe-keys */
export const movieData = {
  primary: [
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
  ],
  secondary: [
    {
      id: 5,
      Movie: "https://i.postimg.cc/KvMYhw01/Avengers-Endgame.png",
      Name: "Avengers Endgame",
      Text: "Action,Adventures,Fantasy",
    },
    {
      id: 6,
      Movie:
        "https://www.themoviedb.org/t/p/original/26GuBJpd9vLoCdrG5ocadINtt0h.jpg",
      Name: "The Batman",
      Text: "Action,Thriller,Darma",
    },
    {
      id: 7,
      Movie:
        "https://www.themoviedb.org/t/p/original/fkR1cw83KSaFcokZ1Uzh8Ukm3Dd.jpg",
      Name: "The SandMan",
      Text: "Sci-Fi & Fantasy, Drama",
    },
  ],
};

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

export const theatreData = [
  {
    id: "theatreData-1",
    name: "Grand indonesia",
    address: "JL. MH. TAHMRIN NO.1",
    locationId: "loc--2",
    location: "Mumbai",
    theatreLogo: "CGV",
    theaterDates: [
      {
        id: "dayDate-1",
        dayName: "Mon",
        date: "15 April",
      },
      {
        id: "dayDate-2",
        dayName: "Tue",
        date: "16 April",
      },
      {
        id: "dayDate-3",
        dayName: "Wed",
        date: "17 April",
      },
      {
        id: "dayDate-4",
        dayName: "Thr",
        date: "18 April",
      },
      {
        id: "dayDate-5",
        dayName: "Fri",
        date: "19 April",
      },
    ],
    showType: [
      {
        id: "showType-theatreData-1-1",
        name: "REGULAR 2D",
        show: [
          {
            id: "show-theaterData-1--1",
            showTime: "12:00",
            showPrice: 350,
          },
          {
            id: "show-theaterData-1--1---2",
            showTime: "1:00",
            showPrice: 250,
          },
          {
            id: "show-theaterData-1--1---3",
            showTime: "2:00",
            showPrice: 450,
          },
          {
            id: "show-theaterData-1--1---4",
            showTime: "3:00",
            showPrice: 550,
          },
          {
            id: "show-theaterData-1--1---5",
            showTime: "4:00",
            showPrice: 650,
          },
          {
            id: "show-theaterData-1--1---6",
            showTime: "5:00",
            showPrice: 750,
          },
          {
            id: "show-theaterData-1--1---7",
            showTime: "6:00",
            showPrice: 850,
          },
          {
            id: "show-theaterData-1--1---8",
            showTime: "7:00",
            showPrice: 950,
          },
        ],
      },
      // -- 2 ---
      {
        id: "showType-theatreData-2-2",
        name: "GOLD CLASS 2D",
        show: [
          {
            id: "show-theaterData-2--2",
            showTime: "2:00",
            showPrice: 350,
          },
          {
            id: "show-theaterData-2--2---1",
            showTime: "3:00",
            showPrice: 350,
          },
          {
            id: "show-theaterData-2--2---3",
            showTime: "5:00",
            showPrice: 350,
          },
          {
            id: "show-theaterData-2--2---4",
            showTime: "7:00",
            showPrice: 350,
          },
        ],
      },
      // -- 3 ---
      {
        id: "showType-theatreData-3-3",
        name: "VELVET 2D",
        show: [
          {
            id: "show-theaterData-3--1",
            showTime: "12:00",
            showPrice: 350,
          },
          {
            id: "show-theaterData-3--3---1",
            showTime: "1:00",
            showPrice: 350,
          },
          {
            id: "show-theaterData-3--3---2",
            showTime: "2:00",
            showPrice: 350,
          },
          {
            id: "show-theaterData-3--3---3",
            showTime: "3:00",
            showPrice: 350,
          },
        ],
      },
    ],
  },
  // ---- THEATER - 2 -----
  {
    id: "theatreData-2",
    name: " SQUARE CINÉPOLIS",
    address: "Trek.L.A",
    locationId: "loc--2",
    theatreLogo: "Cinemapolis",
    movies: [1, 2, 3, 4],
    showType: [
      {
        id: "showType-theatreData-2-2",
        name: "INOX DR WORLD",
        show: [
          {
            id: "show-theaterData-2--2",
            showTime: "15:00",
            showPrice: 350,
          },
          {
            id: "show-theaterData-2--3",
            showTime: "17:15",
            showPrice: 450,
          },
          {
            id: "show-theaterData-2--4",
            showTime: "20:00",
            showPrice: 500,
          },
        ],
      },
    ],
  },
  // ---- THEATER - 3 -----
  {
    id: "theatreData-3",
    name: "PLAZA INDONESIA XXI",
    address: "Trek.L.A",
    theatreLogo: "XXI",
    locationId: "loc--1",
    movies: [1, 2, 3, 4],
    showType: [
      {
        id: "showType-theatreData-3-1",
        name: "CINEMAX Iris ",
        show: [
          {
            id: "show-theaterData-3--2",
            showTime: "4:00",
            showPrice: 250,
          },
          {
            id: "show-theaterData-3--3",
            showTime: "7:15",
            showPrice: 650,
          },
          {
            id: "show-theaterData-3--4",
            showTime: "22:00",
            showPrice: 700,
          },
        ],
      },
    ],
  },
];

export const locationData = [
  {
    locationId: "loc--1",
    locationName: "Surat",
  },
  {
    locationId: "loc--2",
    locationName: "Mumbai",
  },
  {
    locationId: "loc--3",
    locationName: "Delhi",
  },
  {
    locationId: "loc--4",
    locationName: "Bangalore",
  },
];

export const couponList = [
  {
    id: 1,
    name: "movie50",
    discountedPercentage: 10,
  },
  {
    id: 2,
    name: "excited20",
    discountedPercentage: 20,
  },
];

