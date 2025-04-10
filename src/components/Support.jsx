import { useState, useEffect } from 'react';
const title = document.title;

export default () => {
  const [count, setCount] = useState(0);
  useEffect(()=> {
    count && (document.title = `${title} -- ${count}`);
  })
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {count === 0 ? "Click to support": `Supported ${count} times`}
    </button>
  )
}