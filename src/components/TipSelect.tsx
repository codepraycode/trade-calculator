
const TipSelect = ()=>{
    const tips = [5,10,15,25,50];

    return (
        <div className="tip-items">
            {
                tips.map((item)=>(

                    <input value={`${item}%`} type="button" data-selected={"true"}/>
                ))
            }

            <input
                type="text"
                name={"custom-tip"}
                placeholder={"Custom"}
            />
        </div>
    )
}

export default TipSelect;
