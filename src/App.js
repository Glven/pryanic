import {useDispatch, useSelector} from "react-redux";
import Auth from "./components/auth";
import {useEffect} from "react";
import {checkAuth, logout} from "./store/reducers/authSlice";

const App = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(checkAuth())
    }, [] )


    return (
        <section>
            {isAuth ?
                <div>
                    <button onClick={e => {
                        e.preventDefault()
                        dispatch(logout())
                    }}>Выход</button>
                </div> :
                <Auth/>
            }
        </section>
    );
}

export default App;
