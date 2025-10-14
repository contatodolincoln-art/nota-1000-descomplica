import os
from flask import Flask, send_from_directory

# Caminho absoluto da pasta onde está o build do frontend
frontend_build_path = os.path.join(os.path.dirname(__file__), '../frontend/dist')

app = Flask(__name__, static_folder=frontend_build_path, static_url_path='')

# Rota principal -> serve o index.html
@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

# Rota para arquivos estáticos (JS, CSS, imagens, etc.)
@app.route('/<path:path>')
def serve_static_files(path):
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        # se o arquivo não existir, retorna index.html (para apps SPA do React)
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    # Cloud Run define a variável de ambiente PORT automaticamente
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
