import React,{useState, useEffect} from 'react';

const MarksList = () => {
    const marks = ["70", "82", "66", "85", "90", "100","50"];
  const [list, updateList] = useState(marks);
  
  const listRemoveItem = elem => {
      // assigning the list to temp variable
      const temp = [...list];
      // removing the element using splice
      temp.splice(elem, 1);
      // updating the list
      updateList(temp);
  }
  
  useEffect(() => {
     // alert will display after removing all elements from array or equal(0)
    if (list.length === 0) {
      alert("removed all elements");
    }
  },[list]);
  
  return (
      list.map((item, elem) => (
        <div key={elem}>
          <li onClick={() => listRemoveItem(elem)}><span>{item}</span></li>
        </div>
      ))
  
  )}

  export default MarksList;