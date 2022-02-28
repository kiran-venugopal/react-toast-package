# react-toast-package


***

Highly customizable and light weight react toast component 🍞 


## How to Use?


```javascript
import Toast, { addToast } from "react-toast-package"
import CustomMessage from "./component/CustomMessage";

export default function App() {

  const handleClick = () => {
    addToast(CustomMessage );
  };

  return (
    <div className="App">
      <button onClick={handleClick}>add</button>
      <Toast position="bottom-right" timeOutDuration={5000} />
    </div>
  );
}
```


example: <https://codesandbox.io/s/toast-component-71jce?file=/src/App.tsx:122-379>



---

## Props

| Name | Type | Default value |
|----|----|----|
| position | `‘top-right’` or `‘bottom-right’` | ‘top-right‘ |
| timeOutDuration | `number` |    |





