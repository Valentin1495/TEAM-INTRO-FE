import Header from '@/components/common/Header';
import ContactContents from '@/components/dashboard/contact/ContactContents';
import Sidebar from '@/components/dashboard/Sidebar';

export default function ContactConfirmNeeded() {
  return (
    <div>
      <Header />
      <section className="flex">
        <Sidebar />
        <ContactContents />
      </section>
    </div>
  );
}
