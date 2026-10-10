# AeroMed Test Plan

This is a suggested test plan. Mark a test as passed only after you actually run it.

## Frontend checks

| Test | Steps | Expected result |
|---|---|---|
| Page loads | Open `index.html` in a modern browser | Main AeroMed page appears |
| Layout | Check desktop and narrow/mobile viewport | Content remains usable |
| Location permission | Test with permission allowed and denied | Page handles the browser permission outcome without assuming access |
| Map/search | Try map and place-search features while online | External content loads when the service is available |
| Console | Open browser DevTools Console | Investigate and document any errors |

## Backend checks

1. In `backend/`, run `npm install`.
2. Run `npm start`.
3. Open `http://localhost:3000/api/health`.
   - Expected: JSON status indicating the demo server is running.
4. Open `http://localhost:3000/api/hospitals`.
   - Expected: JSON with two sample hospitals marked `SIMULATED`.
5. Open `http://localhost:3000/api/hospitals/1`.
   - Expected: one sample hospital record.
6. Send a POST request to `/api/dispatch-demo` using the example in `README.md`.
   - Expected: a simulated acknowledgement that explicitly says no real ambulance was contacted.
7. Stop the server with `Ctrl+C`.

## Limitations to record in a report

- Sample bed counts are not live.
- Dispatch is simulated.
- No production database is connected.
- No clinical validation is claimed.
- No live ambulance or hospital-system integration is included.
