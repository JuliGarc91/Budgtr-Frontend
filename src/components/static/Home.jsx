import Totals from "../Totals";
import { Link } from "react-router-dom";

const Home = ({ transactions }) => {
  return (
    <div>
      <h1>
        Enter your total funds:
      </h1>
      <Totals transactions={transactions}/>
      <Link to="/new">
            <strong>Click here to start budgeting!</strong>
      </Link>
    </div>
  )
}

export default Home