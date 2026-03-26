import { useState } from "react";
import Header from "../components/Header";
import AddSubscription from "../components/AddSubscription";
import SubscriptionList from "../components/SubscriptionList";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] px-8 py-6">
      <Header />

      <main className="mt-8">
        <AddSubscription onOpen={() => setIsOpen(true)} />
        <SubscriptionList />
      </main>

      {isOpen && (
        <AddSubscription modal onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default Dashboard;