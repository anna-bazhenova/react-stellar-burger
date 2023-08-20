import styles from "./burger-constructor-element.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";


const BURGER_ELEMENT_TYPE = "BURGER_CONSTRUCTOR_ELEMENT";

type TBugregConstructorElementProps = {
  text: string;
  price: number;
  thumbnail: string;
  onRemove: () => void;
  index: number;
  moveElement: (dragIndex: number, hoverIndex: number) => void;
}

type TDragNDropItem = {
  index: number;
}

const BurgerConstructorElement = ({
  text,
  price,
  thumbnail,
  onRemove,
  index,
  moveElement,
}: TBugregConstructorElementProps) => {
  
  const ref = useRef<HTMLLIElement>(null);
  
  const [handlerId , drop] = useDrop<TDragNDropItem, unknown, string | symbol | null>({
    accept: BURGER_ELEMENT_TYPE,
    
    collect(monitor) {
      return monitor.getHandlerId();
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

      const clientOffset = monitor.getClientOffset()!;

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

  const [isDragging, drag] = useDrag<TDragNDropItem, unknown, boolean>({
    type: BURGER_ELEMENT_TYPE,
    item: () => {
      return { index };
    },
    collect: (monitor) => monitor.isDragging(),
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

export default BurgerConstructorElement;