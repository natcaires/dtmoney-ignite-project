import { TransactionsTable } from '../../styles/TransactionsTable';
import { Summary } from '../Summary';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
