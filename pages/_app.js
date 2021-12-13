import '../styles/globals.sass';
import NextNProgress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        color='#ff1919'
        startPosition={0.9}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
