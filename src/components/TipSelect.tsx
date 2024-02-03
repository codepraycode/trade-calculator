
const TipSelect = ()=>{
    const tips = [5,10,15,25,50];

    return (
        <div className="tip-items">
            {
                tips.map((item,i)=>(

                    <input key={i} value={`${item}%`} type="button" data-selected={"true"}/>
                ))
            }

            <input
                type="text"
                name={"custom-tip"}
                placeholder={"custom lot"}
            />
        </div>
    )
}

export default TipSelect;
