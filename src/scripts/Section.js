export default class Section {
    constructor({ items, renderer }, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }

    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(el) {
        this._container.prepend(el);
    }
    
}
