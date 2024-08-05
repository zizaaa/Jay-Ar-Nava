import React, { useEffect, useState } from 'react';
import { ImQuotesLeft, ImQuotesRight } from '../../icons';
import axios from 'axios';

function Footer({ isDark }) {
    const [quotesOftheDay, setQuotes] = useState('');
    const [error, setError] = useState('');

    const env = import.meta.env;
    const key = env.VITE_REACT_API_KEY;
    const host = env.VITE_REACT_API_HOST;

    const handleNavigate = (path) => {
        document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    };

    const getRandomParameter = () => {
        // Generate a random number between 1 and 100 as an example
        return Math.floor(Math.random() * 624) + 1;
    };

    const handleFetchQuotes = async (randomParam) => {
    const options = {
        method: 'GET',
        url: `https://motivational-content.p.rapidapi.com/quotes/${randomParam}`,
        headers: {
            'x-rapidapi-key': `${key}`,
            'x-rapidapi-host': `${host}`
        }
    };

        try {
        const response = await axios.request(options);
        if (response.data.quote) {
            setQuotes(response.data.quote);
            const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
            localStorage.setItem('quoteOfTheDay', response.data.quote);
            localStorage.setItem('quoteFetchDate', today);
            localStorage.setItem('quoteParam', randomParam);
        } else {
            setError("Sad to say, but there's no quote for today.");
        }
        } catch (error) {
            console.error(error);
            setError("Sad to say, but there's no quote for today.");
        }
    };

    useEffect(() => {
        const savedQuote = localStorage.getItem('quoteOfTheDay');
        const fetchDate = localStorage.getItem('quoteFetchDate');
        const today = new Date().toISOString().split('T')[0];

        if (fetchDate !== today) {
            const randomParam = getRandomParameter();
            handleFetchQuotes(randomParam);
        } else if (savedQuote) {
            setQuotes(savedQuote);
        } else {
            setError("Sad to say, but there's no quote for today.");
        }
    }, []);

    return (
        <footer className='border-t-[1px] border-gray mt-5 p-5'>
            <div className='flex flex-row max-[700px]:flex-col gap-2 max-[500px]:items-start items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={isDark ? '/logo_2.png' : '/logo_blue.png'} className='w-10 h-10' />
                    <h1 className='font-bold dark:text-white'>Jay Ar Nava</h1>
                </div>
                <ul className='flex flex-row max-[500px]:flex-col max-[500px]:mt-5 gap-5 text-gray font-medium cursor-pointer'>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('start')}>
                        Start
                    </li>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('skills')}>
                        Skills
                    </li>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('experience')}>
                        Experience
                    </li>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('projects')}>
                        Projects
                    </li>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('education')}>
                        Education
                    </li>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('certificates')}>
                        Certificates
                    </li>
                </ul>
            </div>
            <div className='flex flex-row max-[860px]:flex-col items-center justify-between mt-10'>
                <div className='w-80 max-[860px]:w-full flex flex-col max-[860px]:items-center gap-1'>
                    <h1 className='text-gray'>Quote of the day:</h1>
                    <div className='flex gap-2 text-sm max-[860px]:text-xl max-[860px]:text-center'>
                        <span className='text-blue dark:text-neon'>
                            <ImQuotesLeft />
                        </span>
                        <p className='text-white'>
                            {quotesOftheDay || error}
                        </p>
                        <span className='text-blue dark:text-neon'>
                            <ImQuotesRight />
                        </span>
                    </div>
                </div>
                <div className='text-gray text-[12px] w-96 max-[860px]:w-full gap-1 flex flex-col max-[860px]:items-center max-[860px]:mt-5'>
                    <span>
                        This portfolio is open source. Feel free to use it, but don't forget to leave a ⭐ on the repo. You can find
                        the repository <a href='https://github.com/zizaaa/Jay-Ar-Nava' className='font-medium underline'>here</a>.
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
