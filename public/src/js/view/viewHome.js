import View from './view';
import ViewCard from './viewCard'
import {images} from "../helpers";

class ViewHome extends View {

    _parentElement = document.querySelector('.app');

    addHandlerRender(handler) {
        ['hashchange', 'load'].forEach( ev => window.addEventListener(ev, handler));
    }

    _generateMarkup(){
        return `
            <section class="workout-sections">
                <div class="container">
                    <h2 class="heading-secondary mb-medium">ENTRENAMIENTOS DEL DÍA</h2>
                    ${this._generateDayWorkout()}
                    
                    <h2 class="heading-secondary mb-medium">TIPOS DE ENTRENAMIENTO</h2>
                    ${this._generateCategories()}
                </div>
            </section>
        `
    }

    _generateCategories() {

        let html = "";

        this._data.video.categories.forEach( (category, index, categories) => {

            if ( index === 0 ) {
                html += `<div class="card-group">`;
            }

            html += ViewCard.render(category, false);

            if ( ((index + 1) % 3 === 0 )
                && index !== 0
                && index !== categories.length ) {

                html += `</div><div class="card-group">`;
            }

            if ( index === categories.length ) {
                html += `</div>`;
            }

        })
        return html;
    }

    _generateDayWorkout() {
        return `
            <div class="card-group mb-big">
                ${this._data.video.lastVideos.map(category => ViewCard.render(category, false)).join('')}
            </div>
        `
    }

}

export default new ViewHome();