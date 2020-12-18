
class File {
    constructor(name, content, id = Math.random()) {
        this.name = name;
        this.content = content;
        this.id = id;
    }
}

export {File}
