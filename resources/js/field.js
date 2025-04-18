Nova.booting((app) => {
  // app.component('index-nova-flexible-content', require('./components/IndexField').default)
  app.component(
    "detail-nova-flexible-content",
    require("./components/DetailField.vue").default,
  );
  app.component(
    "detail-nova-flexible-content-group",
    require("./components/DetailGroup.vue").default,
  );
  app.component(
    "form-nova-flexible-content",
    require("./components/FormField.vue").default,
  );
  app.component(
    "form-nova-flexible-content-group",
    require("./components/FormGroup.vue").default,
  );
  app.component(
    "flexible-drop-menu",
    require("./components/OriginalDropMenu.vue").default,
  );
  app.component(
    "flexible-search-menu",
    require("./components/SearchMenu.vue").default,
  );
  app.component(
    "delete-flexible-content-group-modal",
    require("./components/DeleteGroupModal.vue").default,
  );
});
