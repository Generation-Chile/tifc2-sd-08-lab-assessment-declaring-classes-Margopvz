export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experiencia = 0 // llevar la cuenta de la experiencia 
    this.experienciaUp = 25; // la cantidad para subir de nivel 
  }
  info(){
    console.log(`${this.name} Alcanzaste el nivel  ${this.level}!`);
  }
  levelUp(){
    this.level++ ;
  }
 
  }

  