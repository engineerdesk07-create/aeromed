# AeroMed Hackathon Demo Script

## 1. Show the frontend
Open `index.html` or the hosted GitHub Pages site. Point out the hospital discovery interface, map/location features, and 3D visualization.

## 2. Start the demo backend
In a terminal:

```bash
cd backend
npm install
npm start
```

## 3. Show the API
Open these URLs:

- `http://localhost:3000/api/health`
- `http://localhost:3000/api/hospitals`
- `http://localhost:3000/api/hospitals/1`

Explain that the browser is making an HTTP request and the Express backend returns JSON.

## 4. Show the simulated dispatch API
Run:

```bash
curl -X POST http://localhost:3000/api/dispatch-demo \
  -H "Content-Type: application/json" \
  -d "{\"hospitalId\":1,\"caseReference\":\"DEMO-001\"}"
```

Explain that this endpoint only demonstrates a server-side request/response flow. It does not contact an ambulance.

## Suggested words for the judge
“The original AeroMed HTML is our frontend prototype. I added this Node.js and Express backend as an academic demonstration of REST APIs. It returns sample hospital records and demonstrates a simulated dispatch request. Hospital bed counts are not live, and there is no real ambulance or hospital-system integration.”
