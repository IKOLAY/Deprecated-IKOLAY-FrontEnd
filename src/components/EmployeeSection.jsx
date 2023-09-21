import { useState } from "react";

export function EmployeeSection() {
    return (
        <ListEmployeeAndAddEmployee />
    )
}

function ListEmployeeAndAddEmployee() {
    return (
        <div className="d-flex flex-column gap-1">
            <section className="d-flex flex-row gap-2">
                <EmployeeAdd />
                <EmployeeDelete />
            </section>
            <table className="table table-hover table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">İsim</th>
                        <th scope="col">Soyisim</th>
                        <th scope="col">Mail Adres</th>
                        <th scope="col">Telefon</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Doruk</td>
                        <td>Tokinan</td>
                        <td>doruk@gmail.com</td>
                        <td>55555555</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>55555555</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>55555555</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Selim</td>
                        <td>Adanedhel</td>
                        <td>@twitter</td>
                        <td>55555555</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

function EmployeeAdd() {
    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAdd"
            >
                Personel Ekle
            </button>

            <div
                className="modal fade"
                id="modalAdd"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                IKOLAY Personel Ekle
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">İsim</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="text"
                                        placeholder="Çalışan İsmini Giriniz"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Soyisim</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="text"
                                        placeholder="Çalışan Soyismini Giriniz"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Vazgeç
                            </button>
                            <button type="button" className="btn btn-primary">
                                Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function EmployeeDelete() {
    return (
        <>
            <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#modalDelete"
            >
                Personel Sil
            </button>
            <div
                className="modal fade"
                id="modalDelete"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                IKOLAY Personel Sil
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Personel Kisisel Email Giriniz</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Vazgeç
                            </button>
                            <button type="button" className="btn btn-primary">
                                Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
