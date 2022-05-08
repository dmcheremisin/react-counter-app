import { ReactElement } from 'react';
import './result.css';

interface Props {
    result: number
}

export default function Result(props: Props): ReactElement {
    return <div className="result-center">{props.result}</div>;
}