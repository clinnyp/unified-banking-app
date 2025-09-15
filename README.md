<h1 align="center">
    Unified Banking App
</h1>
<h4>
Leveraging <a href=https://www.akahu.nz/ target="_blank">Akahu's</a> Open Banking API to streamline the banking experience for users. By integrating with multiple banks, the app consolidates all of the users banking capabilities into a single unified platform.
</h4>

<div align="center">
  <img src="https://image.mux.com/7aEDrbMyEfCV4joWpA5yUKPUAaXzJz6YaVfq1oCli7U/animated.gif?width=640&height=360" alt="Unified Banking App Demo" />
</div>

# Architecture

This projects follows a client-server architecture:

- **The frontend (this repository):** Built with React Native and responsible for all the interations and client-side logic
- **The backend:** Intended to potentially be deployed onto a serverless provider using Hono Web application framework, leveraging Akahu's open banking apis.

🔗 Check out the backend repository for this project:

[unified-banking-app-backend](https://github.com/clinnyp/unified-banking-app-backend)
