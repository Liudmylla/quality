import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQuality } from "../../../hooks/useQualities";

const QualitiesList = ({ userQualities }) => {
    const { isLoading, getQualityById } = useQuality();

    if (!isLoading) {
        return (
            <>
                {userQualities.map((qual) => (
                    <Quality key={qual._id} quality={getQualityById(qual)} />
                ))}
            </>
        );
    } else return "Loading...";
};

QualitiesList.propTypes = {
    userQualities: PropTypes.array
};

export default QualitiesList;
