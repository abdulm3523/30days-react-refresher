# 🚗 React Refresher Challenge – Day 4

## tapaScript Cars

A simple React application built to practice React fundamentals such as components, props, props drilling, useState, PropTypes, and understanding the React component tree.

---

## 🎯 Learning Goals

This project helps you practice:

- Creating reusable components
- Managing state with `useState`
- Passing data using props
- Understanding props drilling
- Validating props with PropTypes
- Rendering lists with `map()`
- Filtering data
- Understanding React component hierarchy
- Understanding React's one-way data flow

---

## Features

- Search cars by name
- Filter premium cars only
- Display car information dynamically
- Practice component composition

---

## Component Tree

```text
App
├── Header
├── SearchContainer
│   ├── SearchBox
│   └── PremiumFilter
└── CarsContainer
    └── CarList
        └── CarCard
```

---

## Data Flow

```text
App
    ↓
SearchContainer
    ↓
SearchBox / PremiumFilter


App (Filtered Data)
CarsContainer
    ↓
CarList
    ↓
CarCard
```

State lives inside `App` and is passed down to child components through props.

---

## State Used

```jsx
const [searchTerm, setSearchTerm] = useState("");
const [showPremiumOnly, setShowPremiumOnly] = useState(false);
```

---

## Concepts Practiced

### useState

Manage search text and premium filter state.

### Props

Pass data from parent components to child components.

### Props Drilling

Pass data through multiple component levels:

```text
App
 ↓
CarsContainer
 ↓
CarList
 ↓
CarCard
```

### PropTypes

Validate incoming props for better code quality.

### map()

Render car cards dynamically:

```jsx
cars.map((car) => <CarCard key={car.id} car={car} />);
```

---

## Folder Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── SearchContainer.jsx
│   ├── SearchBox.jsx
│   ├── PremiumFilter.jsx
│   ├── CarsContainer.jsx
│   ├── CarList.jsx
│   └── CarCard.jsx
│
├── data/
│   └── cars.js
│
├── App.jsx
└── main.jsx
```

---

## Challenge Goals

- Build the UI using reusable components
- Implement search functionality
- Implement premium filtering
- Practice props drilling
- Use PropTypes in every component
- Understand component hierarchy and data flow

---

## Outcome

After completing this challenge, you should be comfortable with:

- React Components
- useState
- Props
- Props Drilling
- PropTypes
- Component Trees
- One-Way Data Flow
- Dynamic Rendering with map()

---

**Day 4 Focus:** Components → Props → Props Drilling → useState → PropTypes 🚀
