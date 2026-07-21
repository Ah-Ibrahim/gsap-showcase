import Basics from "@/features/Basics/Basics";
import Finale from "@/features/finale/Finale";
import Intro from "@/features/Intro/Intro";
import Plugins from "@/features/plugins/Plugins";
import VsCss from "@/features/vsCss/vsCss";
import WhereGsap from "@/features/whereGsap/WhereGsap";

function Home() {
  return (
    <main>
      <Intro />
      <Basics />
      <Plugins />
      <VsCss />
      <WhereGsap />
      <Finale />
    </main>
  );
}
export default Home;
