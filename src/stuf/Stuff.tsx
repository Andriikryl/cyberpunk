const isChans = (percent: number): boolean =>
  Math.floor(Math.random() * 100) + 1 <= percent;

console.log(isChans);

const lvlCup = (lvl: number) => {
  return (((lvl + 1) * (lvl + 1 - 1)) / 2) * 10;
};

console.log(lvlCup);
