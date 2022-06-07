import View from './view';
import ViewCard from './viewCard'

class ViewVideos extends View {

    _parentElement = document.querySelector('.app');

    _generateMarkup(){
            return `
            <section class="workout-sections">
                <div class="container">
                    <h2 class="heading-secondary mb-medium">ENTRENAMIENTOS DE ${this._data.currentCategory}</h2>
                    ${this._generateWorkout()}
                </div>
            </section>
        `
    }

    _generateWorkout() {

        let html = "";

        if(this._data.videos.length === 0) {
            html = "There are not videos in this category";
        }else{
            this._data.videos.forEach( (video, index, videos) => {

                video.type = "video";

                if ( index === 0 ) {
                    html += `<div class="card-group">`;
                }

                html += ViewCard.render(video, false);

                if ( ((index + 1) % 3 === 0 )
                    && index !== 0
                    && index !== videos.length ) {

                    html += `</div><div class="card-group">`;
                }

                if ( index === videos.length ) {
                    html += `</div>`;
                }

            })
        }

        return html;
    }

}

export default new ViewVideos();