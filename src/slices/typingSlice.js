import { createSlice } from "@reduxjs/toolkit";

const typingSlice = createSlice({
  name: "typing",
  initialState: {
    paragraph:
      "This is a typing test. Type this paragraph as fast as you can. You can see your typing speed and accuracy at the end of the test.",
    isStarted: false,
    checkParagraph: [],
    currentIndex: 0,
    points: 0,
  },
  reducers: {
    startTyping(state) {
      state.isStarted = true;
    },
    checkTyping(state, action) {
      const { inputChar } = action.payload;
      const expectedChar = state.paragraph[state.currentIndex];

      if (inputChar === expectedChar) {
        state.checkParagraph[state.currentIndex] = inputChar;
        state.points += 1;
      } else {
        state.checkParagraph[state.currentIndex] = null;
      }

      state.currentIndex += 1;
    },
  },
});

export const { startTyping, checkTyping } = typingSlice.actions;

export default typingSlice.reducer;
