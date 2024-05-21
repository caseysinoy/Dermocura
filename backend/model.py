from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os

# Define a temporary folder to store uploads
UPLOAD_FOLDER = '/tmp/uploads'

app = Flask(__name__)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

def allowed_file(filename):
  return '.' in filename and \
         filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/add_images', methods=['POST'])
def add_images():
  if 'images' not in request.files:
    return jsonify({'error': 'missing images'}), 400

  skinName = request.form.get('skinName')
  if skinName is None:
    return jsonify({'error': 'missing skin name'}), 400

  files = request.files.getlist('images')
  response = {'skinName': skinName, 'uploaded_files': []}
  for file in files:
    if file.filename == '':
      return jsonify({'error': 'no selected file'}), 400
    if file and allowed_file(file.filename):
      filename = secure_filename(file.filename)
      filepath = os.path.join(UPLOAD_FOLDER, filename)
      file.save(filepath)

      # You can perform basic image processing here without TensorFlow
      # (e.g., resize, convert format)

      # ... (your basic image processing logic)

      response['uploaded_files'].append({
        'filename': filename,
        # Add additional details about the processed image (optional)
      })
      os.remove(filepath)  # Optionally remove the temporary file
    else:
      return jsonify({'error': 'allowed file types are png, jpg, jpeg'})

  return jsonify(response)

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', port=5000)
