var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OperacaoMatematica = /** @class */ (function () {
    function OperacaoMatematica() {
    }
    OperacaoMatematica.prototype.getOperando1 = function () {
        return this.operando1;
    };
    OperacaoMatematica.prototype.setOperando1 = function (operando1) {
        this.operando1 = operando1;
    };
    OperacaoMatematica.prototype.getOperando2 = function () {
        return this.operando2;
    };
    OperacaoMatematica.prototype.setOperando2 = function (operando2) {
        this.operando2 = operando2;
    };
    OperacaoMatematica.prototype.calcular = function () {
        return 0;
    };
    OperacaoMatematica.prototype.mostrarResultado = function () {
        console.log(this.calcular());
    };
    return OperacaoMatematica;
}());
var Adicao = /** @class */ (function (_super) {
    __extends(Adicao, _super);
    function Adicao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adicao.prototype.calcular = function () {
        return this.getOperando1() + this.getOperando2();
    };
    return Adicao;
}(OperacaoMatematica));
var Subtracao = /** @class */ (function (_super) {
    __extends(Subtracao, _super);
    function Subtracao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subtracao.prototype.calcular = function () {
        return this.getOperando1() - this.getOperando2();
    };
    return Subtracao;
}(OperacaoMatematica));
var Multiplicacao = /** @class */ (function (_super) {
    __extends(Multiplicacao, _super);
    function Multiplicacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplicacao.prototype.calcular = function () {
        return this.getOperando1() * this.getOperando2();
    };
    return Multiplicacao;
}(OperacaoMatematica));
var Divisao = /** @class */ (function (_super) {
    __extends(Divisao, _super);
    function Divisao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divisao.prototype.calcular = function () {
        return this.getOperando1() / this.getOperando2();
    };
    return Divisao;
}(OperacaoMatematica));
var adicao = new Adicao();
adicao.setOperando1(10);
adicao.setOperando2(20);
adicao.mostrarResultado();
