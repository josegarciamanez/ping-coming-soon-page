import Head from 'next/head';

const Home = () => (
  <div className='container'>
    <Head>
      <title>Frontend Mentor | Ping coming soon page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <img src='/images/logo.svg' alt='logo' />
      <h2>
        We are launching <span>soon!</span>
      </h2>
      <p>Subscribe and get notified</p>
      <input type='text' placeholder='Your email adress...' />
      <button>Notify Me</button>
      <img
        className='dashboard'
        src='/images/illustration-dashboard.png'
        alt='dashboard'
      />
      <div className='social'>
        <i className='fab fa-facebook-f'></i>
        <i className='fab fa-twitter'></i>
        <i className='fab fa-instagram'></i>
      </div>
      <p className='copy'>&copy; Copyright Ping. All rights reserved.</p>
    </main>

    <footer>
      <p className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://josegarciamanez.github.io/' target='_blank'>
          @josegarciamanez
        </a>
        .
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
        padding: 3rem 0 1rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      h2 {
        font-size: 20px;
        color: var(--neutral-light);
        font-weight: 300;
        margin-top: 50px;
      }

      h2 span {
        color: black;
        font-weight: 700;
      }

      p {
        font-size: 12px;
        color: var(--neutral-dark);
        font-weight: 600;
        margin-top: 0;
      }

      p.copy {
        font-size: 10px;
        color: var(--neutral-light);
      }

      footer {
        text-align: center;
        width: 100%;
        height: 20px;
      }

      a {
        text-decoration: none;
      }

      .attribution {
        font-size: 9px;
        text-align: center;
      }
      .attribution a {
        color: #3e52a3;
      }
      img.dashboard {
        margin-top: 30px;
        max-width: 80vw;
      }
      .social {
        margin: 20px 0;
        display: inline-flex;
      }

      i {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--primary);
        border-radius: 50%;
        font-size: 15px;
        padding: 2px;
        min-width: 28px;
        min-height: 28px;
        color: var(--primary);
        margin-left: 12px;
      }

      input {
        min-width: 90%;
        height: 30px;
        opacity: 0.3;
        border: 1px solid var(--primary);
        border-radius: 15px;
        padding-left: 20px;
      }
      button {
        margin-top: 10px;
        min-width: 90%;
        height: 30px;
        background: var(--primary);
        color: white;
        border-radius: 15px;
        border: 1px solid var(--primary);
        box-shadow: 0 2px 8px var(--primary);
      }

      @media (min-width: 767px) {
      }
    `}</style>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Libre+Franklin:300,600,700&display=swap');
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css');
      body {
        background: var(--color-background);
        padding: 0;
        margin: 0;
        font-family: 'Libre Franklin', sans-serif;
        overflow: hidden;
      }
      * {
        box-sizing: border-box;
      }
      :root {
        --color-background: white;
        --primary: #4f7df3;
        --secondary: #c2d3ff;
        --danger: #ff5263;
        --neutral-light: #969696;
        --neutral-dark: #151f29;
      }
    `}</style>
  </div>
);

export default Home;
