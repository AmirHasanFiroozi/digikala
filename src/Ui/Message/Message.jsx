import toPersianNumber from "../../services/toPersianNumber"

function Message({number , showBox}) {
    return (
        <span className={`text-[10px] px-[7px] py-0.5 bg-[var(--color-red)] text-white absolute -right-2 -bottom-2 rounded-md ${number === 0 ? "hidden" : "block"} ${showBox ? "hidden" : "block"}`}>
             {toPersianNumber(number)}
        </span>
    )
}

export default Message
