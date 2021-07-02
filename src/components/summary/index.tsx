import { Container } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";


export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg}></img>
                </header>
                <strong>R$1000.00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg}></img>
                </header>
                <strong>- R$500.00</strong>
            </div>
            <div className="background-green">
                <header>
                    <p>Total</p>
                    <img src={totalImg}></img>
                </header>
                <strong>R$500.00</strong>
            </div>
        </Container>
    );
}