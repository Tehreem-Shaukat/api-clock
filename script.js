const clockElement = document.getElementById('clock');

async function fetchTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/ip');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        // Format time (HH:MM:SS)
        const timeStr = data.datetime.slice(11, 19);
        clockElement.textContent = timeStr;
    } catch (error) {
        clockElement.textContent = 'Error fetching time';
    }
}

// Initial fetch
fetchTime();
// Update every second by re-fetching from API
setInterval(fetchTime, 1000);