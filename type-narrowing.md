## What is Type Narrowing in TypeScript?

When I started learing TypeScript, I learned about type narrowing . At frist, it was a little confusing for me . but after practicing, I understood it. Tyyype narrowing means checking a values type and making it more specific.It helps us write safer code and avoid errors.

-Understanding Type Narrowing:

TypeScript gives us different ways to check the type of a value. Let's look at some simple examples.

1. Using typeof:

We can use typeof to check basic types like string and number.

let value: string | number = "Hello";

```ts
if (typeof value === "string") {
  console.log(value);
} else {
  console.log(value);
}
```

2. Using instanceof:

We can use instanceof to check if an object belongs to a specific class.

```ts
class Person {}

const user = new Person();

if (user instanceof Person) {
  console.log("This is a Person");
}
```

3. Using the in Operator:

We can use in to check if an object has a specific property.

```ts
const user = {
  name: "Mahafuzar",
  age: 22,
};

if ("name" in user) {
  console.log(user.name);
}
```

My Understanding:

I learned that Type Narrowing makes TypeScript code safer and easier to understand. Using typeof, instanceof, and in helps us check different types of values. With more practice, I hope to use them confidently.
