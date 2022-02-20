import { useParams } from 'react-router-dom';
import { getClient } from '../data';

export function Client() {
  const params = useParams<{ clientId: string }>();
  const client = getClient(parseInt(params.clientId ?? ''));

  return (
    <div>
      <h2>Client:</h2>
      <p>
        ID: {client?.id} | Name: {client?.name}
      </p>
      <p>Number: {client?.number}</p>
    </div>
  );
}
