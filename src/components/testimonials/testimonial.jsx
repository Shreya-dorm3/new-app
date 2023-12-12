import React, { useState } from "react";
import "./testimonials.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Testimonials() {
    const listItems = [
        { id: "1", label: "Managing my own portfolio is helpful & well designed. What is really interesting is watching the whales though." },
        { id: "2", label: "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!" },
        { id: "3", label: "Love how Loch integrates portfolio analytics and whale watching into one unified app." }
    ];
    const [dragDropList, setDragDropList] = useState(listItems);

    const onDragComplete = (result) => {
      if (!result.destination) return;
  
      const arr = [...dragDropList];
  
      //Changing the position of Array element
      let removedItem = arr.splice(result.source.index, 1)[0];
      arr.splice(result.destination.index, 0, removedItem);
  
      //Updating the list
      setDragDropList(arr);
    };
    return (
                <DragDropContext onDragEnd={onDragComplete}>
                    <Droppable droppableId="drag-drop-list" direction="horizontal">
                        {(provided, snapshot) => (
                            <div
                                className="drag-drop-list-container"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {dragDropList.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.label}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div
                                                className="item-card"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                
                                                <div className="char-avatar">
                                                    {item.label.charAt(0)}
                                                </div>
                                                <p className="label">{item.label}</p>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

    );
}