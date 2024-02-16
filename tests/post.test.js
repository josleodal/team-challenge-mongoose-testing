const request = require("supertest");
const app = require("../index.js");
const Post = require("../models/Post")

describe("testing/post", () => {

    const user ={
        "title": "Hacer la tarea",
        "body":"Hacer la tarea"
      } 
   
});

test("Create a post", async () => {
    let postCount = await Post.countDocuments({});

    expect(postCount).toBe(0);

    resUser = await request(app).post("/create").send(user).expect(201);
    

 usersCount = await Post.countDocuments({});

    expect(postCount).toBe(1);
});


describe("testing/users", () => { 
    afterAll(() => {
    return Post.deleteMany();
    });
});

/*
test("Create a user", async () => {
    resUser = await request(app).post("/create").send(user).expect(201);
    expect(resUser.body.user._id).toBeDefined();
    expect(resUser.body.user.createdAt).toBeDefined();
    expect(resUser.body.user.updatedAt).toBeDefined();
});

describe("testing/users", () => { 
    afterAll(() => {
    return User.deleteMany();
    });
});
 
test("Create a user", async () => {
    let usersCount = await User.countDocuments({});
    expect(usersCount).toBe(0);
    resUser = await request(app).post("/create").send(user).expect(201);

    usersCount = await User.countDocuments({});
    expect(usersCount).toBe(1);
    expect(resUser.body.user._id).toBeDefined();
    expect(resUser.body.user.createdAt).toBeDefined();
    expect(resUser.body.user.updatedAt).toBeDefined();
});

const { User } = require("../models/Post.js");

describe("testing/users", () => { 
    afterAll(() => {
    return User.deleteMany();
    });
});*/
