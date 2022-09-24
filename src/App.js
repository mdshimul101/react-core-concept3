import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadCommonts></LoadCommonts>
    </div>
  );
}

function Comment(props) {
  return (
    <div>
      <h4>name : {props.email}</h4>
      <p>{props.body}</p>

    </div>
  )
}

function LoadCommonts() {
  const [comments, setCommonts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setCommonts(data))
  }, [])
  return (
    <div>
      <h3>Comment : {comments.length}</h3>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

//create a Counter component
function Counter() {
  // eslint-disable-next-line no-undef

  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h2>Hello</h2>
      <h3>Count : {count}</h3>
      <span>  </span>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={(handleDecrease)}>Decrease</button>
    </div>
  )
}

export default App;
