function foundationsDropDown() {
  const dropdown = document.getElementById('dropDownFoundations')
  dropdown?.classList.toggle('show')
}
function bootcampDropDown() {
  const dropdown = document.getElementById('dropDownBootcamp')
  dropdown?.classList.toggle('show')
}
function App() {
  return (
    <div className="main">
      <h1 id="header">Welcome too Mathias's portfolio</h1>
      <div>
        <img id="devimg" src="/dev-academy.png" alt="dev academy logo" />
        <a href="https://devacademy.co.nz">
          <h2 id="devtext">Taught by Dev Academy Aotearoa</h2>
        </a>
        <a href="https://docs.google.com/document/d/1c48JSjcFvu03ji9qHgs1ZHCayQPIPKMPBxZZpJoushw">
          <h2 id="cvlink">My CV</h2>
        </a>
      </div>
      <div id="foundations" className="dropdown">
        <button onClick={foundationsDropDown} className="dropbtn">
          Foundations
        </button>
        <div id="dropDownFoundations" className="dropdown-content">
          <a href="https://mathias-bridgman.github.io/index.html">
            Foundations Blog
          </a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div id="bootcamp" className="dropdown">
        <button onClick={bootcampDropDown} className="dropbtn">
          Bootcamp
        </button>
        <div id="dropDownBootcamp" className="dropdown-content">
          <a href="http://mathias-personal-project.devacademy.online">
            Personal Project
          </a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  )
}

export default App
