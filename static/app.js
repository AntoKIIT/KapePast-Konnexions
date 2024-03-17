document.getElementById('fan-control-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const speed = document.querySelector('#fan-control-form input[name="speed"]').value;

    try {
        const response = await fetch('/control_fan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `speed=${speed}`
        });

        const data = await response.json();
        if (data.success) {
            console.log('Fan speed controlled successfully');
        } else {
            console.error('Error controlling fan speed:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('ac-control-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const action = document.querySelector('#ac-control-form select[name="action"]').value;
    const value = document.querySelector('#ac-control-form input[name="value"]').value;

    try {
        const response = await fetch('/control_ac', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action=${action}&value=${value}`
        });

        const data = await response.json();
        if (data.success) {
            console.log('AC controlled successfully');
        } else {
            console.error('Error controlling AC:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('led-control-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const action = document.querySelector('#led-control-form select[name="action"]').value;
    const value = document.querySelector('#led-control-form input[name="value"]').value;

    try {
        const response = await fetch('/control_led', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action=${action}&value=${value}`
        });

        const data = await response.json();
        if (data.success) {
            console.log('LED controlled successfully');
        } else {
            console.error('Error controlling LED:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('bulb-control-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const action = document.querySelector('#bulb-control-form select[name="action"]').value;
    const value = document.querySelector('#bulb-control-form input[name="value"]').value;

    try {
        const response = await fetch('/control_bulb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action=${action}&value=${value}`
        });

        const data = await response.json();
        if (data.success) {
            console.log('Bulb controlled successfully');
        } else {
            console.error('Error controlling bulb:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});