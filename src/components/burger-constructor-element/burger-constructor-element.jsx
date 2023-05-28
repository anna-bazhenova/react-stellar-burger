import styles from "./burger-constructor-element.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";

const BURGER_ELEMENT_TYPE = "BURGER_CONSTRUCTOR_ELEMENT";

export function BugregConstructorElement({
  text,
  price,
  thumbnail,
  onRemove,
  index,
  moveElement,
}) {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: BURGER_ELEMENT_TYPE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveElement(dragIndex, hoverIndex);
      
      item.index = hoverIndex;
    },
  });

  const [{isDragging}, drag] = useDrag({
    type: BURGER_ELEMENT_TYPE,
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <li
      ref={ref}
      className={`${styles.mains_list_item} ${isDragging && styles.dragging}`}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={text}
        price={price}
        thumbnail={thumbnail}
        handleClose={onRemove}
      />
    </li>
  );
}

BugregConstructorElement.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  moveElement: PropTypes.func.isRequired,
};