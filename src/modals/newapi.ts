export interface NewsApi{
    status: number,
    totalResults: number,
    articles: [
        {
            source: {
                id: string,
                name: string
            },
            author: string,
            title: string,
            description: string,
            url: string,
            urlToImage: string,
            publishedAt: string,
            content: string
        }
    ]
}