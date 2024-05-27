# React Compiler Experiments

This a trivial Vite-based project to experiment with the React Compiler. It is based on the classical "Todo List" examples. It contains two branches:

- manual-optimization: source code makes use of `React.memo` and `useCallback` to optimize rendering.
- master: `React.memo` and `useCallback` are removed from source code and project is configured to use the React Compiler. React Developer Tools plugin displays the Memo badge next to every component.

In both cases:

- `console.log` sentences are included to show when a component it renders.
- `AddTodo` is implemented as a controlled component (so, it is rendered while the user types in the form).
- `todo` function in `App` component makes use of `new Date().getTime()` to generate identifiers. Note, however, that
  `App` (and the rest of components) are pure, since identifiers are generated from an event handler function (`handleAddTodo`), not during render.

## [manual-optimization] Execution

```
git checkout manual-optimization
npm install
npm run dev
```

The rendering is very optimum. For example:

- If a new todo is added, only `App`, `AddTodo`, `Todos` and the `Todo` corresponding to the new "todo" are rendered (just that "todo").
- If a "todo" is clicked on, only `App`, `Todos` and the `Todo` corresponding to the that "todo" are rendered (just that "todo").
- If the filter changes, only `App`, `Todos`, the affected `Todo`s (not all of them) and `Filter` are rendered.

## [master] Execution

```
git checkout master
npm install
npm run dev
```

The rendering is worse.  For example:

- If a new todo is added, `App`, `AddTodo`, `Todos` and **all** `Todo`s are rendered.
- If a "todo" is clicked on, `App`, `Todos` and **all** `Todo`s are rendered.
- If the filter changes,  `App`, `Todos`, **all** `Todo`s and `Filter` are rendered.

Is React Compiler working well?



