class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    
    attack(){
      switch (this.tipo) {
        case 'Mago':
          console.log(`O ${this.tipo} ${this.nome} atacou usando magia`);
          break;
        case 'Gurreiro':
          console.log(`O ${this.tipo} ${this.nome} atacou usando espada`);
          break;
          case 'Monge':
          console.log(`O ${this.tipo} ${this.nome} atacou usando artes marciais`);
          break;
          default:
          console.log(`O ${this.tipo} ${this.nome} atacou usando shuriken`);
    }
    }
    }
  const mago = new Hero("Gabriel", 22, "Mago")
  mago.attack()
  const guerreiro = new Hero("Jojiberto", 42, "Guerreiro")
  guerreiro.attack()
  const monge = new Hero("Jubriscreide", 31, "Monge")
  monge.attack()
  const ninja = new Hero("Naruto", 22, "Ninja")
  ninja.attack()