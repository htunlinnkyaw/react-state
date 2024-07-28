const questions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements in JavaScript and place them in the DOM without using methods like createElement() or appendChild().",
  },
  {
    id: 3,
    question: "What are components in React?",
    answer:
      "Components are the building blocks of a React application's UI. They split the UI into independent, reusable pieces that can be processed separately.",
  },
  {
    id: 4,
    question: "What is the difference between state and props?",
    answer:
      "Props are read-only and used to pass data from one component to another. State, on the other hand, is a data structure that holds information about the component and can be changed within the component.",
  },
  {
    id: 5,
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM by a library such as ReactDOM. This process is called reconciliation.",
  },
  {
    id: 6,
    question: "What are hooks in React?",
    answer:
      "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. Examples include useState, useEffect, and useContext.",
  },
  {
    id: 7,
    question: "What is a React lifecycle method?",
    answer:
      "Lifecycle methods are special methods in React class components that allow you to run code at specific times in the component's lifecycle, such as when it mounts, updates, or unmounts.",
  },
  {
    id: 8,
    question: "What is a higher-order component (HOC)?",
    answer:
      "A higher-order component is a function that takes a component and returns a new component with additional props or behavior. HOCs are used to reuse component logic.",
  },
  {
    id: 9,
    question: "What is Redux?",
    answer:
      "Redux is a state management library for JavaScript apps, often used with React. It helps manage the application's state in a predictable way using a single source of truth.",
  },
  {
    id: 10,
    question: "What is React Router?",
    answer:
      "React Router is a standard library for routing in React. It enables navigation among views of various components in a React application, allows changing the browser URL, and keeps the UI in sync with the URL.",
  },
];

export default questions;
