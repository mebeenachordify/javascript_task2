import React, { useState, useRef } from 'react';
import './Drag.css'; 
const Drag = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(['Apple', 'Orange', 'Grapes', 'Mango', 'Pineapple', 'Kiwi']);

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <div className="drag-container">
      <h3>Drag And Drop</h3>
      <div className="list-container">
        {list.map((item, index) => (
          <div
            className="list-item"
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drag;
