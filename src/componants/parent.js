import '../App.css';
import logo from '../1.jpg'

function Parent() {
    console.log("hello from main page this is parent ")
    return(
        <div>
            <h1 className="Header">Hello this is ruqaya anwer from main page</h1>
            <img src={logo} className="pic1" alt="parentpic"/>
        </div>
    );
}
export default Parent;