
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types'
import SingleListItem from './SingleListItem';

// Single List Item


// List Component
const WrappedListComponent = ({ items }) => {
    const [selectedIndex,setSelectedIndex] = useState();
    const [isSelected,setIsSelected] = useState(false);

    useEffect(() => {
        setSelectedIndex(null);
    }, [items,selectedIndex]);

    const handleClick = (index) => {
        setSelectedIndex(index);
        setIsSelected(true);
    };

    return (
        <ul style={{ textAlign: 'left' }}>
            {items.map((item, index) => (
                <div key={index}>
                    <SingleListItem
                        onClickHandler={()=> handleClick(index)}
                        text={item.text}
                        index={selectedIndex}
                        isSelected={isSelected}
                    />
                </div>
            ))}
        </ul>
    )
};

WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
    })),
};

WrappedListComponent.defaultProps = {
    items: null,
};

const List = memo(WrappedListComponent);

export default List;

