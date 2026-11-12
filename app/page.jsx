import Competencies from "@/components/competencies";
import './globals.css';
import Qualifications from "@/components/qualifications";

export default function Home() {
  return (
    <section className='cv'>

        <main className='cv__main'>
          {/* <Profile /> */}
          {/* <Educations /> */}
          {/* <Experience /> */}
        </main>

        <aside className='cv__sidebar'>
          <Competencies />
          <Qualifications />
          {/* <Interests /> */}
          {/* <Contact /> */}
          {/* <Credentials /> */}
          {/* <Code /> */}
        </aside>        

      </section>
  );
}
