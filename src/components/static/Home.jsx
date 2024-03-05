const Home = () => {

  return (
    <section>Home
        <h2>Total Amount Spent: $</h2>
        <h2>Total Funds Left: $</h2>
        <form>
            <label htmlFor="totalFunds">
                Total Funds: $
            </label>
            <input
                type="number"
                name="totalFunds"
                id="totalFunds"
            />
        </form>
    </section>
  )
}

export default Home