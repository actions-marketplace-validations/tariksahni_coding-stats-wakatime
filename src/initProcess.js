import axios from 'axios';
import {WAKA_TIME_API_URL} from './static/url';
import {generateStatsSVG} from './utils/generateStatsSVG';
import {addAndPushToRepo} from './scripts/addAndPushToRepo';

export const initProcess = () => {
    const WAKATIME_API_KEY = process.env.INPUT_WAKATIME_API_KEY;
    const duration = process.env.INPUT_SHOW_MONTHLY === 'true' ? 30 : 7;
    axios.get(WAKA_TIME_API_URL(WAKATIME_API_KEY, duration)).then((response) => {
        generateStatsSVG(response.data, duration);
        addAndPushToRepo().then( () => console.log("Done and dusted"))
    }).catch(err => {
        return new Error(err)
    });
};


