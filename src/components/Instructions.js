const Instructions = () => {
  return (
    <section className="InstructionsMainContainer">
      <h2>Welcome Stars Hollow Residents</h2>
      {/* Grid Container Below
      gtc: 1fr 1fr, gcg: 50px
      */}
      <section className="InstructionsListContainer wrapper">
        {/* Grid items, margin: 0, list-style: none */}
        <ul className="InstructionsLists">
          <li className="InstructionsListItems">
            <h3>Test, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reiciendis.</h3>
          </li>
          <li className="InstructionsListItems">
            <h3>Test, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reiciendis.</h3>
          </li>
          <li className="InstructionsListItems">
            <h3>Test, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reiciendis.</h3>
          </li>
        </ul>
        <ul className="InstructionsLists">
          <li className="InstructionsListItems">
            <h3>Test, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reiciendis.</h3>
          </li>
          <li className="InstructionsListItems">
            <h3>Test, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reiciendis.</h3>
          </li>
          <li className="InstructionsListItems">
            <h3>Test, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, reiciendis.</h3>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Instructions
