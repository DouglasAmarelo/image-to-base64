import '../styles/style.scss';

const app = () => {
  const start = () => {
    console.log('@ Starting...');
  };

  return {
    start,
  };
};

const { start } = app();

start();
