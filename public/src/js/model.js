import { API_URL } from './config.js';
import { images, getJSON, getDate } from "./helpers.js";

export const state = {
    workout : {
        page:'home',
        videos:[],
        categories:[],
        currentCategory: ''
    },
}

export const loadWorkoutsVideo = async function() {
    try {
        const data = await getJSON(`${API_URL}workout/?limit=3`);
        state.workout.videos = data.data.workouts.map( workout => {
            return {
                id: workout._id,
                name: workout.name,
                hardness: workout.hardness,
                date: getDate(workout.date),
                thumbnail: workout.thumbnail,
                thumbnail2x: workout.thumbnail2x,
                category: workout.category
            }
        })
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const loadWorkoutCategories = async function () {
    try {
        const data = await getJSON(`${API_URL}category/`);
        state.workout.categories = data.data.categories.map( category => {
            return {
                id: category._id,
                name: category.name,
                thumbnail: category.thumbnail,
                thumbnail2x: category.thumbnail2x,
                slug: category.slug,
                position: category.Position,
                icon: category.icon,
                inHome: category.inHome
            }
        })
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const loadVideosByCategory = async function(categoryId) {
    try {
        let data;
        if (categoryId === undefined) {
            data = await getJSON(`${API_URL}workout/`);
        }else {
            data = await getJSON(`${API_URL}workout/?categoryId=${categoryId}`);
        }
        state.workout.videos = data.data.workouts.map( workout => {
            return {
                id: workout._id,
                name: workout.name,
                hardness: workout.hardness,
                date: getDate(workout.date),
                thumbnail: workout.thumbnail,
                thumbnail2x: workout.thumbnail2x,
                category: workout.category
            }
        })
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const setPage = function (page) {
    state.workout.page = page;
}

export const setCurrentCategory = function (category) {
    state.workout.currentCategory = category;
}