import DashboardCarousel from '../components/DashboardCarousel';
import Header from '../components/Header';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-blue-200/90 to-blue-50/90 dark:from-[#1e293b] dark:via-[#23272f] dark:to-[#181e29] py-10">
        <DashboardCarousel />
      </main>
    </>
  );
}
