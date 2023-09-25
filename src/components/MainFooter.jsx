export default function MainFooter() {
    return (

        <footer className="nav d-flex flex-wrap justify-content-between align-items-center bg-light px-5 py-2">
            <p className="col-md-4 mb-0">© 2023 IKolay, Inc</p>
            <a
                href="/"
                className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto"
            >
                <img width={32} src="/img/ikolay-icon.svg" alt="" />
            </a>
            <a href="mailto:ikolayhrmanagement@gmail.com" className="px-2">
                ikolayhrmanagement@gmail.com
            </a>
        </footer>

    )
}