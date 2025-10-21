<h1 align="center">
    Unified Banking App
</h1>
<h4>
Leveraging <a href=https://www.akahu.nz/ target="_blank">Akahu's</a> Open Banking API to streamline the banking experience for users. By integrating with multiple banks, the app consolidates all of the users banking capabilities into a single unified platform.
</h4>

<div align="center">
  <img src="mobile/public/demo.gif" alt="Demo GIF" />
</div>

# Architecture

This projects follows a client-server architecture:

- **The frontend (this repository):** Built with React Native and responsible for all the interations and client-side logic.
- **The backend:** Intended to potentially be deployed onto a serverless provider i.e. AWS or Azure using Hono Web application framework, leveraging Akahu's open banking apis.
