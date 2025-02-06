import { Login } from "../SVGs/Svg"

function loginButton() {
    return (
        <button className="flex items-center gap-1 justify-center px-4 py-2 border-1 border-[var(--color-gray2)] rounded-sm">
            <Login />
            <span>ورود</span>
            <span>|</span>
            <span>ثبت‌نام</span>
        </button>
    )
}

export default loginButton
