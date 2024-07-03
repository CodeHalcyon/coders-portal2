import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventCard = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: 'ai',
                        apiKey: '12fe6232bfb847dfb1b021602cb5f221'
                    }
                });
                setArticles(response.data.articles);
                console.log(response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className='w-1/2 text-4xl m-auto text-center'>Loading...</p>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className='flex flex-wrap gap-2'>
            {articles
                .filter(article => article.title !== "[Removed]")
                .map((article, index) => (
                    <div key={index} className='border-2 w-1/2 m-auto flex flex-col p-6 gap-9 my-4'>
                        <div>
                            <img className='w-3/4' src={article.urlToImage} alt={article.title} />
                        </div>
                        <div>
                            <div className='font-bold text-3xl'>{article.title}</div>
                            <div className='font-extralight my-3'>Author: {article.author}</div>
                            <div>{article.description}</div>
                        </div>
                        <div>
                            <a href={article.url} className='bg-green-400 p-5 font-bold text-green-800 rounded-3xl' target='_blank' rel='noopener noreferrer'>
                                Register Here
                            </a>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default EventCard;
