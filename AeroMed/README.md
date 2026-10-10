# AeroMed — Every Second Counts

Academic demonstration project for exploring hospital discovery and emergency-response coordination workflows.

## Project status

- `index.html` is the original AeroMed frontend prototype.
- `backend/` contains an optional **new demonstration backend** using Node.js and Express.
- Hospital records and bed counts in the demonstration backend are sample data only.
- The dispatch endpoint records a simulated request response only; it does not contact an ambulance.
- This project is not a clinically validated medical system and must not be used to make real emergency-care decisions.

## Frontend technologies found in the prototype

- HTML5, CSS3, and JavaScript
- Three.js / WebGL for 3D rendering
- Browser Geolocation API
- Google Maps embed
- OpenStreetMap Nominatim place search
- Google Fonts

Some of these features rely on internet access and browser permissions.

## Run the frontend

You can open `index.html` in a browser. For a more reliable local test, use a local web server, such as the VS Code Live Server extension or Python's built-in server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Run the optional backend

Install a current Node.js LTS version, then open a terminal in the `backend` folder:

```bash
npm install
npm start
```

The server starts at `http://localhost:3000`.

Try these endpoints in your browser:

- `http://localhost:3000/` — server status
- `http://localhost:3000/api/health` — health check JSON
- `http://localhost:3000/api/hospitals` — sample hospital data
- `http://localhost:3000/api/hospitals/1` — one sample hospital
- `POST http://localhost:3000/api/dispatch-demo` — simulated dispatch demonstration (use the example below)

Example POST request using curl:

```bash
curl -X POST http://localhost:3000/api/dispatch-demo \
  -H "Content-Type: application/json" \
  -d "{\"hospitalId\":1,\"caseReference\":\"DEMO-001\"}"
```

The backend is a separate teaching/demo API. The existing `index.html` is preserved as the source prototype and is **not automatically connected** to this API. Connecting the frontend would be a separate development step.

## GitHub Pages note

GitHub Pages can host the static frontend (`index.html`), but it does not run Node.js servers. The backend must be run locally or deployed separately to a server host. Uploading backend code to GitHub does not make the API live.

## Suggested repository layout

```text
AeroMed/
├── index.html
├── README.md
├── TESTING.md
├── .gitignore
├── backend/
│   ├── package.json
│   └── server.js
└── docs/
    └── HACKATHON-DEMO.md
```

## Safety and privacy

- Do not upload `.env` files, credentials, access tokens, or private patient data.
- Hospital and bed availability in this sample backend are fictional demonstration data.
- Do not describe the dispatch demo as a real ambulance integration.
- For an actual emergency in India, contact the appropriate local emergency service; do not rely on this prototype.
