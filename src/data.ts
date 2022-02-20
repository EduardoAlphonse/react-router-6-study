let invoices = [
  {
    name: 'Santa Monica',
    number: 1995,
    amount: '$10,800',
    due: '12/05/1995',
  },
  {
    name: 'Stankonia',
    number: 2000,
    amount: '$8,000',
    due: '10/31/2000',
  },
  {
    name: 'Ocean Avenue',
    number: 2003,
    amount: '$9,500',
    due: '07/22/2003',
  },
  {
    name: 'Tubthumper',
    number: 1997,
    amount: '$14,000',
    due: '09/01/1997',
  },
  {
    name: 'Wide Open Spaces',
    number: 1998,
    amount: '$4,600',
    due: '01/27/1998',
  },
];

export function getInvoices() {
  return invoices;
}

export function getInvoice(number: number) {
  return invoices.find((invoice) => invoice.number === number);
}

let clients = [
  {
    id: 3422,
    name: 'Alex LastName',
    number: '+5531988789988',
  },
  {
    id: 6011,
    name: 'Maurício Ribeiro',
    number: '+5521978212244',
  },
  {
    id: 5010,
    name: 'Fernando Rogério',
    number: '+5524922740192',
  },
];

export function getClients() {
  return clients;
}

export function getClient(id: number) {
  return clients.find((client) => client.id === id);
}
