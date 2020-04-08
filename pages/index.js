import Head from 'next/head';

const Home = () => (
  <div className='container'>
    <Head>
      <title>Frontend Mentor | Ping coming soon page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      We are launching soon! Subscribe and get notified Notify Me &copy;
      Copyright Ping. All rights reserved.
    </main>

    <footer>
      <p class='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='#'>@josegarciamanez</a>.
      </p>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        text-align: center;
        width: 100%;
        height: 50px;
        border-top: 1px solid #eaeaea;
      }

      footer img {
        margin-left: 0.5rem;
      }

      a {
        text-decoration: none;
      }

      .attribution {
        font-size: 11px;
        text-align: center;
      }
      .attribution a {
        color: #3e52a3;
      }

      @media (min-width: 767px) {
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
