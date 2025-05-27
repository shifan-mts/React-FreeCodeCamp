function App(){
  let M = 'day';
  let n = new Date().getHours();
  if(n<12){
    M= 'morning';
  }
  else if(n>12 && n<17){
    M = 'afternoon';
  }
  else if(n>17){
    M = 'evening';
  }
  return (
    <>
      <h1>Good {M}</h1>
    </>
  )
}

export default App;