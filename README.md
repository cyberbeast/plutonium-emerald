<p align="center">
  <h1 align="center">Plutonium - Emerald Build</h1>
  <p align="center">Plutonium Emerald is a prototype build of <a href="https://github.com/pinkhelium/plutonium2">Plutonium2</a>. The Emerald build facilitates a bare minimum front-end scaffolding to ensure that back-end application logic can be experimented with here before integration with Plutonium's major release builds. Team pinkHelium believes in serving well constructed deployment worthy platforms via its major release channels. Emerald is where more advanced features get tested before being accepted into a major release build.</p>
</p>

## Experiment Objectives
- [x] Conceptualize a minimalistic UI/UX inspired by Google's Material Design. Moved to [angular2-materialize][angular2-materialize] since support for angular2-material has been delayed. **(ACHIEVED)**
- [x] Build a minimal front-end scaffolding in Angular2 to facilitate a robust backend. **(ACHIEVED)**
- [ ] Backend API compiler on demand. **(PLANNING)**
- [x] Firebase integration. Decouple front-end from the server to improve reactivity.**(ACHIEVED! "Drop-the-mic")**
- [x] Github Authentication. DUH! :P **(ACHIEVED)**
- [x] Front end subscription based access to real-time data objects. **(ACHIEVED)**
- [x] UI Animations **(ACHIEVED)**
- [ ] Ace editor powered firepad integration for real-time in-browser code editing **(IN PROGRESS)**
- [ ] <<ADD MORE>>

## Version (Changelog)
* ***0.1.2 (July 20, 2016)***
    * UI Improvements. 
        * Incorporated suggestions by [diti][diti] and [seel][seel].
            * Add new project card spans the entire row.
            * <img src="https://docs.google.com/drawings/d/1LiCjosl8-NZPTER6Vng3j1SNnmDC3Kxogfzx3QsPekk/pub?w=479&h=107">
            * Card alignment improvements. 
            * <img src="https://docs.google.com/drawings/d/1VQlq0NZrXVq56ZdE_jWIF07TVZAlWrgVFQ374wxEyIM/pub?w=160&h=157">
        * Implemented a breadcrumbs bar.
            * <img src="https://docs.google.com/drawings/d/1AqgEUywUfg-QDhFydZ7vWDm0mxWFr1SPSJ0ENUp46J8/pub?w=253&h=50"> 
            * This shows the state of the current view and also gives access to previous views according to the view-flow (Dashboard -> Projects -> Functions).
    * Navigation Service an Support
        * Added more observable data streams for understanding and implementing view transitions. Data streams exposed as a service.
    * Titlecase Pipe [implementation][apkostka-angular2TitleCase]. (Credits: [apkostka][apkostka])
* ***0.1.1 (July 18, 2016)***
    * MASSIVE UI Overhaul. 
        * Due to issues with the official angular2 material components, we've decided to stroll away from it for the time being and invested some coding efforts into making emerald fulfill its UI objectives better.
    * Debug Service and Support. 
        * Now access communication objects in near real-time by subscribing to the live streams exposed as part of the Debug Service. Go "Observables"!
    * Minor code cleanup.
    * Typographical Updates.
* ***0.1.0***
    * Firebase integration. 
        * No more local data dependencies. **Aww yeah! Two days worth of coding finally paid off.**
        * Near real-time synchronization and availability of metadata.
    * Support for Formatted Object display in views to display communication data.
    * Github Authentication support.
        * Users need to login via Github to access the app.
* ***0.0.4***
    * Added a project component view. Clicking the edit button on a project card toggles the respective component view.
    * Added support for Material Design Icons.
    * Improved UI/UX.
    * Added angular-router implementation. Screen/Process flow is smoother.
    * Mock Data service (deprecated)

* ***0.0.1*** 
    *  Prepared initial project scaffolding.

## Stack
> The Emerald Stack is prone to changes due to its experimental nature. However, the following image can be used as a yardstick. Team pinkHelium is currently playing around with different technologies to put together the most appropriate stack for the cause. Bear with us if this section seems too volatile. We love the ever-changing playground of the web. :)

<p align="center">
    <img src="https://docs.google.com/drawings/d/1yV-FcNkknzPuRIybjUT3yKvG6EuWBVnZgJvsuGoHgD0/pub?w=586&h=451">
</p>

## Instructions
Create a config.ts file in client/src/app/config with the following data.
```ts
export var FirebaseConfig = {
    apiKey          :   "<<YOUR API KEY>>",
    authDomain      :   "<<YOUR AUTHDOMAIN>>",
    databaseURL     :   "<<YOUR DATABASEURL>>",
    storageBucket   :   "<<YOUR STORAGEBUCKET>>"
}
```

Open a terminal instance.
```bash
cd client && npm install
ng build
```

Open another terminal instance and navigate to the plutonium-emerald root directory.
```bash
cd server && npm install
node app.js
```

> Access http://localhost:3005 via a browser.

## Screenshots
<p align="center">
    <img src="https://docs.google.com/drawings/d/1y0nYXMsW79AZaIsOnI_lOoC48wA7HWMTJOUjywd-Mlc/pub?w=480&h=360">
</p>
<p align="center">
    <img src="https://docs.google.com/drawings/d/10CIjGS_2k7ikN0ZakfHgqZea70Kv7D1l_eatAMCXA5Q/pub?w=480&h=360">
</p>
<p align="center">
    <img src="https://docs.google.com/drawings/d/1-Dr7_lePyzfnxhx3lTXRkoIgb0Cu624du4Hlg9XDX9I/pub?w=480&h=360">
</p>
<p align="center">
    <img src="https://docs.google.com/drawings/d/1LH0uUf4allVK2-e3gAt4wZd6J_RSabWvUKh0IMKybaI/pub?w=480&h=360">
</p>

## Contributors
> [pinkHelium][pinkHelium_Members]
> [cyberbeast][cyberbeast]
> [diti][diti]
> [seel][seel]



[pinkHelium_Members]: https://github.com/orgs/pinkhelium/people
[Plutonium2]: https://github.com/pinkhelium/plutonium2
[cyberbeast]: https://github.com/cyberbeast
[seel]: https://github.com/abinavseelan
[diti]: https://github.com/rheaditi
[angular2-materialize]: https://www.npmjs.com/package/angular2-materialize
[apkostka]: https://gist.github.com/apkostka
[apkostka-angular2TitleCase]: https://gist.github.com/apkostka/a42b2f23df033872ae406549ab1a1c2e
