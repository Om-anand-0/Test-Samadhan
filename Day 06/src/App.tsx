import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";
import LiveText from "./components/LiveText";
import TodoList from "./components/TodoList";


function App() {
  

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6  ">
      <ProfileCard
        name="Code N Pray"
        role="Hackathon Hackers"
        image="https://i.pravatar.cc/150?img=6"
        bio="Team consits Ajay, Arsh, Om."
      />
      {/* <Counter/>
      <LiveText/> */}
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Counter/>
      <LiveText/>
    </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <TodoList />
    </div>
    </>
  )
}

export default App
