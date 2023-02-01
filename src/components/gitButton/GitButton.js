import img from "./../../img/icons/gitHub-black.svg"

const GitButton = () => {
    return (
        <a href="#!" className="btn-outline" target="_blank" rel="noreferrer">
            <img src={img} alt="git" />
            GitHub repo
        </a>
    )
}

export default GitButton;