import Totals from "../Totals";

const Home = ({ transactions }) => {
  return (
    <section>
      Home
      <Totals transactions={transactions}/>
    </section>
  )
}

export default Home