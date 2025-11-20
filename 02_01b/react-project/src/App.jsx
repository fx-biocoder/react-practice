import { useReducer, useEffect } from 'react'
import './App.css'
import chef from './assets/chef.webp'

let moon = '🌙 '

const items = [
  'Spaghetti Carbonara',
  'Margherita Pizza',
  'Caesar Salad',
  'Tiramisu'
]

const dishObjects = items.map((dish, id) => ({
  id: id,
  title: dish
}));


function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>I want to be open</button>
        <h1>Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}</h1>
      </div>
      <main>
        <img src={chef} height={200} />
        <ul>
          {dishes.map((dish) => {
            return <li key={dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>
          })}
        </ul>
      </main>
    </>
  );
}

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
      <p>Hello {moon}!!! This is the year {props.year}</p>
    </header>
  );
}


export default function App() {
  // const [status, setStatus] = useState('open');
  const [status, toggle] = useReducer(
    (state) => !state,
    true
  );

  useEffect(() => {
    // Side effect: takes place when page renders
    console.log(`The restaurant is ${status ? "open" : "closed"}.`);

    // Array that defines when to run the effect (empty = only on mount, [var] = on 'var' change)
  }, [])

  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>

      <button onClick={toggle}>
        {status ? "Close" : "Open"} restaurant
      </button>

      <Header name="Alex" year={new Date().getFullYear()}/>

      <h3>We serve the most delicious food around!</h3>

      <Main 
        dishes={dishObjects} 
        openStatus={status}
        onStatus={toggle}
      />
    </div>
  )
}
