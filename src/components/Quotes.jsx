import { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'gNic433/7fQRomOXE7AZ8Q==r2WSl2KJTQfj1hCK',
          },
        });
        if (response.ok) {
          const fetchedQuotes = await response.json();
          setQuotes(fetchedQuotes);
        } else {
          setError('Error fetching quotes.');
        }
      } catch (error) {
        setError('Error fetching quotes. Please try again later.');
      }
      setIsLoading(false);
    };

    fetchQuotes();
  }, []);

  let content = '';
  if (isLoading) {
    content = <div className="col-6 d-flex justify-content-center mt-3 backCarrot text-light rounded">Loading...</div>;
  } else if (error) {
    content = <div className="col-6 alert alert-danger">{error}</div>;
  } else if (quotes.length > 0) {
    content = (
      <div className="row">
        <ul className="col-12 col-md list-group">
          {quotes.map((quote) => (
            <li className="p-3 rounded-4 d-flex justify-content-center backCarrot " key={new Date().getTime().toString()}>
              <div className="d-flex justify-content-center align-items-center p-5 g-3 bg-success rounded w-60">
                <div className="text-light bg-success ">
                  &quot;
                  {quote.quote}
                  &quot;
                  <hr className="" />
                  <div className="d-flex justify-content-center mt-3 bg-success">{quote.author}</div>

                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    content = <li className="col-6 list-group-item text-bg-danger p-3 rounded d-flex justify-content-center">No quotes available!</li>;
  }

  return <div className="container d-flex justify-content-center mt-5">{content}</div>;
};

export default Quotes;
