import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 200 },  
    { duration: '2m', target: 500 },  
    { duration: '2m', target: 1000 }, 
  ],
};

export default function () {

  const url = 'http://localhost:3000/checkout/crypto';
  
  const payload = JSON.stringify({
    produtoId: '12345',
    quantidade: 1
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
  
  sleep(1);
}