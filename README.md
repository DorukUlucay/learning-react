# learning-react
my notes and codes from learning react

## demos

* [counter](src/counter)

## learning sources
* Course: React - The Complete Guide, Maximilian Schwarzmüller, Udemy
* Book: React Succinctly, Samer Buna

## keywords
reactdom, 

## tools
* npm or npx
* create-react-app

## advantages
* declarative. you describe the final state and react deals with how.
* very performant because of virtual dom and tree concilation algorithm(more on this later)
* created and user by facebook. thoroughly production tested.

## disadvantages
* state is complicated.

## comparison to angular and vue
* react: focused on components. you need community 3rd party packages for extras.
* angular: has more features built in in addition to components. can be overkill for small projects. typescript by default.
* vue: somewhere between react and angular


## what is react
* react is a js lib. not a fw. react only deals with building user interfaces. 

### it is all about components
* react ui's are composed of atomized components.
* components: reusable building blocks for html user interfaces.
* component system is good for reusability and separation of concerns.
* in the end, an app is a component tree.


### declarative 
* react uses a declarative approach, unlike imperative approach like we use in programming most of the time. In imperative approach, we tell step by step what to do(like in jq). In react, we describe the ui using react's special language jsx, and let react build the ui we want.

### virtual dom
* instead of directly working on dom, react uses the virtual dom where it has our objects and ui logic. when rendering, react compares virtual dom to actual dom and only renders changes. this approach is called **tree concilation algorithm** and very performant.

### jsx
* jsx stands for javascript xml. it is invented by react team. jsx is transpiled into javascript+html.
* since jsx is not a template language, neither browser nor react itself deals with jsx. only compiler.

### state
* state is a bit complicated. it is explicitly used. it has a downward flow. to use state in lower components or trigger events in parent nodes, you need to **list state**(more on that later)
* this explicit approach gets react closer to functional programming since statelessness is a very important concept in fp. react components(which are functions by definitions) are mostly **pure functions**.

### hooks

* a hook in react is a call to a special function. all hook names begin with the word use. most widely used hook is **useState**.

### constraints & best practises
* react by default thinks lowercase elements are built in html elements. so name your custom elements uppercase
* a react comp must return one root element
* omit .js part when importing js files.
* use the name **props** for **props**.

### beware!
* use previousState to avoid race conditions when mutating the state.

## modern js review in general
* always use the const keyword to define variables. only use the let keyword when you absolutely need it. never use the var keyword.

### map

```js
[4, 2, 0].map(e => e * e);
//result: [16, 4, 0]
```

### reduce
```js
[16, 4, 0].reduce((acc, curr) => acc + curr, 0);
//result: 20
```

reduce's callback func receives two arguments. acc means accumulated and curr means current. return value of callback becames the new acc in next iteration. 0 here is initial value for acc.

### filter
```js
[4, 7, 2, 5, 0, 11].filter(e => e%2 === 0);
//result: [4, 2, 0]
```

## programming in general
* be consistent with your style, whatever it is.
* constraints are good because they force you to write less buggy code.