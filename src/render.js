 /**
 * A simple render function limiting dom mutations to a single place in the application
 * @param {Object} component - The component with a template and events, to be rendered.
 * @param {Object} store - The vimeoStore containing the state of the app
 */
function render(component, store, opts = {}) {
    const templateString = component.template(store.getState().clocks, opts);
    document.querySelector(`#${opts.id}`).innerHTML = templateString;
    component.bindEvents(store, opts);
}

module.exports = {
    render: render,
};
