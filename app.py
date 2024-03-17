from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/control_fan', methods=['POST'])
def control_fan():
    speed = request.form.get('speed')

    try:
        # Call the smart home API method to control the fan speed
        smart_home_api.control_fan_speed(speed)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/control_led', methods=['POST'])
def control_led():
    action = request.form.get('action')
    value = request.form.get('value')

    try:
        # Call the smart home API method to control the LED
        if action == 'turn_on':
            smart_home_api.turn_on_led(value)
        elif action == 'turn_off':
            smart_home_api.turn_off_led(value)
        else:
            smart_home_api.set_led_brightness(value)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/control_ac', methods=['POST'])
def control_ac():
    action = request.form.get('action')
    value = request.form.get('value')

    try:
        # Call the smart home API method to control the AC
        if action == 'turn_on':
            smart_home_api.turn_on_ac(value)
        elif action == 'turn_off':
            smart_home_api.turn_off_ac()
        else:
            smart_home_api.set_ac_temperature(value)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/control_bulb', methods=['POST'])
def control_bulb():
    action = request.form.get('action')
    value = request.form.get('value')

    try:
        # Call the smart home API method to control the bulb
        if action == 'turn_on':
            smart_home_api.turn_on_bulb(value)
        elif action == 'turn_off':
            smart_home_api.turn_off_bulb(value)
        else:
            smart_home_api.set_bulb_brightness(value)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)