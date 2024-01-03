
export const RadioButton = ({ checked, className }) => {
    return (
        <div className={`border border-solid border-black w-[20px] h-[20px] rounded-[100px] ${className}`}>
            {checked && <div className="relative w-[10px] h-[10px] top-[4px] left-[4px] bg-black rounded-[5px]" />}
        </div>
    );
};