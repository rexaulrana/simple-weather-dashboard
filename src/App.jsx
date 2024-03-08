import Profile from "./components/Profile";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

function App() {
  return (
    
    <div className="max-w-6xl mx-auto mt-10">
       <div className="flex justify-between">

      <div> <SearchBar></SearchBar> </div>
      <div><Tabs></Tabs></div>
      <div><Profile></Profile></div>
    </div>
   </div>
  );
}

export default App;
