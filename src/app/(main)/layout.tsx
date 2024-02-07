import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export default function MainLayout({
  children,
  navigation,
  auth,
}: {
  children: React.ReactNode;
  navigation: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <>
      {auth}
      {navigation}
      <Header />
      {children}
      <Footer />
    </>
  );
}
