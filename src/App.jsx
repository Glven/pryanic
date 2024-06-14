import {useDispatch, useSelector} from "react-redux";
import Auth from "./components/Auth";
import {useEffect} from "react";
import {checkAuth} from "./store/reducers/authSlice";
import MainPage from "./pages/MainPage";

const App = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(checkAuth())
    }, [] )


    const handleAddFormVisible = e => {
        e.preventDefault()
    }

    return (
        <section className="section section--dark">
            {isAuth ?
                <MainPage/> :
                <Auth/>
            }
        </section>
    );
}

export default App;
