
import '../App.css';
import logo from '../2.jpg'
function Child() {
    console.log("this is child in componant")
    return(
        <div>
            <h1 className="Child">Hello this is ruqaya anwer from component calling</h1>
            <img  src={logo} className="pic2" alt="childpic"/>
        </div>
    )
}
export default Child;