import { forwardRef, Fragment } from "react";
import styled from "styled-components";

export const MultiSwitch = forwardRef(({ items, name, className, defaultValue }, ref) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <Fragment key={item.value}>
          <input
            ref={ref}
            name={name}
            value={item.value}
            id={item.value}
            defaultChecked={item.value === defaultValue}
            type="radio"
          />
          <label htmlFor={item.value}>{item.name}</label>
        </Fragment>
      ))}
    </div>
  );
});

export const StyledMultiSwitch = styled(MultiSwitch)`
  display: flex;
  justify-content: center;
  padding: 2px;
  background: #f9f9fb;
  border-radius: 12px;
  width: 200px;

  label {
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 4px;
    cursor: pointer;
    box-shadow: 0px 3px 4px rgba(75, 75, 124, 0.05),
      0px 0px 2px rgba(75, 75, 124, 0.2);
  }

  input {
    display: none;
  }

  input:checked + label {
    background: #ffffff;
    font-weight: bold;
  }
`;
