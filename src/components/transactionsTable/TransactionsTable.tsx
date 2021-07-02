import { useEffect } from 'react';
import { api } from '../../services/ApiAxios';
import { Container } from './style';

export function TransactionsTable(){

    useEffect(() => {
       api('transaction')
       .then(result => console.log(result.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw">- R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/12/2021</td>
                    </tr>
                    <tr>
                        <td>Venda de website</td>
                        <td className="deposity">R$5.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}