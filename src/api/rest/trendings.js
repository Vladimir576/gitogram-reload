import { makeRequest } from "../requests/requests"
import { formattedDate } from "@/utils/dateAgo";

export const getTrendings = (lang = 'javascript') => {
   
    let dateAnswer = formattedDate();
    console.log('formattedData', dateAnswer)

    let params = new URLSearchParams();
    params.append('order', 'desc');
    params.append('sort', 'stars');
    params.append('per_page', 10);
    params.append('q', `language:${lang} created:>${dateAnswer}`);

    return makeRequest({
        url: `/search/repositories?${params}`, // replace line

    })
}