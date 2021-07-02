import { Summary } from "../summary";
import { Container } from "./style";
import { TransactionsTable } from "../transactionsTable/TransactionsTable";

export function Dashboard(){
    return (
        <Container>
       <Summary></Summary>
       <TransactionsTable></TransactionsTable>
        </Container>
    )
}