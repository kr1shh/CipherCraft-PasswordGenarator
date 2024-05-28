import { useState,useCallback,useEffect,useRef } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [isNumAllowed, setIsNumAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const [length, setLength] = useState(8)


  const generatePass = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumAllowed){
      str += "1234567890"
    }
    if(isCharAllowed){
      str += "!@#$%^&*"
    }

    for(let i = 1;i <= length;i++){
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)
  },[length,isCharAllowed,isNumAllowed])


  const passRef = useRef(null)

  const copyToClipBoard = ()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current.select()
  }


  useEffect(()=>{
    generatePass()
  },[length,isCharAllowed,isNumAllowed])


  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center font-poppins">
      <div className="w-[480px] h-[240px] flex flex-col gap-8 items-center justify-center bg-blue-500 rounded-2xl text-white">
        <h1
        className="font-bold text-3xl text-white"
        >CipherCraft</h1>

        <div className="relative flex items-center">
          <input
          className="text-blue-950 p-3 rounded-lg w-[360px] focus:outline-none" 
          value={password}
          placeholder="Password"
          type="text"
          ref={passRef}
          readOnly/>
          <button 
          className="absolute right-[5px] bg-blue-950 p-[8px] rounded-lg"
          onClick={copyToClipBoard}
          >Copy</button>
        </div>
        <div
        className="flex gap-3" 
        >
          <input
           className="accent-blue-950 cursor-pointer" 
          type="range"
          value={length}
          min={8}
          max={20}
          onChange={(e) => setLength(e.target.value)}
          name="length"/>
          <label htmlFor="length">{length}</label>
          <input className="w-5 accent-blue-950 rounded-full outline-none" 
          type="checkbox"
          onChange={()=>{
            setIsNumAllowed((prev)=>!prev)
          }} 
          name="num"/>
          <label htmlFor="num">Numbers</label>
          <input className="w-5 accent-blue-950 rounded-full outline-none" 
          type="checkbox"
          onChange={()=>{
            setIsCharAllowed((prev)=>!prev)
          }}  
          name="char"/>
          <label htmlFor="char">Symbols</label>
        </div>
      </div>
      
    </div>
  )
}

export default App
