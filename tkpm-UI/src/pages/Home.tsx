function Home() {
  return (
    <div>
        {
          localStorage.getItem("userId")
        }
        This is Home Page
    </div>
  )
}

export default Home
