import './App.css';
import Register from "./components/Register"
import ReadUsers from "./components/ReadUsers"
import DeleteUser from "./components/DeleteUser"
import LoginUser from "./components/LoginUser"
import UpdateUser from "./components/UpdateUser"
import Header from "./components/Header"
import {getCookie} from "./common/index"
import {findUser} from "./utils/Index"
import {useState, useEffect} from "react"

function App() {
  const [user, setUser] = useState()
  const [photos, setPhotos] = useState([]);

  useEffect(() =>{
    fetchImages();
    let cookie = getCookie('jwt_token')
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  },[])

  const loginWithToken = async(cookie)=> {
    const user = await findUser(cookie)
    setUser(user)
  } 

  const fetchImages = async () => {
    const response = await fetch (`${process.env.REACT_APP_API}`);
    const data = await response.json();
    setPhotos(data);
  }


  return (
    <div className="App">
      <Header />
      {user ? 
        <div classname="loggedIn">
        <div id = "welcome">Hello! Welcome {user}!</div>
        <div className = "userlist"><ReadUsers /></div>
        <DeleteUser />
        <UpdateUser />
        {photos.map((item,index)=>{
          return (
            <div>
              <img alt="random thing" src={item.download_url} width="200"/>
              <h2>{item.author}</h2>
            </div>
          )
        })}
        <div className="imageContainer"> </div>
        </div>
      : 
        <div className="start"><h2>Please Register or Login to Continue.</h2>      
          <div className = "options">
            <div className = "register"><h1>Register</h1><br></br><Register setter={setUser} /></div>
            <div className = "login"><h1>Login</h1><br></br><LoginUser setter={setUser}/></div>
          </div>
        </div>
      }
    
    </div>
  );
}

export default App;
