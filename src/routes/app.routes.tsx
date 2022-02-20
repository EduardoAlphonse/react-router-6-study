import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './Login';
import { Invoices } from './Invoices';
import { Expenses } from './Expenses';
import { Invoice } from '../components/Invoice';
import { Clients } from './Clients';
import { Client } from '../components/Client';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/clients" element={<Clients />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select a Client</p>
                </main>
              }
            />
            <Route path=":clientId" element={<Client />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
