from flask import Flask, request, jsonify

app = Flask(__name__)

todos = [{
    'id': '123',
    'text': 'Add a server',
    'isCompleted': True
}]


@app.route('/todos', methods=['GET'])
def get_todos():
    return jsonify(todos)


@app.route('/todos', methods=['POST'])
def create_todo():
    new_todo = {
        "id": str(int(__import__("time").time() * 1000)),
        "text": request.json.get("text"),
        "isCompleted": False
    }
    todos.append(new_todo)
    return jsonify(new_todo)


@app.route('/todos/<id>', methods=['DELETE'])
def delete_todo(id):
    global todos
    todos = [todo for todo in todos if todo["id"] != id]
    return '', 204


@app.route('/todos/<id>', methods=['PUT'])
def update_todo(id):
    updated_data = request.json

    for todo in todos:
        if todo["id"] == id:
            todo.update(updated_data)
            return jsonify(todo)

    return jsonify({"message": "Todo not found"}), 404


if __name__ == '__main__':
    app.run(port=3000, debug=True)
