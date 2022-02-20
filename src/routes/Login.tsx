import { Link, Outlet } from 'react-router-dom';

export function Login() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: '1px solid', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link> |{' '}
        <Link to="/clients">Clients</Link>
      </nav>
      <Outlet />
    </div>
  );
}
