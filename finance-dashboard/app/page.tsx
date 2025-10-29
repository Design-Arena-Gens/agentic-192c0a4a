import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import OverviewCards from '@/components/OverviewCards';
import SpendingCharts from '@/components/SpendingCharts';
import TransactionsTable from '@/components/TransactionsTable';
import CreditCardsCarousel from '@/components/CreditCardsCarousel';
import ReceiptScanner from '@/components/ReceiptScanner';
import VoiceAssistant from '@/components/VoiceAssistant';
import SplitwisePanel from '@/components/SplitwisePanel';
import AIInsights from '@/components/AIInsights';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 p-8 overflow-y-auto">
          <OverviewCards />
          <SpendingCharts />
          <CreditCardsCarousel />
          <TransactionsTable />
          <SplitwisePanel />
          <AIInsights />
        </main>
      </div>

      <ReceiptScanner />
      <VoiceAssistant />
    </div>
  );
}
