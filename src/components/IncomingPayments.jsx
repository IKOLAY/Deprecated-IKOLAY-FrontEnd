


export function IncomingPayments() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center ">
            <table className="table table-hover table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Tarih</th>
                        <th scope="col">Ödeme Tipi</th>
                        <th scope="col">Ödeme Miktarı</th>

                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <th>21/09/2023</th>
                        <td>Kredi</td>
                        <td>$5000</td>
                    </tr>
                    <tr>
                        <th>22/09/2023</th>
                        <td>Personel Maaş</td>
                        <td>$10000</td>
                    </tr>
                    <tr>
                        <th>15/10/2023</th>
                        <td>Kırtasiye</td>
                        <td>$2500</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}