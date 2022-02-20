import { NavLink, Outlet } from 'react-router-dom';
import { getClients } from '../data';

export function Clients() {
  const clients = getClients();

  return (
    <div>
      <h2>Clients</h2>
      <div style={{ display: 'flex' }}>
        <nav
          style={{
            borderRight: 'solid 1px',
            padding: '1rem',
          }}
        >
          {clients.map((client) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? '#FFFFFF' : '',
                  background: isActive ? '#55f' : '',
                  padding: '0.5rem 1rem',
                  textDecoration: 'none',
                  borderRadius: 7,
                };
              }}
              to={`/clients/${client.id}`}
              key={client.id}
            >
              {client.name}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
