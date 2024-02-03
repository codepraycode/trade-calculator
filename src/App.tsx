import Input from "./components/Input";
import Output from "./components/Output";
import TipSelect from "./components/TipSelect";


function App() {

    return (
        <>
            <header>
                <h3 className="header">Spli<br/>tter</h3>
            </header>

            {/* Calculator card */}
            <div className="calculator">
                
                {/* Left side */}
                <div className="_left">
                    <Input
                        name="bill"
                        icon="&#36;"
                        placeholder="0"
                        label="Bill"
                        onChange={()=>({})}
                    />

                    {/* Tip buttons */}
                    <div className="tips-selects">
                        <label className="text-small text-bold">Select Tip %</label>

                        <TipSelect />
                    </div>

                    {/* People */}
                    <Input
                        name="people"
                        icon={<i className="fas fa-user"/>}
                        placeholder="0"
                        label="Number of people"
                        // error={"Cannot be empty"}
                        onChange={()=>({})}
                    />
                </div>




                {/* Right side */}
                <div className="_right">
                    <Output
                        label="Tip Amount"
                        per="person"
                        value={null}
                    />
                    <br/>
                    <Output
                        label="Total"
                        per="person"
                        value={null}
                    />

                    <br/>
                    <br/>
                    <br/>

                    <button disabled>
                        Reset
                    </button>
                </div>

            </div>
        </>
    )
}

export default App;
