import Totals from "../Totals";

const Home = ({ transactions }) => {
  return (
    <div>
      <Totals transactions={transactions}/>
    </div>
  )
}

export default Home