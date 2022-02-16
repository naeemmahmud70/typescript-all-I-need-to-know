const addID = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "Mash",
  age: 40,
});

// Generic in interface

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: APIResponse<{}> = {
  status: 200,
  type: "good",
  data: "test",
};
