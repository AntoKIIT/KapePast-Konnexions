document.getElementById('fan-control-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const action = document.getElementById('fan-action').value;
    const value = document.getElementById('fan-value').value;

    try {
        const response = await fetch('/control_fans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action=${action}&value=${value}`
        });

        const data = await response.json();
        if (data.success) {
            console.log('Fans controlled successfully');
        } else {
            console.error('Error controlling fans:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('light-control-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const action = document.getElementById('light-action').value;
    const value = document.getElementById('light-value').value;

    try {
        const response = await fetch('/control_lights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action=${action}&value=${value}`
        });

        const data = await response.json();
        if (data.success) {
            console.log('Lights controlled successfully');
        } else {
            console.error('Error controlling lights:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('equipment-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const equipment = document.getElementById('equipment').value;
    const action = document.getElementById('equipment-action').value;
    const value = document.getElementById('equipment-value').value;

    try {
        const response = await fetch('/control_equipment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `equipment=${equipment}&action=${action}&value=${value}`
        });

        const data = await response.json();
        if (data.success) {
            console.log('Equipment controlled successfully');
        } else {
            console.error('Error controlling equipment:', data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});