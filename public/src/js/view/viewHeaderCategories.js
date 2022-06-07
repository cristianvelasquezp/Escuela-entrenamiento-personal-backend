import View from './view';
import svg from '../../img/sprite.svg'

class ViewHeaderCategories extends View {

    _parentElement = document.querySelector('.header');

    _generateMarkup() {
        const categories = this._orderCategories(this._data.categories)
        console.log(this._data.currentCategory);
        return `
            <div class="header__categories">
                
                <div class="icon-box">
                    <a href="#" class="icon-box__link">    
                        <svg class="icon-box__svg"><use href="${svg}#icon-todos"></use></svg>
                        <div class="icon-box__title">All</div>
                    </a>
                </div>
                ${categories.map(category => this._categoryMarkup(category)).join(' ')}
        `
    }

    _categoryMarkup(category){
        return`
            <div class="icon-box ${category.slug === this._data.currentCategory? 'icon-box__active': ''}">
                <a href="#" class="icon-box__link" data-id="${category.id}" data-category="${category.slug}">
                    <svg class="icon-box__svg"><use href="${svg}#${category.icon}"></use></svg>
                    <div class="icon-box__title">${category.name}</div>
                </a>
            </div>
        `
    }

    _orderCategories(categories) {
        categories.sort( (a, b) => {
            return a.position - b.position;
        })
        return categories;
    }

}

export default new ViewHeaderCategories();