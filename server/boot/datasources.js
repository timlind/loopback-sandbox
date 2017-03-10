var DataSource = require('loopback-datasource-juggler').DataSource;
var loopback = require('loopback');
/**
 * What is the difference between the many APIs to define data sources:
 *      app.dataSource();
 *      loopback.createDataSource();
 *      new DataSource();
 *      loopback.Registry.createDataSource();
 */
module.exports = function(app) {
    var dbPersistence = new DataSource({
        name: "db-persistence",
        connector: require('loopback-connector-mongodb'),
        url: process.env.DATABASE_URL
    });

    // can the models be accessed here?
    app.models.Boss.attachTo(dbPersistence);
};