import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/actions";

const SuccessPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div>
            <h1>Order Successful!</h1>
            <p>Your cart has been cleared.</p>
        </div>
    );
};

export default SuccessPage;
