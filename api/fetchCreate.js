const cohort = '2209-ftb-et-web-am';


export const fetchPost = async ({
    token,
    title,
    description,
    price,
    willDeliver
}) => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Bearer `${token}`
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price,
                    willDeliver
                }
            })
        })
    } 
    catch (error) { 

    }
}
