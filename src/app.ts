interface user {
  id: number;
  name: string;
  age: number;

  info(): string;
}

const aliUser: user = {
  id: 12,
  name: "Alireza",
  age: 17,
  info() {
    return `${this.id} - ${this.name} - ${this.age}`;
  },
};

console.log(aliUser.info());
