// EXERCIES ARRAY v2

const actors = [
    {
      name: "Jennifer Lawrence",
      yearOfBirth: 1990,
      nationality: "american",
      character: "Aurora Lane",
      movies: ["Dark Phoenix", "Red Sparrow", "Mother!", "X-men : Apocalypse"],
    },
    {
      name: "Chris Pratt",
      yearOfBirth: 1979,
      nationality: "american",
      character: "Jim Preston",
      movies: [
        "Guardian of the Galaxy Vol.2",
        "Jurassic World : Fallen Kingdom",
        "Avengers : Endgame",
      ],
    },
    {
      name: "Laurence Fishburne",
      yearOfBirth: 1961,
      nationality: "american",
      character: "Gus Mancuso",
      movies: [
        "John Wick: Chapter 3 – Parabellum",
        "Batman vs Superman: Dawn of Justice",
      ],
    },
  ];

  console.log('actress:', actors[0].name);
  console.log('character:', actors[1].character);
  console.log('movie:', actors[1].movies[2]);
  console.log('yearOfBirth:', actors[2].yearOfBirth);