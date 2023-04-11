import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center text-2xl pt-4 text-black font-bold">
        {" "}
        Questions <strong className="text-purple-900">Answer</strong>
      </h1>

      <div className="p-6 space-y-2">
        <p>
          <strong>When should we use context api?</strong>
        </p>
        <p className="text-black font-light">
          Context API in React should be used when you need to share data or
          state between multiple components that are not directly connected in
          the component tree. It allows for a simpler and more efficient way to
          pass down data and avoid "prop drilling".
        </p>
        <p>
          <strong>What is custom hook?</strong>
        </p>
        <p className="text-black te">
          custom hook in React is a reusable function that allows you to
          abstract out and share logic between different components. Custom
          hooks allow you to encapsulate complex logic that would otherwise
          clutter up your components, making them more reusable and easier to
          maintain. By convention, custom hooks are named with the prefix "use",
          indicating that they follow the same rules as built-in hooks like
          useState or useEffect.
        </p>
        <p>
          <strong>what is useRef?</strong>
        </p>
        <p className="text-black te">
          useRef in React is a hook that creates a mutable ref object that can
          be used to hold a reference to a DOM element or a value between
          renders.
        </p>
        <p>
          <strong>what is useMemo?</strong>
        </p>
        <p className="text-black te">
          useMemo in React is a hook that memoizes the result of a function so
          that it only recomputes the value when its dependencies have changed.
          It can be used to optimize expensive computations that are not needed
          on every render.
        </p>
      </div>
    </div>
  );
};

export default Blog;
