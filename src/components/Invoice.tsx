import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';

export function Invoice() {
  const params = useParams<{ invoiceId: string }>();
  const invoice = getInvoice(parseInt(params.invoiceId ?? ''));
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice?.amount}</h2>
      <p>
        {invoice?.name}: {invoice?.number}
      </p>
      <p>Due Date: {invoice?.due}</p>
    </main>
  );
}
