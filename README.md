<p align="center">
  <h1 align="center">Plutonium - Emerald Build</h1>
  <p align="center">Plutonium Emerald is a prototype build of <a href="https://github.com/pinkhelium/plutonium2">Plutonium2</a>. The Emerald build facilitates a bare minimum front-end scaffolding to ensure that back-end application logic can be experimented with here before integration with Plutonium's major release builds. Team pinkHelium believes in serving well constructed deployment worthy platforms via its major release channels. Emerald is where more advanced features get tested before being accepted into a major release build.</p>
</p>

## Experiment Objectives
- [x] Conceptualize a minimalistic UI/UX inspired by Google's Material Design. **(ACHIEVED)**
- [ ] Build a minimal front-end scaffolding in Angular2 to facilitate a robust backend. **(IN PROGRESS)**
- [ ] Backend API compiler on demand.
- [x] Firebase integration. Decouple front-end from the server to improve reactivity.**(ACHIEVED! "Drop-the-mic")**
- [ ] Github Authentication. DUH! :P 
- [ ] <<ADD MORE>>

## Version (Changelog)
* ### ***0.1.0***
    * Firebase integration. No local data dependencies. Aww yeah! Two days worth of coding finally paid off.
    * Formatted Object display in views to display real-time data.
    * 
* ### ***0.0.1***
    * Added a project component view. Clicking the edit button on a project card toggles the respective component view.
    * Added support for Material Design Icons.
    * Improved UI/UX.
    * Added angular-router implementation. Screen/Process flow is smoother.
    * Mock Data service (deprecated)

* ### ***0.0.0*** 
    *  Prepared initial project scaffolding.

## Stack
> The Emerald Stack is prone to changes due to its experimental nature. However, the following image can be used as a yardstick. Team pinkHelium is currently playing around with different technologies to put together the most appropriate stack for the cause. Bear with us if this section seems too volatile. We love the ever-changing playground of the web. :)

<p align="center">
    <img src="https://docs.google.com/drawings/d/1yV-FcNkknzPuRIybjUT3yKvG6EuWBVnZgJvsuGoHgD0/pub?w=586&h=451">
</p>

## Instructions
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

## Contributers
> [pinkHelium][pinkHelium_Members]
> [cyberbeast][cyberbeast]
> [diti][diti]
> [seel][seel]



[pinkHelium_Members]: https://github.com/orgs/pinkhelium/people
[Plutonium2]: https://github.com/pinkhelium/plutonium2
[cyberbeast]: https://github.com/cyberbeast
[seel]: https://github.com/abinavseelan
[diti]: https://github.com/rheaditi
