# react-relax-modal

Easy Modal system for Web React Apps

## Table of Contents

* [Installation](#installation)
* [Examples](#examples)
* [RelaxModalProvider Props](#relaxmodalprovider-props)
* [Modal Config Props](#modal-config)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install --save react-relax-modal
    $ yarn add react-relax-modal
 

## Examples

Here is a simple example of react-relax-modal being used in an app

```jsx
import {RelaxModalProvider, useRelaxModal} from "react-relax-modal";

const modalStyle = {
  width: 200,
  height: 200,
  display: "flex",
  borderRadius: "5px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
};

const MyModal = () => {
    return (
        <div style={modalStyle}>
            <span>Hello World!</span>
        </div>
    );
};

const Screen = () => {
    const {openModal} = useRelaxModal();
    return <button onClick={() => openModal(<MyModal />)}>Open My Modal</button>;
};

function App() {
    return (
        <RelaxModalProvider>
            <Screen />
        </RelaxModalProvider>
    );
}

export default App;
```

You can find examples in the `examples` directory, which you can run in a
local development server using `npm start` or `yarn run start`.


## RelaxModalProvider Props

`RelaxModalProvider` accepts props to set a global configuration and/or get a debug helper for your development process

```jsx
function App() {
    return (
        <RelaxModalProvider {/**props */}>
            {...}
        </RelaxModalProvider>
    );
}
```

| Attributes          |    Type                           |     Default             | Description                                                                                       |
| :------------------ | :-------------------------        | :--------------         | :------------------------------------------------------------------------------------------------ |
| debug               |  `boolean`                        | false                   | If debug is `true` you will see on console the stack of modals and the active one                 |
| children            |  `JSX.Element` or `JSX.Element[]` | JSX.Element (required)  | The components that you want to get access to the Relax Modal Provider API                        |
| rootConfig          |  `RelaxModalConfig`               | default Config          | Set an initial `configuration` for all your Modals                                                |



## Modal Config

Each time that you call `openModal` to open a new modal component you can add configuration object that only will affect that Modal

```jsx
<button onClick={() => openModal(<YourModalComponent />, {/**config */})}>
    Open Modal
</button>
```

| Attributes          |    Type                         |     Default       | Description                                                                                                                              |
| :------------------ | :-------------------------      | :--------------   | :--------------------------------------------------------------------------------------------------------------------------------------- |
| alignment           |  `Alignment`                    | center            | Set the `screen location` of your component that you are providing to the openModal() function                                           |
| backgroundColor     |  `string`                       | rgba(0,0,0, .6)   | The `background color`                                                                                                                   |
| closeOnBackdrop     |  `boolean`                      | true              | Set if user `can close` the modal when click on the backdrop                                                                             |
| autoCloseMS         |  `number` or `undefined`        | undefined         | Set `auto-close duration` for your Modal                                                                                                 |
| style               |  `CSSProperties` or `undefined` | undefined         | Set `styling` for Modal container                                                                                                        |
| closeKey            |  `string` or `undefined`        | Escape            | Set what `keyboard key` you want to use to `close` the Modal                                                                             |
| onClosed            |  `function`                     | undefined         | Set a `callback` when user `close` the Modal                                                                                             |
| onBackdrop          |  `function`                     | undefined         | Set a `callback` when user `clicks` on the backdrop                                                                                      |
| closeButton         |  `CloseButton`                  | {show: false, icon: undefined, style: undefined, defaultIconColor: "#fff"} | `Personalize` the Modal close Button                                            |
| animation           |  `Animation`                      | {initial: {transform: "translateY(4rem)", opacity: 0}, animate: {transform: "translateY(0)", opacity: 1}} | Set `animation` when Modal is `open`           |