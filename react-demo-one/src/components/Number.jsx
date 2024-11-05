const Number = () => {
  const array = [1, 2, 3, 4, 5]

  return (
    <div>
      {array.map((arr) => (
        <ul key={Math.random()}>
          <li>{arr}</li>
        </ul>
      ))}
    </div>
  )
}

export default Number
