/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Sencha.app.Application',

    name: 'Sencha.app',

    requires: [
        // This will automatically load all classes in the Sencha.app namespace
        // so that application classes do not need to require each other.
        'Sencha.app.*'
    ],

    // The name of the initial view to create.
    mainView: 'Sencha.app.view.main.Main'
});
