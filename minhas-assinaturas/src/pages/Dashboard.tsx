import Header from "../components/Header"
import AddSubscription from "../components/AddSubscription"
import SubscriptionList from "../components/SubscriptionList"
import SumaryCard from "../components/SumaryCard"
import Login from "./Login"


function Dashboard() {
  return (
    <>

      <Login></Login>
      <Header />

      <main>
        <SumaryCard />
        <AddSubscription />
        <SubscriptionList />
      </main>
    </>
  )
}

export default Dashboard
