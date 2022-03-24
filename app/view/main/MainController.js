/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("Sencha.app.view.main.MainController", {
  extend: "Ext.app.ViewController",

  // need to specify alias because it will be search with this name from the main.js file
  alias: "controller.main",

  // onItemSelected: function (sender, record) {
  //   Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  // },

  // views: ["mainlist"],
  control({
    'useredit button[action=save]': {
      click: "updateUser",
  }
  }),

  editUser: function (grid, record) {
    console.log("Double clicked on " + record.get("name"));
    var view = Ext.widget("useredit");

    view.down("form").loadRecord(record);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },
});
