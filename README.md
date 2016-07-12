# Plutonium - Emerald Build

> Plutonium Emerald is a prototype build of [Plutonium2]. The Emerald build facilitates a bare minimum front-end scaffolding to ensure that back-end application logic can be experimented with here before integration with Plutonium's major release builds. Team pinkHelium believes in serving well constructed deployment worthy platforms via its major release channels. Emerald is where more advanced features get tested before being accepted into a major release build.

### Objectives
- [x] Conceptualize a minimalistic UI/UX inspired by Google's Material Design. **(ACHIEVED)**
- [ ] Build a minimal front-end scaffolding in Angular2 to facilitate a robust backend. **(IN PROGRESS)**
- [ ] Backend API compiler on demand.
- [ ] <<ADD MORE>>

### Version (Changelog)
* ### ***0.0.1***
    * Added a project component view. Clicking the edit button on a project card toggles the respective component view.
    * Added support for Material Design Icons.
    * Improved UI/UX.
    * Added angular-router implementation. Screen/Process flow is smoother.

* ### ***0.0.0*** 
    *  Prepared initial project scaffolding.

### Stack
> The Emerald Stack is prone to changes due to its experimental nature. However, the following image can be used as a yardstick. Team pinkHelium is currently playing around with different technologies to put together the most appropriate stack for the cause. Bear with us if this section seems to volatile. We love the ever-changing playground of the web. :)

![Plutonium Stack](https://docs.google.com/drawings/d/1yV-FcNkknzPuRIybjUT3yKvG6EuWBVnZgJvsuGoHgD0/pub?w=586&h=451)

### Instructions
Open a terminal instance.
```sh
$ cd client && npm install
$ ng build
```

Open another terminal instance and navigate to the plutonium-emerald root directory.
```sh
$ cd server && npm install
$ node app.js
```

> Access http://localhost:3005 via a browser.

### Contributers
> [pinkHelium][pinkHelium_Members]


[pinkHelium_Members]: https://github.com/orgs/pinkhelium/people
[Plutonium2]: https://github.com/pinkhelium/plutonium2
