import Header from "../components/Header"
import AddSubscription from "../components/AddSubscription"
import SubscriptionList from "../components/SubscriptionList"

function Dashboard() {
  return (
    
    <div className=" min-h-screen">
      <Header />
      <main>
        <AddSubscription />
        <SubscriptionList />
      </main>
    </div>
  )
}

export default Dashboard
