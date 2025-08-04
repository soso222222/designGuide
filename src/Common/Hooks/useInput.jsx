import { useState } from "react";

function useInput(initiaState) {
    const [state, setState] = useState(initiaState);
    const [isModify, setIsModify] = useState(false);

    const onChange = (e) => {
        console.log(e, "onChange");
        const {
            target: { value, name },
        } = e;
        set(name, value);
    };

    const onSetState = (name, value) => set(name, value);
    const multiSetState = (items) => multiSet(items);

    const set = (name, value) => {
        setState({
            ...state,
            [name]: value,
        });
        setIsModify(true);
    };

    const multiSet = (items) => {
        setState({
            ...state,
            ...items,
        });
        setIsModify(true);
    };

    const onResetState = () => setState([]);
    const onInit = (state) => setState(state);
    return {
        onSetState,
        onChange,
        onResetState,
        setState,
        multiSetState,
        state,
        onInit,
        isModify,
        setIsModify,
    };
}

export default useInput;
