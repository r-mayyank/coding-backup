import { atom, selector } from "recoil";


export const networkAtom = atom({
    key:"networkAtom",
    default:104
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
})

export const notificationAtom = atom({
    key:"notificationAtom",
    default:12
})

export const messaingAtom = atom({
    key:"messaingAtom",
    default:0
})

export const totalNotiSelector = selector({
    key: "totalNotiSelector",
    get: ({get}) => {
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const notification = get(notificationAtom);
        const messaging = get(messaingAtom);

        return network + jobs + notification + messaging
    }
})