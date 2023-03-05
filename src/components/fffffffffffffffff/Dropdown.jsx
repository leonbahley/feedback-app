import { useState } from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown({ items }) {
  const [areItemsShown, setAreItemsShown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  //   state = {
  //     items: this.props.items || [],
  //     showItems: false,
  //     selectedItem: this.props.items && this.props.items[0],
  //   };

  const dropDown = () => {
    setAreItemsShown((prev) => !prev);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setAreItemsShown(false);
  };
  return (
    <div className={styles.select_box__box}>
      <div className="select-box--container">
        <div className="select-box--selected-item">
          {this.state.selectedItem.value}
        </div>
        <div className="select-box--arrow" onClick={this.dropDown}>
          <span
            className={
              areItemsShown ? "select-box--arrow-up" : "select-box--arrow-down"
            }
          />
        </div>

        <div
          style={{ display: areItemsShown ? "block" : "none" }}
          className={"select-box--items"}
        >
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => selectItem(item)}
              className={selectedItem === item ? "selected" : ""}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
