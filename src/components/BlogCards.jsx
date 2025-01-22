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
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className='text-2xl text-center text-gray-600'>Loading...</p>;
    if (error) return <div className='text-center text-red-500'>Error: {error.message}</div>;

    return (
        <div className='grid gap-6 p-6 mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {articles
                .filter(article => article.title !== "[Removed]")
                .map((article, index) => (
                    <div key={index} className='overflow-hidden border border-gray-300 rounded-lg shadow-lg'>
                        <img loading='lazy' className='object-cover w-full h-64' src={article.urlToImage} alt={article.title} />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-gray-800'>{article.title}</h3>
                            <p className='my-2 text-sm text-gray-500'>{article.author || "Unknown Author"}</p>
                            <p className='text-sm text-gray-700'>{article.description}</p>
                        </div>
                        <div className='p-4'>
                            <a href={article.url} className='block py-2 font-semibold text-center text-white transition-all bg-black rounded-full hover:bg-green-600' target='_blank' rel='noopener noreferrer'>
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default EventCard;
