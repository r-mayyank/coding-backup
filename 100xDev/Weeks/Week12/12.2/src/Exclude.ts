type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, "scroll">

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling evert ${event}`);
};

handleEvent('click')
handleEvent('scroll')