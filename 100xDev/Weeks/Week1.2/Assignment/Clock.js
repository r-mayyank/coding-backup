function updatetime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const sec = now.getSeconds();

    console.log(hours + ":" + minutes + ":" + sec);
}
updatetime();
setInterval(updatetime, 1000);