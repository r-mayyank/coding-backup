import { atom, selector } from "recoil";

export const countAtom = atom({
    key: 'countAtom',
    default: 0
});

export const evenCount = selector({
    key: 'evenCount',
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
})