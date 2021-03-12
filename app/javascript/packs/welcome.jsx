import React, {useState} from 'react'
import ReactDOM from 'react-dom'


// sfc = Stateless Function Component
const Counter = ({count: initialCount}) => {
    const [count, setCount] = useState(initialCount)
    //const countUp = () => setCount(count + 1)
    return (
        <div>
            <p>Count: {count} </p>
            <button onClick={() => setCount(count + 1)} >Count up</button>
        </div>
    );
}

const Welcome = (props) => {
    return (
        <div>
            <h1>Welcome from React! (in app/javascript/packs/welcome.jsx)</h1>
            <Counter count={4} />
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Welcome />,
      document.getElementById('welcome'),
    )
})