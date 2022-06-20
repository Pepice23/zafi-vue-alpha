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

export const RaidData = {
  raidName: "Sepulcher of the First Ones",
  raidLevel: 60,
  raidDifficulty: "Normal",
  raidReward: { gold: 200, xp: 200 },
  raidTime: 300,
};

export const QuestData = {
  questName: "Birthday Party",
  questLevel: 60,
  questDifficulty: "Normal",
  questReward: { gold: 200, xp: 200 },
  questTime: 20,
};
