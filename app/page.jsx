import Competencies from "@/components/competencies";
import './globals.css';
import Qualifications from "@/components/qualifications";
import Interests from "@/components/interests";
import Contact from "@/components/contact";
import DriversLicense from "@/components/drivers-license";
import Languages from "@/components/languages";
import Code from "@/components/code";
import Profile from "@/components/profile";
import Educations from "@/components/educations";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <section className='cv'>

        <main className='cv__main'>
          <Profile />
          <Educations />
          <Experience />
        </main>

        <aside className='cv__sidebar'>
          <Competencies />
          <Qualifications />
          <Interests />
          <Contact />
          <DriversLicense />
          <Languages />
          <Code />
        </aside>        

      </section>
  );
}
