import incomeImg from '../../assets/income.svg';
import expensesImg from '../../assets/expenses.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas' />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={expensesImg} alt='Saidas' />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="green-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
