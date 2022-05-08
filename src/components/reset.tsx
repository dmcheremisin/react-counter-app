import { ReactElement } from 'react';

import './reset.css'

interface Props {
    reset: () => void;
}

export default function Reset(props: Props): ReactElement {
    const {reset} = props;

    return <div className="reset-body" onClick={reset}>
        Reset
    </div>;
}
