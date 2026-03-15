import Header from "../components/Header"
import AddSubscription from "../components/AddSubscription"
import SubscriptionList from "../components/SubscriptionList"
import SumaryCard from "../components/SumaryCard"

function Dashboard() {
  return (
    
    <div className=" min-h-screen bg-blue-950">
      <Header />

      <main>
        <SumaryCard />
        <AddSubscription />
        <SubscriptionList />
      </main>
    </div>
  )
}

export default Dashboard
