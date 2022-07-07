import Link from "next/link";
const Nav = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/eventstate"><a className="nav-link">Eventstate</a></Link> 
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mahasiswa
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link href={{
                            pathname: "/user/data_mahasiswa",
                            query: 
                            {id : '12345' ,
                             nama: 'carlos'}
                            }}>
                        <li><a className="dropdown-item" href="#">Data Mahasiswa</a></li>
                        </Link>
                        <Link href="/user/akademik">
                        <li><a className="dropdown-item" href="#">Akademik</a></li>
                        </Link>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    )
}
export default Nav;