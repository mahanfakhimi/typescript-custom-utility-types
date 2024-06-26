/**
 * ? ReturnType => CustomReturnType
type CustomReturnType<K extends keyof any, T> = {
  [P in K]: T;
};

type UserField = "firstName" | "lastName" | "age";

const newUser: CustomReturnType<UserField, number> = {
  firstName: 1,
  lastName: 2,
  age: 3,
};
*/

/**
 * ? Uppercase => CustomUppercase
type UppercaseChar<C extends string> = C extends "a"
  ? "A"
  : C extends "b"
  ? "B"
  : C;

type CustomUppercase<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${UppercaseChar<First>}${CustomUppercase<Rest>}`
  : S;

type FirstName = CustomUppercase<"a">;
*/

/**
 * ? Lowercase => CustomLowercase
type LowercaseChar<C extends string> = C extends "A"
  ? "a"
  : C extends "B"
  ? "b"
  : C;

type CustomLowercase<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${LowercaseChar<First>}${CustomLowercase<Rest>}`
  : S;

type FirstName = CustomLowercase<"A">;
*/

/**
 * ? Partial => CustomPartial
type CustomPartial<T> = {
  [P in keyof T]?: T[P];
};

type User = {
  firstName: string;
  lastName: string;
  age: string;
};

const newUser: CustomPartial<User> = {};
*/

/**
 * ? Required => CustomRequired
type CustomRequired<T> = {
  [P in keyof T]-?: T[P];
};

type User = {
  firstName: string;
  lastName: string;
  age: string;
};

const newUser: CustomRequired<User> = {
  firstName: "",
  lastName: "",
  age: "40",
};
*/

/**
 * ? Parameters => CustomParameters
type CustomParameters<T extends (...args: any) => void> = T extends (
  ...args: infer P
) => void
  ? P
  : never;

type FucntionParameters = CustomParameters<typeof calculateSum>;

function calculateSum(a: number, b: number) {
  return a + b;
}
*/
