import { makeRequest } from "../requests/requests"
import { formattedDate } from "@/utils/dateAgo";
export const getTrendings = (lang = 'javascript') => {

    // console.log(lang);
    // let now = new Date();
    // let weekMS = 7 * 24 * 60 * 60 * 1000;
    // console.log('before', now)
    // let weekAgo = new Date(Date.now() - weekMS);
    // let formattedDate = weekAgo.toISOString().split('T')[0];
    let dateAnswer = formattedDate();
    console.log('formattedData', dateAnswer)


    // console.log(weekMS)

    let params = new URLSearchParams();
    params.append('order', 'desc');
    params.append('sort', 'stars');
    params.append('per_page', 10);
    params.append('q', `language:${lang} created:>${dateAnswer}`);

    return makeRequest({
        url: `/search/repositories?${params}`,

    })
}