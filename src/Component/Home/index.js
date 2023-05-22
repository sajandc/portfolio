import image from "../../Images/image.jpg"
import section2 from "../../Images/ss.jpeg"

function Home() {
  return (
    <main className="home">
      <section>
        <img src={image}/>
      </section>
      <section>
      <img src={section2}/>
      </section>
    </main>
  );
}

export default Home;
