import { atom, selector, useRecoilValue } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    return get(minuteState) / 60;
  },
  set: ({ set }, newValue) => {
    const minute = +newValue * 60;

    set(minuteState, minute);
  },
});
