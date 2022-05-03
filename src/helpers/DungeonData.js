export const DungeonData = {
  dungeonName: "Plaguefall",
  dungeonLevel: 60,
  dungeonDifficulty: "Normal",
  dungeonReward: { gold: 200, xp: 200 },
  dungeonTime: 60,
};

export function startTimer(sec) {
  let countdown = setInterval(() => {
    sec--;
    if (sec === 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(this.countdown);
}
