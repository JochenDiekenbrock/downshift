class ComboboxWebComponent extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = "<div id=\"component-root\"></div>"
    }
}

window.customElements.define(
    'combobox-webcomponent',
    ComboboxWebComponent
);
