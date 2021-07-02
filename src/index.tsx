import { createServer } from "miragejs";
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('transaction',() => {
      return [
        {
          name: 'Testes',
          amount: 400,
          category: 'Venda',
          date: new Date(),
          type: 'deposit'
        }]
      });
  }
})

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

