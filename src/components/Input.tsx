
interface IInput {
    label: string,
    error?: string,
    icon: React.ReactNode,
    onChange:()=>void,
    name: string,
    placeholder:string
}

const Input = (props: IInput) => {
    const {label, error, icon, onChange, name, placeholder} = props;


    return (
        <div className="calculator-input" data-error={Boolean(error)}>
            <label className="text-small" htmlFor={`${name}-input`}>
                <b className="text-capitalize">{label}</b>
                <b className="error">{error}</b>
            </label>

            <div className="input-wrapper">
                <b>{icon}</b>
                <input
                    type="text"
                    id={`${name.toLowerCase()}-input`}
                    name={name.toLowerCase()}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Input;
