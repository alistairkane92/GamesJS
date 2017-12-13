use games;

db.dropDatabase();

db.favourite_games.insert({
    name: "Dark Souls",
    genre: "Painful",
    rating: "10"
});

db.favourite_games.find();
