/* this file would handle reading/saving from the URL but no time.

    would do something like create a character json with all the attribute values/skills 

    then make api call with it to
    https://recruiting.verylongdomaintotestwith.ca/api/{{jho899}}/character

    can be read using something like: 
    try {
        const response = await fetch(`https://recruiting.verylongdomaintotestwith.ca/api/{{jho899}}/character`);
        const data = await response.json();
        return {
            data,
            status: response.status,
            statusText: response.statusText,
        };
    } catch (error) {
        // You can handle or log the error here
        throw new Error('error');
    }

    can be saved using something like: 
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const fetchResponse = await fetch(`https://recruiting.verylongdomaintotestwith.ca/api/{{jho899}}/character`, settings);
        const data = await fetchResponse.json();
        return data;
    }

    would read by using a useEffect with no depedency array so it would trigger on intial load
*/