enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
}

interface APIResponses<T> {
  status: number;
  type: RType;
  data: T;
}

const response5: APIResponses<string> = {
  status: 200,
  type: RType.SUCCESS,
  data: "test",
};
