class CalculationsService {

    public hoursCalculation(futureTime: string): string {

        // Calculate the remaining time until the beep time
        const now = new Date();
        const [hours, minutes] = futureTime.split(':').map(Number);
        const wakeUpTime = new Date();
        wakeUpTime.setHours(hours, minutes, 0, 0);

        // If the set time has already passed today, we will move it to tomorrow
        if (wakeUpTime <= now) {
            wakeUpTime.setDate(wakeUpTime.getDate() + 1);
        }

        const timeDifference = wakeUpTime.getTime() - now.getTime();

        const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        return remainingHours > 0 ? `${remainingHours}h ${remainingMinutes}m` : `${remainingMinutes}m`;
    }

    public getColorByHour(): string {
        const now = new Date();
        let hour = now.getHours();
        if (hour > 12) hour = 24 - hour;
        const hue = Math.floor(hour * 255 / 12);
        const color = `rgb(${hue},${hue},${hue})`;
        return color;
    }
}

export const calculationsService = new CalculationsService();
