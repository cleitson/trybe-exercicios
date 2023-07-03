function Greeting() {
  const user = {
    name: 'cleitson',
    lastName: 'lima',
  }

  return (
    <h1 className="greeting">
      Olá {`${user.name} ${user.lastName}`}
      <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
    </h1>
  )
}

export default Greeting;
