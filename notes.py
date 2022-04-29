import flask
app = flask.Flask("notes")

def get_html(page_name):
    html_file = open(page_name + ".html")
    content = html_file.read()
    html_file.close()
    return content

# Function to add a new note
def get_new_note():
    notesdb = open("notes.txt", "a")
    new_note = flask.request.args.get("n")
    notesdb.write("\n" + new_note)
    notesdb.close()

# Function to gather and split all the existing notes
def get_notes():
    notesdb = open("notes.txt")
    content = notesdb.read()
    notesdb.close()
    notes = content.split("\n")
    return notes

@app.route("/")
def home():
    return get_html("index")

@app.route("/add_note")
def add_note():
    return get_html("add_note")

@app.route("/added_note")
def added_note():
    get_new_note()
    return get_html("added_note")

@app.route("/search")
def search():
    return get_html("search")
    
@app.route("/result")
def result():
    html_page = get_html("result")
    expression = flask.request.args.get("q")
    result = get_notes()
    note = ""
    for list in result:
        if list.lower().find(expression.lower()) != -1:
            note += "<p>" + list + "</p>" + "-----------"
    if note == "":
        note = "<p>None</p>"
    return html_page.replace("$$RESULT$$", note)

@app.route("/all_notes")
def all_notes():
    html_page = get_html("all_notes")
    all_notes = get_notes()
    actual_values = ""
    for note in all_notes:
        actual_values += "<p>" + note + "</p>" + "-----------"
    return html_page.replace("$$ALLNOTES$$", actual_values)
