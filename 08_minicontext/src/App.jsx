
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    // iske andr hm jo bhi component lenge uska hme directly access milega
    <UserContextProvider>
       <h1>React with chai</h1>
       <Login />
       <Profile/>
    </UserContextProvider>
  )
}

export default App
