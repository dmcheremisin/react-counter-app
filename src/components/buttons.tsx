import React, { ReactElement } from 'react';

import './buttons.css'

interface Props {
    add: (value: number) => void;
    remove: (value: number) => void;
}

export default function Buttons(props: Props): ReactElement {
    const { add, remove } = props;

    return <div className="counter-body">
        <div className="button" onClick={() => add(100)}>
            +100
        </div>
        <div className="button" onClick={() => remove(100)}>
            -100
        </div>
        <div className="button" onClick={() => add(10)}>
            +10
        </div>
        <div className="button" onClick={() => remove(10)}>
            -10
        </div>
        <div className="button" onClick={() => add(2)}>
            +2
        </div>
        <div className="button" onClick={() => remove(2)}>
            -2
        </div>
        <div className="button" onClick={() => add(1)}>
            +1
        </div>
        <div className="button" onClick={() => remove(1)}>
            -1
        </div>
    </div>;
}