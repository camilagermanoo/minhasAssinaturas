import Header from "../components/Header";
import AddSubscription from "../components/AddSubscription";
import SubscriptionList from "../components/SubscriptionList";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#020617] px-8 py-6">
      <Header />

      <main className="mt-8">
        <AddSubscription />
        <SubscriptionList />
      </main>
    </div>
  );
}

export default Dashboard