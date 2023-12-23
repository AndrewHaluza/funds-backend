import type { Schema, Attribute } from '@strapi/strapi';

export interface RequisitesCreditCard extends Schema.Component {
  collectionName: 'components_requisites_credit_cards';
  info: {
    displayName: 'Credit Card';
    icon: 'plus';
    description: '';
  };
  attributes: {
    bankDisplayName: Attribute.String & Attribute.Required;
    creditCardNumber: Attribute.String & Attribute.Required;
  };
}

export interface RequisitesCryptocurrency extends Schema.Component {
  collectionName: 'components_requisites_cryptocurrencies';
  info: {
    displayName: 'Cryptocurrency';
    icon: 'plus';
  };
  attributes: {
    cryptocurrencyDisplayName: Attribute.String;
    walletAddress: Attribute.String;
  };
}

export interface RequisitesMonobanka extends Schema.Component {
  collectionName: 'components_requisites_monobankas';
  info: {
    displayName: 'Monobanka';
    icon: 'plus';
  };
  attributes: {
    link: Attribute.String;
  };
}

export interface RequisitesRequisites extends Schema.Component {
  collectionName: 'components_requisites_requisites';
  info: {
    displayName: 'IBAN';
    icon: 'plus';
    description: '';
  };
  attributes: {
    bankDisplayName: Attribute.String;
    IBAN: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'requisites.credit-card': RequisitesCreditCard;
      'requisites.cryptocurrency': RequisitesCryptocurrency;
      'requisites.monobanka': RequisitesMonobanka;
      'requisites.requisites': RequisitesRequisites;
    }
  }
}
