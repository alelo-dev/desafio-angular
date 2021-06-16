import { Injectable } from '@angular/core';
// Problemas - fazer ele inserir o cartão de crédito e o pagamento no mesmo servico

@Injectable({
  providedIn: 'any'
})
export class PaymentsService {
  public card: string = '';
  public cardBallance = 0;
  public validDate: String;
  public cvv: Number;
  /**
   * Os tipos podem ser:
   * Débito
   * Crédito
   * Alimentação
   * Refeição
   * Benefício
   */
  public creditCardType: string;

  constructor() { }

  protected pay ( ammount: any, card: Number ): boolean {
    if ( this.card && this.cardBallance >= ammount ) {
      this.cardBallance = this.cardBallance - ammount;
      return false;
    }
    return true;
  }

  protected setCard (card: Number, validDate: any, cvv: number, cardBallance: number,  creditCardType?: string ): void {
    this.card = String(card);
    this.validDate = String(validDate);
    this.cvv = cvv;
    this.cardBallance = cardBallance;
    this.creditCardType = creditCardType;
    // salvando os itens
    this.saveItem('card-number',this.card);
    this.saveItem('card-date',this.validDate);
    this.saveItem('card-cvv',this.cvv);
    this.saveItem('card-ammount', this.cardBallance);
    this.saveItem('card-type', this.creditCardType);

  }

  public getCard(): any {
    return { 
      ...[
        this.getItem('card-number'),
        this.getItem('card-date'),
        this.getItem('card-cvv'),
        this.getItem('card-ammount'),
        this.getItem('card-type'),
      ] 
    };
  }

  saveItem(key, item) {
    if (key === 'card') {
      localStorage.setItem(key, JSON.stringify(item) );
    } else if (key === 'card-type') {
      localStorage.setItem(key, JSON.stringify(item));
    } else if (key === 'card-ammount') {
      localStorage.setItem(key, JSON.stringify(item));
    } else if (key === 'card-date') {
      localStorage.setItem(key, JSON.stringify(item));
    } else if (key === 'card-cvv') {
      localStorage.setItem(key, JSON.stringify(item));
    } else if (key === 'card-number') {
      return localStorage.setItem(key, JSON.stringify(item));
    } else {
      console.log('chave de cartão desconhecida')
    }

  }

  getItem(key: any): any {
    if (key === 'card') {
      return localStorage.getItem(key);
    } else if (key === 'card-type') {
      return localStorage.getItem(key);
    } else if (key === 'card-ammount') {
      return localStorage.getItem(key);
    } else if (key === 'card-date') {
      return localStorage.getItem(key);
    } else if (key === 'card-cvv') {
      return localStorage.getItem(key);
    } else if (key === 'card-number') {
      return localStorage.getItem(key);
    } else {
      console.log('chave desconhecida');
    }
  }
}
