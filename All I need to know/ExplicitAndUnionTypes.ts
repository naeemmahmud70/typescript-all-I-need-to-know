const myName1:string = "Naeem Miah";
const age1:number = 21;
const isMarried1:boolean = false;

// Number of array
const ages1: number[] = [18, 21, 20, 19, 22];
ages[0] = 19;
ages.push(23);

// String of array
const friends1: string[] = ["Saki", "Sharif", "Mohtasim", "Rabbi", "Shawon"];
friends.push("Babul");
friends[3] = "Khan";


// Object type declare
const student5: { name: string; age: number; isMarried: boolean } = {
    name: "Justin",
    age: 25,
    isMarried: true,
  };

  // Union type declare
const ages3: (number | string)[] = [18, 21, 20, 19, 22, "John"];
ages2[0] = 19;
ages2.push("John");
ages2.push(23);
