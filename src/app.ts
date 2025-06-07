interface user {
  id: number;
  name: string;
  age?: number;

  info(): string;
}

const aliUser: user = {
  id: 12,
  name: "Alireza",
  info() {
    return `${this.id} - ${this.name}`;
  },
};

console.log(aliUser.info());
