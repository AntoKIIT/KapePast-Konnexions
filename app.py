from flask import Flask, render_template, request, jsonify
import smart_home_api

app = Flask(__name__)

# Initialize the smart home API
# smart_home = smart_home_api.SmartHome(api_key='your_api_key')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/control_fans', methods=['POST'])
def control_fans():
    action = request.form.get('action')
    value = request.form.get('value')

    try:
        smart_home.control_fans(action, value)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/control_lights', methods=['POST'])
def control_lights():
    action = request.form.get('action')
    value = request.form.get('value')

    try:
        smart_home.control_lights(action, value)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/control_equipment', methods=['POST'])
def control_equipment():
    equipment = request.form.get('equipment')
    action = request.form.get('action')
    value = request.form.get('value')

    try:
        smart_home.control_equipment(equipment, action, value)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)