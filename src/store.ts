import create from "zustand";

interface ICount {
    light: [number],
    setLight: (val: [number]) => void,
}

export const useStore = create<ICount>((set) => ({
    light: [0],
    setLight: (value) => {
        set(() => ({
            light: value
        }))
    }
}))
