interface Result<T> {
    data: T | null,
    error: string | null
}

interface Course {
    title: string,
    price: number
}

interface Article {
    title : string
}

const fetchData = <T>(url: string): Result<T> => {
    console.log(url);
    return {data : null , error : null}
}

const tsCourse = fetchData<Course>("aurl")
const NodeJsArticle = fetchData<Article>("aurl")