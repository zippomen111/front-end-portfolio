import sun from "./../../img/icons/sun.svg"
import moon from "./../../img/icons/moon.svg"
import "./index.css"
import { useState, useRef, useEffect } from "react"

const DarkButton = () => {
    const [darkMode, setDarkMode] = useState(false)
    const refBtn = useRef(null)

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark')
            refBtn.current.classList.add('dark-mode-btn--active')
        }
        else {
            document.body.classList.remove('dark')
            refBtn.current.classList.remove('dark-mode-btn--active')
        }
    }, [darkMode])

    const modeChange = () => {
        setDarkMode((currentValue) => {
            return !currentValue
        })

    }
    return (
        <button ref={refBtn} onClick={modeChange} className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>

    )
}

export default DarkButton;