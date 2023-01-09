const root = ReactDOM.createRoot(document.getElementById("root"))

function Component () {
    return (
    <div>
        <Header /> 
        <MainContent />
        <Footer />
        </div>
    )
}

function Header () {
    return (
        <nav>
            <div className="navbar">
            <ul className="list-items">
                <li> GitHub </li>
                <li> Instagram </li>
                <li> Twitter </li>
            </ul>
            </div>
        </nav>
    )
}

function MainContent () {
    return (
        <div  className="main-div">
            <div>
                <h1>Bailee R. </h1>
                <p>Frontend Developer</p>
                <p>Lacey, Washington</p>
            </div>
            <div>
                <img src="img/IMG_1114.JPG" className="main-pic"></img>
            </div>
        </div>
    )
}

function Footer () {
    return (
        <div className="footer-div">
            <i class="fa-brands fa-github"></i>
            <i><i class="fa-brands fa-instagram"></i></i>
            <i><i class="fa-brands fa-twitter"></i></i>
        </div>
    )
}


root.render(<Component />)
