import svg from '../../img/sprite.svg'

export default class View {

    _data;

    render(data, render = true){
        this._data = data;
        const markup = this._generateMarkup();

        if( render === false) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

    update(data, render = true) {
        this._data = data;
        const markup = this._generateMarkup();

        if( render === false) return markup;

        const newDOM = document.createRange().createContextualFragment(markup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];

            if (
                !newEl.isEqualNode(curEl) &&
                newEl.firstChild?.nodeValue.trim() !== ''
            ) {
                curEl.textContent = newEl.textContent;
            }

            // Updates changed ATTRIBUES
            if (!newEl.isEqualNode(curEl))
                Array.from(newEl.attributes).forEach(attr =>
                    curEl.setAttribute(attr.name, attr.value)
                );
        });
    }

    _clear() {
        this._parentElement.innerHTML = "";
    }

    renderSpinner() {
        const markup = `
              <div class="wrapper">
                <div class="spinner spinner3"></div>
              </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

}