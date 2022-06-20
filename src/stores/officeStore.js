import { defineStore } from "pinia";

export const useOfficeStore = defineStore({
  id: "officeStore",
  state: () => ({
    time: 8,
    timerStarted: false,
    dayNumber: 0,
    workToBeDone: 0,
    workDone: 0,
    wpc: 1,
    mpc: 1,
    wps: 0,
    mps: 0,
  }),
  actions: {
    startDay() {
      this.startTimer();
      this.calculateWorkToBeDone();
    },
    startTimer() {
      this.time = 8;
      this.timerStarted = true;
      let officeTimer = setInterval(() => {
        if (this.time < 16) {
          this.time++;
        }
        if (this.time === 16) {
          clearInterval(officeTimer);
          this.timerStarted = false;
          this.dayNumber++;
        }
      }, 3000);
    },
    calculateWorkToBeDone() {
      this.workToBeDone = 30 * (this.dayNumber + 1);
    },
  },
});
