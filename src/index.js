import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

//   const [list, updateList] = useState(marks);
//   const listRemoveItem = (item) => {
//     updateList(list.filter(item => item.mark !== marks));
//   };
//  const handleCheck = (e) => {
//   e.currentTarget.remove()
//   };
// const [list, setList] = useState(marks);

//   function listRemove(elem) {
//     // remove item
//     const newList = list.filter((item) => item !== elem);
//     setList(newList);
//   }
//   return <List list={list} onRemove={listRemove} />;
// };

// const List = ({list, onRemove}) => (
//   <ul>
//     {list.map((mark) => (
//       <Item key={mark} item={mark} onRemove={onRemove} />
//     ))}
//   </ul>
// );
// const Item = ({ item, onRemove }) => (
//   <li onClick={() => onRemove(item)}>
//     <span>{item}</span>  
//   </li>
// );


// return (
//   <div>
//     <ul>{marks.map(mark => <li key={mark} onClick={() => handleRemove(mark)}> {mark} </li>)}</ul>
//   </div>
// )};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <App/>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
