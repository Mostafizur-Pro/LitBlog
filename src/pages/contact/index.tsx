import Banner from "@/components/ContactPage/Banner";
import ContactForm from "@/components/ContactPage/ContactForm";
import ContactIntro from "@/components/ContactPage/ContactIntro";
import SideLatestPost from "@/components/SideMenu/LatestPost";

const Contact = () => {
  return (
    <div>
      <Banner />

      <section className="md:grid md:grid-cols-3">
        <div className="md:col-span-2">
          <ContactIntro />
          <ContactForm />
        </div>
        <div className="md:col-span-1 w-full px-4 ">
          <SideLatestPost />
        </div>
      </section>
    </div>
  );
};

export default Contact;
