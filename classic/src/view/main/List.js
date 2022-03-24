/**
 * This view is an example list of people.
 */
Ext.define("Sencha.app.view.main.List", {
  extend: "Ext.grid.Panel",

  // TODO: WHAT IS ACTUAL DIFFERENCE BETWEEN XTYPE AND ALIAS?
  // BECAUSE BOTH OF THEM WORK SAME IN THE FOLLOWING CASE
  xtype: "mainlist",
  // alias: "widget.mainlist",

  requires: ["Sencha.app.store.Personnel"],

  title: "Personnel",

  store: {
    type: "personnel",
  },

  columns: [
    { text: "Name", dataIndex: "name" },
    { text: "Email", dataIndex: "email", flex: 1 },
    { text: "Phone", dataIndex: "phone", flex: 1 },
  ],

  listeners: {
    // this method is defined in the ./app/view/main/MainController.js
    select: "onItemSelected",
  },
});
