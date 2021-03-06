import Head from 'next/head';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
      <Formik
        initialValues={{
          email: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Email cannot be empty';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Please provide a valid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          resetForm({});
        }}>
        {({ errors, isSubmitting }) => (
          <Form className='white-card mt-2' noValidate>
            {errors.email ? (
              <Field
                type='email'
                name='email'
                className='email'
                placeholder='Your email adress...'
                style={{
                  border: '1px solid red',
                  borderRadius: '15px',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 10px center',
                }}
              />
            ) : (
              <Field
                className='email'
                type='email'
                name='email'
                placeholder='Your email adress...'
              />
            )}
            <ErrorMessage
              name='email'
              component='h5'
              style={{ color: 'red' }}
            />
            <button type='submit' disabled={isSubmitting}>
              Notify Me
            </button>
          </Form>
        )}
      </Formik>

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

      @media (min-width: 767px) {
        h2 {
          font-size: 40px;
          margin-top: 30px;
        }

        img.dashboard {
          max-width: 40vw;
        }
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

      form {
        width: 100%;
      }
      input {
        min-width: 100%;
        height: 30px;
        opacity: 0.3;
        border: 1px solid var(--primary);
        border-radius: 15px;
        padding-left: 20px;
      }
      input:focus {
        outline: none;
      }

      button {
        margin-top: 10px;
        min-width: 100%;
        height: 30px;
        background: var(--primary);
        color: white;
        border-radius: 15px;
        border: 1px solid var(--primary);
        box-shadow: 0 2px 8px var(--primary);
        cursor: pointer;
      }

      button:disabled,
      button[disabled] {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
        cursor: not-allowed;
      }

      h5 {
        margin: 0;
        font-weight: 300;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
