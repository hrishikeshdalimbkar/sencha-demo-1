/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define(
  // this is a class name
  "Sencha.app.view.main.Main",
  {
    extend: "Ext.tab.Panel",

    // TODO: WHERE IS app-main comming from or where is it defined ?
    xtype: "app-main",

    // this classes are imported
    requires: [
      "Ext.plugin.Viewport",
      "Ext.window.MessageBox",
      // for controller
      "Sencha.app.view.main.MainController",
      // for model
      "Sencha.app.view.main.MainModel",
      /// for grid list
      "Sencha.app.view.main.List",
    ],

    // here we have to specify the alias name with that name the controller will be instatiated
    controller: "main",
    // here we have to specify the alias name with that name the viewModel will be instatiated
    viewModel: "main",
    // REGARDING ALIAS OF controller and viewModel
    // by default the searching for controller and view model will be by alias
    // and while searching controller then the search will be done
    // by appending "controller" word before the alias
    // so we will have to provide the alias in that type in our controller
    // and same goes with the viewModel

    ui: "navigation",

    // to show the tabbar to left of screen
    tabBarHeaderPosition: 1,
    // as we are displaying tabbars to left so its tabs are also rotated
    // to make tabs straight setting rotation to 0
    tabRotation: 0,

    // same for the title as we have sent to left of screen
    // we will have to make its rotation to 0
    titleRotation: 0,

    // header step 1: For showing the header
    header: {
      layout: {
        align: "stretchmax",
      },
      title: {
        bind: {
          text: "{name}",
        },
        flex: 0,
      },
      iconCls: "fa-th-list",
    },

    // changing the tabbar css
    tabBar: {
      flex: 1,
      layout: {
        align: "stretch",
        overflowHandler: "none",
      },
    },

    responsiveConfig: {
      // for mobile devices the header will be at top
      tall: {
        headerPosition: "top",
      },
      // for desktop devices the header will be at left
      wide: {
        headerPosition: "left",
      },
    },

    // padding for the content body and many more
    defaults: {
      bodyPadding: 20,
      tabConfig: {
        responsiveConfig: {
          // for desktop
          wide: {
            iconAlign: "left",
            textAlign: "left",
          },
          // for mobiles
          tall: {
            iconAlign: "top",
            textAlign: "center",
            width: 120,
          },
        },
      },
    },

    items: [
      {
        title: "Home",
        iconCls: "fa-home",
        // The following grid shares a store with the classic version's grid as well!
        items: [
          {
            // in back its searching for widget.mainlist so weather it's a alias or class
            xtype: "mainlist",
          },
        ],
      },
      {
        title: "Users",
        iconCls: "fa-user",
        //if we want to use bind
        bind: {
          html: "{loremIpsum}",
        },
      },
      {
        title: "Groups",
        iconCls: "fa-users",
        bind: {
          html: "{loremIpsum}",
        },
      },
      {
        title: "Settings",
        iconCls: "fa-cog",
        bind: {
          html: "{loremIpsum}",
        },
      },
    ],
  }
);
