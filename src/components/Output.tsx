
interface IOutput {
    label: string,
    per: string,
    value: number | null,
    defaultValue?: number
}


const sample = [
    {
        label: "entry point",
        value: '10203.10',
        isResult: false
    },
    {
        label: "exit point",
        value: '--',
        isResult: false
    },
    {
        label: "lot size",
        value: '--',
        isResult: false
    },
    {
        label: "amount expected",
        value: '--',
        isResult: true
    }
]

const Output = (props:IOutput) => {

    let figure = props.defaultValue || 0;

    if (props.value) {
        figure = props.value
    }

    console.log(figure)

    return (
        <div className="output">

            {/* <div className="suggestive-category">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
            </div> */}
            {
                sample.map((item, i)=>(        
                    <div key={i} className="label">

                        <div className="specific">
                            <b>{item.label}  </b>
                            <span className="amount">&#36; 10232.90</span>

                        </div>

                        <div className="suggestive-category">

                            <span>&#36;{item.value}</span>
                            <span>&#36;{item.value}</span>
                            <span>&#36;{item.value}</span>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Output;
