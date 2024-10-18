import { useNavigate } from "react-router"

export default function MoveButton({ path, name }: { path: string, name: string }) {
    const navigate =  useNavigate();
    return (
        <div>
            <button className="random__button"
                name="random_button"
                onClick={() => {
                    navigate(path)
                }}> 
                {name}
            </button>
        </div>
    )
}