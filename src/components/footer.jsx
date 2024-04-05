function Footer(){
    return <footer className ="page-footer yellow lighten-2">
        <div className="footer-copyright">
            <div className="container black-text">
                ©  {new Date().getFullYear()} Copyright Text / Volkova Diana
                <a className="black-text right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}

export {Footer};