export default function Navbar(){

    return (
        <div id="navbar" className="navbar-main">
            <div className="navbar-left">
                <div className="navbar-menu">
                    About
                </div>
                <div className="navbar-menu">
                    Features
                </div>
                <div className="navbar-menu">
                    Pricing
                </div>
            </div>
            <div className="navbar-right">
                <div id="btn-special" style={{userSelect:'none', borderLeft:'2px solid', borderRight:'2px solid', fontSize:'2vh', padding:'2.1vh', paddingLeft:'3vh', paddingRight:'3vh', cursor:'pointer'}}>
                    Login
                </div>
                <div id="btn-special" className="black-bg" style={{userSelect:'none', fontSize:'2vh', padding:'2.1vh', paddingLeft:'3vh', paddingRight:'3vh', cursor:'pointer'}}>
                    Start Exploring
                </div>
            </div>
        </div>
    )
}