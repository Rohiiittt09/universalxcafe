import { useState,useEffect } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Hallbook from './Hallbook'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import About from './components/About'
import Itemcard from './components/Itemcard'
import Cart from './components/cart'
import { CartProvider } from './components/Context'
import Chaap from './components/Chaap'
import Fastfood from './components/Fastfood'
import Riceraita from './components/Riceraita'
import Maincourse from './components/Maincourse'
import Soupsalad from './components/Soupsalad'
import Bread from './components/Bread'
import Pizza from './components/Pizza'
import Thali from './components/Thali'
import Snack from './components/Snack'
import Noodle from './components/Noodle'
import Combo from './components/Combo'











function App() {

   const [allData, setallData] = useState([])
        useEffect(() => {
            const fetchdata=async ()=>{
              const res = await fetch("/data/allmenu.json")
              const data = await res.json()
              setallData(data)
              
            }
            fetchdata()
            
          }, [])
  const route =createBrowserRouter([
    {path:"/",
      element:<><Navbar tital={"home"}/><Home/></>
    },
    {path:"/menu",
      element:<><Navbar tital={"menu"} /><Menu/></>
    },{path:"/hallbooking",
      element:<><Navbar  /><Hallbook/></>
    },{path:"/contact",
      element:<><Navbar  /><Contact/></>
    },
    {path:"/gallery",
      element:<><Navbar  /><Gallery/></>
    },
    {path:"/about",
      element:<><Navbar  /><About/></>
    },
    {path:"/item/:id",
      element:<><Navbar/><Itemcard allData={allData} /></>
    },
    {path:"/cart",
      element:<><Navbar  /><Cart/></>
    },
    {path:"/chaap",
      element:<><Navbar/><Chaap/></>
    },
    {path:"/fasffod",
      element:<><Navbar/><Fastfood/></>
    },{path:"/riceraita",
      element:<><Navbar/><Riceraita/></>
    },
    {path:"/maincoourse",
      element:<><Navbar/><Maincourse/></>
    },
    {path:"/soupsalad",
      element:<><Navbar/><Soupsalad/></>
    },
    {path:"/bread",
      element:<><Navbar/><Bread/></>
    },
    {path:"/pizzapasta",
      element:<><Navbar/><Pizza/></>
    },
    {path:"/thali",
      element:<><Navbar/><Thali/></>
    },
    {path:"/snack",
      element:<><Navbar/><Snack/></>
    },
    {path:"/noodle",
      element:<><Navbar/><Noodle/></>
    },
    {path:"/combo",
      element:<><Navbar/><Combo/></>
    }
  ])
  return (
    <>
    <CartProvider><div className=' bg-black/85 w-screen'>
      <img src="" alt="" />
      <RouterProvider  router={route}/>
    </div></CartProvider>
    </>
  )
}

export default App
