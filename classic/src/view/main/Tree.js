Ext.define("Sencha.app.view.main.Tree", {
  extend: "Ext.Container",
  xtype: "tree",
  width: 640,

  layout: {
    type: "table",
    columns: 3,
    tdAttrs: { style: "padding: 10px;" },
  },

  defaults: {
    xtype: "treepanel",
    width: 300,
    height: 500,
    rootVisible: false,
    // Sharing the store synchronizes the views:
    store: {
      type: "files",
    },
  },

  items: [
    {
      title: "Tree",
      lines: true,
    },
    {
      title: "Tree with No Lines",
      lines: false,
    },
    {
      title: "Tree with Arrows",
      useArrows: true,
      colspan: 2,
    },
  ],
});
