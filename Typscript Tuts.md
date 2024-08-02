# TypeScript Basics

--At the essence 

## Table of Contents
1. [Advantages of TypeScript](#1-advantages-of-typescript)
2. [TypeScript Additions](#2-typescript-additions)
3. [Need for TypeScript Compiler](#3-need-for-typescript-compiler)
4. [TypeScript Compilation Process](#4-typescript-compilation-process)
5. [Types in TypeScript](#5-types-in-typescript)
6. [Error in add('1', '2')](#6-error-in-add1-2)
7. [Type Inference](#7-type-inference)
8. [Type Inference Problems and Type Casting](#8-type-inference-problems-and-type-casting)
9. [tsc --init](#9-tsc---init)
10. [Strict Mode](#10-strict-mode)
11. [Non-null Assertion Operator (!)](#11-non-null-assertion-operator-)
12. [Avoiding 'any' Type](#12-avoiding-any-type)
13. [Handling Objects](#13-handling-objects)
14. [Handling Arrays](#14-handling-arrays)
15. ['type' Keyword Usage](#15-type-keyword-usage)
16. [Advantages of Interfaces over Types](#16-advantages-of-interfaces-over-types)
17. [Arrays as Generics](#17-arrays-as-generics)
18. [Changing Target to ES6](#18-changing-target-to-es6)
19. [Generics with Promises](#19-generics-with-promises)

---

## 1. Advantages of TypeScript

TypeScript offers several key advantages:

- Static typing
- Early error detection
- Enhanced tooling support
- Features like interfaces, enums, and generics

These improve code quality and maintainability.

---

## 2. TypeScript Additions

TypeScript adds the following to JavaScript:

- Static typing
- Interfaces
- Enums
- Generics
- Advanced type inference
- Decorators
- Namespaces
- Improved module support

---

## 3. Need for TypeScript Compiler

The TypeScript compiler (tsc) serves several purposes:

- Transpiles TypeScript to JavaScript
- Performs type checking
- Catches errors at compile-time

This process reduces runtime errors and improves overall code quality.

---

## 4. TypeScript Compilation Process

Compilation in TypeScript involves:

- Transforming TypeScript into JavaScript
- Removing type annotations and TypeScript-specific features
- Generating `.js` files that can run in any JavaScript environment

---

## 5. Types in TypeScript

TypeScript includes a variety of types:

- Basic types: `number`, `string`, `boolean`
- Special types: `any`, `void`, `null`, `undefined`, `never`
- Object-related: `object`, `array`, `tuple`
- Advanced types: union types
- User-defined types: interfaces and enums

---

## 6. Error in add('1', '2')

The error occurs because:

- The `add` function expects number parameters
- Passing string values `'1'` and `'2'` violates the type constraint
- This demonstrates TypeScript's static type checking in action

---

## 7. Type Inference

Type inference in TypeScript:

- Automatically determines types based on value assignments
- Enhances code readability
- Reduces the need for explicit type annotations
- Improves development efficiency

---

## 8. Type Inference Problems and Type Casting

Issues with type inference:

- May sometimes be too broad or incorrect
- Type casting allows explicit type assignment
- Overrides inferred types
- Use the `as` keyword or angle bracket notation for type casting

---

## 9. tsc --init

The `tsc --init` command:

- Initializes a TypeScript project
- Creates a `tsconfig.json` file
- Configures compiler options and project settings

---

## 10. Strict Mode

Strict mode in TypeScript:

- Enables a set of strict type-checking options
- Enforces stricter type rules
- Includes `nullChecks`, `strictFunctionTypes`, and `strictPropertyInitialization`
- Enhances overall code safety

---

## 11. Non-null Assertion Operator (!)

The exclamation mark (`!`) in TypeScript:

- Acts as a non-null assertion operator
- Tells the compiler that a value isn't null or undefined
- Used when TypeScript's analysis suggests a value might be null/undefined, but the developer knows otherwise

---

## 12. Avoiding 'any' Type

Reasons to avoid the `any` type:

- Bypasses type checking
- Negates TypeScript's benefits
- Should be avoided to maintain type safety
- Improves code quality
- Prevents potential runtime errors

---

## 13. Handling Objects

Objects in TypeScript can be handled using:

- Interfaces
- Type aliases
- Defining object shapes
- Optional properties
- Index signatures for flexible object structures

---

## 14. Handling Arrays

Arrays in TypeScript can be typed using:

- Square brackets (e.g., `number[]`)
- The `Array<T>` generic type
- Tuple types for arrays with a fixed number of elements of different types

---

## 15. 'type' Keyword Usage

The `type` keyword in TypeScript:

- Creates type aliases
- Allows defining custom types
- Can create union types, intersection types, and mapped types
- Useful for creating reusable, complex types

---

## 16. Advantages of Interfaces over Types

Interfaces are often preferred because they:

- Can be extended
- Can be implemented by classes
- Can be merged in declarations
- Are more suitable for describing object shapes and API contracts

---

## 17. Arrays as Generics

Arrays in TypeScript as generics:

- Can hold elements of any type
- Use the `Array<T>` syntax
- `T` represents the element type
- Demonstrates the generic nature of arrays

---

## 18. Changing Target to ES6

Setting the compilation target to ES6:

- Allows using modern JavaScript features
- Enables use of arrow functions, classes, and Promises
- Necessary when using features not available in older ECMAScript versions

---

## 19. Generics with Promises

Using generics with Promises:

- Allows specifying the type of the resolved value
- Example: `Promise<T>` indicates the Promise resolves to a value of type `T`
- Provides better type safety
- Enhances intellisense support