import { useState , useEffect , React} from "react"


function App() {

  const [numb , setNumb] = useState(false)
  const [symbol , setSymbol] = useState(false)
  const [length , setLength] = useState(5)
  const [password, setPassword] = useState("");


 const gen = function(length) {
    let alphabets = "AQZXSWEDCVFRTGBNHYUJMKILOPqazxswedcvfrtgbnhyujmkilop";
    let numbr = "1234567890";
    let symb = "!@#$%^&*_+";

    // Combine characters based on selected options
    let characters = alphabets;
    if (numb) characters += numbr;
    if (symbol) characters += symb;

    // Generate password
    let pass = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
    }
    return pass;
};

useEffect(() => {
 setPassword(gen(length));
}, [numb, symbol, length]);

  return (
    <>
  <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">

    <div className="bg-blue-300 p-6 rounded-md shadow-md max-w-md w-full">
      
      <div className="flex">
        <input id="screen"
          value={password}
          type="text"
          readOnly
          className="bg-white rounded-l-md outline-none p-2 flex-grow text-center"
        />
        <button onClick={() => navigator.clipboard.writeText(password)} className="bg-blue-900 text-white text-xl p-2 rounded-r-md cursor-pointer hover:bg-blue-700 transition-colors">
          Copy
        </button>
      </div>


      <div className="mt-4 flex items-center space-x-4">
        <input
        onChange={(e) => {setLength(Number(e.target.value))}}
          type="range"
          min="5"
          max="20"
          className="flex-1"
        />
        <span>Length: {length}</span>

      </div>


      <div className="mt-4 flex space-x-6">
        <label className="flex items-center">
          <input type="checkbox" checked={symbol} id="symbols" onClick={() => setSymbol(!symbol)} className="mr-2 cursor-pointer" />
          Include Symbols
        </label>
        <label className="flex items-center">
          <input type="checkbox" checked={numb} id="numbers" onClick={() => setNumb(!numb)} className="mr-2 cursor-pointer" />
          Include Numbers
        </label>
      </div>
      
    </div>
  </div>
</>

  )
}

export default App
