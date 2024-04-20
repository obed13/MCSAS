import Logo from '../assets/img/logo_salud_3.png'

export const Login = () => {
    return (
        <div className="container-fluid">
            <div className="row no-gutter">

                <div className="col-md-6 d-none d-md-flex bg-image"></div>

                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <img src={Logo} alt="" width="500" />
                                    <h3 className="display-4">MCSAS</h3>
                                    <p className="text-muted mb-4">Monitoreo y Control del Sistema de Almacenamiento y Suministros</p>
                                    <form>
                                        <div className="mb-3">
                                            <input id="inputEmail" type="email" placeholder="Usuario" required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="form-check">
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" style={{ backgroundColor: "#9d2449" }}>Aceptar</button>
                                        </div>

                                        <div className="text-center d-flex justify-content-between mt-4">
                                            <p>
                                                Code by <a href="#" className="font-italic text-muted">
                                                    <u>Isesalud</u></a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
