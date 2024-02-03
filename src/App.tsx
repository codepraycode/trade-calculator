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
            <div className="calculator-wrapper">


                <div className="modes">
                    <label htmlFor="mode-1">
                        <input
                            type="radio"
                            name="mode-1"
                            id="mode-1"
                        />
                        <span>Mode 1</span>
                    </label>
                    <label htmlFor="mode-2">
                        <input
                            type="radio"
                            name="mode-1"
                            id="mode-2"
                        />
                        <span>Mode 2</span>
                    </label>
                    <label htmlFor="mode-3">
                        <input
                            type="radio"
                            name="mode-1"
                            id="mode-3"
                        />
                        <span>Mode 3</span>
                    </label>
                </div>

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

            </div>
        </>
    )
}

export default App;
