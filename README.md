# Project Name

Dev Stack

# Description

Dev Stack is a single-page React application designed to help developers explore a wide range of technologies used in modern web development. It provides an interactive and organized way to discover popular frontend, backend, database, and other development technologies, along with their descriptions, categories, difficulty levels, and ratings.
Users can explore different technologies and build their own personalized development stack by selecting the technologies they are interested in.

# Technology Used

1.React.js;
2.Tailwind CSS;
3.TypeScript;
4.React-Toastify;
5.JSON;
6.Vite.

# What is JSX, and why is it used in React?

JSX is an extend version of js where we can use both html tags and JS code.

# What is the difference between props and state?

Props are used for sending data from parent to child component.
State are used for reserv and manage data of any components.

# What does the useState hook do, and where did you use it in this project?

useState hook is used to creat and manage state in a react component, in this project I used this in TechSection for store and update the selected technologies.

# What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect hook is used to perform side effects like fetching data, and I can used it to fetch the JSON data from the file after the component rendered.

# Why does every item in a .map() list need a unique key prop?

map() list needs a unique key prop so React can identify each item and know which items were added, removed, or updated when the list changes.

# What is conditional rendering? Show one place you used it ?

It means showing different ui or elements based on a condition . In this project I used it to show an empty stack message when no technology has been added.

# How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

For pass data from parent to child I can use Props,But there is no way to send data from child to parent. But we can use Lifting State Up methode for sent somthing from child to parent.
