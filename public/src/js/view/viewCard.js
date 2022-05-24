import View from "./view";

class ViewCard extends View {

    _parentElement = document.querySelector('workout-sections .container');

    _generateMarkup() {
        return `
            <div class="card">
                <a href="#" class="card__link">
                    <img class="card__img" src="${this._data.image}">
                    <div class="card__content">
                        ${this._data.hardness ? '<span class="card__hardness">' + this._data.hardness + '</span>' : '' }
                        <h3 class="card__title">${this._data.name}</h3>
                        ${this._data.hardness ? '<span class="card__date">' + this._data.date + '</span>' : '' }
                    </div>
                </a>
            </div>
        `;

    }
}

export default new ViewCard();