import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
const createArray = length => [...Array(length)];

function Star({ selected = false, onSelect = f => f }) {
    return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
}
function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);
    useEffect(() => {
        console.log(`checked: ${selectedStars.toString()}`);
    });
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars.
            </p>
        </>
    );
}
export default StarRating;