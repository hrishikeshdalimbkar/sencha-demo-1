// creating a custom class with name as Personnel
Ext.define("Sencha.app.store.Personnel", {
  // which extends the store
  // so it will inherit the store properties
  extend: "Ext.data.Store",

  alias: "store.personnel",

  // model defined in ./app/model/Personnel.js
  model: "Sencha.app.model.Personnel",

  // static data
  data: {
    items: [
      { name: "Jean Luc", email: "j.picard@luc.com", phone: "555-111-1111" },
      { name: "Worf", email: "worf.mog@enterprise.com", phone: "555-222-2222" },
      { name: "Deana", email: "deanna@enterprise.com", phone: "555-333-33" },
      { name: "Data", email: "mr.data@enterprise.com", phone: "555-110-4444" },
      { name: "Akhil", email: "akhild@enterprise.com", phone: "555-422-4444" },
      { name: "Sarang", email: "sarang@enterprise.com", phone: "555-132-2222" },
    ],
  },

  // for loading the data
  proxy: {
    // TODO: WHY memory proxy and not other type ?
    // In-memory proxy :  This proxy simply uses a local variable for data storage/retrieval, so its contents are lost on every page refresh.
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
