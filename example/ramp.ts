import { check, sleep } from "k6";
import http from "k6/http";

const BASE_URL = "https://oychb9mwp5.execute-api.eu-central-1.amazonaws.com";

export const options = {
  scenarios: {
    ramp_up_down: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "2m", target: 100 }, // Ramp up to 100 users
        { duration: "5m", target: 100 }, // Stay at 100 for 5 minutes
        { duration: "2m", target: 0 }, // Ramp down to 0
      ],
    },
  },
};

export default function () {
  const response = http.get(`${BASE_URL}/health`);

  check(response, { "status is 200": (r) => r.status === 200 });

  sleep(1);
}
