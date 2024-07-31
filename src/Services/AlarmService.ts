class AlarmService {
    public formatTimeWithLeadingZero(date: Date): string {
        const dateObj = new Date(date);
        const hours = dateObj.getHours().toString().padStart(2, '0');
        const minutes = dateObj.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
}

export const alarmService = new AlarmService();