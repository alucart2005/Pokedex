import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { newName } from "../store/slice/name.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const name = useSelector (state => state.username)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const hamdleSubmit = (e) => {
        e.preventDefault()
        dispatch( newName(e.target[0].value) )
        navigate( '/pokedex' )
       }


    return (
        <div>
            <h2>Hello trainer!</h2>
        <form action="" onSubmit={ (e) => hamdleSubmit(e)}>
            <h3>give me your name to start</h3>
        <input type="text" />
        <button>Enviar</button>
        </form>
            {/* <Link to='/pokedex'></Link> */}
        </div>
    )
}
export default Home