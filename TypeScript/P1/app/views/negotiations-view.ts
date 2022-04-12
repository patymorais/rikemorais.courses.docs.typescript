export class NegotiationsView {
    template(): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>
                    <!--
                        <tr>
                            <td>25/10/2017</td>
                            <td>100</td>
                            <td>5.000,00</td>
                        </tr>
                    -->
                </tbody>

                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>
                            <button class="btn btn-primary" 
                                onclick="negotiationController.importData()">
                                Importar Negociações
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}