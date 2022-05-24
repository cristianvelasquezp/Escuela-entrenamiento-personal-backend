import ViewHome from './view/viewHome'
import * as model  from "./model"
import * as helper from "./helpers"

const controlHome = async function() {
    console.log( helper.getPath(window.location.hash));
    await model.getWorkouts();
    ViewHome.render( model.state )
}

export default function init () {
    ViewHome.addHandlerRender(controlHome());
}