## PLAN: TodoList React

Create a todo list using React.js

### Requirements

- use useState hook
- use events (onClick, onChange)
- use JSX
- take into consideration Mutability vs Immutability
- think about component tree (draw.io), what components will parent render?
- create static components without logic first
- think about state and props

### Deliverables / MVP

- working todo list app performing CRUD operations using React
  - Create(Add todo)
  - Read (View all todos)
  - Update (Edit todo)
  - Delete (Delete todo)
- Sketch, lofi wireframes of UI layout
- Component tree / hierarchy

### Timeframe

- 24hours

### Sketches

![todo ui sketch mobile](src/images/todo-list-react-sketch-ui.png)

### Moodboard

![moodboard for design inspiration](src/images/moodboard.png)

### Components / Hierarchy

![Component Hierarchy](src/images/componentHierarchy.png)

- App
  - Header
  - EnterTodo/Input
    - Input
    - Button(Add)
  - TodoList/List
    - Header
    - Button(Hide/Show)
    - ListItem
      - InputValue
      - Button(Edit)
      - Button(Delete)

### Lo-fi wireframes

![lo fidelity wireframes](#)

### Stretch goals

- use css to style
- use MUI to style
- completed todo button/action
- show todos button/hide todos button
- show date and time todo was created
- total number count of todos

## Code steps

- create React app ✅

  - npx create-react-app todo-react ✅

- strip app of irrelevant information ✅

  - render just "Hello World!" with no css ✅
    - added css reset styles for control ✅

- install draw.io vscode extension ✅

  - create component tree (draw.io or Figma) ✅

## Build Static version in React

- use component tree(above) to build static version in React
  - no interactivity intially
  - build components that resuse other components
  - later these will render props and pass custom data
  - build top down

#### Add todo to list

- store value on input to state onChange
- onClick on + button
- when clicked called function to get the value of the input from state
- store it in state as an object with unique id & message
