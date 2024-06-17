class OperacaoMatematica {
    private operando1: number;
    private operando2: number;

    getOperando1(): number {
        return this.operando1;  

    }

    setOperando1(operando1: number): void {
        this.operando1 = operando1;
    }

    getOperando2(): number {
        return this.operando2;
    }

    setOperando2(operando2: number): void{
        this.operando2 = operando2;
    }

    calcular(): number {
        return 0;
    }   

    mostrarResultado(): void {
        console.log(this.calcular());
    }

}

class Adicao extends OperacaoMatematica {
    public calcular(): number {
        return this.getOperando1() + this.getOperando2();
    }
}

class Subtracao extends OperacaoMatematica {
    public calcular(): number {
        return this.getOperando1() - this.getOperando2();
    }
}

class Multiplicacao extends OperacaoMatematica {
    public calcular(): number {
        return this.getOperando1() * this.getOperando2();
    }
}   

class Divisao extends OperacaoMatematica {
    public calcular(): number {
        return this.getOperando1() / this.getOperando2();
    }
}


const adicao = new Adicao();

adicao.setOperando1(10);
adicao.setOperando2(20);

adicao.mostrarResultado();