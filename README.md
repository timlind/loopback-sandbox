# Testing setup of programmatic data sources to hide db credentials

1. Where are datasources setup? Is boot/datasources.js the right place?
    * It's not clear when figuring this out, that the model's run before the boot scripts, therefore datasource doesn't exist when trying to attach in model.js
    * It's not clear that the named datasource also needs to be defined in the datasources.json
2. Should they be setup in the module.exports callback or immediately?
3. Which API should be used to setup, and what are the differences?
    * app.dataSource()
4. Can a mongodb  datasource be defined in datasources and just the credentials added programmatically? Does datasources.json override programmatic or vice versa?
5. Can a datasource added programmatically be associated with models using model-config.json? What order is this done in, in comparison to when the code executes model.js or programmatical setup of datasource?
6. How should the datasource instance be defined / exported / imported / accessed from the model.js file?



# loopback-sandbox

A repository for reproducing [LoopBack community issues][wiki-issues].

[wiki-issues]: https://github.com/strongloop/loopback/wiki/Reporting-issues
 