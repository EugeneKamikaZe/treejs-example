import create from "zustand";

interface ICount {
    light: [number],
    setLight: (val: [number]) => void,

    lightPosition: any,
    setLightPosition: any,
}

export const useStore = create<ICount>((set, get) => ({
    light: [0],
    setLight: (value) => {
        set(() => ({
            light: value
        }))
    },

    lightPosition: [2, 2, 3],
    setLightPosition: (value: number, chord: number) => {
        const {lightPosition} = get()

        set({
            lightPosition: lightPosition.map((item: any, index: number, lightPosition: any) => (
                chord === index ? lightPosition[index] = value : lightPosition[index]
            ))
        })
    },
}))
