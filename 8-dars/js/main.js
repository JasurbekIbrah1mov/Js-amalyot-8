//boshlash
const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 1000); //1000 = 1 sec
};

//tugatish
const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 7000); //1000 = 7 sec
};

start();
stop();
