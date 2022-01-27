import React from 'react';
import {useParams} from "react-router-dom";

const Price = () => {
    const params = useParams();
    console.log(params);
    return <h1>Price</h1>;
};

export default Price;