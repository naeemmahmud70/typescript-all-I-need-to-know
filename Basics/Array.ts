// Number of array
const ages: number[] = [18, 21, 20, 19, 22];
ages[0] = 19;
ages.push(23);

// String of array
const friends: string[] = ["Saki", "Sharif", "Mohtasim", "Rabbi", "Shawon"];
friends.push("Babul");
friends[3] = "Khan";

// Multiple type declare
const ages2: (number | string)[] = [18, 21, 20, 19, 22, "John"];
ages2[0] = 19;
ages2.push("John");
ages2.push(23);
