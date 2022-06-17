import { defineStore } from "pinia";

export const useOfficeStore = defineStore({
  id: "officeStore",
  state: () => ({
    time: 8,
    timerStarted: false,
  }),
  actions: {
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
        }
      }, 3000);
    },
  },
});
