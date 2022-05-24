export default class View {

    _data;

    render(data, render = true){
        this._data = data;
        const markup = this._generateMarkup();

        if( render === false) return markup;

        this.clear();
        this._parentElement.insertAdjacentHTML('beforebegin', markup)
    }

    clear() {
        this._parentElement.innerHTML = "";
    }

}