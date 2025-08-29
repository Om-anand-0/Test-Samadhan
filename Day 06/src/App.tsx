import ProfileCard from "./components/ProfileCard";

function App() {
  

  return (
    <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ProfileCard
        name="Om Anand"
        role="Full Time Procastinator"
        image="https://i.pravatar.cc/150?img=6"
        bio="Passionate about Monster Ultra and Money."
      />
    </div>
    </>
  )
}

export default App
