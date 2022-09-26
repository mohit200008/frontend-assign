# React Component Code Review

## Introduction

Based on the code below answer the following queries:
1. Explain what the simple `List` component does.
Ans-> The list component renders the items object array with text and value. And when the user clicks the items it changes the color to green and vice versa. 
2. What problems / warnings are there with code?
Ans-> 
1.)The prop-types library is used here and the functions called are not found in the library since the update like the array should be arrayof and shapeof should be shape(as given on the github link and doc).
2.)The boolean state is to be created to pass the value in the component.
3.)isSelected has number passed instead of bool.
4.)The functions calls are not correct.
links i refered to:
https://github.com/facebook/react/issues/18178
https://github.com/facebook/prop-types/blob/main/README.md#compatibility
5.)items object array not created and passed thats why it shows undefined.
3. Please fix, optimize, and/or modify the component as much as you think is necessary.
My code which is fixed and working.
Ans3->https://github.com/mohit200008/frontend-assign
fixed code and rectifying the above points.
## Code

assignment given code
```javascript

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
}) => {
  const [setSelectedIndex, selectedIndex] = useState();

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex}
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.array(PropTypes.shapeOf({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;


```

