import requests

class SmartHome:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = 'https://kodessphere-api.vercel.app'

    def control_fans(self, action, value):
        endpoint = f'{self.base_url}/fans'
        payload = {
            'action': action,
            'value': value
        }
        headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }
        response = requests.post(endpoint, json=payload, headers=headers)
        response.raise_for_status()

    def control_lights(self, action, value):
        endpoint = f'{self.base_url}/lights'
        payload = {
            'action': action,
            'value': value
        }
        headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }
        response = requests.post(endpoint, json=payload, headers=headers)
        response.raise_for_status()

    def control_equipment(self, equipment, action, value):
        endpoint = f'{self.base_url}/equipment/{equipment}'
        payload = {
            'action': action,
            'value': value
        }
        headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }
        response = requests.post(endpoint, json=payload, headers=headers)
        response.raise_for_status()