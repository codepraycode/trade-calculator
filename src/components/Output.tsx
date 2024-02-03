
interface IOutput {
    label: string,
    per: string,
    value: number | null,
    defaultValue?: number
}


const Output = (props:IOutput) => {

    let figure = props.defaultValue || 0;

    if (props.value) {
        figure = props.value
    }

    return (
        <div className="output">
            <span className="label">
                <b>{props.label}</b>
                / {props.per}
            </span>

            <b className="amount">
                &#36;{figure.toFixed(2)}
            </b>
        </div>
    )
}

export default Output;
