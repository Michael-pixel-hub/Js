//es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
};
alert('d')

Post.prototype.edit = function(text) {
    this.text = text;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
};

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};

let obj1 = new Post('Миша', 'sadfs', '01.10.1996');

let obj2 = new AttachedPost();
obj2.edit('привет');
obj2.makeTextHighlighted();

//es6

class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let obj3 = new Post2('Миша', 'sadfs', '01.10.1996');

let obj4 = new AttachedPost2();
obj4.edit('привет');
obj4.makeTextHighlighted();