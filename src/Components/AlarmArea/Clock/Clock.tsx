import { useEffect, useState } from "react";

function Clock(): JSX.Element {

    const [time, setTime] = useState<string>();
    const [date, setDate] = useState<string>();

    useEffect(() => {
        const now = new Date();
        setTime(now.toLocaleTimeString());
        setDate(now.toLocaleDateString());

        const timerId = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
            setDate(now.toLocaleDateString());
        }, 1000);

        // Returning a function which will be invoked when the component unmount (destroyed):
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <span>{time}</span>
            <br />
            <span>{date}</span>
        </div>
    );

}

export default Clock;
