import SideNav from "./navigation/sideNavType3";
import TopNavType1DarkTwoLayer from "./navigation/topNavType1DarkTwoLayer";
import TopNavType1 from '@/components/navigation/TopNavType1'
import TopNavType3 from '@/components/navigation/TopNavType3'
import Hero1 from '@/components/heroes/hero1'

const Title = ({ title }) => {
  return (
    <div className="flex justify-center  w-screen">
      <div className="pt-10 mb-10 border-b-2 w-2/3 text-center" >
        {title}
      </div>
    </div>
  )
}


const NextifyHome = () => {
  return (
    <>
      {/* <Title title="TopNavType3" /> */}
      {/* <TopNavType3 logo="INICIO" /> */}
      {/* <Title title="Hero1" /> */}
      <Hero1 h1="LO ÚNICO CONSTANTE ES EL QAMBIO" h2="CONSULTORÍA ESTRATÉGICA Y DE RECURSOS HUMANOS" >
        <TopNavType3 />
      </Hero1>



      {/* <Title title="TopNavType1DarkTwoLayer" />
      <TopNavType1DarkTwoLayer />

      <Title title="TopNavType1" />
      <TopNavType1 /> */}





    </>
  );
}

export default NextifyHome;
