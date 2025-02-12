import { check, sleep } from "k6";
import http from "k6/http";

const BASE_URL = "https://oychb9mwp5.execute-api.eu-central-1.amazonaws.com";

export const options = {
  vus: 10,
  duration: "30s",
};

export default function () {
  const response = http.get(`${BASE_URL}/health`);

  check(response, { "status is 200": (r) => r.status === 200 });

  sleep(1);
}
