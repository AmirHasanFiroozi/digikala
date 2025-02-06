import toPersianNumber from "../../services/toPersianNumber"

function Message() {
    return (
        <span className="text-[10px] px-[7px] py-0.5 bg-[var(--color-red)] text-white absolute -right-2 -bottom-2 rounded-md">
             {toPersianNumber(1)}
        </span>
    )
}

export default Message
