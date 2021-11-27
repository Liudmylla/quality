import React from "react";
import PropTypes from "prop-types";
const Quality = ({ quality }) => {
    return (
        <span className={"badge m-1 bg-" + quality.color} key={quality._id}>
            {quality.name}
        </span>
    );
};
Quality.propTypes = {
    quality: PropTypes.object
};

export default Quality;
