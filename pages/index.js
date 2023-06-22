import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(data) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spaceship Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="bg-gray-100 d-flex flex-column align-items-center justify-content-center">
        
            <div className="container">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <h1 className="text-center">Explore Our Storage Space, Co-Working Space, Co-Warehouse & Services</h1>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <h5 className="text-center text-muted">Carefully crafted for a hassle-free and affordable experience</h5>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            
                <div className="row row-cols-2 row-cols-md-4 g-4 mt-8">
                {data && data.data.length > 0 ? (
                data.data.map((item) => (
                    <div key={item.id} className="col-md-3">
                        <div className="bg-white rounded p-4 d-flex flex-column align-items-start">
                        <img src={item.image} alt={item.title} className="w-10 mb-2" />
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-left text-muted">{item.description}</p>
                        <a href='#' className="mt-auto text-info text-decoration-none">Learn More →</a>
                        </div>
                    </div>
                    ))
                    ) : (
                    <p>No data available</p>
                    )}
                </div>

            </div>

        </div>

    </div>
  )
}

export async function getServerSideProps() {
    try {
        const url = `http://127.0.0.1:8000/api/section/get`;

        const response = await fetch(url, {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }

        const data = await response.json();
        return {
            props: {
            data: data.body,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
            data: [],
            },
        };
    }
}
