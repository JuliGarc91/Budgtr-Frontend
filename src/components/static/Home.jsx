import Totals from "../Totals";
import { Link } from "react-router-dom";

const Home = ({ transactions }) => {
  return (
    <div>
      <h1 className="enter">
        Enter your current total funds to begin 🤑:
      </h1>
      <Totals transactions={transactions}/>
      <Link to="/new">
            <strong>
              <h1 className="enter">💰 Click here to start budgeting! 💰</h1>
            </strong>
      </Link>
    </div>
  )
}

export default Home