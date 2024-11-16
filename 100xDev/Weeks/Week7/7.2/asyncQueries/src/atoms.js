import { atom, selector } from "recoil";

//Asynchronous data queries
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkSelector",
        get: async() => {
            const res = await.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})