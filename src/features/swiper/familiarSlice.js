import { createSlice } from "@reduxjs/toolkit";
import angular from "../../resources/images/familiar/angular.png";
import codeigniter from "../../resources/images/familiar/codeigniter.png";
import css from "../../resources/images/familiar/css.png";
import docker from "../../resources/images/familiar/docker.png";
import github from "../../resources/images/familiar/github.png";
import go from "../../resources/images/familiar/go.png";
import html from "../../resources/images/familiar/html.png";
import java from "../../resources/images/familiar/java.png";
import javascript from "../../resources/images/familiar/javascript.png";
import laravel from "../../resources/images/familiar/laravel.png";
import mysql from "../../resources/images/familiar/mysql.png";
import node from "../../resources/images/familiar/node.png";
import php from "../../resources/images/familiar/php.png";
import postgresql from "../../resources/images/familiar/postgresql.png";
import python from "../../resources/images/familiar/python.png";
import react from "../../resources/images/familiar/react.png";
import redis from "../../resources/images/familiar/redis.png";
import sails from "../../resources/images/familiar/sails.png";
import vue from "../../resources/images/familiar/vue.png";

export const generateSlice = createSlice({
    name: "familiar",
    initialState: {
        data: [
            {
                'title': 'HTML',
                'image': html,
                'desc': 'Hypertext Markup Language.'
            }, {
                'title': 'CSS',
                'image': css,
                'desc': 'Cascading Style Sheets. \npreprocessor : SCSS.'
            }, {
                'title': 'JavaScript',
                'image': javascript,
                'desc': 'Programming language.'
            }, {
                'title': 'PHP',
                'image': php,
                'desc': 'Hypertext Preprocessor. \n Programming language.'
            }, {
                'title': 'Laravel',
                'image': laravel,
                'desc': 'PHP Framework.'
            }, {
                'title': 'Sails.js',
                'image': sails,
                'desc': 'MVC Framework for Node.js.'
            }, {
                'title': 'Node.js',
                'image': node,
                'desc': 'Cross-platform JavaScript runtime environment.'
            }, {
                'title': 'Java',
                'image': java,
                'desc': 'Programming language.'
            }, {
                'title': 'React',
                'image': react,
                'desc': 'A JavaScript library for building user interfaces.'
            }, {
                'title': 'PostgreSQL',
                'image': postgresql,
                'desc': 'Database.'
            }, {
                'title': 'MySQL',
                'image': mysql,
                'desc': 'Database.'
            }, {
                'title': 'Redis',
                'image': redis,
                'desc': 'Database.'
            }, {
                'title': 'Docker',
                'image': docker,
                'desc': 'A platform for developing, and running applications.'
            }, {
                'title': 'GitHub',
                'image': github,
                'desc': 'Version control system.'
            }, {
                'title': 'Angular',
                'image': angular,
                'desc': 'Still learning in Udemy.'
            }, {
                'title': 'Vue',
                'image': vue,
                'desc': 'Still learning in Udemy.'
            }, {
                'title': 'GO',
                'image': go,
                'desc': 'Still learning in Udemy.'
            }, {
                'title': 'CodeIgniter',
                'image': codeigniter,
                'desc': 'Still learning in Udemy.'
            }, {
                'title': 'Python',
                'image': python,
                'desc': 'Still learning in Udemy.'
            }
        ]
    },
    reducers: {
        // empty
    },
});

// Action creators are generated for each case reducer function
// export const { } = generateSlice.actions;

export default generateSlice.reducer;
