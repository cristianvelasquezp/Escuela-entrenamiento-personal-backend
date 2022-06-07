import View from './view';

class ViewHeaderText extends View {

    _parentElement = document.querySelector('.header');

    _generateMarkup(){
        return `
            <div class="header__text">
                <h1 class="heading-primary mb-medium">RUTINAS POR OBJETIVOS</h1>
                <p class="paragraph">Ya has creado un hábito de entrenamiento, ¡conviértelo en tu estilo de vida!</p>
            </div>
        `
    }

}

export default new ViewHeaderText();