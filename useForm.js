import { useState } from "react"

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    };

    const handleInputChange = ({ target })  => {

        setValues({
            ...values,
            [ target.name ]: target.value
            //con esto decimos que asigne el target.value a la propiedad que se llame 
            //como el target.name
        });
    }

    return [ values, handleInputChange, reset ];
}
