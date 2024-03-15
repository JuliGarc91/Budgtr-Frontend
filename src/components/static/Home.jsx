import Totals from "../Totals";
import { Link } from "react-router-dom";

const Home = ({ transactions }) => {
  return (
    <div>
      <h2 className="enter-title">
      &nbsp;Enter current total funds to begin 🤑:&nbsp;
      </h2>
      <Totals transactions={transactions}/>
      <Link to="/new">
            <strong>
              <h2 className="enter-link">🐽 Click here to start budgeting! 🐽</h2>
            </strong>
      </Link>
    </div>
  )
}

export default Home